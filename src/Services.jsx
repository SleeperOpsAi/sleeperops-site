import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const steps = [
  {
    title: "Discovery Call",
    desc: "We start with a free consult to understand your business and pain points.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-2 text-[#0f3d5f]"
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
    title: "Tailored AI Recommendations",
    desc: "We recommend easy-to-use AI tools that fit your workflow and goals.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-2 text-[#0f3d5f]"
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
    title: "Prebuilt Bots & Automation",
    desc: "Plug-and-play AI assistants that handle recruiting, lead qualification, intake, and more.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-2 text-[#0f3d5f]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 11h18" />
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Custom Workflow Builds",
    desc: "End-to-end tailored AI automations and integrations built to fit your unique needs.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-2 text-[#0f3d5f]"
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
        <path d="M15.31 8.031a3 3 0 0 0-6.62 0l-2.59 1.5 1 1.73 2.58-1.5a3 3 0 0 0 5.63 1.56l2.58 1.5 1-1.73-2.59-1.5z" />
        <path d="M12 15v2" />
        <path d="M12 7v1" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Optimization",
    desc: "Continuous improvement and scaling to keep your AI systems running smoothly.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-2 text-[#0f3d5f]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 4v4m0 8v4m8-8h-4m-8 0H4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "AI Stack Consulting",
    desc: "Free discovery call to understand your workflow and recommend the right tools. Ideal for small teams and operators.",
    cost: "Free",
  },
  {
    title: "Prebuilt Agents & Workflows",
    desc: "Includes recruiting bots, intake GPTs, file transformers, lead qualifiers. Plug-and-play automation.",
    cost: "$149–$499",
  },
  {
    title: "Custom Automations",
    desc: "End-to-end builds with GPT, Make, n8n, API integrations, CRM sync, and optional hosting.",
    cost: "$750–$3.5k + optional retainer",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>What We Do | SleeperOps AI Consulting</title>
        <meta
          name="description"
          content="Discover SleeperOps services from AI consulting to prebuilt automations and custom workflows designed to save time and grow your business."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/what-we-do" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-3xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10 mb-16">
          <Link to="/">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Consulting Logo"
              className="mx-auto mb-6 w-36 h-36 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          </Link>
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow">
            What We Do
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/90">
            At SleeperOps, we empower small businesses with practical AI-powered solutions designed to save time, reduce friction, and help you grow smarter and faster.
          </p>
        </section>

        {/* Services Tiers */}
        <section
          aria-labelledby="services-tiers-title"
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <h2
            id="services-tiers-title"
            className="text-3xl font-bold mb-12 drop-shadow"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ title, desc, cost }) => (
              <article
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-md text-white"
                aria-label={title}
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="mb-6">{desc}</p>
                <p className="font-semibold">💰 Cost: {cost}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Workflow Visual */}
        <section
          aria-labelledby="workflow-title"
          className="max-w-7xl mx-auto text-center mb-12 px-6"
        >
          <h2
            id="workflow-title"
            className="text-3xl font-bold mb-12 drop-shadow text-white"
          >
            How We Work
          </h2>

          {/* Workflow cards */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            {steps.map(({ title, desc, icon }, idx) => (
              <div
                key={title}
                className="flex flex-col items-center bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg backdrop-blur-md flex-1"
                aria-label={`Step ${idx + 1}: ${title}`}
              >
                <div className="mb-2">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-white/90">{desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Workflow Diagram */}
          <svg
            className="mx-auto mb-12 max-w-full"
            width="90%"
            height="120"
            viewBox="0 0 900 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
          >
            {[...Array(5)].map((_, i) => {
              const cx = 90 + i * 180;
              return (
                <React.Fragment key={i}>
                  <circle cx={cx} cy="60" r="40" stroke="#0f3d5f" strokeWidth="4" fill="#0a2c4d" />
                  {i < 4 && (
                    <path
                      d={`M${cx + 40} 60 L${cx + 90} 60`}
                      stroke="#0f3d5f"
                      strokeWidth="4"
                      markerEnd="url(#arrowhead)"
                    />
                  )}
                </React.Fragment>
              );
            })}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
                fill="#0f3d5f"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <text x="90" y="65" fill="#ffffff" fontSize="14" fontWeight="600" textAnchor="middle">Discovery</text>
            <text x="270" y="65" fill="#ffffff" fontSize="14" fontWeight="600" textAnchor="middle">Recommend</text>
            <text x="450" y="65" fill="#ffffff" fontSize="14" fontWeight="600" textAnchor="middle">Prebuilt Bots</text>
            <text x="630" y="65" fill="#ffffff" fontSize="14" fontWeight="600" textAnchor="middle">Custom Builds</text>
            <text x="810" y="65" fill="#ffffff" fontSize="14" fontWeight="600" textAnchor="middle">Ongoing</text>
          </svg>

          {/* Mini Case Study */}
          <article className="max-w-4xl mx-auto bg-white bg-opacity-10 rounded-2xl p-8 shadow-md backdrop-blur-md text-left text-white">
            <h3 className="text-2xl font-bold mb-4">Example: How We Help a Local Realtor</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Discovery call to understand lead generation challenges</li>
              <li>Recommend a lead qualification chatbot tailored to their needs</li>
              <li>Deploy prebuilt intake and follow-up workflows for faster response</li>
              <li>Build a custom integration syncing leads with their CRM</li>
              <li>Provide ongoing support and optimization as their business grows</li>
            </ul>
          </article>
        </section>

        {/* CTA Section */}
        <section
          className="max-w-3xl mx-auto text-center"
          aria-label="Call to action"
        >
          <h2 className="text-3xl font-bold mb-6 drop-shadow text-white">
            Ready to get started?
          </h2>
          <Link
            to="/contact"
            className="pointer-events-auto inline-block rounded-2xl bg-[#0f3d5f] px-8 py-4 font-semibold shadow hover:bg-[#0d3554] transition text-white"
            aria-label="Book a free consultation with SleeperOps"
          >
            Book Your Free Consult
          </Link>
        </section>
      </main>
    </>
  );
}
