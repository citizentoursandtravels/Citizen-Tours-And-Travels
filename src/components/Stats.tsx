import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, Users, Briefcase, Car, Headset } from "lucide-react";

export function Stats() {
  // Let's create states for the numerical values to count them up smoothly
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [corporates, setCorporates] = useState(0);
  const [vehicles, setVehicles] = useState(0);

  useEffect(() => {
    // Smooth simple counter interval
    const yearsTarget = 18;
    const custTarget = 10000;
    const corpTarget = 500;
    const vehTarget = 100;

    let start = 0;
    const duration = 2000; // 2 seconds
    const intervalMs = 30;
    const totalSteps = duration / intervalMs;

    const timer = setInterval(() => {
      start += 1;
      const progress = start / totalSteps;

      setYears(Math.min(Math.round(progress * yearsTarget), yearsTarget));
      setCustomers(Math.min(Math.round(progress * custTarget), custTarget));
      setCorporates(Math.min(Math.round(progress * corpTarget), corpTarget));
      setVehicles(Math.min(Math.round(progress * vehTarget), vehTarget));

      if (start >= totalSteps) {
        clearInterval(timer);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  const statsItems = [
    {
      value: `${years}+`,
      label: "Years Experience",
      sub: "Since 2007",
      icon: Award,
    },
    {
      value: `${customers.toLocaleString()}+`,
      label: "Happy Customers",
      sub: "5-Star Rating",
      icon: Users,
    },
    {
      value: `${corporates}+`,
      label: "Corporate Clients",
      sub: "Punctual Contracts",
      icon: Briefcase,
    },
    {
      value: `${vehicles}+`,
      label: "Premium Vehicles",
      sub: "Sanitized Fleet",
      icon: Car,
    },
    {
      value: "24/7",
      label: "Dedicated Support",
      sub: "Emergency Assist",
      icon: Headset,
    },
  ];

  return (
    <section className="py-16 bg-white text-navy-950 relative overflow-hidden border-t border-b border-navy-100">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-50/30 via-white to-navy-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statsItems.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={18} />
              </div>

              {/* Counter Number */}
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-gold-600 tracking-tight">
                {stat.value}
              </span>

              {/* Labels */}
              <span className="text-navy-950 text-xs font-bold uppercase tracking-wider mt-2 group-hover:text-gold-600 transition-colors">
                {stat.label}
              </span>
              <span className="text-navy-500 text-[10px] uppercase font-mono tracking-widest mt-1">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
