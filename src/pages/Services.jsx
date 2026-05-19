import Icon from '../Icon.jsx';

const WORK_AREAS = [
  {
    num: '01',
    title: 'Lead capture & follow-up',
    note: 'Already built and running for a residential real estate team.',
    examples: [
      'Pulling every new lead into one place — forms, calls, emails, walk-ins',
      'Scoring them so you know which ones to call first',
      'A personal-sounding follow-up sent automatically',
      "Clean handoff to your CRM (or building one if you don't have one yet)",
    ],
  },
  {
    num: '02',
    title: 'Hiring & résumé screening',
    note: 'Already built and running for an insurance agency.',
    examples: [
      'Applications collected from wherever they come in',
      'Each one scored on the things that matter for your role',
      'Assessments and next steps sent automatically to the strong ones',
      'Interviews scheduled without the email back-and-forth',
    ],
  },
  {
    num: '03',
    title: 'The repetitive thing eating your week',
    note: "Shaped around whatever's actually slowing you down.",
    examples: [
      'That weekly report someone spends a half-day on',
      'Data that lives in two systems and never matches',
      'Approvals stuck in long email threads',
      'Quotes, proposals, and intake forms generated for you',
    ],
  },
  {
    num: '04',
    title: 'Enterprise HR system consulting',
    note: 'For mid-market & enterprise HR teams — my original specialty.',
    examples: [
      'Oracle Cloud HCM (Compensation, Core HR) configuration',
      'Implementation strategy & risk review',
      'AI in HR — honest strategy, not hype',
      'Standing in as an interim product lead',
    ],
  },
];

export default function Services({ go }) {
  return (
    <main>
      {/* PAGE INTRO */}
      <section className="page-intro">
        <div className="wrap">
          <div className="eyebrow">What I work on</div>
          <h1>
            Real software <em>for the real work piling up.</em>
          </h1>
          <p>
            I don't sell packages or subscriptions. We work together one project at a time, and I'll tell you up front if I'm not the right person for it. Here's a feel for the shape of the work.
          </p>
        </div>
      </section>

      {/* WORK AREAS */}
      <section className="section">
        <div className="wrap">
          <div className="systems">
            {WORK_AREAS.map((w) => (
              <div key={w.num} className="system-row" style={{ gridTemplateColumns: '80px 1.2fr 1.6fr' }}>
                <div className="system-num">{w.num}</div>
                <div>
                  <div className="system-title">{w.title}</div>
                  <div className="label-s" style={{ marginTop: 14, fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--clay)' }}>
                    {w.note}
                  </div>
                </div>
                <div>
                  <ul className="dot-list">
                    {w.examples.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WAY I WORK */}
      <section className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How I think about the work</div>
            <h2>
              Big-company thinking. <em>Small-business sizing.</em>
            </h2>
            <p className="head-sub">
              The habits I picked up building software for big organizations don't disappear when the project gets smaller — they just become more useful, because you don't have a team of twenty to clean up after a bad call.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 40 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, margin: '0 0 12px' }}>
                Map it out before building anything
              </h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.6, marginTop: 0 }}>
                Most software projects go wrong because someone picked a tool before they understood the work. I sketch the whole thing on paper first — where information flows, who decides what, what happens when something unexpected comes in. The cheap part of the project, done first.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, margin: '0 0 12px' }}>
                The right tool, not my favorite tool
              </h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.6, marginTop: 0 }}>
                The AI and workflow landscape changes every couple of months. I commit to your problem, not to a particular tool. The only question I really care about: will this still be working in six months without me touching it?
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, margin: '0 0 12px' }}>
                Built so your team can run it
              </h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.6, marginTop: 0 }}>
                I write everything down in plain language. You and your team can run the system without me. I'd rather build something you understand than something that keeps me on retainer forever. (You'll still know where to find me if you need me.)
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, margin: '0 0 12px' }}>
                Designed for the weird cases
              </h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 16.5, lineHeight: 1.6, marginTop: 0 }}>
                The reason software gets a bad reputation isn't the normal cases — it's the 10% that don't fit the pattern. Spending a decade in enterprise software teaches you to expect those up front, instead of patching them in a panic after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What you actually get</div>
            <h2>One person. <em>One proposal.</em> One working system.</h2>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
            <div style={{ padding: '24px 32px 24px 0', borderRight: '1px solid var(--rule)' }}>
              <div className="eyebrow muted" style={{ marginBottom: 14 }}>Step one</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px', lineHeight: 1.15 }}>A clear, plain-English proposal</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
                Before any work starts: a short document. What the problem is, what I'd build, how long it'll take, what it'll cost. Fixed price. If we don't both feel good about it, no one's signing anything.
              </p>
            </div>
            <div style={{ padding: '24px 32px', borderRight: '1px solid var(--rule)' }}>
              <div className="eyebrow muted" style={{ marginBottom: 14 }}>Step two</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px', lineHeight: 1.15 }}>I build it. You watch.</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
                Real progress at real intervals — not a black-box month and a big reveal. You test it with your actual data, and you sign off before it goes live.
              </p>
            </div>
            <div style={{ padding: '24px 0 24px 32px' }}>
              <div className="eyebrow muted" style={{ marginBottom: 14 }}>Step three</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 24, margin: '0 0 12px', lineHeight: 1.15 }}>Handoff &amp; a soft landing</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
                A written guide, your team trained, and me reachable for thirty days while it settles in. After that, we decide together whether ongoing support makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="section-tight">
        <div className="wrap-narrow">
          <div className="card" style={{ background: 'var(--card)', padding: '36px 40px' }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>A word about pricing</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.35, color: 'var(--ink)', margin: 0, textWrap: 'pretty' }}>
              Every project is priced for the actual work. A small lead system and a multi-month consulting project aren't the same number, and shouldn't be. You'll see a fixed price in your proposal before anything is signed — so there are no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap-narrow center">
          <h2 className="display display-l" style={{ marginBottom: 24 }}>
            Wonder if I could <em className="italic" style={{ color: 'var(--clay)' }}>help with yours?</em>
          </h2>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto 32px' }}>
            Send a quick note describing what's slowing you down. I'll reply personally, and I'll tell you honestly if it's something I can help with.
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
