import { useEffect, useMemo, useState } from "react"

import icon1 from "../../assets/home/icon1.svg"
import icon2 from "../../assets/home/icon2.svg"
import icon3 from "../../assets/home/icon3.svg"
import icon4 from "../../assets/home/icon4.svg"
import icon5 from "../../assets/home/icon5.svg"
import icon6 from "../../assets/home/icon6.svg"
import icon7 from "../../assets/home/icon7.svg"
import icon8 from "../../assets/home/icon8.svg"
import icon9 from "../../assets/home/icon9.svg"

const ITEMS = [
  { id: 1, title: "Automatic spreading of financial statements", icon: icon1 },
  {
    id: 2,
    title:
      "Running a comprehensive financial analysis on a company or portfolios of companies.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Calculating credit ratings based on customizable methodologies.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Creating detailed reports on companies and portfolio of companies.",
    icon: icon4,
  },
  {
    id: 5,
    title: "Comparing peers across portfolios, industries and geographies.",
    icon: icon5,
  },
  { id: 6, title: "Producing projections short and long term.", icon: icon6 },
  {
    id: 7,
    title: "Liquidity assessment impacting the company rating.",
    icon: icon7,
  },
  {
    id: 8,
    title:
      "Automated notifications to users when reaching established thresholds.",
    icon: icon8,
  },
  {
    id: 9,
    title:
      "Maintaining all analytical documentation in a centralized repository.",
    icon: icon9,
  },
]

// responsive hook (no libs)
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => setIsMdUp(mq.matches)

    if (mq.addEventListener) mq.addEventListener("change", onChange)
    else mq.addListener(onChange)

    setIsMdUp(mq.matches)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange)
      else mq.removeListener(onChange)
    }
  }, [])

  return isMdUp
}

export default function Technology() {
  const isMdUp = useIsMdUp()
  const pageSize = isMdUp ? 3 : 1

  const [page, setPage] = useState(0)

  const totalPages = useMemo(
    () => Math.ceil(ITEMS.length / pageSize),
    [pageSize]
  )

  // keep page valid on resize
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1))
  }, [totalPages])

  const start = page * pageSize
  const visibleItems = ITEMS.slice(start, start + pageSize)

  const canPrev = page > 0
  const canNext = page < totalPages - 1

  return (
    <section className="w-full py-14 sm:py-20 bg-[#E4E4E4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Technology
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-800/90 sm:text-[18px]">
              A financial analysis tool powered by artificial intelligence,
              designed to streamline, automate, and elevate the entire financial
              analysis process.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 md:mt-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={!canPrev}
              className={`grid h-11 w-11 place-items-center rounded-lg bg-primary text-white shadow-sm transition ${
                canPrev
                  ? "hover:opacity-90"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              ←
            </button>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={!canNext}
              className={`grid h-11 w-11 place-items-center rounded-lg bg-primary text-white shadow-sm transition ${
                canNext
                  ? "hover:opacity-90"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`mt-10 sm:mt-14 grid gap-6 ${
            isMdUp ? "md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={[
                "flex items-start gap-6",
                "rounded-[26px] bg-white",
                "px-6 sm:px-10 py-7 sm:py-8",
                "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
                "transition-colors duration-200 hover:bg-[#36A8DF33]",
                isMdUp ? "min-h-[150px]" : "min-h-[130px]",
              ].join(" ")}
            >
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#9fd2ef]">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[40px] w-[40px] object-contain"
                  draggable={false}
                />
              </div>

              {/* Text */}
              <p className="text-[16px] font-semibold leading-7 text-slate-900 sm:text-[18px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 sm:mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-[7px] rounded-full transition-all ${
                i === page
                  ? "w-10 sm:w-12 bg-primary"
                  : "w-8 sm:w-10 bg-slate-300/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
