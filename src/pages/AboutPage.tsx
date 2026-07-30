import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Users, Heart, CheckCircle2, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { About } from "../components/About";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Stats } from "../components/Stats";

export function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="About Citizen Tours & Travels"
        subtitle="Ahmedabad's leading, highly-rated car rental and tour operator since 2007. Delivering 18+ years of safe, luxurious, and affordable travel across Gujarat, Rajasthan, and Pan India."
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* Main Company Profile Section */}
      <About />

      {/* Deep Story & Founder's Vision */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-amber-600" />
                <span>Established 2007 • Navrangpura, Ahmedabad</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
                18 Years of Crafting Smooth Journeys Across India
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded with a single mission to elevate ground transportation in Gujarat, Citizen Tours & Travels Pvt. Ltd. has grown from a local car hire startup into Ahmedabad’s premier transit agency. Whether you require an airport transfer at Sardar Vallabhbhai Patel International Airport, a family weekend getaway to Statue of Unity, or a 26-seater Tempo Traveller for an outstation wedding, we promise uncompromised comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase">Verified Chauffeurs</h3>
                    <p className="text-xs text-slate-600 mt-1">Police verified, non-smokers, fluent in Hindi, Gujarati & basic English with 8+ years highway experience.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase">50,000+ Happy Clients</h3>
                    <p className="text-xs text-slate-600 mt-1">Serving corporate delegates, NRI families, wedding parties, and tourists with 4.9/5 Google ratings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left border border-slate-800">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-display text-2xl font-black uppercase text-amber-400 mb-4">
                Our Core Promises
              </h3>

              <ul className="space-y-4 text-sm font-medium text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Punctual Pickup:</strong> Drivers arrive 15 minutes before your scheduled departure time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Hidden Charges:</strong> Transparent per-km rates with clear breakdown of tolls and driver allowances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pristine Vehicles:</strong> Thorough chemical sanitization, fresh seat covers, and working air conditioning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>24/7 Roadside Assistance:</strong> Instant replacement vehicle dispatched in case of unexpected mechanical breakdown.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Direct Booking Hotline</span>
                  <span className="text-lg font-black text-white">+91 97240 02200</span>
                </div>
                <Link
                  to="/book-my-ride"
                  className="bg-gradient-to-r from-orange-500 to-rose-500 text-white font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Book My Ride
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Counter */}
      <Stats />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mb-4">
            Ready To Plan Your Next Seamless Trip?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant price quotes for Hatchbacks, Sedans, Innova Crysta, 12-26 Seater Tempo Travellers, or Luxury Buses in Ahmedabad.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-my-ride"
              className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>Instant WhatsApp Booking</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact Head Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
