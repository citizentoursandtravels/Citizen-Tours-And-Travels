import React, { useState, useEffect } from "react";
import { Menu, X, Compass, Phone, MessageSquare } from "lucide-react";
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
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-md py-3"
            : "bg-white/80 backdrop-blur-xs border-b border-navy-100/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img
                src={logoImg}
                alt="Citizen Travels Logo"
                className="w-10 h-10 rounded-xl object-contain shadow-md border border-navy-100 bg-white group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-navy-950 text-base md:text-lg tracking-tight uppercase leading-none">
                  Citizen <span className="text-gold-600 font-medium">Tours</span>
                </span>
                <span className="text-[10px] font-mono text-navy-600 tracking-widest uppercase mt-0.5">
                  & Travels • Ahmedabad
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
                  className="text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors duration-200 uppercase tracking-wider relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919724002200"
                className="flex items-center gap-1.5 text-navy-800 hover:text-blue-600 transition-colors text-sm font-semibold"
              >
                <Phone size={15} className="text-blue-600" />
                +91 97240 02200
              </a>
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-white font-bold py-2 px-5 rounded-lg text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/20 hover:-translate-y-0.5 transition-all"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-gold-600 to-gold-400 text-white font-bold py-1.5 px-3 rounded-md text-[10px] uppercase tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-navy-950 hover:text-gold-600 p-1 bg-navy-50 rounded-md border border-navy-100"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
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
