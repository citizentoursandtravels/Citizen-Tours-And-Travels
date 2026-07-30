import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Search, Heart, ChevronDown, MessageSquare, Instagram, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/citizen_travels_logo_1784098450742.jpg";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    { name: "Home", href: "#home", hasDropdown: false },
    { name: "Car Rental", href: "#fleet", hasDropdown: true },
    { name: "Tempo Traveller", href: "#fleet", hasDropdown: true },
    { name: "Tour Packages", href: "#packages", hasDropdown: true },
    { name: "Weekend Getaways", href: "#services", hasDropdown: false },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
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
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "#home")}
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
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`text-xs font-bold transition-colors duration-200 flex items-center gap-1 uppercase tracking-wider relative group py-1 ${
                      link.name === "Home" ? "text-orange-600" : "text-slate-800 hover:text-orange-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown size={14} className="text-slate-400 group-hover:text-orange-600 transition-transform duration-200 group-hover:rotate-180" />}
                    {link.name === "Home" && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full" />
                    )}
                  </a>
                ))}
              </nav>

              {/* Right Side Actions Bar */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Search Icon Circle */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>

                {/* Wishlist / Heart Icon Circle */}
                <button
                  onClick={onOpenBooking}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer hidden sm:flex"
                  aria-label="Wishlist"
                >
                  <Heart size={16} />
                </button>

                {/* Coral Orange "Get Free Quote" Button */}
                <button
                  onClick={onOpenBooking}
                  className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
                >
                  Get Free Quote
                </button>

                {/* WhatsApp Green Circle Button */}
                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1faa53] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer"
                  aria-label="WhatsApp Support"
                >
                  <MessageSquare size={18} className="fill-white stroke-none" />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-slate-800 hover:text-orange-600 p-2 rounded-lg bg-slate-100 transition-colors ml-1"
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
                  <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-4 py-2 border border-slate-200">
                    <Search size={16} className="text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search destinations, packages, or vehicles (e.g. Innova, Dwarka, Udaipur)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none"
                    />
                    <button
                      onClick={onOpenBooking}
                      className="bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-lg uppercase"
                    >
                      Find
                    </button>
                  </div>
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 p-6 shadow-2xl flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Citizen Travels Logo"
                      className="w-8 h-8 rounded-lg object-contain border border-slate-200"
                    />
                    <span className="font-display font-extrabold text-slate-900 text-sm tracking-tight uppercase">
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

                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="text-sm font-bold text-slate-800 hover:text-orange-600 py-2 border-b border-slate-50 flex items-center justify-between uppercase tracking-wider"
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && <ChevronDown size={14} className="text-slate-400" />}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <a
                  href="tel:+919724002200"
                  className="flex items-center justify-center gap-2 text-slate-800 bg-slate-100 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider"
                >
                  <Phone size={15} className="text-orange-500" />
                  +91 97240 02200
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md"
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

