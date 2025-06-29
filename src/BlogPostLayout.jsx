// src/BlogPostLayout.jsx
import { Helmet } from "react-helmet";

export default function BlogPostLayout({ children, title, description, publishDate }) {
  return (
    <>
      <Helmet>
        <title>{title} | SleeperOps Operational Efficiency Blog</title>
        <meta name="description" content={description || `${title} - Insights on eliminating operational bottlenecks and gaining competitive advantage through intelligent business systems.`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${title} | SleeperOps`} />
        <meta property="og:description" content={description || `${title} - Operational efficiency insights from SleeperOps`} />
        <meta property="og:type" content="article" />
        {publishDate && <meta property="article:published_time" content={publishDate} />}
      </Helmet>

      <main className="relative min-h-screen px-6 py-24 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        {/* Subtle Pattern overlay */}
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
          aria-hidden="true"
        />

        {/* Content container */}
        <article className="relative max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0">
          {/* Article Header */}
          <header className="text-center bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a2c4d] leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-[#2c5282] leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
            {publishDate && (
              <time className="text-[#3787b9] font-medium mt-4 block">
                {new Date(publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            )}
          </header>

          {/* Article Content */}
          <section className="prose prose-lg max-w-none space-y-10">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-[#3787b9] border-opacity-20">
              {children}
            </div>
          </section>

          {/* Author Bio */}
          <aside className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
            <div className="flex items-center gap-6">
              <img
                src="/family-photo.jpg"
                alt="Adam Cantwell - Operational Efficiency Expert"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#3787b9] border-opacity-30"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#0a2c4d]">Adam Cantwell</h3>
                <p className="text-[#3787b9] font-medium mb-3">Operational Efficiency Expert & Founder of SleeperOps</p>
                <p className="text-[#2c5282] leading-relaxed">
                  Adam helps growing businesses eliminate operational bottlenecks that cost time, money, and competitive advantage. 
                  With 10+ years of enterprise systems experience, he brings Fortune 500-level operational intelligence to small business budgets.
                </p>
              </div>
            </div>
          </aside>

          {/* Related Insights */}
          <section className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-8 border border-[#3787b9] border-opacity-30">
            <h2 className="text-2xl font-semibold mb-6 text-[#0a2c4d] text-center">
              Learn More About Operational Efficiency
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20">
                <h3 className="font-semibold text-[#0a2c4d] mb-2">Free Process Audit</h3>
                <p className="text-sm text-[#2c5282] mb-3">Discover your biggest operational bottlenecks</p>
                <a href="/contact" className="text-[#3787b9] font-medium hover:underline">Book Your Audit →</a>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20">
                <h3 className="font-semibold text-[#0a2c4d] mb-2">Success Stories</h3>
                <p className="text-sm text-[#2c5282] mb-3">See real results from operational improvements</p>
                <a href="/what-we-do" className="text-[#3787b9] font-medium hover:underline">View Case Studies →</a>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20">
                <h3 className="font-semibold text-[#0a2c4d] mb-2">Common Questions</h3>
                <p className="text-sm text-[#2c5282] mb-3">Answers about ROI, implementation, and results</p>
                <a href="/faq" className="text-[#3787b9] font-medium hover:underline">Read FAQ →</a>
              </div>
            </div>
          </section>

          {/* Call-to-action */}
          <section className="text-center">
            <div className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-10 border border-[#3787b9] border-opacity-30">
              <h2 className="text-3xl font-semibold mb-4 text-[#0a2c4d]">
                Ready to Eliminate Your Operational Bottlenecks?
              </h2>
              <p className="text-lg text-[#2c5282] mb-8 max-w-2xl mx-auto">
                Let's identify exactly which manual processes are costing your business the most time and money. 
                Book your free operational efficiency audit today.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-xl bg-[#3787b9] text-white font-semibold px-8 py-4 shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105"
              >
                Book Free Process Audit
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
