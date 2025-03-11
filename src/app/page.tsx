import { Suspense } from "react";

// Import components using named exports to fix TypeScript errors
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GovernmentContractingSection } from "@/components/GovernmentContractingSection";
import { AIInnovationSection } from "@/components/BlockchainInnovationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <HeroSection />
          <div style={{ width: '100vw', height: '100vh' }}>
            <Spline
              scene="https://prod.spline.design/Nl5oejRR2NptS4Vp/scene.splinecode"
            />
          </div>
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
