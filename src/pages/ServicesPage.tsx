import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { SERVICES } from "../data";
import { LucideIcon } from "../components/LucideIcon";
import { ArrowRight, CheckCircle2, Shield, Clock, Phone, Search } from "lucide-react";

export function ServicesPage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "cabs", label: "Cabs & Car Hire" },
    { id: "group", label: "Tempo Traveller & Buses" },
    { id: "tours", label: "Sightseeing & Pilgrimage" },
    { id: "events", label: "Corporate & Weddings" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterCategory === "cabs") {
      return ["car-rental", "airport-drop", "railway-drop", "outstation-tours"].includes(service.id);
    }
    if (filterCategory === "group") {
      return ["tempo-traveller", "bus-rental"].includes(service.id);
    }
    if (filterCategory === "tours") {
      return ["local-sightseeing", "family-tours", "pilgrimage-tours", "hotel-booking"].includes(service.id);
    }
    if (filterCategory === "events") {
      return ["corporate-travel", "wedding-transport"].includes(service.id);
    }

    return true;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Comprehensive Transport & Tour Services"
        subtitle="From swift airport drops and luxury wedding fleets to 26-seater Tempo Travellers and spiritual pilgrimage packages — Citizen Tours & Travels provides reliable, 24/7 mobility across Ahmedabad and Pan India."
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Filter & Search Toolbar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    filterCategory === cat.id
                      ? "bg-slate-900 text-amber-400 shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 text-slate-900 text-xs font-medium rounded-full pl-10 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 tracking-tight">
              Tailored Mobility For Every Occasion
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select any service below to view detailed vehicle options and instant booking details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between text-left group hover:-translate-y-1"
              >
                <div>
                  {/* Service Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 group-hover:text-white transition-all shadow-md">
                    <LucideIcon name={service.icon} className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>24/7 Doorstep Pickup & Drop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Clean Sanitized AC Fleet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Transparent Per-KM Pricing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Instant Booking
                  </span>
                  <Link
                    to={`/book-my-ride?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-orange-600 text-white font-extrabold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Quality Standards */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-left">
              <Shield className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-bold text-lg text-white mb-2 uppercase">GPS Safety Monitored</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All vehicles feature live GPS tracking, speed limiters, and emergency panic buttons for complete peace of mind.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-left">
              <Clock className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-bold text-lg text-white mb-2 uppercase">Guaranteed On-Time</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Punctuality is our trademark. Chauffeurs report 15 minutes before departure to avoid flight or train delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-left">
              <Phone className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-bold text-lg text-white mb-2 uppercase">24x7 Transit Desk</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have last minute schedule changes or route updates? Our control room operates round the clock at +91 97240 02200.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
