import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import ScrollToTop from "./components/ScrollToTop"
import ChatBox from "./components/ChatBox"

// ✅ renamed pages (avoid adblock keywords)
import LegalCookies from "./pages/LegalCookies"
import LegalPrivacy from "./pages/LegalPrivacy"

const BODY_CLASS_NOT_HOME = "page-not-home"

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.remove(BODY_CLASS_NOT_HOME)
    } else {
      document.body.classList.add(BODY_CLASS_NOT_HOME)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blog */}
        <Route path="/news" element={<Blog />} />
        <Route path="/news/:id" element={<BlogDetail />} />

        {/* ✅ legal routes */}
        <Route path="/legal-cookies" element={<LegalCookies />} />
        <Route path="/legal-privacy" element={<LegalPrivacy />} />
      </Routes>

      {/* Global UI */}
      <Footer />
      <BackToTop />
      <ChatBox />
    </div>
  )
}
