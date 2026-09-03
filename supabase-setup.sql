-- Run this in Supabase's SQL Editor (Project → SQL Editor → New query).
-- Sign-up / login / password reset already work automatically once
-- SUPABASE_CONFIG is filled in — no SQL needed for those.

-- ============================================================
-- 1. Contact form enquiries
-- ============================================================
create table if not exists contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  topic text not null,
  message text not null
);

alter table contact_enquiries enable row level security;

create policy "Anyone can submit an enquiry"
  on contact_enquiries
  for insert
  to anon, authenticated
  with check (true);

-- ============================================================
-- 2. Profiles — the REAL, server-trusted record of what plan a
--    user has paid for. This is written only by the
--    square-webhook Edge Function (via the service role key, which
--    bypasses RLS) after Square confirms a real payment — never
--    directly by the browser. That's what makes "cannot downgrade"
--    and "must pay before dashboard unlocks" actually enforceable
--    rather than just a client-side suggestion.
-- ============================================================
create table if not exists profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text,
  paid boolean not null default false,
  square_payment_id text,
  updated_at timestamptz not null default now()
);

-- Safe to re-run: adds the column if this table already existed from
-- an earlier version of this script.
alter table profiles add column if not exists square_payment_id text;

alter table profiles enable row level security;

-- Users can read their own plan/paid status (needed so the site can
-- show the right dashboard) but cannot write it themselves.
drop policy if exists "Users can read their own profile" on profiles;
create policy "Users can read their own profile"
  on profiles
  for select
  to authenticated
  using (auth.uid() = user_id);

-- ============================================================
-- 3. Checkout sessions — internal plumbing only. Square's
--    order.reference_id is capped at 40 characters, too short to
--    carry a user id + plan name directly, so create-square-checkout
--    stashes that pairing here under a short random id, and
--    square-webhook looks it back up once payment is confirmed.
--    No RLS policies at all on purpose: only the Edge Functions
--    (via the service role key) ever touch this table.
-- ============================================================
create table if not exists checkout_sessions (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_key text not null,
  created_at timestamptz not null default now()
);

alter table checkout_sessions enable row level security;
