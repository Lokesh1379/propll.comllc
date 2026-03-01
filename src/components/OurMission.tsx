"use client";

import { motion } from "framer-motion";
import { Globe, Target, Sparkles } from "lucide-react";
import heroImage from "../assets/planning.jpeg";

export default function OurMission() {
  return (
    <section className="relative w-full bg-white">
      {/* HERO IMAGE SECTION */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={heroImage}
          alt="Where Creativity Meets Digital Strategy"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay instead of solid black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm tracking-widest uppercase text-white font-medium">
              Our Value
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight px-4"
          >
            Where Creativity Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Digital Strategy
            </span>
          </motion.h2>
        </div>
      </div>

      {/* MISSION CARD - SIMPLIFIED */}
      <div className="relative -mt-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
            {/* Icon with subtle animation */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shrink-0"
            >
              <Target size={24} />
            </motion.div>

            {/* Text Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Empowering businesses with tailored recruitment solutions and
                comprehensive IT services that drive growth, efficiency, and
                innovation. We foster lasting partnerships to ensure access to
                the talent and support needed for industry excellence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16 md:h-20" />
    </section>
  );
}
