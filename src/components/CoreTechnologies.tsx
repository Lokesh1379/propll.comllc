"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Cloud,
  Smartphone,
  Database,
  Briefcase,
  Gem,
} from "lucide-react";

import aiImg from "../assets/ai.jpeg";
import cloudImg from "../assets/cs.jpeg";
import digitalImg from "../assets/dt.jpeg";
import dataImg from "../assets/ds.jpeg";
import programImg from "../assets/team.jpeg";
import infraImg from "../assets/is.jpeg";

const services = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    description:
      "Leverage AI, machine learning, and GenAI to automate, predict, and innovate at scale.",
    image: aiImg,
    color: "#0A66C2",
  },
  {
    icon: Cloud,
    title: "Cloud Strategy",
    description:
      "Build secure, scalable cloud foundations that power agility and reduce costs.",
    image: cloudImg,
    color: "#0A66C2",
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and unlock new value through digital-first strategies.",
    image: digitalImg,
    color: "#0A66C2",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Turn complex data into clear, actionable insights with advanced analytics.",
    image: dataImg,
    color: "#0A66C2",
  },
  {
    icon: Briefcase,
    title: "Program Management",
    description:
      "Lead large-scale initiatives with proven governance and delivery excellence.",
    image: programImg,
    color: "#0A66C2",
  },
  {
    icon: Gem,
    title: "Infrastructure Services",
    description:
      "Ensure resilient, high-performance IT environments with expert infrastructure.",
    image: infraImg,
    color: "#0A66C2",
  },
];

export default function CoreServices() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f8fc] to-white py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#0A66C2] font-semibold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            Our Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Core Technology Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end solutions that empower businesses to innovate, scale, and
            thrive in the digital era.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-3"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  {/* Icon Badge - Top Left */}
                  <div className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white/90 backdrop-blur-sm shadow-md text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A66C2] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                {/* Optional subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0A66C2]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
