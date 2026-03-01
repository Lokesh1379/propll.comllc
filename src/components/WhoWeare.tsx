"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, ShieldCheck } from "lucide-react";
import team from "@/assets/team.jpeg";
// Optional secondary image (you can import your own or use a URL)
import successTeam from "@/assets/planning.jpeg"; // ← add this asset or use external URL

const values = [
  {
    icon: Users,
    title: "Expert Talent Network",
    desc: "Access to top-tier IT professionals vetted for skills and culture fit.",
  },
  {
    icon: Target,
    title: "Precise Matching",
    desc: "We align talent with your exact project needs and long-term goals.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    desc: "Fast onboarding to accelerate your digital initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partnership",
    desc: "Transparent, reliable, and committed to your success.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 px-5 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src={team}
                alt="Our diverse IT team collaborating on digital solutions"
                className="w-full h-[380px] sm:h-[450px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block text-[#0A66C2] font-semibold tracking-widest uppercase text-sm md:text-base mb-3">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Transforming Businesses
                <span className="text-[#0A66C2] block">in the Digital Age</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Propll.com LLC is a trusted partner in delivering comprehensive IT
              staffing and consulting solutions across diverse industries. We
              stay ahead of evolving technology trends and business demands to
              help companies build high-performance teams with precisely the
              right talent.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: bridge the gap between exceptional IT
              professionals and organizations pursuing innovation, agility, and
              sustainable growth in today's fast-moving digital landscape.
            </p>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Optional secondary image - team success moment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6 hidden md:block"
            >
              <img
                src={
                  successTeam ||
                  "https://images.pexels.com/photos/8866744/pexels-photo-8866744.jpeg"
                }
                alt="Team celebrating project success"
                className="w-full max-w-md rounded-xl shadow-lg border border-gray-100 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
