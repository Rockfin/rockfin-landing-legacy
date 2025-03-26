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
    title: "Government Services and Logistics",
    description: "advance services",
    details: "Our Government Intelligence and Logistics services offer cutting-edge solutions tailored for the unique demands of government operations. We leverage AI and data analytics to enhance situational awareness, optimize supply chains, and improve decision-making processes. Our expertise ensures secure, reliable, and efficient support for critical missions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Generative Intelligence",
    description: "Building innovative applications and defending against adversarial AI.",
    details: "We specialize in developing cutting-edge applications powered by Generative Intelligence. Our expertise extends to creating robust defenses against adversarial AI attacks, employing advanced techniques to anticipate and neutralize threats, effectively applying reverse psychology to AI security challenges."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    title: "Blockchain Analysis",
    description: "Providing in-depth analysis and insights into blockchain transactions and networks.",
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
