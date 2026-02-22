import Header from "../components/Header";
import Automations from "../components/Home/Automations";
import FeaturesCapabilities from "../components/Home/FeaturesCapabilities";
import Flexibility from "../components/Home/Flexibility";
import HeroSection from "../components/Home/HeroSection";
import IntegrationCapabilities from "../components/Home/IntegrationCapabilities";
import OurSolution from "../components/Home/OurSolution";

import vectorBg from "../assets/home/vector.png";

// ✅ Save your SVG as: src/assets/home/solution-features-bg.svg
import solutionFeaturesBg from "../assets/home/solution-features-bg.svg";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#FCFEFF] bg-no-repeat bg-top"
        style={{
          backgroundImage: `url(${vectorBg})`,
          backgroundSize: "100% auto",
        }}
      >
        <Header />
        <HeroSection />

        <OurSolution />
        {/* ✅ BG between OurSolution and FeaturesCapabilities */}
        <div className="relative">
          {/* Background shape */}
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
    </>
  );
}
