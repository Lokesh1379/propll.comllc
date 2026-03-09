import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccesToken,
  setAdminDetails,
  setIsAdminLoggedIn,
} from "../../../features/admin";
import { RootState } from "@/store/store";

/* -------------------- Types -------------------- */

interface LoginFormData {
  email: string;
  password: string;
}

interface AdminDetails {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  token: string;
  admin: AdminDetails;
}

const AdminLogin: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* -------------------- Handlers -------------------- */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post<LoginResponse>(
        `${baseUrl}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.data.token) {
        dispatch(setAccesToken(response.data.token));
        dispatch(setIsAdminLoggedIn(true));
        dispatch(setAdminDetails(response.data.admin));
        navigate("/admins");
      }
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.log(error.response);
      setError(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-slate-100">
      {/* LEFT SIDE - Enhanced with modern design */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white flex-col justify-center items-center p-12 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-8"
          >
            <Shield size={80} className="text-white/90" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">Admin Control</h1>
          <p className="text-white/80 text-lg max-w-sm mx-auto mb-8">
            Secure access to manage your platform with confidence
          </p>

          <div className="flex gap-4 justify-center">
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE - Enhanced login form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-500">
                Please enter your credentials to access the admin panel
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-1"
              >
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/50"
                    placeholder="admin@example.com"
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-1"
              >
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-12 py-3.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all bg-white/50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </motion.div> */}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Authenticating...
                  </>
                ) : (
                  "Sign In to Dashboard"
                )}
              </motion.button>
            </form>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-center text-xs text-gray-400"
          >
            © {new Date().getFullYear()} Admin Panel. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
