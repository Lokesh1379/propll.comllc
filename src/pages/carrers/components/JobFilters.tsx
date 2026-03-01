import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  GraduationCap,
  Clock,
} from "lucide-react";

const JobFilters = ({
  filters,
  setFilters,
  showFilters,
  setShowFilters,
  clearFilters,
  activeFiltersCount,
  filterOptions,
}) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-b-2xl  ${showFilters ? "md:rounded-xl" : "md:rounded-full"} shadow-lg border border-gray-100 p-6 sticky top-0 z-10`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar - Enhanced */}
        <div className="flex-1 relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0a66c2] transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by job title, skills, or company..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0a66c2]/20 focus:border-[#0a66c2] focus:bg-white transition-all duration-300 placeholder:text-gray-400"
          />
          {filters.search && (
            <button
              onClick={() => setFilters({ ...filters, search: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition-all"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Button - Enhanced */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
            showFilters
              ? "bg-gradient-to-r from-[#0a66c2] to-[#084a8f] text-white shadow-lg shadow-[#0a66c2]/25"
              : "bg-white text-gray-700 border border-gray-200 hover:border-[#0a66c2]/30 hover:bg-gray-50/80 hover:shadow-md"
          }`}
        >
          <SlidersHorizontal
            size={18}
            className={showFilters ? "animate-spin-once" : ""}
          />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white text-[#0a66c2] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {activeFiltersCount}
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* Active Filters Tags */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.employment && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#0a66c2] rounded-lg text-sm">
              <Briefcase size={14} />
              {filters.employment}
              <button
                onClick={() => setFilters({ ...filters, employment: "" })}
                className="ml-1 hover:bg-blue-100 rounded-full p-0.5"
              >
                <X size={14} />
              </button>
            </span>
          )}
          {filters.experience && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg text-sm">
              <GraduationCap size={14} />
              {filters.experience}
              <button
                onClick={() => setFilters({ ...filters, experience: "" })}
                className="ml-1 hover:bg-purple-100 rounded-full p-0.5"
              >
                <X size={14} />
              </button>
            </span>
          )}
          {filters.workplace && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-sm">
              <Clock size={14} />
              {filters.workplace}
              <button
                onClick={() => setFilters({ ...filters, workplace: "" })}
                className="ml-1 hover:bg-green-100 rounded-full p-0.5"
              >
                <X size={14} />
              </button>
            </span>
          )}
          {filters.location && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-sm">
              <MapPin size={14} />
              {filters.location}
              <button
                onClick={() => setFilters({ ...filters, location: "" })}
                className="ml-1 hover:bg-amber-100 rounded-full p-0.5"
              >
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 border-t border-gray-100 mt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-[#0a66c2] to-[#084a8f] rounded-full"></span>
                  Refine Your Search
                </h3>
                {activeFiltersCount > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-[#0a66c2] font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <X size={14} />
                    Clear all filters
                  </motion.button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Employment Type Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                    <Briefcase size={16} className="text-[#0a66c2]" />
                    Employment Type
                  </label>
                  <select
                    value={filters.employment}
                    onChange={(e) =>
                      setFilters({ ...filters, employment: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a66c2]/20 focus:border-[#0a66c2] focus:bg-white transition-all duration-300 cursor-pointer hover:border-[#0a66c2]/30 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">All types</option>
                    {filterOptions.employment.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Experience Level Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-purple-500" />
                    Experience Level
                  </label>
                  <select
                    value={filters.experience}
                    onChange={(e) =>
                      setFilters({ ...filters, experience: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all duration-300 cursor-pointer hover:border-purple-500/30 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">All levels</option>
                    {filterOptions.experience.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Workplace Type Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                    <Clock size={16} className="text-green-500" />
                    Workplace Type
                  </label>
                  <select
                    value={filters.workplace}
                    onChange={(e) =>
                      setFilters({ ...filters, workplace: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:bg-white transition-all duration-300 cursor-pointer hover:border-green-500/30 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">All workplaces</option>
                    {filterOptions.workplace.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Location Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                    <MapPin size={16} className="text-amber-500" />
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white transition-all duration-300 cursor-pointer hover:border-amber-500/30 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">All locations</option>
                    {filterOptions.cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Apply Filters Button (Mobile) */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                onClick={() => setShowFilters(false)}
                className="mt-6 w-full md:hidden bg-gradient-to-r from-[#0a66c2] to-[#084a8f] text-white font-medium py-3 rounded-xl hover:shadow-lg hover:shadow-[#0a66c2]/25 transition-all duration-300"
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobFilters;
