import { useNavigate } from "react-router-dom";
import { FaLock, FaArrowLeft, FaHome } from "react-icons/fa";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-60"></div>

        {/* Main card */}
        <div className="relative bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 md:p-12 shadow-xl">
          {/* Icon with blue gradient */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30">
              <FaLock className="text-white text-4xl" />
            </div>
          </div>

          {/* Error code */}
          <div className="text-center mb-6">
            <span className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              403
            </span>
          </div>

          {/* Text content */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
            Access Forbidden
          </h2>

          <p className="text-gray-600 text-center mb-8">
            Sorry, you don't have permission to access this page.
            <br />
            <span className="text-gray-500 text-sm mt-2 block">
              If you think this is a mistake, please contact support.
            </span>
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-md shadow-blue-500/30"
            >
              <FaArrowLeft className="text-sm" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
