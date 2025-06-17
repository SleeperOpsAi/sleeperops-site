import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Adam & SleeperOps | AI Consulting for Small Business</title>
        <meta
          name="description"
          content="Discover the story of Adam, founder of SleeperOps, his passion for automation, and dedication to empowering small businesses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/about-us" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-20 text-[#0a2c4d] bg-gradient-to-br from-[#d9e9ff] to-[#a1c1ff]">
        {/* Logo Link */}
        <Link
          to="/"
          className="absolute top-6 left-6 z-50 inline-block p-2 bg-white rounded-lg shadow hover:shadow-lg transition"
          aria-label="Go to homepage"
        >
          <img
            src="/HeroPagelogo.png"
            alt="SleeperOps Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        <section className="relative max-w-6xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10 z-10">
          <img
            src="/family-photo.jpg"
            alt="Adam and Family"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-md object-cover"
          />

          <div className="text-[#0a2c4d] flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-6">
              Meet Adam, Founder of SleeperOps
            </h1>

            <p className="mb-6 leading-relaxed text-lg">
              I’m Adam, and I started SleeperOps driven by a passion for automation and a belief that this technology is the future for small businesses.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              This isn’t just a business — it’s a labor of love, fueled by the dream to turn this into my full-time work and to build a better future for my family.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              My goal is simple: to empower fellow small business owners with smart, practical AI solutions that save time, reduce stress, and unlock growth.
            </p>

            <p className="leading-relaxed text-lg">
              Thanks for stopping by. If you’re curious or ready to transform your business, let’s connect and build something great together.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
