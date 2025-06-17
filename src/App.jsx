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
        <title>SleeperOps | AI Automation & Consulting for Small Businesses</title>
        <meta
          name="description"
          content="SleeperOps helps small businesses reduce admin overhead and grow faster with custom AI workflows, lead qualification systems, and AI chatbots. Book your free consult today."
        />
        <meta
          name="keywords"
          content="AI automation for small business, AI consulting services, AI lead qualification, AI sales chatbot, RAG systems for business, custom AI workflows, AI voice agents"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-3xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10">
          <div className="inline-block p-1 rounded-md shadow-md">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Consulting Logo"
              className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-shadow sm:text-5xl">
            Smarter Systems for Small Business.
          </h1>
          <p className="mb-6 max-w-xl mx-auto text-lg text-white/90">
            At SleeperOps, we believe AI is a powerful tool—not a magic wand. Our expert AI automation and consulting services help small businesses reduce manual work, eliminate data friction, and grow sustainably. The key is smart setups that save you hours every day.
          </p>
          <p className="mb-6 max-w-xl mx-auto text-lg text-white/90">
            From custom RAG systems that optimize your data search to AI-powered lead qualification and sales chatbots, we build practical solutions that pay off long term.
          </p>

          <div className="mb-8 text-sm text-white/70 max-w-md mx-auto">
            Ready to see how AI can streamline your business?{" "}
            <Link to="/contact" className="underline font-semibold">
              Start with a quick intake form.
            </Link>
          </div>

          <div className="mb-12 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition"
            >
              Claim Your Free Consult Spot
            </Link>
            <Link
              to="/what-we-do"
              className="inline-block rounded-2xl border border-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0f3d5f] hover:text-white transition"
            >
              Discover How AI Can Work For You
            </Link>
          </div>
        </section>

        {/* What We Do */}
        <section
          id="what-we-do"
          className="relative max-w-6xl mx-auto py-20 text-center"
        >
          <h2 className="mb-10 text-3xl font-bold text-white drop-shadow-md">
            What We Do
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "AI Stack Consulting",
                desc: "We start by understanding your daily work and recommend easy-to-use AI tools tailored to save you time and hassle. This first consultation is free.",
                cost: "Free",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-white drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
              },
              {
                title: "Prebuilt Smart Helpers",
                desc: "Plug-and-play AI assistants that handle recruiting, lead checking, intake forms, and repetitive tasks so you can focus on growing your business.",
                cost: "$149–$499",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-white drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 3v4M8 3v4M3 11h18" />
                  </svg>
                ),
              },
              {
                title: "Custom Workflow Builds",
                desc: "Tailored AI-powered automations designed to fit your unique processes perfectly, saving you hours every week.",
                cost: "$750–$3.5k + optional retainer",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-white drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15.31 8.031a3.001 3.001 0 0 0-6.62 0l-2.59 1.5 1 1.73 2.58-1.5a3 3 0 0 0 5.63 1.56l2.58 1.5 1-1.73-2.59-1.5z" />
                    <path d="M12 15v2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7v1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map(({ title, desc, cost, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-6 text-center shadow-md backdrop-blur-md"
              >
                {icon}
                <h3 className="mb-2 text-xl font-semibold text-white drop-shadow">
                  {title}
                </h3>
                <p className="text-white/90">{desc}</p>
                <p className="mt-4 text-sm font-medium text-white/80">
                  💰 Cost: {cost}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative max-w-6xl mx-auto py-20 px-8 bg-blue-900/40 rounded-xl backdrop-blur-md text-center text-white">
          <h2 className="mb-10 text-3xl font-bold drop-shadow-md text-white">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Recruiting Funnel Automation",
                desc: "Automate recruiting workflows to save hours of manual work.",
              },
              {
                title: "Knowledge Base Chatbots",
                desc: "Build smart chatbots that answer FAQs and retrieve key info.",
              },
              {
                title: "Lead Qualification GPTs",
                desc: "Use AI to pre-qualify leads efficiently and accurately.",
              },
              {
                title: "File Transformation Pipelines",
                desc: "Streamline data processing with intelligent file workflows.",
              },
              {
                title: "Webhooks & Integrations",
                desc: "Connect your systems with Zapier, Make, n8n, and more.",
              },
              {
                title: "CRM/ATS Automation",
                desc: "Sync and automate your CRM/ATS with platforms like AgentZoom, Notion, Airtable.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
              >
                <h3 className="mb-2 font-semibold drop-shadow text-white">
                  {title}
                </h3>
                <p className="text-white/90">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why SleeperOps */}
        <section className="relative max-w-5xl mx-auto py-20 text-center text-white">
          <h2 className="mb-10 text-3xl font-bold drop-shadow-md">Why SleeperOps</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Fast Deployments – 7–10 day builds
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Business-First AI – No hype, just impact
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Modular Systems – Prebuilt or tailored
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Integrated & Scalable – Built to grow with your ops
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section
          aria-label="About Adam and SleeperOps"
          className="relative max-w-4xl mx-auto py-20 px-8 text-center"
        >
          <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-8 text-3xl font-bold text-[#153e75] drop-shadow">
              About Adam and SleeperOps
            </h2>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed">
              Hi, my name's Adam. I started SleeperOps because I saw how small businesses struggle with time-consuming admin and disorganized systems — and I knew AI could help.
            </p>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed mt-4">
              With years of experience building business systems, I’m passionate about creating practical AI tools that make daily work easier and free you up to focus on growing your business.
            </p>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed mt-4">
              SleeperOps is my full-time passion project where I help small businesses unlock the real power of AI — no hype, just smart solutions designed to save time and boost productivity. I’m constantly learning, and I’m excited to share what AI can do for you.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="relative max-w-3xl mx-auto py-16 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold drop-shadow-md">
            Let’s build something smarter.
          </h2>
          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition text-white"
          >
            Book Free Consult
          </Link>
        </section>
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
