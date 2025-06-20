// src/BlogPostLayout.jsx
export default function BlogPostLayout({ children, title }) {
  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Container */}
      <div className="relative max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-md">{title}</h1>
        <section className="space-y-6 text-lg leading-relaxed">{children}</section>
      </div>
    </main>
  );
}
