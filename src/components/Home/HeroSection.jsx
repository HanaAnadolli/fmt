import heroImage from "../../assets/home/hero-image.png";
import "../../index.css";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[150px]">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16 lg:min-h-[calc(100vh-86px)]">
          {/* IMAGE — first on mobile, second on desktop */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-[400px] sm:w-[400px] md:w-[500px] lg:w-[700px]">
              <img
                src={heroImage}
                alt="Financial management tool"
                className="w-full h-auto object-contain"
                draggable="false"
              />
            </div>
          </div>

          {/* TEXT — second on mobile, first on desktop */}
          <div className="max-w-xl order-2 lg:order-1 :text-left">
            <p className="description-font text-sm font-bold tracking-wide text-sky-500">
              Data. Insight. Action.
            </p>

            <h1 className="title-font mt-3 text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
              Financial
              <br />
              Management
              <br />
              Tool
            </h1>

            <p className="description-font mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              An automated financial analysis tool — from data spreading to
              credit ratings and portfolio insights, all in one tool.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() => {
                  const section = document.getElementById("features");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="description-font group inline-flex items-center gap-5 rounded-[1000px] bg-slate-900 pt-[10px] pr-[14px] pb-[10px] pl-[24px] text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Learn more
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900 transition group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929L17.5858 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L17.5858 11L13.2929 6.70711C12.9024 6.31658 12.9024 5.68342 13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071Z"
                      fill="#0F172B"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
