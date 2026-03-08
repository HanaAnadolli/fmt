import bgLeft from "../../assets/about/bg-last.png"
import tpsIcon from "../../assets/about/tps.png"
import cmtIcon from "../../assets/about/cmt.png"
import fmtIcon from "../../assets/fmt.png"

export default function Platforms() {
  const items = [
    {
      icon: tpsIcon,
      title: "Trade Programs Servicing (TPS)",
      text: "Trade finance platform processing receivables and payables programs, which can ultimately be fully customized to clients’ requirements including automated processes, alerts and notifications.",
    },
    {
      icon: cmtIcon,
      title: "Compliance Management Tool (CMT)",
      text: "Innovative onboarding platform designed to simplify the complexities of compliance duties across multiple industries for a seamless and automated onboarding of suppliers, customers, clients, for both corporates and natural persons, fully tailorable to the specific industry and in consideration of the regulatory framework.",
    },
    {
      icon: fmtIcon,
      title: "Financial Management Tool (FMT)",
      text: "Financial analysis platform with dedicated spreading and methodologies interfaces, allowing comprehensive multipurpose financial assessment of corporations with different accounting standards.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#F3FBFF] py-28">
      
      {/* Left background */}
      <img
        src={bgLeft}
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-auto"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        
        {/* Left text */}
        <div className="max-w-[420px]">
          <h2 className="mb-6 text-[38px] font-extrabold leading-tight text-[#0F2A35]">
            Three platforms. One ecosystem.
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-600">
            Each platform can be deployed individually or fully integrated —
            all sharing the same AI infrastructure and customisation engine.
          </p>
        </div>

        {/* Right items */}
        <div className="flex flex-col gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              
              {/* Icon */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#0F2A35]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}