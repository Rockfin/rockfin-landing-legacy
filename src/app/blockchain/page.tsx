"use client"; // Required for Spline component

import Spline from '@splinetool/react-spline';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Import Navbar

export default function BlockchainPage() {
  return (
    <> {/* Wrap in Fragment to include Navbar */}
      <Navbar />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/QUAjcoA-IsQZwG1v/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div
          className="max-w-4xl bg-black/20 backdrop-blur-[2px] py-8 px-6"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-text-wave"
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionizing Trust with Blockchain
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8"
            style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore Rockfin&apos;s cutting-edge blockchain solutions for secure, transparent, and efficient operations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#contact" // Update link as needed
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-colors text-center"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/services#blockchain" // Update link as needed
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-medium transition-colors text-center backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </> // Close Fragment
  );
}