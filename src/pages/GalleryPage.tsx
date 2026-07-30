import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { GALLERY } from "../data";
import { X, ChevronLeft, ChevronRight, Eye, Camera, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Tempo Traveller",
    "Luxury Sedans",
    "Weddings",
    "Tours",
    "Innova Crysta",
    "Buses & Coaches",
  ];

  const filteredGallery = GALLERY.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? filteredGallery.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === filteredGallery.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Fleet & Tour Photo Gallery"
        subtitle="Explore authentic glimpses of our sanitized vehicles, luxury interiors, wedding cars, and happy travelers exploring Rann of Kutch, Statue of Unity, and Rajasthan."
        breadcrumbs={[{ name: "Gallery" }]}
      />

      {/* Category Tabs Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-amber-400 shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left">
                  <span className="self-start px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-md shadow-xs">
                    {item.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white text-xs font-bold leading-tight drop-shadow-md">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-amber-300 font-medium">Click to enlarge</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0">
                      <Eye size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Image & Caption */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center text-white">
              <img
                src={filteredGallery[activeImageIndex].url}
                alt={filteredGallery[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 max-w-lg">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                  {filteredGallery[activeImageIndex].category}
                </span>
                <h3 className="font-display text-lg font-bold">
                  {filteredGallery[activeImageIndex].title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-display text-2xl font-black uppercase mb-3 text-amber-400">
            Impressed By Our Clean Fleet & Tour Stories?
          </h3>
          <p className="text-slate-300 text-sm mb-6">
            Reserve your preferred vehicle today with doorstep pickup anywhere in Ahmedabad.
          </p>
          <Link
            to="/book-my-ride"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer"
          >
            <span>Book My Ride Now</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
