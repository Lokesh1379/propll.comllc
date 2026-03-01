import { motion } from "framer-motion";
import { SearchX } from "lucide-react"; // or any icon you prefer

// You can replace the src with your own hosted image or use one from the suggestions below
const emptyStateImage =
  "https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg"; // Friendly "no data" illustration

export default function NoPositionsFound({
  clearFilters,
}: {
  clearFilters: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center py-16 px-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
    >
      {/* Illustration / Hero Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
        className="mb-8"
      >
        <img
          src={emptyStateImage}
          alt="No job positions found illustration"
          className="mx-auto h-48 w-auto object-contain md:h-64"
          loading="lazy"
        />
      </motion.div>

      {/* Fallback icon if image fails to load */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
        <SearchX className="text-[#0a66c2]" size={32} />
      </div>

      <h3 className="mt-4 text-2xl font-semibold text-gray-900">
        No positions found
      </h3>

      <p className="mt-3 text-gray-600 text-lg max-w-md mx-auto">
        We couldn't find any roles matching your current filters.
      </p>

      <p className="mt-2 text-gray-500 text-base">
        Try broadening your search or clearing filters to see more
        opportunities.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={clearFilters}
        className="mt-8 inline-flex items-center px-6 py-3 bg-[#0a66c2] text-white font-medium rounded-lg shadow-md hover:bg-[#084a8f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:ring-offset-2"
      >
        Clear All Filters
      </motion.button>
    </motion.div>
  );
}
