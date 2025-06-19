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
          content="AI automation for small business, AI consulting services, AI lead qualification, AI sales chatbot, custom AI workflows, AI voice agents"
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
          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-shadow sm:text-5xl">
            Smarter Systems for Small Business.
          </h1>
          <p className="mb-4 max-w-xl mx-auto text-lg text-white/90 font-semibold">
            Custom AI tools to automate your sales, recruiting, and daily workflows.
          </p>
          <p className="mb-4 max-w-xl mx-auto text-lg text-white/90 leading-relaxed">
            At SleeperOps, we believe AI is a powerful tool—not a magic wand.
          </p>
          <p className="mb-4 max-w-xl mx-auto text-lg text-white/90 leading-relaxed">
            We help small businesses reduce manual work, eliminate data friction, and grow sustainably.
          </p>
          <p className="mb-4 max-w-xl mx-auto text-lg text-white/90 leading-relaxed">
            Our smart setups save you hours every day.
          </p>
          <p className="mb-6 max-w-xl mx-auto text-lg text-white/90 leading-relaxed">
            Whether you want to automate lead qualification, recruiting, sales follow-ups, appointment scheduling, customer support, document management, or other routine tasks, we build custom AI tools tailored to your needs that deliver real results and save you time.
          </p>


          <div className="mb-8 text-sm text-white/70 max-w-md mx-auto">
            Ready to see how AI can streamline your business?{" "}
            <Link to="/contact" className="underline font-semibold">
              Book your free consult now.
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
            {/* unchanged */}
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative max-w-6xl mx-auto py-20 px-8 bg-blue-900/40 rounded-xl backdrop-blur-md text-center text-white">
          <h2 className="mb-6 text-3xl font-bold drop-shadow-md text-white">
            Use Cases
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Here are some common ways we help small businesses automate and grow.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* unchanged */}
          </div>
        </section>

        {/* Why SleeperOps */}
        <section className="relative max-w-5xl mx-auto py-20 text-center text-white">
          <h2 className="mb-10 text-3xl font-bold drop-shadow-md">Why SleeperOps</h2>
          <p className="mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Why small businesses choose SleeperOps.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Get results fast — 7–10 day AI build timelines
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              AI solutions focused on real business impact, not hype
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Modular Systems – Prebuilt or tailored
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-4 shadow-md backdrop-blur-md font-semibold drop-shadow">
              Integrated & scalable — built to grow with your operations
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        {/* unchanged */}

        {/* CTA */}
        {/* unchanged */}
      </main>
    </>
  );
}
