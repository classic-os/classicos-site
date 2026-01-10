import BackgroundSystem from "@/components/BackgroundSystem";
import Hero from "@/components/Hero";
import SystemOverview from "@/components/SystemOverview";
import SystemModules from "@/components/SystemModules";
import ProofOfWorkPipeline from "@/components/ProofOfWorkPipeline";
import LaunchCTA from "@/components/LaunchCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <BackgroundSystem />

      <div className="relative z-10">
        <Hero />
        <SystemOverview />
        <SystemModules />
        <ProofOfWorkPipeline />
        <LaunchCTA />
        <Footer />
      </div>
    </main>
  );
}
