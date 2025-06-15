import { useState } from "react";
import { Link } from "react-router-dom";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industry: "",
    services: [],
    budget: "",
    timeline: "",
    referral: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const industries = [
    "Real Estate",
    "Financial Services",
    "Healthcare",
    "Technology",
    "Other",
  ];

  const servicesOptions = [
    "AI Consulting",
    "Automation",
    "CRM Sync",
    "Custom Workflows",
    "Other",
  ];

  const budgets = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ];

  const timelines = [
    "ASAP",
    "1 - 3 months",
    "3 - 6 months",
    "Flexible",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const services = prev.services.includes(value)
          ? prev.services.filter((s) => s !== value)
          : [...prev.services, value];
        return { ...prev, services };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: send formData to backend or webhook
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
          <Link to="/" className="mt-6 inline-block underline text-white">
            ← Back to Home
          </Link>
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
      <div className="max-w-xl mx-auto p-6 bg-white bg-opacity-20 rounded-lg text-white relative z-10">
        {/* Logo linked to homepage */}
        <Link to="/" className="block mb-8">
          <img
            src="/HeroPagelogo.png"
            alt="SleeperOps AI Consulting Logo"
            className="mx-auto w-40 sm:w-56"
          />
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            <span className="block mb-1">Phone</span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <span className="block mb-1">Company Name</span>
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <span className="block mb-1">Role/Title</span>
            <input
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <span className="block mb-1">Industry</span>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
            >
              <option value="">Select industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </label>

          <fieldset>
            <legend className="block mb-1 font-semibold">Services Interested In</legend>
            <div className="flex flex-wrap gap-4">
              {servicesOptions.map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                    className="text-black"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="block mb-1">Budget Range</span>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
            >
              <option value="">Select budget</option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block mb-1">Project Timeline</span>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block mb-1">How did you hear about us?</span>
            <input
              name="referral"
              type="text"
              value={formData.referral}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <span className="block mb-1">Brief Description / Message *</span>
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
      </div>
    </main>
  );
}
