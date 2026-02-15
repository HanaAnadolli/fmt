import React from "react";
import automationsImage from "../../assets/home/automations.png";
import copilot from "../../assets/home/copilot.png";
import financialSpreading from "../../assets/home/financial-spreading.png";
import financialAnalysis from "../../assets/home/financial-analysis.png";
import financialReporting from "../../assets/home/detailed-reporting.png";

export default function Automations() {
  return (
    <section className="bg-[#F6FBFF] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            <h2 className="text-[40px] md:text-[46px] font-extrabold tracking-tight text-[#0B1B33]">
              Automations
            </h2>

            <p className="mt-6 text-[16px] leading-7 text-[#4B5B73]">
              A financial analysis tool powered by different types of automation,
              designed to streamline and elevate the entire financial analysis process,
              handling:
            </p>

            <div className="mt-10 space-y-8">
              
              {/* Co-Pilot */}
              <div className="flex items-center gap-4">
                <img
                  src={copilot}
                  alt="Co-Pilot"
                  className="object-contain"
                />
                <h4 className="text-[16px] font-semibold text-[#0B1B33]">
                  Co-Pilot
                </h4>
              </div>

              {/* Financial Spreading */}
              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E6EEF7]">
                <div className="flex items-start justify-between gap-4">
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={financialSpreading}
                      alt="Financial Spreading"
                      className="object-contain"
                    />
                    <h4 className="text-[16px] font-semibold text-[#0B1B33]">
                      Financial Spreading
                    </h4>
                  </div>

                  <span className="text-xl text-[#1DA1F2]">→</span>
                </div>

                <p className="mt-4 text-[14px] leading-6 text-[#4B5B73]">
                  FMT can automatically populate a company’s spread by uploading financial
                  statements into the system. The AI powered functionality ensures high
                  accuracy and saves countless hours of manual data transfer, allowing the
                  analytical teams to focus on more value add tasks.
                </p>
              </div>

              {/* Financial Analysis */}
              <div className="flex items-center gap-4">
                <img
                  src={financialAnalysis}
                  alt="Financial Analysis"
                  className="object-contain"
                />
                <h4 className="text-[16px] font-semibold text-[#0B1B33]">
                  Financial Analysis
                </h4>
              </div>

              {/* Financial Reporting (Coming Soon) */}
              <div className="flex items-center gap-4">
                <img
                  src={financialReporting}
                  alt="Financial Interpretation"
                  className="object-contain"
                />
                <h4 className="text-[16px] font-semibold text-[#0B1B33]">
                  Financial Interpretation
                </h4>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                  Coming Soon
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div className="flex justify-center md:justify-end">
            <img
              src={automationsImage}
              alt="Automations dashboard preview"
              className="w-full max-w-[520px] object-contain"
              draggable="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
