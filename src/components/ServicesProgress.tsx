"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Target, BookOpen } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Creative Team",
    description:
      "Passionate experts collaborating to turn complex challenges into elegant solutions.",
  },
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    description:
      "AI-powered insights and innovative approaches that deliver real business impact.",
  },
  {
    icon: Target,
    title: "Work Smart & Reliable",
    description:
      "Efficient processes and dependable delivery — every project, every time.",
  },
  {
    icon: BookOpen,
    title: "Focus on Target",
    description:
      "Laser-focused strategy aligned with your core business objectives and KPIs.",
  },
];

const skills = [
  { label: "Artificial Intelligence - ML - Gen AI", value: 85 },
  { label: "Cloud Strategy & IaaS", value: 67 },
  { label: "Data Analytics & Digital Transformation", value: 89 },
  { label: "Program Management", value: 85 },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f3f8fd] via-white to-[#f8fbff] py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT - FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl p-7 md:p-9 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#0A66C2]/20 transition-all duration-400 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] mb-5 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:scale-110 transition-all duration-400 shadow-sm">
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0A66C2] transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT - CONTENT + SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-12"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Express everything.
                <br />
                <span className="text-[#0A66C2]">Feel the impact.</span>
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
                We combine deep technical expertise in AI, cloud, and data with
                proven program leadership to help ambitious organizations
                transform faster and more effectively.
              </p>
            </div>

            <div className="space-y-9">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-base font-semibold text-gray-800">
                      {skill.label}
                    </span>
                    <span className="text-xl font-bold text-[#0A66C2]">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{
                        duration: 1.4,
                        delay: 0.4 + index * 0.25,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#0A66C2] to-[#2563eb] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
