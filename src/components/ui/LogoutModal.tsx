import {
  resetAdminState,
  setAccesToken,
  setAdminWantToLogout,
  setIsAdminLoggedIn,
} from "@/features/admin";
import { RootState } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { adminWantToLogout } = useSelector(
    (state: RootState) => state.adminData,
  );
  const handleCancel = () => {
    dispatch(setAdminWantToLogout(false));
  };
  const handleConfirmLogout = () => {
    dispatch(setAdminWantToLogout(false));
    dispatch(setIsAdminLoggedIn(false));
    dispatch(resetAdminState());
    dispatch(setAccesToken(""));
    navigateTo("/admin", { replace: true });
  };
  return (
    <AnimatePresence>
      {adminWantToLogout && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancel}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 relative">
              {/* Close */}
              <button
                onClick={handleCancel}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
                  <LogOut className="text-red-600" size={28} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
                Confirm Logout
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                Are you sure you want to log out of your account?
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="w-1/2 py-2 rounded-xl border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleConfirmLogout}
                  disabled={isLoading}
                  className="w-1/2 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-70"
                >
                  {isLoading ? "Logging out..." : "Logout"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
