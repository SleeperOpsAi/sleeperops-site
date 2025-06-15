import { useState } from "react";

export default function HomePage() {
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
          <a href="#about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
          <a href="#what-we-do" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          {/* Add any other menu links here */}
        </nav>
      </div>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Background pattern using PNG */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url('/background-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "400px 400px",
            zIndex: -1,
          }}
          aria-hidden="true"
        />

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

        {/* Hero Section */}
        <section className="relative max-w-3xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10">
          <div className="inline-block p-1 rounded-md shadow-md">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Consulting Logo"
              className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-shadow sm:text-5xl">
            Smarter Systems for Small Business.
          </h1>
          <p className="mb-8 max-w-xl mx-auto text-lg text-white/90">
            SleeperOps helps founders save time, reduce friction, and grow
            faster—with high value, low maintenance solutions.
          </p>
          <div className="mb-12 flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition"
            >
              Book Your Free Consult — Limited Spots
            </a>
            <a
              href="#what-we-do"
              className="inline-block rounded-2xl border border-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0f3d5f] hover:text-white transition"
            >
              Learn More
            </a>
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
                desc: "Free discovery call to understand your workflow and recommend the right tools. Ideal for small teams and operators.",
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
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
              },
              {
                title: "Prebuilt Agents & Workflows",
                desc: "Includes recruiting bots, intake GPTs, file transformers, lead qualifiers. Plug-and-play automation.",
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
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 3v4M8 3v4M3 11h18" />
                  </svg>
                ),
              },
              {
                title: "Custom Automations",
                desc: "End-to-end builds with GPT, Make, n8n, API integrations, CRM sync, and optional hosting.",
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
                  >
                    {/* New gear icon */}
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 12a3 3 0 0 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M12 8v1" />
                    <path d="M12 15v1" />
                    <path d="M8 12h1" />
                    <path d="M15 12h1" />
                    <path d="M10.5 10.5l.5.5" />
                    <path d="M13.5 13.5l.5.5" />
                    <path d="M10.5 13.5l.5-.5" />
                    <path d="M13.5 10.5l.5-.5" />
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

        {/* Use Cases - widened container */}
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
                title: "RAG Knowledge System",
                desc: "Build robust retrieval-augmented generation knowledge bases.",
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

        {/* CTA */}
        <section
          id="contact"
          className="relative max-w-3xl mx-auto py-16 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold drop-shadow-md">
            Let’s build something smarter.
          </h2>
          <a
            href="#"
            className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition text-white"
          >
            Book Free Consult
          </a>
        </section>

        {/* Footer */}
        <footer className="relative py-6 text-center text-sm text-white/80">
          SleeperOps © 2025 •
          <a
            href="mailto:info@sleeperops.com"
            className="mx-2 text-white/90 underline-offset-2 hover:underline"
          >
            Email
          </a>
          •
          <a
            href="#"
            aria-label="LinkedIn (placeholder)"
            className="mx-2 text-white/90 underline-offset-2 hover:underline"
          >
            LinkedIn
          </a>
          •
          <a
            href="#"
            aria-label="Fiverr (placeholder)"
            className="mx-2 text-white/90 underline-offset-2 hover:underline"
          >
            Fiverr
          </a>
        </footer>

        <style jsx>{`
          .text-shadow {
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `}</style>
      </main>
    </>
  );
}
