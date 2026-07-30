import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Packages } from "../components/Packages";
import { MapPin, Compass, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function TourPackagesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Handcrafted Tour Packages"
        subtitle="Explore the iconic sights of India with our all-inclusive tour packages from Ahmedabad. Covering Statue of Unity, Rann of Kutch, Somnath-Dwarka Pilgrimage, Udaipur Palace Circuit, and Rajasthan Deserts."
        breadcrumbs={[{ name: "Tour Packages" }]}
      />

      {/* Main Packages Component */}
      <div className="py-8">
        <Packages
          onOpenBooking={(vehId, pkgId) => {
            window.location.href = `/book-my-ride?package=${pkgId}`;
          }}
        />
      </div>

      {/* Custom Tailor-Made Itinerary Builder Callout */}
      <section className="py-16 bg-white border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>100% Tailor-Made Customized Tours</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Want A Personal Vacation Circuit Designed Just For You?
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Whether you have 3 days or 12 days, tell us your budget, group size, preferred vehicle, and hotel preferences. Our travel experts will craft a customized itinerary with transparent door-to-door cab transfers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Flexible Departure Dates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>3 Star / 4 Star Hotels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Dedicated Chauffeur</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/book-my-ride?type=custom"
                  className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold py-4 px-6 rounded-full text-xs uppercase tracking-wider shadow-xl text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build Custom Package</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I%20want%20to%20plan%20a%20customized%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider text-center transition-colors cursor-pointer"
                >
                  Chat With Travel Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
