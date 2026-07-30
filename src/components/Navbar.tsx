import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Search, Heart, MessageSquare, Instagram, Facebook, Youtube, Car } from "lucide-react";
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Vehicles", path: "/fleet" },
    { name: "Tour Packages", path: "/tour-packages" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
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
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Topmost Dark Navy Utility Strip */}
        <div className="bg-[#0b1329] text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-medium">
            {/* Left Info */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
              <a
                href="tel:+919724002200"
                className="flex items-center gap-1.5 text-slate-200 hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                <Phone size={13} className="text-orange-400" />
                <span>+91 97240 02200</span>
              </a>
              <a
                href="mailto:citizentoursandtravels07@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors whitespace-nowrap"
              >
                <Mail size={13} className="text-orange-400" />
                <span>citizentoursandtravels07@gmail.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
                <MapPin size={13} className="text-orange-400" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            {/* Right Info & Socials */}
            <div className="flex items-center gap-4 ml-auto text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60 whitespace-nowrap">
                <span className="font-bold text-white text-[11px]">Google Rating</span>
                <span className="font-extrabold text-amber-400 text-xs">4.9</span>
                <div className="flex text-amber-400">
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                  <Star size={10} className="fill-amber-400" />
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1.5 text-slate-200 whitespace-nowrap">
                <Clock size={13} className="text-orange-400" />
                <span>24x7 Support</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-700">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  <Instagram size={13} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  <Facebook size={13} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  <Youtube size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar Row */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-slate-200"
              : "bg-white py-3 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Logo & Brand Title */}
              <Link
                to="/"
                onClick={handleNavClick}
                className="flex items-center gap-2.5 group cursor-pointer shrink-0"
              >
                <div className="relative">
                  <img
                    src={logoImg}
                    alt="Citizen Tours and Travels Logo"
                    loading="eager"
                    width={42}
                    height={42}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shadow-sm border border-slate-200 bg-white group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-display font-black text-navy-950 text-base sm:text-lg tracking-tight uppercase leading-none">
                      CITIZEN
                    </span>
                    <span className="font-display font-black text-orange-600 text-base sm:text-lg tracking-tight uppercase leading-none">
                      TOURS
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                    TOURS & TRAVELS PVT. LTD.
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `text-[11px] 2xl:text-xs font-bold transition-colors duration-200 uppercase tracking-wider relative py-1 ${
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
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* Search Icon Circle */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>

                {/* Book My Ride CTA Button */}
                <Link
                  to="/book-my-ride"
                  onClick={handleNavClick}
                  className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-3.5 sm:px-4 py-2 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                >
                  <Car size={14} />
                  <span>Book My Ride</span>
                </Link>

                {/* WhatsApp Green Circle Button */}
                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1faa53] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer hidden sm:flex"
                  aria-label="WhatsApp Support"
                >
                  <MessageSquare size={18} className="fill-white stroke-none" />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="xl:hidden text-slate-800 hover:text-orange-600 p-2 rounded-lg bg-slate-100 transition-colors ml-1"
                  aria-label="Toggle Navigation Menu"
                >
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
                  className="overflow-hidden pt-3"
                >
                  <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-slate-100 rounded-xl px-4 py-2 border border-slate-200">
                    <Search size={16} className="text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search destinations, packages, or vehicles (e.g. Innova, Dwarka, Udaipur)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-lg uppercase cursor-pointer"
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto xl:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Citizen Travels Logo"
                      className="w-8 h-8 rounded-lg object-contain border border-slate-200"
                    />
                    <span className="font-display font-extrabold text-slate-900 text-xs uppercase">
                      Citizen Tours & Travels
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-500 hover:text-slate-800 p-1.5"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `text-xs font-bold py-2.5 px-3 rounded-xl transition-colors uppercase tracking-wider flex items-center justify-between ${
                          isActive
                            ? "bg-orange-500 text-white font-black shadow-sm"
                            : "text-slate-800 hover:bg-slate-100 hover:text-orange-600"
                        }`
                      }
                    >
                      <span>{link.name}</span>
                    </NavLink>
                  ))}
                  <NavLink
                    to="/book-my-ride"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `text-xs font-extrabold py-3 px-3 rounded-xl transition-colors uppercase tracking-wider mt-2 flex items-center justify-center gap-2 ${
                        isActive
                          ? "bg-rose-600 text-white"
                          : "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md"
                      }`
                    }
                  >
                    <Car size={16} />
                    <span>Book My Ride</span>
                  </NavLink>
                </nav>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-100 mt-6">
                <a
                  href="tel:+919724002200"
                  className="flex items-center justify-center gap-2 text-slate-800 bg-slate-100 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider"
                >
                  <Phone size={15} className="text-orange-500" />
                  +91 97240 02200
                </a>
                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I'd%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md"
                >
                  <MessageSquare size={16} />
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


