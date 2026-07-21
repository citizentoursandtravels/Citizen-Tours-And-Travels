import { motion } from "motion/react";
import { SERVICES } from "../data";
import { LucideIcon } from "./LucideIcon";

interface ServicesProps {
  onOpenBooking: () => void;
}

export function Services({ onOpenBooking }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section id="services" className="py-24 bg-white/40 backdrop-blur-xs text-navy-950 relative overflow-hidden border-t border-b border-navy-100/50 z-10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Professional <span className="text-gold-600">Transit & Tour Services</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            From seamless airport dropoffs to complete family pilgrimage loops, explore our extensive range of high-quality logistics solutions in Ahmedabad.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(180, 143, 53, 0.3)", boxShadow: "0 10px 20px -10px rgba(180, 143, 53, 0.1)" }}
              className="bg-navy-50/50 border border-navy-100 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-5 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-md">
                  <LucideIcon name={srv.icon} size={22} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Service Title */}
                <h3 className="font-display text-lg font-bold text-navy-950 mb-2 tracking-tight group-hover:text-gold-600 transition-colors duration-200">
                  {srv.title}
                </h3>

                {/* Service Description */}
                <p className="text-navy-600 text-xs leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              {/* Card Footer Action */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700 transition-colors uppercase tracking-wider group-hover:translate-x-1 duration-200 text-left cursor-pointer"
              >
                Inquire Now &rarr;
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner callout */}
        <div className="mt-16 bg-navy-50 border border-navy-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="font-display text-xl md:text-2xl font-bold text-navy-950 tracking-tight">
              Looking for a custom business transport contract?
            </h4>
            <p className="text-navy-700 text-sm mt-1.5 max-w-2xl font-light">
              Citizen Travels provides seamless monthly vehicle deployments, routine staff pick-and-drop contracts, and elite executive SUVs for Ahmedabad's lead corporate offices.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-bold py-3.5 px-7 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-gold-500/10 transition-all cursor-pointer"
          >
            Contact Corporate Desk
          </button>
        </div>
      </div>
    </section>
  );
}
