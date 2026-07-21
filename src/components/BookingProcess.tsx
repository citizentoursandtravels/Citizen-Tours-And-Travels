import { motion } from "motion/react";
import { Car, CalendarRange, CheckSquare, Smile, ArrowRight } from "lucide-react";

export function BookingProcess() {
  const steps = [
    {
      step: "01",
      title: "Choose Vehicle",
      description: "Pick from our rich fleet of premium SUVs, executive luxury sedans, tempo travellers, or luxury coaches.",
      icon: Car,
    },
    {
      step: "02",
      title: "Select Date & Time",
      description: "Provide your departure date, time, pickup coordinates, and custom stop points along your route.",
      icon: CalendarRange,
    },
    {
      step: "03",
      title: "Confirm Booking",
      description: "Receive a fully transparent, per-kilometer breakdown, and confirm your booking instantly via call or WhatsApp.",
      icon: CheckSquare,
    },
    {
      step: "04",
      title: "Enjoy Your Journey",
      description: "Our professional, sanitized vehicle arrives 15 minutes early. Sit back, relax, and enjoy your comfortable ride.",
      icon: Smile,
    },
  ];

  return (
    <section className="py-24 bg-navy-50/20 backdrop-blur-xs text-navy-950 relative overflow-hidden border-b border-navy-100/50 z-10">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Our Seamless <span className="text-gold-600">Booking Process</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Reserving your rental or tour package with Citizen Tours & Travels takes less than 2 minutes. Follow these simple steps.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-gold-600/10 via-gold-500/30 to-gold-600/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((st, sIdx) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: sIdx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle Card */}
                <div className="relative mb-6">
                  {/* Outer Orbit */}
                  <div className="w-20 h-20 rounded-2xl bg-white border border-navy-100 flex items-center justify-center text-gold-500 group-hover:border-gold-500/50 group-hover:scale-105 transition-all duration-300 shadow-sm relative z-10">
                    <st.icon size={32} className="group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  {/* Step Number Tag */}
                  <span className="absolute -top-2.5 -right-2.5 bg-gold-600 text-white font-mono text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border border-navy-100 shadow-sm">
                    {st.step}
                  </span>
                </div>

                {/* Arrow connectors on desktop */}
                {sIdx < 3 && (
                  <div className="hidden lg:flex items-center justify-center absolute top-1/2 translate-y-[-48px] text-gold-500/20 group-hover:text-gold-500/60 transition-colors duration-300" style={{ left: `${(sIdx + 1) * 25 - 2}%` }}>
                    <ArrowRight size={20} className="animate-pulse" />
                  </div>
                )}

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-navy-950 mb-2 tracking-tight group-hover:text-gold-600 transition-colors duration-200">
                  {st.title}
                </h3>

                {/* Description */}
                <p className="text-navy-600 text-xs leading-relaxed max-w-xs font-normal">
                  {st.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
