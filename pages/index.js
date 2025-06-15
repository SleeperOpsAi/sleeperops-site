import Head from 'next/head';

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
            {/* Your service cards go here */}
          </div>
        </section>
      </main>

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
}
