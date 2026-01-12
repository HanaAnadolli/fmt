import React, { useState } from "react"
import logoWhite from "../assets/logo-white.png"
import BackToTop from "./BackToTop"
import { Link } from "react-router-dom"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // No API call — frontend-only newsletter submit
  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
    setSuccess(false)

    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setEmail("")

      setTimeout(() => setSuccess(false), 5000)
    }, 800)
  }

  const navLinkClass =
    "text-sm hover:text-primary transition-colors relative group inline-block w-fit"
  const underline =
    "absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"

  return (
    <footer className="bg-[#3C3C3C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoWhite} alt="FMT Logo" />
            </div>
            <p className="text-sm text-gray-300">
              © 2025 FMT - Financial Management Tool, All Rights Reserved
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">info@kstf.ch</span>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
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
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Subscribe to our newsletter</h4>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                    setSuccess(false)
                  }}
                  placeholder="E-mail address"
                  disabled={loading}
                  className={`flex-1 bg-transparent border-b ${
                    error ? "border-red-500" : success ? "border-green-500" : "border-gray-400"
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

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link to="/" className={navLinkClass}>
                HOME
                <span className={underline} />
              </Link>

              <Link to="/about" className={navLinkClass}>
                ABOUT
                <span className={underline} />
              </Link>

              <Link to="/news" className={navLinkClass}>
                NEWS &amp; VIEWS
                <span className={underline} />
              </Link>

              <Link to="/contact" className={navLinkClass}>
                CONTACT
                <span className={underline} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/legal-cookies" className="hover:text-primary transition-colors relative group inline-block">
              COOKIE NOTICE
              <span className={underline} />
            </Link>

            <Link to="/legal-privacy" className="hover:text-primary transition-colors relative group inline-block">
              PRIVACY AND POLICY
              <span className={underline} />
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  )
}

export default Footer
