import BlogPostLayout from "./BlogPostLayout";

export default function SleeperOpsJourney() {
  return (
    <BlogPostLayout title="How I Built SleeperOps: Making AI Automation Simple for Small Businesses">
      <p>
        Starting SleeperOps in 2025 has been an exciting journey—one full of learning, challenges, and early wins.
        I’m Adam Cantwell, and after 10 years working with large information systems like Oracle Cloud, I found
        myself diving headfirst into the world of AI automation. What started as curiosity quickly turned into
        passion, and now I’m on a mission to help small businesses unlock the power of AI with no/low code GPT workflows.
      </p>

      <h2 className="text-2xl font-semibold">The AI Hype vs. Reality</h2>
      <p>
        When I first started exploring AI, I saw tons of TikTok videos selling it like magic. “Have AI scrape your lead
        information and make your sales calls for you!” sounded amazing but was way more complex than it seemed. I
        hit a lot of roadblocks and issues I had to work through, and the learning curve was very, very steep—but
        incredibly rewarding. With this tech being so new, it’s hard to stay fully up to date, but the best education
        has been learning by doing—digging into these tools head on and figuring out what works.
      </p>

      <h2 className="text-2xl font-semibold">Early Client Success: Recruiting Funnel for a Local Insurance Agency</h2>
      <p>
        My first client project is a recruiting funnel for a local insurance agency. We’re in the process of building
        it out and are thrilled with the testing so far. Using targeted ad campaigns on Facebook, Instagram, and LinkedIn,
        combined with AI-powered workflows in n8n and Zapier to review applicants, score them, and tailor follow-ups,
        we believe we’ll deliver quality candidates instead of just high-volume, low-quality applicants. This automation
        is already saving the client hours of manual resume screening.
      </p>

      <h2 className="text-2xl font-semibold">Building the SleeperOps Website — 100% with AI</h2>
      <p>
        One of the coolest parts of this startup journey was building the SleeperOps website entirely with AI’s help. I’m
        no web developer, and traditional drag-and-drop builders didn’t let me fully realize my vision. With ChatGPT,
        I designed, coded, and refined every part of the site—including the intake form and visuals. I also built my own
        lead qualification workflow integrated directly into the site to enhance my business processes—tasks that would
        normally take me hours are now automated. What might’ve taken me months juggling work and family took just a few
        weeks with AI’s help, proving you don’t have to be an expert to get started.
      </p>

      <h2 className="text-2xl font-semibold">Tools and Workflows That Make a Difference</h2>
      <p>
        I’ve worked with a bunch of tools—ChatGPT, n8n, Zapier, Make, Browse AI, Jasper, Claude, Veo 3, Canva—and found
        n8n especially effective for building consistent, complex workflows. My approach focuses on no/low code AI
        consulting that automates simple, repetitive tasks like lead qualification, recruiting pipelines, CRM updates,
        and soon, sales chatbots and voice agents. In fact, I’m excited to offer heavy discounts to any customers interested
        in building voice agent projects with me.
      </p>

      <h2 className="text-2xl font-semibold">Lessons Learned and What’s Next</h2>
      <p>
        The biggest lesson I’ve learned is this: start simple. Automate those mundane, repeatable tasks that take up your
        valuable time. Even saving two hours a week can pay for itself over time. The technology isn’t perfect, and some
        things require creative workarounds, but the potential to scale and improve is enormous. Moving forward, SleeperOps
        is committed to making AI automation easy, practical, and accessible for small businesses.
      </p>

      <h2 className="text-2xl font-semibold">Conclusion: Let’s Make AI Work for You</h2>
      <p>
        AI shouldn’t be intimidating or only for tech experts. At SleeperOps, we’re here to simplify AI automation so you
        can focus on growing your business. If you’re ready to save time and harness AI’s power, book a free consultation
        with us at{' '}
        <a
          href="https://sleeperops.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          SleeperOps.com
        </a>
        . Let’s build your custom AI workflow together.
      </p>
    </BlogPostLayout>
  );
}
