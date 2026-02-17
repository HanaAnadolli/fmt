import Header from "../components/Header";
import Automations from "../components/Home/Automations";
import FeaturesCapabilities from "../components/Home/FeaturesCapabilities";
import Flexibility from "../components/Home/Flexibility";
import HeroSection from "../components/Home/HeroSection";
import IntegrationCapabilities from "../components/Home/IntegrationCapabilities";
import OurSolution from "../components/Home/OurSolution";
import vectorBg from "../assets/home/vector.png";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#EAF6FF] bg-no-repeat bg-top"
        style={{
          backgroundImage: `url(${vectorBg})`,
          backgroundSize: "100% auto",
        }}
      >
        <Header />
        <HeroSection />
        <OurSolution />
        <FeaturesCapabilities />
        <Automations />
        <Flexibility />
        <IntegrationCapabilities />
      </div>
    </>
  );
}
