import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntakeForm from "./IntakeForm";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>SleeperOps | Advanced AI Automation & Custom Workflows for Growing Businesses</title>
        <meta
          name="description"
          content="Custom AI workflows that work while you sleep. From lead qualification to recruiting automation, we build intelligent systems using n8n, OpenAI, and advanced automation tools."
        />
        <meta
          name="keywords"
          content="AI automation, custom workflows, lead qualification, recruiting automation, n8n workflows, OpenAI integration, business process automation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-4xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10">
          <div className="inline-block p-1 rounded-md shadow-md">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Automation Logo"
              className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          </div>
          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-shadow sm:text-5xl">
            Your AI Systems, Built to Run While You Sleep.
          </h1>
          <p className="mb-6 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            SleeperOps builds intelligent automation systems designed to grow with your business — not just quick fixes or generic templates. From lead qualification to recruiting and customer intake, our workflows are built to scale, adapt, and deliver lasting impact.
          </p>

          <div className="mb-8 text-sm text-white/70 max-w-md mx-auto">
            Curious how AI fits into your operations?{" "}
            <Link to="/contact" className="underline font-semibold">
              Book your free strategy session now.
            </Link>
          </div>

          <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition"
            >
              Get Your Free Strategy Session
            </Link>
            <Link
              to="/what-we-do"
              className="inline-block rounded-2xl border border-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0f3d5f] hover:text-white transition"
            >
              Discover Our AI Systems
            </Link>
          </div>
        </section>

        {/* ... rest of the component remains unchanged ... */}
      </main>
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a2c4d] bg-opacity-95 backdrop-blur-sm z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-start space-y-6 p-8 pt-20 text-white text-xl font-semibold"
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Book Now</Link>
        </nav>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        className="fixed top-6 left-6 z-50 flex flex-col space-y-1.5"
      >
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<Services />} />  
        <Route path="/contact" element={<IntakeForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}
