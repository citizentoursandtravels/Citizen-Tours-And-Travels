import React from "react";
import { motion } from "motion/react";
import { Calendar, ChevronRight, Award, Compass, HeartHandshake } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16"
    >
      {/* Background Image with Ken Burns / zoom-in animation */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0.05 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury travel background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Soft, premium light blue/white gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-gold-50/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-gold-100/10" />
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute top-1/4 left-1/10 w-2 h-2 rounded-full bg-gold-500/40 blur-xs animate-ping" />
      <div className="absolute bottom-1/3 right-1/12 w-3.5 h-3.5 rounded-full bg-gold-500/20 blur-xs animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-gold-400/40 blur-xs animate-ping" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Established Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Award size={14} className="animate-pulse text-gold-500" />
            Citizen Tours & Travels • Estd. 2007
          </motion.div>

          {/* Core Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-950 tracking-tight leading-none mb-6"
          >
            Your Trusted Travel Partner{" "}
            <span className="block mt-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 bg-clip-text text-transparent">
              Since 2007
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-navy-700 text-base sm:text-lg md:text-xl font-normal tracking-wide max-w-2xl mb-10 leading-relaxed"
          >
            Punctual & Reliable <strong className="text-gold-600 font-bold">Car Rental</strong>,{" "}
            <strong className="text-gold-600 font-bold">Tempo Traveller</strong>,{" "}
            <strong className="text-gold-600 font-bold">Bus Rental</strong> & premium{" "}
            <strong className="text-gold-600 font-bold">Tour Services</strong> based in Ahmedabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-white font-bold py-4 px-8 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar size={18} />
              Book Your Ride Now
            </button>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-navy-50/50 text-navy-900 font-bold py-4 px-8 rounded-xl text-sm uppercase tracking-wider border border-navy-200 hover:border-gold-500/40 transition-all cursor-pointer shadow-sm"
            >
              Contact Us
              <ChevronRight size={18} className="text-gold-500" />
            </button>
          </motion.div>

          {/* Trust Highlights Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4"
          >
            {/* Highlight 1 */}
            <div className="flex items-center gap-3 bg-white border border-navy-100 rounded-2xl p-4 shadow-xs hover:border-gold-500/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                <Compass size={20} />
              </div>
              <div className="text-left">
                <span className="block text-navy-950 font-bold text-sm">100% Custom Tours</span>
                <span className="block text-navy-600 text-xs mt-0.5">Tailored itineraries</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-center gap-3 bg-white border border-navy-100 rounded-2xl p-4 shadow-xs hover:border-gold-500/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div className="text-left">
                <span className="block text-navy-950 font-bold text-sm">Professional Drivers</span>
                <span className="block text-navy-600 text-xs mt-0.5">Route expert operators</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-3 bg-white border border-navy-100 rounded-2xl p-4 shadow-xs hover:border-gold-500/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                <Award size={20} />
              </div>
              <div className="text-left">
                <span className="block text-navy-950 font-bold text-sm">Transparent Billing</span>
                <span className="block text-navy-600 text-xs mt-0.5">Zero hidden charges</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy-50 to-transparent pointer-events-none" />
    </section>
  );
}
