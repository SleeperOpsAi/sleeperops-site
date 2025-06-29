import { useEffect, useState } from "react";
import BlogPostLayout from "./BlogPostLayout";

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
    <>
      <BlogPostLayout 
        title="Why I Left Enterprise Systems to Help Small Businesses Eliminate Operational Bottlenecks"
        description="The story behind SleeperOps: How 10 years of watching large organizations struggle with efficiency led me to help growing businesses gain competitive advantage through intelligent operational systems."
        publishDate="2025-01-15"
      >
        <div className="space-y-8 text-[#2c5282] leading-relaxed">
          
          <div className="text-center mb-8">
            <img
              src="/family-photo.jpg"
              alt="Adam Cantwell and family"
              className="rounded-xl shadow-lg mx-auto max-h-96 object-cover border-4 border-[#3787b9] border-opacity-30"
            />
            <p className="text-sm text-[#3787b9] mt-4 italic">
              Building SleeperOps while being a husband and father has taught me the importance of operational efficiency in every aspect of life.
            </p>
          </div>

          <Section title="The Problem I Kept Seeing in Enterprise">
            <p>
              After 10 years working with enterprise information systems—including complex Oracle Cloud implementations—I witnessed the same frustrating pattern over and over: brilliant organizations crippled by operational inefficiencies.
            </p>
            <p>
              Large companies would spend millions on sophisticated technology, yet their teams were still drowning in manual processes. Sales prospects waited days for responses. Managers spent hours each week on data entry that should have been automated. Critical opportunities slipped through the cracks because information lived in disconnected silos.
            </p>
            <p>
              The irony was striking: these companies had access to enterprise-grade solutions that could solve their operational bottlenecks, but implementation was so complex and expensive that most departments just worked around the problems instead of solving them.
            </p>
          </Section>

          <Section title="The Small Business Revelation">
            <p>
              When I started consulting with smaller businesses, I discovered they were facing identical operational challenges—but with none of the enterprise resources to solve them. A local insurance agency owner was personally screening every job applicant, spending 15+ hours per week on recruiting alone. A real estate team was losing hot prospects because their lead response time was measured in days, not minutes.
            </p>
            <p>
              These weren't technology problems—they were operational efficiency problems. The same bottlenecks I'd seen paralyze Fortune 500 companies were now strangling the growth of passionate entrepreneurs who simply didn't have the resources to implement enterprise solutions.
            </p>
            <blockquote className="border-l-4 border-[#3787b9] pl-6 italic text-[#3787b9] bg-[#3787b9] bg-opacity-10 p-4 rounded-r-lg">
              "I realized that operational efficiency shouldn't be a luxury reserved for large corporations—every growing business deserves systems that work as hard as they do."
            </blockquote>
          </Section>

          <Section title="The Competitive Advantage Gap">
            <p>
              What struck me most was the competitive advantage gap this created. While small businesses were manually processing leads over 2-3 days, their competitors with better systems were responding in 30 seconds. Manual processes weren't just inefficient—they were business killers in competitive markets.
            </p>
            <p>
              I saw talented business owners trapped in operational quicksand: working harder instead of smarter, losing opportunities to faster competitors, and burning out from repetitive tasks that should have been automated years ago.
            </p>
            <p>
              That's when I founded SleeperOps with a clear mission: bring enterprise-level operational intelligence to growing businesses without the enterprise complexity or cost.
            </p>
          </Section>

          <Section title="Our First Success: Insurance Agency Transformation">
            <p>
              Our first major client project validated everything I believed about operational efficiency. A local insurance agency was drowning in manual recruiting processes—the owner was personally reviewing every resume, scheduling every interview, and following up with every candidate. The operational bottleneck was preventing business growth.
            </p>
            <p>
              We built an intelligent recruiting system that automatically screens candidates, sends assessments to qualified prospects, and schedules interviews with top candidates. The results spoke for themselves:
            </p>
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30 my-6">
              <h4 className="font-semibold text-[#0a2c4d] mb-4">Measurable Business Impact:</h4>
              <ul className="space-y-2 text-[#2c5282]">
                <li><strong>⏰ 87% reduction</strong> in manual screening time</li>
                <li><strong>👥 3x improvement</strong> in candidate quality scores</li>
                <li><strong>💰 $4,200+ monthly</strong> operational cost savings</li>
                <li><strong>🚀 Competitive advantage:</strong> Owner can now focus on business growth instead of administrative tasks</li>
              </ul>
            </div>
            <p>
              This wasn't just about saving time—we had eliminated a critical operational bottleneck that was preventing the business from scaling. The owner went from being trapped by manual processes to having a competitive advantage in talent acquisition.
            </p>
          </Section>

          <Section title="The Methodology That Changes Everything">
            <p>
              Through working with clients across different industries—insurance, real estate, financial services—I developed a systematic approach to operational efficiency that consistently delivers results:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md border border-[#3787b9] border-opacity-20">
                <h4 className="font-semibold text-[#3787b9] mb-3">1. Identify the Real Bottleneck</h4>
                <p className="text-sm text-[#2c5282]">Most businesses focus on symptoms, not root causes. I analyze time cost, opportunity cost, and error cost to find the biggest operational drain.</p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md border border-[#3787b9] border-opacity-20">
                <h4 className="font-semibold text-[#3787b9] mb-3">2. Design for Business Impact</h4>
                <p className="text-sm text-[#2c5282]">Technology serves business goals, not the other way around. Every system is designed to create measurable competitive advantage.</p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md border border-[#3787b9] border-opacity-20">
                <h4 className="font-semibold text-[#3787b9] mb-3">3. Build for How You Work</h4>
                <p className="text-sm text-[#2c5282]">Custom solutions that integrate seamlessly with existing processes rather than forcing businesses to change how they operate.</p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md border border-[#3787b9] border-opacity-20">
                <h4 className="font-semibold text-[#3787b9] mb-3">4. Optimize for Competitive Speed</h4>
                <p className="text-sm text-[#2c5282]">In competitive markets, 30-second response times beat 3-day response times every time. Speed isn't just efficiency—it's competitive advantage.</p>
              </div>
            </div>
          </Section>

          <Section title="Why This Work Matters to Me">
            <p>
              As a business owner and father myself, I understand the pressure of trying to grow a business while managing everything manually. I've seen too many talented entrepreneurs get stuck in operational quicksand—working 60-hour weeks on tasks that should take 15 hours.
            </p>
            <p>
              Every small business owner I work with reminds me why this mission matters: they didn't start their business to spend their days on data entry and manual processes. They started it to serve customers, solve problems, and build something meaningful.
            </p>
            <p>
              When I help a business owner reclaim 15 hours per week or win deals by responding faster than competitors, I'm not just solving a technical problem—I'm helping them build the business and life they actually want.
            </p>
          </Section>

          <Section title="The Universal Truth About Operational Bottlenecks">
            <p>
              Through working with businesses across different industries, I've discovered a universal truth: every growing business faces remarkably similar operational challenges. The specific processes may be different, but the core bottlenecks are almost identical:
            </p>
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30 my-6">
              <ul className="space-y-3 text-[#2c5282]">
                <li><strong>⏰ Time bottlenecks:</strong> Manual processes that don't scale with growth</li>
                <li><strong>📞 Response bottlenecks:</strong> Slow follow-up that loses opportunities to faster competitors</li>
                <li><strong>📊 Information bottlenecks:</strong> Data trapped in disconnected systems</li>
                <li><strong>🔄 Quality bottlenecks:</strong> Errors and inconsistencies from manual processes</li>
                <li><strong>🎯 Decision bottlenecks:</strong> Lack of real-time business intelligence</li>
              </ul>
            </div>
            <p>
              The businesses that eliminate these bottlenecks don't just become more efficient—they gain sustainable competitive advantages that compound over time.
            </p>
          </Section>

          <Section title="What's Next for SleeperOps">
            <p>
              SleeperOps isn't just about solving today's operational challenges—it's about helping businesses build the competitive advantages they'll need for tomorrow. As markets become more competitive and customer expectations continue to rise, operational efficiency becomes the differentiator between businesses that thrive and those that merely survive.
            </p>
            <p>
              My commitment remains the same: helping growing businesses eliminate the operational bottlenecks that are costing them time, money, and competitive advantage. Whether it's a 15-minute conversation or a complete operational transformation, the goal is always the same—helping business owners focus on what they do best instead of getting trapped by manual processes.
            </p>
          </Section>

          <Section title="Ready to Eliminate Your Operational Bottlenecks?">
            <p>
              If you're a business owner who's tired of losing opportunities to manual processes, let's have a conversation. I'll analyze your current operations and identify exactly which bottlenecks are costing your business the most.
            </p>
            <p>
              The best part? This operational efficiency audit is completely free. I'd rather help you understand what's possible than make a sales pitch. Book your free process audit at <a href="/contact" className="text-[#3787b9] font-semibold hover:underline">SleeperOps.com/contact</a> and let's eliminate the operational bottlenecks that are holding your business back.
            </p>
          </Section>

        </div>
      </BlogPostLayout>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#3787b9] px-8 py-4 rounded-full shadow-lg animate-fade-in">
          <a
            href="/contact"
            className="font-semibold text-white hover:text-blue-200 transition"
          >
            Book Your Free Process Audit →
          </a>
        </div>
      )}
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold text-[#0a2c4d] mb-6">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}
