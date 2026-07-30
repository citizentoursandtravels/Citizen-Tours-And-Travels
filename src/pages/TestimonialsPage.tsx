import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Testimonials } from "../components/Testimonials";
import { Star, MessageSquare, CheckCircle2, Send, ThumbsUp, ShieldCheck } from "lucide-react";

export function TestimonialsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && reviewText) {
      setFormSubmitted(true);
      setTimeout(() => {
        setName("");
        setLocation("");
        setReviewText("");
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Real Traveler Stories & Ratings"
        subtitle="Discover why over 50,000 corporate clients, families, NRI tourists, and wedding parties trust Citizen Tours & Travels with a 4.9/5 star Google rating."
        breadcrumbs={[{ name: "Testimonials" }]}
      />

      {/* Main Reviews Component */}
      <div className="py-8">
        <Testimonials />
      </div>

      {/* Interactive Review Submission Form */}
      <section className="py-16 bg-white border-t border-slate-200 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <ThumbsUp size={14} />
                <span>Share Your Experience</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                Traveled With Citizen Travels Recently?
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Your feedback helps us continuously elevate our chauffeur hospitality and vehicle standards.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-600 rounded-2xl p-6 text-center text-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-bold text-lg text-white">Thank You For Your Review!</h4>
                <p className="text-xs text-emerald-300 mt-1">
                  Your feedback has been submitted successfully and will be published shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full bg-slate-800 text-white text-xs rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">City / Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Satellite, Ahmedabad"
                      className="w-full bg-slate-800 text-white text-xs rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer transition-transform hover:scale-125"
                      >
                        <Star
                          size={22}
                          className={star <= rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-2">{rating} / 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about the vehicle condition, driver punctuality, route comfort..."
                    className="w-full bg-slate-800 text-white text-xs rounded-xl p-4 border border-slate-700 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Submit Review</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
