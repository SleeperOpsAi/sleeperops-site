import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const steps = [
  {
    title: "Free Strategy Session",
    desc: "We analyze your current workflows and identify the biggest time-wasting activities that can be automated.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-white"
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
    title: "Custom System Design",
    desc: "We design your automation system using the best tools for your specific needs and budget.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-white"
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
    title: "Build & Connect",
    desc: "We build your system and connect it to your existing tools—email, CRM, website, whatever you use.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-white"
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
    title: "Test & Train",
    desc: "We test everything thoroughly and show you exactly how to use and monitor your new system.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-white"
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
    title: "Launch & Support",
    desc: "Your system goes live and starts working for you 24/7, with ongoing support if needed.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-white"
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
    title: "Free Strategy Session",
    desc: "We review your business processes and show you exactly which tasks can be automated and how much time you'd save. No sales pressure, just honest recommendations.",
    cost: "Free",
  },
  {
    title: "Ready-to-Use Systems",
    desc: "Pre-built automation solutions for common business needs. We customize them to match your brand and connect them to your existing tools.",
    cost: "$149–$499",
  },
  {
    title: "Custom Automation Systems",
    desc: "Completely tailored automation built specifically for your unique business processes. Advanced multi-step workflows that handle complex decision-making.",
    cost: "$750–$3.5k + optional support",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | SleeperOps AI Automation for Small Businesses</title>
        <meta
          name="description"
          content="Custom AI automation services for small businesses. From lead management to customer support, recruiting, and email automation - we build systems that work while you sleep."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/what-we-do" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-4xl mx-auto text-center bg-white bg-opacity-20 p-10 rounded-lg shadow-lg backdrop-blur-sm z-10 mb-16">
          <Link to="/">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Automation Logo"
              className="mx-auto mb-6 w-36 h-36 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            />
          </Link>
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow">
            What We Can Automate for Your Business
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            From customer inquiries to hiring processes, we build smart systems that handle the repetitive work so you can focus on growing your business.
          </p>
        </section>

        {/* Service Options */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-12 drop-shadow">
            Our Service Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ title, desc, cost }) => (
              <article
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-md text-white"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="mb-6 leading-relaxed">{desc}</p>
                <p className="font-semibold text-lg">Investment: {cost}</p>
              </article>
            ))}
          </div>
        </section>

        {/* What We Can Automate - Comprehensive List */}
        <section className="max-w-7xl mx-auto py-20 px-8 bg-blue-900/40 rounded-xl backdrop-blur-md text-white mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-md">
            Types of Business Processes We Automate
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed text-center">
            If it's repetitive and follows a pattern, we can probably automate it. Here are some of the most common systems we build for small businesses:
          </p>
          
          {/* Customer & Lead Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Customer & Lead Management</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smart Lead Qualification",
                  desc: "Automatically score new leads, send personalized follow-ups, and route hot prospects to your sales team instantly.",
                },
                {
                  title: "Customer Support Chatbots",
                  desc: "AI assistants that answer common questions 24/7, schedule appointments, and escalate complex issues to your team.",
                },
                {
                  title: "Follow-up Sequences",
                  desc: "Automated email and text sequences that nurture prospects over time based on their behavior and interests.",
                },
                {
                  title: "Appointment Scheduling",
                  desc: "Let customers book meetings automatically with calendar integration, reminders, and rescheduling options.",
                },
                {
                  title: "Customer Onboarding",
                  desc: "Welcome new customers with automated document collection, account setup, and training resources.",
                },
                {
                  title: "Review & Feedback Collection",
                  desc: "Automatically request reviews from happy customers and collect feedback to improve your services.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
                >
                  <h4 className="mb-3 text-lg font-semibold">{title}</h4>
                  <p className="text-white/90 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring & Team Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Hiring & Team Management</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Recruiting Pipelines",
                  desc: "Automatically post jobs, screen resumes, send assessments, and schedule interviews with qualified candidates.",
                },
                {
                  title: "Employee Onboarding",
                  desc: "Guide new hires through paperwork, training modules, and introductions with automated checklists and reminders.",
                },
                {
                  title: "Performance Tracking",
                  desc: "Collect regular feedback, track goals, and remind managers about review deadlines automatically.",
                },
                {
                  title: "Time-off Management",
                  desc: "Let employees request time off, get automatic approvals based on your rules, and update calendars.",
                },
                {
                  title: "Training & Compliance",
                  desc: "Automatically assign training courses, track completion, and ensure certifications stay current.",
                },
                {
                  title: "Internal Communications",
                  desc: "Send company updates, birthday reminders, and important announcements to the right people at the right time.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
                >
                  <h4 className="mb-3 text-lg font-semibold">{title}</h4>
                  <p className="text-white/90 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operations & Admin */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Operations & Administrative Tasks</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Email Management",
                  desc: "AI assistants that draft responses, sort emails by priority, and handle routine inquiries automatically.",
                },
                {
                  title: "Document Processing",
                  desc: "Automatically extract data from invoices, contracts, and forms, then organize it in your systems.",
                },
                {
                  title: "Inventory Management",
                  desc: "Track stock levels, automatically reorder supplies when low, and update product availability across platforms.",
                },
                {
                  title: "Invoice & Payment Processing",
                  desc: "Generate invoices, send payment reminders, and update accounting records when payments are received.",
                },
                {
                  title: "Data Entry & Reporting",
                  desc: "Automatically compile data from multiple sources into reports, dashboards, and spreadsheets.",
                },
                {
                  title: "Social Media Management",
                  desc: "Schedule posts, respond to comments, and track engagement across all your social media accounts.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
                >
                  <h4 className="mb-3 text-lg font-semibold">{title}</h4>
                  <p className="text-white/90 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced AI Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Advanced AI-Powered Features</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: "Smart Knowledge Bases",
                  desc: "AI systems that can instantly find answers from your company documents, policies, and procedures to help customers and employees.",
                },
                {
                  title: "Intelligent Content Creation",
                  desc: "AI assistants that write emails, proposals, social media posts, and marketing content in your brand voice.",
                },
                {
                  title: "Predictive Analytics",
                  desc: "Systems that analyze your data to predict busy periods, identify potential issues, and recommend business decisions.",
                },
                {
                  title: "Multi-System Integration",
                  desc: "Connect all your different tools (CRM, email, accounting, etc.) so information flows automatically between them.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
                >
                  <h4 className="mb-3 text-lg font-semibold">{title}</h4>
                  <p className="text-white/90">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Process */}
        <section className="max-w-7xl mx-auto mb-20 px-6">
          <h2 className="text-3xl font-bold mb-12 drop-shadow text-center text-white">
            How We Work With You
          </h2>

          <div className="bg-[rgba(10,44,77,0.85)] rounded-2xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map(({ icon, title, desc }, idx) => (
                <div key={idx} className="flex flex-col items-center text-white text-center">
                  {icon}
                  <h4 className="text-lg font-semibold mt-2 mb-3">{title}</h4>
                  <p className="text-white/80 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Example Section */}
        <section className="max-w-6xl mx-auto mb-20 px-8 bg-white bg-opacity-10 rounded-xl p-10 backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Real Example: Automated Recruiting System</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Problem:</h3>
              <p className="text-white/90 mb-6">
                A local insurance agency was spending 15+ hours per week manually reviewing resumes, scheduling interviews, and following up with candidates. Most applicants weren't qualified, but they had to review every single one.
              </p>
              <h3 className="text-xl font-semibold mb-4">The Solution:</h3>
              <p className="text-white/90">
                We built an intelligent recruiting system that automatically posts jobs, screens resumes using AI, sends assessments to qualified candidates, and schedules interviews with top prospects. Only the best candidates reach the hiring manager.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">⏰ Time Saved:</h4>
                <p className="text-sm text-white/90">87% reduction in manual screening time</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">👥 Better Candidates:</h4>
                <p className="text-sm text-white/90">3x improvement in candidate quality scores</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">💰 Cost Savings:</h4>
                <p className="text-sm text-white/90">$4,200/month in operational costs saved</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🚀 Implementation:</h4>
                <p className="text-sm text-white/90">Live and working in under 2 weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 drop-shadow text-white">
            Ready to Automate Your Business?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Let's discuss which of your repetitive tasks we can automate to save you time and help your business run smoother.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-2xl bg-[#0f3d5f] px-8 py-4 font-semibold shadow hover:bg-[#0d3554] transition text-white"
          >
            Book Your Free Strategy Session
          </Link>
        </section>
      </main>
    </>
  );
}
