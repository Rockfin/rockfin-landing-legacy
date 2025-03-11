"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface StatisticProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Statistic = ({ value, label, prefix = '', suffix = '' }: StatisticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      let startValue = 0;
      const duration = 2000; // 2 seconds
      const interval = 50; // Update every 50ms
      const steps = duration / interval;
      const increment = value / steps;

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue > value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(startValue));
        }
      }, interval);

      return () => clearInterval(counter);
    }
  }, [isInView, value, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 text-center">{label}</div>
    </motion.div>
  );
};

const certifications = [
  "ISO 27001 Certified",
  "CMMC Level 3 Compliant",
  "FedRAMP Authorized",
  "SOC 2 Type II Certified",
  "NIST 800-171 Compliant"
];

export function GovernmentContractingSection() {
  return (
    <section id="government-contracting" className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Government Contracting Credentials
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by federal agencies for secure, compliant blockchain solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-blue-600 dark:text-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary dark:text-white">SAM.gov Registered</span>
                <span className="text-gray-600 dark:text-gray-300">Verified Federal Contractor</span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Rockfin LLC brings AI-driven innovation to government contracting with a focus on security, compliance, and transparency. Our approach combines cutting-edge technology with a deep understanding of federal procurement requirements, ensuring solutions that meet the highest standards of both innovation and regulatory compliance.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary dark:text-white">Certifications & Compliance</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 md:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden"
          >
           
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Statistic value={95} label="Contract Success Rate" suffix="%" />
          <Statistic value={24} label="Active Federal Contracts" />
          <Statistic value={5} label="Years of Federal Service" />
          <Statistic value={12} label="Million in Contract Volume" prefix="$" />
        </div>
      </div>
    </section>
  );
}
