import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const processSteps = [
  {
    title: "Free Process Audit",
    desc: "We analyze your current workflows and identify the biggest operational bottlenecks costing you time and money.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-[#3787b9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Solution Design",
    desc: "We design your automation system focusing on the highest-impact improvements for your specific business.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-[#3787b9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Build & Connect",
    desc: "We build intelligent systems that integrate with your existing tools—email, CRM, calendar, whatever you use.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-[#3787b9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 11h18" />
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Test & Optimize",
    desc: "We test everything thoroughly and show you exactly how to monitor and optimize your new competitive advantage.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-[#3787b9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
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
    desc: "Your systems go live and start working 24/7, with ongoing support to ensure consistent competitive advantage.",
    icon: (
      <svg
        className="w-12 h-12 mb-3 text-[#3787b9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const servicePackages = [
  {
    title: "Free Process Audit",
    desc: "We identify exactly which operational bottlenecks are costing your business the most time and money. Complete analysis with actionable recommendations—no sales pressure.",
    cost: "Free",
    features: [
      "Workflow analysis and time tracking",
      "ROI calculation for automation opportunities", 
      "Priority ranking of improvement areas",
      "Custom implementation roadmap"
    ]
  },
  {
    title: "Quick-Win Automation",
    desc: "Proven systems for common business bottlenecks. Ready-to-deploy solutions that typically save 10-15 hours per week within 30 days.",
    cost: "$497–$1,497",
    features: [
      "Lead qualification & follow-up automation",
      "Appointment scheduling & reminder systems",
      "Email management & response automation",
      "Basic customer support chatbots"
    ]
  },
  {
    title: "Custom Intelligence Systems",
    desc: "Enterprise-level automation built specifically for your unique operational challenges. Advanced multi-step workflows with intelligent decision-making.",
    cost: "$1,497–$4,997 + optional support",
    features: [
      "Complex multi-system integrations",
      "AI-powered decision workflows",
      "Custom business intelligence dashboards",
      "Advanced process optimization"
    ]
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Eliminate Operational Bottlenecks | SleeperOps Business Automation</title>
        <meta
          name="description"
          content="Stop losing opportunities to slow manual processes. We eliminate operational bottlenecks that cost you time, money, and competitive advantage. Free process audit included."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/what-we-do" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-5xl mx-auto text-center bg-white bg-opacity-90 p-12 rounded-2xl shadow-xl backdrop-blur-sm z-10 mb-16">
          <Link to="/">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps Business Automation"
              className="mx-auto mb-6 w-32 h-32 object-contain"
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a2c4d]">
            We Eliminate Operational Bottlenecks That Cost You Opportunities
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#2c5282] leading-relaxed">
            Stop losing prospects to competitors who respond faster. Stop wasting staff time on manual data entry. 
            Stop missing opportunities because your processes are too slow.
          </p>
        </section>

        {/* Problem Identification - NEW SECTION */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-8 text-[#0a2c4d]">
            The Hidden Costs of Manual Processes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Lost Opportunities",
                cost: "$2,000+ each",
                desc: "Prospects choosing faster competitors due to slow response times",
                icon: "💸"
              },
              {
                title: "Wasted Staff Time", 
                cost: "$750/week",
                desc: "Manager time spent on manual data entry and repetitive tasks",
                icon: "⏰"
              },
              {
                title: "Errors & Rework",
                cost: "$1,000+ monthly",
                desc: "Mistakes from manual processes requiring costly corrections",
                icon: "🔄"
              }
            ].map(({ title, cost, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-80 p-8 shadow-lg backdrop-blur-md border-l-4 border-[#3787b9]"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a2c4d]">{title}</h3>
                <div className="text-2xl font-bold text-[#3787b9] mb-2">{cost}</div>
                <p className="text-[#2c5282]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30">
            <p className="text-lg text-[#0a2c4d] font-semibold">
              <strong>Total cost of staying manual: $5,000+ per month</strong><br/>
              <span className="text-[#2c5282]">Cost of intelligent automation: $400-800/month</span>
            </p>
          </div>
        </section>

        {/* Service Packages */}
        <section className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-12 text-[#0a2c4d]">
            How We Solve Your Operational Bottlenecks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map(({ title, desc, cost, features }) => (
              <article
                key={title}
                className="rounded-2xl bg-white bg-opacity-90 p-8 shadow-xl backdrop-blur-md border border-[#3787b9] border-opacity-20 text-left"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#0a2c4d]">{title}</h3>
                <div className="text-2xl font-bold text-[#3787b9] mb-4">{cost}</div>
                <p className="mb-6 leading-relaxed text-[#2c5282]">{desc}</p>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[#2c5282]">
                      <span className="text-[#3787b9] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Business Processes We Automate - PROBLEM-FOCUSED */}
        <section className="max-w-7xl mx-auto py-20 px-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2c4d]">
            Common Business Bottlenecks We Eliminate
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-[#2c5282] leading-relaxed text-center">
            If it's repetitive, time-consuming, and follows predictable patterns, we can automate it. 
            Here are the most common operational bottlenecks we solve:
          </p>
          
          {/* Customer & Lead Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#3787b9]">Customer & Lead Management Bottlenecks</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Slow Lead Response",
                  problem: "Taking 2-3 days to follow up while competitors respond in 30 seconds",
                  solution: "Instant lead qualification and personalized follow-up automation",
                },
                {
                  title: "Manual Lead Scoring",
                  problem: "Reviewing every inquiry manually, wasting time on unqualified prospects",
                  solution: "AI-powered lead scoring that identifies hot prospects automatically",
                },
                {
                  title: "Repetitive Follow-ups",
                  problem: "Staff spending hours crafting individual follow-up emails",
                  solution: "Intelligent email sequences that nurture prospects based on behavior",
                },
                {
                  title: "Double-Booked Appointments",
                  problem: "Calendar conflicts and scheduling confusion losing customers",
                  solution: "Smart scheduling with availability sync and automatic confirmations",
                },
                {
                  title: "Lost Customer Requests",
                  problem: "Inquiries falling through cracks due to manual tracking",
                  solution: "24/7 customer support chatbots with intelligent escalation",
                },
                {
                  title: "Inconsistent Onboarding",
                  problem: "New customers getting different experiences from different staff",
                  solution: "Standardized onboarding workflows with progress tracking",
                },
              ].map(({ title, problem, solution }) => (
                <div
                  key={title}
                  className="rounded-xl bg-[#3787b9] bg-opacity-10 p-6 shadow-md backdrop-blur-md border border-[#3787b9] border-opacity-20"
                >
                  <h4 className="mb-3 text-lg font-semibold text-[#0a2c4d]">{title}</h4>
                  <p className="text-[#2c5282] text-sm mb-3"><strong>Problem:</strong> {problem}</p>
                  <p className="text-[#2c5282] text-sm"><strong>Solution:</strong> {solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring & Team Management */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#3787b9]">Hiring & Team Management Bottlenecks</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Resume Screening Overload",
                  problem: "Spending 15+ hours/week reviewing unqualified candidates",
                  solution: "AI-powered resume screening that surfaces only qualified candidates",
                },
                {
                  title: "Interview Scheduling Chaos",
                  problem: "Back-and-forth emails trying to coordinate interview times",
                  solution: "Automated interview scheduling based on team availability",
                },
                {
                  title: "Inconsistent Onboarding",
                  problem: "New hires getting different training and missing important steps",
                  solution: "Standardized onboarding checklists with automatic progress tracking",
                },
                {
                  title: "Manual Performance Tracking",
                  problem: "Forgetting review deadlines and losing track of employee progress",
                  solution: "Automated performance tracking with reminder systems",
                },
                {
                  title: "Time-off Confusion",
                  problem: "Manual vacation requests creating scheduling conflicts",
                  solution: "Intelligent time-off management with automatic approvals",
                },
                {
                  title: "Training Compliance Gaps",
                  problem: "Missing certification deadlines and compliance requirements",
                  solution: "Automated training assignment and completion tracking",
                },
              ].map(({ title, problem, solution }) => (
                <div
                  key={title}
                  className="rounded-xl bg-[#3787b9] bg-opacity-10 p-6 shadow-md backdrop-blur-md border border-[#3787b9] border-opacity-20"
                >
                  <h4 className="mb-3 text-lg font-semibold text-[#0a2c4d]">{title}</h4>
                  <p className="text-[#2c5282] text-sm mb-3"><strong>Problem:</strong> {problem}</p>
                  <p className="text-[#2c5282] text-sm"><strong>Solution:</strong> {solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operations & Admin */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#3787b9]">Administrative & Operational Bottlenecks</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: "Email Management Overload",
                  problem: "Spending hours daily sorting and responding to routine emails",
                  solution: "AI assistants that draft responses, prioritize emails, and handle routine inquiries automatically",
                },
                {
                  title: "Manual Data Entry",
                  problem: "Staff copying information between systems all day long",
                  solution: "Automated data extraction and routing between all your business systems",
                },
                {
                  title: "Invoice & Payment Delays",
                  problem: "Late payments due to manual invoice generation and follow-up",
                  solution: "Automated invoicing, payment reminders, and accounting reconciliation",
                },
                {
                  title: "Inventory & Resource Tracking",
                  problem: "Running out of supplies or over-ordering due to manual tracking",
                  solution: "Smart inventory management with automatic reordering and budget controls",
                },
              ].map(({ title, problem, solution }) => (
                <div
                  key={title}
                  className="rounded-xl bg-[#3787b9] bg-opacity-10 p-6 shadow-md backdrop-blur-md border border-[#3787b9] border-opacity-20"
                >
                  <h4 className="mb-3 text-lg font-semibold text-[#0a2c4d]">{title}</h4>
                  <p className="text-[#2c5282] mb-3"><strong>Problem:</strong> {problem}</p>
                  <p className="text-[#2c5282]"><strong>Solution:</strong> {solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Success Story - Insurance Agency */}
        <section className="max-w-6xl mx-auto mb-20 px-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2c4d]">Success Story: Insurance Agency Recruiting Bottleneck</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">The Bottleneck:</h3>
              <p className="text-[#2c5282] mb-6">
                Local insurance agency owner was personally spending 15+ hours per week screening resumes, 
                scheduling interviews, and following up with candidates. 90% of applicants were unqualified, 
                but every single one required manual review.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">The Business Impact:</h3>
              <p className="text-[#2c5282] mb-6">
                The owner couldn't focus on growing the business because recruiting consumed so much time. 
                Quality candidates were being lost to faster competitors, and the hiring process was becoming 
                a major operational bottleneck.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">Our Solution:</h3>
              <p className="text-[#2c5282]">
                We built an intelligent recruiting system that automatically screens candidates using AI, 
                sends assessments to qualified prospects, and schedules interviews with top candidates. 
                Only the highest-quality candidates reach the owner's desk.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">⏰ Time Savings:</h4>
                <p className="text-[#2c5282]">87% reduction in manual screening time</p>
                <p className="text-sm text-[#2c5282]">From 15+ hours/week to under 2 hours</p>
              </div>
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">👥 Quality Improvement:</h4>
                <p className="text-[#2c5282]">3x improvement in candidate quality scores</p>
                <p className="text-sm text-[#2c5282]">Only qualified candidates reach interviews</p>
              </div>
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">💰 Cost Reduction:</h4>
                <p className="text-[#2c5282]">$4,200/month in operational costs eliminated</p>
                <p className="text-sm text-[#2c5282]">ROI achieved within first month</p>
              </div>
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">🚀 Business Growth:</h4>
                <p className="text-[#2c5282]">Owner can now focus on business expansion</p>
                <p className="text-sm text-[#2c5282]">Competitive advantage in talent acquisition</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Process */}
        <section className="max-w-7xl mx-auto mb-20 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#0a2c4d]">
            How We Eliminate Your Bottlenecks
          </h2>

          <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-md border border-[#3787b9] border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map(({ icon, title, desc }, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {icon}
                  <h4 className="text-lg font-semibold mt-2 mb-3 text-[#0a2c4d]">{title}</h4>
                  <p className="text-[#2c5282] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose SleeperOps */}
        <section className="max-w-6xl mx-auto mb-20 px-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2c4d]">Why SleeperOps Gets Different Results</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">We Focus on Business Impact, Not Just Technology</h3>
              <p className="text-[#2c5282] mb-6">
                Other automation services connect your apps together. We eliminate the operational bottlenecks 
                that are actually costing you time, money, and competitive advantage.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">Enterprise Intelligence for Small Business Budgets</h3>
              <p className="text-[#2c5282]">
                You get Fortune 500-level business intelligence and decision-making power without the 
                Fortune 500 price tag or complexity. Custom-built solutions that fit exactly how you work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">Speed When It Matters Most</h3>
              <p className="text-[#2c5282] mb-6">
                While your competitors are still manually processing inquiries, your systems respond in 30 seconds. 
                That's not just efficiency—that's competitive advantage.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">Ongoing Optimization, Not Just Setup</h3>
              <p className="text-[#2c5282]">
                We don't just build your systems and disappear. We continuously optimize your processes 
                to ensure you stay ahead of competitors who are still doing things manually.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-10 border border-[#3787b9] border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-[#0a2c4d]">
              Ready to Eliminate Your Biggest Operational Bottlenecks?
            </h2>
            <p className="mb-8 text-lg text-[#2c5282]">
              Book a free process audit and discover exactly which manual processes are costing your business the most time and money.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#3787b9] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105 mr-4"
            >
              Book Free Process Audit
            </Link>
            <Link
              to="/faq"
              className="inline-block rounded-xl border-2 border-[#3787b9] px-8 py-4 font-semibold text-[#3787b9] hover:bg-[#3787b9] hover:text-white transition"
            >
              View FAQ
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
