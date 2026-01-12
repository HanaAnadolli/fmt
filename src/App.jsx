import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import ChatBox from "./components/ChatBox"; // ✅ add this

export default function App() {
  return (
    <div style={{ backgroundColor: "#E4E4E4", minHeight: "100vh" }}>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blog */}
        <Route path="/news" element={<Blog />} />
        <Route path="/news/:id" element={<BlogDetail />} />
      </Routes>

      {/* Global UI */}
      <Footer />
      <BackToTop />
      <ChatBox /> 
    </div>
  );
}
