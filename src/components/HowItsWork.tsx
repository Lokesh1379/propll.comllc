"use client";
import { motion } from "framer-motion";
import { Target, CheckCircle, PenTool, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Set Clear Goals",
    description:
      "Define exactly what success looks like with specific, measurable objectives.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "Develop a Solid Plan",
    description:
      "Break down your goals into actionable steps with realistic timelines.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Consistent Action",
    description:
      "Take daily disciplined steps and build powerful momentum over time.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Adapt and Learn",
    description:
      "Track progress, analyze results, and optimize your approach continuously.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f8fc] to-white py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#0A66C2] font-semibold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            How It Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Unlock Astonishing Results
            <br className="hidden sm:block" /> with Just 4 Simple Steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="group relative"
                >
                  <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100/80 transition-all duration-300 overflow-hidden group-hover:-translate-y-2 group-hover:border-[#0A66C2]/30">
                    <div className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                      {/* Icon + Number badge */}
                      <div className="relative mb-7">
                        <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0A66C2]/5 text-[#0A66C2] transition-all duration-400 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <Icon size={36} strokeWidth={2.1} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0A66C2] transition-colors">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile connecting line */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute left-1/2 -bottom-10 w-0.5 h-16 bg-gray-200 -translate-x-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
