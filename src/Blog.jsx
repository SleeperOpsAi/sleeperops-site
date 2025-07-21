import { useState } from 'react';
import BlogPostLayout from './BlogPostLayout';

const BLOG_POSTS = [
  {
    id: 'case-study-15k-system',
    title: 'The $15K System That I Didn\'t Get Paid For',
    description: 'How I learned the hard way about client discovery, scope creep, and why giving away free work teaches clients they don\'t need to pay for expertise.',
    publishDate: '2025-07-21',
    tags: ['Case Study', 'Client Management', 'Business Lessons', 'Free Work Trap'],
    slug: 'case-study-15k-system-lessons-learned',
    excerpt: 'I built a sophisticated AI recruitment system worth $15K in development time and never got paid. Here\'s what went wrong and the hard lessons every service provider needs to know about client boundaries.',
    readTime: '8 min read',
    category: 'Case Studies'
  },
  // Add more blog posts here as you create them
];

function BlogPost({ post, onBack }) {
  const renderCaseStudyContent = () => (
    <div className="space-y-8">
      {/* Hook Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">The Business Challenge</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An established insurance agency was hemorrhaging qualified candidates to faster competitors. While they were taking 3-5 days to manually screen applications and schedule interviews, their competitors were responding within hours.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="font-semibold text-red-700 mb-2">The hidden cost: Top performers don't wait around. They accept the first good offer they receive.</p>
          <ul className="text-gray-600 space-y-1">
            <li>• Manual review of every application</li>
            <li>• Phone screening calls scheduled days later</li>
            <li>• Inconsistent qualification criteria across team members</li>
            <li>• No systematic follow-up for promising candidates</li>
          </ul>
          <p className="font-semibold text-red-800 mt-4">Business impact: Missing 60%+ of quality candidates due to slow response times.</p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">The Solution I Built</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I designed what I thought was the perfect recruitment automation system:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Technical Features</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• 23-question intelligent intake</li>
              <li>• AI-powered scoring across 6 criteria</li>
              <li>• Automated follow-up sequences</li>
              <li>• Real-time dashboards</li>
              <li>• Custom interview question generation</li>
              <li>• Predictive performance analysis</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700 mb-2">Business Outcomes</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Complete candidate evaluation in 5 minutes</li>
              <li>• Consistent, objective candidate ranking</li>
              <li>• Zero manual scheduling gaps</li>
              <li>• Instant visibility into candidate pipeline</li>
              <li>• Tailored questions based on candidate profile</li>
              <li>• Data-driven hiring decisions</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-100 border border-red-300 p-4 rounded-lg">
          <p className="text-lg font-bold text-red-800">Development value: $10,000-15,000</p>
          <p className="text-lg font-bold text-red-800">Amount I got paid: $0</p>
          <p className="text-sm text-red-600 mt-2">Final outcome: Went with a simple testimonial project instead</p>
        </div>
      </div>

      {/* The Mistake */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">Demo Day: When Reality Hit</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I brought the system to their team meeting, confident they'd be blown away by the sophisticated AI integration and comprehensive analytics.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-red-700 mb-3">Their Response:</h3>
            <ul className="text-red-600 space-y-2">
              <li>❌ "This is too complex for our workflow"</li>
              <li>❌ "We already have a scoring system called 'ideal traits'"</li>
              <li>❌ "We need only 4-5 questions, not 23"</li>
              <li>❌ "We want to talk to people before any AI scoring"</li>
              <li>❌ "Oh, and we use Salesforce 'Apex talent' for our CRM"</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-3">My Internal Reaction:</h3>
            <p className="text-blue-600 italic mb-4">
              "But look at all this intelligent automation I built! The AI can predict performance! The dashboard shows conversion metrics!"
            </p>
            <p className="font-semibold text-red-800">
              The brutal truth: I had built a Ferrari for someone who needed a pickup truck.
            </p>
          </div>
        </div>
      </div>

      {/* Key Lessons */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">The Real Business Lessons</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-2">❌ What I Actually Did:</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Built first, discovered later</li>
                <li>• Got emotionally attached to technical features</li>
                <li>• Kept offering free work to "prove value"</li>
                <li>• Never discussed money until weeks of work were done</li>
                <li>• Assumed complex = valuable</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
              <h3 className="font-semibold text-green-700 mb-2">✅ What I Should Have Done:</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Discovery before building anything (and charged for it)</li>
                <li>• Asked about existing tools and workflows upfront</li>
                <li>• Set pricing expectations in first conversation</li>
                <li>• Built what they needed, not what was technically impressive</li>
                <li>• Remembered that complexity ≠ value</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-100 border border-blue-300 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">5 Critical Lessons:</h3>
          <ol className="text-blue-700 space-y-2 list-decimal list-inside">
            <li><strong>Discovery ≠ Free Consulting</strong> - Understanding their workflow is valuable work. Charge for it.</li>
            <li><strong>Complexity ≠ Value</strong> - They needed reliable screening, not predictive analytics.</li>
            <li><strong>Free Work Trains Bad Behavior</strong> - Every free customization teaches clients they don't need to pay.</li>
            <li><strong>Technical Attachment is Expensive</strong> - Pride doesn't pay bills. Build for client outcomes.</li>
            <li><strong>"Just One More Demo" is a Trap</strong> - More proof rarely changes payment willingness.</li>
          </ol>
        </div>
      </div>

      {/* The Professional Pivot */}
      <div className="bg-gradient-to-r from-green-50 to-gray-50 border-l-4 border-green-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">The Professional Pivot</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Instead of continuing the free work cycle, I made a professional decision:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">What I Actually Did:</h3>
          <ol className="text-gray-700 space-y-2 list-decimal list-inside">
            <li><strong>Acknowledged the mismatch professionally</strong> - No blame, just recognition that we weren't aligned</li>
            <li><strong>Walked away from the project</strong> - Sometimes the best business decision is not working together</li>
            <li><strong>They went with a simple testimonial approach</strong> - Much better fit for their actual needs</li>
            <li><strong>I got paid $0</strong> - But gained invaluable business lessons worth much more</li>
          </ol>
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
          <p className="font-semibold text-green-800 mb-2">The Outcome:</p>
          <p className="text-green-700">
            No burning bridges. No bitter emails. Just professional recognition that we weren't the right fit. 
            They got a simple solution that worked for them. I learned to qualify clients better and charge for discovery from day one.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Industry Applications</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This pattern appears across every service industry:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-700 mb-2">Real Estate Teams</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Need instant lead response, not complex scoring</li>
              <li>• Want CRM integration with existing tools</li>
              <li>• Value consistent follow-up over predictive analytics</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-700 mb-2">Financial Advisors</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Need compliant client intake, not sophisticated questionnaires</li>
              <li>• Want appointment scheduling, not performance prediction</li>
              <li>• Value reliable workflows over cutting-edge AI</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-700 mb-2">Professional Services</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Need streamlined client onboarding, not complex evaluation</li>
              <li>• Want billing integration, not analytics dashboards</li>
              <li>• Value time savings over technical sophistication</li>
            </ul>
          </div>
        </div>

          <div className="mt-4 bg-purple-100 border border-purple-300 p-4 rounded-lg">
            <p className="font-semibold text-purple-800 mb-2">
              The final outcome: They went with a much simpler testimonial-based approach instead of the sophisticated AI system.
            </p>
            <p className="text-purple-700">
              Universal truth: Match the solution complexity to the business need, not the technical possibilities.
            </p>
          </div>
      </div>

      {/* ROI Framework */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The ROI Framework I Use Now</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h3 className="font-semibold text-gray-800 mb-4">Before Building Anything, Calculate:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Current Manual Process Cost:</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Hours per week × hourly rate × 52 weeks</li>
                <li>• Error correction time and costs</li>
                <li>• Opportunity cost of slow response times</li>
                <li>• Competitive disadvantage factor</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Automation Investment:</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Setup cost (one-time)</li>
                <li>• Monthly management fee</li>
                <li>• Training and transition time</li>
                <li>• Integration requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="font-semibold text-green-800">Most clients break even in 30-60 days.</p>
          </div>
        </div>
      </div>

      {/* Call to Action - Removed Newsletter for Now */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Avoid These Mistakes?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Our discovery process ensures you get exactly what your business needs - no free work, no scope creep:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold mb-2">✅ Paid Discovery Phase</h3>
            <p className="text-sm text-blue-100">We charge for understanding your needs - because discovery is valuable work</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold mb-2">✅ Clear Scope & Pricing</h3>
            <p className="text-sm text-blue-100">Know exactly what you're getting and what it costs before we build anything</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold mb-2">✅ Build What You Need</h3>
            <p className="text-sm text-blue-100">Solutions matched to your actual workflow, not what's technically impressive</p>
          </div>
        </div>

        <p className="text-center text-lg mb-6">
          <strong>No free work. No scope creep. No technical complexity for complexity's sake.</strong>
        </p>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors text-lg"
          >
            Book Paid Discovery Call
          </a>
          <p className="text-sm text-blue-200 mt-4">
            15-minute initial call free • Discovery phase is paid • No surprises
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <BlogPostLayout 
      title={post.title}
      description={post.description}
      publishDate={post.publishDate}
    >
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-[#3787b9] hover:text-[#2c5282] font-medium flex items-center gap-2 mb-4"
        >
          ← Back to Blog
        </button>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-[#3787b9] bg-opacity-10 text-[#3787b9] px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm text-[#2c5282] mb-6">
          {post.readTime} • {post.category}
        </div>
      </div>

      {post.id === 'case-study-15k-system' && renderCaseStudyContent()}
    </BlogPostLayout>
  );
}

function BlogGrid({ posts, onSelectPost }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <article 
          key={post.id}
          className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          onClick={() => onSelectPost(post)}
        >
          <div className="flex justify-between items-start mb-3">
            <span className="bg-[#3787b9] bg-opacity-10 text-[#3787b9] px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="text-xs text-[#2c5282]">{post.readTime}</span>
          </div>
          
          <h2 className="text-xl font-bold text-[#0a2c4d] mb-3 line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-[#2c5282] mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <time className="text-xs text-[#3787b9]">
              {new Date(post.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </time>
            <span className="text-[#3787b9] font-medium text-sm hover:underline">
              Read more →
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <main className="relative min-h-screen px-6 py-24 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
      {/* Subtle Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0">
        {/* Blog Header */}
        <header className="text-center bg-white bg-opacity-90 rounded-2xl p-10 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0a2c4d] leading-tight">
            SleeperOps Insights
          </h1>
          <p className="text-xl text-[#2c5282] leading-relaxed max-w-3xl mx-auto">
            Real stories, hard lessons, and actionable insights about building intelligent business automation. 
            Learn from our successes, failures, and everything in between.
          </p>
        </header>

        {/* Featured Post */}
        <section className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </span>
            <span className="text-[#3787b9] text-sm">Latest Case Study</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#0a2c4d] mb-4">
                The $15K System That I Didn't Get Paid For
              </h2>
              <p className="text-lg text-[#2c5282] mb-6 leading-relaxed">
                I built a sophisticated AI recruitment system worth $15K in development time and never got paid. Here's what went wrong and the hard lessons every service provider needs to know about client boundaries.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-[#3787b9]">{BLOG_POSTS[0].readTime}</span>
                <span className="text-sm text-[#2c5282]">
                  {new Date(BLOG_POSTS[0].publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <button
                onClick={() => setSelectedPost(BLOG_POSTS[0])}
                className="bg-[#3787b9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2c5282] transition-colors"
              >
                Read the Full Story →
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#3787b9] to-[#2c5282] p-6 rounded-xl text-white">
              <h3 className="font-bold text-lg mb-4">Key Takeaways:</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Why complex ≠ valuable</li>
                <li>✓ Discovery before building</li>
                <li>✓ Charge for expertise from day one</li>
                <li>✓ Professional pivot strategies</li>
                <li>✓ ROI framework that works</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-[#0a2c4d] mb-8 text-center">
            All Insights
          </h2>
          <BlogGrid posts={BLOG_POSTS} onSelectPost={setSelectedPost} />
        </section>

        {/* Ready to Start Section */}
        <section className="bg-gradient-to-r from-[#3787b9] to-[#2c5282] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Avoid These Mistakes?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Learn from our failures. Get your automation project done right the first time with proper discovery and clear boundaries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors text-lg"
          >
            Book Paid Discovery Call
          </a>
          <p className="text-sm text-blue-200 mt-4">
            15-minute initial call free • Discovery phase is paid • No free consulting
          </p>
        </section>
      </div>
    </main>
  );
}
