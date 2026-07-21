import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { VEHICLES } from "../data";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    date: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number to submit an inquiry.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "54331264-2059-4190-8e6e-d025b7bbcb1b",
          subject: `New Travel Inquiry from ${formData.name}`,
          from_name: "Citizen Travels Contact Form",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          vehicle: formData.vehicle,
          date: formData.date,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setErrorMsg("Failed to connect to the server. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-navy-950 relative overflow-hidden border-t border-navy-100">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-600 block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mb-4">
            Contact <span className="text-gold-600">Citizen Travels</span>
          </h2>
          <p className="text-navy-700 text-base font-light">
            Have an upcoming trip or event? Reach out to our 24/7 travel desk for a fast quotation, detailed itineraries, and booking assistance.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form (7 columns) */}
          <div className="lg:col-span-7 bg-navy-50/50 border border-navy-100 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative shadow-sm">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-6">
                    Send Us An <span className="text-gold-600">Instant Inquiry</span>
                  </h3>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                          className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="citizentoursandtravels07@gmail.com"
                          className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                      {/* Vehicle selection */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">Preferred Vehicle</label>
                        <select
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        >
                          <option value="">-- Choose Category --</option>
                          {VEHICLES.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name}
                            </option>
                          ))}
                          <option value="custom">Other Custom Requests</option>
                        </select>
                      </div>
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 mb-1.5">Travel Start Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 mb-1.5">Your Travel Plan Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please write your destination, preferred pickup spot, passengers count, or customized requirements..."
                        className="w-full bg-white border border-navy-200 focus:border-gold-500 text-navy-950 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                        {errorMsg}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-gold-500/15 transition-all text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Send size={16} />
                        )}
                        {isSubmitting ? "Submitting Inquiry..." : "Submit Journey Details"}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500 text-gold-500 flex items-center justify-center mx-auto mb-6 shadow-md">
                    <CheckCircle size={36} className="animate-pulse" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-3">
                    Thank you! We have received your inquiry.
                  </h3>
                  <p className="text-navy-700 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Our reservation team is compiling your customized itinerary right now. We will contact you shortly or send a quote to <span className="font-semibold text-navy-900">{formData.email || "your email"}</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={`https://wa.me/919724002200?text=${encodeURIComponent(`Hello Citizen Travels! I just submitted an inquiry. My name is ${formData.name}. Let's discuss dates.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all text-xs uppercase tracking-wider"
                    >
                      <MessageSquare size={16} />
                      Fast Track via WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setIsSent(false);
                        setFormData({ name: "", phone: "", email: "", vehicle: "", date: "", message: "" });
                      }}
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-navy-50 text-navy-800 font-semibold py-3 px-6 rounded-lg text-xs uppercase tracking-wider border border-navy-200 hover:border-gold-500/30 transition-all"
                    >
                      New Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Details & Map (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="bg-navy-50/50 border border-navy-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-950 tracking-tight">
                Our Office <span className="text-gold-600">Information</span>
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-xs">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-navy-500 uppercase font-mono tracking-widest">
                      Call 24/7 Help Desk
                    </span>
                    <a href="tel:+919724002200" className="block text-navy-950 font-bold text-base hover:text-blue-600 transition-colors mt-0.5">
                      +91 97240 02200
                    </a>
                    <a href="tel:+917926442248" className="block text-navy-700 text-sm hover:text-blue-600 transition-colors">
                      +91 79 2644 2248
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-navy-500 uppercase font-mono tracking-widest">
                      Email Reservation Office
                    </span>
                    <a href="mailto:citizentoursandtravels07@gmail.com" className="block text-navy-950 font-bold text-base hover:text-gold-600 transition-colors mt-0.5">
                      citizentoursandtravels07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-navy-500 uppercase font-mono tracking-widest">
                      HQ Corporate Address
                    </span>
                    <p className="text-navy-900 font-semibold text-sm leading-relaxed mt-0.5">
                      Citizen House, Ground Floor, Opposite C.G. Road Bus Stop, CG Road, Ahmedabad, Gujarat - 380009
                    </p>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-navy-500 uppercase font-mono tracking-widest">
                      Operational Business Hours
                    </span>
                    <p className="text-navy-900 font-semibold text-sm mt-0.5">
                      Office: 09:00 AM - 09:00 PM (Daily)
                    </p>
                    <p className="text-gold-600 text-xs mt-0.5 font-bold uppercase tracking-wider">
                      ★ Call & Dispatch Support: 24/7 Non-Stop
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Widget Container */}
            <div className="h-60 rounded-3xl overflow-hidden border border-navy-100 shadow-md relative bg-navy-50 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117482.12879555627!2d72.50233481284706!3d23.022513903178044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11d08775657!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                title="Citizen Travels Ahmedabad Headquarters Location"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
