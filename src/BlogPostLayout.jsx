// src/BlogPostLayout.jsx
export default function BlogPostLayout({ children, title }) {
  return (
    <main className="relative min-h-screen px-6 py-24 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      {/* Softer Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-10 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Content container with max width and padding */}
      <article className="relative max-w-3xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0">
        <h1 className="text-4xl font-extrabold mb-12 text-center drop-shadow-md tracking-tight">
          {title}
        </h1>

        <section className="prose prose-invert max-w-none space-y-10">
          {children}
        </section>

        {/* Horizontal divider */}
        <hr className="border-white border-opacity-20 mt-16" />

        {/* Author bio / About Adam box */}
        <aside className="mt-12 flex items-center gap-6 bg-white bg-opacity-10 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <img
            src="/family-photo.jpg"
            alt="Adam Cantwell"
            className="w-20 h-20 rounded-full object-cover border-2 border-white border-opacity-30"
          />
          <div>
            <h3 className="text-xl font-semibold mb-1">Adam Cantwell</h3>
            <p className="text-white/90 max-w-xl leading-relaxed text-sm sm:text-base">
              Founder of SleeperOps with 10 years of experience in information systems. Passionate about making AI accessible and practical for small businesses.
            </p>
          </div>
        </aside>

        {/* Call-to-action box */}
        <div className="mt-16 rounded-xl bg-[#0f3d5f] p-8 text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to save time and grow your business with AI?
          </h2>
          <a
            href="https://sleeperops.com/contact"
            className="inline-block rounded-full bg-white text-[#0f3d5f] font-bold px-8 py-3 hover:bg-gray-200 transition"
          >
            Book Your Free Consultation
          </a>
        </div>
      </article>
    </main>
  );
}
