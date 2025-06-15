import { useState } from "react";

export default function IntakeForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
          aria-hidden="true"
        />
        <div className="max-w-xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg text-white text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
          <p>We received your message and will be in touch soon.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-br from-[#0a2c4d] to-[#153e75]">
      <div
        className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-25 bg-[length:400px_400px]"
        aria-hidden="true"
      />
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg text-white space-y-6 relative z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <label className="block">
          <span className="block mb-1">Name *</span>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="block mb-1">Email *</span>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="block mb-1">Message *</span>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 bg-white text-black"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded bg-[#0f3d5f] py-3 font-semibold hover:bg-[#0d3554] transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
