import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiX, FiSave, FiEye, FiClock } from "react-icons/fi";
import { BsBriefcaseFill } from "react-icons/bs";
import JobPreviewModal from "./JobPostPreviewModal";
import { setPostingJob } from "@/features/jobs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPopUpMessage } from "@/features/commonProps";
import { RootState } from "@/store/store";
import { getAllJobsData } from "@/utils/jobsUtils";

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

const CreateJobPost = () => {
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const { accessToken, adminDetails } = useSelector(
    (state: RootState) => state.adminData,
  );
  const [showPreview, setShowPreview] = useState(false);
  const dispatch = useDispatch();
  const { postingJob } = useSelector((state: RootState) => state.jobData);
  const [form, setForm] = useState<JobPostForm>({
    companyName: "",
    title: "",
    description: "",
    employmentType: "",
    experienceLevel: "",
    workplaceType: "",
    skills: [],
    responsibilities: [],
    benefits: [],
    location: {
      country: "",
      state: "",
      city: "",
    },
    salary: {
      currency: "USD",
      min: "",
      max: "",
      isNegotiable: false,
    },
    applicationEmail: "",
    applicationUrl: "",
  });
  useEffect(() => {
    if (postingJob?.mode === "update" && postingJob.job) {
      const job = postingJob.job;
      setForm(job);
    }
  }, [postingJob]);

  const [isSaving, setIsSaving] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleNestedChange = (
    section: "location" | "salary",
    field: string,
    value: string | boolean,
  ) => {
    setForm({
      ...form,
      [section]: {
        ...form[section],
        [field]: value,
      },
    });
  };

  const handleArrayInput = (field: keyof JobPostForm, value: string) => {
    setForm({
      ...form,
      [field]: value.split(",").map((v) => v.trim()),
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { _id, name, email } = adminDetails || {};
    setIsSaving(true);

    try {
      let response;

      const payload =
        postingJob?.mode === "update"
          ? form
          : {
              ...form,
              postedBy: {
                _id,
                name,
                email,
              },
            };

      // 👉 If form has jobId, update. Otherwise create.
      if (postingJob?.mode === "update" && postingJob?.job?._id) {
        // UPDATE JOB
        response = await axios.put(
          `${baseUrl}/api/jobs/update-job/${postingJob?.job?._id}`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
      } else {
        // CREATE JOB
        response = await axios.post(`${baseUrl}/api/jobs/post-job`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }

      if (response.status === 200 || response.status === 201) {
        getAllJobsData(baseUrl, accessToken, dispatch);
        dispatch(
          setPopUpMessage({
            isOpen: true,
            message: postingJob?.job?._id
              ? "Job updated successfully!"
              : "Job posted successfully!",
            type: "success",
          }),
        );
        dispatch(setPostingJob({ isOpen: false, mode: "create", job: null }));
      }
    } catch (error) {
      console.error("Error saving job:", error);
      dispatch(
        setPopUpMessage({
          isOpen: true,
          message: postingJob?.job?._id
            ? "Failed to update job!"
            : "Failed to post job!",
          type: "error",
        }),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleWithdraw = () => {
    if (
      window.confirm(
        "Are you sure you want to withdraw? Any unsaved changes will be lost.",
      )
    ) {
      dispatch(setPostingJob({ isOpen: false, mode: "create", job: null }));
    }
  };

  const handleSaveDraft = () => {
    // Show toast or notification
    alert("Draft saved successfully!");
  };

  // Calculate form completion percentage
  const calculateCompletion = () => {
    let filled = 0;
    let total = 0;

    // Basic info
    if (form.companyName) filled++;
    if (form.title) filled++;
    if (form.description) filled++;
    total += 3;

    // Employment
    if (form.employmentType) filled++;
    if (form.experienceLevel) filled++;
    if (form.workplaceType) filled++;
    total += 3;

    // Skills
    if (form.skills?.length > 0) filled++;
    if (form?.responsibilities.length > 0) filled++;
    if (form.benefits.length > 0) filled++;
    total += 3;

    // Location
    if (form.location.country) filled++;
    if (form.location.state) filled++;
    if (form.location.city) filled++;
    total += 3;

    // Salary
    if (form.salary.min) filled++;
    if (form.salary.max) filled++;
    total += 2;

    // Application
    if (form.applicationEmail || form.applicationUrl) filled++;
    total += 1;

    return Math.round((filled / total) * 100);
  };

  const completionPercentage = calculateCompletion();

  return (
    <div className="min-h-screen bg-slate-50 lg:px-6">
      {/* Header */}
      <div className="sticky rounded-b-xl top-[73px] md:top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left side - Back button and title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  dispatch(
                    setPostingJob({ isOpen: false, mode: "create", job: null }),
                  )
                }
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-[#0a66c2]"
                title="Back to Jobs"
              >
                <FiArrowLeft size={20} />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#0a66c2]/10 flex items-center justify-center">
                  <BsBriefcaseFill size={18} className="text-[#0a66c2]" />
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-semibold text-slate-800">
                    Create New Job Post
                  </h1>
                  <p className="text-xs md:text-sm text-slate-500">
                    Fill in the details to publish a new job
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Completion Progress (Desktop) */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0a66c2] transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {completionPercentage}%
                </span>
              </div>

              <button
                onClick={() => setShowPreview(true)}
                className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-[#0a66c2] transition-colors text-sm"
              >
                <FiEye size={16} />
                <span className="hidden md:inline">Preview</span>
              </button>

              {/* Withdraw Job Post Button - Premium Gradient */}
              <button
                onClick={handleWithdraw}
                className="flex items-center gap-2 px-4 md:px-5 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base font-medium border border-white/20"
              >
                <FiX size={18} />
                <span className="hidden xs:inline">Withdraw</span>
                <span className="hidden sm:inline">Job Post</span>
              </button>
            </div>
          </div>

          {/* Mobile Progress Bar */}
          <div className="md:hidden py-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-500">Form Completion</span>
              <span className="text-xs font-medium text-[#0a66c2]">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0a66c2] transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <Section title="Basic Information">
            <Input
              name="companyName"
              label="Company Name"
              value={form.companyName}
              onChange={handleChange}
              required
            />
            <Input
              name="title"
              label="Job Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Textarea
              name="description"
              label="Job Description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </Section>

          {/* Employment */}
          <Section title="Employment Details">
            <Select
              name="employmentType"
              label="Employment Type"
              value={form.employmentType}
              onChange={handleChange}
              options={[
                "Full-time",
                "Part-time",
                "Contract",
                "Temporary",
                "Internship",
                "Volunteer",
              ]}
              required
            />
            <Select
              name="experienceLevel"
              label="Experience Level"
              value={form.experienceLevel}
              onChange={handleChange}
              options={[
                "Internship",
                "Entry level",
                "Associate",
                "Mid-Senior level",
                "Director",
                "Executive",
              ]}
              required
            />
            <Select
              name="workplaceType"
              label="Workplace Type"
              value={form.workplaceType}
              onChange={handleChange}
              options={["On-site", "Hybrid", "Remote"]}
              required
            />
          </Section>

          {/* Skills & Responsibilities */}
          <Section title="Skills & Responsibilities">
            <Input
              label="Skills (comma separated)"
              value={form.skills.join(", ")}
              onChange={(e) => handleArrayInput("skills", e.target.value)}
              placeholder="e.g. React, TypeScript, Node.js"
            />
            <Textarea
              name="responsibilities"
              label="Responsibilities (comma separated)"
              value={form.responsibilities.join(", ")}
              onChange={(e) =>
                handleArrayInput("responsibilities", e.target.value)
              }
              required
            />
            <Textarea
              name="benefits"
              label="Benefits (comma separated)"
              value={form.benefits.join(", ")}
              onChange={(e) => handleArrayInput("benefits", e.target.value)}
              required
            />
          </Section>

          {/* Location */}
          <Section title="Location">
            <Input
              label="Country"
              value={form.location.country}
              onChange={(e) =>
                handleNestedChange("location", "country", e.target.value)
              }
              placeholder="e.g. United States"
            />
            <Input
              label="State"
              value={form.location.state}
              onChange={(e) =>
                handleNestedChange("location", "state", e.target.value)
              }
              placeholder="e.g. California"
            />
            <Input
              label="City"
              value={form.location.city}
              onChange={(e) =>
                handleNestedChange("location", "city", e.target.value)
              }
              placeholder="e.g. San Francisco"
            />
          </Section>

          {/* Salary */}
          <Section title="Salary">
            <Input
              label="Currency"
              value={form.salary.currency}
              onChange={(e) =>
                handleNestedChange("salary", "currency", e.target.value)
              }
              placeholder="USD/EUR/GBP"
            />
            <Input
              label="Minimum Salary"
              value={form.salary.min}
              onChange={(e) =>
                handleNestedChange("salary", "min", e.target.value)
              }
              placeholder="e.g. 50000"
              type="number"
            />
            <Input
              label="Maximum Salary"
              value={form.salary.max}
              onChange={(e) =>
                handleNestedChange("salary", "max", e.target.value)
              }
              placeholder="e.g. 80000"
              type="number"
            />

            <div className="flex items-center gap-2 md:col-span-2">
              <input
                type="checkbox"
                id="negotiable"
                checked={form.salary.isNegotiable}
                onChange={(e) =>
                  handleNestedChange("salary", "isNegotiable", e.target.checked)
                }
                className="w-4 h-4 text-[#0a66c2] border-slate-300 rounded focus:ring-[#0a66c2]"
              />
              <label htmlFor="negotiable" className="text-sm text-slate-600">
                Salary is negotiable
              </label>
            </div>
          </Section>

          {/* Application */}
          <Section title="Application Details">
            <Input
              name="applicationEmail"
              label="Application Email"
              value={form.applicationEmail}
              onChange={handleChange}
              type="email"
              placeholder="hr@company.com"
            />
            <Input
              name="applicationUrl"
              label="Application URL"
              value={form.applicationUrl}
              onChange={handleChange}
              type="url"
              placeholder="https://company.com/careers"
            />
            <p className="text-xs text-slate-400 md:col-span-2">
              Provide either an email or a URL for applications
            </p>
          </Section>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            {/* Mobile action buttons */}
            <div className="flex gap-2 sm:hidden">
              {/* <button
                type="button"
                onClick={handleSaveDraft}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <FiSave size={16} />
                <span>Draft</span>
              </button> */}
              <button
                type="button"
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <FiEye size={16} />
                <span>Preview</span>
              </button>
            </div>

            {/* Desktop publish button */}
            <div className="w-full flex justify-end place-items-center p-2 mb-3">
              <button
                type="submit"
                disabled={isSaving}
                className="bg-gradient-to-r from-[#0a66c2] to-[#003e6b] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#0a55a8] hover:to-[#003055] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>
                      {postingJob?.mode === "update"
                        ? "Updating..."
                        : "Publishing..."}
                    </span>
                  </>
                ) : (
                  <>
                    <BsBriefcaseFill size={18} />
                    <span>
                      {postingJob?.mode === "update"
                        ? "Update Job"
                        : "Publish Job"}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <JobPreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        jobData={form} // Pass your actual form data
      />
    </div>
  );
};

/* ---------- Reusable UI Components ---------- */

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl border border-slate-200 p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
      <span className="w-1 h-5 bg-[#0a66c2] rounded-full" />
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Input = ({
  label,
  required,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-slate-600">
      {label}
      {required && <span className="text-rose-500 ml-1">*</span>}
    </label>
    <input
      {...props}
      className="border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 transition-all"
    />
  </div>
);

const Textarea = ({
  label,
  required,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1 md:col-span-2">
    <label className="text-sm font-medium text-slate-600">
      {label}
      {required && <span className="text-rose-500 ml-1">*</span>}
    </label>
    <textarea
      {...props}
      rows={4}
      className="border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 transition-all"
    />
  </div>
);

const Select = ({
  label,
  options,
  required,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-slate-600">
      {label}
      {required && <span className="text-rose-500 ml-1">*</span>}
    </label>
    <select
      {...props}
      className="border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 transition-all"
    >
      <option value="">Select {label}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export default CreateJobPost;
