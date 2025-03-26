"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25M21 7.5v9l-9 5.25" />
      </svg>
    ),
    title: "Government Intelligence and Logistics",
    description: "Providing advanced intelligence and logistics solutions for government agencies.",
    details: "Our Government Intelligence and Logistics services offer cutting-edge solutions tailored for the unique demands of government operations. We leverage AI and data analytics to enhance situational awareness, optimize supply chains, and improve decision-making processes. Our expertise ensures secure, reliable, and efficient support for critical missions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Generative Intelligence",
    description: "Building innovative applications and defending against adversarial AI.",
    details: "We specialize in developing cutting-edge applications powered by Generative Intelligence. Our expertise extends to creating robust defenses against adversarial AI attacks, employing advanced techniques to anticipate and neutralize threats, effectively applying reverse psychology to AI security challenges."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Intelligent Automation",
    description: "Automate complex processes and workflows using AI-powered solutions.",
    details: "Our Intelligent Automation services leverage AI to streamline your operations and improve efficiency. We implement robotic process automation (RPA), intelligent document processing, and AI-powered chatbots to automate repetitive tasks, reduce errors, and free up your workforce for higher-value activities. Our solutions are designed to integrate seamlessly with your existing systems and scale with your business needs."
  },
];

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-[#080808]"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div className="text-gray-500 dark:text-gray-400">{service.icon}</div>
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          <Button
            variant="link"
            className="p-0 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
            onClick={() => setOpen(true)}
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2 h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gray-500/[.05] dark:group-hover:bg-gray-300/[.05]" />
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">{service.icon}</span>
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
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Generative Intelligence is our creative compass, lighting the path to a future where innovation and compassion converge.
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
