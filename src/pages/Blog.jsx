import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import BlogDescription from "../components/BlogDescription";
import ContactSection from "../components/ContactSection";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import ComingSoon from "../components/Home/ComingSoon";

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

const Blog = () => {
  const navigate = useNavigate();

  const featured = BLOGS.find((b) => b.featured) || null;
  const regularBlogs = BLOGS.filter((b) => !b.featured);

  const [blogCards] = useState(regularBlogs);
  const [featuredArticle] = useState(featured);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    } catch (e) {
      return dateString;
    }
  };

  // supports createdAt / created_at / date
  const getBlogDate = (blog) => {
    return blog.date || formatDate(blog.created_at || blog.createdAt);
  };

  const handleReadMore = (blogId) => {
    navigate(`/news/${blogId}`);
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Blog Cards Section */}
          {blogCards.length > 0 && (
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogCards.map((card) => (
                  <BlogCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    author={card.author}
                    date={getBlogDate(card)}
                    description={card.description}
                    onReadMore={() => handleReadMore(card.id)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Featured Article Section */}
          {featuredArticle && (
            <section>
              <BlogDescription
                title={featuredArticle.title}
                description={featuredArticle.description || featuredArticle.content}
                image={featuredArticle.image}
                onReadMore={() => handleReadMore(featuredArticle.id)}
              />
            </section>
          )}

          {blogCards.length === 0 && !featuredArticle && (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available at the moment.</p>
            </div>
          )}
        </main>
      </div>
      <ComingSoon />
      <ContactSection />
    </>
  );
};

export default Blog;
