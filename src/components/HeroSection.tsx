"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import SplineWrapper from './SplineWrapper';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline Background - Ensure it fills the entire section */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <SplineWrapper 
          sceneUrl="https://prod.spline.design/eNgMV8ubeYFtIbiB/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        {/* Added background, padding, rounding and blur to this inner div */}
        <div
          className="max-w-4xl bg-black/20 backdrop-blur-[2px] py-8 px-6" // Removed rounded-lg
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)', // Smoother fade: starts earlier, wider transition
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)' // For Safari compatibility
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-text-wave"
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovating Where No Code Has Gone Before.
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8" // Removed font-quicksand class
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }} // Added inline style
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rockfin delivers enterprise-grade AI infrastructure, strategic technology investments, and secure data-driven solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="#consultation" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-colors text-center"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-medium transition-colors text-center backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Clickable */}
      <Link href="#services" scroll={true} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;
