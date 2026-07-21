import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-navy-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Frequently Asked <span className="text-gold-600">Questions</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Have a question about bookings, drivers, customized tour package routing, or pricing lists? Find answers below or reach out to our team.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-gold-500/30 shadow-md"
                    : "bg-white/80 border-navy-100/80 hover:border-navy-300 shadow-xs"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-gold-500/10 text-gold-600" : "bg-navy-50 text-navy-500"
                    }`}>
                      <HelpCircle size={16} />
                    </div>
                    <span className="font-display font-bold text-navy-950 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Indicator */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen ? "border-gold-500 bg-gold-500 text-white rotate-180" : "border-navy-200 text-navy-400"
                  }`}>
                    <ChevronDown size={14} className="stroke-[2.5px]" />
                  </div>
                </button>

                {/* Accordion Body with Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-navy-50 text-navy-700 text-xs sm:text-sm leading-relaxed font-light pl-17">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
