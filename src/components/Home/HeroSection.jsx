// src/components/Home/HeroSection.jsx
import { useEffect, useState, useRef } from "react"
import fmtLogo from "../../assets/fmt.png"
import financialAnalysisImg from "../../assets/home/financial-analysis.png"
import portfolioManagementImg from "../../assets/home/portfolio-management.png"
import reportingImg from "../../assets/home/reporting.png"
import ratingMethodologiesImg from "../../assets/home/rating-methodologies.png"
import liquidityImg from "../../assets/home/liquidity.png"
import financialsSpreadingImg from "../../assets/home/financials-sreading.png"

export default function HeroSection() {
  const [phase, setPhase] = useState("hold") // "hold" -> "move"
  const [targetPosition, setTargetPosition] = useState({ left: "50%", top: "50%" })
  const rightColumnRef = useRef(null)

  // how long it stays centered before moving
  const HOLD_MS = 1500

  useEffect(() => {
    const calculateTargetPosition = () => {
      if (rightColumnRef.current) {
        const rect = rightColumnRef.current.getBoundingClientRect()
        const sectionRect = rightColumnRef.current.closest("section")?.getBoundingClientRect()
        if (sectionRect) {
          // Calculate position relative to section
          const left = ((rect.left + rect.width / 2 - sectionRect.left) / sectionRect.width) * 100
          const top = ((rect.top + rect.height / 2 - sectionRect.top) / sectionRect.height) * 100
          setTargetPosition({ left: `${left}%`, top: `${top}%` })
        }
      }
    }

    // Calculate initial position
    calculateTargetPosition()
    
    const t = setTimeout(() => {
      calculateTargetPosition()
      setPhase("move")
    }, HOLD_MS)
    
    // Recalculate on resize
    window.addEventListener("resize", calculateTargetPosition)
    
    return () => {
      clearTimeout(t)
      window.removeEventListener("resize", calculateTargetPosition)
    }
  }, [])

  // The 6 surrounding items with their positions (angles in degrees, 0 = top)
  const diagramItems = [
    { text: "Financial Analysis", image: financialAnalysisImg, angle: -90, distance: 180 }, // Top
    { text: "Portfolio Management", image: portfolioManagementImg, angle: -30, distance: 180 }, // Top-right
    { text: "Reporting", image: reportingImg, angle: 30, distance: 180 }, // Bottom-right
    { text: "Customisable Rating Methodologies", image: ratingMethodologiesImg, angle: 90, distance: 180 }, // Bottom
    { text: "Liquidity Assessment & Financial Modelling", image: liquidityImg, angle: 150, distance: 180 }, // Bottom-left
    { text: "Financials Spreading", image: financialsSpreadingImg, angle: -150, distance: 180 }, // Top-left
  ]

  const isMove = phase === "move"

  return (
    <section className="relative min-h-[calc(100vh-86px)] overflow-hidden" style={{ backgroundColor: '#E4E4E4' }}>
      <div className="relative mx-auto max-w-7xl px-8 pt-16 pb-20">
        {/* Layout grid (text left, diagram right) - 50/50 split */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT TEXT CONTENT (only appears after logo moves) */}
          <div
            className={[
              "transition-all duration-700 ease-out",
              isMove ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              Financial Management Tool
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
              Financial Analysis powered by Artificial Intelligence - from data spreading to credit ratings and portfolio insights, all in one tool.
            </p>

            <p className="mt-6 text-lg font-bold text-primary sm:text-xl">
              Data. Insight. Action.
            </p>

            <div className="mt-8">
              <button className="rounded-lg bg-gray-200 px-6 py-3 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT DIAGRAM COLUMN - fixed ovals and target for logo */}
          <div ref={rightColumnRef} className="relative flex items-center justify-center lg:min-h-[500px]" id="diagram-target">
            {/* Fixed surrounding images - fade in after logo moves */}
            <div 
              className={`relative h-[380px] w-[380px] transition-opacity duration-700 ${
                isMove ? "opacity-100" : "opacity-0"
              }`}
            >
              {diagramItems.map((item, index) => {
                const radian = (item.angle * Math.PI) / 180
                const x = Math.cos(radian) * item.distance
                const y = Math.sin(radian) * item.distance

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="flex h-auto w-auto items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.text}
                        className={`h-auto w-auto object-contain drop-shadow-md ${
                          item.text === "Customisable Rating Methodologies" 
                            ? "max-w-[200px] min-w-[150px]" 
                            : "max-w-[140px]"
                        }`}
                        draggable="false"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* LOGO STAGE (absolute over the whole hero so it can start centered on screen, then moves to right column) */}
      <div
        className={[
          "logo-stage",
          isMove ? "logo-stage--move" : "logo-stage--hold",
        ].join(" ")}
        style={isMove ? {
          left: targetPosition.left,
          top: targetPosition.top,
        } : {}}
      >
        {/* logo - moves from center to right column */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isMove ? "logo-float" : "logo-hold"}`} style={{ zIndex: 1 }}>
          <img
            src={fmtLogo}
            alt="FMT"
            className="h-[180px] w-[180px] sm:h-[210px] sm:w-[210px] object-contain drop-shadow-sm"
            draggable="false"
          />
        </div>
      </div>

      {/* Chat button in bottom right */}
      <button className="fixed bottom-6 right-6 flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-white shadow-lg transition hover:bg-primary-hover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-sm font-semibold">Chat</span>
      </button>

      {/* Component-scoped CSS for "center -> right" animation */}
      <style>{`
        /* The stage is always absolute so it can travel across the whole screen */
        .logo-stage{
          position: absolute;
          width: 380px;
          height: 380px;
          transition: transform 900ms cubic-bezier(.22,.8,.2,1);
          will-change: transform;
        }

        /* HOLD = perfectly centered on screen */
        .logo-stage--hold{
          left: 50%;
          top: 50%;
          translate: -50% -50%;
          transform: scale(1);
        }

        /* MOVE = positioned in right column (calculated via JS) */
        .logo-stage--move{
          translate: -50% -50%;
          transform: scale(1);
        }

        /* Logo breathing while held */
        .logo-hold { animation: holdBreath 2.2s ease-in-out infinite; }
        @keyframes holdBreath {
          0%, 100% { transform: scale(1.02); }
          50%      { transform: scale(1.05); }
        }

        /* Logo float after move */
        .logo-float { animation: logoFloat 3.5s ease-in-out infinite; }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}
