"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `// Example AI Model for Predictive Maintenance
async function predictMaintenance(sensorData) {
  const model = await tf.loadLayersModel('model.json');
  const input = tf.tensor2d(sensorData, [1, sensorData.length]);
  const prediction = model.predict(input);
  return prediction.dataSync()[0];
}`;

const aiFeatures = [
  {
    name: "Predictive Maintenance",
    description: "Utilizes machine learning to predict equipment failures before they occur, minimizing downtime."
  },
  {
    name: "Intelligent Automation",
    description: "Automates complex decision-making processes, improving efficiency and reducing human error."
  },
  {
    name: "Natural Language Processing",
    description: "Enables advanced human-computer interaction, facilitating seamless communication and data analysis."
  },
  {
    name: "Computer Vision",
    description: "Allows systems to 'see' and interpret images, enabling applications like automated quality control."
  }
];

export function AIInnovationSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="technology" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-light dark:from-gray-900 dark:to-primary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            AI Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our cutting-edge technology stack delivers intelligent, AI-powered solutions for a smarter future.
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
            <h3 className="text-2xl font-bold text-primary dark:text-white">Enterprise-Grade AI</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Rockfin&apos;s AI infrastructure combines the power of machine learning with the performance demands of enterprise applications. Our solutions are built on proven AI models and enhanced with proprietary optimizations for government and enterprise use cases.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary dark:text-white">AI Features</h4>
              <div className="space-y-2">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeFeature === index
                        ? 'bg-secondary/10 border-l-4 border-secondary'
                        : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: 5 }}
                  >
                    <h5 className="font-medium text-primary dark:text-white">{feature.name}</h5>
                    {activeFeature === index && (
                      <motion.p
                        className="mt-2 text-gray-600 dark:text-gray-300 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-gray-400 text-sm">AI Model Example</div>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-javascript text-green-400">
                  {codeSnippet}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-hidden"
        >
          <h3 className="text-xl font-bold text-primary dark:text-white mb-6 text-center">AI-Powered Data Flow</h3>
          
          <div className="relative">
            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
              
              {/* Flow Steps */}
              {['Data Input', 'AI Processing', 'Model Prediction', 'Actionable Insights'].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-1/4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-primary dark:text-white mb-2">{step}</h4>
                  <motion.div
                    className="w-2 h-8 bg-accent hidden md:block absolute -bottom-8"
                    animate={{
                      height: [8, 16, 8],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Data Flow Animation */}
            <div className="hidden md:block">
              <motion.div
                className="absolute top-1/2 h-3 w-3 rounded-full bg-accent z-20"
                animate={{
                  left: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 h-3 w-3 rounded-full bg-secondary z-20"
                animate={{
                  left: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
