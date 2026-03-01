"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
// import hr from "../assets/hr.jpeg";
import hr from "../assets/hr2.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/40 pt-20 pb-16 md:pt-24 lg:pt-28 overflow-hidden">
      {/* Optional subtle background pattern / floating accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-100/80 border border-indigo-200 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                Welcome to Propll.com LLC
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Connecting Talent.
              </span>
              <span className="block mt-2 text-gray-800">
                Driving Innovation.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We empower organizations with elite IT professionals and strategic
              consulting to accelerate digital transformation and sustainable
              growth.
            </p>
          </motion.div>

          {/* RIGHT - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={hr}
                alt="Modern IT talent & HR collaboration platform"
                className="w-full h-auto lg:max-h-[680px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
