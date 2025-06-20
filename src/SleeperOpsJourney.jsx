import { useEffect, useState } from "react";

export default function SleeperOpsJourney() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) setShowStickyCTA(true);
      else setShowStickyCTA(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0a2c4d] to-[#153e75] text-white px-6 py-24">
      {/* Pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-10"
        aria-hidden="true"
      />

      <article className="relative max-w-4xl mx-auto space-y-14 px-4 sm:px-6 lg:px-0">
        <h1
          className="text-5xl font-extrabold text-center drop-shadow-lg tracking-tight transform transition-transform duration-700 hover:scale-105"
          style={{ lineHeight: 1.2 }}
        >
          How I Built SleeperOps: Making AI Automation Simple for Small Businesses
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-white/90">
          Starting SleeperOps in 2025 has been an exciting journey—one full of learning, challenges, and early wins.
          I’m Adam Cantwell, and after 10 years working with large information systems like Oracle Cloud, I found
          myself diving headfirst into the world of AI automation. What started as curiosity quickly turned into
          passion, and now I’m on a mission to help small businesses unlock the power of AI with no/low code GPT workflows.
        </p>

        <div className="mx-auto max-w-3xl">
          <img
            src="/family-photo.jpg"
            alt="Adam Cantwell"
            className="rounded-xl shadow-lg mx-auto max-h-96 object-cover"
          />
        </div>

        <Section title="The AI Hype vs. Reality">
          <p>
            When I first started exploring AI, I saw tons of TikTok videos selling it like magic. “Have AI scrape your lead
            information and make your sales calls for you!” sounded amazing but was way more complex than it seemed. I
            hit a lot of roadblocks and issues I had to work through, and the learning curve was very, very steep—but
            incredibly rewarding. With this tech being so new, it’s hard to stay fully up to date, but the best education
            has been learning by doing—digging into these tools head on and figuring out what works.
          </p>
        </Section>

        <Section title="Early Client Success: Recruiting Funnel for a Local Insurance Agency">
          <p>
            My first client project is a recruiting funnel for a local insurance agency. We’re in the process of building
            it out and are thrilled with the testing so far. Using targeted ad campaigns on Facebook, Instagram, and LinkedIn,
            combined with AI-powered workflows in n8n and Zapier to review applicants, score them, and tailor follow-ups,
            we believe we’ll deliver quality candidates instead of just high-volume, low-quality applicants. This automation
            is already saving the client hours of manual resume screening.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-6 italic text-blue-300 mt-6">
            “Automation saved our recruiting team countless hours and improved candidate quality significantly.”
          </blockquote>
        </Section>

        <Section title="Building the SleeperOps Website — 100% with AI">
          <p>
            One of the coolest parts of this startup journey was building the SleeperOps website entirely with AI’s help. I’m
            no web developer, and traditional drag-and-drop builders didn’t let me fully realize my vision. With ChatGPT,
            I designed, coded, and refined every part of the site—including the intake form and visuals. I also built my own
            lead qualification workflow integrated directly into the site to enhance my business processes—tasks that would
            normally take me hours are now automated. What might’ve taken me months juggling work and family took just a few
            weeks with AI’s help, proving you don’t have to be an expert to get started.
          </p>
        </Section>

        <Section title="Tools and Workflows That Make a Difference">
          <p>
            I’ve worked with a bunch of tools—ChatGPT, n8n, Zapier, Make, Browse AI, Jasper, Claude, Veo 3, Canva—and found
            n8n especially effective for building consistent, complex workflows. My approach focuses on no/low code AI
            consulting that automates simple, repetitive tasks like lead qualification, recruiting pipelines, CRM updates,
            and soon, sales chatbots and voice agents. In fact, I’m excited to offer heavy discounts to any customers interested
            in building voice agent projects with me.
          </p>
        </Section>

        <Section title="Lessons Learned and What’s Next">
          <p>
            The biggest lesson I’ve learned is this: start simple. Automate those mundane, repeatable tasks that take up your
            valuable time. Even saving two hours a week can pay for itself over time. The technology isn’t perfect, and some
            things require creative workarounds, but the potential to scale and improve is enormous. Moving forward, SleeperOps
            is committed to making AI automation easy, practical, and accessible for small businesses.
          </p>
        </Section>

        <Section title="Conclusion: Let’s Make AI Work for You">
          <p>
            AI shouldn’t be intimidating or only for tech experts. At SleeperOps, we’re here to simplify AI automation so you
            can focus on growing your business. If you’re ready to save time and harness AI’s power, book a free consultation
            with us at{' '}
            <a
              href="https://sleeperops.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
            >
              SleeperOps.com
            </a>
            . Let’s build your custom AI workflow together.
          </p>
        </Section>
      </article>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0f3d5f] px-8 py-4 rounded-full shadow-lg animate-fade-in">
          <a
            href="https://sleeperops.com/contact"
            className="font-semibold text-white hover:text-blue-400 transition"
          >
            Book Your Free Consultation →
          </a>
        </div>
      )}
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold drop-shadow-md">{title}</h2>
      <div className="text-lg leading-relaxed text-white/90">{children}</div>
    </section>
  );
}
