import { motion } from "motion/react";
import { Clock, Tag, Compass, CalendarRange, CheckCircle } from "lucide-react";
import { PACKAGES } from "../data";

interface PackagesProps {
  onOpenBooking: (vehicleId?: string, packageId?: string) => void;
}

export function Packages({ onOpenBooking }: PackagesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section id="packages" className="py-24 bg-navy-50/40 backdrop-blur-xs relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Handcrafted Vacations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Popular <span className="text-gold-600">Tour Packages</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Take a well-deserved break. Explore the ancient temples, royal palaces, pristine deserts, and beautiful beaches of India with our premium logistics.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group h-full ${
                pkg.isPopular
                  ? "border-gold-500/50 shadow-md ring-1 ring-gold-500/20"
                  : "border-navy-100/80 shadow-sm"
              }`}
            >
              {/* Image & Header */}
              <div>
                <div className="relative h-56 overflow-hidden bg-navy-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Duration Badge */}
                  <span className="absolute top-4 left-4 bg-gold-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Clock size={11} />
                    {pkg.duration}
                  </span>

                  {/* Hot Tag for Popular packages */}
                  {pkg.isPopular && (
                    <span className="absolute top-4 right-4 bg-white/95 border border-gold-500/40 text-gold-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-xs">
                      Best Seller
                    </span>
                  )}

                  {/* Title directly over visual */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-extrabold text-white tracking-tight leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <p className="text-navy-700 text-xs leading-relaxed mb-5 font-light">
                    {pkg.description}
                  </p>

                  {/* Highlights section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-950 mb-3">
                      Package Highlights
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {pkg.highlights.map((high, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-navy-700">
                          <CheckCircle size={14} className="text-gold-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card CTA Footer */}
              <div className="p-6 pt-0 border-t border-navy-50 bg-navy-50/30">
                <div className="flex items-center justify-between py-4 mb-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-navy-400 uppercase tracking-widest leading-none">Estimate</span>
                    <span className="text-sm font-extrabold text-navy-900 mt-1">{pkg.priceDesc}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(undefined, pkg.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white shadow-md hover:shadow-gold-500/15"
                      : "bg-gold-600 hover:bg-gold-500 text-white"
                  }`}
                >
                  <CalendarRange size={14} />
                  Book Package
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Tailoring Callout block */}
        <div className="mt-16 bg-white border border-navy-100 shadow-sm rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-navy-950">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 text-xs text-gold-600 font-bold uppercase tracking-wider mb-2">
              <Compass size={14} className="animate-spin text-gold-500" />
              Tailor-Made Road Trips
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-navy-950">
              Need a completely bespoke tour itinerary?
            </h3>
            <p className="text-navy-700 text-sm font-light leading-relaxed">
              Tell us which destinations you want to cover, how many days you have, and your vehicle category preference. Our tour specialists will customize everything and secure the lowest group quotes for you.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking(undefined, "custom-tour")}
            className="relative z-10 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Design Custom Package
          </button>
        </div>
      </div>
    </section>
  );
}
