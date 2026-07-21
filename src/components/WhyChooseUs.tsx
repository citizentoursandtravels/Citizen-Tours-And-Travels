import { motion } from "motion/react";
import { FEATURES } from "../data";
import { LucideIcon } from "./LucideIcon";

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-navy-50/20 backdrop-blur-xs text-navy-950 relative overflow-hidden border-t border-b border-navy-100/50 z-10">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Setting the Standard in <span className="text-gold-600">Road Hospitality</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            With nearly two decades of transport excellence in Ahmedabad, we promise safety, reliability, and honest billing on every journey.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.id}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(180, 143, 53, 0.3)", backgroundColor: "#ffffff" }}
              className="bg-white border border-navy-100 shadow-xs rounded-2xl p-5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <LucideIcon name={feat.icon} size={22} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-navy-950 text-sm tracking-tight mb-2 group-hover:text-gold-600 transition-colors">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-navy-600 text-[11px] leading-relaxed font-normal">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
