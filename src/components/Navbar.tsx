import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, MapPin, Clock, Star, Car } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/citizen_travels_logo_1784098450742.jpg";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Tour Packages", href: "#packages" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
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
        {/* Topmost Dark Navy Announcement & Quick Contact Bar */}
        <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-medium">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5">
              <a
                href="tel:+919724002200"
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                <Phone size={14} className="text-gold-400" />
                <span>+91 97240 02200</span>
              </a>
              <a
                href="https://wa.me/919724002200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <MessageSquare size={14} className="text-emerald-400" />
                <span>WhatsApp Quick Booking</span>
              </a>
              <div className="hidden md:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
                <MapPin size={14} className="text-gold-400" />
                <span>Navrangpura, Ahmedabad, Gujarat</span>
              </div>
            </div>

            <div className="flex items-center gap-5 ml-auto text-slate-300">
              <div className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
                <Clock size={14} className="text-gold-400" />
                <span>24/7 Operations</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-white whitespace-nowrap">
                <Star size={14} className="text-gold-400 fill-gold-400" />
                <span>4.9/5 Rating <span className="text-slate-400 font-normal">(1,200+ Reviews)</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar Row */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
              : "bg-white py-3.5 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "#home")}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <img
                  src={logoImg}
                  alt="Citizen Tours and Travels Ahmedabad Logo - Premium Car Rental"
                  loading="eager"
                  decoding="async"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-contain shadow-xs border border-slate-200 bg-white group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-display font-black text-navy-900 text-lg md:text-xl tracking-tight uppercase leading-none">
                    CITIZEN
                  </span>
                  <span className="text-[11px] font-bold text-gold-600 tracking-wider uppercase mt-0.5">
                    TOURS & TRAVELS
                  </span>
                </div>
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-xs font-bold text-slate-800 hover:text-navy-900 transition-colors duration-200 uppercase tracking-wider relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* Right CTA Button: Book Ride */}
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-navy-900 hover:bg-navy-950 text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer border border-navy-800"
                >
                  <Car size={16} className="text-gold-400" />
                  <span>Book Ride</span>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-navy-900 hover:text-gold-600 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="Toggle Navigation Menu"
                >
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white border-l border-navy-100 z-50 p-6 shadow-2xl flex flex-col justify-between lg:hidden"
            >
              <div>
                {/* Logo and close */}
                <div className="flex items-center justify-between pb-6 border-b border-navy-100 mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Citizen Travels Logo"
                      className="w-8 h-8 rounded-lg object-contain border border-navy-100 bg-white"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-display font-extrabold text-navy-950 tracking-tight uppercase">
                      Citizen Travels
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-navy-600 hover:text-gold-600 p-1.5"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Links list */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="text-base font-semibold text-navy-800 hover:text-gold-600 py-2 transition-colors uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-navy-100">
                <a
                  href="tel:+919724002200"
                  className="flex items-center gap-3 text-navy-800 hover:text-blue-600 transition-colors py-2 text-sm font-semibold"
                >
                  <Phone size={18} className="text-blue-600" />
                  +91 97240 02200
                </a>
                <a
                  href="https://wa.me/919724002200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 px-4 rounded-lg text-sm uppercase tracking-wider transition-all"
                >
                  <MessageSquare size={16} />
                  WhatsApp Support
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-white font-bold py-3 px-4 rounded-lg text-sm uppercase tracking-wider"
                >
                  Book Your Ride Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
