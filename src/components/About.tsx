import { motion } from "motion/react";
import { Check, ShieldCheck, Heart, Award, Users } from "lucide-react";
import aboutImg from "../assets/images/regenerated_image_1784098622037.png";

export function About() {
  const points = [
    {
      title: "100% Customer Satisfaction",
      desc: "Our priority is comfort. We tailor our routes, scheduling, and speeds to perfectly fit your comfort levels.",
      icon: Heart,
    },
    {
      title: "Verified, Experienced Drivers",
      desc: "All drivers undergo background checks and route tests. They carry over 8+ years of intercity highway mastery.",
      icon: Users,
    },
    {
      title: "Highly Affordable & Transparent Pricing",
      desc: "Get fully broken down rates with tolls and permits accounted for. No surprise hidden charges at trip end.",
      icon: Award,
    },
    {
      title: "Safe, Well-Maintained & Sanitized Fleet",
      desc: "All premium SUVs, luxury sedans, tempo travellers, and buses undergo rigid mechanic inspections before departure.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 bg-navy-50/40 backdrop-blur-xs relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Framed */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-navy-200/50">
              <img
                src={aboutImg}
                alt="Spotless luxury vehicle"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Back Gold Ornament Box */}
            <div className="absolute -top-4 -left-4 w-48 h-48 border-t-4 border-l-4 border-gold-500/60 rounded-tl-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-b-4 border-r-4 border-gold-500/60 rounded-br-2xl -z-0" />

            {/* Floating Stats badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md border border-gold-500/30 rounded-xl p-4 text-navy-950 shadow-xl max-w-[200px]"
            >
              <div className="font-display font-extrabold text-3xl text-gold-600">18+</div>
              <div className="text-xs font-medium text-navy-600 mt-1 uppercase tracking-wider">
                Years of Highway Hospitality
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Section Tag */}
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
              Who We Are
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-6">
              Ahmedabad's Premier Travel &{" "}
              <span className="text-gold-600 relative inline-block">
                Transit Specialist
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gold-400/30 rounded-full" />
              </span>
            </h2>

            {/* Description */}
            <p className="text-navy-700 text-base leading-relaxed mb-6">
              Founded in 2007, <strong>Citizen Tours & Travels</strong> was born from a simple mission: to make road travel across Gujarat, Rajasthan, and beyond exceptionally safe, reliable, and comfortable. Over nearly two decades, we have evolved from a modest car rental office into one of Ahmedabad’s most trusted transport networks.
            </p>
            <p className="text-navy-700 text-base leading-relaxed mb-8">
              Whether you need an elegant Sedan for a corporate meeting, a premium Tempo Traveller for a family pilgrimage, or a fleet of luxury 56-seater buses for wedding guest logistics, we handle every booking with meticulous planning and deep hospitality.
            </p>

            {/* Grid of Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                    <pt.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-950 text-sm tracking-tight">
                      {pt.title}
                    </h4>
                    <p className="text-navy-600 text-xs mt-1 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
