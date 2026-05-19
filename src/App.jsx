import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

const VIEWS = ['home', 'services', 'about', 'faq', 'contact'];

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'What I Build' },
  { key: 'about', label: 'About Adam' },
  { key: 'faq', label: 'FAQ' },
];

function Nav({ view, go }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => { e.preventDefault(); go('home'); }}
        >
          <img src="/HeroPagelogo.png" alt="SleeperOps" className="brand-logo" />
        </a>
        <button
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          {NAV.map((n) => (
            <a
              key={n.key}
              href={'#' + n.key}
              className={'nav-link' + (view === n.key ? ' active' : '')}
              onClick={(e) => { e.preventDefault(); go(n.key); setOpen(false); }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); go('contact'); setOpen(false); }}
          >
            Start a conversation
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img src="/HeroPagelogo.png" alt="SleeperOps" className="footer-logo" />
            <p className="footer-display" style={{ marginTop: 16 }}>
              A small practice, with <em>big-company thinking behind it.</em>
            </p>
            <p style={{ color: 'rgba(244,239,227,0.6)', fontSize: 14, marginTop: 8 }}>
              Run by Adam Cantwell. Based in Minneapolis. Working with small businesses across the U.S.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <ul className="footer-list">
              {NAV.map((n) => (
                <li key={n.key}>
                  <a href={'#' + n.key} onClick={(e) => { e.preventDefault(); go(n.key); }}>{n.label}</a>
                </li>
              ))}
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>What I work on</h4>
            <ul className="footer-list">
              <li>Lead capture &amp; follow-up</li>
              <li>Hiring &amp; résumé screening</li>
              <li>The repetitive thing eating your week</li>
              <li>Enterprise HR consulting</li>
              <li>Or just — whatever's piling up</li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul className="footer-list">
              <li><a href="mailto:Adam_cantwell@sleeperops.com">Adam_cantwell@sleeperops.com</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Send a quick note</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SleeperOps · Minnesota</span>
          <span>Designed and built by Adam Cantwell</span>
        </div>
      </div>
    </footer>
  );
}

const PAGES = { home: Home, services: Services, about: About, faq: FAQ, contact: Contact };

export default function App() {
  const [view, setView] = useState(() => {
    const h = window.location.hash.replace('#', '');
    return VIEWS.includes(h) ? h : 'home';
  });

  const go = (v) => {
    setView(v);
    window.history.replaceState(null, '', '#' + v);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (VIEWS.includes(h)) setView(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const Page = PAGES[view] || Home;

  return (
    <>
      <Nav view={view} go={go} />
      <Page go={go} />
      <Footer go={go} />
    </>
  );
}
