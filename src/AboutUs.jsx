import React from "react";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Adam & SleeperOps | Advanced AI Automation for Growing Businesses</title>
        <meta
          name="description"
          content="Meet Adam Cantwell, founder of SleeperOps. With 10+ years in enterprise systems, he brings advanced automation to growing businesses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/about-us" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-20 text-[#0a2c4d] bg-gradient-to-br from-[#d9e9ff] to-[#a1c1ff]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-10 pointer-events-none"
          aria-hidden="true"
        />

        <section className="relative max-w-6xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10 z-10">
          <img
            src="/family-photo.jpg"
            alt="Adam Cantwell and Family"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-md object-cover"
          />

          <div className="text-[#0a2c4d] flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-6">
              Meet Adam, Founder of SleeperOps
            </h1>

            <p className="mb-6 leading-relaxed text-lg">
              I'm Adam, and I started SleeperOps because I believe advanced automation shouldn't be reserved for big corporations. Every growing business deserves intelligent systems that work around the clock.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              With over 10 years building enterprise information systems including Oracle Cloud implementations, I've seen firsthand how powerful automation can transform operations. Now I'm bringing that same level of sophistication to small and growing businesses.
            </p>

            <p className="mb-6 leading-relaxed text-lg">
              Unlike basic automation services, I build advanced workflows using enterprise-grade tools like n8n, OpenAI integration, and custom API connections. My goal is to create systems that don't just save time—they make your business run smarter.
            </p>

            <p className="leading-relaxed text-lg">
              This isn't just a business for me—it's my full-time passion project. If you're ready to see how intelligent automation can transform your operations, let's connect and build something great together.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
