import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#E4E4E4", minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blog */}
        <Route path="/news" element={<Blog />} />
        <Route path="/news/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
