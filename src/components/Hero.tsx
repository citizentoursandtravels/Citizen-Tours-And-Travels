import React from "react";
import { motion } from "motion/react";
import {
  Compass,
  ArrowRight,
  Clock,
  Gift,
  Calendar,
  Building2,
  Utensils,
  Camera,
  Car,
  FileText,
  MessageSquare,
  Send,
  Star,
  ShieldCheck,
  Headphones,
  Lock,
} from "lucide-react";
import heroBgImg from "../assets/images/regenerated_image_1784098622037.png";
import offerCardImg from "../assets/images/regenerated_image_1785402653034.jpg";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Background Full-Bleed Image with Dark Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Citizens Tours & Travels Scenic Landscape"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to match screenshot mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Main Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Elegant Script Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-serif italic text-amber-400 text-2xl sm:text-3xl md:text-4xl font-normal mb-2 tracking-wide drop-shadow-md"
            >
              Explore The World With
            </motion.p>

            {/* Giant Main Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-white mb-4 drop-shadow-2xl"
            >
              CITIZEN <br />
              <span className="text-white">TOURS & TRAVELS</span>
            </motion.h1>

            {/* Coral Accent Line under title */}
            <motion.div
              variants={itemVariants}
              className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mb-6"
            />

            {/* Description Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-slate-200 text-base sm:text-lg md:text-xl font-normal max-w-xl mb-8 leading-relaxed drop-shadow-sm"
            >
              Citizen Tours & Travels provides reliable car rentals, tempo travellers, bus hire, airport transfers, and outstation travel from Ahmedabad. We are committed to safe, comfortable, and affordable journeys with professional drivers and well-maintained vehicles.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto"
            >
              {/* Primary Coral Orange Pill Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>EXPLORE PACKAGES</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={14} className="stroke-[3]" />
                </div>
              </button>

              {/* Secondary Dark Translucent Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-md font-bold px-7 py-4 rounded-full text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 hover:border-slate-500 cursor-pointer"
              >
                <Compass size={18} className="text-amber-400" />
                <span>PLAN MY TRIP</span>
              </button>
            </motion.div>

            {/* Bottom Trust Indicators Badges Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-slate-800/80"
            >
              {/* Google Rated */}
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                  G
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-tight">Rated by Travelers</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    On Google <Star size={11} className="fill-amber-400 text-amber-400" /> 4.9
                  </span>
                </div>
              </div>

              {/* Verified Vehicles */}
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-tight">Verified</span>
                  <span className="text-xs font-bold text-white">Vehicles & Hotels</span>
                </div>
              </div>

              {/* 24x7 Support */}
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Headphones size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-tight">24X7 Travel</span>
                  <span className="text-xs font-bold text-white">Support</span>
                </div>
              </div>

              {/* Secure Booking */}
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-tight">Secure</span>
                  <span className="text-xs font-bold text-white">Booking</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Featured Limited Offer Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-md bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-orange-500/10"
            >
              {/* Protruding Clock LIMITED OFFER Sticker Badge */}
              <div className="absolute top-3 left-3 z-20 flex items-center bg-white border-2 border-slate-900 rounded-full shadow-lg overflow-hidden">
                <div className="bg-slate-900 text-white p-1.5 flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <span className="bg-rose-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1">
                  LIMITED OFFER
                </span>
              </div>

              {/* Card Banner Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                <img
                  src={offerCardImg}
                  alt="Special Goa/Gujarat Package Offer"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Styled Graphic Overlay Text on Image */}
                <div className="absolute bottom-3 left-4 right-4 text-center">
                  <h3 className="font-serif italic text-amber-300 text-3xl sm:text-4xl drop-shadow-md">
                    Saurashtra Special
                  </h3>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200 mt-0.5">
                    SUN • SAND • SEA • SERENITY
                  </p>
                </div>
              </div>

              {/* Red Coral Highlight Banner */}
              <div className="bg-rose-600 text-white text-xs font-black uppercase tracking-wider py-2 px-4 text-center flex items-center justify-center gap-2 shadow-inner">
                <Gift size={15} />
                <span>HURRY UP! BEST DEALS AWAIT YOU</span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 bg-white">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Left Price Block */}
                  <div className="col-span-5 border-r border-slate-200 pr-3 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      STARTING FROM
                    </span>
                    <span className="text-xs font-bold text-slate-400 line-through mt-0.5">
                      ₹10,500/-
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-rose-600 leading-none my-0.5">
                      ₹4,999/-
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      PER PERSON
                    </span>
                  </div>

                  {/* Right Features Bullets List */}
                  <div className="col-span-7 space-y-1.5 text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-rose-500 shrink-0" />
                      <span>3 Nights / 4 Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={13} className="text-rose-500 shrink-0" />
                      <span>3★ Resort with Pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils size={13} className="text-rose-500 shrink-0" />
                      <span>Breakfast & Dinner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera size={13} className="text-rose-500 shrink-0" />
                      <span>Sightseeing Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car size={13} className="text-rose-500 shrink-0" />
                      <span>Private AC Transfers</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Row */}
                <div className="grid grid-cols-12 gap-2 mt-5 pt-4 border-t border-slate-100">
                  {/* Coral Enquire Button */}
                  <button
                    onClick={onOpenBooking}
                    className="col-span-7 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold py-3 px-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Send size={13} />
                    <span>ENQUIRE NOW</span>
                  </button>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20am%20interested%20in%20the%20Special%20Tour%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-2 bg-[#25D366] hover:bg-[#1faa53] text-white flex items-center justify-center rounded-xl py-3 shadow-md transition-all cursor-pointer"
                    aria-label="WhatsApp Enquire"
                  >
                    <MessageSquare size={18} className="fill-white stroke-none" />
                  </a>

                  {/* PDF Itinerary Button */}
                  <button
                    onClick={onOpenBooking}
                    className="col-span-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all border border-slate-200 cursor-pointer"
                  >
                    <FileText size={13} className="text-rose-500" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

