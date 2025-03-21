"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Application } from '@splinetool/runtime';
import React from 'react';

// Simple wrapper to handle the Spline component
const SplineWrapper = ({ sceneUrl }: { sceneUrl: string }) => {
  const ref = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    if (!ref.current) return;
    
    let spline: import('@splinetool/runtime').Application | null = null;
    const loadSpline = async () => {
      const canvas = ref.current;
      if (!canvas) return;
      
      spline = new Application(canvas);
      await spline.load(sceneUrl);
    };
    
    loadSpline();
    
    return () => {
      if (spline) {
        spline.dispose();
      }
    };
  }, [sceneUrl]);
  
  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline Background */}
      <SplineWrapper sceneUrl="https://prod.spline.design/eNgMV8ubeYFtIbiB/scene.splinecode" />
      
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Driving AI Innovation in Government Contracting
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rockfin LLC delivers enterprise-grade AI infrastructure, strategic technology investments, and secure data-driven solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
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

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
    </section>
  );
};

export default HeroSection;
