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
        <title>SleeperOps | AI Automation & Consulting for Small Businesses</title>
        <meta
          name="description"
          content="SleeperOps helps small businesses reduce admin overhead and grow faster with custom AI workflows, lead qualification systems, and AI chatbots. Book your free consult today."
        />
        <meta
          name="keywords"
          content="AI automation for small business, AI consulting services, AI lead qualification, AI sales chatbot, RAG systems for business, custom AI workflows, AI voice agents"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops-site.vercel.app/" />
      </Helmet>

      <main
        className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-[#d2ecf9] to-[#3787b9] text-gray-900"
        role="main"
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-10 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <header
          className="relative max-w-4xl mx-auto text-center bg-white bg-opacity-80 p-12 rounded-lg shadow-lg backdrop-blur-sm z-10"
          aria-label="Introduction"
        >
          <div className="inline-block p-1 rounded-md shadow-md">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps AI Consulting Logo"
              className="mx-auto mb-8 w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            Smarter Systems for Small Business
          </h1>
          <p className="mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            At SleeperOps, we believe AI is a powerful tool—not a magic wand. Our expert AI automation
            and consulting services help small businesses reduce manual work, eliminate data friction,
            and grow sustainably. The key is smart setups that save you hours every day.
          </p>
          <p className="mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            From custom RAG systems that optimize your data search to AI-powered lead qualification and
            sales chatbots, we build practical solutions that pay off long term.
          </p>

          <nav className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#3787b9] px-8 py-4 text-white font-semibold shadow hover:bg-[#2c638f] transition"
              aria-label="Start with a quick intake form"
            >
              Start with a Quick Intake Form
            </Link>
            <Link
              to="/what-we-do"
              className="inline-block rounded-full border-2 border-[#3787b9] px-8 py-4 text-[#3787b9] font-semibold shadow hover:bg-[#3787b9] hover:text-white transition"
              aria-label="Discover how AI can work for you"
            >
              Discover How AI Can Work for You
            </Link>
          </nav>
        </header>

        {/* What We Do Section */}
        <section
          id="what-we-do"
          className="relative max-w-7xl mx-auto py-20 text-center"
          aria-labelledby="what-we-do-title"
        >
          <h2
            id="what-we-do-title"
            className="mb-12 text-3xl font-bold text-[#3787b9]"
          >
            What We Do
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "AI Stack Consulting",
                desc: "We start by understanding your daily work and recommend easy-to-use AI tools tailored to save you time and hassle. This first consultation is free.",
                cost: "Free",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-[#3787b9]"
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
                title: "Prebuilt Smart Helpers",
                desc: "Plug-and-play AI assistants that handle recruiting, lead checking, intake forms, and repetitive tasks so you can focus on growing your business.",
                cost: "$149–$499",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-[#3787b9]"
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
                title: "Custom Workflow Builds",
                desc: "Tailored AI-powered automations designed to fit your unique processes perfectly, saving you hours every week.",
                cost: "$750–$3.5k + optional retainer",
                icon: (
                  <svg
                    className="mx-auto mb-4 w-10 h-10 text-[#3787b9]"
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
              <article
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-6 text-center shadow-md backdrop-blur-md"
                aria-label={title}
              >
                {icon}
                <h3 className="mb-2 text-xl font-semibold text-[#3787b9]">{title}</h3>
                <p className="text-gray-900">{desc}</p>
                <p className="mt-4 text-sm font-medium text-gray-800">💰 Cost: {cost}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          aria-labelledby="use-cases-title"
          className="relative max-w-7xl mx-auto py-20 px-8 bg-[#3787b9]/20 rounded-xl backdrop-blur-md text-center"
        >
          <h2
            id="use-cases-title"
            className="mb-10 text-3xl font-bold text-[#3787b9]"
          >
            Use Cases
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-gray-900">
            {[
              {
                title: "Automate Your Hiring Process",
                desc: "Have a digital assistant screen candidates, schedule interviews, and answer common questions—freeing you from repetitive emails and calls.",
              },
              {
                title: "Smart Customer Service Chatbots",
                desc: "Chatbots handle FAQs 24/7, instantly giving customers the info they need, improving satisfaction and letting your team focus on important tasks.",
              },
              {
                title: "Lead Qualification Made Simple",
                desc: "Our AI systems sift through incoming leads to identify those most likely to convert so you can focus your efforts where it counts.",
              },
              {
                title: "Effortless Data Processing",
                desc: "Automatically clean and organize your data from spreadsheets and files, helping you make faster, better decisions.",
              },
              {
                title: "Seamless Integration of Your Tools",
                desc: "Connect your calendars, CRMs, and email apps so they talk to each other—automating follow-ups and record updates without lifting a finger.",
              },
              {
                title: "Automate Your Sales Pipeline",
                desc: "Keep your sales funnel updated in real-time with automated reminders and tasks to help you close deals faster with less effort.",
              },
            ].map(({ title, desc }) => (
              <article
                key={title}
                className="rounded-2xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md"
                aria-label={title}
              >
                <h3 className="mb-2 font-semibold text-[#3787b9]">{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why SleeperOps Section */}
        <section
          aria-labelledby="why-sleeperops-title"
          className="relative max-w-5xl mx-auto py-20 text-center"
        >
          <h2
            id="why-sleeperops-title"
            className="mb-10 text-3xl font-bold text-[#3787b9]"
          >
            Why SleeperOps
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 list-none text-gray-900">
            {[
              "Fast Deployments – 7–10 day builds",
              "Business-First AI – No hype, just impact",
              "Modular Systems – Prebuilt or tailored",
              "Integrated & Scalable – Built to grow with your ops",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white bg-opacity-20 p-6 shadow-md backdrop-blur-md font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Personal Note Section */}
        <section
          aria-label="About Adam and SleeperOps"
          className="relative max-w-4xl mx-auto py-20 px-8 text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-[#3787b9]">About Adam and SleeperOps</h2>
          <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed">
            Hi, I’m Adam — a small business owner and systems enthusiast who’s completely obsessed with the possibilities of AI.
            After years of hands-on experience streamlining operations, I’ve seen firsthand how the right tools can transform a business.
          </p>
          <p className="max-w-3xl mx-auto text-gray-900 text-lg leading-relaxed mt-4">
            SleeperOps is my full-time passion project where I’m dedicated to bringing practical, easy-to-use AI solutions to small businesses like yours.
            I truly believe this technology will revolutionize how we work and live every day.
            I’m constantly learning and excited to help you get the most value out of AI — no hype, just real impact that empowers your business to thrive.
          </p>
        </section>

        {/* Call to Action */}
        <section
          id="contact"
          className="relative max-w-3xl mx-auto py-16 text-center"
          aria-label="Call to action"
        >
          <h2 className="mb-6 text-3xl font-bold text-[#3787b9]">
            Let’s build something smarter together.
          </h2>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-[#3787b9] px-8 py-4 font-semibold shadow hover:bg-[#2c638f] transition text-white"
            aria-label="Book your free consultation with SleeperOps"
          >
            Book Your Free Consult
          </Link>
          <p className="mt-4 max-w-md mx-auto text-gray-700 text-sm">
            Not sure where to start? Our experts will help you identify your biggest automation opportunities.
          </p>
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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
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
