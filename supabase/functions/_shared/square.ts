// Shared Square API helper for the Edge Functions in this project.
// SQUARE_ACCESS_TOKEN / SQUARE_LOCATION_ID / SQUARE_WEBHOOK_SIGNATURE_KEY /
// SQUARE_ENV are Supabase secrets (set via `supabase secrets set`) —
// never exposed to the browser. There is no public/client key needed
// client-side at all for this flow, since checkout happens on Square's
// own hosted page, not in an embedded card field on our site.

const SQUARE_ENV = Deno.env.get('SQUARE_ENV') || 'sandbox';
export const SQUARE_BASE = SQUARE_ENV === 'production'
  ? 'https://connect.squareup.com'
  : 'https://connect.squareupsandbox.com';

export function squareHeaders() {
  const token = Deno.env.get('SQUARE_ACCESS_TOKEN');
  if (!token) throw new Error('Square access token is not configured on the server.');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Square-Version': '2024-10-17',
  };
}

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
