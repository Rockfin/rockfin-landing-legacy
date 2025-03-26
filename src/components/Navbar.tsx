"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-primary/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Rockfin_logo_white.svg" alt="Rockfin LLC Logo" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Government Contracting', 'Technology', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-medium text-neutral-dark dark:text-white hover:text-secondary dark:hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#consultation"
            className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-dark dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-primary shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Government Contracting', 'Technology', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-neutral-dark dark:text-white hover:text-secondary dark:hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#consultation"
              className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
