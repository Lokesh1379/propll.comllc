"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import apple from "@/assets/aple.jpeg";
import wwt from "@/assets/wwt.jpg";
import pge from "@/assets/pge.png";
import glc from "@/assets/glc.jpg";

const clients = [apple, wwt, pge, glc];

export default function ClientsScroller() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate once for seamless loop
  const logos = [...clients, ...clients];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-12 md:mb-16">
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </h2>

        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Subtle side fades – more elegant than hard white */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-50/90 via-gray-50/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-gray-50/90 via-gray-50/60 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24"
            animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: isPaused ? 0 : Infinity,
                repeatType: "loop",
                duration: 35, // slower = more premium feel
                ease: "linear",
              },
            }}
            // Respect user's "prefers-reduced-motion"
            style={{ willChange: "transform" }}
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
              >
                <div className="relative group">
                  <img
                    src={logo}
                    alt={`Client logo ${(idx % clients.length) + 1}`}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 
                               grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:drop-shadow-xl"
                    loading="lazy"
                  />
                  {/* Optional subtle shine/hover ring */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 
                                  bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
