import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Search, MessageSquare, Instagram, Facebook, Youtube, Car, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/citizen_travels_logo_1784098450742.jpg";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Vehicles", path: "/fleet" },
    { name: "Tour Packages", path: "/tour-packages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Book My Ride", path: "/book-my-ride" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/fleet?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Topmost Dark Navy Utility Strip */}
        <div className="bg-[#0b1329] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 font-medium">
            {/* Left Info: Phone & Mail */}
            <div className="flex items-center gap-3 sm:gap-5 min-w-0">
              <a
                href="tel:+919724002200"
                className="flex items-center gap-1.5 text-slate-200 hover:text-orange-400 transition-colors whitespace-nowrap text-[11px] sm:text-xs"
              >
                <Phone size={12} className="text-orange-400 shrink-0" />
                <span>+91 97240 02200</span>
              </a>
              <a
                href="mailto:citizentoursandtravels07@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors whitespace-nowrap text-xs"
              >
                <Mail size={12} className="text-orange-400 shrink-0" />
                <span className="truncate max-w-[180px] md:max-w-none">citizentoursandtravels07@gmail.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-1.5 text-slate-300 whitespace-nowrap text-xs">
                <MapPin size={12} className="text-orange-400 shrink-0" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            {/* Right Info: Google Rating */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto text-slate-300">
              <div className="flex items-center gap-1 bg-slate-800/90 px-2 py-0.5 rounded-full border border-slate-700/60 whitespace-nowrap text-[10px] sm:text-xs">
                <span className="font-bold text-white hidden xs:inline">Google</span>
                <span className="font-extrabold text-amber-400">4.9</span>
                <div className="flex text-amber-400">
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1.5 text-slate-200 whitespace-nowrap text-xs">
                <Clock size={12} className="text-orange-400 shrink-0" />
                <span>24x7 Support</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-700">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="Instagram">
                  <Instagram size={12} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="Facebook">
                  <Facebook size={12} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="YouTube">
                  <Youtube size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar Row */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-slate-200"
              : "bg-white py-2 sm:py-3 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Logo & Brand Title */}
              <Link
                to="/"
                onClick={handleNavClick}
                className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
              >
                <div className="relative shrink-0">
                  <img
                    src={logoImg}
                    alt="Citizen Tours and Travels Logo"
                    loading="eager"
                    width={38}
                    height={38}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl object-cover shadow-xs border border-slate-200 bg-white group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-black text-navy-950 text-xs sm:text-base tracking-tight uppercase leading-none">
                      CITIZEN
                    </span>
                    <span className="font-display font-black text-orange-600 text-xs sm:text-base tracking-tight uppercase leading-none">
                      TOURS
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5 leading-none">
                    TOURS & TRAVELS PVT. LTD.
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links (Visible on >= 768px) */}
              <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `text-[11px] lg:text-xs font-bold transition-colors duration-200 uppercase tracking-wider relative py-1 whitespace-nowrap ${
                        isActive
                          ? "text-orange-600 font-black"
                          : "text-slate-800 hover:text-orange-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.span
                            layoutId="activeNavUnderline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Right Side Actions Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                {/* Search Icon Circle */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Search"
                >
                  <Search size={15} />
                </button>

                {/* Book My Ride CTA Button (Desktop) */}
                <Link
                  to="/book-my-ride"
                  onClick={handleNavClick}
                  className="hidden sm:flex bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <Car size={14} />
                  <span>Book My Ride</span>
                </Link>

                {/* Book My Ride CTA Button (Compact Mobile - Fits screen perfectly) */}
                <Link
                  to="/book-my-ride"
                  onClick={handleNavClick}
                  className="sm:hidden flex bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-full items-center gap-1 shadow-xs whitespace-nowrap shrink-0"
                >
                  <Car size={12} />
                  <span>Book Ride</span>
                </Link>

                {/* WhatsApp Green Circle Button (Sm and up) */}
                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] hover:bg-[#1faa53] text-white items-center justify-center shadow-xs hover:scale-105 transition-all cursor-pointer hidden md:flex shrink-0"
                  aria-label="WhatsApp Support"
                >
                  <MessageSquare size={16} className="fill-white stroke-none" />
                </a>

                {/* Mobile Hamburger Menu Toggle (Visible on screens < 768px) */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-slate-800 hover:text-orange-600 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors shrink-0 ml-0.5 cursor-pointer"
                  aria-label="Toggle Mobile Menu"
                >
                  {isMobileMenuOpen ? (
                    <X size={20} className="stroke-[2.5]" />
                  ) : (
                    <Menu size={20} className="stroke-[2.5]" />
                  )}
                </button>
              </div>
            </div>

            {/* Search Overlay Input */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pt-2.5 pb-1"
                >
                  <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 sm:px-4 py-2 border border-slate-200">
                    <Search size={15} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search vehicles, packages, or places (e.g. Innova, Dwarka)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase cursor-pointer shrink-0"
                    >
                      Find
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel (Slide-out navigation for < 768px screens) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-xs sm:max-w-sm bg-white z-51 p-5 shadow-2xl flex flex-col justify-between overflow-y-auto md:hidden"
            >
              <div>
                {/* Header inside mobile drawer */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Citizen Travels Logo"
                      className="w-8 h-8 rounded-lg object-contain border border-slate-200"
                    />
                    <div className="flex flex-col">
                      <span className="font-display font-extrabold text-slate-900 text-xs uppercase leading-tight">
                        Citizen Tours & Travels
                      </span>
                      <span className="text-[9px] text-slate-500 font-medium">Ahmedabad, Gujarat</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={20} className="stroke-[2.5]" />
                  </button>
                </div>

                {/* Search bar inside drawer */}
                <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
                  <Search size={14} className="text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase cursor-pointer shrink-0"
                  >
                    Go
                  </button>
                </form>

                {/* Menu Nav Links List */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `min-h-[44px] text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all uppercase tracking-wider flex items-center justify-between ${
                          isActive
                            ? "bg-orange-500 text-white font-extrabold shadow-xs"
                            : "text-slate-800 hover:bg-slate-100 hover:text-orange-600"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>
                          <ChevronRight size={14} className={isActive ? "text-white" : "text-slate-400"} />
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Quick Contact Actions */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 mt-6">
                <a
                  href="tel:+919724002200"
                  className="min-h-[44px] flex items-center justify-center gap-2 text-slate-800 bg-slate-100 hover:bg-slate-200 font-extrabold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone size={15} className="text-orange-500 shrink-0" />
                  <span>Call: +91 97240 02200</span>
                </a>
                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I'd%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white font-extrabold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-colors"
                >
                  <MessageSquare size={16} className="fill-white stroke-none shrink-0" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}



