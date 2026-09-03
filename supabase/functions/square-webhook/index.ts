// Square calls this endpoint directly (not the browser) the moment a
// payment completes. This — not the customer's browser returning from
// checkout — is the one and only place access is actually granted,
// which is why it matters that the signature is verified: without
// that check, anyone who found this URL could fake a "payment
// completed" event and grant themselves a free plan.
//
// Register this function's URL in the Square dashboard under
// Developer → Webhooks, subscribed to the "payment.updated" event,
// and set SQUARE_WEBHOOK_URL to that exact URL (Square signs against
// the literal registered URL, so it must match exactly).

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SQUARE_BASE, squareHeaders, CORS_HEADERS } from '../_shared/square.ts';

const RANKS: Record<string, number> = { 'crash-course': 1, intensive: 2, masterclass: 3 };

async function verifySquareSignature(rawBody: string, signatureHeader: string | null): Promise<boolean> {
  const key = Deno.env.get('SQUARE_WEBHOOK_SIGNATURE_KEY');
  const notificationUrl = Deno.env.get('SQUARE_WEBHOOK_URL');
  if (!key || !notificationUrl || !signatureHeader) return false;

  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    'raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const sigBuf = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(notificationUrl + rawBody));
  const expected = btoa(String.fromCharCode(...new Uint8Array(sigBuf)));
  return expected === signatureHeader;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-square-hmacsha256-signature');

    const valid = await verifySquareSignature(rawBody, signature);
    if (!valid) {
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const event = JSON.parse(rawBody);
    const payment = event?.data?.object?.payment;
    if (event.type !== 'payment.updated' || !payment || payment.status !== 'COMPLETED' || !payment.order_id) {
      // Not the event we care about (e.g. a pending/failed payment) — acknowledge and ignore.
      return new Response(JSON.stringify({ received: true }), { headers: CORS_HEADERS });
    }

    const orderRes = await fetch(`${SQUARE_BASE}/v2/orders/${payment.order_id}`, { headers: squareHeaders() });
    const orderData = await orderRes.json();
    const sessionId: string = orderData?.order?.reference_id || '';

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: checkoutSession } = await supabaseAdmin
      .from('checkout_sessions')
      .select('user_id, plan_key')
      .eq('id', sessionId)
      .maybeSingle();
    const userId = checkoutSession?.user_id;
    const planKey = checkoutSession?.plan_key;
    if (!userId || !planKey || !RANKS[planKey]) {
      return new Response(JSON.stringify({ received: true, skipped: 'no matching checkout session' }), { headers: CORS_HEADERS });
    }

    const { data: existing } = await supabaseAdmin
      .from('profiles')
      .select('plan, paid')
      .eq('user_id', userId)
      .maybeSingle();

    // Upgrade-only, enforced here — this is the real rule, not just the UI.
    if (existing?.paid && RANKS[planKey] <= RANKS[existing.plan as string]) {
      return new Response(JSON.stringify({ received: true, skipped: 'not an upgrade' }), { headers: CORS_HEADERS });
    }

    await supabaseAdmin.from('profiles').upsert({
      user_id: userId,
      plan: planKey,
      paid: true,
      square_payment_id: payment.id,
      updated_at: new Date().toISOString(),
    });

    // One-time use — stops this same session id being replayed.
    await supabaseAdmin.from('checkout_sessions').delete().eq('id', sessionId);

    return new Response(JSON.stringify({ received: true }), { headers: CORS_HEADERS });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
});
