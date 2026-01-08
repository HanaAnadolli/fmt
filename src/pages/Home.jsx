import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import ComingSoon from "../components/Home/ComingSoon";
import Features from "../components/Home/Features";
import FMTEcosystem from "../components/Home/FMTEcosystem";
import HeroSection from "../components/Home/HeroSection";
import IntegrationCapabilities from "../components/Home/IntegrationCapabilities";
import OurSolution from "../components/Home/OurSolution";
import Technology from "../components/Home/Technology";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <OurSolution />
        <Features />
        <Technology />
        <IntegrationCapabilities />
        <FMTEcosystem />
        <ComingSoon />
        <ContactSection />
      </main>
    </>
  );
}
