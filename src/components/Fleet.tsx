import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Wind, Armchair, ChevronRight, Check } from "lucide-react";
import { VEHICLES } from "../data";

interface FleetProps {
  onOpenBooking: (vehicleId?: string) => void;
}

export function Fleet({ onOpenBooking }: FleetProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Cars & SUVs", "Tempo Travellers", "Luxury Coaches"];

  const filteredVehicles = VEHICLES.filter((veh) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Cars & SUVs") {
      return ["sedan", "suv", "innova", "ertiga"].includes(veh.id);
    }
    if (activeFilter === "Tempo Travellers") {
      return ["tempo-12", "force-urbania"].includes(veh.id);
    }
    if (activeFilter === "Luxury Coaches") {
      return ["luxury-bus"].includes(veh.id);
    }
    return true;
  });

  return (
    <section id="fleet" className="py-24 bg-navy-50/40 backdrop-blur-xs relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Our Elite Fleet
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Well-Maintained <span className="text-gold-600">Vehicles For Every Group</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Whether it is an individual airport transit or heavy group logistical support, we operate clean, sanitised, and mechanical-certified models.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-gold-600 text-white shadow-md"
                  : "bg-white text-navy-800 border border-navy-200 hover:border-gold-500/50 hover:bg-gold-50/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((veh) => (
              <motion.div
                layout
                key={veh.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-navy-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-navy-100">
                  <img
                    src={veh.image}
                    alt={veh.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-gold-500/20 text-gold-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                    {veh.category}
                  </span>

                  {/* Pricing Overprint */}
                  <div className="absolute bottom-0 right-0 bg-gold-600 text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-tl-xl shadow-md">
                    {veh.priceDesc}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Vehicle Title */}
                    <h3 className="font-display text-xl font-bold text-navy-950 tracking-tight mb-4 group-hover:text-gold-600 transition-colors duration-200">
                      {veh.name}
                    </h3>

                    {/* Specifications badges */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-navy-100/80 mb-4 text-navy-700">
                      <div className="flex flex-col items-center text-center justify-center">
                        <Users size={16} className="text-gold-600 mb-1" />
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Capacity</span>
                        <span className="text-xs font-bold">{veh.capacity} Seats</span>
                      </div>
                      <div className="flex flex-col items-center text-center justify-center border-l border-r border-navy-100/80">
                        <Wind size={16} className="text-gold-600 mb-1" />
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Climate</span>
                        <span className="text-xs font-bold">{veh.ac ? "Full A/C" : "No A/C"}</span>
                      </div>
                      <div className="flex flex-col items-center text-center justify-center">
                        <Armchair size={16} className="text-gold-600 mb-1" />
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Layout</span>
                        <span className="text-xs font-bold line-clamp-1">{veh.seating}</span>
                      </div>
                    </div>

                    {/* Detailed features bullet check list */}
                    <div className="space-y-1.5 mb-6">
                      {veh.features.map((feat, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-navy-600">
                          <Check size={14} className="text-gold-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button trigger */}
                  <button
                    onClick={() => onOpenBooking(veh.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all duration-300 cursor-pointer border border-transparent hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    Book This Vehicle
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
