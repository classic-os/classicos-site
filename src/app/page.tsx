import BackgroundSystem from "@/components/BackgroundSystem";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyClassicOS from "@/components/WhyClassicOS";
import PowToOutput from "@/components/PowToOutput";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <BackgroundSystem />

      <div className="relative z-10">
        <Hero />
        <Capabilities />
        <WhyClassicOS />
        <PowToOutput />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
