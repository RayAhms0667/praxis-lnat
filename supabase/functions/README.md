# Deploying the Square Edge Functions

Two Supabase Edge Functions make real Square payments work:

- `create-square-checkout` — creates a Square hosted Payment Link for the plan a signed-in user picked
- `square-webhook` — the endpoint Square calls directly once a payment actually completes; this is the only place `profiles.plan`/`paid` gets written

Neither can run without deploying them to your Supabase project and giving them Square credentials as secrets.

## 1. Get a Supabase Personal Access Token

The CLI's normal browser login doesn't work in a sandboxed environment, so use a token instead:

1. Go to https://supabase.com/dashboard/account/tokens
2. Generate a new token, copy it
3. Send it here (or run the commands below yourself with `SUPABASE_ACCESS_TOKEN=<token>` set)

## 2. Get Square credentials (Sandbox first)

1. Create a free account at https://developer.squareup.com/us/en
2. In your app's dashboard, make sure you're viewing **Sandbox**
3. Copy the **Sandbox Access Token**
4. Go to the **Locations** tab, copy a **Location ID**
5. Go to **Webhooks**, create a subscription for the **`payment.updated`** event — Square will ask for a URL; use `https://<project-ref>.supabase.co/functions/v1/square-webhook` (you'll get the exact URL after step 4 below). Square will show you a **Signature Key** — copy it.

## 3. Link the project and deploy

```bash
export SUPABASE_ACCESS_TOKEN=<your personal access token>
npx supabase link --project-ref yfdcwbulrjkgecsibsdi
npx supabase functions deploy create-square-checkout
npx supabase functions deploy square-webhook --no-verify-jwt
```

**`--no-verify-jwt` on `square-webhook` is not optional.** Supabase's gateway
normally rejects any request without a Supabase auth header before your code
ever runs — but Square's webhook calls only ever carry Square's own
`x-square-hmacsha256-signature` header, never a Supabase one. Without this
flag, every real payment webhook silently 401s at the gateway, the function's
own (correct) signature check never gets a chance to run, and customers who
paid never get unlocked. `create-square-checkout` should **not** get this
flag — that one is called by our own signed-in users and should keep
Supabase's normal auth check.

## 4. Set the secrets

```bash
npx supabase secrets set \
  SQUARE_ACCESS_TOKEN=<sandbox access token> \
  SQUARE_LOCATION_ID=<location id> \
  SQUARE_ENV=sandbox \
  SQUARE_WEBHOOK_SIGNATURE_KEY=<signature key from step 2.5> \
  SQUARE_WEBHOOK_URL=https://yfdcwbulrjkgecsibsdi.supabase.co/functions/v1/square-webhook
```

`SQUARE_WEBHOOK_URL` must match **exactly** what you registered in Square's dashboard — Square signs against that literal string.

## 5. Turn it on

Set `enabled: true` in `js/square-config.js` and reload the site. Test with [Square's sandbox test cards](https://developer.squareup.com/docs/testing/test-values).

## 6. Going live later

Switch your Square app to Production, get a Production access token + location, register a new webhook subscription for the production URL, then re-run step 4 with the production values and `SQUARE_ENV=production`. Nothing in the site's own code needs to change.
