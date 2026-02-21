import React, { useState } from "react";

import externalServices from "../../assets/home/external-services.png";
import border from "../../assets/home/border.png";
import fmt from "../../assets/home/fmt.png";
import omt from "../../assets/home/omt.png";
import apiIcon from "../../assets/home/api-icon.png";
import arrow from "../../assets/home/arrow.png";

import OMTPopup from "./OMTPopup";
import ServicesPopup from "./ServicesPopup";

export default function IntegrationCapabilities() {
  const [openOMT, setOpenOMT] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-[#001B29] to-[#00344F]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
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

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[16/9]">
                <img
                  src={border}
                  alt=""
                  className="absolute inset-0 z-0 h-full w-full object-contain"
                  draggable="false"
                />

                <button
                  type="button"
                  onClick={() => setOpenServices(true)}
                  className="group absolute z-30 left-[6%] top-[5%] w-[30%] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                  aria-label="Open External Services"
                >
                  <img
                    src={externalServices}
                    alt="External Services"
                    className="w-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_18px_rgba(0,180,255,0.6)]"
                    draggable="false"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => setOpenServices(true)}
                  className="group absolute z-30 left-[-3%] top-[44%] flex items-center gap-3 px-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
                  aria-label="Open API Connectivity"
                >
                  <img
                    src={apiIcon}
                    alt=""
                    className="h-[22px] w-[22px] object-contain transition-all duration-300 group-hover:scale-110"
                    draggable="false"
                  />
                  <span className="text-white font-semibold tracking-wide text-[16px] transition-all duration-300 group-hover:text-cyan-300">
                    APIs
                  </span>
                </button>

                <img
                  src={arrow}
                  alt=""
                  className="absolute z-20 object-contain left-[12%] top-[18%] w-[10%]"
                  draggable="false"
                />

                <img
                  src={fmt}
                  alt="FMT"
                  className="absolute z-10 object-contain -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[56%]"
                  draggable="false"
                />

                <button
                  type="button"
                  onClick={() => setOpenOMT(true)}
                  className="group absolute z-20 left-[60%] top-[63%] w-[20%] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full"
                  aria-label="Open OMT"
                >
                  <img
                    src={omt}
                    alt="OMT"
                    className="w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_22px_rgba(0,255,255,0.7)]"
                    draggable="false"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OMTPopup open={openOMT} onClose={() => setOpenOMT(false)} />
      <ServicesPopup open={openServices} onClose={() => setOpenServices(false)} />
    </>
  );
}
