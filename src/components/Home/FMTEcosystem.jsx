import React, { useState, useRef, useEffect } from "react"
import fmtImage from "../../assets/graphic/fmt.png"
import fmtHoverImage from "../../assets/graphic/fmt-hover.png"
import tpsImage from "../../assets/graphic/tpsomt.png"
import cmtImage from "../../assets/graphic/cmtomt.png"
import omtImage from "../../assets/graphic/omt.png"
import arrowImage from "../../assets/graphic/arrow.svg"

// Popup components
import CMTPopup from "./popups/CMTPopup"
import TPSPopup from "./popups/TPSPopup"
import OMTPopup from "./popups/OMTPopup"
import ServicesPopup from "./popups/ServicesPopup"

const FMTEcosystem = () => {
  const [open, setOpen] = useState(null)
  const [tpsHoverLeft, setTpsHoverLeft] = useState(false)
  const [tpsHoverRight, setTpsHoverRight] = useState(false)

  const leftDiagramRef = useRef(null)
  const rightDiagramRef = useRef(null)
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < 640)
    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 relative">
        {/* Vertical divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2" />

        {/* LEFT COLUMN */}
        <div className="lg:pr-16 grid grid-rows-[auto,1fr,auto] gap-6">
          {/* Title */}
          <div className="relative group cursor-pointer text-center px-2 overflow-hidden">
            <div className="absolute inset-0 bg-primary scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0" />
            <h2 className="relative z-10 text-lg sm:text-xl lg:text-[22px] font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white leading-tight">
              Customize FMT Capabilities to your Strategic Focus
            </h2>
            <div className="relative z-10 w-full h-1 bg-primary" />
          </div>

          {/* Text */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Optimize financial management and analysis in areas that align directly with your
              operational priorities.
            </p>
            <p>
              Whether it’s automating AI-powered financial spreading, enhancing credit rating
              methodologies, or enabling advanced reporting and compliance features, FMT’s modular
              design gives you the flexibility to configure the platform to your unique business
              needs — without the complexity of a full-scale deployment.
            </p>
          </div>

          {/* ✅ Diagram BAND (fixed height, vertically centered) */}
          <div className="diagram-band flex items-center">
            <div
              ref={rightDiagramRef}
              className="relative w-full h-full overflow-hidden"
            >
              {/* External Services */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <div
                  className="bg-[#929292] rounded-lg px-3 py-2 lg:px-4 lg:py-2.5 text-white font-medium text-xs lg:text-sm whitespace-nowrap hover:bg-[#CACACA] cursor-pointer transition-colors"
                  onClick={() => setOpen("services")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open External Services details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setOpen("services")
                    }
                  }}
                >
                  External Services
                </div>
              </div>

              {/* Arrow to FMT */}
              <div className="absolute left-[40%] bottom-[34%]">
                <span className="absolute right-[120%] bottom-[82%] -translate-y-1/2 text-xs lg:text-sm">
                  APIs
                </span>
                <div className="rotate-[215deg] origin-left">
                  <img src={arrowImage} alt="arrow" className="w-12 h-9 lg:w-20 lg:h-15" />
                </div>
              </div>

              {/* Main FMT (centered) */}
              <div className="absolute left-[62%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] lg:w-[220px]">
                <img
                  src={tpsHoverRight ? fmtHoverImage : fmtImage}
                  alt="FMT"
                  className="w-full h-auto"
                  style={{
                    transition: "transform 800ms ease, filter 800ms ease",
                    transform: tpsHoverRight ? "scale(1.03)" : "scale(1)",
                    filter: tpsHoverRight ? "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" : "none",
                  }}
                  onMouseEnter={() => setTpsHoverRight(true)}
                  onMouseLeave={() => setTpsHoverRight(false)}
                />
                <div className="absolute bottom-[-15px] lg:bottom-[-18px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <img
                    src={omtImage}
                    alt="OMT"
                    className="w-12 h-6 lg:w-15 lg:h-8 mt-1 cursor-pointer transition-all hover:brightness-[0.6]"
                    onClick={() => setOpen("omt")}
                    role="button"
                    tabIndex={0}
                    aria-label="Open OMT details"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setOpen("omt")
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:pl-16 grid grid-rows-[auto,1fr,auto] gap-6">
          {/* Title */}
          <div className="relative group cursor-pointer text-center overflow-hidden px-2">
            <div className="absolute inset-0 bg-primary scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0" />
            <h2 className="relative z-10 text-xl sm:text-2xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
              Unlock the Full Potential of TPS
            </h2>
            <div className="relative z-10 w-full h-1 bg-primary" />
          </div>

          {/* Text */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Seamlessly connect TPS with the complete KSTF suite and external APIs to access a
              comprehensive ecosystem for managing Trade Finance operations.
            </p>
            <p>
              Maximize functionality and efficiency through advanced capabilities by connecting TPS
              with FMT and CMT and leverage AI-powered enhancements by connection to OMT.
            </p>
            <br/>
          </div>

          {/* ✅ Diagram BAND (same height, vertically centered) */}
          <div className="diagram-band flex items-center">
            <div
              ref={leftDiagramRef}
              className="relative w-full h-full overflow-hidden"
            >
              {/* External Services */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <div
                  className="bg-[#929292] rounded-lg px-3 py-2 lg:px-4 lg:py-2.5 text-white font-medium text-xs lg:text-sm whitespace-nowrap hover:bg-[#CACACA] cursor-pointer transition-colors"
                  onClick={() => setOpen("services")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open External Services details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setOpen("services")
                    }
                  }}
                >
                  External Services
                </div>
              </div>

              {/* Arrow to FMT */}
              <div className="absolute left-[38%] bottom-[34%]">
                <span className="absolute right-[120%] bottom-[82%] -translate-y-1/2 text-xs lg:text-sm">
                  APIs
                </span>
                <div className="rotate-[215deg] origin-left">
                  <img src={arrowImage} alt="arrow" className="w-12 h-9 lg:w-20 lg:h-15" />
                </div>
              </div>

              {/* Main FMT */}
              <div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] lg:w-[220px]">
                <img
                  src={tpsHoverLeft ? fmtHoverImage : fmtImage}
                  alt="FMT"
                  className="w-full h-auto"
                  style={{
                    transition: "transform 800ms ease, filter 800ms ease",
                    transform: tpsHoverLeft ? "scale(1.03)" : "scale(1)",
                    filter: tpsHoverLeft ? "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" : "none",
                  }}
                  onMouseEnter={() => setTpsHoverLeft(true)}
                  onMouseLeave={() => setTpsHoverLeft(false)}
                />
                <div className="absolute bottom-[-15px] lg:bottom-[-18px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <img
                    src={omtImage}
                    alt="OMT"
                    className="w-12 h-6 lg:w-15 lg:h-8 mt-1 cursor-pointer transition-all hover:brightness-[0.6]"
                    onClick={() => setOpen("omt")}
                    role="button"
                    tabIndex={0}
                    aria-label="Open OMT details"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setOpen("omt")
                      }
                    }}
                  />
                </div>
              </div>

              {/* Arrow to CMT */}
              <div className="absolute left-[70%] top-[22%] -rotate-[4deg] origin-left">
                <img src={arrowImage} alt="arrow to CMT" className="w-12 h-9 lg:w-20 lg:h-15" />
              </div>

              {/* CMT */}
              <div className="absolute right-0 top-10 cursor-pointer hover:opacity-80 transition-opacity w-[75px] lg:w-[90px]">
                <img
                  src={cmtImage}
                  alt="CMT"
                  className="w-full h-auto"
                  onClick={() => setOpen("cmt")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open CMT details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setOpen("cmt")
                    }
                  }}
                />
              </div>

              {/* Arrow to TPS */}
              <div className="absolute left-[73%] bottom-[30%] rotate-[45deg] origin-left">
                <img src={arrowImage} alt="arrow to TPS" className="w-12 h-9 lg:w-20 lg:h-15" />
              </div>

              {/* TPS */}
              <div className="absolute right-0 bottom-12 cursor-pointer hover:opacity-80 transition-opacity w-[75px] lg:w-[90px]">
                <img
                  src={tpsImage}
                  alt="TPS"
                  className="w-full h-auto"
                  onClick={() => setOpen("fmt")}
                  role="button"
                  tabIndex={0}
                  aria-label="Open TPS details"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setOpen("fmt")
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* diagram band height */}
        <style>{`
          .diagram-band{
            height: 280px;
          }
          @media (min-width: 640px){
            .diagram-band{ height: 300px; }
          }
          @media (min-width: 1024px){
            .diagram-band{ height: 360px; }
          }
        `}</style>
      </div>

      {/* POPUPS */}
      <CMTPopup open={open === "cmt"} onClose={() => setOpen(null)} />
      <TPSPopup open={open === "fmt"} onClose={() => setOpen(null)} />
      <OMTPopup open={open === "omt"} onClose={() => setOpen(null)} />
      <ServicesPopup open={open === "services"} onClose={() => setOpen(null)} />
    </section>
  )
}

export default FMTEcosystem
