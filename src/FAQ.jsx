import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const faqItems = [
  {
    question: "What is AI consulting and how can it help my small business?",
    answer:
      "AI consulting helps small businesses identify and implement AI tools and workflows that save time, reduce manual tasks, and improve efficiency — all tailored to your unique needs.",
  },
  {
    question: "Are AI tools expensive and hard to implement?",
    answer:
      "While some AI tools can be costly, SleeperOps focuses on practical, cost-effective solutions that deliver long-term value. We handle setup and customization so you don’t have to struggle with complex tech.",
  },
  {
    question: "How long does it take to see results from automations?",
    answer:
      "Results can vary depending on the complexity of workflows, but many clients see noticeable time savings and smoother operations within days to weeks after deployment.",
  },
  {
    question: "Can you customize AI workflows for my specific industry?",
    answer:
      "Absolutely! We specialize in tailoring AI automations to fit industries like real estate, financial advising, insurance, and more — ensuring the solution matches your unique business needs.",
  },
  {
    question: "What kind of ongoing support do you offer?",
    answer:
      "We provide continuous support and optimization services to keep your AI systems running smoothly and adapt them as your business evolves.",
  },
  {
    question: "How do I get started with SleeperOps?",
    answer:
      "The best first step is booking a free consult through our intake form. We’ll discuss your goals and recommend the right AI solutions for your business.",
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
        <title>FAQ | SleeperOps AI Consulting</title>
        <meta
          name="description"
          content="Frequently asked questions about SleeperOps AI consulting, automations, pricing, and support for small businesses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/faq" />
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
              alt="SleeperOps AI Solutions Logo"
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
            AI Solutions for Smarter Business Growth
          </p>
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-8 text-center drop-shadow-md">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto space-y-4">
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
                <span className="ml-2">
                  {activeIndex === idx ? "−" : "+"}
                </span>
              </h3>
              {activeIndex === idx && (
                <p className="mt-4 text-white/90 leading-relaxed">{answer}</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
