// src/components/Home/HeroSection.jsx
import { useEffect, useMemo, useRef, useState } from "react"
import fmtLogo from "../../assets/fmt.png"
import financialAnalysisImg from "../../assets/home/financial-analysis.png"
import portfolioManagementImg from "../../assets/home/portfolio-management.png"
import reportingImg from "../../assets/home/reporting.png"
import ratingMethodologiesImg from "../../assets/home/rating-methodologies.png"
import liquidityImg from "../../assets/home/liquidity.png"
import financialsSpreadingImg from "../../assets/home/financials-sreading.png"

export default function HeroSection() {
  // phases:
  // hold: overlay centered
  // move: overlay moves to target
  // done: overlay hidden, real logo shown
  const [phase, setPhase] = useState("hold")
  const [delta, setDelta] = useState({ x: 0, y: 0 })

  const sectionRef = useRef(null)
  const targetRef = useRef(null)

  const HOLD_MS = 1500
  const MOVE_MS = 900

  const diagramItems = useMemo(
    () => [
      { text: "Financial Analysis", image: financialAnalysisImg, angle: -90, distance: 180 }, // Top
      { text: "Portfolio Management", image: portfolioManagementImg, angle: -30, distance: 180 }, // Top-right
      { text: "Reporting", image: reportingImg, angle: 30, distance: 180 }, // Bottom-right
      { text: "Customisable Rating Methodologies", image: ratingMethodologiesImg, angle: 90, distance: 180 }, // Bottom
      { text: "Liquidity Assessment & Financial Modelling", image: liquidityImg, angle: 150, distance: 180 }, // Bottom-left
      { text: "Financials Spreading", image: financialsSpreadingImg, angle: -150, distance: 180 }, // Top-left
    ],
    []
  )

  const isMove = phase === "move" || phase === "done"
  const showRealLogo = phase === "done"
  const showOverlay = phase !== "done"

  const computeDeltaToTarget = () => {
    if (!targetRef.current) return

    const targetRect = targetRef.current.getBoundingClientRect()
    const targetCx = targetRect.left + targetRect.width / 2
    const targetCy = targetRect.top + targetRect.height / 2

    const viewportCx = window.innerWidth / 2
    const viewportCy = window.innerHeight / 2

    setDelta({ x: targetCx - viewportCx, y: targetCy - viewportCy })
  }

  useEffect(() => {
    // ensure we have correct delta on first render
    computeDeltaToTarget()

    const onResize = () => {
      // keep target correct if user resizes during hold
      if (phase === "hold") computeDeltaToTarget()
    }
    window.addEventListener("resize", onResize)

    const t = setTimeout(() => {
      // recalc right before move (fonts/layout settled)
      computeDeltaToTarget()
      requestAnimationFrame(() => setPhase("move"))
    }, HOLD_MS)

    return () => {
      clearTimeout(t)
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phase !== "move") return
    const t = setTimeout(() => setPhase("done"), MOVE_MS)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-86px)] overflow-hidden"
      style={{ backgroundColor: "#E4E4E4" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20">
        {/* Layout grid (text left, diagram right) */}
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          {/* LEFT TEXT CONTENT (appears after move starts) */}
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
              Financial Analysis powered by Artificial Intelligence - from data spreading to credit ratings
              and portfolio insights, all in one tool.
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

          {/* RIGHT DIAGRAM COLUMN */}
          <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
            {/* Surrounding images (fade in after move starts) */}
            <div
              className={`diagram-stage relative transition-opacity duration-700 ${
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

              {/* ✅ REAL LOGO (stays where it belongs, in the diagram center) */}
              <div
                ref={targetRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] pointer-events-none"
                style={{
                  opacity: showRealLogo ? 1 : 0,
                  transition: "opacity 180ms ease-out",
                }}
              >
                <div className="logo-anim-float">
                  <img
                    src={fmtLogo}
                    alt="FMT"
                    className="logo-img object-contain drop-shadow-sm"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ OVERLAY LOGO (only for the travel animation) */}
      {showOverlay && (
        <div className="overlay-stage">
          <div
            className={["overlay-mover", phase === "hold" ? "overlay--hold" : "overlay--move"].join(
              " "
            )}
            style={
              phase === "move"
                ? {
                    transform: `translate(-50%, -50%) translate(${delta.x}px, ${delta.y}px)`,
                  }
                : undefined
            }
          >
            {/* IMPORTANT: animate child, not the mover (no transform conflicts) */}
            <div className={phase === "hold" ? "logo-anim-hold" : "logo-anim-float"}>
              <img
                src={fmtLogo}
                alt="FMT"
                className="logo-img object-contain drop-shadow-sm"
                draggable="false"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        :root{
          --stage: clamp(260px, 70vw, 380px);
        }

        /* Diagram container uses stage size */
        .diagram-stage{
          width: var(--stage);
          height: var(--stage);
        }

        @media (max-width: 1023px){
          .diagram-stage{
            transform: scale(0.9);
            transform-origin: center;
          }
        }

        @media (max-width: 640px){
          .diagram-stage{
            transform: scale(0.78);
            transform-origin: center;
          }
        }

        /* Responsive logo */
        .logo-img{
          width: clamp(140px, 40vw, 210px);
          height: clamp(140px, 40vw, 210px);
        }

        /* Overlay layer covers the hero */
        .overlay-stage{
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 50;
        }

        /* This element starts centered in viewport and moves to target */
        .overlay-mover{
          position: fixed;
          left: 50vw;
          top: 50vh;
          transform: translate(-50%, -50%);
          transition: transform ${MOVE_MS}ms cubic-bezier(.22,.8,.2,1);
          will-change: transform;
        }

        .overlay--hold{
          transform: translate(-50%, -50%);
        }
        .overlay--move{
          /* transform set inline */
        }

        /* Animations must not touch centering transforms */
        .logo-anim-hold{
          animation: holdBreath 2.2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes holdBreath{
          0%, 100% { transform: scale(1.02); }
          50%      { transform: scale(1.05); }
        }

        .logo-anim-float{
          animation: logoFloat 3.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes logoFloat{
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}
