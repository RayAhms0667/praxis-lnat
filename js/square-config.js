/* ==================================================================
   Connect Square (optional) — real one-off payments for plans.
   Leave enabled: false to keep the "Confirm & pay" button in demo
   mode (no real charge). Requires Supabase to also be connected
   (see js/supabase-config.js), since checkout creation and payment
   confirmation both happen through Supabase Edge Functions — see
   supabase/functions/README.md for the full deploy steps.

   Unlike Stripe/PayPal, Square's hosted Payment Links need no public
   key in the browser at all: the payment page runs entirely on
   Square's own domain, and confirmation arrives via a server-to-server
   webhook, not anything the browser reports back. So this file is
   just an on/off switch — every real credential lives in Supabase
   secrets, never in this repo.

   How to connect:
   1. Create a free account at https://developer.squareup.com/us/en
   2. Dashboard → your app → Sandbox (for testing) → copy the
      "Sandbox Access Token" and a "Location ID" (Locations tab).
   3. Follow supabase/functions/README.md to set those as Supabase
      secrets and deploy the two Edge Functions.
   4. Register the deployed square-webhook URL in Square's dashboard
      under Webhooks, subscribed to "payment.updated".
   5. Set enabled: true below and reload — the payment page will show
      a real "Pay with Square" button instead of the demo one.
   6. When ready for real charges: switch to a Production access
      token + location in Square, update the Supabase secrets
      (SQUARE_ENV=production), and this file doesn't need to change.
   ================================================================== */

const SQUARE_CONFIG = {
  enabled: true,
};
