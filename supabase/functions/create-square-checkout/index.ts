// Creates a Square hosted Payment Link for the plan the signed-in user
// picked, and returns its URL for the browser to redirect to. Square's
// checkout page collects the card — it never touches our code, so we
// have no PCI-compliance burden. The price is looked up server-side
// from PLAN_PRICES; the client only ever sends a plan *key*.
//
// Square's order.reference_id is capped at 40 characters — too short to
// hold "<userId>:<planKey>" directly (a UUID alone is already 36). So a
// bare random UUID goes in reference_id, and the actual user/plan pair
// is stashed in the checkout_sessions table under that same id. The
// webhook (see square-webhook/index.ts) looks it back up once Square
// confirms the payment — that confirmation, not this function, is what
// actually grants access.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SQUARE_BASE, squareHeaders, CORS_HEADERS } from '../_shared/square.ts';

// Amounts are in minor units (pence) — Square's API requirement.
const PLAN_PRICES: Record<string, number> = {
  'crash-course': 4500,
  'intensive': 8000,
  'masterclass': 13000,
};
const PLAN_NAMES: Record<string, string> = {
  'crash-course': 'TwoStepsFurther — Crash Course',
  'intensive': 'TwoStepsFurther — Intensive',
  'masterclass': 'TwoStepsFurther — Masterclass',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  try {
    const authHeader = req.headers.get('Authorization') || '';
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const { planKey, returnUrl } = await req.json();
    const amount = PLAN_PRICES[planKey];
    if (!amount || !returnUrl) {
      return new Response(JSON.stringify({ error: 'Missing or unknown plan' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const locationId = Deno.env.get('SQUARE_LOCATION_ID');
    if (!locationId) throw new Error('Square location is not configured on the server.');

    // Record which user/plan this checkout is for, under a short id that
    // fits Square's reference_id limit. Locked down by RLS — only this
    // function (via the service role key) can read or write it.
    const sessionId = crypto.randomUUID();
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );
    const { error: sessionErr } = await supabaseAdmin.from('checkout_sessions').insert({
      id: sessionId,
      user_id: user.id,
      plan_key: planKey,
    });
    if (sessionErr) throw new Error('Could not start checkout session.');

    const res = await fetch(`${SQUARE_BASE}/v2/online-checkout/payment-links`, {
      method: 'POST',
      headers: squareHeaders(),
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        order: {
          location_id: locationId,
          reference_id: sessionId,
          line_items: [{
            name: PLAN_NAMES[planKey],
            quantity: '1',
            base_price_money: { amount, currency: 'GBP' },
          }],
        },
        checkout_options: {
          redirect_url: returnUrl,
        },
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Could not create Square checkout', details: data }), {
        status: 502,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ url: data.payment_link.url }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
});
