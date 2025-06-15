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
      <div className="max-w-xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p>We received your message and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg text-white space-y-6"
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
          className="w-full rounded px-3 py-2 text-black"
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
          className="w-full rounded px-3 py-2 text-black"
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
          className="w-full rounded px-3 py-2 text-black"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded bg-[#0f3d5f] py-3 font-semibold hover:bg-[#0d3554] transition"
      >
        Submit
      </button>
    </form>
  );
}
