export default function Blog() {
  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Logo container with frosted glass */}
      <div
        className="mx-auto mb-10 p-8 rounded-xl max-w-xs bg-white bg-opacity-10 backdrop-blur-md shadow-lg flex flex-col items-center"
        style={{
          boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <img
          src="/HeroPagelogo.png"
          alt="SleeperOps AI Solutions Logo"
          className="mx-auto mb-4"
          style={{
            maxWidth: "160px",
            height: "auto",
            filter:
              "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))",
          }}
        />
        <p
          className="text-center text-white font-semibold tracking-wide select-none"
          style={{ fontSize: "1.25rem", lineHeight: "1.5" }}
        >
          AI Solutions for Smarter Business Growth
        </p>
      </div>

      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-md">
        Blog & Resources
      </h1>

      {/* Page content */}
      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
        This page will host blog posts and useful resources to help you leverage AI for your business. Coming soon!
      </p>
    </main>
  );
}
