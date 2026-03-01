import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMail,
  FiLink,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import {
  BsBuilding,
  BsCalendarCheck,
  BsPersonBadge,
  BsGraphUp,
  BsBriefcaseFill,
} from "react-icons/bs";

interface JobPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobData?: JobPostForm;
}

interface JobPostForm {
  companyName: string;
  title: string;
  description: string;
  employmentType: string;
  experienceLevel: string;
  workplaceType: string;
  skills: string[];
  responsibilities: string[];
  benefits: string[];
  location: {
    country: string;
    state: string;
    city: string;
  };
  salary: {
    currency: string;
    min: string;
    max: string;
    isNegotiable: boolean;
  };
  applicationEmail: string;
  applicationUrl: string;
}

// Sample data for preview
const SAMPLE_JOB_DATA: JobPostForm = {
  companyName: "TechCorp Solutions",
  title: "Senior Frontend Developer",
  description:
    "We are looking for an experienced Frontend Developer to join our innovative team. You will be responsible for building user interfaces, optimizing performance, and collaborating with cross-functional teams to deliver exceptional web applications.",
  employmentType: "Full-time",
  experienceLevel: "Mid-Senior level",
  workplaceType: "Hybrid",
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  responsibilities: [
    "Develop and maintain responsive web applications",
    "Collaborate with UX designers to implement pixel-perfect interfaces",
    "Write clean, maintainable, and testable code",
    "Optimize applications for maximum performance",
    "Mentor junior developers and conduct code reviews",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Flexible work hours",
    "Professional development budget",
  ],
  location: {
    country: "United States",
    state: "California",
    city: "San Francisco",
  },
  salary: {
    currency: "USD",
    min: "120000",
    max: "160000",
    isNegotiable: true,
  },
  applicationEmail: "careers@techcorp.com",
  applicationUrl: "https://techcorp.com/careers/frontend-dev",
};

const JobPreviewModal: React.FC<JobPreviewModalProps> = ({
  isOpen,
  onClose,
  jobData = SAMPLE_JOB_DATA,
}) => {
  // Format salary
  const formatSalary = () => {
    const { currency, min, max, isNegotiable } = jobData.salary;
    if (!min && !max) return "Not specified";

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const minFormatted = min ? formatter.format(Number(min)) : "";
    const maxFormatted = max ? formatter.format(Number(max)) : "";

    if (min && max) {
      return `${minFormatted} - ${maxFormatted}${isNegotiable ? " (Negotiable)" : ""}`;
    } else if (min) {
      return `From ${minFormatted}${isNegotiable ? " (Negotiable)" : ""}`;
    } else if (max) {
      return `Up to ${maxFormatted}${isNegotiable ? " (Negotiable)" : ""}`;
    }
    return "Not specified";
  };

  // Get location string
  const getLocation = () => {
    const { city, state, country } = jobData.location;
    const parts = [];
    if (city) parts.push(city);
    if (state) parts.push(state);
    if (country) parts.push(country);
    return parts.length > 0 ? parts.join(", ") : "Location not specified";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-hidden flex items-center justify-center"
          >
            <div className="bg-white  rounded-2xl shadow-2xl min-w-5xl h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0a66c2]/10 flex items-center justify-center">
                    <BsBuilding
                      size={20}
                      className="text-[#0a66c2] md:w-6 md:h-6"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                      Job Preview
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500">
                      Review your job posting before publishing
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-700"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Company Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-[#0a66c2] to-blue-400 text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg">
                        {jobData.companyName.charAt(0)}
                      </div>
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                          {jobData.title}
                        </h1>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-lg text-slate-600">
                            {jobData.companyName}
                          </span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span className="text-sm text-slate-500">
                            Posted just now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <InfoCard
                      icon={<FiBriefcase className="text-[#0a66c2]" />}
                      label="Employment Type"
                      value={jobData.employmentType || "Not specified"}
                    />
                    <InfoCard
                      icon={<BsPersonBadge className="text-[#0a66c2]" />}
                      label="Experience"
                      value={jobData.experienceLevel || "Not specified"}
                    />
                    <InfoCard
                      icon={<FiMapPin className="text-[#0a66c2]" />}
                      label="Workplace"
                      value={jobData.workplaceType || "Not specified"}
                    />
                    <InfoCard
                      icon={<BsGraphUp className="text-[#0a66c2]" />}
                      label="Level"
                      value={jobData.experienceLevel || "Not specified"}
                    />
                  </div>

                  {/* Location & Salary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <FiMapPin className="text-[#0a66c2]" />
                        <h3 className="font-semibold text-slate-700">
                          Location
                        </h3>
                      </div>
                      <p className="text-slate-600">{getLocation()}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <FiDollarSign className="text-[#0a66c2]" />
                        <h3 className="font-semibold text-slate-700">Salary</h3>
                      </div>
                      <p className="text-slate-600 font-medium">
                        {formatSalary()}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#0a66c2] rounded-full" />
                      Job Description
                    </h3>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {jobData.description}
                    </p>
                  </div>

                  {/* Skills */}
                  {jobData.skills.length > 0 && (
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                      <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-[#0a66c2] rounded-full" />
                        Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {jobData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-[#0a66c2]/10 text-[#0a66c2] rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {jobData.responsibilities.length > 0 && (
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                      <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-[#0a66c2] rounded-full" />
                        Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {jobData.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FiCheckCircle
                              className="text-emerald-500 mt-0.5 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {jobData.benefits.length > 0 && (
                    <div className="bg-white rounded-xl border border-slate-200 p-5">
                      <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-[#0a66c2] rounded-full" />
                        Benefits & Perks
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {jobData.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0a66c2]" />
                            <span className="text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Application Methods */}
                  <div className="bg-gradient-to-r from-[#0a66c2]/5 to-transparent rounded-xl border border-[#0a66c2]/20 p-5">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <FiUsers className="text-[#0a66c2]" />
                      How to Apply
                    </h3>
                    <div className="space-y-3">
                      {jobData.applicationEmail && (
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0a66c2]/10 flex items-center justify-center">
                            <FiMail className="text-[#0a66c2]" size={14} />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">
                              Email applications to
                            </p>
                            <a
                              href={`mailto:${jobData.applicationEmail}`}
                              className="text-sm text-[#0a66c2] hover:underline font-medium"
                            >
                              {jobData.applicationEmail}
                            </a>
                          </div>
                        </div>
                      )}
                      {jobData.applicationUrl && (
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0a66c2]/10 flex items-center justify-center">
                            <FiLink className="text-[#0a66c2]" size={14} />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">
                              Apply online at
                            </p>
                            <a
                              href={jobData.applicationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#0a66c2] hover:underline font-medium"
                            >
                              {jobData.applicationUrl}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Posted Date */}
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-400 pt-4">
                    <BsCalendarCheck size={14} />
                    <span>
                      Posted on{" "}
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-slate-200 p-4 md:p-6 bg-slate-50">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 text-sm border border-slate-200 rounded-lg hover:bg-white transition-colors text-slate-600 font-medium"
                  >
                    Edit Post
                  </button>
                  <button className="px-6 py-2 text-sm bg-gradient-to-r from-[#0a66c2] to-[#003e6b] text-white rounded-lg hover:from-[#0a55a8] hover:to-[#003055] transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2">
                    <BsBriefcaseFill size={15} />
                    Publish Job
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Info Card Component
const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="bg-white border border-slate-200 rounded-lg p-3">
    <div className="flex items-center gap-2 mb-1">
      {icon}
      <span className="text-xs text-slate-500">{label}</span>
    </div>
    <p className="text-sm font-medium text-slate-800">{value}</p>
  </div>
);

export default JobPreviewModal;
