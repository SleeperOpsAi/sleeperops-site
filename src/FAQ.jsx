import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const faqItems = [
  {
    question: "What makes SleeperOps different from other automation services?",
    answer:
      "We use enterprise-grade tools like n8n and OpenAI integration to build sophisticated multi-step workflows, not just basic Zapier connections. Our systems include intelligent decision-making, custom API integrations, and advanced business logic.",
  },
  {
    question: "How long does it take to build and deploy a custom workflow?",
    answer:
      "Most custom workflows are completed within 7-14 days, depending on complexity. We provide clear timelines upfront and keep you updated throughout the process with regular check-ins and previews.",
  },
  {
    question: "Do I need technical knowledge to use these automation systems?",
    answer:
      "Not at all! We handle all the technical setup and provide simple interfaces for you to interact with your systems. We also include training and documentation so you feel confident using and monitoring your automations.",
  },
  {
    question: "What kind of businesses benefit most from your automation?",
    answer:
      "Growing businesses with repetitive processes that take significant time—like lead qualification, customer intake, recruiting, data processing, or multi-step follow-ups. If you're spending hours on tasks that follow predictable patterns, we can probably automate them.",
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer:
      "Yes! We specialize in connecting different systems through APIs and webhooks. Whether it's your CRM, email platform, spreadsheets, or industry-specific software, we can likely integrate it into your automated workflows.",
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer:
      "All custom workflows include setup support and initial training. We also offer optional ongoing optimization and support retainers for businesses that want continuous improvements and system monitoring.",
  },
  {
    question: "How do I know if automation is worth the investment?",
    answer:
      "During our free strategy session, we'll analyze your current processes and calculate potential time savings and ROI. We only recommend automation for processes where the benefits clearly outweigh the costs.",
  },
  {
    question: "What happens if something breaks or needs to be updated?",
    answer:
      "We build robust systems with error handling and monitoring. For the first 30 days, we include free fixes and adjustments. After that, we offer support packages or can train your team on basic maintenance.",
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
        <title>FAQ | SleeperOps Advanced AI Automation</title>
        <meta
          name="description"
          content="Frequently asked questions about SleeperOps AI automation, custom workflows, pricing, and support for growing businesses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/faq" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Logo container with frosted glass */}
        <div
          className="mx-auto mb-10 p-8 rounded-xl max-w-xs bg-white bg-opacity-10 backdrop-blur-md shadow-lg flex flex-col items-center"
          style={{
            boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <Link to="/">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps Advanced AI Automation Logo"
              className="mx-auto mb-4 cursor-pointer"
              style={{
                maxWidth: "160px",
                height: "auto",
                filter:
                  "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))",
              }}
            />
          </Link>
          <p
            className="text-center text-white font-semibold tracking-wide select-none"
            style={{ fontSize: "1.25rem", lineHeight: "1.5" }}
          >
            Advanced AI Automation for Growing Businesses
          </p>
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-8 text-center drop-shadow-md">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <section className="max-w-4xl mx-auto space-y-4">
          {faqItems.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 rounded-xl p-6 shadow-md backdrop-blur-md cursor-pointer"
              onClick={() => toggleIndex(idx)}
              aria-expanded={activeIndex === idx}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(idx);
              }}
            >
              <h3 className="text-lg font-semibold text-white flex justify-between items-center">
                {question}
                <span className="ml-2 text-xl">
                  {activeIndex === idx ? "−" : "+"}
                </span>
              </h3>
              {activeIndex === idx && (
                <p className="mt-4 text-white/90 leading-relaxed">{answer}</p>
              )}
            </div>
          ))}
        </section>

        {/* CTA - FIXED LINK */}
        <section className="max-w-3xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Still have questions?
          </h2>
          <p className="mb-6 text-white/90">
            Schedule a free strategy session and we'll discuss your specific needs.
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
