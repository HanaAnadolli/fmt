import React, { useEffect, useRef } from "react"
import Header from "../components/Header"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import aboutVideo from "../assets/about/about-video.mp4"
import ComingSoon from "../components/Home/ComingSoon"

const About = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Transparent header for this page
    document.body.classList.add("header-transparent")
    return () => document.body.classList.remove("header-transparent")
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      video.playbackRate = 0.18 // ⬅️ slower & smoother than 0.25
      video.play().catch(() => {})
    }

    video.addEventListener("loadeddata", handleLoaded)
    return () => video.removeEventListener("loadeddata", handleLoaded)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Transparent Header */}
      <Header transparent />

      {/* Hero with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover about-video"
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

        {/* Soft overlay for contrast */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      </section>

      <ComingSoon />
      <ContactSection />

      {/* Local styles */}
      <style>{`
        .about-video{
          mix-blend-mode: screen; /* black becomes transparent */
          filter: brightness(1.15) contrast(1.05) saturate(1.1);
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  )
}

export default About
