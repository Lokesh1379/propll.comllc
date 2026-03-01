import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiX,
  FiShield,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setCreatingAdmin } from "@/features/admin";
import axios from "axios";
import { setPopUpMessage } from "@/features/commonProps";
import { getAllAdmins } from "@/utils/adminUtils";

interface AdminFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const CreateAdminModal = () => {
  const { creatingAdmin, accessToken } = useSelector(
    (state: RootState) => state.adminData,
  );
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    email: "",
    password: "",
    role: "admin", // Default role
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // Format the data according to API requirements
    const adminData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/api/admin/create`,
        adminData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 201) {
        dispatch(
          setPopUpMessage({
            isOpen: true,
            type: "success",
            message: "Admin created successfully!",
          }),
        );
        getAllAdmins(baseUrl, accessToken, dispatch);
        // Handle successful admin creation
        // You might want to show a success message or refresh the admin list
        dispatch(setCreatingAdmin(false));
        setFormData({
          name: "",
          email: "",
          password: "",
          role: "admin",
        });
        // Optional: Show success toast/message
      }
    } catch (err: any) {
      console.error("Error creating admin:", err);

      // Handle different types of errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(
          err.response.data.message ||
            "Failed to create admin. Please try again.",
        );
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response from server. Please check your connection.");
        console.error("No response received:", err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error setting up request. Please try again.");
        console.error("Error setting up request:", err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    dispatch(setCreatingAdmin(false));
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "admin",
    });
    setError(null);
    setShowPassword(false);
  };

  return (
    <AnimatePresence>
      {creatingAdmin && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
              {/* Header with gradient line */}
              <div className="relative">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                <div className="px-8 pt-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                        Create admin
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Add a new member to your team
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
                    >
                      <FiX size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <div className="space-y-4">
                  <InputField
                    icon={<FiUser size={16} />}
                    placeholder="Full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputField
                    icon={<FiMail size={16} />}
                    placeholder="Email address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="relative">
                    <InputField
                      icon={<FiLock size={16} />}
                      placeholder="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <FiEyeOff size={16} />
                      ) : (
                        <FiEye size={16} />
                      )}
                    </button>
                  </div>

                  {/* Role Selection */}
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <FiShield size={16} />
                    </span>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full pl-9 pr-3 py-3 text-sm bg-transparent border-b border-gray-200 dark:border-zinc-800 focus:border-b-2 focus:border-blue-500 outline-none transition-all dark:text-gray-200 appearance-none cursor-pointer"
                    >
                      <option value="admin" className="dark:bg-zinc-900">
                        Admin
                      </option>
                      <option value="superadmin" className="dark:bg-zinc-900">
                        Super Admin
                      </option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Error message display */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  </motion.div>
                )}

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isLoading}
                    className="flex-1 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-xl transition-all disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isLoading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.password ||
                      !formData.role
                    }
                    className="flex-1 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98] flex items-center justify-center"
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    ) : (
                      "Create admin"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface InputProps {
  icon: React.ReactNode;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField = ({
  icon,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <span
        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
          isFocused ? "text-blue-500" : "text-gray-400"
        }`}
      >
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        className="w-full pl-9 pr-3 py-3 text-sm bg-transparent border-b border-gray-200 dark:border-zinc-800 focus:border-b-2 focus:border-blue-500 outline-none transition-all dark:text-gray-200 placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CreateAdminModal;
