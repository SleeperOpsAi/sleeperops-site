export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#b2d4eb] to-[#1f4e78] text-gray-900 px-6 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <img
          src="/logo.png"
          alt="SleeperOps Logo"
          className="mx-auto mb-8 w-24 h-24"
        />
        <h1 className="text-5xl font-extrabold text-[#0f3d5f] leading-tight mb-6">
          AI Behind the Scenes,<br /> Business Results Up Front.
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          SleeperOps builds low/no-code automations, GPT agents, and backend systems that make your ops smarter.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#0f3d5f] text-white font-semibold rounded-2xl shadow hover:bg-[#0d3554] transition"
        >
          Book Free Consult
        </a>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-[#0f3d5f] mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0f3d5f] mb-2">AI Stack Consulting</h3>
            <p>Free discovery call to understand your workflow and recommend the right tools. Ideal for small teams and operators.</p>
            <p className="mt-4 text-sm font-medium text-gray-700">💰 Cost: Free</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0f3d5f] mb-2">Prebuilt Agents & Workflows</h3>
            <p>Includes recruiting bots, intake GPTs, file transformers, lead qualifiers. Plug-and-play automation.</p>
            <p className="mt-4 text-sm font-medium text-gray-700">💰 $149–$499</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#0f3d5f] mb-2">Custom Automations</h3>
            <p>End-to-end builds with GPT, Make, n8n, API integrations, CRM sync, and optional hosting.</p>
            <p className="mt-4 text-sm font-medium text-gray-700">💰 $750–$3.5k + optional retainer</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#f5faff]">
        <h2 className="text-3xl font-bold text-center text-[#0f3d5f] mb-10">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">Recruiting Funnel Automation</div>
          <div className="bg-white p-6 rounded-2xl shadow">RAG Knowledge System</div>
          <div className="bg-white p-6 rounded-2xl shadow">Lead Qualification GPTs</div>
          <div className="bg-white p-6 rounded-2xl shadow">File Transformation Pipelines</div>
          <div className="bg-white p-6 rounded-2xl shadow">Webhooks & Integrations (Zapier, Make, n8n)</div>
          <div className="bg-white p-6 rounded-2xl shadow">CRM/ATS Automation (AgentZoom, Notion, Airtable)</div>
        </div>
      </section>

      {/* Why SleeperOps */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center text-[#0f3d5f] mb-10">Why SleeperOps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-2xl shadow">⚡ Fast Deployments – 7–10 day builds</div>
          <div className="bg-white p-4 rounded-2xl shadow">🧠 Business-First AI – No hype, just impact</div>
          <div className="bg-white p-4 rounded-2xl shadow">🧱 Modular Systems – Prebuilt or tailored</div>
          <div className="bg-white p-4 rounded-2xl shadow">🧩 Integrated & Scalable – Built to grow with your ops</div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-[#0f3d5f] mb-4">Let’s build something smarter.</h2>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#0f3d5f] text-white font-semibold rounded-2xl shadow hover:bg-[#0d3554] transition"
        >
          Book Free Consult
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-600">
        SleeperOps © 2025 • <a href="mailto:info@sleeperops.com" className="text-[#0f3d5f]">info@sleeperops.com</a> • <a href="https://linkedin.com/in/adamacantwell" target="_blank" className="text-[#0f3d5f]">LinkedIn</a> • <a href="https://fiverr.com/s/dDlEkLG" target="_blank" className="text-[#0f3d5f]">Fiverr</a>
      </footer>
    </main>
  );
}
