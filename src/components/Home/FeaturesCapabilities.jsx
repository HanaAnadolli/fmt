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
  {
    title: "Financials Spreading",
    body: "FMT automate the transfer of data from financial statements into the analysis software. Analysts maintain full control—reviewing, editing, or manually entering data as needed. When both Income Statement and Balance Sheet are spread, FMT will generate the Cash Flow Statement and display details in consideration of different periods, such as quarters, half years and last twelve months.",
    icon: icon1,
  },
  {
    title: "Portfolio Management",
    body: "Organize names, sectors, and portfolios with fast search and tagging.",
    icon: icon2,
  },
  {
    title: "Financial Analysis",
    body: "Analyze performance, trends, and key ratios with structured outputs.",
    icon: icon3,
  },
  {
    title: "Peer Group Comparison",
    body: "Benchmark issuers against peers using configurable peer sets.",
    icon: icon4,
  },
  {
    title: "Document Repository",
    body: "Centralize documents with versioning, metadata, and permissions.",
    icon: icon5,
  },
];

const RIGHT = [
  {
    title: "Customisable Credit Rating Methodologies",
    body: "Industry-specific rating logic with transparent scoring and overrides.",
    icon: icon6,
  },
  {
    title: "Liquidity Assessment & Financial Modelling",
    body: "Scenario-based liquidity views and modelling support.",
    icon: icon7,
  },
  {
    title: "Alerts & Notifications",
    body: "Stay updated with configurable alerts and workflow reminders.",
    icon: icon8,
  },
  {
    title: "Reporting",
    body: "Generate consistent reports at single-name and portfolio levels.",
    icon: icon9,
  },
  {
    title: "Robust Security Framework",
    body: "Role-based access, audit trails, and secure data handling.",
    icon: icon10,
  },
];

function Row({ title, body, icon, open, onToggle }) {
  return (
    <div className="rounded-xl border border-[#CFEAFF] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4"
      >
        <div className="flex items-center gap-4">
          <img src={icon} alt="" className="h-5 w-5 object-contain" />
          <span className="text-[15px] font-semibold text-[#0B1B33]">
            {title}
          </span>
        </div>

        <span className="text-[#1DA1F2] text-xl leading-none font-medium">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-4 -mt-1">
          <p className="text-sm leading-6 text-slate-600">{body}</p>
        </div>
      )}
    </div>
  );
}

export default function FeaturesCapabilities() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="bg-[#F6FBFF] py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="rounded-[22px] border border-[#E6EEF7] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.06)]">
          {/* Header Section */}
          <div className="relative px-8 pt-10 md:px-12 md:pt-12">
            <div className="grid items-start gap-10 md:grid-cols-2">
              {/* Left Text */}
              <div className="max-w-[640px]">
                <h2 className="text-[40px] leading-[1.1] md:text-[46px] font-extrabold tracking-tight text-[#0B1B33]">
                  FMT Features & <br />
                  Capabilities
                </h2>

                <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-[#4B5B73]">
                  FMT delivers a powerful suite of features designed to enhance
                  accuracy, efficiency, and flexibility in financial and credit
                  risk analysis.
                </p>
              </div>

              {/* Right Image + Bubble */}
              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[420px] flex justify-center md:block">
                  {/* Ana */}
                  <img
                    src={ana}
                    alt="Ana"
                    className="mx-auto md:ml-auto h-[230px] sm:h-[260px] md:h-[260px] w-auto object-contain"
                  />

                  {/* ✅ Mobile bubble (right side of Ana) */}
                  <div className="absolute right-[-35px] top-[30%] w-[160px] md:hidden">
                    <div className="relative">
                      <img
                        src={bubble}
                        alt="Speech bubble"
                        className="w-full h-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center px-4">
                        <p className="text-[12px] text-[#24324A] font-semibold whitespace-nowrap">
                          Hi, I am Ana
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop bubble */}
                  <div className="absolute -right-8 top-5 hidden md:block">
                    <div className="relative w-[180px]">
                      <img
                        src={bubble}
                        alt="Speech bubble"
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <p className="text-[14px] text-[#24324A] font-semibold whitespace-nowrap">
                          Hi, I am Ana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#E9EEF6]" />
          </div>

          {/* Features */}
          <div className="px-8 pb-12 pt-10 md:px-12">
            <div className="relative grid gap-10 md:grid-cols-2">
              <div className="space-y-5 md:pr-6">
                {LEFT.map((item, i) => {
                  const key = `L${i}`;
                  return (
                    <Row
                      key={key}
                      title={item.title}
                      body={item.body}
                      icon={item.icon}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>

              <div className="space-y-5 md:pl-6">
                {RIGHT.map((item, i) => {
                  const key = `R${i}`;
                  return (
                    <Row
                      key={key}
                      title={item.title}
                      body={item.body}
                      icon={item.icon}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
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
