// Saves a contact-form enquiry and emails a notification to the site
// owner. Works for anonymous marketing-site visitors and logged-in
// users alike — no auth required beyond the standard anon key the
// Supabase client already sends.
//
// Email delivery uses Resend (RESEND_API_KEY, a Supabase secret). If
// that secret isn't set yet, the enquiry is still saved to the
// database — email sending is skipped rather than failing the whole
// request, so this function is safe to deploy before Resend is wired
// up and will simply start sending once the key is added.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { CORS_HEADERS } from '../_shared/square.ts';

const CONTACT_RECIPIENT = 'rayyanahmad2021rs@gmail.com';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  try {
    const { name, email, topic, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );
    const { error: dbError } = await supabaseAdmin
      .from('contact_enquiries')
      .insert({ name, email, topic: topic || 'General enquiry', message });
    if (dbError) throw new Error('Could not save your enquiry.');

    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TwoStepsFurther <onboarding@resend.dev>',
          to: [CONTACT_RECIPIENT],
          reply_to: email,
          subject: `New enquiry (${topic || 'General enquiry'}) from ${name}`,
          text: `From: ${name} <${email}>\nTopic: ${topic || 'General enquiry'}\n\n${message}`,
        }),
      });
      if (!emailRes.ok) {
        // Enquiry is already saved even if the email notification fails —
        // don't fail the visitor's submission over a delivery problem.
        console.error('Resend error:', await emailRes.text());
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
});
