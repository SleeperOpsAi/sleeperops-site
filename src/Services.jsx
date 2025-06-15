import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto z-10">
        <Link to="/" className="block mb-8">
          <img
            src="/HeroPagelogo.png"
            alt="SleeperOps AI Consulting Logo"
            className="mx-auto w-40 sm:w-56"
          />
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-md">
          Our Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-center">
          Here we will describe the full range of AI consulting and automation services SleeperOps offers. More content coming soon!
        </p>
      </div>
    </main>
  );
}
