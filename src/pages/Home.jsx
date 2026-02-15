import Header from "../components/Header";
import Automations from "../components/Home/Automations";
import FeaturesCapabilities from "../components/Home/FeaturesCapabilities";
import Flexibility from "../components/Home/Flexibility";
import HeroSection from "../components/Home/HeroSection";
import IntegrationCapabilities from "../components/Home/IntegrationCapabilities";
import OurSolution from "../components/Home/OurSolution";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <OurSolution />
        <FeaturesCapabilities />
        <Automations />
        <Flexibility />
        <IntegrationCapabilities />
      </main>
    </>
  );
}
