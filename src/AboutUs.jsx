import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />

      {/* Logo with translucent backdrop */}
      <div className="relative max-w-xs mx-auto mb-12 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-md shadow-lg flex flex-col items-center">
        <Link to="/" aria-label="Back to Home" className="block">
          <img
            src="/HeroPagelogo.png"
            alt="SleeperOps AI Consulting Logo"
            className="w-48 h-48 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))" }}
          />
        </Link>
        <p className="mt-2 text-center text-white text-sm font-semibold tracking-wide drop-shadow-lg">
          AI Solutions for Smarter Business Growth
        </p>
      </div>

      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 drop-shadow-md">About Us</h1>
        <p className="text-lg text-white/90 leading-relaxed">
          Learn more about SleeperOps, our mission, and how we help small businesses grow smarter with AI-powered solutions. Content coming soon!
        </p>
      </section>
    </main>
  );
}
