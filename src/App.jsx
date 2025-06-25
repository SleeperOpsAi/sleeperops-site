import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntakeForm from "./IntakeForm";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>SleeperOps | Advanced AI Automation & Custom Workflows for Growing Businesses</title>
        <meta
          name="description"
          content="Custom AI workflows that work while you sleep. From lead qualification to recruiting automation, we build intelligent systems using n8n, OpenAI, and advanced automation tools."
        />
        <meta
          name="keywords"
          content="AI automation, custom workflows, lead qualification, recruiting automation, n8n workflows, OpenAI integration, business process automation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-4xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10">
          <div className="inline-block p-1 rounded-md shadow-md">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Automation Logo"
              className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          </div>
          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-shadow sm:text-5xl">
            Your AI Systems, Built to Run While You Sleep.
          </h1>
          <p className="mb-6 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            SleeperOps delivers real AI automation – not Zapier knockoffs. We build multi-agent workflows with tools like n8n, OpenAI, Claude, and your existing stack.
          </p>
          <p className="mb-6 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            Whether you're automating lead qualification, recruiting, or customer intake, our systems are built to scale with your growth.
          </p>

          <div className="mb-8 text-sm text-white/70 max-w-md mx-auto">
            Curious how AI fits into your operations?{" "}
            <Link to="/contact" className="underline font-semibold">
              Book your free strategy session now.
            </Link>
          </div>

          <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition"
            >
              Get Your Free Strategy Session
            </Link>
            <Link
              to="/what-we-do"
              className="inline-block rounded-2xl border border-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0f3d5f] hover:text-white transition"
            >
              Discover Our AI Systems
            </Link>
          </div>
        </section>

        {/* Technical Credibility Section */}
        <section className="relative max-w-6xl mx-auto py-16 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white drop-shadow-md">
            Built with Enterprise-Grade Tools
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            We don't just use basic automation tools. Our systems are built with enterprise-grade platforms for reliability and sophistication.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                title: "n8n Workflows",
                desc: "Advanced automation platform for complex business logic",
                icon: "⚙️"
              },
              {
                title: "OpenAI Integration",
                desc: "GPT-4 for intelligent decision-making and content",
                icon: "🧠"
              },
              {
                title: "Custom APIs",
                desc: "Connect any system with tailored integrations",
                icon: "🔗"
              },
              {
                title: "Smart Analytics",
                desc: "Track performance and optimize over time",
                icon: "📊"
              }
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-4 text-center shadow-md backdrop-blur-md"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white drop-shadow">
                  {title}
                </h3>
                <p className="text-white/90 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section
          id="what-we-do"
          className="relative max-w-6xl mx-auto py-20 text-center"
        >
          <h2 className="mb-10 text-3xl font-bold text-white drop-shadow-md">
            Smart Automation That Actually Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Free Strategy Session",
                desc: "We analyze your current workflows and recommend specific AI tools and automations that will save you the most time. This consultation is completely free.",
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
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
              },
              {
                title: "Ready-to-Deploy Systems",
                desc: "Proven AI workflows for common business needs like lead qualification, recruiting funnels, and customer intake. Built with advanced tools and ready to integrate.",
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
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 3v4M8 3v4M3 11h18" />
                  </svg>
                ),
              },
              {
                title: "Custom AI Workflows",
                desc: "Completely tailored automation systems built specifically for your business processes. Advanced multi-step workflows with intelligent decision-making.",
                cost: "$750–$3.5k + optional support",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-white drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15.31 8.031a3.001 3.001 0 0 0-6.62 0l-2.59 1.5 1 1.73 2.58-1.5a3 3 0 0 0 5.63 1.56l2.58 1.5 1-1.73-2.59-1.5z" />
                    <path d="M12 15v2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7v1" strokeLinecap="round" strokeLinejoin="round" />
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
                <p className="text-white/90 mb-4">{desc}</p>
                <p className="mt-4 text-sm font-medium text-white/80">
                  💰 Investment: {cost}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative max-w-6xl mx-auto py-20 px-8 bg-blue-900/40 rounded-xl backdrop-blur-md text-center text-white">
          <h2 className="mb-6 text-3xl font-bold drop-shadow-md text-white">
            What We Build
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Real automation systems that solve actual business problems.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Intelligent Lead Qualification",
                desc: "AI-powered systems that score, route, and follow up with leads automatically based on your criteria.",
              },
              {
                title: "Automated Recruiting Funnels",
                desc: "End-to-end hiring workflows that screen candidates, schedule interviews, and manage onboarding.",
              },
              {
                title: "Smart Customer Support",
                desc: "Knowledge base chatbots and automated response systems that handle common inquiries 24/7.",
              },
              {
                title: "Process Integration",
                desc: "Connect your CRM, email, calendar, and other tools into seamless automated workflows.",
              },
              {
                title: "Document & Data Processing",
                desc: "Automated file transformation, data extraction, and intelligent document handling.",
              },
              {
                title: "Custom Business Logic",
                desc: "Multi-step decision trees and complex automation tailored to your specific processes.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md text-left"
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
          <h2 className="mb-10 text-3xl font-bold drop-shadow-md">Why Choose SleeperOps</h2>
          <p className="mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
            We're not just another automation service. Here's what makes us different.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md font-semibold drop-shadow">
              <strong>Advanced Technical Stack</strong> — We use enterprise-grade tools like n8n and OpenAI, not just basic Zapier workflows
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md font-semibold drop-shadow">
              <strong>Fast Implementation</strong> — Most systems deployed within 7-14 days, with clear timelines and milestones
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md font-semibold drop-shadow">
              <strong>Custom Built for You</strong> — No cookie-cutter solutions. Every workflow is designed for your specific business needs
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md font-semibold drop-shadow">
              <strong>Real Business Impact</strong> — Focus on measurable results: time saved, leads processed, revenue protected
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section
          aria-label="About Adam and SleeperOps"
          className="relative max-w-4xl mx-auto py-20 px-8 text-center"
        >
          <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-8 text-3xl font-bold text-[#153e75] drop-shadow">
              About Adam and SleeperOps
            </h2>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed">
              Hi, I'm Adam. With 10+ years in enterprise information systems including Oracle Cloud, I started SleeperOps because I saw how small businesses were struggling with manual processes that could easily be automated.
            </p>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed mt-4">
              Unlike agencies that just use basic tools, I build sophisticated automation systems using the same enterprise-grade platforms I've worked with in large organizations—but made accessible for growing businesses.
            </p>
            <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed mt-4">
              SleeperOps is my full-time focus, and I'm passionate about creating automation that doesn't just save time—it actually makes your business run better.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="relative max-w-3xl mx-auto py-16 text-center text-white"
        >
          <h2 className="mb-4 text-3xl font-bold drop-shadow-md">
            Ready to Build Something Smarter?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Let's discuss your workflows and see how AI automation can transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-[#0f3d5f] px-6 py-3 font-semibold shadow hover:bg-[#0d3554] transition text-white"
          >
            Book Free Strategy Session
          </Link>
        </section>
      </main>
    </>
  );
}

export default function App() {
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Book Now</Link>
        </nav>
      </div>

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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<Services />} />  
        <Route path="/contact" element={<IntakeForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}
