import { Suspense } from "react";

// Import components using named exports to fix TypeScript errors
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GovernmentContractingSection } from "@/components/GovernmentContractingSection";
import { AIInnovationSection } from "@/components/BlockchainInnovationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import SplineWrapper from "../components/SplineWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-black dark:bg-black">
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          {/* Hero Section with fixed height to prevent overlap */}
          <section className="h-screen">
            <HeroSection />
          </section>
          
          {/* Interactive 3D Spline Scene with its own section */}
          <section className="w-full h-screen bg-black">
            <SplineWrapper sceneUrl="https://prod.spline.design/fpDO8D8sbdqMMN4w/scene.splinecode" />
          </section>
          
          <ServicesSection />
          <GovernmentContractingSection />
          <AIInnovationSection />
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
