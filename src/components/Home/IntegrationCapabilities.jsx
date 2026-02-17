import React, { useState } from "react";

import externalServices from "../../assets/home/external-services.png";
import border from "../../assets/home/border.png";
import fmt from "../../assets/home/fmt.png";
import omt from "../../assets/home/omt.png";
import apiIcon from "../../assets/home/api-icon.png";
import arrow from "../../assets/home/arrow.png";

// ✅ modals you already have
import OMTPopup from "./OMTPopup"; // <-- adjust path to your project
import ServicesPopup from "./ServicesPopup"; // <-- adjust path to your project

export default function IntegrationCapabilities() {
  const [openOMT, setOpenOMT] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-[#001B29] to-[#00344F]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-[600px] text-white">
              <h2 className="text-[40px] md:text-[46px] font-extrabold tracking-tight">
                Integration Capabilities
              </h2>

              <p className="mt-6 text-[16px] leading-7 text-white/80">
                Advanced functionalities by seamless integration with other
                Application Programming Interfaces (APIs).
              </p>

              <h4 className="mt-12 text-[18px] font-semibold">
                Customize FMT Capabilities to your Strategic Focus
              </h4>

              <p className="mt-6 text-[15px] leading-7 text-white/75">
                Optimize financial management and analysis in areas that align
                directly with your operational priorities. Whether it is
                automating financial spreading, enhancing credit rating
                methodologies, or enabling advanced reporting and compliance
                features, FMT’s modular design gives you the flexibility to
                configure the platform to your unique business needs — without
                the complexity of a full-scale deployment.
              </p>
            </div>

            {/* RIGHT DIAGRAM */}
            <div className="flex justify-center md:justify-end">
              {/* responsive sizing wrapper */}
              <div className="relative w-full max-w-[560px] md:max-w-[560px] max-md:max-w-[520px] aspect-[16/9]">
                {/* Background rings */}
                <img
                  src={border}
                  alt=""
                  className="absolute inset-0 z-0 h-full w-full object-contain"
                  draggable="false"
                />

                {/* External Services Label (CLICKABLE) */}
                <button
                  type="button"
                  onClick={() => setOpenServices(true)}
                  className="absolute z-30 left-[5%] top-[2%] w-[36%] sm:left-[6%] sm:top-[5%] sm:w-[32%] md:left-[6%] md:top-[5%] md:w-[30%]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                  aria-label="Open External Services"
                >
                  <img
                    src={externalServices}
                    alt="External Services"
                    className="w-full object-contain"
                    draggable="false"
                  />
                </button>

                {/* APIs icon + text (CLICKABLE) */}
                <button
                  type="button"
                  onClick={() => setOpenServices(true)}
                  className="absolute z-30 left-[-2%] top-[42%] sm:left-[-1%] sm:top-[44%] md:left-[-3%] md:top-[44%]
                             flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-1"
                  aria-label="Open API Connectivity"
                >
                  <img
                    src={apiIcon}
                    alt=""
                    className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] object-contain"
                    draggable="false"
                  />
                  <span className="text-white font-semibold tracking-wide text-[14px] sm:text-[16px]">
                    APIs
                  </span>
                </button>

                {/* Curved Arrow */}
                <img
                  src={arrow}
                  alt=""
                  className={[
                    "absolute z-20 object-contain",
                    // mobile (make arrow smaller)
                    "left-[13%] top-[17%] w-[10%]",
                    // >= sm
                    "sm:left-[12%] sm:top-[19%]",
                    // >= md
                    "md:left-[12%] md:top-[18%]",
                  ].join(" ")}
                  draggable="false"
                />

                {/* FMT Center Blob */}
                <img
                  src={fmt}
                  alt="FMT"
                  className={[
                    "absolute z-10 object-contain -translate-x-1/2 -translate-y-1/2",
                    // mobile (slightly smaller so it doesn't crush left labels)
                    "left-1/2 top-1/2 w-[54%]",
                    // >= sm
                    "sm:w-[55%]",
                    // >= md
                    "md:w-[56%]",
                  ].join(" ")}
                  draggable="false"
                />

                {/* OMT pill overlapping FMT (CLICKABLE) */}
                <button
                  type="button"
                  onClick={() => setOpenOMT(true)}
                  className={[
                    "absolute z-20 object-contain",
                    // mobile
                    "left-[55%] top-[64%] w-[22%]",
                    // >= sm
                    "sm:left-[60%] sm:top-[63%] sm:w-[21%]",
                    // >= md
                    "md:left-[60%] md:top-[63%] md:w-[20%]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full",
                  ].join(" ")}
                  aria-label="Open OMT"
                >
                  <img
                    src={omt}
                    alt="OMT"
                    className="w-full object-contain"
                    draggable="false"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ POPUPS */}
      <OMTPopup open={openOMT} onClose={() => setOpenOMT(false)} />
      <ServicesPopup open={openServices} onClose={() => setOpenServices(false)} />
    </>
  );
}
