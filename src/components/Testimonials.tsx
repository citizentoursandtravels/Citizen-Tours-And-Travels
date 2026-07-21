import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // Auto change slide every 6s

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-navy-50 overflow-hidden relative">
      {/* Decorative Ornaments */}
      <div className="absolute top-10 left-10 text-gold-500/10 select-none pointer-events-none">
        <Quote size={120} className="stroke-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            What Our <span className="text-gold-600">Happy Travelers Say</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Read real, verified reviews from families, corporate managers, and pilgrims who depend on us for safe, comfortable transits in Ahmedabad.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          <div className="relative overflow-hidden min-h-[350px] md:min-h-[280px] bg-white rounded-2xl border border-navy-100/80 p-8 md:p-12 shadow-xl shadow-navy-100/30 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Stars and Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-navy-800 text-base sm:text-lg italic font-serif leading-relaxed">
                  "{active.review}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-navy-100/80">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-navy-950 text-sm leading-none">
                      {active.name}
                    </h4>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 block mt-1.5">
                      {active.role} • {active.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-navy-200 text-navy-950 hover:bg-gold-600 hover:text-white hover:border-gold-600 flex items-center justify-center shadow-sm hover:shadow-lg transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-gold-600" : "w-2.5 bg-navy-200 hover:bg-navy-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-navy-200 text-navy-950 hover:bg-gold-600 hover:text-white hover:border-gold-600 flex items-center justify-center shadow-sm hover:shadow-lg transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
