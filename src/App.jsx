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
        <title>SleeperOps | Stop Losing Opportunities to Slow Manual Processes</title>
        <meta
          name="description"
          content="Eliminate operational bottlenecks that cost you time, money, and opportunities. Custom automation systems that respond in seconds instead of days while eliminating 90% of manual work."
        />
        <meta
          name="keywords"
          content="business automation, operational efficiency, lead qualification, process automation, time savings, business intelligence"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        {/* Subtle Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section - COMPLETELY TRANSFORMED */}
        <section className="relative max-w-5xl mx-auto text-center bg-white bg-opacity-90 p-12 rounded-2xl shadow-xl backdrop-blur-sm z-10 mb-16">
          <div className="inline-block p-2 rounded-lg shadow-md bg-white">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps Business Automation"
              className="mx-auto mb-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
            />
          </div>
          
          {/* NEW PAIN-POINT FOCUSED HEADLINE */}
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight text-[#0a2c4d]">
            Stop Losing Opportunities to Slow, Manual Processes
          </h1>
          
          {/* NEW VALUE PROPOSITION */}
          <p className="mb-8 max-w-3xl mx-auto text-xl text-[#2c5282] leading-relaxed">
            Custom automation systems that respond to prospects <strong>instantly</strong> while eliminating 90% of manual work across critical business functions.
          </p>

          {/* PROOF POINTS - NEW SECTION */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-4 border border-[#3787b9] border-opacity-20">
              <div className="text-2xl font-bold text-[#3787b9]">87%</div>
              <div className="text-sm text-[#2c5282]">reduction in manual processing time</div>
            </div>
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-4 border border-[#3787b9] border-opacity-20">
              <div className="text-2xl font-bold text-[#3787b9]">30 seconds</div>
              <div className="text-sm text-[#2c5282]">average response time</div>
            </div>
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-4 border border-[#3787b9] border-opacity-20">
              <div className="text-2xl font-bold text-[#3787b9]">$4,200+</div>
              <div className="text-sm text-[#2c5282]">monthly savings per client</div>
            </div>
          </div>

          {/* NEW BUSINESS-FOCUSED DESCRIPTION */}
          <p className="mb-8 max-w-3xl mx-auto text-lg text-[#2c5282] leading-relaxed">
            Enterprise-level business intelligence built specifically for your workflows—not generic software that almost fits.
          </p>

          <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#3787b9] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105"
            >
              Free Process Audit
            </Link>
            <Link
              to="/what-we-do"
              className="inline-block rounded-xl border-2 border-[#3787b9] px-8 py-4 font-semibold text-[#3787b9] shadow hover:bg-[#3787b9] hover:text-white transition"
            >
              See What We Build
            </Link>
          </div>

          {/* SOCIAL PROOF */}
          <div className="text-sm text-[#2c5282]">
            Trusted by insurance agencies, real estate teams, and financial advisors to eliminate operational bottlenecks.
          </div>
        </section>

        {/* PROBLEM-FOCUSED SECTION - NEW */}
        <section className="relative max-w-6xl mx-auto py-16 text-center mb-16">
          <h2 className="mb-8 text-3xl font-bold text-[#0a2c4d]">
            Is Your Business Losing Money to These Problems?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Slow Response Times",
                desc: "Taking 2-3 days to follow up while competitors respond in 30 seconds",
                icon: "🐌"
              },
              {
                title: "Manual Data Entry",
                desc: "Staff spending hours copying information between systems",
                icon: "📝"
              },
              {
                title: "Lost Opportunities",
                desc: "Prospects choosing faster competitors due to delayed responses",
                icon: "💸"
              }
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-80 p-8 text-center shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-[#0a2c4d]">
                  {title}
                </h3>
                <p className="text-[#2c5282]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REAL CLIENT RESULTS - NEW SECTION */}
        <section className="relative max-w-6xl mx-auto py-16 px-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold text-[#0a2c4d]">
            Real Results from Recent Clients
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                metric: "92%",
                desc: "reduction in candidate screening time",
                client: "Insurance Agency"
              },
              {
                metric: "340%",
                desc: "faster lead response",
                client: "Real Estate Team"
              },
              {
                metric: "15 hours",
                desc: "weekly time savings",
                client: "Financial Advisor"
              },
              {
                metric: "30 seconds",
                desc: "average response time",
                client: "Service Business"
              }
            ].map(({ metric, desc, client }) => (
              <div
                key={metric}
                className="rounded-xl bg-[#3787b9] bg-opacity-10 p-6 border border-[#3787b9] border-opacity-30"
              >
                <div className="text-3xl font-bold text-[#3787b9] mb-2">{metric}</div>
                <div className="text-[#0a2c4d] font-medium mb-1">{desc}</div>
                <div className="text-sm text-[#2c5282]">{client}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do - BUSINESS PROBLEM FOCUSED */}
        <section
          id="what-we-do"
          className="relative max-w-6xl mx-auto py-20 text-center"
        >
          <h2 className="mb-10 text-3xl font-bold text-[#0a2c4d]">
            How We Eliminate Your Operational Bottlenecks
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Free Process Audit",
                desc: "We identify exactly which manual tasks are costing you the most time and money. This analysis is completely free with actionable recommendations.",
                cost: "Free",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-12 h-12 text-[#3787b9]"
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
                title: "Quick-Win Systems",
                desc: "Proven automation workflows for common bottlenecks like lead qualification, appointment scheduling, and follow-up sequences. Ready to deploy in days.",
                cost: "$497–$1,497",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-12 h-12 text-[#3787b9]"
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
              {
                title: "Custom Intelligence Systems",
                desc: "Enterprise-level automation built specifically for your unique processes. Multi-step workflows with intelligent decision-making and advanced business logic.",
                cost: "$1,497–$4,997 + optional support",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-12 h-12 text-[#3787b9]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2,17 12,22 22,17" />
                    <polyline points="2,12 12,17 22,12" />
                  </svg>
                ),
              },
            ].map(({ title, desc, cost, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white bg-opacity-80 p-8 text-center shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20"
              >
                {icon}
                <h3 className="mb-4 text-xl font-semibold text-[#0a2c4d]">
                  {title}
                </h3>
                <p className="text-[#2c5282] mb-6 leading-relaxed">{desc}</p>
                <p className="font-bold text-[#3787b9]">
                  Investment: {cost}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDY - RECRUITING AUTOMATION */}
        <section className="relative max-w-6xl mx-auto py-20 px-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-md mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center text-[#0a2c4d]">
            Case Study: Insurance Agency Recruiting Automation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">The Problem:</h3>
              <p className="text-[#2c5282] mb-6">
                Local insurance agency was spending 15+ hours per week manually reviewing resumes, 
                scheduling interviews, and following up with candidates. 90% of applicants weren't qualified, 
                but they had to review every single one.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">The Solution:</h3>
              <p className="text-[#2c5282]">
                We built an intelligent recruiting system that automatically screens resumes using AI, 
                sends assessments to qualified candidates, and schedules interviews with top prospects. 
                Only the best candidates reach the hiring manager.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">⏰ Time Savings:</h4>
                <p className="text-[#2c5282]">87% reduction in manual screening time</p>
              </div>
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">👥 Quality Improvement:</h4>
                <p className="text-[#2c5282]">3x improvement in candidate quality scores</p>
              </div>
              <div className="bg-[#3787b9] bg-opacity-10 rounded-lg p-6 border border-[#3787b9] border-opacity-30">
                <h4 className="font-semibold mb-2 text-[#0a2c4d]">💰 Cost Reduction:</h4>
                <p className="text-[#2c5282]">$4,200/month in operational costs eliminated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SleeperOps - REPOSITIONED */}
        <section className="relative max-w-5xl mx-auto py-20 text-center">
          <h2 className="mb-10 text-3xl font-bold text-[#0a2c4d]">Why SleeperOps Gets Different Results</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <strong className="text-[#3787b9]">Business Results, Not Just Automation</strong> 
              <p className="text-[#2c5282] mt-2">We focus on eliminating your biggest operational bottlenecks, not just connecting apps together</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <strong className="text-[#3787b9]">Enterprise Intelligence for Small Business</strong>
              <p className="text-[#2c5282] mt-2">Fortune 500 decision-making power without the Fortune 500 price tag or complexity</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <strong className="text-[#3787b9]">Speed When It Matters Most</strong>
              <p className="text-[#2c5282] mt-2">Your systems respond in 30 seconds while competitors take 3 days—that's competitive advantage</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <strong className="text-[#3787b9]">Built for How You Actually Work</strong>
              <p className="text-[#2c5282] mt-2">Custom solutions that fit your exact processes, not generic software that almost works</p>
            </div>
          </div>
        </section>

        {/* About Adam - BUSINESS CONSULTANT POSITIONING */}
        <section
          aria-label="About Adam and SleeperOps"
          className="relative max-w-5xl mx-auto py-20 px-8 text-center"
        >
          <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
            <h2 className="mb-8 text-3xl font-bold text-[#0a2c4d]">
              Meet Adam: Your Operational Efficiency Expert
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <img
                src="/family-photo.jpg"
                alt="Adam Cantwell and Family"
                className="rounded-xl shadow-lg mx-auto max-w-full h-64 object-cover"
              />
              <div className="md:col-span-2 text-left">
                <p className="text-[#2c5282] text-lg leading-relaxed mb-4">
                  After 10+ years building enterprise systems for large organizations, I discovered most small businesses 
                  were stuck with manual processes that big companies automated years ago.
                </p>
                <p className="text-[#2c5282] text-lg leading-relaxed mb-4">
                  SleeperOps brings enterprise-level business intelligence to growing businesses. I don't just connect 
                  your tools—I eliminate the operational bottlenecks that are costing you time, money, and opportunities.
                </p>
                <p className="text-[#2c5282] text-lg leading-relaxed">
                  Every system I build is designed around one goal: helping your business respond faster, work smarter, 
                  and stay ahead of competitors who are still doing things manually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="relative max-w-4xl mx-auto py-16 text-center"
        >
          <div className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-10 border border-[#3787b9] border-opacity-30">
            <h2 className="mb-4 text-3xl font-bold text-[#0a2c4d]">
              Stop Losing Opportunities to Slow Processes
            </h2>
            <p className="mb-8 text-lg text-[#2c5282]">
              Book a free process audit and discover exactly which bottlenecks are costing your business the most.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#3787b9] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105"
            >
              Book Free Process Audit
            </Link>
          </div>
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
        <span className="block w-8 h-1 bg-[#0a2c4d] rounded"></span>
        <span className="block w-8 h-1 bg-[#0a2c4d] rounded"></span>
        <span className="block w-8 h-1 bg-[#0a2c4d] rounded"></span>
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
