import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, MapPin, Navigation, ArrowRight, Check } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const [pickup, setPickup] = useState("Ahmedabad");
  const [destination, setDestination] = useState("Gujarat, Rajasthan...");

  const handleQuoteClick = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden pt-28 pb-16"
    >
      {/* Background Soft Glow Radial Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-100/30 via-blue-50/40 to-transparent blur-3xl opacity-70 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFBEB] border border-amber-300/60 text-[#B45309] text-xs font-semibold tracking-wide mb-8 shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Ahmedabad's Most Trusted Tour & Taxi Partner</span>
          </motion.div>

          {/* Core Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
          >
            <span>Explore India in </span>
            <span className="text-[#D97706]">Comfort & </span>
            <span className="text-[#2563EB]">Luxury</span>
          </motion.h1>

          {/* Subheading text */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-3xl mb-10 leading-relaxed"
          >
            Rent top-conditioned Sedans, SUVs, Innova Crysta, 17-25 Seater Tempo Travellers, and Force Urbania in Ahmedabad. Transparent per-km pricing with zero hidden charges.
          </motion.p>

          {/* Interactive Search / Quote Card Box */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleQuoteClick}
            className="w-full max-w-4xl bg-white rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-200/60 border border-slate-100/90 mb-8 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
              {/* Pick Location */}
              <div className="md:col-span-4">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">
                  Pick Location
                </label>
                <div className="relative bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200/90 rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup city"
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Destination / Package */}
              <div className="md:col-span-5">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">
                  Destination / Package
                </label>
                <div className="relative bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200/90 rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-blue-600 shrink-0" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to?"
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full bg-[#B5781E] hover:bg-[#9A6313] text-white font-bold py-3.5 px-5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.form>

          {/* Trust Checkmarks Row Under Card */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-700 text-xs sm:text-sm font-semibold"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Clean Sanitized Vehicles</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Experienced Drivers</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Doorstep Pickup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
