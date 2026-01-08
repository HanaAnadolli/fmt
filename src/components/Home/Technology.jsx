import { useState } from "react"

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
  { id: 7, title: "Liquidity assessment impacting the company rating.", icon: icon7 },
  {
    id: 8,
    title: "Automated notifications to users when reaching established thresholds.",
    icon: icon8,
  },
  {
    id: 9,
    title: "Maintaining all analytical documentation in a centralized repository.",
    icon: icon9,
  },
]

const PAGE_SIZE = 3

function clamp2Style() {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  }
}

export default function Technology() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE)
  const start = page * PAGE_SIZE
  const visibleItems = ITEMS.slice(start, start + PAGE_SIZE)

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#E4E4E4' }}>
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-extrabold tracking-tight text-primary">
              Technology
            </h2>
            <p className="mt-4 max-w-3xl text-[18px] leading-7 text-slate-800/90">
              A financial analysis tool powered by artificial intelligence, designed to streamline, automate,
              and elevate the entire financial analysis process.
            </p>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => p - 1)}
              className={[
                "grid h-11 w-11 place-items-center rounded-lg bg-primary text-white shadow-sm",
                page === 0 ? "invisible pointer-events-none" : "visible",
              ].join(" ")}
              aria-label="Previous"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className={[
                "grid h-11 w-11 place-items-center rounded-lg bg-primary text-white shadow-sm",
                page === totalPages - 1 ? "invisible pointer-events-none" : "visible",
              ].join(" ")}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="
                flex items-center gap-7
                rounded-[26px] bg-white
                px-10 py-8
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                transition-colors duration-200
                hover:bg-[#36A8DF33]
                h-[150px]
              "
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#9fd2ef]">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[40px] w-[40px] max-h-[40px] max-w-[40px] flex-shrink-0 object-contain"
                  style={{ minHeight: '40px', minWidth: '40px' }}
                  draggable={false}
                />
              </div>

              <p
                className="overflow-hidden text-[18px] font-semibold leading-7 text-slate-900"
                style={clamp2Style()}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={[
                "h-[7px] rounded-full transition-all",
                i === page ? "w-12 bg-primary" : "w-10 bg-slate-300/80",
              ].join(" ")}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
