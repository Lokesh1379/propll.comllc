import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PropllIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if component has been shown before
    const hasBeenShown = sessionStorage.getItem("propllIntroShown");

    if (hasBeenShown) {
      // If already shown in this session, don't show again
      setIsVisible(false);
      document.body.style.overflow = "auto";
      return;
    }

    // Mark as shown in session storage
    sessionStorage.setItem("propllIntroShown", "true");

    // Set overflow hidden during animation
    document.body.style.overflow = "hidden";

    // Set timeout to hide component after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // If not visible, don't render anything
  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A66C2] via-[#004182] to-[#002244] flex items-center justify-center overflow-hidden fixed inset-0 z-50">
      {/* Simplified Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Text Container */}
      <div className="relative z-10 text-center px-4">
        {/* Clean, White Main Text */}
        <div className="relative">
          {/* Main Text - Pure White */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 1.3,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              scale: {
                type: "spring",
                damping: 20,
                stiffness: 100,
              },
            }}
            className="text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-none"
            style={{
              color: "#FFFFFF",
              textShadow: "none",
            }}
          >
            Propll
          </motion.h1>

          {/* Clean Underline */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-white rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.8 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Clean Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-white text-xl md:text-2xl font-normal tracking-wider uppercase">
            .COM LLC
          </p>
        </motion.div>
      </div>

      {/* Simple Corner Accents */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 border-t border-l border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
}
