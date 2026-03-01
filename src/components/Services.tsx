"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Clock,
  RefreshCcw,
  Globe,
  Layers,
  Settings,
  Crown,
  Briefcase,
} from "lucide-react";
import permanentStaff from "@/assets/ourservices/ps.jpeg";
import contarctStaff from "@/assets/ourservices/cs.jpeg";
import contracttohire from "@/assets/ourservices/cth.jpeg";
import remotestaff from "@/assets/ourservices/ros.jpeg";
import projectbasedstaff from "@/assets/ourservices/pbs.jpeg";
import managaedstaffservices from "@/assets/ourservices/mss.jpeg";
import executiveitservices from "@/assets/ourservices/eit.jpeg";
import technologyconsultant from "@/assets/ourservices/tc.jpeg";
import projectbasedconsulting from "@/assets/ourservices/pdc.jpeg";
import applicationdevelopment from "@/assets/ourservices/ads.jpeg";
import itinfrastructureconsult from "@/assets/ourservices/ifs.jpeg";

const staffingServices = [
  {
    icon: Users,
    title: "Permanent Staffing",
    desc: "Hiring full-time IT professionals for long-term organizational growth.",
    image: permanentStaff,
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    desc: "Short-term IT professionals for specific projects or defined durations.",
    image: contarctStaff,
  },
  {
    icon: RefreshCcw,
    title: "Contract-to-Hire",
    desc: "Temporary professionals with the option to transition into full-time roles.",
    image: contracttohire,
  },
  {
    icon: Globe,
    title: "Remote / Offshore Staffing",
    desc: "Global IT talent to support scalability and 24/7 operations.",
    image: remotestaff,
  },
  {
    icon: Layers,
    title: "Project-Based Staffing",
    desc: "Complete IT teams or specialists for project-specific deliverables.",
    image: projectbasedstaff,
  },
  {
    icon: Settings,
    title: "Managed Staffing Services",
    desc: "End-to-end recruitment and workforce management solutions.",
    image: managaedstaffservices,
  },
  {
    icon: Crown,
    title: "Executive IT Search",
    desc: "Strategic hiring for CIOs, CTOs, and senior technology leadership roles.",
    image: executiveitservices,
  },
];
const consultingServices = [
  {
    icon: Briefcase,
    title: "Technology Consulting",
    description:
      "Strategic advisory services to help organizations align technology investments with business goals and drive measurable transformation.",
    image: technologyconsultant,
  },
  {
    icon: Layers,
    title: "Project-Based Consulting",
    description:
      "End-to-end execution of technology initiatives with defined scope, timelines, and deliverables for predictable outcomes.",
    image: projectbasedconsulting,
  },
  {
    icon: Settings,
    title: "Application Development Support",
    description:
      "Comprehensive support for modern application development, optimization, integration, and lifecycle management.",
    image: applicationdevelopment,
  },
  {
    icon: Globe,
    title: "IT Infrastructure Consulting",
    description:
      "Design and optimization of secure, scalable IT infrastructure to enhance performance, reliability, and cost efficiency.",
    image: itinfrastructureconsult,
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"staffing" | "consulting">(
    "staffing",
  );

  return (
    <section className="w-full bg-gradient-to-b from-[#f4f8fc] to-white py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] font-semibold tracking-wider uppercase text-sm mb-4"
          >
            What We Provide
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Comprehensive IT Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Tailored staffing and consulting solutions to build high-performing
            teams and drive digital success.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-md border border-gray-200 p-1.5">
            <button
              onClick={() => setActiveTab("staffing")}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === "staffing"
                  ? "bg-[#0A66C2] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              IT Staffing Services
            </button>
            <button
              onClick={() => setActiveTab("consulting")}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === "consulting"
                  ? "bg-[#0A66C2] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              IT Consulting Services
            </button>
          </div>
        </div>

        {/* Content with images */}
        <AnimatePresence mode="wait">
          {activeTab === "staffing" && (
            <motion.div
              key="staffing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {staffingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.6 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 border border-gray-100"
                  >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md shadow-lg text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-400 group-hover:scale-110">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A66C2] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "consulting" && (
            <motion.div
              key="consulting"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {consultingServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  >
                    {/* Image Header */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Soft Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4 w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#0A66C2] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
