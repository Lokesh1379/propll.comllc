import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsBriefcaseFill,
  BsPersonBadgeFill,
  BsChevronLeft,
  BsX,
} from "react-icons/bs";
import { FiLogOut, FiMenu } from "react-icons/fi";

import logo from "@/assets/propll-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminTab } from "@/features/commonProps";
import { RootState } from "@/store/store";
import { setAdminWantToLogout } from "@/features/admin";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Admins", icon: <BsPersonBadgeFill size={15} />, path: "/admins" },
  { label: "Jobs", icon: <BsBriefcaseFill size={15} />, path: "/jobs" },
];

const Sidebar = () => {
  const { adminTab } = useSelector((state: RootState) => state.commonProps);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
        setIsMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isMobileOpen) {
        const sidebar = document.getElementById("mobile-sidebar");
        const menuButton = document.getElementById("menu-button");

        if (
          sidebar &&
          !sidebar.contains(e.target as Node) &&
          menuButton &&
          !menuButton.contains(e.target as Node)
        ) {
          setIsMobileOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isMobileOpen]);

  const handleTabs = (tab: NavItem) => {
    dispatch(setAdminTab(tab.label));
    navigate(tab.path);
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(setAdminWantToLogout(true));
    // navigate("/login");
  };

  // Mobile Menu Button
  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-sm z-30">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                id="menu-button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <FiMenu size={24} className="text-slate-600" />
              </button>

              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Propll Logo"
                  className="w-10 h-10 shadow-lg rounded-lg object-cover"
                />
                <span className="font-bold text-lg text-[#0a66c2]">Propll</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2] font-semibold text-sm">
                A
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />

              <motion.aside
                id="mobile-sidebar"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 flex flex-col"
              >
                {/* Mobile Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt="Propll Logo"
                      className="w-8 h-8 shadow-lg rounded-lg object-cover"
                    />
                    <span className="font-bold text-lg text-[#0a66c2]">
                      Propll
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <BsX size={20} className="text-slate-500" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 p-4">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <MobileSidebarItem
                        key={item.label}
                        item={item}
                        isActive={adminTab === item.label}
                        onClick={() => handleTabs(item)}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Profile */}
                <div className="border-t border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2] font-semibold">
                        A
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-800">
                          Admin Name
                        </span>
                        <span className="text-xs text-slate-500">
                          Super Admin
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="Logout"
                    >
                      <FiLogOut size={18} />
                    </button>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main content padding for mobile header */}
        <div className="pt-20" />
      </>
    );
  }

  // Desktop Sidebar
  return (
    <motion.aside
      animate={{ width: isOpen ? 260 : 80 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className="h-screen bg-white border-r border-slate-200 shadow-xl flex flex-col justify-between relative"
    >
      {/* Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-8 bg-white border border-slate-200 text-slate-500 hover:text-[#0a66c2] p-1.5 rounded-full shadow-md transition-colors z-10"
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <BsChevronLeft size={14} />
        </motion.div>
      </button>

      {/* Top Section */}
      <div className="flex flex-col gap-8 p-4">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 h-10">
          <img
            src={logo}
            alt="Propll Logo"
            className="w-10 h-10 shadow-lg rounded-lg object-cover"
          />
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-bold text-xl tracking-tight text-[#0a66c2]"
              >
                Propll
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              isOpen={isOpen}
              isActive={adminTab === item.label}
              onClick={() => handleTabs(item)}
            />
          ))}
        </div>
      </div>

      {/* Admin Profile Section */}
      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#0a66c2]/10 flex items-center justify-center text-[#0a66c2] font-semibold flex-shrink-0">
              A
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col min-w-0"
                >
                  <span className="text-sm font-semibold text-slate-800 truncate">
                    Admin Name
                  </span>
                  <span className="text-xs text-slate-500 truncate">
                    Super Admin
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Logout Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`text-slate-500 hover:text-red-500 transition-colors flex-shrink-0 ${
              !isOpen ? "ml-auto" : ""
            }`}
            onClick={handleLogout}
            aria-label="Logout"
          >
            <FiLogOut size={18} />
          </motion.button>
        </div>
      </div>
    </motion.aside>
  );
};

// Desktop Sidebar Item
const SidebarItem = ({
  item,
  isOpen,
  isActive,
  onClick,
}: {
  item: NavItem;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className="relative cursor-pointer">
      {isActive && (
        <motion.div
          layoutId="active-bg"
          className="absolute inset-0 bg-[#0a66c2]/10 rounded-lg"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`relative z-10 flex items-center gap-4 p-3 rounded-lg
          transition-colors duration-200
          ${isActive ? "text-[#0a66c2]" : "hover:bg-slate-100 text-slate-600"}
        `}
      >
        <span className="text-xl">{item.icon}</span>

        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="font-medium text-sm whitespace-nowrap"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Mobile Sidebar Item
const MobileSidebarItem = ({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
        ${
          isActive
            ? "bg-[#0a66c2]/10 text-[#0a66c2]"
            : "hover:bg-slate-100 text-slate-600"
        }
      `}
    >
      <span className="text-lg">{item.icon}</span>
      <span className="font-medium text-sm">{item.label}</span>
    </motion.div>
  );
};

export default Sidebar;
