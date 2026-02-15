import React from "react";

// ✅ Update these paths to match your saved icons
import versatilityIcon from "../../assets/home/versatility.png";
import modularityIcon from "../../assets/home/modularity.png";
import controlIcon from "../../assets/home/control.png";
import integrationIcon from "../../assets/home/integration.png";

export default function Flexibility() {
  const items = [
    {
      title: "Versatility",
      icon: versatilityIcon,
      text:
        "Designed to serve organizations of varying sizes and industries, FMT adapts to diverse client requirements.",
    },
    {
      title: "Modularity",
      icon: modularityIcon,
      text:
        "Clients can select the functional modules that best suit their needs, with components structured to support progressive adoption based on complexity and scope.",
    },
    {
      title: "Control",
      icon: controlIcon,
      text:
        "FMT can be deployed within the client’s own technical infrastructure (on-premises) or as a cloud basis SaaS.",
    },
    {
      title: "Integration",
      icon: integrationIcon,
      text:
        "The API-enabled infrastructure allows clients to unlock additional processing efficiency and advanced functionalities by ERP connection.",
    },
  ];

  return (
    <section className="bg-[#F6FBFF] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#0B1B33]">
            Flexibility, control, one platform
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-[15px] leading-7 text-[#4B5B73]">
            FMT is positioned as a <span className="font-semibold">highly versatile</span>{" "}
            solution, offering clients a combination of{" "}
            <span className="font-semibold">modularity</span>,{" "}
            <span className="font-semibold">control</span>, and{" "}
            <span className="font-semibold">integration</span>.
          </p>
        </div>

        {/* 4 items */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              {/* Icon badge */}
              <div className="mx-auto flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-40 w-40 object-contain"
                  draggable="false"
                />
              </div>

              <h4 className="mt-6 text-[14px] font-bold text-[#0B1B33]">
                {item.title}
              </h4>

              <p className="mx-auto mt-3 max-w-[240px] text-[12px] leading-5 text-[#4B5B73]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
