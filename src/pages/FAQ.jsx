import { useState } from 'react';
import Icon from '../Icon.jsx';

const FAQS = [
  {
    q: "I'm not technical — is this going to be too much for me?",
    a: "No. My job is to handle the technical part and translate everything else into plain English. You don't need to understand how the system works under the hood, only what it does for your business and how to use it day-to-day. I write down everything in normal language. If your team can use email, your team can use what I build.",
  },
  {
    q: 'What kinds of businesses do you actually work with?',
    a: "Mostly small and mid-sized businesses with work that's outgrown spreadsheets and email — real estate teams, insurance agencies, professional services firms, owner-operators of all kinds. I've worked inside companies of every size, from 200 people up to 300,000+, so I can adapt to whatever scale you're at. If you're not sure whether we're a fit, send a quick note and I'll be honest.",
  },
  {
    q: 'Are you an agency, a freelancer, or something else?',
    a: "Something else. I'm a senior product manager who's spent a decade inside large companies, and I run SleeperOps as an independent practice on the side. You're hiring one person who's done real work at real scale — not a four-person shop, not a junior contractor. Every conversation, proposal, and line of code comes from me directly.",
  },
  {
    q: 'How does pricing work?',
    a: "Every project is priced for the actual work. A small lead system isn't the same number as a multi-month consulting project, and shouldn't be. You'll see a fixed price in your written proposal before anything is signed — no surprises, no recurring \"platform\" fees, no subscriptions.",
  },
  {
    q: 'What does a project look like from start to finish?',
    a: "Three steps. (1) A real conversation about what's slowing you down. (2) A short plain-English proposal — problem, what I'd build, how long, fixed price. (3) The build, a clean handoff to your team, and thirty days of me sticking around while it settles in. At the end, the system is yours — not a subscription to me.",
  },
  {
    q: "Why does your big-company background matter for a small business like mine?",
    a: "Because most tech consultants for small businesses come from agencies or freelance. I came up the other way — a decade inside large companies, where one wrong call costs millions of dollars and affects tens of thousands of people. That experience changes what you design, and especially what you leave out. The deepest specialty is enterprise HR software (Oracle Cloud HCM), but the skills it takes to do that well — understanding how a business actually runs, planning for the weird cases, shipping software people will actually use — those skills travel just fine to your business.",
  },
  {
    q: 'Can you work with the tools I already have?',
    a: "Yes. I'm not married to any one platform. Your CRM, your spreadsheets, your email tool, the off-the-shelf software you already pay for — we use what fits. The AI and workflow landscape moves week to week, and committing to a favorite tool is a fast way to ship the wrong thing. The question I really care about is whether the system will still work in six months — not whose logo is on it.",
  },
  {
    q: 'What if I just want advice, not a build?',
    a: "Happy to have that conversation. Sometimes the right answer is a small process change, a better-configured tool you already own, or honestly \"leave it alone for now and focus on something else.\" I'd rather tell you that for free than build you something you didn't need.",
  },
  {
    q: 'Do you do NDAs, contracts, all that?',
    a: "Yes. Standard mutual NDA available on request, and every project runs against a written statement of work with clear deliverables and a fixed price. Day-job is enterprise product management — paperwork doesn't scare me.",
  },
  {
    q: 'How long does it take to get something live?',
    a: "Depends on what it is. A lead capture or applicant screening system is usually 2–4 weeks. A deeper internal workflow can run 4–8. Larger enterprise HR consulting projects vary. You'll get a real timeline in your proposal, not a sales answer.",
  },
  {
    q: 'Where are you based, and does it matter?',
    a: "Minneapolis, Minnesota. I work with clients all over the U.S. Most of it happens over video calls and shared docs; in-person makes sense for the bigger projects but it's never required. Geography is rarely the thing that decides whether a project goes well.",
  },
];

function FAQItem({ q, a, num, open, onToggle }) {
  return (
    <div className="faq-item" data-open={open} onClick={onToggle}>
      <div className="faq-num">{String(num).padStart(2, '0')}</div>
      <div>
        <div className="faq-q">{q}</div>
        {open && <div className="faq-a">{a}</div>}
      </div>
      <button className="faq-toggle" aria-label={open ? 'Collapse' : 'Expand'}>
        <Icon name={open ? 'minus' : 'plus'} size={14} stroke={1.8} />
      </button>
    </div>
  );
}

export default function FAQ({ go }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <div className="eyebrow">Common questions</div>
          <h1>
            Straight answers to the real questions.
          </h1>
          <p>
            If yours isn't here, just ask it directly — that's a faster way to get a real answer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          {FAQS.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              num={i + 1}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow center">
          <h2 className="display display-l" style={{ marginBottom: 24 }}>
            Different question? <em className="italic" style={{ color: 'var(--clay)' }}>Just ask.</em>
          </h2>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto 32px' }}>
            One email, one human reply.
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
