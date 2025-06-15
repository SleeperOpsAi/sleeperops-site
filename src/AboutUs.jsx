export default function AboutUs() {
  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Logo container with glow and backdrop */}
      <div
        className="mx-auto mb-10 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg max-w-xs"
        style={{
          filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <img
          src="/HeroPagelogo.png"
          alt="SleeperOps AI Solutions Logo"
          className="mx-auto"
          style={{ maxWidth: "160px", height: "auto" }}
        />
        <p className="mt-2 text-center text-white font-semibold text-sm select-none">
          AI Solutions for Smarter Business Growth
        </p>
      </div>

      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-md">
        About Us
      </h1>

      {/* Page content */}
      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
        Learn more about SleeperOps, our mission, and how we help small businesses grow smarter with AI-powered solutions. Content coming soon!
      </p>
    </main>
  );
}
