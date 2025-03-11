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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Model Development",
    description: "Develop custom AI models tailored to your specific business needs.",
    details: "Our AI Model Development services provide end-to-end solutions for businesses looking to leverage artificial intelligence. We offer custom model development, training, and deployment for a variety of applications, including predictive analytics, natural language processing, computer vision, and more. Our team of experts ensures your AI models are accurate, efficient, and optimized for performance. We specialize in TensorFlow, PyTorch, and other leading AI frameworks."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Data Analysis & Insights",
    description: "Extract valuable insights from your data using advanced analytics and machine learning.",
    details: "Our Data Analysis & Insights services help you unlock the potential of your data. We provide data mining, statistical analysis, predictive modeling, and data visualization services. Our team uses advanced techniques to identify trends, patterns, and anomalies in your data, providing you with actionable insights to improve decision-making and drive business growth. We work with structured and unstructured data from various sources."
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
            Leveraging AI and machine learning to transform businesses and create new opportunities in the digital economy.
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
