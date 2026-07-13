import Icon from '../Icon.jsx';

const PATTERNS = [
  { t: 'Smart lead triage', d: 'Sort and score every inquiry so you only spend time on the ones worth your time.' },
  { t: 'Personal-sounding follow-up', d: 'Outreach that actually reads what the customer said, written in your voice, sent the moment it should be.' },
  { t: 'Applicant screening', d: 'Rank applicants on the things that matter for your role so hiring stops eating your week.' },
  { t: 'Quotes &amp; proposals on autopilot', d: 'A short intake from you, a fully-formatted proposal or quote out the other side. Minutes, not afternoons.' },
  { t: 'Reading PDFs &amp; forms for you', d: 'Pull the important details out of contracts, applications, invoices, and route them where they need to go.' },
  { t: 'Customer onboarding that adapts', d: 'A welcome flow that adjusts to what each new customer needs, instead of one rigid checklist for everyone.' },
  { t: 'Approvals without email chains', d: 'Route approvals to the right person, with a clean record of what got decided when.' },
  { t: 'Weekly reports that write themselves', d: "The Friday-afternoon report becomes an email that's already in your inbox." },
  { t: 'Inbox &amp; inquiry triage', d: 'Categorize, prioritize, and assign incoming work without anyone reading every message.' },
  { t: 'An AI helper for your team', d: 'An internal assistant trained on your docs, your pricing, your way of doing things — so new hires get up to speed faster.' },
  { t: 'Keeping data in sync', d: 'When the same info lives in five places, keep it consistent without anyone retyping it.' },
  { t: 'Audit trails &amp; compliance', d: 'Quietly capture who did what, when, in a way auditors and regulators recognize.' },
];

export default function Home({ go }) {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="ornament" style={{ marginLeft: 0 }}></span>
                Independent practice · est. 2025
              </div>
              <h1 className="hero-headline">
                Hi, I'm Adam.<br />
                I build the <em>practical software</em> small businesses actually need.
              </h1>
              <p className="hero-sub">
                For the last ten years I've built software inside companies of every size — from a 200-person firm up to a global company of 300,000+. SleeperOps is where I bring that experience home: practical systems, sized to your business, built around the work you actually do.
              </p>
              <div className="hero-meta">
                <button className="btn btn-primary" onClick={() => go('contact')}>
                  Start a conversation
                  <Icon name="arrow-right" size={16} className="arrow" />
                </button>
                <button className="btn btn-ghost" onClick={() => go('services')}>
                  See what I build
                </button>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="hero-portrait">
                <img
                  src="/family-photo.jpg"
                  alt="Adam Cantwell"
                  className="hero-photo"
                />
              </div>
              <div className="hero-portrait-caption">
                <span className="name">Adam Cantwell</span>
                <span>Minneapolis, MN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="cred-strip">
        <div className="wrap cred-strip-inner">
          <div className="cred-strip-label">A little about the work —</div>
          <div className="cred-strip-items">
            <div className="cred-item">
              10+ Years
              <span className="label-s">Building enterprise software</span>
            </div>
            <div className="cred-item">
              200 → 300,000+
              <span className="label-s">Worked at every company size</span>
            </div>
            <div className="cred-item">
              One Person
              <span className="label-s">Strategy and the build, same hands</span>
            </div>
            <div className="cred-item">
              Minneapolis, MN
              <span className="label-s">Working with clients across the U.S.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS IS DIFFERENT */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What this means for you</div>
            <h2>
              I spent ten years on the client's side of the desk, not the agency's.
            </h2>
            <p className="head-sub">
              For ten years I've been the person inside large companies making technology decisions, building the systems, and watching what works. Here's what you get from someone with that background — working at your scale, not theirs.
            </p>
          </div>

          <div className="grid grid-2">
            <article className="callout">
              <span className="callout-num">01.</span>
              <h3>You're not getting an experiment</h3>
              <p>
                I've watched a lot of software get built at companies of 200, 700, and 300,000 employees — enough to know which ideas hold up and which ones look great in a demo and fall over in real life. You get the version that's already been pressure-tested somewhere else.
              </p>
            </article>
            <article className="callout">
              <span className="callout-num">02.</span>
              <h3>I think AND build — same person</h3>
              <p>
                Most consultants tell you what to do and leave you to find someone to build it. I do both. A lead-scoring system for a real estate team. A résumé-screener for an insurance agency. Real software, running every day, built by the same person who scoped it.
              </p>
            </article>
          </div>

          <div className="grid grid-2" style={{ marginTop: 24 }}>
            <article className="callout">
              <span className="callout-num">03.</span>
              <h3>If something's missing, I'll just build it</h3>
              <p>
                Inside a large enterprise recently, I noticed a job that needed doing and nobody had it. I made the case, the company created the role, and I took it. That's the same instinct I bring to your business: see the gap, build the fix, no waiting around.
              </p>
            </article>
            <article className="callout">
              <span className="callout-num">04.</span>
              <h3>I love learning. That saves you money.</h3>
              <p>
                In my off-hours I build things a lot more serious than "personal projects" makes them sound. One is a sports-analytics platform: position-specific machine-learning models that project player performance across a decade of seasons, with a calibration framework that backtests every projection against the market's consensus rankings — so I can prove whether a new feature actually closes the gap to the market, not just whether it flatters some number I invented. Another is a game-prediction app running models over 3,000+ historical games, with a weekly data pipeline, a live odds-API integration, an analytics dashboard, and a six-gate release check every change has to clear before it ships. That range is what makes the next client's build faster and cheaper. Curiosity is the cheap part of this job.
              </p>
            </article>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* SYSTEMS BUILT */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What I build</div>
            <h2>
              Software that's already doing the work.
            </h2>
            <p className="head-sub">
              Two systems already running every day. Beyond those, the grid below is a snapshot of the kinds of problems I can take off your plate — not a menu to pick from. The actual build gets shaped around your specific situation.
            </p>
          </div>

          {/* Recently shipped */}
          <div className="systems" style={{ marginBottom: 56 }}>
            <div className="system-row">
              <div className="system-num">01</div>
              <div>
                <div className="system-title">Real estate lead system</div>
                <div className="label-s" style={{ marginTop: 8 }}>For a residential team</div>
              </div>
              <div className="system-desc">
                Every new lead gets sorted and scored 1–10 the moment it comes in — budget, timeline, location — and the hottest ones get a personal-sounding follow-up before the agent has even seen the email. Less manual triage, fewer cold leads slipping through.
              </div>
              <div className="system-tag">In production</div>
            </div>

            <div className="system-row">
              <div className="system-num">02</div>
              <div>
                <div className="system-title">Insurance agency résumé screener</div>
                <div className="label-s" style={{ marginTop: 8 }}>For an independent agency</div>
              </div>
              <div className="system-desc">
                Applicants get scored on six things that matter for the role — experience, fit, availability, location, communication, intent — before anyone on the team opens a résumé. The team only sees the candidates worth their time.
              </div>
              <div className="system-tag">In production</div>
            </div>
          </div>

          {/* Range of patterns */}
          <div className="eyebrow muted" style={{ marginBottom: 24 }}>Other things I can take off your plate</div>
          <div className="patterns-grid">
            {PATTERNS.map((p, i) => (
              <div key={i} className="pattern-card">
                <div className="pattern-num">{String(i + 3).padStart(2, '0')}</div>
                <div className="pattern-title" dangerouslySetInnerHTML={{ __html: p.t }} />
                <div className="pattern-desc" dangerouslySetInnerHTML={{ __html: p.d }} />
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 36, fontSize: 15, fontStyle: 'italic', fontFamily: 'var(--serif)', textAlign: 'center' }}>
            None of these are off-the-shelf packages. Every project starts with a real conversation about your business.
          </p>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap-narrow">
          <p className="pull">
            <em>"You shouldn't have to choose between a $200/hr enterprise consultant and a freelancer who learned this last month. There's a middle path — and that's where I work."</em>
          </p>
          <div className="pull-attrib">— Adam Cantwell</div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How working together actually works</div>
            <h2>The whole thing is three steps.</h2>
          </div>

          <div className="grid grid-3" style={{ gap: 0 }}>
            <div style={{ padding: '32px 32px 32px 0', borderRight: '1px solid var(--rule)' }}>
              <div className="display display-m italic" style={{ color: 'var(--clay)', marginBottom: 16 }}>01</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px' }}>We talk it through</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, margin: 0 }}>
                Tell me what's piling up. I'll tell you honestly whether it's worth solving with software, with a quick process change, or by leaving it alone for now.
              </p>
            </div>
            <div style={{ padding: '32px', borderRight: '1px solid var(--rule)' }}>
              <div className="display display-m italic" style={{ color: 'var(--clay)', marginBottom: 16 }}>02</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px' }}>A short, plain-English proposal</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, margin: 0 }}>
                A one-pager: the problem, what I'd build, how long it'll take, and a fixed price. If it doesn't make sense, we don't move forward. No recurring fees.
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 32px' }}>
              <div className="display display-m italic" style={{ color: 'var(--clay)', marginBottom: 16 }}>03</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px' }}>I build it, you own it</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, margin: 0 }}>
                I build it, show your team how it works, and stick around while it settles in. When I'm done, it's yours. You're not buying a subscription to me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="wrap-narrow center">
          <div className="eyebrow center" style={{ marginBottom: 18 }}>If any of this sounds useful</div>
          <h2 className="display display-l" style={{ marginBottom: 24, textWrap: 'balance' }}>
            Let's grab <span className="italic" style={{ color: 'var(--clay)' }}>thirty minutes</span> and see if I can help.
          </h2>
          <p className="lead" style={{ maxWidth: 600, margin: '0 auto 32px' }}>
            No slide deck. No discovery script. Just a real conversation about what's slowing your business down — and whether I'm the right person to fix it. If I'm not, I'll say so.
          </p>
          <button className="btn btn-primary" onClick={() => go('contact')}>
            Start a conversation
            <Icon name="arrow-right" size={16} className="arrow" />
          </button>
        </div>
      </section>
    </main>
  );
}
