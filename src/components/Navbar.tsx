import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActiveLink } from "@/features/commonProps";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const dispatch = useDispatch();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const { activeLink } = useSelector((state: RootState) => state.commonProps);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Core Technologies", path: "/core-technologies" },
    { name: "Our Services", path: "/services" },
    { name: "About", path: "/about-us" },
    // { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact-us" },
    { name: "Carrers", path: "/carrers-at-propll" },
  ];

  /* =========================
     Scroll Effect
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     Set Active Link on Route Change
  ========================== */
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find((link) => link.path === currentPath);

    if (currentLink) {
      dispatch(setActiveLink(currentLink.name));
    }
  }, [location.pathname]);

  /* =========================
     Update Underline Position
  ========================== */
  const updateUnderlinePosition = (linkName: string) => {
    if (!navRef.current) return;

    const activeElement = navRef.current.querySelector(
      `[data-link="${linkName}"]`,
    ) as HTMLElement;

    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;

      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  };

  /* =========================
     Animate Underline on Active Change
  ========================== */
  useEffect(() => {
    updateUnderlinePosition(activeLink);

    const handleResize = () => {
      updateUnderlinePosition(activeLink);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeLink]);

  /* =========================
     Handle Click
  ========================== */
  const handleLinkClick = (linkName: string) => {
    dispatch(setActiveLink(linkName));
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A66C2] shadow-lg shadow-[#0A66C2]/30 backdrop-blur-sm"
          : "bg-white shadow-sm"
      }`}
    >
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      )}

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => handleLinkClick("Home")}
          >
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
                ropll
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

          {/* Desktop Nav */}
          <div
            className="hidden md:flex items-center gap-1 relative"
            ref={navRef}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                data-link={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.name)}
                className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeLink === link.name
                    ? isScrolled
                      ? "text-white"
                      : "text-[#0A66C2]"
                    : isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/15"
                      : "text-[#666666] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Animated Underline */}
            <div
              className={`absolute -bottom-1 h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isScrolled ? "bg-white" : "bg-[#0A66C2]"
              }`}
              style={{
                width: underlineStyle.width,
                left: underlineStyle.left,
                opacity: underlineStyle.width ? 1 : 0,
              }}
            />
          </div>

          {/* Mobile Toggle */}
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
            }`}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.name)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-lg font-medium transition-all ${
                    activeLink === link.name
                      ? isScrolled
                        ? "text-white bg-white/20"
                        : "text-[#0A66C2] bg-[#0A66C2]/10"
                      : isScrolled
                        ? "text-white/90 hover:text-white hover:bg-white/15"
                        : "text-[#666666] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5"
                  }`}
                >
                  <span>{link.name}</span>

                  {activeLink === link.name && (
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isScrolled ? "bg-white" : "bg-[#0A66C2]"
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
