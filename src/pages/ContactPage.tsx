import React from "react";
import { PageHeader } from "../components/PageHeader";
import { Contact } from "../components/Contact";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Headset } from "lucide-react";

export function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Contact Our Head Office"
        subtitle="Need an instant cab quotation, custom tour itinerary, or corporate transit contract? Visit our Navrangpura office in Ahmedabad or reach our 24/7 travel desk."
        breadcrumbs={[{ name: "Contact Us" }]}
      />

      {/* Main Contact Section */}
      <div className="py-8">
        <Contact />
      </div>

      {/* Additional Quick Contact Info Bar */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <Phone className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-400">Phone Support</h4>
                <a href="tel:+919724002200" className="text-sm font-black text-white hover:text-orange-400 block mt-0.5">
                  +91 97240 02200
                </a>
                <a href="tel:+919227002400" className="text-xs text-slate-300 block">
                  +91 92270 02400
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <Mail className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-400">Email Inquiry</h4>
                <a href="mailto:citizentoursandtravels07@gmail.com" className="text-xs font-bold text-white hover:text-orange-400 block mt-0.5 break-all">
                  citizentoursandtravels07@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <MapPin className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-400">Head Office</h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                  Ground Floor, C.G. Road, Navrangpura, Ahmedabad - 380009
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold uppercase text-xs text-slate-400">Operating Hours</h4>
                <span className="text-sm font-extrabold text-amber-400 block mt-0.5">24 Hours / 7 Days</span>
                <span className="text-[10px] text-slate-400">Open on All Public Holidays</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
