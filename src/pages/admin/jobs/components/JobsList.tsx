import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiEdit2,
  FiTrash2,
  FiMapPin,
  FiUsers,
  FiMoreVertical,
  FiPlus,
  FiSearch,
  FiFilter,
  FiDownload,
  FiX,
} from "react-icons/fi";
import {
  BsBriefcaseFill,
  BsBuilding,
  BsDot,
  BsBriefcase,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setPostingJob } from "@/features/jobs";
import { getJobById } from "@/utils/jobsUtils";
import { RootState } from "@/store/store";

interface Job {
  _id: string;
  title: string;
  companyName: string;
  employmentType: string;
  experienceLevel: string;
  workplaceType: string;
  location?: {
    city?: string;
    country?: string;
  };
  status: string;
  totalApplicants?: number;
}

interface Props {
  jobs: Job[];
  onDelete: (jobData: any) => void;
}

const JobListCrads: React.FC<Props> = ({ jobs, onDelete }) => {
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterExperience, setFilterExperience] = useState<string>("all");
  const [filterWorkplace, setFilterWorkplace] = useState<string>("all");
  const dispatch = useDispatch();
  // Get unique values for filters
  const filterOptions = useMemo(() => {
    return {
      statuses: ["all", ...new Set(jobs?.map((job) => job.status))],
      types: ["all", ...new Set(jobs?.map((job) => job.employmentType))],
      experiences: ["all", ...new Set(jobs?.map((job) => job.experienceLevel))],
      workplaces: ["all", ...new Set(jobs?.map((job) => job.workplaceType))],
    };
  }, [jobs]);

  // Filter jobs based on all criteria
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search filter (title, company, location)
      const matchesSearch =
        searchQuery.toLowerCase() === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location?.country
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        filterStatus === "all" || job.status === filterStatus;

      // Employment type filter
      const matchesType =
        filterType === "all" || job.employmentType === filterType;

      // Experience level filter
      const matchesExperience =
        filterExperience === "all" || job.experienceLevel === filterExperience;

      // Workplace type filter
      const matchesWorkplace =
        filterWorkplace === "all" || job.workplaceType === filterWorkplace;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesExperience &&
        matchesWorkplace
      );
    });
  }, [
    jobs,
    searchQuery,
    filterStatus,
    filterType,
    filterExperience,
    filterWorkplace,
  ]);

  // Calculate stats
  const stats = useMemo(() => {
    return {
      total: jobs.length,
      open: jobs.filter((j) => j.status === "Open").length,
      closed: jobs.filter((j) => j.status === "Closed").length,
      paused: jobs.filter((j) => j.status === "Paused").length,
      totalApplicants: jobs.reduce(
        (sum, job) => sum + (job.totalApplicants || 0),
        0,
      ),
    };
  }, [jobs]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setFilterStatus("all");
    setFilterType("all");
    setFilterExperience("all");
    setFilterWorkplace("all");
  };

  // Check if any filter is active
  const hasActiveFilters =
    filterStatus !== "all" ||
    filterType !== "all" ||
    filterExperience !== "all" ||
    filterWorkplace !== "all" ||
    searchQuery !== "";

  const getStatusConfig = (status: string) => {
    const configs = {
      Open: {
        dot: "bg-emerald-500",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        label: "Active",
      },
      Closed: {
        dot: "bg-rose-500",
        bg: "bg-rose-50",
        text: "text-rose-700",
        label: "Closed",
      },
      Paused: {
        dot: "bg-amber-500",
        bg: "bg-amber-50",
        text: "text-amber-700",
        label: "On Hold",
      },
      default: {
        dot: "bg-slate-500",
        bg: "bg-slate-50",
        text: "text-slate-700",
        label: status,
      },
    };
    return configs[status as keyof typeof configs] || configs.default;
  };

  return (
    <div className="space-y-6 px-2 md:p-6 mt-20 md:mt-0">
      {/* Header Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 md:p-6">
        {/* Mobile: Search Overlay */}
        {showMobileSearch && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1">
                <FiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search jobs by title, company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <FiX
                      size={16}
                      className="text-slate-400 hover:text-slate-600"
                    />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowMobileSearch(false)}
                className="p-3 hover:bg-slate-100 rounded-lg"
              >
                <FiX size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="text-sm text-slate-500 text-center py-4">
              {filteredJobs.length} jobs found
            </div>
          </div>
        )}

        {/* Main Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left side - Title and icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0a66c2]/10 flex items-center justify-center flex-shrink-0">
              <BsBriefcase size={20} className="text-[#0a66c2] md:w-6 md:h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Jobs
              </h1>
              <p className="text-xs md:text-sm text-slate-500">
                Total{" "}
                <span className="font-medium text-[#0a66c2]">
                  {jobs.length} jobs
                </span>{" "}
                <span className="hidden sm:inline">across the platform</span>
              </p>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop Search with clear button */}
            <div className="hidden md:block relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 w-48 lg:w-64"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full"
                >
                  <FiX size={14} className="text-slate-400" />
                </button>
              )}
            </div>

            {/* Mobile Search Button with indicator */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="md:hidden p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 relative"
            >
              <FiSearch size={18} />
              {searchQuery && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#0a66c2] rounded-full" />
              )}
            </button>

            {/* Filter Button with dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2.5 border rounded-lg transition-colors ${
                  hasActiveFilters
                    ? "border-[#0a66c2] bg-[#0a66c2]/5 text-[#0a66c2]"
                    : "border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-[#0a66c2]"
                }`}
              >
                <FiFilter size={18} />
              </button>

              {/* Filter dropdown */}
              {showFilters && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowFilters(false)}
                  />
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-lg shadow-lg z-50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-slate-800">Filters</h3>
                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="text-xs text-[#0a66c2] hover:text-[#0a55a8] font-medium"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    {/* Status Filter */}
                    <div className="mb-3">
                      <label className="text-xs font-medium text-slate-500 mb-1 block">
                        Status
                      </label>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2]"
                      >
                        {filterOptions.statuses.map((status) => (
                          <option key={status} value={status}>
                            {status === "all" ? "All Status" : status}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Employment Type Filter */}
                    <div className="mb-3">
                      <label className="text-xs font-medium text-slate-500 mb-1 block">
                        Employment Type
                      </label>
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2]"
                      >
                        {filterOptions.types.map((type) => (
                          <option key={type} value={type}>
                            {type === "all" ? "All Types" : type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Experience Level Filter */}
                    <div className="mb-3">
                      <label className="text-xs font-medium text-slate-500 mb-1 block">
                        Experience Level
                      </label>
                      <select
                        value={filterExperience}
                        onChange={(e) => setFilterExperience(e.target.value)}
                        className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2]"
                      >
                        {filterOptions.experiences.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp === "all" ? "All Levels" : exp}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Workplace Type Filter */}
                    <div className="mb-3">
                      <label className="text-xs font-medium text-slate-500 mb-1 block">
                        Workplace Type
                      </label>
                      <select
                        value={filterWorkplace}
                        onChange={(e) => setFilterWorkplace(e.target.value)}
                        className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2]"
                      >
                        {filterOptions.workplaces.map((workplace) => (
                          <option key={workplace} value={workplace}>
                            {workplace === "all" ? "All Workplaces" : workplace}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Active filters count */}
                    {hasActiveFilters && (
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <p className="text-xs text-slate-500">
                          {filteredJobs.length} jobs match your filters
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Export Button */}
            <button className="hidden sm:block p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-[#0a66c2] transition-colors">
              <FiDownload size={18} />
            </button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                dispatch(
                  setPostingJob({ isOpen: true, mode: "create", job: null }),
                )
              }
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0a66c2] text-white font-medium text-sm md:text-base transition-all duration-300"
            >
              {/* Soft Glow Background */}
              <span className="absolute inset-0 rounded-md bg-[#0a66c2] opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></span>

              <FiPlus
                size={18}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
              <span className="text-sm">Add Job</span>
            </motion.button>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-xs text-slate-500">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0a66c2]/10 text-[#0a66c2] text-xs rounded-lg">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>
                  <FiX size={12} />
                </button>
              </span>
            )}
            {filterStatus !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0a66c2]/10 text-[#0a66c2] text-xs rounded-lg">
                Status: {filterStatus}
                <button onClick={() => setFilterStatus("all")}>
                  <FiX size={12} />
                </button>
              </span>
            )}
            {filterType !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0a66c2]/10 text-[#0a66c2] text-xs rounded-lg">
                Type: {filterType}
                <button onClick={() => setFilterType("all")}>
                  <FiX size={12} />
                </button>
              </span>
            )}
            {filterExperience !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0a66c2]/10 text-[#0a66c2] text-xs rounded-lg">
                Level: {filterExperience}
                <button onClick={() => setFilterExperience("all")}>
                  <FiX size={12} />
                </button>
              </span>
            )}
            {filterWorkplace !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#0a66c2]/10 text-[#0a66c2] text-xs rounded-lg">
                Workplace: {filterWorkplace}
                <button onClick={() => setFilterWorkplace("all")}>
                  <FiX size={12} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        {searchQuery && (
          <div className="mt-3 text-sm text-slate-500">
            Found{" "}
            <span className="font-medium text-[#0a66c2]">
              {filteredJobs.length}
            </span>{" "}
            jobs matching your criteria
          </div>
        )}
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredJobs.map((job, index) => {
            const status = getStatusConfig(job.status);

            return (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all"
              >
                {/* Card Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                        <BsBriefcaseFill size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 leading-tight">
                          {job.title}
                        </h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                          <BsBuilding size={12} />
                          {job.companyName}
                        </p>
                      </div>
                    </div>

                    {/* Actions Menu */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600">
                        <FiMoreVertical size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Tags - Minimal */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4 text-xs">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {job.employmentType}
                    </span>
                    <BsDot className="text-slate-300" size={14} />
                    <span className="text-slate-600">
                      {job.experienceLevel}
                    </span>
                    <BsDot className="text-slate-300" size={14} />
                    <span className="text-slate-600 flex items-center gap-1">
                      <FiMapPin size={10} />
                      {job.workplaceType}
                    </span>
                  </div>

                  {/* Location - Minimal */}
                  {(job.location?.city || job.location?.country) && (
                    <div className="mb-4 text-xs text-slate-500 flex items-center gap-1">
                      <FiMapPin size={11} className="text-slate-400" />
                      <span>
                        {job.location?.city && `${job.location.city}`}
                        {job.location?.country && `, ${job.location.country}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons - Appear on hover */}
                <div className="absolute top-3 right-3 flex gap-1">
                  <button
                    onClickCapture={() =>
                      getJobById({ dispatch, baseUrl, jobId: job._id })
                    }
                    className="p-2 bg-white border border-slate-200 rounded-lg hover:border-[#0a66c2] hover:text-[#0a66c2] shadow-sm hover:shadow transition-all"
                    title="Edit"
                  >
                    <FiEdit2 size={14} />
                  </button>
                  <button
                    onClick={() => onDelete(job)}
                    className="p-2 bg-white border border-slate-200 rounded-lg hover:border-rose-200 hover:text-rose-500 shadow-sm hover:shadow transition-all"
                    title="Delete"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <div className="text-slate-400 text-5xl mb-3">📋</div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            No jobs found
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a66c2] text-white rounded-lg text-sm hover:bg-[#0a55a8] transition-colors"
          >
            <FiX size={16} />
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobListCrads;
