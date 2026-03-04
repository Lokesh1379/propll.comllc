import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccesToken, setAdminDetails } from "../../../features/admin";
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
    email: "propll.ceo@propll.com",
    password: "Propll.ceo1@propll.com",
  });
  const { baseUrl } = useSelector((state: RootState) => state.commonProps);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
    console.log(`${baseUrl}/api/auth/login`);
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
        dispatch(setAdminDetails(response.data.admin));
        navigate("/admins");
      }
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.log(error);
      setError(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white flex-col justify-center items-center p-12 relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 border-4 border-white/20 rounded-full"
        />

        <h1 className="text-4xl font-bold mb-4 z-10">Admin Control Panel</h1>
        <p className="text-white/80 text-center max-w-sm z-10">
          Secure login to manage users, analytics and system settings.
        </p>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                placeholder="Password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-500 text-center"
              >
                {error}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Admin Panel
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
