import React, { useEffect } from "react";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import aboutVideo from "../assets/about/about-video.mp4";
import ComingSoon from "../components/Home/ComingSoon";

const About = () => {
  useEffect(() => {
    // Optional: add a body class to make header transparent for this page
    document.body.classList.add("header-transparent");
    return () => document.body.classList.remove("header-transparent");
  }, []);

  return (
    <div className="min-h-screen">
      {/* Transparent Header */}
      <Header transparent />

      {/* Main Content Area with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              mixBlendMode: "screen", // makes black transparent
              filter: "brightness(1.15) contrast(1.05) saturate(1.1)",
            }}
            onLoadedData={(e) => {
              // Slow down video speed to 25%
              e.target.playbackRate = 0.25;
            }}
          >
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            About us
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            The Financial Management Tool (FMT) is developed by{" "}
            <span className="font-bold text-primary">KS-TF AG</span> (KSTF).
          </p>
        </div>
      </section>

      <ComingSoon />
      <ContactSection />
    </div>
  );
};

export default About;
