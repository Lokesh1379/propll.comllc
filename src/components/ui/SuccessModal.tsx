"use client";

import { setApplied } from "@/features/commonProps";
import { RootState } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function ApplicationSuccessModal() {
  const dispatch = useDispatch();
  const { applied } = useSelector((state: RootState) => state.commonProps);

  // Green theme colors
  const successGreen = "#10B981"; // emerald-500
  const successGreenDark = "#059669"; // emerald-700 (for hover)
  const successGreenLight = "#D1FAE5"; // emerald-100 (subtle bg)

  return (
    <AnimatePresence>
      {applied && (
        <>
          {/* Overlay - slightly greener tint */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setApplied(false))}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 60 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center border border-emerald-100"
            >
              {/* Success Icon with green circle */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
                className="w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${successGreenLight} 0%, #E0F2FE 100%)`,
                  color: successGreen,
                }}
              >
                <CheckCircle size={44} strokeWidth={2.5} />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Application Submitted!
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed"
              >
                Thank you for applying! <br />
                Our recruitment team will review your profile and reach out
                soon.
              </motion.p>

              {/* Optional success hint / next step */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-sm text-emerald-700 mb-8 font-medium"
              >
                You’ll receive a confirmation email shortly.
              </motion.p>

              {/* Close Button - green theme */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => dispatch(setApplied(false))}
                className="w-full py-3.5 px-6 rounded-2xl font-semibold text-base shadow-md transition-all duration-200"
                style={{
                  backgroundColor: successGreen,
                  color: "white",
                }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
