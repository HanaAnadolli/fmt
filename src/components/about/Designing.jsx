import designTools from "../../assets/about/design-tools.png"

export default function Designing() {
  return (
    <section className="bg-[#F3FBFF] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        
        <div className="relative flex justify-center md:justify-start">
          {/* Main image */}
          <img
            src={designTools}
            alt="Office workspace"
            className="w-full max-w-[520px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 text-[38px] font-extrabold leading-tight text-[#0F2A35]">
            Designing tools that <br />
            power financial teams
          </h2>

          <p className="mb-6 text-[16px] leading-relaxed text-slate-600">
            KS-TF AG (“KSTF”) is a consultancy and software design/development
            firm specializing in credit, compliance and receivables/payables
            processing tools.
          </p>

          <p className="mb-6 text-[16px] leading-relaxed text-slate-600">
            Our platforms are licensed by clients and supported by an
            experienced team dedicated to helping customers customise each
            solution to their specific workflows and requirements.
          </p>

          <p className="mb-8 text-[16px] leading-relaxed text-slate-600">
            All KS-TF software can include Artificial Intelligence to automate
            critical processes and reduce administrative workload — without
            sacrificing control or auditability.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-[#0F2A35] hover:gap-3 transition-all"
          >
            Visit website
            <span>›</span>
          </a>
        </div>
      </div>
    </section>
  )
}