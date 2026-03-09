import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setApplied, setApplyJob } from "@/features/commonProps";
import {
  Send,
  X,
  Upload,
  Loader,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
} from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  resume?: string;
}

const ApplyModal: React.FC = () => {
  const dispatch = useDispatch();
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const { applyJob } = useSelector((state: RootState) => state.commonProps);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onClose = () => {
    dispatch(
      setApplyJob({
        isApplyingJob: false,
        jobData: null,
      }),
    );
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTouched({});
    setResume(null);
    setFileName("");
    setUploadProgress(0);
    setSubmitStatus("idle");
  };

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s]*$/.test(name))
      return "Name can only contain letters and spaces";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email) return "Email address is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "Phone number is required";
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone))
      return "Please enter a valid 10-digit phone number";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Please tell us why you're interested";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    if (message.trim().length > 500)
      return "Message must be less than 500 characters";
    return undefined;
  };

  const validateResume = (file: File | null): string | undefined => {
    if (!file) return "Resume is required";

    // Check file type
    const allowedTypes = ["application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return "Only PDF files are allowed";
    }

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return "File size must be less than 5MB";
    }

    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
      resume: validateResume(resume),
    };

    // Remove undefined values
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key as keyof FormErrors] === undefined) {
        delete newErrors[key as keyof FormErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate field on blur
    let error;
    switch (field) {
      case "name":
        error = validateName(formData.name);
        break;
      case "email":
        error = validateEmail(formData.email);
        break;
      case "phone":
        error = validatePhone(formData.phone);
        break;
      case "message":
        error = validateMessage(formData.message);
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Special handling for phone to only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field while typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const resumeError = validateResume(file);
      if (resumeError) {
        setErrors((prev) => ({ ...prev, resume: resumeError }));
        setResume(null);
        setFileName("");
      } else {
        setErrors((prev) => ({ ...prev, resume: undefined }));
        setResume(file);
        setFileName(file.name);

        // Simulate upload progress
        setUploadProgress(0);
        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 10;
          });
        }, 100);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        return { ...acc, [key]: true };
      },
      { resume: true },
    );
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setSubmitStatus("idle");

      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim().toLowerCase());
      data.append("phone", formData.phone);
      data.append("message", formData.message.trim());
      data.append("resume", resume!);
      data.append("jobId", applyJob?.jobData?.id || "");

      const response = await axios.post(`${baseUrl}/api/job/apply`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadProgress(percentCompleted);
          }
        },
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        dispatch(setApplied(true));

        // Close modal after success with delay
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      console.log(error.response);
      setSubmitStatus("error");
      setErrors((prev) => ({
        ...prev,
        submit: "Submission failed. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  // Get field error and touched state
  const getFieldError = (fieldName: string) => {
    return touched[fieldName]
      ? errors[fieldName as keyof FormErrors]
      : undefined;
  };

  return (
    <AnimatePresence>
      {applyJob?.isApplyingJob && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full max-w-lg max-h-[95%] shadow-2xl relative overflow-y-auto"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Job Info */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Apply for Position
                    </h2>
                    <p className="text-sm text-blue-100">
                      {applyJob?.jobData?.title || "Position"} •{" "}
                      {applyJob?.jobData?.companyName || "Company"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all hover:rotate-90 duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-green-50 px-6 py-4 border-b border-green-100"
                >
                  <div className="flex items-center gap-3 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">
                      Application submitted successfully! Redirecting...
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm
                      ${
                        getFieldError("name")
                          ? "border-red-300 focus:ring-red-200 focus:border-red-500"
                          : touched.name && !errors.name
                            ? "border-green-300 focus:ring-green-200 focus:border-green-500"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                    disabled={loading || submitStatus === "success"}
                  />
                  {touched.name && !errors.name && formData.name && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                </div>
                <AnimatePresence>
                  {getFieldError("name") && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {getFieldError("name")}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm
                      ${
                        getFieldError("email")
                          ? "border-red-300 focus:ring-red-200 focus:border-red-500"
                          : touched.email && !errors.email
                            ? "border-green-300 focus:ring-green-200 focus:border-green-500"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                    disabled={loading || submitStatus === "success"}
                  />
                  {touched.email && !errors.email && formData.email && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                </div>
                <AnimatePresence>
                  {getFieldError("email") && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {getFieldError("email")}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="1234567890"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm
                      ${
                        getFieldError("phone")
                          ? "border-red-300 focus:ring-red-200 focus:border-red-500"
                          : touched.phone && !errors.phone
                            ? "border-green-300 focus:ring-green-200 focus:border-green-500"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                    disabled={loading || submitStatus === "success"}
                  />
                  {touched.phone &&
                    !errors.phone &&
                    formData.phone.length === 10 && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                    )}
                </div>
                <AnimatePresence>
                  {getFieldError("phone") && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {getFieldError("phone")}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  Why are you interested?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us why you're the perfect fit for this role..."
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm resize-none
                      ${
                        getFieldError("message")
                          ? "border-red-300 focus:ring-red-200 focus:border-red-500"
                          : touched.message && !errors.message
                            ? "border-green-300 focus:ring-green-200 focus:border-green-500"
                            : "border-gray-200 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                    disabled={loading || submitStatus === "success"}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                    {formData.message.length}/500
                  </div>
                </div>
                <AnimatePresence>
                  {getFieldError("message") && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {getFieldError("message")}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* File Upload */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  Resume (PDF) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                    disabled={loading || submitStatus === "success"}
                  />
                  <label
                    htmlFor="resume-upload"
                    className={`flex items-center gap-3 p-3 border-2 border-dashed rounded-xl cursor-pointer transition-all text-sm
                      ${
                        errors.resume && touched.resume
                          ? "border-red-300 bg-red-50"
                          : fileName
                            ? "border-green-300 bg-green-50"
                            : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                  >
                    <Upload
                      className={`w-5 h-5 ${
                        errors.resume && touched.resume
                          ? "text-red-500"
                          : fileName
                            ? "text-green-600"
                            : "text-gray-400"
                      }`}
                    />
                    <span className="flex-1 truncate text-gray-600">
                      {fileName || "Click to upload resume (PDF only, max 5MB)"}
                    </span>
                  </label>
                </div>

                {/* Upload Progress */}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="mt-2">
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Uploading: {uploadProgress}%
                    </p>
                  </div>
                )}

                <AnimatePresence>
                  {errors.resume && touched.resume && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 flex items-center gap-1 mt-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.resume}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Error */}
              <AnimatePresence>
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-3"
                  >
                    <p className="text-xs text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.submit}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all hover:border-gray-300"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || submitStatus === "success"}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>

              {/* Required Fields Note */}
              <p className="text-xs text-gray-400 text-center">
                <span className="text-red-500">*</span> Required fields
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
