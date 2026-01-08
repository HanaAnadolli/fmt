import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

// blog images
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";

// ✅ SAME STATIC BLOG DATA AS Blog.jsx
const BLOGS = [
  {
    id: 1,
    title: "How automation is reshaping trade finance",
    author: "Matthew M.",
    createdAt: "2025-07-30",
    description:
      "The trade finance landscape is undergoing a significant transformation, driven by advancements in automation and digital infrastructure. As traditional processes become increasingly outdated, institutions are shifting toward intelligent platforms like TPS to gain efficiency, accuracy, and scalability. By leveraging AI-powered tools and real-time processing capabilities, TPS not only reduces manual errors but also provides end-to-end visibility over billing, compliance, and credit monitoring. This shift marks a new era for financial institutions, where speed and transparency are no longer luxuries — but necessities.",
    image: blog1,
    featured: false,
    content:
      "The trade finance landscape is undergoing a significant transformation, driven by advancements in automation and digital infrastructure. As traditional processes become increasingly outdated, institutions are shifting toward intelligent platforms like TPS to gain efficiency, accuracy, and scalability. By leveraging AI-powered tools and real-time processing capabilities, TPS not only reduces manual errors but also provides end-to-end visibility over billing, compliance, and credit monitoring. This shift marks a new era for financial institutions, where speed and transparency are no longer luxuries — but necessities.",
  },
  {
    id: 2,
    title: "End-to-End visibility in trade finance: Why it matters more than ever",
    author: "David M.",
    createdAt: "2025-07-28",
    description:
      "In today’s fast-paced financial environment, the ability to track every document, transaction, and credit limit in real-time is essential. TPS provides unmatched end-to-end visibility, enabling institutions to manage complex trade programs with confidence and clarity. Whether it’s defining payment schedules, customizing pricing for different counterparties, or reconciling balances instantly, TPS brings structure and intelligence to every part of the process. As global trade volumes rise, platforms that offer total transparency will be the cornerstone of sustainable growth and risk management.",
    image: blog2,
    featured: false,
    content:
      "In today’s fast-paced financial environment, the ability to track every document, transaction, and credit limit in real time is essential. TPS provides unmatched end-to-end visibility, enabling institutions to manage complexity with confidence.",
  },
  {
    id: 3,
    title: "The Power of Intelligent Ecosystems: How TPS, FMT, CMT & OMT work together",
    author: "Maria A.",
    createdAt: "2025-07-27",
    description:
      "Financial ecosystems are evolving, and standalone tools are no longer sufficient. TPS introduces a new approach by integrating seamlessly with the Financial Management Tool (FMT), Compliance Management Tool (CMT), and Operations Management Tool (OMT). This unified architecture allows institutions to automate everything from credit onboarding and compliance checks to real-time payment reconciliation. Supported by artificial intelligence, this ecosystem creates a smart infrastructure that not only enhances operational efficiency but also empowers institutions to scale securely and adaptively.",
    image: blog3,
    featured: false,
    content:
      "Financial ecosystems are evolving, and standalone tools are no longer sufficient. TPS introduces a new approach by integrating seamlessly with the Financial Management Tool (FMT), Compliance Management Tool (CMT), and Operations Management Tool (OMT). This unified architecture allows institutions to automate everything from credit onboarding and compliance checks to real-time payment reconciliation. Supported by artificial intelligence, this ecosystem creates a smart infrastructure that not only enhances operational efficiency but also empowers institutions to scale securely and adaptively.",
  },
  {
    id: 4,
    title: "Building a Connected Trade Finance Stack: Why APIs and AI Matter",
    author: "FMT Team",
    createdAt: "2025-07-26",
    description:
      "In trade finance, speed and certainty hinge on how well your systems talk to each other. By pairing TPS with KS-TF tools—FMT for financial workflows, CMT for compliance, and the AI-assisted OMT for operations—institutions move from manual handoffs to orchestrated, end-to-end processing. API connections pull billing data directly from ERP, sync payment updates from program accounts, and ingest COF/FX rates from trusted sources, while TPS monitors credit limits, validates documents, and surfaces real-time reporting in one portal. The result is fewer errors, clearer audit trails, and a faster path from onboarding to settlement. For banks and fintechs scaling Distribution and Payables Financing, a connected, AI-enabled stack isn’t just an upgrade—it’s the foundation for resilient, compliant growth.",
    image: blog4,
    featured: true, // ⭐ Featured
    content:
      "In trade finance, speed and certainty hinge on how well your systems talk to each other. By pairing TPS with KS-TF tools—FMT for financial workflows, CMT for compliance, and the AI-assisted OMT for operations—institutions move from manual handoffs to orchestrated, end-to-end processing. API connections pull billing data directly from ERP, sync payment updates from program accounts, and ingest COF/FX rates from trusted sources, while TPS monitors credit limits, validates documents, and surfaces real-time reporting in one portal. The result is fewer errors, clearer audit trails, and a faster path from onboarding to settlement. For banks and fintechs scaling Distribution and Payables Financing, a connected, AI-enabled stack isn’t just an upgrade—it’s the foundation for resilient, compliant growth.",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = BLOGS.find((b) => String(b.id) === String(id));

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, "0")}.${String(
      date.getMonth() + 1
    ).padStart(2, "0")}.${date.getFullYear()}`;
  };

  if (!blog) {
    return (
      <>
        <Header />
        <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <p className="text-red-600 mb-6 text-lg">Blog post not found.</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
          >
            Back to Blog
          </button>
        </main>
        <ContactSection />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Image */}
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 border-b pb-6">
              <span className="font-medium">{blog.author}</span>
              <span>{formatDate(blog.createdAt)}</span>
            </div>

            {blog.description && (
              <p className="text-xl text-gray-700 mb-6 font-medium leading-relaxed">
                {blog.description}
              </p>
            )}

            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </article>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition font-semibold"
          >
            View All Blog Posts
          </Link>
        </div>
      </main>

      <ContactSection />
    </>
  );
};

export default BlogDetail;
