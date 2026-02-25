// src/pages/Home.jsx
import Header from "../components/Header";
import Automations from "../components/Home/Automations";
import FeaturesCapabilities from "../components/Home/FeaturesCapabilities";
import Flexibility from "../components/Home/Flexibility";
import HeroSection from "../components/Home/HeroSection";
import IntegrationCapabilities from "../components/Home/IntegrationCapabilities";
import OurSolution from "../components/Home/OurSolution";

import vectorBg from "../assets/home/vector.png";
import solutionFeaturesBg from "../assets/home/solution-features-bg.svg";

export default function Home() {
  return (
    // ✅ Whole page background color
    <div className="bg-[#F3FBFF]">
      {/* ✅ ONLY Header + Hero have the vectors */}
      <div
        style={{
          backgroundImage: `url(${vectorBg}), url(${vectorBg})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top center, top center",
          backgroundSize: "100% auto, 105% auto", // second slightly larger
        }}
      >
        <Header />
        <HeroSection />
        <OurSolution />
      </div>

      <div className="relative">
        <img
          src={solutionFeaturesBg}
          alt=""
          className="pointer-events-none select-none absolute right-0 -top-[400px] w-[220px] h-auto"
          draggable="false"
        />

        <FeaturesCapabilities />
      </div>

      <Automations />
      <Flexibility />
      <IntegrationCapabilities />
    </div>
  );
}
