import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { FAQS } from "../data";
import { Search, ChevronDown, MessageSquare, Phone, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Have questions about cab booking, per-kilometer pricing, driver allowances, cancellation terms, or outstation state permits? Find clear, transparent answers below."
        breadcrumbs={[{ name: "FAQ" }]}
      />

      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search your question (e.g. driver allowance, cancellation, night charges, Fastag)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 text-slate-900 text-sm font-medium rounded-full pl-12 pr-4 py-3.5 border border-slate-200 focus:outline-none focus:border-orange-500 shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left transition-all duration-200 hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-display font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-orange-500 text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-12 bg-white border-t border-slate-200 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <HelpCircle size={16} />
                <span>24/7 Support Desk</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                Still Have Questions Unanswered?
              </h3>
              <p className="text-xs text-slate-300">
                Our travel consultants are online on WhatsApp or ready for a quick call.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20have%20a%20question%20regarding%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1faa53] text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
              >
                <MessageSquare size={16} />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href="tel:+919724002200"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 border border-slate-700"
              >
                <Phone size={16} className="text-amber-400" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
