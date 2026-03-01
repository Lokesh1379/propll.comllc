"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Shield,
  Database,
  Server,
  Briefcase,
  CheckCircle,
  Headphones,
  Palette,
  GitBranch,
  BarChart3,
} from "lucide-react";

// Import your images
import img1 from "../assets/roles/software.jpeg";
import img2 from "../assets/roles/cloud.jpeg";
import img3 from "../assets/roles/cyber.jpeg";
import img4 from "../assets/roles/datas.jpeg";
import img5 from "../assets/roles/network.jpeg";
import img6 from "../assets/roles/project.jpeg";
import img7 from "../assets/roles/qa.jpeg";
import img8 from "../assets/roles/ic.jpeg";
import img9 from "../assets/roles/cs.jpeg";
import img10 from "../assets/roles/ui.jpeg";
import img11 from "../assets/roles/md.jpeg";
import img12 from "../assets/roles/sf.jpeg";
import img13 from "../assets/roles/pd.jpeg";

const roles = [
  {
    icon: Code,
    title: "Software Developers & Engineers",
    description:
      "Skilled professionals in frontend, backend, and full-stack development delivering scalable and secure applications.",
    image: img1,
  },
  {
    icon: Cloud,
    title: "Cloud Computing Specialists",
    description:
      "Experts in AWS, Azure, and Google Cloud designing scalable cloud-native architectures and migration strategies.",
    image: img2,
  },
  {
    icon: Shield,
    title: "Cybersecurity Experts",
    description:
      "Specialists in risk management, compliance, and security operations to protect enterprise infrastructure.",
    image: img3,
  },
  {
    icon: Database,
    title: "Data Specialists",
    description:
      "Data engineers, analysts, and scientists transforming business data into strategic insights.",
    image: img4,
  },
  {
    icon: Server,
    title: "Network & System Administrators",
    description:
      "Ensuring seamless operations of enterprise networks, servers, and infrastructure systems.",
    image: img5,
  },
  {
    icon: Briefcase,
    title: "IT Project Managers",
    description:
      "Certified professionals leading technology initiatives with structured planning and execution excellence.",
    image: img6,
  },
  {
    icon: CheckCircle,
    title: "QA & Test Engineers",
    description:
      "Automation and manual testing specialists ensuring software quality, performance, and reliability.",
    image: img7,
  },
  {
    icon: Briefcase,
    title: "IT Consultants",
    description:
      "Strategic advisors guiding organizations in technology modernization and digital transformation.",
    image: img8,
  },
  {
    icon: Headphones,
    title: "Technical Support Specialists",
    description:
      "Dedicated IT support professionals delivering 24/7 assistance and troubleshooting services.",
    image: img9,
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    description:
      "Creative designers crafting intuitive, user-centric digital experiences across platforms.",
    image: img10,
  },
  {
    icon: GitBranch,
    title: "Mulesoft Developers",
    description:
      "Integration experts building API-led connectivity solutions using Mulesoft platforms.",
    image: img11,
  },
  {
    icon: Cloud,
    title: "Salesforce Developers",
    description:
      "Certified Salesforce professionals delivering CRM customization and cloud solutions.",
    image: img12,
  },
  {
    icon: BarChart3,
    title: "Power BI Developers",
    description:
      "Business intelligence specialists creating interactive dashboards and advanced analytics reports.",
    image: img13,
  },
];

export default function TalentExpertise() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0f7ff] to-[#e5f0ff] py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Talent Expertise <span className="text-[#0A66C2]">We Provide</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized professionals ready to accelerate your next big project
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.7,
                  ease: [0.215, 0.61, 0.355, 1], // nice overshoot
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100/70"
              >
                {/* Image + Overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon Badge - elevated look */}
                </div>

                {/* Content */}
                <div className="p-7 pt-14 relative">
                  <div className="absolute -top-8 left-6 z-20">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-xl text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-400 ring-1 ring-gray-200/50 group-hover:ring-[#0A66C2]/30">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A66C2] transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed line-clamp-4">
                    {role.description}
                  </p>

                  {/* Optional subtle CTA */}
                  {/* <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-sm font-medium text-[#0A66C2] hover:underline inline-flex items-center gap-1.5">
                      Learn more →
                    </span>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
