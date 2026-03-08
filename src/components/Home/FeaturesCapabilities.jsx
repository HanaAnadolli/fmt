import React, { useState } from "react";
import ana from "../../assets/home/ana.png";
import bubble from "../../assets/home/bubble.png";

// Feature icons
import icon1 from "../../assets/home/icon1.png";
import icon2 from "../../assets/home/icon2.png";
import icon3 from "../../assets/home/icon3.png";
import icon4 from "../../assets/home/icon4.png";
import icon5 from "../../assets/home/icon5.png";
import icon6 from "../../assets/home/icon6.png";
import icon7 from "../../assets/home/icon7.png";
import icon8 from "../../assets/home/icon8.png";
import icon9 from "../../assets/home/icon9.png";
import icon10 from "../../assets/home/icon10.png";

const LEFT = [
  { title: "Financials Spreading", body: "Transfer companies’ financials directly into the FMT spreading module. Once both the Income Statement and Balance Sheet are entered, FMT generates the Cash Flow Statement. The Cash Flow Statement can also be manually added. Companies’ financials can be viewed in various formats, including LTM, YTD, quarterly, and semiannual.", icon: icon1 },
  { title: "Portfolio Management", body: "Aggregate companies into portfolios and manage credit risk at the portfolio level. FMT calculates portfolio-level risk ratings, creates reports, stores supporting documentation, and provides a complete view for adequate credit risk oversight.", icon: icon2 },
  { title: "Financial Analysis", body: "With over 60 financial ratios across categories such as performance, profitability, liquidity, leverage, coverage, and valuation, FMT offers a comprehensive perspective on financial health.", icon: icon3 },
  { title: "Peer Group Comparison", body: "Benchmark companies against peers across different portfolios, industries and geographies to evaluate and compare which companies are riskier.", icon: icon4 },
  { title: "Document Repository", body: "A centralised repository allows users to navigate company data across time periods and reporting periods.", icon: icon5 },
];

const RIGHT = [
  { title: "Customisable Credit Rating Methodologies", body: "FMT enables clients to design their own credit rating frameworks by selecting ratios and assigning weights.", icon: icon6 },
  { title: "Liquidity Assessment & Financial Modelling", body: "Generate short- and long-term projections based on analyst assumptions.", icon: icon7 },
  { title: "Alerts & Notifications", body: "Stay informed with fully configurable alerts.", icon: icon8 },
  { title: "Reporting", body: "Access a library of standardised reports or create custom ones.", icon: icon9 },
  { title: "Robust Security Framework", body: "Protect sensitive data with differentiated views and workflows.", icon: icon10 },
];

function Row({ title, body, icon, open, onToggle }) {
  return (
    <div className="description-font rounded-[2px] border border-[#CFEAFF] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="grid w-full grid-cols-[36px_1fr_36px] items-center px-5 py-4"
      >
        {/* Icon */}
        <div className="flex justify-start">
          <img
            src={icon}
            alt=""
            className="h-5 w-5 object-contain"
            draggable="false"
          />
        </div>

        {/* Title */}
        <span className="px-3 text-center md:text-left text-[14px] md:text-[15px] font-semibold leading-5 md:leading-6 text-[#011A27] break-words">
          {title}
        </span>

        {/* Plus / Minus */}
        <span className="flex justify-end text-[#2FA3E0] text-2xl leading-none font-medium">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-1">
          <p className="text-sm leading-6 text-slate-600">{body}</p>
        </div>
      )}
    </div>
  );
}

export default function FeaturesCapabilities() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section id="features" className="relative py-14 md:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-visible rounded-[22px] border border-[#E6EEF7] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)]">
          
          {/* Header Section */}
          <div className="relative px-8 pt-10 md:px-12 md:pt-12">
            <div className="grid items-start gap-10 md:grid-cols-2">
              
              {/* Left Text */}
              <div className="max-w-[640px]">
                <h2 className="title-font text-[40px] leading-[1.1] md:text-[46px] font-extrabold tracking-tight text-[#0B1B33]">
                  FMT Features & <br />
                  Capabilities
                </h2>

                <p className="description-font mt-6 max-w-[620px] text-[16px] leading-7 text-[#4B5B73]">
                  FMT delivers a powerful suite of features designed to enhance
                  accuracy, efficiency, and flexibility in financial and credit risk analysis.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative hidden md:flex justify-end">
                <div className="relative w-full max-w-[420px]">
                  <img
                    src={ana}
                    alt="Ana"
                    className="relative z-10 mx-auto md:ml-auto h-[280px] md:h-[320px] w-auto object-contain -mt-10 md:-mt-20"
                    draggable="false"
                  />

                  <div className="absolute -right-8 top-5 hidden md:block z-20">
                    <div className="relative w-[180px]">
                      <img src={bubble} alt="" className="w-full h-auto" />
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <p className="description-font text-[18px] text-[#24324A] font-bold whitespace-nowrap">
                          Hi, I am Ana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Features Section */}
          <div className="px-6 pb-12 pt-10 md:px-12">
            <div className="grid gap-6 md:grid-cols-2">
              
              <div className="flex flex-col gap-6">
                {LEFT.map((item, i) => {
                  const key = `L${i}`;
                  return (
                    <Row
                      key={key}
                      title={item.title}
                      body={item.body}
                      icon={item.icon}
                      open={openKey === key}
                      onToggle={() =>
                        setOpenKey(openKey === key ? null : key)
                      }
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-6">
                {RIGHT.map((item, i) => {
                  const key = `R${i}`;
                  return (
                    <Row
                      key={key}
                      title={item.title}
                      body={item.body}
                      icon={item.icon}
                      open={openKey === key}
                      onToggle={() =>
                        setOpenKey(openKey === key ? null : key)
                      }
                    />
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}