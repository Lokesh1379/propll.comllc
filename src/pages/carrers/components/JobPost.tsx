import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle,
  Mail,
  Share2,
  Heart,
} from "lucide-react";
import logo from "@/assets/propll-logo.png";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link } from "react-router-dom";
import { setApplyJob } from "@/features/commonProps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "./ApplyJob";
import ApplicationSuccessModal from "@/components/ui/SuccessModal";

const JobDetailsCard = () => {
  const dispatch = useDispatch();
  const { jobDetails } = useSelector((state: RootState) => state.jobData);
  return (
    <>
      <div className="min-h-screen mt-20 md:mt-12 bg-[#f3f6f8] py-4 sm:py-6 md:py-10 px-3 sm:px-4">
        <Navbar />
        <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
          {/* Top Bar with Back and Apply */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <Link
              to={"/carrers-at-propll"}
              className="flex items-center gap-2 text-gray-600 hover:text-[#0a66c2] transition-colors group"
            >
              <IoMdArrowBack
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-sm font-medium hidden sm:inline">
                Back to Jobs
              </span>
            </Link>

            <button
              onClick={() => {
                // Dispatch action to open application form or set state to show application modal
                dispatch(
                  setApplyJob({ isApplyingJob: true, jobData: jobDetails }),
                );
              }}
              className="bg-[#0a66c2] text-white px-4 sm:px-6 py-2 rounded-lg sm:rounded-xl font-semibold hover:bg-[#004182] transition text-sm flex items-center gap-2 shadow-sm"
            >
              <span>Apply Now</span>
            </button>
          </div>

          {/* Company Header - Responsive */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt={jobDetails?.companyName}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl object-cover border"
              />
              <div className="sm:hidden">
                <h1 className="text-xl font-bold text-gray-800">
                  {jobDetails?.title}
                </h1>
                <p className="text-xs text-gray-500">
                  {jobDetails?.companyName}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  {jobDetails?.title}
                </h1>
                <p className="text-sm text-gray-500">
                  {jobDetails?.companyName}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2">
                <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full sm:hidden">
                  <CheckCircle size={12} />
                  {jobDetails?.status}
                </div>
                <div className="flex gap-1">
                  <button className="p-1.5 sm:p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Meta - Mobile */}
          <div className="hidden sm:flex sm:items-center sm:gap-2 sm:text-xs sm:text-green-600 sm:mt-2">
            <CheckCircle size={14} />
            {jobDetails?.status}
          </div>

          {/* Meta Info - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-start sm:items-center gap-2 bg-gray-50 p-2 sm:p-0 sm:bg-transparent rounded-lg">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-words">
                {jobDetails?.location.city}, {jobDetails?.location.state},{" "}
                {jobDetails?.location.country} ({jobDetails?.workplaceType})
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 p-2 sm:p-0 sm:bg-transparent rounded-lg">
              <Briefcase size={16} className="flex-shrink-0" />
              <span>{jobDetails?.employmentType}</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 p-2 sm:p-0 sm:bg-transparent rounded-lg">
              <Clock size={16} className="flex-shrink-0" />
              <span>{jobDetails?.experienceLevel}</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 p-2 sm:p-0 sm:bg-transparent rounded-lg">
              <DollarSign size={16} className="flex-shrink-0" />
              <span className="break-words">
                {jobDetails?.salary.currency} {jobDetails?.salary.min} -{" "}
                {jobDetails?.salary.max}
                {jobDetails?.salary.isNegotiable && " (Negotiable)"}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              Job Description
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {jobDetails?.description}
            </p>
          </div>

          {/* Responsibilities */}
          {jobDetails?.responsibilities &&
            jobDetails?.responsibilities.length > 0 && (
              <div className="mt-5 sm:mt-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  Responsibilities
                </h2>
                <ul className="mt-2 space-y-1.5 sm:space-y-1">
                  {jobDetails?.responsibilities.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

          {/* Requirements */}
          {jobDetails?.requirements?.length > 0 && (
            <div className="mt-5 sm:mt-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Requirements
              </h2>
              <ul className="mt-2 space-y-1.5 sm:space-y-1">
                {jobDetails?.requirements.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills & Benefits - Responsive Grid */}
          <div className="grid gap-3 sm:gap-6 mt-5 sm:mt-6">
            {/* Skills */}
            {jobDetails?.skills?.length > 0 && (
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {jobDetails?.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {jobDetails?.benefits?.length > 0 && (
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  Benefits
                </h2>
                <div className="grid gap-1.5 sm:gap-2">
                  {jobDetails?.benefits.map(
                    (benefit: string, index: number) => (
                      <span
                        key={index}
                        className="bg-green-50 w-fit text-green-700 text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full"
                      >
                        {benefit}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Stats - Responsive */}
          {/* <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-1 sm:gap-1.5 bg-gray-50 sm:bg-transparent px-2 py-1 sm:p-0 rounded-lg">
            <Users size={14} />
            {jobDetails?.totalApplicants} Applicants
          </span>

          <span className="flex items-center gap-1 sm:gap-1.5 bg-gray-50 sm:bg-transparent px-2 py-1 sm:p-0 rounded-lg">
            <Eye size={14} />
            {jobDetails?.views} Views
          </span>

          <span className="flex items-center gap-1 sm:gap-1.5 bg-gray-50 sm:bg-transparent px-2 py-1 sm:p-0 rounded-lg">
            <Bookmark size={14} />
            {jobDetails?.saves} Saves
          </span>
        </div> */}

          {/* Application Email - Moved here since Apply button is at top */}
          {jobDetails?.applicationEmail && (
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 flex items-center gap-2 break-all border-t border-gray-100 pt-4">
              <Mail size={14} className="flex-shrink-0" />
              <span className="break-all">{jobDetails?.applicationEmail}</span>
            </div>
          )}
        </div>
      </div>
      <ApplyModal />
      <ApplicationSuccessModal />
      <Footer />
    </>
  );
};

export default JobDetailsCard;
