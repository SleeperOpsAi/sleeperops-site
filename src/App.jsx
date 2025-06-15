export default function HomePage() {
  return (
    <main className="relative min-h-screen text-gray-900 px-6 py-16">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a2c4d] to-[#153e75] opacity-95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[url('/pattern-tech.svg')] bg-repeat opacity-10"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative max-w-3xl mx-auto text-center">
        <img
          src="/HeroPagelogo.png"
          alt="SleeperOps AI Consulting Logo"
          className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain opacity-0 animate-fadeIn"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f3d5f] leading-tight mb-4">
          Smarter Systems for Small Business.
        </h1>
        <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto">
          SleeperOps helps founders save time, reduce friction, and grow faster—with high value, low maintenance solutions.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#0f3d5f] text-white font-semibold rounded-2xl shadow hover:bg-[#0d3554] transition"
          >
            Book Your Free Consult — Limited Spots
          </a>
          <a
            href="#what-we-do"
            className="inline-block px-6 py-3 border border-[#0f3d5f] text-[#0f3d5f] font-semibold rounded-2xl shadow hover:bg-[#0f3d5f] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="relative py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0f3d5f] mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Stack Consulting",
              desc: "Free discovery call to understand your workflow and recommend the right tools. Ideal for small teams and operators.",
              cost: "Free",
              icon: (
                <svg
                  className="w-10 h-10 mb-4 mx-auto text-[#0f3d5f]"
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
                  className="w-10 h-10 mb-4 mx-auto text-[#0f3d5f]"
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
                  className="w-10 h-10 mb-4 mx-auto text-[#0f3d5f]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20h9" />
                  <path d="M12 4h9" />
                  <path d="M12 12h9" />
                  <path d="M3 8v8a4 4 0 004 4h8a4 4 0 004-4v-8" />
                </svg>
              ),
            },
          ].map(({ title, desc, cost, icon }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow-md text-center">
              {icon}
              <h3 className="text-xl font-semibold text-[#0f3d5f] mb-2">{title}</h3>
              <p>{desc}</p>
              <p className="mt-4 text-sm font-medium text-gray-700">💰 Cost: {cost}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 bg-[#f5faff] max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0f3d5f] mb-10">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div key={title} className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="font-semibold text-[#0f3d5f] mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SleeperOps */}
      <section className="relative py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0f3d5f] mb-10">Why SleeperOps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow text-center font-semibold">
            Fast Deployments – 7–10 day builds
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center font-semibold">
            Business-First AI – No hype, just impact
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center font-semibold">
            Modular Systems – Prebuilt or tailored
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center font-semibold">
            Integrated & Scalable – Built to grow with your ops
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative text-center py-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#0f3d5f] mb-4">
          Let’s build something smarter.
        </h2>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#0f3d5f] text-white font-semibold rounded-2xl shadow hover:bg-[#0d3554] transition"
        >
          Book Free Consult
        </a>
      </section>

      {/* Footer */}
      <footer className="relative text-center text-sm py-6 text-gray-600">
        SleeperOps © 2025 •
        <a href="mailto:info@sleeperops.com" className="text-[#0f3d5f] mx-2">
          Email
        </a>
        •
        <a href="#" className="text-[#0f3d5f] mx-2" aria-label="LinkedIn (placeholder)">
          LinkedIn
        </a>
        •
        <a href="#" className="text-[#0f3d5f] mx-2" aria-label="Fiverr (placeholder)">
          Fiverr
        </a>
      </footer>
    </main>
  );
}
