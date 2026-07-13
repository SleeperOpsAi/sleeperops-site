import Icon from '../Icon.jsx';

export default function About({ go }) {
  return (
    <main>
      {/* PAGE INTRO */}
      <section className="page-intro">
        <div className="wrap">
          <div className="eyebrow">A little about Adam</div>
          <h1>
            Who you're actually hiring.
          </h1>
          <p>
            SleeperOps is one person. Here's who that person is, where the experience comes from, and why this practice exists at all.
          </p>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="founder">
        <div className="wrap">
          <div className="founder-grid">
            <div>
              <div className="founder-portrait">
                <img
                  src="/family-photo.jpg"
                  alt="Adam Cantwell"
                  className="founder-photo"
                />
              </div>
              <div className="founder-meta-row">
                <div className="founder-meta-item">
                  <span className="label-s">Based in</span>
                  <span className="val">Minneapolis</span>
                </div>
                <div className="founder-meta-item">
                  <span className="label-s">Years in the field</span>
                  <span className="val">10+</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="display display-l" style={{ marginTop: 0, marginBottom: 28 }}>
                Adam Cantwell — builder, product manager, neighbor.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', marginTop: 0 }}>
                For the last ten years I've built software inside companies of every shape and size. A 200-person business. A 700-person mid-market firm. And now a global company of 300,000+ employees. The same kinds of problems show up at every scale — they just dress up differently.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                The deep specialty is Oracle Cloud HCM, the big HR software a lot of large companies run on. I've spent years setting up and running it for hundreds of thousands of employees. That's the credential. But the skills it takes to do that well — understanding how a business actually works, designing for the weird edge cases, building software people will actually use — those skills travel. They work just as well for a sales operation, a hiring pipeline, a quoting workflow, or a customer onboarding flow.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Recently I noticed a job inside a large enterprise that nobody owned — something with AI that needed a real product lead. I made the case internally, the company created the role, and I took it. That's how I tend to operate: see the gap, make the case, build the thing.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                SleeperOps is the practice I run alongside that work. It's me applying the same thinking, sized down for small businesses, for owners and operators who don't have a Fortune-500 budget but deserve the same care and craft in their tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND TIMELINE */}
      <section className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Where the experience comes from</div>
            <h2>Where did all this experience come from?</h2>
          </div>

          <div className="grid grid-2" style={{ gap: 32 }}>
            <div className="card">
              <div className="label-s">Sr. Tech Product Manager · 2025—present</div>
              <h3>Leading a big HR rebuild</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                Running a years-long project to move a 300,000-employee company's compensation system off its old platform and onto Oracle Cloud. Strategy, configuration, governance, the lot. The kind of project that teaches you exactly how decisions get made — and where they go wrong.
              </p>
            </div>
            <div className="card">
              <div className="label-s">Sr. Software Engineer · 2022—2025</div>
              <h3>Five compensation cycles, end to end</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                Built and ran five full annual compensation cycles for a global workforce. Deep, hands-on technical work in one of the most complex corners of enterprise HR software — the kind of role where edge cases find <em>you</em>.
              </p>
            </div>
            <div className="card">
              <div className="label-s">HRIS Manager · 2019—2022</div>
              <h3>Running comp for 270,000 people</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                Owned compensation setup, releases, and reporting at a 270,000-employee company. Before that: administering Oracle ERP across HR, Finance, CRM, and Procurement; rolling out absence-management for companies from 700 to 23,000 employees.
              </p>
            </div>
            <div className="card">
              <div className="label-s">Recent initiative</div>
              <h3>Built a brand-new product role</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                Spotted that AI in HR needed a dedicated product owner inside a large enterprise. Made the internal case, advocated for it, and the role was created. That instinct — see a gap, fill it — is what I bring to client projects too.
              </p>
            </div>
          </div>

          {/* Toolbox */}
          <div className="card" style={{ marginTop: 32, padding: '40px 44px' }}>
            <div className="label-s" style={{ marginBottom: 14 }}>The toolbox · always evolving</div>
            <div className="grid" style={{ gridTemplateColumns: '1.2fr 2fr', gap: 44, alignItems: 'start' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, lineHeight: 1.1, margin: 0, color: 'var(--ink)' }}>
                I learn fast.<br />
                <span className="italic" style={{ color: 'var(--clay)' }}>You pay less.</span>
              </h3>
              <div>
                <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.65, margin: '0 0 14px' }}>
                  On my own time I build things a good deal more involved than "little apps." One is a sports-analytics platform — position-specific machine-learning models that project player performance, trained and validated across ten seasons of historical data, plus a calibration framework that backtests each projection against the industry-consensus rankings so I can honestly tell whether a new feature closes the gap to the market or just flatters an internal metric. Another is a game-prediction app running ML models over 3,000+ historical games, fed by a weekly ETL pipeline and a third-party odds API, surfaced through a multi-page dashboard, and shipped behind a six-gate release process — automated tests, lint, type-checks, model validation, a data-integrity audit, and a smoke test — that every change has to pass before it merges.
                </p>
                <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.65, margin: 0 }}>
                  The practical upside for you: I'm not married to one platform or one trick. Every new thing I learn means a better-fit fix for the next client — at a friendlier price. Curiosity is the cheap part of this job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="section">
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>The personal part</div>
              <h2 className="display display-l" style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05 }}>
                Why I do any of this.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 18px' }}>
                I'm a local guy in Minneapolis. My wife and I were married in 2020 and we have two kids. They are loud, wonderful, and excellent at reminding me what actually matters at the end of a workday.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 18px' }}>
                SleeperOps is the practice I run alongside my day job, and I run it for them. The hope is that someday it grows into something more for our family — a thing I built that quietly takes care of the people I love.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>
                Until then, every project is one small step in that direction. Which is a long way of saying: I take your work seriously, because the stakes are personal on my end too. Your problem becomes my problem. I'll treat it like that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="wrap-narrow">
          <div className="eyebrow center" style={{ marginBottom: 32 }}>How I think about the work</div>
          <p className="pull center" style={{ textAlign: 'center', textWrap: 'balance' }}>
            <em>"The hard part of any system isn't picking the technology. It's understanding the actual work well enough to know what to leave out."</em>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap-narrow center">
          <h2 className="display display-l" style={{ marginBottom: 24 }}>
            Want to talk it through?
          </h2>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto 32px' }}>
            Thirty minutes, no agenda. Worst case, you get a second opinion. Best case, we figure out what's worth building.
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
