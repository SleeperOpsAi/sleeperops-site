import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const faqItems = [
  {
    question: "What makes SleeperOps different from other business consultants?",
    answer:
      "Most consultants identify problems but can't implement solutions. I don't just tell you what's wrong—I build the intelligent systems that actually eliminate your operational bottlenecks. You get both the strategic insight AND the technical implementation that creates lasting competitive advantage.",
  },
  {
    question: "How do you identify which processes to automate first?",
    answer:
      "I start with a comprehensive operational audit focusing on three key factors: time cost (hours spent weekly), opportunity cost (deals lost to slow response), and error cost (mistakes requiring rework). We tackle the highest-impact bottlenecks first—typically saving 10-15 hours per week within the first month.",
  },
  {
    question: "Do I need to understand technology to work with SleeperOps?",
    answer:
      "Not at all. I handle all the technical complexity and provide simple, intuitive interfaces for your team. You'll get comprehensive training and documentation, but the systems are designed to work seamlessly with your existing processes without requiring technical expertise from your staff.",
  },
  {
    question: "What types of businesses benefit most from operational efficiency improvements?",
    answer:
      "Any growing business with repetitive processes that consume significant time. I've eliminated bottlenecks for insurance agencies (recruiting automation), real estate teams (lead qualification), financial advisors (client intake), and service businesses (customer support). The common thread is manual processes that don't scale with growth.",
  },
  {
    question: "How quickly do you typically see ROI from process automation?",
    answer:
      "Most clients see positive ROI within 30-60 days. For example, one insurance agency saved $4,200/month in operational costs within the first month by automating their recruiting process. The key is focusing on high-impact bottlenecks rather than automating everything at once.",
  },
  {
    question: "Can you integrate with our existing business tools and systems?",
    answer:
      "Yes, seamless integration is a core part of my approach. Whether you use CRM systems, email platforms, calendars, accounting software, or industry-specific tools, I build systems that work with your existing technology stack rather than forcing you to change everything.",
  },
  {
    question: "What if our processes are too unique or complex to automate?",
    answer:
      "I specialize in custom solutions for complex, unique business processes. Unlike generic automation tools, I build intelligent systems with conditional logic, exception handling, and business rules that match exactly how your business operates. Complexity is often where the biggest competitive advantages are found.",
  },
  {
    question: "How do you ensure systems won't break or need constant maintenance?",
    answer:
      "I build robust systems with error handling, monitoring, and fallback procedures. All implementations include 30 days of optimization and adjustments. I also provide clear documentation and can offer ongoing support packages. Most systems run reliably with minimal maintenance once properly deployed.",
  },
  {
    question: "What's included in the free process audit?",
    answer:
      "A comprehensive analysis of your current workflows including: time tracking of manual processes, identification of your three biggest operational bottlenecks, ROI calculations for automation opportunities, and a prioritized implementation roadmap. You get actionable recommendations regardless of whether we work together.",
  },
  {
    question: "How long does it take to implement operational improvements?",
    answer:
      "Timeline depends on complexity: Quick-win systems (lead qualification, appointment scheduling) typically take 1-2 weeks. Custom intelligence systems (complex workflows, multi-system integration) usually take 3-6 weeks. I provide clear timelines upfront and keep you updated throughout the process.",
  },
  {
    question: "What happens if we need changes or improvements after launch?",
    answer:
      "All implementations include 30 days of optimization and refinements at no additional cost. After that, I offer flexible support options: ad-hoc improvements, monthly optimization retainers, or training your team on basic maintenance. The goal is ensuring long-term success and competitive advantage.",
  },
  {
    question: "How do you measure the success of operational improvements?",
    answer:
      "I track specific business metrics: time saved per week, response time improvements, error reduction, cost savings, and competitive advantages gained. For example, clients typically see 60-90% reduction in manual processing time, 300%+ faster response rates, and significant cost savings within 60 days.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Operational Efficiency Questions Answered - SleeperOps</title>
        <meta
          name="description"
          content="Frequently asked questions about eliminating operational bottlenecks, process automation ROI, and how SleeperOps helps businesses gain competitive advantage through intelligent systems."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/faq" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-4xl mx-auto text-center bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl backdrop-blur-sm z-10 mb-16">
          <Link to="/">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps Operational Efficiency Expert"
              className="mx-auto mb-6 w-32 h-32 object-contain"
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a2c4d]">
            Frequently Asked Questions
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#2c5282] leading-relaxed">
            Everything you need to know about eliminating operational bottlenecks and gaining competitive advantage through intelligent process automation.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#0a2c4d]">
            What Our Clients Typically Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: "87%",
                desc: "reduction in manual processing time",
                icon: "⚡"
              },
              {
                metric: "30 seconds",
                desc: "average response time to prospects",
                icon: "🚀"
              },
              {
                metric: "$4,200+",
                desc: "monthly operational cost savings",
                icon: "💰"
              },
              {
                metric: "30-60 days",
                desc: "typical ROI timeframe",
                icon: "📈"
              }
            ].map(({ metric, desc, icon }) => (
              <div
                key={metric}
                className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-2xl font-bold text-[#3787b9] mb-1">{metric}</div>
                <div className="text-sm text-[#2c5282]">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-5xl mx-auto space-y-4 mb-16">
          {faqItems.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20 cursor-pointer transition-all duration-200 hover:shadow-xl"
              onClick={() => toggleIndex(idx)}
              aria-expanded={activeIndex === idx}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(idx);
              }}
            >
              <h3 className="text-lg font-semibold text-[#0a2c4d] flex justify-between items-center">
                {question}
                <span className="ml-4 text-2xl text-[#3787b9] flex-shrink-0">
                  {activeIndex === idx ? "−" : "+"}
                </span>
              </h3>
              {activeIndex === idx && (
                <div className="mt-4 pt-4 border-t border-[#3787b9] border-opacity-20">
                  <p className="text-[#2c5282] leading-relaxed">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Business Impact Section */}
        <section className="max-w-6xl mx-auto py-16 mb-16">
          <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-md border border-[#3787b9] border-opacity-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0a2c4d]">
              The Real Cost of Staying Manual
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-[#3787b9]">What Manual Processes Actually Cost:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">💸</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Lost Opportunities: $2,000+ each</p>
                      <p className="text-sm text-[#2c5282]">Prospects choosing faster competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">⏰</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Wasted Time: $750+ weekly</p>
                      <p className="text-sm text-[#2c5282]">Manager time on repetitive tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">🔄</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Errors & Rework: $1,000+ monthly</p>
                      <p className="text-sm text-[#2c5282]">Mistakes requiring costly corrections</p>
                    </div>
                  </div>
                  <div className="border-t border-[#3787b9] border-opacity-30 pt-4 mt-6">
                    <p className="font-bold text-lg text-[#0a2c4d]">Total Monthly Cost: $5,000+</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-[#3787b9]">What Intelligent Systems Deliver:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">⚡</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Instant Response Times</p>
                      <p className="text-sm text-[#2c5282]">30-second response vs. 3-day delay</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">🎯</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Elimination of Manual Work</p>
                      <p className="text-sm text-[#2c5282]">87% reduction in processing time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#3787b9] text-xl">📈</span>
                    <div>
                      <p className="font-semibold text-[#0a2c4d]">Competitive Advantage</p>
                      <p className="text-sm text-[#2c5282]">Consistently faster than competitors</p>
                    </div>
                  </div>
                  <div className="border-t border-[#3787b9] border-opacity-30 pt-4 mt-6">
                    <p className="font-bold text-lg text-[#0a2c4d]">Implementation Cost: $400-800/month</p>
                    <p className="text-sm text-[#3787b9] font-semibold">6x ROI in first year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Objections & Responses */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0a2c4d]">
            Common Concerns & Honest Answers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="font-semibold text-[#3787b9] mb-3">"This seems expensive for a small business"</h3>
              <p className="text-[#2c5282]">
                The real question is: how much are manual processes costing you right now? Most clients save more in operational costs than they invest in automation within the first 60 days. It's not an expense—it's the highest-ROI investment most businesses can make.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="font-semibold text-[#3787b9] mb-3">"What if the systems break or I need changes?"</h3>
              <p className="text-[#2c5282]">
                I build robust systems with error handling and provide 30 days of optimization included. Most systems run reliably with minimal maintenance, but I offer flexible support options if you prefer ongoing optimization and peace of mind.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="font-semibold text-[#3787b9] mb-3">"Our processes are too unique to automate"</h3>
              <p className="text-[#2c5282]">
                I specialize in complex, unique business processes that can't be solved with generic tools. Custom solutions for unique processes often provide the biggest competitive advantages because they're harder for competitors to replicate.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="font-semibold text-[#3787b9] mb-3">"We don't have time to implement new systems"</h3>
              <p className="text-[#2c5282]">
                I handle the entire implementation while you focus on your business. Most quick-win systems are deployed in 1-2 weeks with minimal disruption to current operations. The time investment is small compared to the hours you'll save every week afterward.
              </p>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-10 border border-[#3787b9] border-opacity-30">
            <h2 className="text-3xl font-bold mb-6 text-[#0a2c4d]">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-lg text-[#2c5282]">
              The best way to understand how operational efficiency improvements can help your specific business is through a personalized conversation. I'll answer all your questions and identify your biggest improvement opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block rounded-xl bg-[#3787b9] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105"
              >
                Book Free Process Audit
              </Link>
              <Link
                to="/what-we-do"
                className="inline-block rounded-xl border-2 border-[#3787b9] px-8 py-4 font-semibold text-[#3787b9] hover:bg-[#3787b9] hover:text-white transition"
              >
                See How I Can Help
              </Link>
            </div>
            <p className="text-sm text-[#2c5282] mt-4">
              <strong>My guarantee:</strong> If I can't identify $2,000+ worth of improvement opportunities in our conversation, I'll be the first to tell you automation isn't your priority right now.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
