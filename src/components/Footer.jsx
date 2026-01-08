import React, { useState } from "react";
import logoWhite from "../assets/logo-white.png";
import BackToTop from "./BackToTop";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // No API call — frontend-only newsletter submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Fake submit (no API)
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");

      setTimeout(() => setSuccess(false), 5000);
    }, 800);
  };

  return (
    <footer className="bg-[#3C3C3C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Logo and Copyright */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoWhite} alt="FMT Logo" />
            </div>
            <p className="text-sm text-gray-300">
              © 2025 FMT - Financial Management Tool, All Rights Reserved
            </p>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">tps@example.com</span>

              <svg
                className="w-4 h-4 text-gray-400 ml-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">
                Hinterbergstrasse 18, CH - 6312 Steinhausen
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Subscribe to our newsletter</h4>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                    setSuccess(false);
                  }}
                  placeholder="E-mail address"
                  disabled={loading}
                  className={`flex-1 bg-transparent border-b ${
                    error
                      ? "border-red-500"
                      : success
                      ? "border-green-500"
                      : "border-gray-400"
                  } text-white placeholder-gray-400 focus:border-primary focus:outline-none pb-2 transition-colors disabled:opacity-50`}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition-opacity font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                    loading ? "cursor-wait" : ""
                  }`}
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && (
                <p className="text-green-400 text-sm">
                  ✓ Successfully subscribed to newsletter!
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <a
                href="/"
                className="text-sm hover:text-primary transition-colors relative group inline-block w-fit"
              >
                HOME
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/about"
                className="text-sm hover:text-primary transition-colors relative group inline-block w-fit"
              >
                ABOUT
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/blog"
                className="text-sm hover:text-primary transition-colors relative group inline-block w-fit"
              >
                NEWS &amp; VIEWS
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="text-sm hover:text-primary transition-colors relative group inline-block w-fit"
              >
                CONTACT
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="hover:text-primary transition-colors relative group inline-block"
            >
              TERMS AND CONDITIONS
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors relative group inline-block"
            >
              PRIVACY AND POLICY
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors relative group inline-block"
            >
              FAQ
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors relative group inline-block"
            >
              COOKIES POLICY
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  );
};

export default Footer;
