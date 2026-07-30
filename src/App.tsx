import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { SEOHead } from "./components/SEOHead";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { FleetPage } from "./pages/FleetPage";
import { TourPackagesPage } from "./pages/TourPackagesPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { BookMyRidePage } from "./pages/BookMyRidePage";

// Helper component to auto scroll to top when changing routes
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>(undefined);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // Initial page loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
    <BrowserRouter>
      <ScrollToTopOnRoute />
      
      <div className="relative min-h-screen font-sans bg-navy-50 text-navy-950 overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
        {/* Dynamic SEO Head Management */}
        <SEOHead />

        {/* Ambient Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute inset-0 bg-grid-lines opacity-100" />
          <div className="absolute inset-0 bg-grid-dots opacity-80" />
          <div className="absolute top-[3%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-400/8 blur-[120px] animate-float-1" />
          <div className="absolute top-[38%] left-[-20%] w-[650px] h-[650px] rounded-full bg-blue-500/8 blur-[130px] animate-float-3" />
        </div>

        {/* Initial Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-150 bg-navy-950 flex flex-col items-center justify-center text-white"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-orange-500 animate-spin mb-6" />
                <div className="text-center">
                  <span className="font-display font-black text-xl tracking-widest text-white uppercase block">
                    CITIZEN
                  </span>
                  <span className="text-[9px] font-mono text-amber-400 tracking-widest uppercase block mt-1">
                    TOURS & TRAVELS • AHMEDABAD
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            {/* Navigation Header across all pages */}
            <Navbar onOpenBooking={() => handleOpenBooking()} />

            {/* Main Multi-Page Route Handler */}
            <main className="pt-24 sm:pt-28 min-h-[75vh]">
              <Routes>
                <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/fleet" element={<FleetPage />} />
                <Route path="/tour-packages" element={<TourPackagesPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book-my-ride" element={<BookMyRidePage />} />
                <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
              </Routes>
            </main>

            {/* Consistent Footer Across All Pages */}
            <Footer />

            {/* Floating Quick Action Buttons */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={handleScrollTop}
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-amber-400 flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-navy-950 transition-all cursor-pointer mb-1"
                    aria-label="Scroll to Top"
                  >
                    <ArrowUp size={18} className="stroke-[2.5px]" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Call Hotline Button */}
              <motion.a
                href="tel:+919724002200"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }}
                className="w-13 h-13 rounded-full bg-[#0B132B] text-amber-400 flex items-center justify-center shadow-xl hover:bg-black hover:scale-105 transition-all duration-300 cursor-pointer relative group border border-navy-800"
                aria-label="Call Customer Support"
              >
                <Phone size={22} className="stroke-[2.5px] text-amber-400 fill-amber-400/20" />
                <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800">
                  Call: +91 97240 02200
                </span>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I'm%20looking%20to%20reserve%20a%20vehicle."
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#1faa53] hover:scale-105 transition-all duration-300 cursor-pointer relative group"
                aria-label="WhatsApp Support"
              >
                <MessageSquare size={24} className="fill-white stroke-none" />
                <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800">
                  Chat on WhatsApp
                </span>
              </motion.a>
            </div>

            {/* Booking Modal */}
            <BookingModal
              isOpen={isBookingOpen}
              onClose={handleCloseBooking}
              initialVehicleId={selectedVehicleId}
              initialPackageId={selectedPackageId}
            />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

