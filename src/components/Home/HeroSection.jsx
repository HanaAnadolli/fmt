import heroImage from "../../assets/home/hero-image.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-86px)] items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-wide text-sky-500">
              Data. Insight. Action.
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
              Financial
              <br />
              Management
              <br />
              Tool
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              Semi or fully automated financial analysis tool — from data
              spreading to credit ratings and portfolio insights, all in one
              tool.
            </p>

            <div className="mt-8">
              <button className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                Learn more
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-900 transition group-hover:scale-105">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M13.2 12 8.2 7l1.4-1.4L16 12l-6.4 6.4L8.2 17l5-5Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[440px]">
              <div className="relative mx-auto">
                <img
                  src={heroImage}
                  alt="Financial management tool"
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
