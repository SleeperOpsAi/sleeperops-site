import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import IntakeForm from "./IntakeForm";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a2c4d] bg-opacity-95 backdrop-blur-sm z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-start space-y-6 p-8 pt-20 text-white text-xl font-semibold"
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
          <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </nav>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        className="fixed top-6 left-6 z-50 flex flex-col space-y-1.5"
      >
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
      </button>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<IntakeForm />} />
        {/* Add routes for Services, About Us, etc. as you build those pages */}
      </Routes>
    </>
  );
}
