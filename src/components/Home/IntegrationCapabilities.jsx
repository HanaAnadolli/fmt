import React from "react";
import diagram from "../../assets/home/diagram.png"; 
// ⬆️ replace with your actual image filename

export default function IntegrationCapabilities() {
  return (
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
              Optimize financial management and analysis in areas that align directly
              with your operational priorities. Whether it is automating financial
              spreading, enhancing credit rating methodologies, or enabling advanced
              reporting and compliance features, FMT’s modular design gives you the
              flexibility to configure the platform to your unique business needs —
              without the complexity of a full-scale deployment.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={diagram}
              alt="FMT API Integration Diagram"
              className="w-full object-contain"
              draggable="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
