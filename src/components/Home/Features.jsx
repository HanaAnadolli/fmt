import { useMemo, useState } from "react";
import Vector from "../../assets/home/Vector.svg?react";

const FEATURES = [
  {
    key: "financials-spreading",
    label: "Financials\nSpreading",
    title: "Financials Spreading",
    description:
      "FMT leverages AI to automate the transfer of data from financial statements into the analysis software. Analysts maintain full control—reviewing, editing, or manually entering data as needed. When both Income Statement and Balance Sheet are spread, FMT will generate the Cash Flow Statement and display details in consideration of different periods, such as quarters, half years and last twelve months.",
    imageSrc: "/src/assets/home/financials-spreading.png",
  },
  {
    key: "portfolio-management",
    label: "Portfolio\nManagement",
    title: "Portfolio Management",
    description:
      "Aggregate companies into portfolios and manage credit risk on a consolidated portfolio level. FMT calculates portfolio-level risk ratings, creates portfolio reports, stores supporting documentation, and provides a complete view for risk oversight.",
    imageSrc: "/src/assets/home/portfolio-managementt.png",
  },
  {
    key: "financial-analysis",
    label: "Financial\nAnalysis",
    title: "Financial Analysis",
    description:
      "With over 60 financial ratios across categories such as performance, profitability, liquidity, leverage, coverage, and valuation, FMT offers a comprehensive perspective on financial health. The environment updates indicators to reflect evolving market needs.",
    imageSrc: "/src/assets/home/financial-analysiss.png",
  },
  {
    key: "peer-group-comparison",
    label: "Peer Group\nComparison",
    title: "Peer Group Comparison",
    description:
      "Benchmark companies against peers across different portfolios, industries and geographies to evaluate financial viability and credit strength.",
    imageSrc: "/src/assets/home/peer-group-comparison.png",
  },
  {
    key: "document-repository",
    label: "Document\nRepository",
    title: "Document Repository",
    description:
      "A centralised repository allows users to navigate company data across time, reporting periods, and financial statement sections. Analysts can track key documents—such as financial statements, business plans, and meeting minutes—using structured metadata.",
    imageSrc: "/src/assets/home/document-repository.png",
  },
  {
    key: "customisable-rating-methodologies",
    label: "Customisable\nCredit Rating\nMethodologies",
    title: "Customisable Credit Rating Methodologies",
    description:
      "FMT enables clients to design their own credit rating frameworks by selecting ratios, assigning weights, setting rating ceilings, and incorporating qualitative factors. Manual adjustment logic ensures full flexibility.",
    imageSrc: "/src/assets/home/customisable-rating-methodologies.png",
  },
  {
    key: "liquidity-assessment",
    label: "Liquidity\nAssessment &\nFinancial\nModelling",
    title: "Liquidity Assessment & Financial Modelling",
    description:
      "Generate short- and long-term projections based on tailored assumptions. FMT automatically creates forecasts and produces cash flow-based liquidity models to strengthen credit decisioning.",
    imageSrc: "/src/assets/home/liquidity-assessment.png",
  },
  {
    key: "credit-limit-management",
    label: "Credit Limit\nManagement",
    title: "Credit Limit Management",
    description:
      "Define, monitor, and control credit limits at company or portfolio level. API integration with ERP systems supports real-time data flow, ensuring transparency and proactive risk management.",
    imageSrc: "/src/assets/home/credit-limit-management.png",
  },
  {
    key: "reporting",
    label: "Reporting",
    title: "Reporting",
    description:
      "Access a library of standardised reports or create custom ones tailored to your needs. Reports can be branded, adapted in structure, and enhanced with AI to maximise analytical depth.",
    imageSrc: "/src/assets/home/reportingg.png",
  },
  {
    key: "alerts-notifications",
    label: "Alerts &\nNotifications",
    title: "Alerts & Notifications",
    description:
      "Stay informed with fully configurable alerts. Trigger notifications based on events, user preferences, or calculation-based rules, such as ratio thresholds or rating changes.",
    imageSrc: "/src/assets/home/alerts-notifications.png",
  },
  {
    key: "security-framework",
    label: "Robust\nSecurity\nFramework",
    title: "Robust Security Framework",
    description:
      "Protect sensitive data with differentiated views for internal and external users, dual approval workflows to minimise manual errors, and built-in task management to reduce operational risk.",
    imageSrc: "/src/assets/home/security-framework.png",
  },
  {
    key: "lorem",
    label: "Lorem Ipsum",
    title: "Lorem Ipsum",
    description:
      "Protect sensitive data with differentiated views for internal and external users, dual approval workflows to minimise manual errors, and built-in task management to reduce operational risk.",
    imageSrc: "/src/assets/home/lorem.png",
  },
];

function FeaturePill({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative grid place-items-center text-center focus:outline-none",
        // responsive sizing (smaller on mobile)
        "h-[88px] w-full",
        "sm:h-[96px]",
        "md:h-[104px]",
        "lg:h-[112px]",
        // keep pill from becoming too wide on big screens
        "max-w-[220px] md:max-w-[240px]",
        // center inside its grid cell
        "justify-self-center",
      ].join(" ")}
    >
      <Vector className="absolute inset-0 h-full w-full text-[#bfbfbf] transition-colors duration-200 group-hover:text-primary" />
      <div
        className={[
          "relative z-10 px-3 font-semibold leading-tight text-white",
          "text-[12px] sm:text-[13px] md:text-[14px]",
        ].join(" ")}
      >
        {label.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </button>
  );
}

function Modal({ open, onClose, title, description, imageSrc }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      {/* Modal */}
      <div
        className={[
          "relative w-full",
          // ✅ slightly bigger modal
          "max-w-6xl",
          "rounded-[26px] bg-white shadow-2xl",
          "p-6 sm:p-10 lg:p-12",
          "max-h-[92vh] overflow-y-auto",
        ].join(" ")}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl text-slate-700 hover:text-slate-900"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-extrabold text-primary">
              {title}
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-700">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={[
                "w-full max-w-[520px]",
                "rounded-3xl bg-slate-100",
                "grid place-items-center",
                // ✅ bigger container
                "h-[220px] sm:h-[300px] lg:h-[360px]",
                // padding so image never touches edges
                "p-6 sm:p-8",
              ].join(" ")}
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-contain scale-[0.88]"
                  draggable={false}
                />
              ) : (
                <div className="text-sm font-semibold text-slate-400">
                  Image placeholder
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Features() {
  const data = useMemo(() => FEATURES, []);
  const [openKey, setOpenKey] = useState(null);

  const active = data.find((x) => x.key === openKey) || null;

  return (
    <section className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
          FMT Features &amp; Capabilities
        </h2>

        <p className="mt-3 max-w-5xl text-[13px] leading-5 text-slate-700 sm:text-[14px]">
          FMT delivers a powerful suite of features designed to enhance
          accuracy, efficiency, and flexibility in financial and credit risk
          analysis. Every functionality is built to support customisation for
          each client while streamlining critical workflows.
        </p>

        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data.map((item) => (
            <FeaturePill
              key={item.key}
              label={item.label}
              onClick={() => setOpenKey(item.key)}
            />
          ))}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setOpenKey(null)}
        title={active?.title ?? ""}
        description={active?.description ?? ""}
        imageSrc={active?.imageSrc ?? ""}
      />
    </section>
  );
}
