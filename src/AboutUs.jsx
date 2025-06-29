import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Meet Adam Cantwell | Operational Efficiency Expert at SleeperOps</title>
        <meta
          name="description"
          content="Meet Adam Cantwell, operational efficiency expert who helps growing businesses eliminate bottlenecks that cost time, money, and opportunities. 10+ years of enterprise experience applied to small business challenges."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/about-us" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-20 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section className="relative max-w-6xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-xl p-12 flex flex-col lg:flex-row items-center gap-12 z-10 mb-16">
          <div className="flex-shrink-0">
            <img
              src="/family-photo.jpg"
              alt="Adam Cantwell and Family"
              className="rounded-2xl shadow-lg w-80 h-96 object-cover border-4 border-white"
            />
          </div>

          <div className="text-[#0a2c4d] flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Meet Adam: Your Operational Efficiency Expert
            </h1>

            <p className="mb-6 leading-relaxed text-xl text-[#2c5282]">
              I help growing businesses eliminate the operational bottlenecks that cost them time, money, and competitive advantage.
            </p>

            <p className="mb-6 leading-relaxed text-lg text-[#2c5282]">
              After spending 10+ years watching large organizations struggle with the same manual processes that small businesses face today, I realized something important: <strong>the biggest barrier to business growth isn't lack of opportunity—it's operational inefficiency.</strong>
            </p>

            <p className="mb-6 leading-relaxed text-lg text-[#2c5282]">
              While working with enterprise information systems, I saw how Fortune 500 companies solved operational challenges that most small businesses still struggle with daily. That's when I founded SleeperOps: to bring enterprise-level operational intelligence to growing businesses without the enterprise complexity or cost.
            </p>

            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30 mb-6">
              <p className="text-lg text-[#0a2c4d] font-semibold mb-2">My Mission:</p>
              <p className="text-[#2c5282]">
                Stop small businesses from losing opportunities to competitors who respond faster, work smarter, and operate more efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Why I Started SleeperOps - BUSINESS PROBLEM FOCUSED */}
        <section className="relative max-w-6xl mx-auto py-16 text-center mb-16">
          <h2 className="mb-8 text-3xl font-bold text-[#0a2c4d]">
            Why I Started SleeperOps
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-2xl font-semibold mb-4 text-[#3787b9]">The Problem I Kept Seeing</h3>
              <div className="text-left space-y-4 text-[#2c5282]">
                <p><strong>Small businesses losing opportunities</strong> because they couldn't respond to prospects fast enough</p>
                <p><strong>Business owners spending their valuable time</strong> on manual data entry instead of growth activities</p>
                <p><strong>Staff getting overwhelmed</strong> by repetitive tasks that should be automated</p>
                <p><strong>Companies falling behind competitors</strong> who had better operational systems</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-2xl font-semibold mb-4 text-[#3787b9]">What I Realized</h3>
              <div className="text-left space-y-4 text-[#2c5282]">
                <p><strong>Enterprise solutions existed</strong> but were too complex and expensive for small businesses</p>
                <p><strong>Basic automation tools</strong> weren't sophisticated enough to solve real business problems</p>
                <p><strong>Most business owners</strong> knew they needed better systems but didn't know where to start</p>
                <p><strong>The right combination of tools</strong> could give small businesses enterprise-level capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Me Different */}
        <section className="relative max-w-6xl mx-auto py-16 mb-16">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#0a2c4d]">
            What Makes My Approach Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">🎯 Business Results First</h3>
              <p className="text-[#2c5282] mb-4">
                I don't start with technology—I start by understanding your biggest operational bottlenecks and the business impact they're having.
              </p>
              <p className="text-sm text-[#2c5282] italic">
                "What's costing you the most time, money, or opportunities right now?"
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">⚡ Speed When It Matters</h3>
              <p className="text-[#2c5282] mb-4">
                I've seen how 30-second response times beat 3-day response times in competitive markets. Speed isn't just efficiency—it's competitive advantage.
              </p>
              <p className="text-sm text-[#2c5282] italic">
                "While competitors are still manually processing, your systems are already responding."
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">🏗️ Built for How You Actually Work</h3>
              <p className="text-[#2c5282] mb-4">
                Instead of forcing you to change your processes to fit generic software, I build systems that work exactly how your business operates.
              </p>
              <p className="text-sm text-[#2c5282] italic">
                "Custom solutions that fit your exact workflow, not almost-fits."
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <h3 className="text-xl font-semibold mb-4 text-[#3787b9]">📈 Ongoing Optimization</h3>
              <p className="text-[#2c5282] mb-4">
                I don't just build systems and disappear. I continuously optimize your processes to ensure you stay ahead of competitors.
              </p>
              <p className="text-sm text-[#2c5282] italic">
                "Your competitive advantage gets stronger over time, not weaker."
              </p>
            </div>
          </div>
        </section>

        {/* Industries I Work With */}
        <section className="relative max-w-6xl mx-auto py-16 mb-16">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#0a2c4d]">
            Industries Where I've Eliminated Operational Bottlenecks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-4 text-[#0a2c4d]">Insurance Agencies</h3>
              <p className="text-[#2c5282] mb-4">Recruiting automation, lead qualification, client onboarding</p>
              <div className="text-sm text-[#3787b9] font-semibold">87% reduction in manual screening time</div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20 text-center">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold mb-4 text-[#0a2c4d]">Real Estate Teams</h3>
              <p className="text-[#2c5282] mb-4">Lead scoring, follow-up automation, property research</p>
              <div className="text-sm text-[#3787b9] font-semibold">340% faster lead response times</div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4 text-[#0a2c4d]">Financial Services</h3>
              <p className="text-[#2c5282] mb-4">Client intake, compliance automation, appointment scheduling</p>
              <div className="text-sm text-[#3787b9] font-semibold">15+ hours weekly time savings</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#2c5282]">
              <strong>Universal Truth:</strong> Every growing business faces the same core challenge—manual processes that don't scale. 
              The solutions may be different, but the operational bottlenecks are remarkably similar.
            </p>
          </div>
        </section>

        {/* My Approach */}
        <section className="relative max-w-6xl mx-auto py-16 mb-16">
          <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-md border border-[#3787b9] border-opacity-20">
            <h2 className="mb-8 text-3xl font-bold text-center text-[#0a2c4d]">
              How I Approach Every Project
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#3787b9]">I Start with Business Impact</h3>
                <div className="space-y-4 text-[#2c5282]">
                  <p><strong>First Question:</strong> "What's your biggest operational bottleneck right now?"</p>
                  <p><strong>Second Question:</strong> "How much is this bottleneck costing you in time, money, or lost opportunities?"</p>
                  <p><strong>Third Question:</strong> "What would happen to your business if we could eliminate this bottleneck?"</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#3787b9]">Then I Design the Solution</h3>
                <div className="space-y-4 text-[#2c5282]">
                  <p><strong>Technology Choice:</strong> I select the best tools for YOUR specific situation, not what I'm comfortable with</p>
                  <p><strong>Business Integration:</strong> Systems that work with your existing tools and processes</p>
                  <p><strong>Scalable Design:</strong> Solutions that grow with your business, not against it</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30">
              <h3 className="text-xl font-semibold mb-4 text-[#0a2c4d]">My Guarantee to You:</h3>
              <p className="text-[#2c5282] text-lg">
                If I can't identify at least $2,000 worth of time savings or business improvements in our free consultation, 
                I'll be the first to tell you that automation isn't your biggest priority right now.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Side */}
        <section className="relative max-w-6xl mx-auto py-16 mb-16">
          <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-md border border-[#3787b9] border-opacity-20">
            <h2 className="mb-8 text-3xl font-bold text-center text-[#0a2c4d]">
              Why This Work Matters to Me
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-lg text-[#2c5282] leading-relaxed mb-6">
                  As a business owner and father myself, I understand the pressure of trying to grow a business while managing everything manually. 
                  I've seen too many talented entrepreneurs get stuck in operational quicksand—working harder instead of smarter.
                </p>
                
                <p className="text-lg text-[#2c5282] leading-relaxed mb-6">
                  SleeperOps isn't just my business—it's my mission to level the playing field. Every small business deserves access to the same 
                  operational advantages that large companies have been using for years.
                </p>

                <p className="text-lg text-[#2c5282] leading-relaxed">
                  When I help a business owner reclaim 15 hours per week or win deals by responding faster than competitors, 
                  I'm not just solving a technical problem—I'm helping them build the business and life they actually want.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-[#3787b9] font-semibold text-lg">
                  "Operational efficiency isn't just about saving time—it's about winning opportunities."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="relative max-w-5xl mx-auto text-center">
          <div className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-10 border border-[#3787b9] border-opacity-30">
            <h2 className="mb-6 text-3xl font-bold text-[#0a2c4d]">
              Ready to Eliminate Your Biggest Operational Bottlenecks?
            </h2>
            <p className="mb-8 text-lg text-[#2c5282] max-w-3xl mx-auto">
              Let's have a conversation about your business challenges. I'll identify exactly which operational bottlenecks are costing you the most, 
              and show you what's possible when you eliminate them.
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
          </div>
        </section>
      </main>
    </>
  );
}
