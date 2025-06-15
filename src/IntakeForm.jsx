import { useState } from "react";
import { Link } from "react-router-dom";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companyUrl: "",
    linkedInUrl: "",
    role: "",
    industry: "",
    coreServices: [],
    subServices: [],
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

  const coreServicesOptions = [
    "AI Stack Consulting",
    "Pre-Built Agents & Workflows",
    "Custom Automation Implementation",
  ];

  // Updated user-friendly sub-services with 'Other' and helper text
  const subServicesOptions = {
    "AI Stack Consulting": [
      "Strategy & Tool Recommendations",
    ],
    "Pre-Built Agents & Workflows": [
      "Recruiting Assistant",
      "Lead Qualification Assistant",
      "Knowledge Base Chatbot",
      "Other (custom pre-built agent)",
    ],
    "Custom Automation Implementation": [
      "Integration & Workflow Setup",
      "Automated File Processing",
      "CRM & Sales Automation",
    ],
  };

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

  const toggleArrayItem = (array, item) =>
    array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "coreServices") {
        const updatedCoreServices = toggleArrayItem(formData.coreServices, value);
        const allowedSubs = updatedCoreServices.flatMap(core => subServicesOptions[core]);
        const updatedSubServices = formData.subServices.filter(sub => allowedSubs.includes(sub));
        setFormData(prev => ({
          ...prev,
          coreServices: updatedCoreServices,
          subServices: updatedSubServices,
        }));
      } else if (name === "subServices") {
        const updatedSubServices = toggleArrayItem(formData.subServices, value);
        setFormData(prev => ({ ...prev, subServices: updatedSubServices }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
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

          {/* First Name */}
          <label className="block">
            <span className="block mb-1">First Name *</span>
            <input
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
            />
          </label>

          {/* Last Name */}
          <label className="block">
            <span className="block mb-1">Last Name *</span>
            <input
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
            />
          </label>

          {/* Email */}
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

          {/* Phone */}
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

          {/* Company Name */}
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

          {/* Company URL */}
          <label className="block">
            <span className="block mb-1">Company Website URL</span>
            <input
              name="companyUrl"
              type="url"
              value={formData.companyUrl}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="https://example.com"
              pattern="https?://.+"
              title="Please enter a valid URL starting with http:// or https://"
            />
          </label>

          {/* LinkedIn URL */}
          <label className="block">
            <span className="block mb-1">LinkedIn Profile URL</span>
            <input
              name="linkedInUrl"
              type="url"
              value={formData.linkedInUrl}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              placeholder="https://linkedin.com/in/yourprofile"
              pattern="https?://.+"
              title="Please enter a valid URL starting with http:// or https://"
            />
          </label>

          {/* Role/Title */}
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

          {/* Industry */}
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

          {/* Core Services */}
          <fieldset className="mb-4">
            <legend className="block mb-2 font-semibold text-white">Services Interested In *</legend>
            <div className="flex flex-col space-y-2">
              {coreServicesOptions.map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="coreServices"
                    value={service}
                    checked={formData.coreServices.includes(service)}
                    onChange={handleChange}
                    className="text-black"
                    required={formData.coreServices.length === 0}
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Sub Services (show only if relevant core selected) */}
          {formData.coreServices.length > 0 && (
            <fieldset className="mb-6">
              <legend className="block mb-2 font-semibold text-white">Specific Interests</legend>
              <div className="flex flex-wrap gap-4">
                {formData.coreServices.flatMap(core => subServicesOptions[core]).map(subService => (
                  <label key={subService} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subServices"
                      value={subService}
                      checked={formData.subServices.includes(subService)}
                      onChange={handleChange}
                      className="text-black"
                    />
                    <span>{subService}</span>
                  </label>
                ))}
              </div>
              {/* Show helper text if 'Other (custom pre-built agent)' is selected */}
              {formData.subServices.includes("Other (custom pre-built agent)") && (
                <p className="mt-2 italic text-sm text-white/80">
                  Need something else? We can whip up tailored pre-built agents quickly for your needs.
                </p>
              )}
            </fieldset>
          )}

          {/* Budget */}
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

          {/* Timeline */}
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

          {/* Referral */}
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

          {/* Message */}
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
