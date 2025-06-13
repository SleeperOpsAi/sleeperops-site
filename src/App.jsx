export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d2ecf9] to-[#3787b9] text-gray-900 px-6 py-16">
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
    </main>
  );
}
