import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Icon from '../Icon.jsx';

const FORWARD_EMAIL = 'Adam_cantwell@sleeperops.com';

const HELP_OPTIONS = [
  'Getting more out of leads',
  'Hiring & screening',
  'The repetitive thing eating my week',
  'Enterprise HR system consulting',
  'Exploring AI — not sure where to start',
  "Honestly, I'm not sure yet — let's talk",
];

const CONTACT_PREF = [
  { key: 'email', label: 'Email reply' },
  { key: 'call', label: 'Schedule a call' },
];

export default function Contact({ go }) {
  const [state, handleSubmit] = useForm('xdajagdp');
  const [pref, setPref] = useState('email');
  const [firstName, setFirstName] = useState('');

  if (state.succeeded) {
    return (
      <main>
        <section className="page-intro" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <div className="wrap-narrow">
            <div className="eyebrow">Got it. Thank you.</div>
            <h1 style={{ maxWidth: 'none' }}>
              Thanks, {firstName || 'friend'}. <em>I'll be in touch.</em>
            </h1>
            <p>
              Your note is on its way. You'll hear back from <strong>{FORWARD_EMAIL}</strong> within
              one business day — usually a lot sooner. If it sounds like a fit, the next step is just
              a thirty-minute conversation.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap-narrow center">
            <button className="btn btn-secondary" onClick={() => go('home')}>
              Back to home
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-intro">
        <div className="wrap">
          <div className="eyebrow">Let's talk</div>
          <h1>
            A quick note. <em>A real reply.</em>
          </h1>
          <p>
            Tell me what's slowing your business down. I'll get back to you within one business day —
            from a real person, not a CRM — and tell you honestly whether I think I can help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <form className="card" onSubmit={handleSubmit} style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="First and last"
                  onChange={(e) => setFirstName(e.target.value.split(' ')[0])}
                />
                <ValidationError field="name" errors={state.errors} style={{ color: 'var(--clay)', fontSize: 13 }} />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
                <ValidationError field="email" errors={state.errors} style={{ color: 'var(--clay)', fontSize: 13 }} />
              </div>

              <div className="field span-2">
                <label htmlFor="company">Company or practice (optional)</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="What you're running"
                />
              </div>

              <div className="field span-2">
                <label htmlFor="help">What you'd like help with</label>
                <select id="help" name="help" required>
                  <option value="">Pick whatever's closest (we can refine later)</option>
                  {HELP_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <ValidationError field="help" errors={state.errors} style={{ color: 'var(--clay)', fontSize: 13 }} />
              </div>

              <div className="field span-2">
                <label htmlFor="message">What's going on?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's slowing you down? What have you already tried? What would great look like?"
                />
                <ValidationError field="message" errors={state.errors} style={{ color: 'var(--clay)', fontSize: 13 }} />
              </div>

              <div className="field span-2">
                <label>Preferred next step</label>
                <div className="radio-row">
                  {CONTACT_PREF.map((p) => (
                    <label
                      key={p.key}
                      className={pref === p.key ? 'selected' : ''}
                      onClick={(e) => { e.preventDefault(); setPref(p.key); }}
                    >
                      <input
                        type="radio"
                        name="preferred_next_step"
                        value={p.label}
                        checked={pref === p.key}
                        readOnly
                      />
                      {p.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {state.errors && state.errors.length > 0 && !state.errors.some(e => e.field) && (
              <div style={{ marginTop: 28, padding: '16px 18px', background: 'var(--paper-2)', border: '1px solid var(--clay)', borderRadius: 3, fontSize: 14.5, color: 'var(--ink-2)' }}>
                <strong style={{ color: 'var(--clay)' }}>Something went wrong.</strong>{' '}
                Please try again or email{' '}
                <a href={'mailto:' + FORWARD_EMAIL} style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)' }}>
                  {FORWARD_EMAIL}
                </a> directly.
              </div>
            )}

            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send it over'}
                {!state.submitting && <Icon name="arrow-right" size={16} className="arrow" />}
              </button>
              <span className="label-s">No mailing list. No drip campaign. Just a reply.</span>
            </div>
          </form>

          <aside>
            <div className="eyebrow" style={{ marginBottom: 16 }}>What happens next</div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <li>
                <div className="display display-s italic" style={{ color: 'var(--clay)', fontSize: 22, marginBottom: 6 }}>01</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', marginBottom: 6 }}>You send a quick note</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.55 }}>
                  Just enough so I know what you're dealing with. No long forms, promise.
                </div>
              </li>
              <li>
                <div className="display display-s italic" style={{ color: 'var(--clay)', fontSize: 22, marginBottom: 6 }}>02</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', marginBottom: 6 }}>I write back within a day</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.55 }}>
                  Personally. With whether I think I can help, and if not, who might be a better fit.
                </div>
              </li>
              <li>
                <div className="display display-s italic" style={{ color: 'var(--clay)', fontSize: 22, marginBottom: 6 }}>03</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', marginBottom: 6 }}>We grab thirty minutes</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.55 }}>
                  No deck, no sales pitch. If there's a fit, I'll write up a proposal. If not, you'll know.
                </div>
              </li>
            </ol>

            <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--rule)' }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Or just email me</div>
              <a
                href={'mailto:' + FORWARD_EMAIL}
                style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 2, wordBreak: 'break-all' }}
              >
                {FORWARD_EMAIL}
              </a>
              <div style={{ marginTop: 24, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                Based in Minneapolis, MN.<br />
                Working with small businesses across the U.S.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
