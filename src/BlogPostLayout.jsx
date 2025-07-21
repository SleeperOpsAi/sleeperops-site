// src/BlogPostLayout.jsx
import { Helmet } from "react-helmet";

export default function BlogPostLayout({ children, title, description, publishDate, tags = [], readTime, category }) {
  const fullTitle = `${title} | SleeperOps Operational Efficiency Blog`;
  const fullDescription = description || `${title} - Insights on eliminating operational bottlenecks and gaining competitive advantage through intelligent business systems.`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": fullDescription,
    "author": {
      "@type": "Person",
      "name": "Adam Cantwell"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SleeperOps",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "keywords": tags.join(', ')
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent(title);
    const description = encodeURIComponent(fullDescription);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=SleeperOps`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={tags.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="SleeperOps" />
        <meta property="og:image" content="/og-image-blog.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={fullDescription} />
        <meta property="twitter:image" content="/og-image-blog.jpg" />
        <meta property="twitter:site" content="@SleeperOps" />
        <meta property="twitter:creator" content="@SleeperOps" />
        
        {/* Article specific */}
        {publishDate && <meta property="article:published_time" content={publishDate} />}
        <meta property="article:author" content="Adam Cantwell" />
        <meta property="article:section" content={category || "Business Automation"} />
        {tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
              <p className="text-xl text-[#2c5282] leading-relaxed max-w-3xl mx-auto mb-6">
                {description}
              </p>
            )}
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#2c5282]">
              {publishDate && (
                <time className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              )}
              
              {readTime && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {readTime}
                </span>
              )}
              
              {category && (
                <span className="bg-[#3787b9] bg-opacity-10 text-[#3787b9] px-3 py-1 rounded-full font-medium">
                  {category}
                </span>
              )}
            </div>

            {/* Social Share Buttons */}
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:bg-[#1a8cd8] transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span className="hidden sm:inline">Tweet</span>
              </button>
              
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#005885] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="hidden sm:inline">Share</span>
              </button>
              
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 bg-[#4267B2] text-white px-4 py-2 rounded-lg hover:bg-[#365899] transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </header>

          {/* Article Content */}
          <section className="prose prose-lg max-w-none space-y-10">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-[#3787b9] border-opacity-20">
              {children}
            </div>
          </section>

          {/* Tags Section */}
          {tags && tags.length > 0 && (
            <section className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-[#3787b9] border-opacity-20">
              <h3 className="text-lg font-semibold mb-4 text-[#0a2c4d]">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-[#3787b9] bg-opacity-10 text-[#3787b9] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#3787b9] hover:text-white transition-colors cursor-pointer">
                    #{tag.toLowerCase().replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Author Bio */}
          <aside className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-[#3787b9] border-opacity-20">
            <div className="flex items-start gap-6">
              <img
                src="/family-photo.jpg"
                alt="Adam Cantwell - Operational Efficiency Expert"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#3787b9] border-opacity-30 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-[#0a2c4d]">Adam Cantwell</h3>
                <p className="text-[#3787b9] font-medium mb-3">Operational Efficiency Expert & Founder of SleeperOps</p>
                <p className="text-[#2c5282] leading-relaxed mb-4">
                  Adam helps growing businesses eliminate operational bottlenecks that cost time, money, and competitive advantage. 
                  With 10+ years of enterprise systems experience, he brings Fortune 500-level operational intelligence to small business budgets.
                </p>
                
                {/* Author Social Links */}
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/company/sleeperops/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3787b9] hover:text-[#2c5282] transition-colors"
                    aria-label="SleeperOps LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/SleeperOps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3787b9] hover:text-[#2c5282] transition-colors"
                    aria-label="SleeperOps Twitter Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/sleeperops/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3787b9] hover:text-[#2c5282] transition-colors"
                    aria-label="SleeperOps Instagram Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61576608881861" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3787b9] hover:text-[#2c5282] transition-colors"
                    aria-label="SleeperOps Facebook Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Related Insights */}
          <section className="bg-[#3787b9] bg-opacity-10 rounded-2xl p-8 border border-[#3787b9] border-opacity-30">
            <h2 className="text-2xl font-semibold mb-6 text-[#0a2c4d] text-center">
              Continue Your Learning Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold text-[#0a2c4d] mb-2">Free Process Audit</h3>
                <p className="text-sm text-[#2c5282] mb-3">Discover your biggest operational bottlenecks and get a custom ROI analysis</p>
                <a href="/contact" className="text-[#3787b9] font-medium hover:underline">Book Your Audit →</a>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">📈</div>
                <h3 className="font-semibold text-[#0a2c4d] mb-2">Success Stories</h3>
                <p className="text-sm text-[#2c5282] mb-3">See real results from businesses that eliminated their operational bottlenecks</p>
                <a href="/what-we-do" className="text-[#3787b9] font-medium hover:underline">View Case Studies →</a>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-[#3787b9] border-opacity-20 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-semibold text-[#0a2c4d] mb-2">More Insights</h3>
                <p className="text-sm text-[#2c5282] mb-3">Explore more case studies, lessons, and automation strategies</p>
                <a href="/blog" className="text-[#3787b9] font-medium hover:underline">Read More →</a>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-[#3787b9] to-[#2c5282] text-white rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Get More Insights Like This
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Weekly case studies, automation insights, and business intelligence delivered to your inbox. 
                No fluff, just actionable content.
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Email address for newsletter"
                />
                <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                Unsubscribe anytime. We respect your inbox.
              </p>
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
              <p className="text-sm text-[#2c5282] mt-4">
                15-minute call • No obligation • Immediate insights
              </p>
            </div>
          </section>
        </article>
      </main>
