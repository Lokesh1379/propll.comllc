import { setPopUpMessage } from "@/features/commonProps";
import { RootState } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToastPopup = () => {
  const dispatch = useDispatch();
  const { popUpMessage } = useSelector((state: RootState) => state.commonProps);

  useEffect(() => {
    if (!popUpMessage?.isOpen) return;

    const timer = setTimeout(() => {
      dispatch(
        setPopUpMessage({
          isOpen: false,
          type: "success",
          message: "",
        }),
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [popUpMessage?.isOpen, dispatch]);

  const handleClose = () => {
    dispatch(
      setPopUpMessage({
        isOpen: false,
        type: "success",
        message: "",
      }),
    );
  };

  const isSuccess = popUpMessage?.type === "success";

  return (
    <AnimatePresence>
      {popUpMessage?.isOpen && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <div
            className={`flex items-start gap-3 min-w-[280px] max-w-sm p-4 rounded-xl shadow-xl text-white
              ${isSuccess ? "bg-emerald-600" : "bg-red-600"}`}
          >
            {/* Icon */}
            <div className="mt-0.5">
              {isSuccess ? (
                <CheckCircle2 size={22} />
              ) : (
                <AlertCircle size={22} />
              )}
            </div>

            {/* Message */}
            <div className="flex-1 text-sm font-medium">
              {popUpMessage?.message}
            </div>

            {/* Close */}
            <button
              onClick={handleClose}
              className="opacity-80 hover:opacity-100 transition"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastPopup;
