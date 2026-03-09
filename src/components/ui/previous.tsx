import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/propll-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveLink } from "@/features/commonProps";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeLink } = useSelector((state: RootState) => state.commonProps);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);

  //     // Update active link based on scroll position
  //     const sections = ["services", "about", "why-us", "contact"];
  //     const current = sections.find((section) => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         return rect.top <= 100 && rect.bottom >= 100;
  //       }
  //       return false;
  //     });

  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navLinks = [
    { name: "Home", href: "#home", path: "/" },
    { name: "Core Technologies", href: "#home", path: "/core-technologies" },
    { name: "Our Services", href: "#services", path: "/services" },
    { name: "About", href: "#about", path: "/about-us" },
    { name: "Why Us", href: "/why-us", path: "/why-us" },
    { name: "Contact", href: "#contact", path: "/contact-us" },
    { name: "Careers", href: "#careers", path: "/careers-at-propll" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A66C2] shadow-lg shadow-[#0A66C2]/30 backdrop-blur-sm"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top fade gradient when not scrolled */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      )}

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* <div className="relative">
              <div
                className={`absolute -inset-3 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isScrolled ? "bg-white/20" : "bg-[#0A66C2]/20"
                }`}
              />
              <div
                className={`relative w-10 h-10 overflow-hidden  flex items-center justify-center  ${
                  isScrolled ? "shadow-white/20" : "shadow-[#0A66C2]/25"
                }`}
              >
                <img src={logo} alt="" className="w-5 h-5 object-cover" />
              </div>
            </div> */}
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight ${
                  isScrolled ? "text-white" : "text-[#191919]"
                }`}
              >
                <strong
                  className={isScrolled ? "text-blue-500" : "text-blue-700"}
                >
                  P
                </strong>
                opll
              </span>
              <span
                className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${
                  isScrolled ? "text-white/80" : "text-[#666666]"
                }`}
              >
                .COM LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                onClick={() => dispatch(setActiveLink(link.name))}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeLink === link.name
                    ? isScrolled
                      ? "text-white bg-white/20"
                      : "text-[#0A66C2] bg-[#0A66C2]/10"
                    : isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/15"
                      : "text-[#666666] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <div
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full ${
                      isScrolled ? "bg-white" : "bg-[#0A66C2]"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block"></div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative p-2.5 rounded-lg hover:bg-[#0A66C2]/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-white" : "text-[#0A66C2]"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-white" : "text-[#0A66C2]"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden pt-2 pb-6 border-t ${
              isScrolled ? "border-white/20" : "border-[#0A66C2]/20"
            } animate-fade-up`}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-lg font-medium transition-all ${
                    activeLink === link.name
                      ? isScrolled
                        ? "text-white bg-white/20"
                        : "text-[#0A66C2] bg-[#0A66C2]/10"
                      : isScrolled
                        ? "text-white/90 hover:text-white hover:bg-white/15"
                        : "text-[#666666] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {activeLink === link.name && (
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isScrolled
                          ? "bg-white animate-pulse"
                          : "bg-[#0A66C2] animate-pulse"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
