"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const services: ServiceProps[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Web3 Infrastructure",
    description: "Build scalable and secure blockchain infrastructure for your applications.",
    details: "Our Web3 Infrastructure services provide end-to-end solutions for businesses looking to leverage blockchain technology. We offer custom node deployment, smart contract development, decentralized storage solutions, and API integration services. Our team of experts ensures your infrastructure is secure, scalable, and optimized for performance across multiple blockchain networks. We specialize in Ethereum, Solana, and Polkadot ecosystems, providing both public and private blockchain solutions tailored to your specific business needs."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Cryptocurrency Investment",
    description: "Strategic investment solutions for digital assets and cryptocurrencies.",
    details: "Our Cryptocurrency Investment services help you navigate the complex world of digital assets. We provide portfolio management, market analysis, risk assessment, and strategic investment planning. Our approach combines technical analysis with fundamental research to identify opportunities across various cryptocurrency markets, DeFi protocols, and emerging blockchain projects. With our expertise, you can build a diversified digital asset portfolio designed to maximize returns while managing volatility in this dynamic market."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Logistics Contracts",
    description: "Blockchain-based solutions for supply chain and logistics management.",
    details: "Our Logistics Contracts leverage blockchain technology to transform supply chain management. We implement smart contracts for automated logistics processes, provide real-time tracking and verification systems, and develop secure documentation management solutions. Our blockchain-based logistics systems are designed to increase transparency, reduce fraud, and streamline operations across complex supply chains. We have extensive experience working with government agencies and private enterprises to deliver secure, compliant logistics solutions."
  },
];

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div className="text-secondary dark:text-secondary">{service.icon}</div>
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          <Button 
            variant="link" 
            className="p-0 text-secondary hover:text-secondary/80 dark:text-secondary dark:hover:text-secondary/80 flex items-center"
            onClick={() => setOpen(true)}
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.03]" />
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-secondary">{service.icon}</span>
              <span>{service.title}</span>
            </DialogTitle>
            <DialogDescription>
              {service.details}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8 bg-neutral-light dark:bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leveraging blockchain technology to transform businesses and create new opportunities in the digital economy.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
