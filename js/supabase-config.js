/* ==================================================================
   Connect Supabase (optional) — real accounts, real sessions, and
   Google sign-in. Leave both fields blank to keep running in demo
   mode: fake local-only accounts, no Google sign-in.

   How to connect:
   1. Create a free project at https://supabase.com
   2. In your project: Settings → API → copy the "Project URL" and
      the "anon public" key into SUPABASE_CONFIG below.
   3. To enable "Continue with Google": Authentication → Providers →
      Google → turn it on and add a Google OAuth client ID/secret
      (create one at https://console.cloud.google.com/apis/credentials).
      Then add this site's URL under Authentication → URL Configuration
      → Redirect URLs (e.g. http://localhost:8735 while testing, and
      your real domain once deployed).
   4. Reload the site — the login/sign-up page will detect the
      connection automatically and switch out of demo mode.
   5. Optional — to make the Contact page's enquiry form actually save
      submissions, create a table called "contact_enquiries" with columns
      name (text), email (text), topic (text), message (text), and add a
      Row Level Security policy allowing anon INSERT. Without this table,
      the form still works but tells visitors honestly that nothing was
      actually sent.
   ================================================================== */

const SUPABASE_CONFIG = {
  url: 'https://yfdcwbulrjkgecsibsdi.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmZGN3YnVscmprZ2Vjc2lic2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MzU2NDUsImV4cCI6MjEwNDAxMTY0NX0.gFOaxqqA2ewBt_NkljSrD2n5EQ4SDuJG7q7NB7a8eRg',
};
