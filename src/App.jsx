export default function HomePage() {
  return (
    <>
      <Head>
        <title>SleeperOps - Smarter Systems for Small Business</title>
        <meta
          name="description"
          content="AI consulting and automation for small businesses. Save time, reduce friction, and grow faster with SleeperOps."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add Open Graph and Twitter card meta tags as needed */}
      </Head>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/pattern-tech.svg')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Sticky Header with CTA */}
        <header className="sticky top-0 z-30 bg-[#0a2c4d] bg-opacity-90 backdrop-blur-sm py-4 shadow-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
            <a href="/" className="font-bold text-white text-xl">
              SleeperOps
            </a>
            <div className="hidden md:flex space-x-6 text-white font-semibold">
              <a href="#what-we-do" className="hover:underline">
                Services
              </a>
              <a href="#use-cases" className="hover:underline">
                Use Cases
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="rounded-lg bg-[#0f3d5f] px-4 py-2 text-sm font-semibold shadow hover:bg-[#0d3554] transition md:inline-block hidden"
            >
              Book Consult
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative max-w-3xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10 mt-8">
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
            SleeperOps helps founders save time, reduce friction, and grow faster—
            with high value, low maintenance solutions.
          </p>

          {/* Brand Story */}
          <p className="mb-8 max-w-xl mx-auto text-white/80 italic">
            Founded in 2025, SleeperOps empowers small teams with tailored AI automation
            to scale smarter, not harder.
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
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <path d="M12 12h9" />
                    <path d="M3 8v8a4 4 0 004 4h8a4 4 0 004-4v-8" />
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
        <section
          id="use-cases"
          className="relative max-w-5xl mx-auto py-20 bg-white/10 backdrop-blur-md text-center text-white"
        >
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

        {/* Testimonials */}
        <section className="relative max-w-5xl mx-auto py-20 text-center text-white">
          <h2 className="mb-10 text-3xl font-bold drop-shadow-md">What Clients Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Placeholder testimonial cards */}
            {[
              {
                name: "Jane Doe",
                quote:
                  "SleeperOps transformed our operations with smart automation. Highly recommend!",
                role: "Founder, FinTech Startup",
              },
              {
                name: "John Smith",
                quote:
                  "Fast, effective, and easy to work with. Our team is saving hours daily.",
                role: "Operations Manager, Recruiting Agency",
              },
              {
                name: "Samantha Lee",
                quote:
                  "Their AI solutions gave us a clear competitive edge in lead qualification.",
                role: "Sales Director, Real Estate",
              },
            ].map(({ name, quote, role }) => (
              <div
                key={name}
                className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
              >
                <p className="mb-4 italic text-white/90">"{quote}"</p>
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-white/70">{role}</p>
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

        {/* Contact & Scheduling */}
        <section
          id="contact"
          className="relative max-w-3xl mx-auto py-20 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold drop-shadow-md">
            Let’s build something smarter.
          </h2>
          {/* Placeholder for Calendly or scheduling widget */}
          <p className="mb-8 max-w-xl mx-auto text-white/80">
            Book your free consultation today and start automating your business!
          </p>
          <a
            href="#"
            className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition text-white"
          >
            Book Free Consult
          </a>
          <p className="mt-6 text-sm text-white/70">
            Or email us at{" "}
            <a
              href="mailto:info@sleeperops.com"
              className="underline hover:text-white"
            >
              info@sleeperops.com
            </a>
          </p>
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
