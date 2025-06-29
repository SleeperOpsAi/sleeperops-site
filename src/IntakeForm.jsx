import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const USE_TEST_WEBHOOK = false; // true = test webhook, false = production webhook

const WEBHOOK_URL = USE_TEST_WEBHOOK
  ? "https://sleeperops.app.n8n.cloud/webhook-test/intake-form"
  : "https://sleeperops.app.n8n.cloud/webhook/intake-form";

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

  const subServicesOptions = {
    "AI Stack Consulting": ["Strategy & Tool Recommendations"],
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
      "Other",
    ],
  };

  const budgets = ["< $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"];

  const timelines = ["ASAP", "1 - 3 months", "3 - 6 months", "Flexible"];

  const toggleArrayItem = (array, item) =>
    array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      if (name === "coreServices") {
        const updatedCoreServices = toggleArrayItem(formData.coreServices, value);
        const allowedSubs = updatedCoreServices.flatMap(
          (core) => subServicesOptions[core]
        );
        const updatedSubServices = formData.subServices.filter((sub) =>
          allowedSubs.includes(sub)
        );
        setFormData((prev) => ({
          ...prev,
          coreServices: updatedCoreServices,
          subServices: updatedSubServices,
        }));
      } else if (name === "subServices") {
        const updatedSubServices = toggleArrayItem(formData.subServices, value);
        setFormData((prev) => ({ ...prev, subServices: updatedSubServices }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const normalizeUrl = (url) => {
    const trimmed = url.trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    return "https://" + trimmed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      companyUrl: normalizeUrl(formData.companyUrl),
      linkedInUrl: normalizeUrl(formData.linkedInUrl),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
    } catch (error) {
      alert("Error submitting form, please try again.");
      console.error("Submit error:", error);
    }
  };

  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Thank You | Free Process Audit Requested - SleeperOps</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        
        <main className="relative min-h-screen px-6 py-16 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
          <div
            className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
            aria-hidden="true"
          />
          <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-sm text-center relative z-10">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-6 text-[#0a2c4d]">Process Audit Request Received!</h2>
            <p className="text-lg text-[#2c5282] mb-6">
              Thank you for requesting your free process audit. I'll analyze your current workflows and identify 
              the biggest operational bottlenecks that are costing your business time and money.
            </p>
            <div className="bg-[#3787b9] bg-opacity-10 rounded-xl p-6 border border-[#3787b9] border-opacity-30 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-[#0a2c4d]">What Happens Next:</h3>
              <div className="text-left space-y-2 text-[#2c5282]">
                <p>📋 <strong>Review:</strong> I'll analyze your submission within 24 hours</p>
                <p>📞 <strong>Contact:</strong> I'll reach out to schedule your free audit session</p>
                <p>⚡ <strong>Audit:</strong> We'll identify your biggest operational bottlenecks</p>
                <p>🎯 <strong>Results:</strong> You'll get actionable recommendations regardless of whether we work together</p>
              </div>
            </div>
            <Link 
              to="/" 
              className="inline-block rounded-xl bg-[#3787b9] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#2c5282] transition"
            >
              ← Back to Home
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Free Process Audit | Identify Your Biggest Operational Bottlenecks - SleeperOps</title>
        <meta
          name="description"
          content="Get your free operational efficiency audit. We'll identify exactly which manual processes are costing your business the most time, money, and opportunities."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sleeperops.com/contact" />
      </Helmet>

      <main className="relative min-h-screen px-6 py-16 text-[#0a2c4d] bg-gradient-to-br from-[#d2ecf9] to-[#a1c1ff]">
        <div
          className="absolute inset-0 bg-[url('/background-pattern.png')] bg-repeat opacity-5 bg-[length:400px_400px]"
          aria-hidden="true"
        />
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <Link to="/" className="block mb-8">
            <img
              src="/HeroPagelogo.png"
              alt="SleeperOps Business Automation"
              className="mx-auto w-32 h-32 sm:w-40 sm:h-40"
            />
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a2c4d]">
            Get Your Free Process Audit
          </h1>
          
          <p className="text-xl text-[#2c5282] mb-8 max-w-3xl mx-auto leading-relaxed">
            I'll analyze your current workflows and identify exactly which operational bottlenecks are costing your business the most time, money, and competitive opportunities.
          </p>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-[#0a2c4d] mb-1">Free Analysis</h3>
              <p className="text-sm text-[#2c5282]">No cost, no obligation operational efficiency review</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-[#0a2c4d] mb-1">Actionable Results</h3>
              <p className="text-sm text-[#2c5282]">Specific recommendations you can implement immediately</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg backdrop-blur-md border border-[#3787b9] border-opacity-20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-[#0a2c4d] mb-1">ROI Focused</h3>
              <p className="text-sm text-[#2c5282]">Identify opportunities worth $2,000+ in time savings</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl backdrop-blur-sm relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#0a2c4d]">Tell Me About Your Business</h2>
              <p className="text-[#2c5282]">
                The more I understand about your current processes, the better I can identify your biggest improvement opportunities.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">First Name *</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                />
              </label>

              <label className="block">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Last Name *</span>
                <input
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                />
              </label>

              <label className="block">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                  placeholder="Optional"
                />
              </label>
            </div>

            {/* Business Information */}
            <div className="border-t border-[#3787b9] border-opacity-20 pt-6">
              <h3 className="text-lg font-semibold mb-4 text-[#0a2c4d]">Business Information</h3>
              
              <label className="block mb-4">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Company Name *</span>
                <input
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                />
              </label>

              <label className="block mb-4">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Company Website *</span>
                <input
                  name="companyUrl"
                  type="text"
                  required
                  value={formData.companyUrl}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                  placeholder="example.com"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-1 font-semibold text-[#0a2c4d]">LinkedIn Profile</span>
                  <input
                    name="linkedInUrl"
                    type="text"
                    value={formData.linkedInUrl}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                    placeholder="linkedin.com/in/yourprofile"
                  />
                </label>

                <label className="block">
                  <span className="block mb-1 font-semibold text-[#0a2c4d]">Your Role/Title</span>
                  <input
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="block mb-4">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Industry</span>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                >
                  <option value="">Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Services Interest */}
            <div className="border-t border-[#3787b9] border-opacity-20 pt-6">
              <fieldset className="mb-4">
                <legend className="block mb-3 font-semibold text-[#0a2c4d] text-lg">
                  What Type of Help Are You Looking For? *
                </legend>
                <div className="space-y-3">
                  {coreServicesOptions.map((service) => (
                    <label key={service} className="flex items-start space-x-3 p-3 bg-[#3787b9] bg-opacity-5 rounded-lg border border-[#3787b9] border-opacity-20">
                      <input
                        type="checkbox"
                        name="coreServices"
                        value={service}
                        checked={formData.coreServices.includes(service)}
                        onChange={handleChange}
                        className="mt-1 text-[#3787b9] focus:ring-[#3787b9]"
                        required={formData.coreServices.length === 0}
                      />
                      <span className="text-[#0a2c4d]">{service}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {formData.coreServices.length > 0 && (
                <fieldset className="mb-6">
                  <legend className="block mb-3 font-semibold text-[#0a2c4d]">
                    Specific Areas of Interest
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {formData.coreServices
                      .flatMap((core) => subServicesOptions[core])
                      .map((subService) => (
                        <label
                          key={subService}
                          className="flex items-start space-x-3 p-3 bg-[#3787b9] bg-opacity-5 rounded-lg border border-[#3787b9] border-opacity-20"
                        >
                          <input
                            type="checkbox"
                            name="subServices"
                            value={subService}
                            checked={formData.subServices.includes(subService)}
                            onChange={handleChange}
                            className="mt-1 text-[#3787b9] focus:ring-[#3787b9]"
                          />
                          <span className="text-[#0a2c4d] text-sm">{subService}</span>
                        </label>
                      ))}
                  </div>
                </fieldset>
              )}
            </div>

            {/* Project Details */}
            <div className="border-t border-[#3787b9] border-opacity-20 pt-6">
              <h3 className="text-lg font-semibold mb-4 text-[#0a2c4d]">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="block mb-1 font-semibold text-[#0a2c4d]">Budget Range</span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
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
                  <span className="block mb-1 font-semibold text-[#0a2c4d]">Timeline</span>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block mb-4">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">How did you hear about us?</span>
                <input
                  name="referral"
                  type="text"
                  value={formData.referral}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                  placeholder="Optional"
                />
              </label>

              <label className="block mb-6">
                <span className="block mb-1 font-semibold text-[#0a2c4d]">Describe Your Biggest Operational Challenge *</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-[#0a2c4d] border border-[#3787b9] border-opacity-30 focus:border-[#3787b9] focus:outline-none focus:ring-2 focus:ring-[#3787b9] focus:ring-opacity-20"
                  placeholder="What manual process is taking up the most time for your team? What opportunities are you losing due to slow response times? What's your biggest operational bottleneck right now?"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#3787b9] py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#2c5282] transition transform hover:scale-105"
            >
              Request Free Process Audit
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-[#2c5282]">
                <strong>What happens next:</strong> I'll review your submission and reach out within 24 hours to schedule your free operational efficiency audit.
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
