"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Search,
  X,
  Building2,
  Clock,
  GraduationCap,
  BookmarkPlus,
} from "lucide-react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setJobDetails } from "@/features/jobs";
import JobFilters from "./JobFilters";
import logo from "@/assets/propll-logo.png";
import NoPositionsFound from "@/components/ui/NotFound";

interface Job {
  _id: string;
  title: string;
  employmentType: string;
  experienceLevel: string;
  workplaceType: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  companyName?: string; // Added optional
  description?: string;
  postedDate?: string;
}

const OpenRolesPage = ({ jobsData }: { jobsData: Job[] }) => {
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [filters, setFilters] = useState({
    employment: "",
    experience: "",
    workplace: "",
    search: "",
    location: "",
  });

  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = useMemo(
    () => ({
      employment: [
        ...new Set(jobsData.map((job) => job.employmentType).filter(Boolean)),
      ],
      experience: [
        ...new Set(jobsData.map((job) => job.experienceLevel).filter(Boolean)),
      ],
      workplace: [
        ...new Set(jobsData.map((job) => job.workplaceType).filter(Boolean)),
      ],
      cities: [
        ...new Set(jobsData.map((job) => job.location?.city).filter(Boolean)),
      ],
    }),
    [jobsData],
  );

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description?.toLowerCase().includes(filters.search.toLowerCase());

      const matchesEmployment =
        !filters.employment || job.employmentType === filters.employment;
      const matchesExperience =
        !filters.experience || job.experienceLevel === filters.experience;
      const matchesWorkplace =
        !filters.workplace || job.workplaceType === filters.workplace;
      const matchesLocation =
        !filters.location || job.location?.city === filters.location;

      return (
        matchesSearch &&
        matchesEmployment &&
        matchesExperience &&
        matchesWorkplace &&
        matchesLocation
      );
    });
  }, [jobsData, filters]);

  const clearFilters = () => {
    setFilters({
      employment: "",
      experience: "",
      workplace: "",
      search: "",
      location: "",
    });
  };

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "",
  ).length;

  const getAllJobsData = async (jobId: string) => {
    try {
      const response = await axios.get(`${baseUrl}/api/jobs/get-job/${jobId}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        dispatch(setJobDetails(response.data.data));
        navigateTo(`/carrers-at-propll/${jobId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <JobFilters
          filters={filters}
          setFilters={setFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          clearFilters={clearFilters}
          activeFiltersCount={activeFiltersCount}
          filterOptions={filterOptions}
        />

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 mb-6 gap-4">
          <p className="text-base text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredJobs.length}
            </span>{" "}
            {filteredJobs.length === 1 ? "open role" : "open roles"}
          </p>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#0a66c2] hover:text-[#084a8f] font-medium flex items-center gap-1.5"
            >
              <X size={16} /> Clear filters ({activeFiltersCount})
            </button>
          )}
        </div>

        {/* Job Grid */}
        <AnimatePresence mode="wait">
          {filteredJobs.length === 0 ? (
            <NoPositionsFound clearFilters={clearFilters} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0a66c2]/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shadow-sm">
                          <img
                            src={logo}
                            alt="Propll Logo"
                            className="w-10 h-10 object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 line-clamp-1">
                            {job.companyName || "Propll"}
                          </h4>
                        </div>
                      </div>
                      <button
                        aria-label="Save job"
                        className="text-gray-400 hover:text-[#0a66c2] transition-colors"
                      >
                        <BookmarkPlus size={20} />
                      </button>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0a66c2] transition-colors mb-2 line-clamp-2">
                      {job.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#0a66c2] rounded-full text-xs font-medium">
                        <Briefcase size={13} /> {job.employmentType || "N/A"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                        <GraduationCap size={13} />{" "}
                        {job.experienceLevel || "N/A"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        <Clock size={13} /> {job.workplaceType || "N/A"}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin size={16} className="text-[#0a66c2]" />
                      <span className="text-sm line-clamp-1">
                        {job.location?.city}, {job.location?.state} •{" "}
                        {job.location?.country}
                      </span>
                    </div>

                    {/* Description preview */}
                    {job.description && (
                      <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">
                        {job.description}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="mt-auto flex justify-end">
                      <button
                        onClick={() => getAllJobsData(job._id)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0a66c2] text-white font-medium rounded-lg shadow-md hover:bg-[#084a8f] transition-all duration-300 group/btn"
                      >
                        View Details
                        <RiArrowRightSLine
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OpenRolesPage;
