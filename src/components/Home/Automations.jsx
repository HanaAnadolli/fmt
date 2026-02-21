import React, { useMemo, useState } from "react";

import automationsImage from "../../assets/home/automations.png";

import copilot from "../../assets/home/copilot.png";
import financialSpreading from "../../assets/home/financial-spreading.png";
import financialAnalysis from "../../assets/home/financial-analysis.png";
import financialReporting from "../../assets/home/detailed-reporting.png";

import graphic1 from "../../assets/home/graphic1.png";
import graphic2 from "../../assets/home/graphic2.png";
import graphic3 from "../../assets/home/graphic3.png";
import graphic4 from "../../assets/home/graphic4.png";

export default function Automations() {
  const items = useMemo(
    () => [
      {
        title: "Co-Pilot",
        description:
          "Ask questions and receive real-time support from virtual agents. Co-Pilot can serve as a live manual, answer questions, and assist with decision making across FMT.",
        icon: copilot,
      },
      {
        title: "Financial Spreading",
        description:
          "Automatically spread a company’s Income Statement, Balance Sheet and Cash Flow statement by uploading financial statements into the system. The automation ensures high accuracy and saves countless hours of manual data transfer, allowing the analytical teams to focus on more value-add tasks.",
        icon: financialSpreading,
      },
      {
        title: "Financial Analysis",
        description:
          "Once a company’s numbers are spread and financial statements are uploaded to the System, FMT automatically generates financial commentary based on the numbers and the information available in the financial statements.",
        icon: financialAnalysis,
      },
      {
        title: "Financial Interpretation",
        description:
          "Generate complete and accurate financial reports with internal and external data sources to accelerate credit decisions, reduce manual work, and deliver consistent, high-quality automated financial assessments.",
        icon: financialReporting,
        comingSoon: true,
      },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(1);
  const toggle = (idx) => {
    setActiveIndex(idx);
  };

  const graphics = [graphic1, graphic2, graphic3, graphic4];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="max-w-3xl">
            <h2 className="text-[40px] md:text-[46px] font-extrabold tracking-tight text-[#0B1B33]">
              Automations
            </h2>

            <p className="mt-6 text-[16px] leading-7 text-[#4B5B73]">
              FMT is powered by OMT (Operations Management Tool) allowing
              different types of automation, designed to streamline and elevate
              the entire financial analysis process, handling:
            </p>

            <div className="mt-10 space-y-6">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isActive}
                    className={[
                      "w-full text-left rounded-xl transition-all duration-300",
                      isActive
                        ? "bg-white border border-[#E6EEF7] p-6 shadow-sm"
                        : "bg-transparent border border-transparent p-3 hover:bg-white hover:border hover:border-[#E6EEF7] hover:shadow-sm",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1DA1F2]/40",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="object-contain"
                          draggable="false"
                        />

                        <div className="flex items-center gap-3">
                          <h4 className="text-[16px] font-semibold text-[#0B1B33]">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {isActive && (
                        <span className="translate-y-[2px]">
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
                      )}
                    </div>

                    {isActive && (
                      <p className="mt-4 text-[14px] leading-6 text-[#4B5B73]">
                        {item.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              key={graphics[activeIndex]}
              src={graphics[activeIndex]}
              alt="Automation graphic"
              className="w-full max-w-4xl object-contain transition-all duration-300"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
