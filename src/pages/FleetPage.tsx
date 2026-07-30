import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { VEHICLES } from "../data";
import { Fleet } from "../components/Fleet";
import { Users, Shield, Check, ArrowRight, Zap, Info } from "lucide-react";

export function FleetPage() {
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get("search") || "";

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Our Clean & Sanitized Vehicles"
        subtitle="Explore our extensive fleet in Ahmedabad: Maruti Ertiga, Toyota Innova Crysta, Toyota Fortuner, Mercedes E-Class, 12 to 26 Seater Luxury Tempo Travellers, Force Urbania, and 56-Seater Volvo Coaches."
        breadcrumbs={[{ name: "Our Vehicles" }]}
      />

      {/* Main Fleet Vehicle Component */}
      <div className="py-8">
        <Fleet
          onOpenBooking={(vehId) => {
            window.location.href = `/book-my-ride?vehicle=${vehId}`;
          }}
        />
      </div>

      {/* Detailed Pricing & Transparency Breakdown */}
      <section className="py-16 bg-white border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Info size={20} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black uppercase text-amber-400">
                  Transparent Fare Structure & Billing Rules
                </h3>
                <p className="text-xs text-slate-400">No unexpected surcharges — everything is clearly documented.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="p-4 bg-slate-800/70 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-white uppercase text-sm mb-2">Outstation Minimums</h4>
                <p className="leading-relaxed">
                  Outstation trips are calculated based on a minimum average running of 300 KM per day. Driver daily allowance ranges from ₹300 to ₹500 depending on vehicle class.
                </p>
              </div>

              <div className="p-4 bg-slate-800/70 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-white uppercase text-sm mb-2">Local City Packages</h4>
                <p className="leading-relaxed">
                  Local Ahmedabad packages available in 8 Hours / 80 KM or 12 Hours / 120 KM options. Extra per-km or per-hour charges apply after package limit.
                </p>
              </div>

              <div className="p-4 bg-slate-800/70 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-white uppercase text-sm mb-2">Tolls & Parking</h4>
                <p className="leading-relaxed">
                  Fastag toll charges, state border entry permits, and airport/railway parking fees are paid directly at actuals or added cleanly to final invoice.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm text-slate-300 font-medium">
                Need help picking the right seating capacity for your group?
              </span>
              <Link
                to="/book-my-ride"
                className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Get Instant Customized Quote</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
