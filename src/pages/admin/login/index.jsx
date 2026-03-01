import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ShieldCheck, Lock, Mail } from "lucide-react";
import "./styels.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccesToken, setAdminDetails } from "../../../features/admin";
const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "propll.ceo@propll.com",
    password: "Propll.ceo1@propll.com",
  });
  const navigateTo = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form default submission

    // Data to be sent (matching your required format)
    const loginData = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",

        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.data.token) {
        dispatch(setAccesToken(response.data.token));
        navigateTo("/admins");
        dispatch(setAdminDetails(response.data.admin));
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <div className="admin_login flex justify-center place-items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-[500px] px-6"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500 shadow-lg mb-4">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Admin Portal
            </h2>
            <p className="text-sm text-blue-200/80 mt-1">Propll Enterprises</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="space-y-2 mb-2">
              <label className="text-xs text-blue-200 flex items-center gap-2">
                <Mail size={14} /> Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="superadmin@example.com"
                  className="w-full px-4 py-2.5 bg-white/20 border rounded-xl text-sm placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 mb-2">
              <label className="text-xs text-blue-200 flex items-center gap-2">
                <Lock size={14} /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-white/20 border rounded-lg text-sm placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200 hover:transition"
                >
                  {showPassword ? (
                    <span className="text-xs text-blue-500 font-bold">
                      Hide
                    </span>
                  ) : (
                    <span className="text-xs text-blue-500 font-bold">
                      Show
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-end my-2 text-xs">
              <button type="button" className="text-blue-300 hover:transition">
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-blue-500 hover:from-blue-600 hover:to-cyan-600 font-medium shadow-lg shadow-blue-500/20 transition-all duration-200 text-white"
            >
              Sign In Securely
            </motion.button>

            {/* Footer */}
            <div className="text-center pt-5 mt-2 border-t border-white/10">
              <p className="text-xs text-blue-200/50">
                © {new Date().getFullYear()} Propll Enterprises
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
