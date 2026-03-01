import React, { useState, useMemo, useEffect } from "react";
import { FiPlus, FiSearch, FiX, FiTrash2, FiShield } from "react-icons/fi";
import { BsPersonBadgeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCreatingAdmin } from "@/features/admin";

interface Admin {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AdminCardsProps {
  admins: Admin[];
  onDelete: (adminData: Admin) => void;
}

const AdminCards: React.FC<AdminCardsProps> = ({ admins, onDelete }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [adminList, setAdminList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setAdminList(admins);
  }, [admins]);
  // Filter admins based on search query
  const filteredAdmins = useMemo(() => {
    return adminList.filter((admin) => {
      // Search filter (name, email)
      const matchesSearch =
        searchQuery.toLowerCase() === "" ||
        admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [adminList, searchQuery]);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 md:p-6">
        {/* Mobile: Search Overlay */}
        {showMobileSearch && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1">
                <FiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <FiX
                      size={16}
                      className="text-slate-400 hover:text-slate-600"
                    />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowMobileSearch(false)}
                className="p-3 hover:bg-slate-100 rounded-lg"
              >
                <FiX size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="text-sm text-slate-500 text-center py-4">
              {filteredAdmins.length} results found
            </div>
          </div>
        )}

        {/* Main Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left side - Title and icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0a66c2]/10 flex items-center justify-center flex-shrink-0">
              <BsPersonBadgeFill
                size={20}
                className="text-[#0a66c2] md:w-6 md:h-6"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
                Admins
              </h1>
              <p className="text-xs md:text-sm text-slate-500">
                Total{" "}
                <span className="font-medium text-[#0a66c2]">
                  {adminList.length} admins
                </span>{" "}
                <span className="hidden sm:inline">managing the platform</span>
              </p>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop Search with clear button */}
            <div className="hidden md:block relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-8 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#0a66c2] focus:ring-1 focus:ring-[#0a66c2]/20 w-48 lg:w-64"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full"
                >
                  <FiX size={14} className="text-slate-400" />
                </button>
              )}
            </div>

            {/* Mobile Search Button with indicator */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="md:hidden p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 relative"
            >
              <FiSearch size={18} />
              {searchQuery && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#0a66c2] rounded-full" />
              )}
            </button>

            {/* Add Admin Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => dispatch(setCreatingAdmin(true))}
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0a66c2] text-white font-medium text-sm md:text-base transition-all duration-300"
            >
              {/* Soft Glow Background */}
              <span className="absolute inset-0 rounded-md bg-[#0a66c2] opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></span>

              <FiPlus
                size={18}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
              <span className="text-sm">Add Admin</span>
            </motion.button>
          </div>
        </div>

        {/* Search results info - visible when searching */}
        {searchQuery && (
          <div className="mt-3 text-sm text-slate-500">
            Found{" "}
            <span className="font-medium text-[#0a66c2]">
              {filteredAdmins.length}
            </span>{" "}
            results for "{searchQuery}"
          </div>
        )}
      </div>

      {/* Admin Cards Grid - Show filtered results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {filteredAdmins.length > 0 ? (
          filteredAdmins.map((admin) => (
            <AdminCard
              key={admin._id}
              admin={admin}
              onDelete={() => onDelete(admin)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-slate-400 mb-2 text-4xl">👥</div>
            <div className="text-slate-400 mb-2">No admins found</div>
            <p className="text-sm text-slate-500">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Admin Card Component with delete icon and role badge
const AdminCard = ({
  admin,
  onDelete,
}: {
  admin: Admin;
  onDelete: () => void;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Format date if needed
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "superadmin":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "admin":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow group relative">
      {/* Delete Icon - Appears on hover */}
      <button
        onClick={onDelete}
        className="absolute top-3 right-3 p-2 bg-white border border-slate-200 rounded-lg opacity-0 group-hover:opacity-100 hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm z-10"
        title="Delete admin"
      >
        <FiTrash2 size={16} />
      </button>

      <div className="flex items-start gap-2 md:gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#0a66c2] to-blue-400 text-white flex items-center justify-center font-semibold text-sm md:text-lg flex-shrink-0">
          {getInitials(admin.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-slate-800 text-sm md:text-base truncate">
              {admin.name}
            </h3>
            {/* Role Badge */}
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(admin.role)}`}
            >
              <FiShield size={10} />
              {admin.role === "superadmin" ? "Super Admin" : "Admin"}
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-500 truncate">
            {admin.email}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Joined {formatDate(admin.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS file to hide scrollbar
const style = document.createElement("style");
style.textContent = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default AdminCards;
