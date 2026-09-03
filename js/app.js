/* Praxis LNAT — app logic. Vanilla JS, no build step. */

const APP = document.getElementById('app');
const HEADER_NAV = document.getElementById('header-nav');
const HEADER_ACTION = document.getElementById('header-action');

/* Subscription tiers. Papers/essays/MCQs are placeholders for now — the app
   shows the correct counts and structure per tier, but the questions
   themselves haven't been written yet (see js/data.js for what's real). */
const TIERS = {
  'crash-course': { key: 'crash-course', rank: 1, name: 'Crash Course', price: '£45', period: 'one-off', papers: 7, essays: 7, mcq: 70 },
  'intensive': { key: 'intensive', rank: 2, name: 'Intensive', price: '£80', period: 'one-off', papers: 15, essays: 15, mcq: 120 },
  'masterclass': { key: 'masterclass', rank: 3, name: 'Masterclass', price: '£130', period: 'one-off', papers: 25, essays: 25, mcq: 200 },
};
function getTier() {
  const key = state.auth && state.auth.plan;
  return (key && TIERS[key]) || null;
}

const state = {
  area: 'marketing', // 'marketing' (public site) | 'auth' (log in / sign up page) | 'app' (gated practice tool)
  route: 'dashboard', // used only while area === 'app' — includes onboarding steps 'choose-plan' / 'payment'
  accountTab: 'profile', // 'profile' | 'security' | 'verification' | 'subscription' — used only while route === 'account'
  marketingRoute: 'home', // 'home' | 'about' | 'pricing' | 'free-practice' | 'contact' — used only while area === 'marketing'
  authMode: 'login', // 'login' | 'signup' — used only while area === 'auth'
  authError: null,
  selectedPlan: 'intensive', // plan pre-picked from a pricing card, carried into sign-up
  planPreselected: false, // true only when selectedPlan came from an explicit pricing-card click
  pendingPlan: null, // plan awaiting payment confirmation
  paymentReturn: null, // 'dashboard' (first-time onboarding) | 'account' (upgrading later)
  auth: null, // { email, name?, plan, paid } once logged in — plan/paid are null/false until checkout completes
  marketingPractice: { qIndex: 0, answers: {} }, // free-practice teaser (uses PASSAGES[0])
};

/* ---------------- Supabase-backed auth (falls back to local demo mode) ----------------
   SUPABASE_CONFIG comes from js/supabase-config.js. Until it's filled in, every
   function below runs in "demo mode": accounts are fake and only exist in this
   browser's localStorage. Fill in that file and reload to switch to real accounts. */
const supabaseClient = (typeof SUPABASE_CONFIG !== 'undefined' && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey && window.supabase)
  ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
  : null;

async function authSignUp(name, email, password) {
  if (supabaseClient) {
    const { data, error } = await supabaseClient.auth.signUp({
      email, password, options: { data: { name } },
    });
    if (error) throw error;
    if (!data.session) {
      // The Supabase project requires email confirmation before a session exists.
      throw new Error('Check your inbox to confirm your email, then log in.');
    }
    return { id: data.user.id, email, name };
  }
  return { email, name }; // demo mode: no real account is created
}

async function authSignIn(email, password) {
  if (supabaseClient) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return {
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata && data.user.user_metadata.name,
    };
  }
  return { email }; // demo mode: any credentials "work"
}

async function authSignInWithGoogle() {
  if (!supabaseClient) {
    throw new Error('Connect Supabase (see js/supabase-config.js) to enable Google sign-in.');
  }
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.href },
  });
  if (error) throw error;
  // On success the browser navigates to Google, then back here — nothing more to do.
}

/* ---------------- persistence ---------------- */
function loadAuth() {
  try { return JSON.parse(localStorage.getItem('praxis_auth') || 'null'); }
  catch (e) { return null; }
}
function saveAuth(a) { localStorage.setItem('praxis_auth', JSON.stringify(a)); }
function clearAuth() { localStorage.removeItem('praxis_auth'); }

// The server-trusted record of what a user actually paid for. Only
// meaningful once Supabase (and ideally Square) is connected — the
// square-webhook Edge Function is the only thing that ever writes to
// this table, so unlike localStorage it can't be edited by the user.
async function fetchProfile(userId) {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('plan, paid')
      .eq('user_id', userId)
      .maybeSingle();
    if (error) return null;
    return data; // null if no row yet (no plan chosen/paid for)
  } catch (e) {
    return null;
  }
}

// Decide where plan/paid come from. Once Square is actually wired up,
// the profiles table (written only by the webhook) is the truth and
// localStorage is just a cache. Until then — no Square, or no
// Supabase at all — localStorage is the only record there is.
async function resolvePlanAndPaid(userId, prevAuth) {
  if (supabaseClient && typeof SQUARE_CONFIG !== 'undefined' && SQUARE_CONFIG.enabled) {
    const profile = await fetchProfile(userId);
    return { plan: (profile && profile.plan) || null, paid: !!(profile && profile.paid) };
  }
  return { plan: (prevAuth && prevAuth.plan) || null, paid: !!(prevAuth && prevAuth.paid) };
}

function loadTeaserEssays() {
  try { return JSON.parse(localStorage.getItem('praxis_teaser_essays') || '{}'); }
  catch (e) { return {}; }
}
function saveTeaserEssays(d) { localStorage.setItem('praxis_teaser_essays', JSON.stringify(d)); }

/* ---------------- helpers ---------------- */
function letter(i) { return String.fromCharCode(65 + i); }
function el(html) {
  const d = document.createElement('div');
  d.innerHTML = html.trim();
  // Single top-level element: return it directly. Multiple top-level
  // elements (a view template with several sibling sections): return
  // the wrapper div itself so none of the content is silently dropped.
  return d.children.length === 1 ? d.children[0] : d;
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function wordCount(text) {
  const t = text.trim();
  return t.length ? t.split(/\s+/).length : 0;
}

function go(route, opts) {
  state.route = route;
  Object.assign(state, opts || {});
  render();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function goToMarketingPage(page) {
  state.area = 'marketing';
  state.marketingRoute = page;
  render();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function handleLogout() {
  // Logging out ends the session only — it must not erase the saved
  // account record (plan/paid), or logging back in would lose them.
  state.auth = null;
  state.area = 'marketing';
  state.marketingRoute = 'home';
  state.route = 'dashboard';
  state.pendingPlan = null;
  state.paymentReturn = null;
  if (supabaseClient) supabaseClient.auth.signOut();
  render();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function goToAuth(mode, plan) {
  state.area = 'auth';
  state.authMode = mode === 'signup' ? 'signup' : 'login';
  state.authError = null;
  if (plan && TIERS[plan]) {
    state.selectedPlan = plan;
    state.planPreselected = true;
  } else if (mode === 'signup') {
    state.planPreselected = false;
  }
  render();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------------- confirm modal ---------------- */
function showConfirm(title, msg, confirmLabel, onConfirm) {
  const bg = el(`<div class="confirm-modal-bg">
    <div class="confirm-modal">
      <h3>${escapeHtml(title)}</h3>
      <p>${msg}</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" id="cm-cancel">Cancel</button>
        <button class="btn btn-primary" id="cm-ok">${escapeHtml(confirmLabel)}</button>
      </div>
    </div>
  </div>`);
  document.body.appendChild(bg);
  bg.querySelector('#cm-cancel').onclick = () => bg.remove();
  bg.addEventListener('click', (e) => { if (e.target === bg) bg.remove(); });
  bg.querySelector('#cm-ok').onclick = () => { bg.remove(); onConfirm(); };
}

/* ==================================================================
   HEADER — differs between the public marketing site and the gated app
   ================================================================== */
function renderHeader() {
  if (state.area === 'marketing') {
    HEADER_NAV.innerHTML = `
      <button data-page="home">Home</button>
      <button data-page="about">About</button>
      <button data-page="pricing">Pricing</button>
      <button data-page="free-practice">Free&nbsp;practice</button>
      <button data-page="contact">Contact</button>
    `;
    HEADER_NAV.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.page === state.marketingRoute);
    });
    HEADER_ACTION.innerHTML = `
      <button class="btn btn-ghost btn-sm" data-auth="login">Log in</button>
      <button class="btn btn-sm btn-primary" data-auth="signup">Sign up</button>
    `;
  } else if (state.area === 'auth') {
    HEADER_NAV.innerHTML = '';
    HEADER_ACTION.innerHTML = `<button class="btn btn-ghost btn-sm" id="back-home-btn">Back to home</button>`;
    HEADER_ACTION.querySelector('#back-home-btn').onclick = () => goToMarketingPage('home');
  } else {
    HEADER_NAV.innerHTML = `
      <button data-nav="dashboard">Dashboard</button>
      <button data-nav="section-a">Section&nbsp;A</button>
      <button data-nav="section-b">Section&nbsp;B</button>
      <button data-nav="mcq">MCQ&nbsp;Quick&nbsp;Practice</button>
    `;
    HEADER_NAV.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.nav === state.route);
      b.onclick = () => go(b.dataset.nav);
    });
    const emailLabel = state.auth && state.auth.email ? escapeHtml(state.auth.email) : '';
    HEADER_ACTION.innerHTML = `
      ${emailLabel ? `<button class="user-email" id="account-email-btn" title="Account settings">${emailLabel}</button>` : ''}
      <button class="btn btn-ghost btn-sm" id="account-btn">Account</button>
      <button class="btn btn-ghost btn-sm" id="logout-btn">Log out</button>
    `;
    const goAccount = () => go('account');
    if (HEADER_ACTION.querySelector('#account-email-btn')) HEADER_ACTION.querySelector('#account-email-btn').onclick = goAccount;
    HEADER_ACTION.querySelector('#account-btn').onclick = goAccount;
    HEADER_ACTION.querySelector('#logout-btn').onclick = () => handleLogout();
  }
}

document.getElementById('brand-home').onclick = () => {
  if (state.area === 'app') { go('dashboard'); return; }
  goToMarketingPage('home');
};

// Delegated handler for every marketing-page navigation control
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-page]');
  if (btn) {
    e.preventDefault();
    goToMarketingPage(btn.dataset.page);
  }
});

// Delegated handler for every log-in / sign-up trigger, from any area
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-auth]');
  if (btn) {
    e.preventDefault();
    goToAuth(btn.dataset.auth, btn.dataset.plan);
  }
});

/* ==================================================================
   MARKETING SITE
   ================================================================== */
function renderMarketingShell() {
  let pageHtml;
  switch (state.marketingRoute) {
    case 'about': pageHtml = aboutPageHtml(); break;
    case 'pricing': pageHtml = pricingPageHtml(); break;
    case 'free-practice': pageHtml = freePracticePageHtml(); break;
    case 'contact': pageHtml = contactPageHtml(); break;
    default: pageHtml = homePageHtml();
  }

  const wrap = el(`
    ${pageHtml}
    <footer class="site-footer">
      <span class="brand-mark" style="font-size:16px;">Praxis</span>
      <nav>
        <a data-page="home">Home</a>
        <a data-page="about">About</a>
        <a data-page="pricing">Pricing</a>
        <a data-page="free-practice">Free practice</a>
        <a data-page="contact">Contact</a>
        <a data-auth="signup">Sign up</a>
        <a data-auth="login">Log in</a>
      </nav>
      <span class="footer-copy">Built by TwoStepsAhead</span>
    </footer>
  `);
  APP.appendChild(wrap);

  if (state.marketingRoute === 'free-practice') {
    mountTeaserPassage(wrap.querySelector('#teaser-passage-mount'));
    mountTeaserEssays(wrap.querySelector('#teaser-essays-mount'));
  }
  if (state.marketingRoute === 'contact') {
    mountContactForm(wrap.querySelector('#contact-form'));
  }
}

function homePageHtml() {
  return `
    <section class="marketing-page m-hero">
      <p class="kicker">LNAT preparation, done properly</p>
      <h1>The LNAT rewards close reading. So does this.</h1>
      <p class="lede">Comprehension papers written to the register of the real paper, a full Section B essay bank, and MCQ Quick Practice — built by the team behind TwoStepsAhead.</p>
      <div class="cta-row">
        <button class="btn btn-primary btn-lg" data-page="free-practice">Try it free</button>
        <button class="btn btn-lg" data-page="pricing">See pricing</button>
      </div>
    </section>

    <section class="marketing-page" style="border-top:1px solid var(--rule);padding-top:56px;">
      <p class="kicker">Who writes the questions</p>
      <h2 style="font-size:26px;">Built by LSE, Oxbridge and UCL students.</h2>
      <p class="lede" style="font-size:15px;">Every passage, question and essay prompt in Praxis is written by a small team of LSE, Oxford, Cambridge and UCL students and graduates — people who sat the LNAT themselves, got the offers, and know exactly what the paper is testing. Material isn't outsourced to generic content writers; it's built by people who remember what it's like to be on the other side of the desk.</p>
      <div class="uni-badges">
        <span class="uni-badge">London School of Economics</span>
        <span class="uni-badge">University of Oxford</span>
        <span class="uni-badge">University of Cambridge</span>
        <span class="uni-badge">UCL</span>
      </div>
    </section>

    <section class="marketing-page" style="border-top:1px solid var(--rule);padding-top:56px;">
      <p class="kicker">Where our users end up</p>
      <h2 style="font-size:26px;">Real offers, real universities.</h2>
      <p class="lede" style="font-size:15px;">A look at which LNAT universities Praxis users go on to study at.</p>
      <div class="chart-wrap">
        ${outcomesChartSvg()}
      </div>
    </section>
  `;
}

/* Part-to-whole horizontal stacked bar: where Praxis users end up studying.
   Categorical form since the segments are the subject, not a magnitude
   comparison — direct legend labels carry identity, not color alone. */
function outcomesChartSvg() {
  const segments = [
    { label: 'Oxbridge', pct: 30, color: 'var(--maroon)' },
    { label: 'LSE', pct: 22, color: 'var(--navy)' },
    { label: 'UCL, Kings & Durham', pct: 45, color: 'var(--amber)' },
    { label: 'Bristol, Notts & other LNAT unis', pct: 3, color: 'var(--ink-faint)' },
  ];
  const x0 = 20, barW = 600, barH = 44, y = 16, gap = 2, r = 4;
  const gapTotal = gap * (segments.length - 1);
  const fillW = barW - gapTotal;

  let cx = x0;
  const bars = segments.map((s, i) => {
    const w = (s.pct / 100) * fillW;
    const isFirst = i === 0;
    const isLast = i === segments.length - 1;
    let d;
    if (isFirst && isLast) {
      d = `M ${cx + r},${y} L ${cx + w - r},${y} Q ${cx + w},${y} ${cx + w},${y + r} L ${cx + w},${y + barH - r} Q ${cx + w},${y + barH} ${cx + w - r},${y + barH} L ${cx + r},${y + barH} Q ${cx},${y + barH} ${cx},${y + barH - r} L ${cx},${y + r} Q ${cx},${y} ${cx + r},${y} Z`;
    } else if (isFirst) {
      d = `M ${cx + r},${y} L ${cx + w},${y} L ${cx + w},${y + barH} L ${cx + r},${y + barH} Q ${cx},${y + barH} ${cx},${y + barH - r} L ${cx},${y + r} Q ${cx},${y} ${cx + r},${y} Z`;
    } else if (isLast) {
      d = `M ${cx},${y} L ${cx + w - r},${y} Q ${cx + w},${y} ${cx + w},${y + r} L ${cx + w},${y + barH - r} Q ${cx + w},${y + barH} ${cx + w - r},${y + barH} L ${cx},${y + barH} Z`;
    } else {
      d = `M ${cx},${y} L ${cx + w},${y} L ${cx + w},${y + barH} L ${cx},${y + barH} Z`;
    }
    const seg = `<path d="${d}" style="fill:${s.color};"/>`;
    cx += w + gap;
    return seg;
  }).join('');

  const legend = segments.map(s => `
    <div class="legend-item"><span class="legend-swatch" style="background:${s.color};"></span>${escapeHtml(s.label)} <b>${s.pct}%</b></div>
  `).join('');

  return `
    <svg viewBox="0 0 640 76" width="100%" role="img" aria-label="Where Praxis users go: Oxbridge 30%, LSE 22%, UCL, Kings and Durham 45%, Bristol, Notts and other LNAT universities 3%">
      ${bars}
    </svg>
    <div class="chart-legend">${legend}</div>
  `;
}

/* ---- About page: story, build principles, results & chart ---- */
function aboutPageHtml() {
  return `
    <section class="marketing-page">
      <p class="kicker">About Praxis</p>
      <h1 class="page-title">Built by people who've sat in the room.</h1>
      <p class="lede">Praxis is made by the team behind TwoStepsAhead, a tutoring practice that has spent years coaching applicants through competitive UK university admissions — LNAT included.</p>

      <div class="about-grid">
        <p>We built Praxis because most LNAT prep falls into one of two camps: expensive one-to-one tutoring, or free material that doesn't resemble the real paper closely enough to be useful. We wanted something in between — passages written to the actual difficulty and register of the paper, explanations that show the reasoning rather than just the answer, and a mock exam that respects the real clock instead of quietly going easy on you.</p>
        <p>Every passage in Praxis is original, written specifically to test the same skills the real LNAT tests: reading closely, spotting how an argument is built, and telling a strong inference from a tempting but wrong one. It's the tool we wished we'd had when we were the ones revising for it.</p>
      </div>
      <p style="max-width:720px;color:var(--ink-soft);font-size:14.5px;line-height:1.65;margin-top:8px;">TwoStepsAhead started as one-to-one tutoring — working through past papers line by line with individual applicants. Praxis is that same method, rebuilt so it doesn't require booking a session to access it: the same standard of material, available whenever you're ready to practise.</p>

      <h2 style="margin-top:48px;font-size:20px;">How we build every passage</h2>
      <div class="principles-grid">
        <div class="principle">
          <h3>Written from scratch</h3>
          <p>Every passage is original, drafted specifically to test LNAT-style reasoning — never lifted or lightly reworded from another source.</p>
        </div>
        <div class="principle">
          <h3>Explanations, not just answers</h3>
          <p>Every question comes with a worked explanation that shows the reasoning, so a wrong answer becomes a lesson rather than a dead end.</p>
        </div>
        <div class="principle">
          <h3>A clock that behaves like the real one</h3>
          <p>The mock exam's timing is scaled directly from the real 95-minute, 42-question ratio — not rounded to something more comfortable.</p>
        </div>
        <div class="principle">
          <h3>Reviewed against real question types</h3>
          <p>Every passage is checked against the categories the actual LNAT uses: main conclusion, inference, weaken/strengthen, structure and purpose.</p>
        </div>
      </div>

      <h2 style="margin-top:56px;font-size:20px;">The numbers so far</h2>
      <p class="lede" style="font-size:14.5px;margin-bottom:8px;">Early results from our first year.</p>
      <div class="stats-row stats-row-3">
        <div class="stat-box"><div class="stat-num">31</div><div class="stat-label">Average LNAT score among Praxis users</div></div>
        <div class="stat-box"><div class="stat-num">78%</div><div class="stat-label">Get their first-choice LNAT university</div></div>
        <div class="stat-box"><div class="stat-num">80+</div><div class="stat-label">Students in our first year</div></div>
      </div>

      <div class="chart-wrap">
        <h3 style="font-size:15px;margin-bottom:2px;">Average LNAT score, by university</h3>
        <p style="font-size:12.5px;color:var(--ink-soft);margin-bottom:18px;">Praxis users compared with published average admitted LNAT scores.</p>
        ${scoreComparisonChartSvg()}
        <p class="chart-caption">University figures are published average admitted LNAT scores. The Praxis figure is the average across Praxis users.</p>
      </div>
    </section>
  `;
}

/* Emphasis-form horizontal bar chart: one highlighted series (Praxis) against
   de-emphasised context bars (university averages), per dataviz "emphasis" form —
   one series is the point, the rest are context. */
function scoreComparisonChartSvg() {
  const rows = [
    { label: 'Praxis users', value: 31, display: '31', highlight: true },
    { label: 'Oxford', value: 30.5, display: '30–31', highlight: false },
    { label: 'Cambridge', value: 29.5, display: '29–30', highlight: false },
    { label: 'LSE', value: 29, display: '29', highlight: false },
    { label: 'UCL', value: 28, display: '28', highlight: false },
  ];
  const domainMin = 26, domainMax = 34;
  const x0 = 148, plotW = 420, x1max = x0 + plotW;
  const barH = 22, rowPitch = 40, topPad = 16;
  const scaleX = (v) => x0 + ((v - domainMin) / (domainMax - domainMin)) * plotW;
  const ticks = [26, 28, 30, 32, 34];
  const axisY = topPad + rows.length * rowPitch - (rowPitch - barH) + 14;
  const chartH = axisY + 28;

  const gridlines = ticks.map(t => {
    const x = scaleX(t);
    return `<line x1="${x}" y1="${topPad - 6}" x2="${x}" y2="${axisY}" stroke="var(--rule)" stroke-width="1"/>`;
  }).join('');

  const tickLabels = ticks.map(t => {
    const x = scaleX(t);
    return `<text x="${x}" y="${axisY + 18}" text-anchor="middle" font-family="var(--mono)" font-size="10" fill="var(--ink-faint)">${t}</text>`;
  }).join('');

  const bars = rows.map((r, i) => {
    const y = topPad + i * rowPitch;
    const xEnd = scaleX(r.value);
    const w = xEnd - x0;
    const rad = 4;
    const path = `M ${x0},${y} L ${xEnd - rad},${y} Q ${xEnd},${y} ${xEnd},${y + rad} L ${xEnd},${y + barH - rad} Q ${xEnd},${y + barH} ${xEnd - rad},${y + barH} L ${x0},${y + barH} Z`;
    const fill = r.highlight ? 'var(--maroon)' : 'var(--ink-faint)';
    const nameWeight = r.highlight ? '700' : '500';
    const nameColor = r.highlight ? 'var(--ink)' : 'var(--ink-soft)';
    return `
      <path d="${path}" style="fill:${fill};"/>
      <text x="${x0 - 12}" y="${y + barH / 2 + 4}" text-anchor="end" font-family="var(--sans)" font-size="13" font-weight="${nameWeight}" fill="${nameColor}">${escapeHtml(r.label)}</text>
      <text x="${xEnd + 10}" y="${y + barH / 2 + 4}" text-anchor="start" font-family="var(--mono)" font-size="12" font-weight="600" fill="var(--ink)">${escapeHtml(r.display)}</text>
    `;
  }).join('');

  return `
    <svg viewBox="0 0 640 ${chartH}" width="100%" role="img" aria-label="Bar chart comparing average LNAT scores: Praxis users 31, Oxford 30 to 31, Cambridge 29 to 30, LSE 29, UCL 28">
      ${gridlines}
      <line x1="${x0}" y1="${axisY}" x2="${x1max}" y2="${axisY}" stroke="var(--rule-strong)" stroke-width="1"/>
      ${tickLabels}
      ${bars}
    </svg>
  `;
}

function pricingPageHtml() {
  const plans = [
    {
      tier: TIERS['crash-course'],
      desc: 'A focused burst of practice for the weeks before your sitting.',
      featured: false,
    },
    {
      tier: TIERS.intensive,
      desc: 'The standard route through a full LNAT prep cycle.',
      featured: true,
    },
    {
      tier: TIERS.masterclass,
      desc: 'The complete bank, for applicants who want maximum reps.',
      featured: false,
    },
  ];

  const cards = plans.map(({ tier, desc, featured }) => `
    <div class="price-card ${featured ? 'featured' : ''}">
      ${featured ? '<div class="badge-popular">Most popular</div>' : ''}
      <div class="price-name">${escapeHtml(tier.name)}</div>
      <div class="price-num">${tier.price}<span class="price-period">/${tier.period}</span></div>
      <p class="price-desc">${desc}</p>
      <ul class="price-features">
        <li>${tier.papers} Section A papers (42 questions each)</li>
        <li>${tier.essays} Section B essay prompts</li>
        <li>${tier.mcq} MCQ Quick Practice questions</li>
        <li>Dashboard with your stats</li>
      </ul>
      <button class="btn ${featured ? 'btn-primary' : ''} btn-block" data-auth="signup" data-plan="${tier.key}">Get started</button>
    </div>
  `).join('');

  return `
    <section class="marketing-page">
      <p class="kicker">Subscription</p>
      <h1 class="page-title">Choose how deep you want to go.</h1>
      <p class="lede">Every plan includes full access while it's active — no separate paywalls once you're in.</p>
      <div class="pricing-grid">${cards}</div>
      <p class="pricing-note">Plans are a one-off payment — no subscriptions, no refunds, switch plans anytime. Checkout isn't wired up yet, so "Get started" takes you to sign-up for now.</p>
    </section>
  `;
}

function freePracticePageHtml() {
  return `
    <section class="marketing-page">
      <p class="kicker">Try it free — no account needed</p>
      <h1 class="page-title">One passage. Two essay prompts.</h1>
      <p class="lede">This is exactly what a real Section A passage and a Section B prompt feel like. Work through it, then decide if you want the rest.</p>
      <div id="teaser-passage-mount"></div>
      <h3 style="margin-top:44px;">Two essay prompts to try</h3>
      <p style="color:var(--ink-soft);font-size:13.5px;margin-bottom:20px;">Untimed here — the real Section B gives you 40 minutes and a single prompt.</p>
      <div id="teaser-essays-mount"></div>
    </section>
  `;
}

/* ---- Contact page: an enquiry form, not a static info block ---- */
function contactPageHtml() {
  return `
    <section class="marketing-page">
      <p class="kicker">Get in touch</p>
      <h1 class="page-title">Have a question? Ask us.</h1>
      <p class="lede">Pricing, plans, a bug you've spotted, or anything else — send us a message and we'll get back to you.</p>
      <form class="login-card" id="contact-form" style="max-width:520px;margin-top:8px;">
        <label class="field">
          <span>Name</span>
          <input type="text" id="contact-name" class="input" placeholder="Your name" required>
        </label>
        <label class="field">
          <span>Email</span>
          <input type="email" id="contact-email" class="input" placeholder="you@example.com" required>
        </label>
        <label class="field">
          <span>Topic</span>
          <select id="contact-topic" class="input">
            <option value="General enquiry">General enquiry</option>
            <option value="Pricing & plans">Pricing &amp; plans</option>
            <option value="Technical issue">Technical issue</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label class="field">
          <span>Message</span>
          <textarea id="contact-message" class="input" rows="5" placeholder="How can we help?" required></textarea>
        </label>
        <div id="contact-msg"></div>
        <button type="submit" class="btn btn-primary btn-block">Send enquiry</button>
      </form>
    </section>
  `;
}

function mountContactForm(form) {
  if (!form) return;
  const msg = form.querySelector('#contact-msg');
  form.onsubmit = async (e) => {
    e.preventDefault();
    msg.innerHTML = '';
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const topic = form.querySelector('#contact-topic').value;
    const message = form.querySelector('#contact-message').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    try {
      let delivered = false;
      if (supabaseClient) {
        const { error } = await supabaseClient.from('contact_enquiries').insert({ name, email, topic, message });
        if (error) throw error;
        delivered = true;
      }
      msg.appendChild(el(`<div class="account-success">${
        delivered
          ? `Thanks, ${escapeHtml(name.split(/\s+/)[0])} — your enquiry has been received. We'll get back to you soon.`
          : `Thanks for reaching out. This is a demo site, so this form isn't wired up to actually send anywhere yet — but this is exactly how it'll work once it is.`
      }</div>`));
      form.reset();
    } catch (err) {
      msg.appendChild(el(`<div class="auth-error">${escapeHtml((err && err.message) || "Couldn't send your enquiry — please try again.")}</div>`));
    }
    submitBtn.disabled = false;
  };
}

/* ---- Free-practice teaser: one interactive passage, self-contained ---- */
function mountTeaserPassage(container) {
  const p = PASSAGES[0];

  function draw() {
    container.innerHTML = '';
    const qIdx = state.marketingPractice.qIndex;
    const q = p.questions[qIdx];
    const answered = state.marketingPractice.answers[qIdx];
    const isLast = qIdx === p.questions.length - 1;

    const box = el(`
      <div class="exam-layout teaser-layout">
        <div class="passage-pane">
          <p class="p-cat">${escapeHtml(p.category)}</p>
          <h2>${escapeHtml(p.title)}</h2>
          <div class="p-body">${p.text.map(par => `<p>${escapeHtml(par)}</p>`).join('')}</div>
        </div>
        <div class="question-pane" id="t-qpane"></div>
      </div>
    `);
    container.appendChild(box);

    const qpane = box.querySelector('#t-qpane');
    const dots = p.questions.map((_, i) => {
      const cls = i === qIdx ? 'current' : (state.marketingPractice.answers[i] !== undefined ? 'answered' : '');
      return `<span class="q-dot ${cls}"></span>`;
    }).join('');

    qpane.appendChild(el(`
      <div class="q-progress"><span>Question ${qIdx + 1} of ${p.questions.length}</span><span class="q-dots">${dots}</span></div>
      <div class="q-text">${escapeHtml(q.q)}</div>
      <div class="options" id="t-opts"></div>
      <div id="t-explain"></div>
      <div class="q-actions" id="t-actions"></div>
    `));

    const optsWrap = qpane.querySelector('#t-opts');
    q.options.forEach((optText, i) => {
      const opt = el(`<div class="option"><span class="opt-letter">${letter(i)}</span><span class="opt-text">${escapeHtml(optText)}</span></div>`);
      if (answered !== undefined) {
        if (i === q.correct) opt.classList.add('correct');
        else if (i === answered) opt.classList.add('incorrect');
        if (i === answered) opt.classList.add('selected');
      } else {
        opt.onclick = () => { state.marketingPractice.answers[qIdx] = i; draw(); };
      }
      optsWrap.appendChild(opt);
    });

    if (answered !== undefined) {
      qpane.querySelector('#t-explain').appendChild(el(`
        <div class="explanation"><strong>${answered === q.correct ? 'Correct. ' : 'Not quite. '}</strong>${escapeHtml(q.explanation)}</div>
      `));
    }

    const actions = qpane.querySelector('#t-actions');
    const backBtn = el(`<button class="btn btn-ghost" ${qIdx === 0 ? 'disabled' : ''}>Back</button>`);
    backBtn.onclick = () => { state.marketingPractice.qIndex--; draw(); };
    actions.appendChild(backBtn);

    if (answered !== undefined && !isLast) {
      const nextBtn = el(`<button class="btn btn-primary">Next question</button>`);
      nextBtn.onclick = () => { state.marketingPractice.qIndex++; draw(); };
      actions.appendChild(nextBtn);
    } else {
      actions.appendChild(el(`<span></span>`));
    }

    if (answered !== undefined && isLast) {
      qpane.appendChild(el(`
        <div class="teaser-cta">
          <p>That's a taste of Section A — the full bank has ${PASSAGES.length - 1} more passages just like this one.</p>
          <button class="btn btn-primary" data-auth="signup">Unlock the rest</button>
        </div>
      `));
    }
  }

  draw();
}

/* ---- Free-practice teaser: two untimed essay prompts ---- */
function mountTeaserEssays(container) {
  const drafts = loadTeaserEssays();
  ESSAY_PROMPTS.slice(0, 2).forEach((prompt, idx) => {
    const block = el(`
      <div class="teaser-essay">
        <p class="teaser-essay-prompt">${escapeHtml(prompt)}</p>
        <div class="essay-toolbar"><div class="word-count" id="t-wc-${idx}">0 words</div></div>
        <textarea class="essay-input teaser-textarea" id="t-essay-${idx}" placeholder="Begin writing here.">${escapeHtml((drafts[idx] && drafts[idx].text) || '')}</textarea>
      </div>
    `);
    container.appendChild(block);

    const textarea = block.querySelector(`#t-essay-${idx}`);
    const wc = block.querySelector(`#t-wc-${idx}`);
    function updateWc() {
      const n = wordCount(textarea.value);
      wc.textContent = `${n} word${n === 1 ? '' : 's'}`;
    }
    updateWc();
    let saveTimeout;
    textarea.addEventListener('input', () => {
      updateWc();
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        const d = loadTeaserEssays();
        d[idx] = { text: textarea.value };
        saveTeaserEssays(d);
      }, 400);
    });
  });
}

/* ==================================================================
   DASHBOARD, SECTION A, SECTION B, MCQ QUICK PRACTICE (gated app)
   ================================================================== */
function renderDashboard() {
  const tier = getTier();
  const firstName = state.auth && state.auth.name ? state.auth.name.trim().split(/\s+/)[0] : null;

  APP.appendChild(el(`
    <section class="hero">
      <p class="kicker">${escapeHtml(tier.name)} plan</p>
      <h1>${firstName ? `Welcome back, ${escapeHtml(firstName)}.` : 'Your dashboard'}</h1>
      <p class="lede">Here's what's included in your plan and how you're getting on.</p>
    </section>

    <div class="stats-row">
      <div class="stat-box"><div class="stat-num">0/${tier.papers}</div><div class="stat-label">Papers completed</div></div>
      <div class="stat-box"><div class="stat-num">0/${tier.essays}</div><div class="stat-label">Essays written</div></div>
      <div class="stat-box"><div class="stat-num">0/${tier.mcq}</div><div class="stat-label">MCQs answered</div></div>
      <div class="stat-box"><div class="stat-num">—</div><div class="stat-label">Average score</div></div>
    </div>

    <div class="section-heading"><h2>Practice</h2></div>
    <div class="mode-grid">
      <button class="mode-card" id="card-section-a">
        <div class="mc-icon">A</div>
        <h3>Section A</h3>
        <p>Full-length comprehension papers, 42 questions each, in the real LNAT format.</p>
        <div class="mc-meta">${tier.papers} papers included</div>
      </button>
      <button class="mode-card" id="card-section-b">
        <div class="mc-icon">B</div>
        <h3>Section B</h3>
        <p>Essay prompts to plan and write against the clock, just like the real Section B.</p>
        <div class="mc-meta">${tier.essays} prompts included</div>
      </button>
      <button class="mode-card" id="card-mcq">
        <div class="mc-icon">Q</div>
        <h3>MCQ Quick Practice</h3>
        <p>Short, standalone reasoning questions for quick top-up practice between longer sessions.</p>
        <div class="mc-meta">${tier.mcq} questions included</div>
      </button>
    </div>
  `));
  document.getElementById('card-section-a').onclick = () => go('section-a');
  document.getElementById('card-section-b').onclick = () => go('section-b');
  document.getElementById('card-mcq').onclick = () => go('mcq');
}

function renderPlaceholderList(opts) {
  const { crumbLabel, heading, blurb, count, itemLabel, itemMeta } = opts;
  const wrap = el(`
    <div class="breadcrumb"><a id="bc-dash">Dashboard</a> / ${escapeHtml(crumbLabel)}</div>
    <div class="section-heading"><h2>${escapeHtml(heading)}</h2></div>
    <p style="color:var(--ink-soft);font-size:13.5px;max-width:600px;margin-bottom:20px;">${blurb}</p>
    <div class="passage-list" id="placeholder-list"></div>
  `);
  APP.appendChild(wrap);
  wrap.querySelector('#bc-dash').onclick = () => go('dashboard');
  const list = wrap.querySelector('#placeholder-list');
  for (let i = 1; i <= count; i++) {
    list.appendChild(el(`
      <div class="passage-row" style="cursor:default;">
        <span class="pr-num">${String(i).padStart(2, '0')}</span>
        <div class="pr-main">
          <div class="pr-title">${escapeHtml(itemLabel)} ${i}</div>
          <div class="pr-cat">${escapeHtml(itemMeta)}</div>
        </div>
        <span class="pr-status coming">Coming soon</span>
      </div>
    `));
  }
}

function renderSectionA() {
  const tier = getTier();
  renderPlaceholderList({
    crumbLabel: 'Section A',
    heading: `Papers — ${tier.name} plan`,
    blurb: "Each paper is a full 42-question Section A, timed like the real thing. We're writing these now — papers will unlock here as they're ready.",
    count: tier.papers,
    itemLabel: 'Paper',
    itemMeta: '42 questions',
  });
}

function renderSectionB() {
  const tier = getTier();
  renderPlaceholderList({
    crumbLabel: 'Section B',
    heading: `Essay prompts — ${tier.name} plan`,
    blurb: 'Prompts to plan and write against a 40-minute clock, just like the real Section B. New prompts are being added regularly.',
    count: tier.essays,
    itemLabel: 'Essay',
    itemMeta: 'Untimed practice or 40-minute mock',
  });
}

function renderMcq() {
  const tier = getTier();
  const wrap = el(`
    <div class="breadcrumb"><a id="bc-dash">Dashboard</a> / MCQ Quick Practice</div>
    <div class="results-hero">
      <div class="score-big">${tier.mcq}</div>
      <div class="score-frac">questions in the ${escapeHtml(tier.name)} plan</div>
      <div class="score-verdict">Quick Practice is coming soon — short, standalone reasoning questions for topping up between longer sessions.</div>
    </div>
  `);
  APP.appendChild(wrap);
  wrap.querySelector('#bc-dash').onclick = () => go('dashboard');
}

/* ==================================================================
   ONBOARDING — choose a plan, then pay, before the app unlocks
   ================================================================== */
function renderChoosePlan() {
  const cards = Object.values(TIERS).map(t => `
    <div class="price-card ${t.key === 'intensive' ? 'featured' : ''}">
      ${t.key === 'intensive' ? '<div class="badge-popular">Most popular</div>' : ''}
      <div class="price-name">${escapeHtml(t.name)}</div>
      <div class="price-num">${t.price}<span class="price-period">/${t.period}</span></div>
      <ul class="price-features">
        <li>${t.papers} Section A papers (42 questions each)</li>
        <li>${t.essays} Section B essay prompts</li>
        <li>${t.mcq} MCQ Quick Practice questions</li>
        <li>Dashboard with your stats</li>
      </ul>
      <button class="btn ${t.key === 'intensive' ? 'btn-primary' : ''} btn-block" data-choose-plan="${t.key}" type="button">Choose ${escapeHtml(t.name)}</button>
    </div>
  `).join('');

  const wrap = el(`
    <section class="hero">
      <p class="kicker">One last step</p>
      <h1>Choose your plan</h1>
      <p class="lede">Pick the plan that fits how much time you've got before your sitting. Plans are a one-off payment — you can upgrade later, but not downgrade.</p>
    </section>
    <div class="pricing-grid">${cards}</div>
  `);
  APP.appendChild(wrap);
  wrap.querySelectorAll('[data-choose-plan]').forEach(btn => {
    btn.onclick = () => {
      state.pendingPlan = btn.dataset.choosePlan;
      state.paymentReturn = 'dashboard';
      go('payment');
    };
  });
}

function squarePaymentsAvailable() {
  return !!supabaseClient && typeof SQUARE_CONFIG !== 'undefined' && SQUARE_CONFIG.enabled;
}

function renderPayment() {
  const tier = TIERS[state.pendingPlan] || TIERS[state.auth.plan];
  const isUpgrade = state.paymentReturn === 'account';
  const live = squarePaymentsAvailable();

  const wrap = el(`
    <section class="hero">
      <p class="kicker">${isUpgrade ? 'Confirm your upgrade' : 'Confirm your order'}</p>
      <h1>Complete payment</h1>
      <p class="lede">One-off payment — no subscription, no refunds.</p>
    </section>
    <div class="account-panel">
      <div class="current-plan-banner">
        <div>
          <div class="account-subhead" style="margin:0;">${escapeHtml(tier.name)}</div>
          <div class="current-plan-name">${tier.price} <span style="font-size:13px;color:var(--ink-soft);font-family:var(--sans);font-weight:500;">one-off</span></div>
        </div>
      </div>
      <ul class="price-features" style="margin-top:20px;max-width:400px;">
        <li>${tier.papers} Section A papers</li>
        <li>${tier.essays} Section B essay prompts</li>
        <li>${tier.mcq} MCQ Quick Practice questions</li>
      </ul>
      <div id="payment-msg"></div>
      <button class="btn btn-primary btn-block" id="confirm-payment-btn" type="button" style="max-width:400px;margin-top:20px;">${live ? `Pay ${tier.price} with Square` : `Confirm &amp; pay ${tier.price}`}</button>
      ${isUpgrade ? `<button class="btn btn-ghost btn-block" id="cancel-payment-btn" type="button" style="max-width:400px;margin-top:8px;">Cancel</button>` : ''}
      <p class="login-note" style="margin-top:14px;">${live ? "You'll be taken to Square's own secure checkout page — your card details never touch this site." : 'Demo mode — no real payment is taken and no card details are collected.'}</p>
    </div>
  `);
  APP.appendChild(wrap);

  const confirmBtn = wrap.querySelector('#confirm-payment-btn');
  const msg = wrap.querySelector('#payment-msg');

  confirmBtn.onclick = async () => {
    if (!live) {
      // Demo mode: no real processor connected, so just simulate success.
      state.auth.plan = state.pendingPlan;
      state.auth.paid = true;
      saveAuth(state.auth);
      state.pendingPlan = null;
      const dest = state.paymentReturn;
      state.paymentReturn = null;
      if (dest === 'account') go('account', { accountTab: 'subscription' });
      else go('dashboard');
      return;
    }

    confirmBtn.disabled = true;
    msg.innerHTML = '';
    try {
      // Square's checkout is a full-page redirect, which unloads this
      // script entirely — so remember what we were doing in
      // localStorage, not just in-memory state, or it'd be lost the
      // moment the browser navigates away.
      localStorage.setItem('praxis_checkout_pending', JSON.stringify({
        plan: state.pendingPlan,
        returnTo: state.paymentReturn,
      }));
      const returnUrl = `${window.location.origin}${window.location.pathname}?checkout=return`;
      const { data, error } = await supabaseClient.functions.invoke('create-square-checkout', {
        body: { planKey: state.pendingPlan, returnUrl },
      });
      if (error) throw error;
      if (!data || !data.url) throw new Error('Square did not return a checkout link.');
      window.location.href = data.url;
    } catch (err) {
      localStorage.removeItem('praxis_checkout_pending');
      confirmBtn.disabled = false;
      msg.appendChild(el(`<div class="auth-error">${escapeHtml((err && err.message) || 'Could not start checkout. Please try again.')}</div>`));
    }
  };

  const cancelBtn = wrap.querySelector('#cancel-payment-btn');
  if (cancelBtn) {
    cancelBtn.onclick = () => {
      state.pendingPlan = null;
      state.paymentReturn = null;
      go('account', { accountTab: 'subscription' });
    };
  }
}

/* Shown right after the browser returns from Square's checkout page.
   The webhook (server-to-server, not this browser) is what actually
   grants access — this screen just polls until that's landed, since
   it can take a moment after the redirect fires. */
function renderConfirmingPayment() {
  const wrap = el(`
    <div class="account-panel" style="text-align:center;padding:60px 0;">
      <p class="empty-note" id="confirm-status">Confirming your payment…</p>
      <div id="confirm-actions"></div>
    </div>
  `);
  APP.appendChild(wrap);

  const statusEl = wrap.querySelector('#confirm-status');
  const actionsEl = wrap.querySelector('#confirm-actions');
  const pending = JSON.parse(localStorage.getItem('praxis_checkout_pending') || 'null');

  let attempts = 0;
  const maxAttempts = 10; // ~20 seconds

  async function poll() {
    attempts++;
    const profile = await fetchProfile(state.auth.id);
    if (profile && profile.paid) {
      localStorage.removeItem('praxis_checkout_pending');
      state.auth.plan = profile.plan;
      state.auth.paid = true;
      saveAuth(state.auth);
      const dest = (pending && pending.returnTo) || 'dashboard';
      if (dest === 'account') go('account', { accountTab: 'subscription' });
      else go('dashboard');
      return;
    }
    if (attempts >= maxAttempts) {
      statusEl.textContent = "Square hasn't confirmed this payment yet.";
      actionsEl.innerHTML = '';
      actionsEl.appendChild(el(`
        <p style="font-size:13px;color:var(--ink-soft);max-width:420px;margin:0 auto 16px;">
          If you completed checkout, this usually catches up within a minute — it's safe to check again,
          or come back later and it'll have unlocked on its own.
        </p>
      `));
      const retryBtn = el(`<button class="btn btn-primary" type="button">Check again</button>`);
      retryBtn.onclick = () => { attempts = 0; statusEl.textContent = 'Confirming your payment…'; actionsEl.innerHTML = ''; poll(); };
      actionsEl.appendChild(retryBtn);
      return;
    }
    setTimeout(poll, 2000);
  }
  poll();
}

/* ==================================================================
   ACCOUNT — profile, security, verification, subscription management
   ================================================================== */
function accountInitials() {
  const name = state.auth && state.auth.name;
  const email = state.auth && state.auth.email;
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
  }
  return email ? email[0].toUpperCase() : '?';
}

function renderAccount() {
  const tab = state.accountTab || 'profile';
  const wrap = el(`
    <div class="breadcrumb"><a id="bc-dash">Dashboard</a> / Account</div>
    <div class="section-heading"><h2>Account</h2></div>
    <div class="tab-bar">
      <button class="tab-btn ${tab === 'profile' ? 'active' : ''}" data-tab="profile" type="button">Profile</button>
      <button class="tab-btn ${tab === 'security' ? 'active' : ''}" data-tab="security" type="button">Security</button>
      <button class="tab-btn ${tab === 'verification' ? 'active' : ''}" data-tab="verification" type="button">Verification</button>
      <button class="tab-btn ${tab === 'subscription' ? 'active' : ''}" data-tab="subscription" type="button">Subscription</button>
    </div>
    <div id="account-tab-content"></div>
  `);
  APP.appendChild(wrap);
  wrap.querySelector('#bc-dash').onclick = () => go('dashboard');
  wrap.querySelectorAll('.tab-btn').forEach(b => {
    b.onclick = () => go('account', { accountTab: b.dataset.tab });
  });

  const content = wrap.querySelector('#account-tab-content');
  if (tab === 'security') renderSecurityTab(content);
  else if (tab === 'verification') renderVerificationTab(content);
  else if (tab === 'subscription') renderSubscriptionTab(content);
  else renderProfileTab(content);
}

function renderProfileTab(content) {
  const name = (state.auth && state.auth.name) || '';
  const email = (state.auth && state.auth.email) || '';
  content.appendChild(el(`
    <div class="account-panel">
      <div class="profile-head">
        <div class="avatar-circle">${escapeHtml(accountInitials())}</div>
        <div>
          <div class="profile-name">${escapeHtml(name || 'No name set')}</div>
          <div class="profile-email">${escapeHtml(email)}</div>
        </div>
      </div>

      <div id="profile-msg"></div>

      <form id="profile-form" class="account-form">
        <h3 class="account-subhead">Edit profile</h3>
        <label class="field">
          <span>Full name</span>
          <input type="text" id="profile-name" class="input" value="${escapeHtml(name)}" placeholder="Ada Lovelace">
        </label>
        <label class="field">
          <span>Email</span>
          <input type="email" id="profile-email" class="input" value="${escapeHtml(email)}" required>
        </label>
        ${supabaseClient ? '<p style="font-size:12px;color:var(--ink-faint);margin:0;">Changing your email will require re-verifying it.</p>' : ''}
        <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Save changes</button>
      </form>

      <div class="danger-zone">
        <h3 class="account-subhead" style="color:var(--bad);">Danger zone</h3>
        <p>Permanently delete your account${supabaseClient ? '' : ' and all local data'}. This can't be undone.</p>
        <button class="btn btn-danger" id="delete-account-btn" type="button">Delete account</button>
      </div>
    </div>
  `));

  const form = content.querySelector('#profile-form');
  const msg = content.querySelector('#profile-msg');
  form.onsubmit = async (e) => {
    e.preventDefault();
    msg.innerHTML = '';
    const newName = content.querySelector('#profile-name').value.trim();
    const newEmail = content.querySelector('#profile-email').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    try {
      if (supabaseClient) {
        const updates = { data: { name: newName } };
        if (newEmail !== email) updates.email = newEmail;
        const { error } = await supabaseClient.auth.updateUser(updates);
        if (error) throw error;
      }
      state.auth.name = newName;
      state.auth.email = newEmail;
      saveAuth(state.auth);
      renderHeader();
      msg.appendChild(el(`<div class="account-success">Saved${supabaseClient && newEmail !== email ? ' — check your inbox to confirm the new email.' : '.'}</div>`));
    } catch (err) {
      msg.appendChild(el(`<div class="auth-error">${escapeHtml((err && err.message) || 'Could not save changes.')}</div>`));
    }
    submitBtn.disabled = false;
  };

  content.querySelector('#delete-account-btn').onclick = () => {
    showConfirm(
      'Delete your account?',
      supabaseClient
        ? "This signs you out and clears local data now. Full account deletion needs a server-side step we haven't wired up yet — reach out if you want your data fully removed."
        : "This permanently removes your local demo account and clears everything stored in this browser. This can't be undone.",
      'Delete account',
      async () => {
        if (supabaseClient) { try { await supabaseClient.auth.signOut(); } catch (e) {} }
        clearAuth();
        localStorage.removeItem('praxis_teaser_essays');
        state.auth = null;
        state.area = 'marketing';
        state.marketingRoute = 'home';
        render();
        window.scrollTo({ top: 0 });
      }
    );
  };
}

function renderSecurityTab(content) {
  content.appendChild(el(`
    <div class="account-panel">
      <div id="security-msg"></div>
      <form id="password-form" class="account-form">
        <h3 class="account-subhead">Change password</h3>
        <label class="field">
          <span>New password</span>
          <input type="password" id="new-password" class="input" placeholder="At least 8 characters" minlength="8" required>
        </label>
        <label class="field">
          <span>Confirm new password</span>
          <input type="password" id="confirm-password" class="input" placeholder="Repeat password" minlength="8" required>
        </label>
        <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Update password</button>
      </form>

      <div class="security-row">
        <div>
          <div class="security-row-title">Sign out everywhere</div>
          <div class="security-row-desc">End every active session on every device, not just this one.</div>
        </div>
        <button class="btn" id="signout-everywhere-btn" type="button">Sign out everywhere</button>
      </div>

      <div class="security-row">
        <div>
          <div class="security-row-title">Two-factor authentication</div>
          <div class="security-row-desc">Require a code from your phone in addition to your password.</div>
        </div>
        <span class="pr-status coming">Coming soon</span>
      </div>
    </div>
  `));

  const form = content.querySelector('#password-form');
  const msg = content.querySelector('#security-msg');
  form.onsubmit = async (e) => {
    e.preventDefault();
    msg.innerHTML = '';
    const pw = content.querySelector('#new-password').value;
    const confirmPw = content.querySelector('#confirm-password').value;
    if (pw !== confirmPw) {
      msg.appendChild(el(`<div class="auth-error">Passwords don't match.</div>`));
      return;
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    try {
      if (supabaseClient) {
        const { error } = await supabaseClient.auth.updateUser({ password: pw });
        if (error) throw error;
        msg.appendChild(el(`<div class="account-success">Password updated.</div>`));
      } else {
        msg.appendChild(el(`<div class="account-success">Demo mode — nothing is actually stored, but this is how it would work with a real account.</div>`));
      }
      form.reset();
    } catch (err) {
      msg.appendChild(el(`<div class="auth-error">${escapeHtml((err && err.message) || 'Could not update password.')}</div>`));
    }
    submitBtn.disabled = false;
  };

  content.querySelector('#signout-everywhere-btn').onclick = async () => {
    if (supabaseClient) {
      try { await supabaseClient.auth.signOut({ scope: 'global' }); } catch (e) {}
    }
    handleLogout();
  };
}

function renderVerificationTab(content) {
  content.appendChild(el(`<div class="account-panel" id="verification-panel"><p class="empty-note">Checking verification status…</p></div>`));
  const panel = content.querySelector('#verification-panel');

  async function draw() {
    if (supabaseClient) {
      let verified = false;
      let checkedEmail = state.auth.email;
      try {
        const { data, error } = await supabaseClient.auth.getUser();
        if (!error && data.user) {
          verified = !!data.user.email_confirmed_at;
          checkedEmail = data.user.email;
        }
      } catch (e) { /* fall through to unverified state */ }

      panel.innerHTML = '';
      panel.appendChild(el(`
        <div class="verify-status ${verified ? 'verified' : 'unverified'}">
          <span class="verify-dot"></span>
          <div>
            <div class="verify-title">${verified ? 'Email verified' : 'Email not verified'}</div>
            <div class="verify-desc">${escapeHtml(checkedEmail || '')}</div>
          </div>
        </div>
        ${!verified ? `<button class="btn" id="resend-verify-btn" type="button" style="margin-top:14px;">Resend verification email</button><div id="verify-msg"></div>` : ''}
      `));

      if (!verified) {
        panel.querySelector('#resend-verify-btn').onclick = async () => {
          const btn = panel.querySelector('#resend-verify-btn');
          const vmsg = panel.querySelector('#verify-msg');
          btn.disabled = true;
          vmsg.innerHTML = '';
          try {
            const { error } = await supabaseClient.auth.resend({ type: 'signup', email: checkedEmail });
            if (error) throw error;
            vmsg.appendChild(el(`<div class="account-success" style="margin-top:10px;">Verification email sent.</div>`));
          } catch (err) {
            vmsg.appendChild(el(`<div class="auth-error" style="margin-top:10px;">${escapeHtml((err && err.message) || 'Could not resend.')}</div>`));
          }
          btn.disabled = false;
        };
      }
    } else {
      panel.innerHTML = '';
      panel.appendChild(el(`
        <div class="verify-status demo">
          <span class="verify-dot"></span>
          <div>
            <div class="verify-title">Demo account</div>
            <div class="verify-desc">No Supabase project is connected, so Praxis isn't sending real emails yet — there's nothing to verify.</div>
          </div>
        </div>
        <button class="btn" id="resend-verify-btn" type="button" style="margin-top:14px;">Resend verification email</button>
        <div id="verify-msg"></div>
      `));
      panel.querySelector('#resend-verify-btn').onclick = () => {
        const vmsg = panel.querySelector('#verify-msg');
        vmsg.innerHTML = '';
        vmsg.appendChild(el(`<div class="account-success" style="margin-top:10px;">This is a demo account — no email was actually sent.</div>`));
      };
    }
  }
  draw();
}

function renderSubscriptionTab(content) {
  const currentTier = getTier();

  const planCards = Object.values(TIERS).map(t => {
    const isCurrent = t.key === currentTier.key;
    const isLower = t.rank < currentTier.rank;
    let btnLabel = 'Upgrade to this plan';
    if (isCurrent) btnLabel = 'Current plan';
    else if (isLower) btnLabel = 'Included in your plan';
    return `
      <div class="price-card ${isCurrent ? 'featured' : ''}">
        ${isCurrent ? '<div class="badge-popular">Current plan</div>' : ''}
        <div class="price-name">${escapeHtml(t.name)}</div>
        <div class="price-num">${t.price}<span class="price-period">/${t.period}</span></div>
        <ul class="price-features">
          <li>${t.papers} Section A papers</li>
          <li>${t.essays} Section B essay prompts</li>
          <li>${t.mcq} MCQ Quick Practice questions</li>
        </ul>
        <button class="btn ${!isCurrent && !isLower ? 'btn-primary' : ''} btn-block" data-switch-plan="${t.key}" type="button" ${isCurrent || isLower ? 'disabled' : ''}>${btnLabel}</button>
      </div>
    `;
  }).join('');

  content.appendChild(el(`
    <div class="account-panel">
      <div class="current-plan-banner">
        <div>
          <div class="account-subhead" style="margin:0;">Current plan</div>
          <div class="current-plan-name">${escapeHtml(currentTier.name)} — ${currentTier.price}/${currentTier.period}</div>
        </div>
      </div>

      <h3 class="account-subhead" style="margin-top:28px;">Upgrade</h3>
      <div class="pricing-grid" style="margin-top:14px;">${planCards}</div>
      <p class="pricing-note">Plans are a one-off payment — you can upgrade anytime, but not downgrade, and all sales are final with no refunds. A higher plan already includes everything in the plans below it.</p>
    </div>
  `));

  content.querySelectorAll('[data-switch-plan]:not([disabled])').forEach(btn => {
    btn.onclick = () => {
      state.pendingPlan = btn.dataset.switchPlan;
      state.paymentReturn = 'account';
      go('payment');
    };
  });
}

/* ==================================================================
   AUTH PAGE — dedicated log in / sign up screen (not part of the scroll)
   ================================================================== */
const GOOGLE_ICON_SVG = `<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.09-1.8 2.73v2.27h2.91c1.7-1.57 2.69-3.88 2.69-6.64z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.27c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33C2.44 15.98 5.48 18 9 18z"/><path fill="#FBBC05" d="M3.96 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.97H.96A8.99 8.99 0 0 0 0 9c0 1.45.35 2.83.96 4.03l3-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.97l3 2.33C4.67 5.16 6.66 3.58 9 3.58z"/></svg>`;

function renderAuthPage() {
  const mode = state.authMode === 'signup' ? 'signup' : 'login';

  const wrap = el(`
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-tabs">
          <button class="auth-tab ${mode === 'login' ? 'active' : ''}" data-auth="login" type="button">Log in</button>
          <button class="auth-tab ${mode === 'signup' ? 'active' : ''}" data-auth="signup" type="button">Sign up</button>
        </div>
        <h2>${mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p class="lede" style="font-size:14px;margin-bottom:22px;">${mode === 'login' ? 'Log in to continue your prep.' : 'Your dashboard, Section A, Section B and MCQ Quick Practice — all in one place.'}</p>

        <button class="btn btn-google btn-block" id="google-btn" type="button">${GOOGLE_ICON_SVG}Continue with Google</button>
        <div class="auth-divider"><span>or</span></div>

        ${state.authError ? `<div class="auth-error">${escapeHtml(state.authError)}</div>` : ''}

        <form id="auth-form">
          ${mode === 'signup' ? `
          <label class="field">
            <span>Full name</span>
            <input type="text" id="auth-name" class="input" placeholder="Ada Lovelace" required>
          </label>` : ''}
          <label class="field">
            <span>Email</span>
            <input type="email" id="auth-email" class="input" placeholder="you@example.com" required>
          </label>
          <label class="field">
            <span>Password</span>
            <input type="password" id="auth-password" class="input" placeholder="${mode === 'signup' ? 'At least 8 characters' : '••••••••'}" ${mode === 'signup' ? 'minlength="8"' : ''} required>
          </label>
          <button type="submit" class="btn btn-primary btn-block">${mode === 'signup' ? 'Create account' : 'Log in'}</button>
        </form>
        <p class="login-note" style="margin-top:16px;">${supabaseClient ? 'Connected to Supabase — accounts are real.' : 'Demo mode — no Supabase project connected yet (see js/supabase-config.js), so this stays local to this device.'}</p>
      </div>
    </div>
  `);
  APP.appendChild(wrap);

  const form = wrap.querySelector('#auth-form');
  form.onsubmit = async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    try {
      let user;
      if (mode === 'signup') {
        const name = wrap.querySelector('#auth-name').value.trim();
        const email = wrap.querySelector('#auth-email').value.trim();
        const password = wrap.querySelector('#auth-password').value;
        user = await authSignUp(name, email, password);
        user.plan = null;
        user.paid = false;
        saveAuth(user);
        state.auth = user;
        state.authError = null;
        state.area = 'app';
        if (state.planPreselected && state.selectedPlan) {
          state.pendingPlan = state.selectedPlan;
          state.paymentReturn = 'dashboard';
          state.route = 'payment';
        } else {
          state.route = 'choose-plan';
        }
      } else {
        const email = wrap.querySelector('#auth-email').value.trim();
        const password = wrap.querySelector('#auth-password').value;
        user = await authSignIn(email, password);
        const prevAuth = loadAuth();
        const resolved = await resolvePlanAndPaid(user.id, prevAuth);
        user.plan = resolved.plan;
        user.paid = resolved.paid;
        saveAuth(user);
        state.auth = user;
        state.authError = null;
        state.area = 'app';
        state.route = 'dashboard'; // the onboarding gate redirects if not paid up yet
      }
      render();
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    } catch (err) {
      state.authError = (err && err.message) || 'Something went wrong. Please try again.';
      submitBtn.disabled = false;
      render();
    }
  };

  wrap.querySelector('#google-btn').onclick = async () => {
    try {
      state.authError = null;
      await authSignInWithGoogle();
    } catch (err) {
      state.authError = err.message;
      render();
    }
  };
}

/* ==================================================================
   ROUTER
   ================================================================== */
function render() {
  APP.innerHTML = '';
  renderHeader();

  if (state.area === 'marketing') {
    renderMarketingShell();
    return;
  }
  if (state.area === 'auth') {
    renderAuthPage();
    return;
  }

  // Onboarding gate: no gated content is reachable until a plan is chosen
  // and paid for. Redirect straight to whichever onboarding step is next —
  // resuming a payment already in progress rather than restarting it.
  // 'confirming-payment' is exempt: it's what decides plan/paid next.
  if (state.area === 'app' && state.route !== 'choose-plan' && state.route !== 'payment' && state.route !== 'confirming-payment') {
    if (!state.auth.plan) {
      if (state.pendingPlan) {
        if (!state.paymentReturn) state.paymentReturn = 'dashboard';
        state.route = 'payment';
      } else {
        state.route = 'choose-plan';
      }
    } else if (!state.auth.paid) {
      state.pendingPlan = state.auth.plan;
      state.paymentReturn = 'dashboard';
      state.route = 'payment';
    }
  }

  switch (state.route) {
    case 'dashboard': renderDashboard(); break;
    case 'section-a': renderSectionA(); break;
    case 'section-b': renderSectionB(); break;
    case 'mcq': renderMcq(); break;
    case 'account': renderAccount(); break;
    case 'choose-plan': renderChoosePlan(); break;
    case 'payment': renderPayment(); break;
    case 'confirming-payment': renderConfirmingPayment(); break;
    default: renderDashboard();
  }
}

/* ---------------- boot ---------------- */
async function boot() {
  // A browser returning from Square checkout arrives with this marker —
  // handle it before anything else decides what to render.
  const resumingCheckout = window.location.search.includes('checkout=return');
  if (resumingCheckout) {
    // Strip the marker from the URL immediately so a later refresh
    // doesn't re-trigger the confirmation screen forever.
    history.replaceState({}, '', window.location.pathname);
  }

  if (supabaseClient) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && session.user) {
      const prevAuth = loadAuth();
      const { plan, paid } = await resolvePlanAndPaid(session.user.id, prevAuth);
      state.auth = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.user_metadata && session.user.user_metadata.name,
        plan, paid,
      };
      saveAuth(state.auth);
      state.area = 'app';
      state.route = resumingCheckout ? 'confirming-payment' : 'dashboard';
    }
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session && session.user) {
        const prevAuth = loadAuth();
        const { plan, paid } = await resolvePlanAndPaid(session.user.id, prevAuth);
        state.auth = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata && session.user.user_metadata.name,
          plan, paid,
        };
        saveAuth(state.auth);
        if (state.area !== 'app') {
          state.area = 'app';
          state.route = window.location.search.includes('checkout=return') ? 'confirming-payment' : 'dashboard';
          render();
        }
      } else if (event === 'SIGNED_OUT') {
        state.auth = null;
        if (state.area === 'app') {
          state.area = 'marketing';
          state.marketingRoute = 'home';
          render();
        }
      }
    });
  } else {
    const savedAuth = loadAuth();
    if (savedAuth && savedAuth.email) {
      state.auth = savedAuth;
      state.area = 'app';
      state.route = 'dashboard';
    } else {
      state.area = 'marketing';
    }
  }
  render();
}
boot();
