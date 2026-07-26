import { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Fleet } from "./components/Fleet";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Packages } from "./components/Packages";
import { BookingProcess } from "./components/BookingProcess";
import { Testimonials } from "./components/Testimonials";
import { Stats } from "./components/Stats";
import { FAQ } from "./components/FAQ";
import { BlogPreview } from "./components/BlogPreview";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>(undefined);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Monitor Scroll for Scroll-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate premium initial page loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = (vehicleId?: string, packageId?: string) => {
    setSelectedVehicleId(vehicleId);
    setSelectedPackageId(packageId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedVehicleId(undefined);
    setSelectedPackageId(undefined);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen font-sans bg-navy-50 text-navy-950 overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
      
      {/* Premium Architectural Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Repeating grid-lines and grid-dots patterns */}
        <div className="absolute inset-0 bg-grid-lines opacity-100" />
        <div className="absolute inset-0 bg-grid-dots opacity-80" />
        
        {/* Custom Glowing Blurred Ambient Orbs in strategic layout points */}
        <div className="absolute top-[3%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-400/8 dark:bg-blue-400/5 blur-[120px] animate-float-1" />
        <div className="absolute top-[18%] right-[-15%] w-[700px] h-[700px] rounded-full bg-indigo-400/8 dark:bg-indigo-400/5 blur-[150px] animate-float-2" />
        <div className="absolute top-[38%] left-[-20%] w-[650px] h-[650px] rounded-full bg-blue-500/8 dark:bg-blue-500/5 blur-[130px] animate-float-3" />
        <div className="absolute top-[58%] right-[-10%] w-[600px] h-[600px] rounded-full bg-sky-400/8 dark:bg-sky-400/5 blur-[120px] animate-float-1" />
        <div className="absolute top-[78%] left-[-15%] w-[700px] h-[700px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/5 blur-[140px] animate-float-2" />
        <div className="absolute bottom-[2%] right-[-10%] w-[650px] h-[650px] rounded-full bg-blue-600/8 dark:bg-blue-600/5 blur-[130px] animate-float-3" />
      </div>

      {/* Initial Page Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-150 bg-navy-950 flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center">
              {/* Outer circular spinner with gold borders */}
              <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-gold-500 animate-spin mb-6" />
              
              <div className="text-center">
                <span className="font-display font-black text-xl tracking-widest text-white uppercase block">
                  CITIZEN
                </span>
                <span className="text-[9px] font-mono text-gold-400 tracking-widest uppercase block mt-1">
                  TOURS & TRAVELS • AHMEDABAD
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Sticky Header Navigation */}
          <Navbar onOpenBooking={() => handleOpenBooking()} />

          {/* Main Landing Sections */}
          <main>
            {/* 1. Hero Section */}
            <Hero onOpenBooking={() => handleOpenBooking()} />

            {/* 2. About Us Section */}
            <About />

            {/* 3. Services Section */}
            <Services onOpenBooking={() => handleOpenBooking()} />

            {/* 4. Vehicle Fleet Grid */}
            <Fleet onOpenBooking={(vehId) => handleOpenBooking(vehId)} />

            {/* 5. Statistics Counter */}
            <Stats />

            {/* 6. Why Choose Us Features */}
            <WhyChooseUs />

            {/* 7. Popular Tour Packages */}
            <Packages onOpenBooking={(vehId, pkgId) => handleOpenBooking(vehId, pkgId)} />

            {/* 8. Booking Process Timeline */}
            <BookingProcess />

            {/* 10. Customer Testimonials */}
            <Testimonials />

            {/* 11. Travel Guides Chronicles */}
            <BlogPreview />

            {/* 12. Common FAQ Accordion */}
            <FAQ />

            {/* 13. Contact Desk & Google Maps */}
            <Contact />
          </main>

          {/* Elegant Footer Block */}
          <Footer />

          {/* Floating Actions Panel on Bottom Right */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
            {/* Scroll-To-Top Trigger Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={handleScrollTop}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-gold-400 flex items-center justify-center shadow-lg hover:bg-gold-500 hover:text-navy-950 transition-all cursor-pointer mb-1"
                  aria-label="Scroll to Top"
                >
                  <ArrowUp size={18} className="stroke-[2.5px]" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Call Floating Button (Dark Navy Circle with Gold Phone Icon) */}
            <motion.a
              href="tel:+919724002200"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              className="w-13 h-13 rounded-full bg-[#0B132B] text-gold-400 flex items-center justify-center shadow-xl hover:bg-black hover:scale-105 transition-all duration-300 cursor-pointer relative group border border-navy-800"
              aria-label="Call Customer Support"
            >
              <Phone size={22} className="stroke-[2.5px] text-gold-400 fill-gold-400/20" />
              <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800">
                Call: +91 97240 02200
              </span>
            </motion.a>

            {/* WhatsApp Floating Button (Emerald Green Circle) */}
            <motion.a
              href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours%20%26%20Travels!%20I'm%20looking%20to%20reserve%20a%20vehicle%20or%20package."
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-13 h-13 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xl hover:bg-[#059669] hover:scale-105 transition-all duration-300 cursor-pointer relative group"
              aria-label="WhatsApp Support"
            >
              <MessageSquare size={24} className="fill-white stroke-none" />
              <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800">
                Chat on WhatsApp
              </span>
            </motion.a>
          </div>

          {/* Centralized Full-Featured Booking Modal Popup */}
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            initialVehicleId={selectedVehicleId}
            initialPackageId={selectedPackageId}
          />
        </>
      )}
    </div>
  );
}
