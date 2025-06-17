import React from "react";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Adam & SleeperOps | AI Consulting for Small Business</title>
        <meta
          name="description"
          content="Learn about Adam, the founder of SleeperOps, his passion for automation, and the mission to empower small businesses with AI solutions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/about-us" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-20 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px] pointer-events-none"
          aria-hidden="true"
        />

        <section className="relative max-w-4xl mx-auto text-center z-10">
          <img
            src="/family-photo.png"
            alt="Adam and Family"
            className="mx-auto mb-10 rounded-lg shadow-lg max-w-xs sm:max-w-md"
          />
          <h1 className="text-4xl font-extrabold mb-6 drop-shadow">
            About Adam & SleeperOps
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/90 leading-relaxed">
            Hi, I’m Adam — the founder of SleeperOps. I’m deeply passionate about automation and firmly believe it’s the future of how small businesses can work smarter, not harder.
          </p>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/90 leading-relaxed">
            I started SleeperOps out of love — for this incredible technology, for my family, and for a hope that one day this will become my full-time career. 
          </p>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/90 leading-relaxed">
            My core motivation is simple: all I truly care about is my family and their future. Through SleeperOps, I aim to help small business owners reclaim their time, reduce friction, and build workflows that empower their teams and lives.
          </p>
          <p className="text-lg max-w-xl mx-auto mb-10 text-white/90 leading-relaxed">
            Thank you for being part of this journey. Let’s build smarter systems together.
          </p>
        </section>
      </main>
    </>
  );
}
