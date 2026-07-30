import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Fleet } from "../components/Fleet";
import { Stats } from "../components/Stats";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Packages } from "../components/Packages";
import { BookingProcess } from "../components/BookingProcess";
import { Testimonials } from "../components/Testimonials";
import { BlogPreview } from "../components/BlogPreview";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

interface HomePageProps {
  onOpenBooking: (vehicleId?: string, packageId?: string) => void;
}

export function HomePage({ onOpenBooking }: HomePageProps) {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* Quick Info Strip */}
      <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400">18+ Years</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Trusted Industry Experience</span>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400">100% Doorstep</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Punctual Pickups</span>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400">Clean & AC</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Sanitized Fleet</span>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400">Zero Hidden</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Transparent Per-KM Billing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Highlights */}
      <section className="relative">
        <Services onOpenBooking={(v, p) => onOpenBooking(v, p)} />
        <div className="bg-slate-100 py-6 text-center border-t border-slate-200">
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>Explore All 12 Transport Services</span>
            <ArrowRight size={14} className="text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 3. About Company Summary */}
      <section className="relative">
        <About />
        <div className="bg-slate-900 py-6 text-center border-t border-slate-800">
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            <span>Learn More About Our Journey & Values</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 4. Fleet Overview */}
      <section className="relative">
        <Fleet onOpenBooking={(vehId) => onOpenBooking(vehId)} />
        <div className="bg-slate-100 py-6 text-center border-t border-slate-200">
          <Link
            to="/fleet"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>View All Our Vehicles & Pricing</span>
            <ArrowRight size={14} className="text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 5. Statistics Counter */}
      <Stats />

      {/* 6. Why Choose Us Features */}
      <WhyChooseUs />

      {/* 7. Popular Tour Packages */}
      <section className="relative">
        <Packages onOpenBooking={(vehId, pkgId) => onOpenBooking(vehId, pkgId)} />
        <div className="bg-slate-900 py-6 text-center border-t border-slate-800">
          <Link
            to="/tour-packages"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            <span>Browse All Tour Packages & Custom Itineraries</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 8. Booking Process Timeline */}
      <BookingProcess />

      {/* 9. Testimonials */}
      <section className="relative">
        <Testimonials />
        <div className="bg-slate-100 py-6 text-center border-t border-slate-200">
          <Link
            to="/testimonials"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>Read More Verified Customer Reviews</span>
            <ArrowRight size={14} className="text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 10. Travel Guides / Blog */}
      <section className="relative">
        <BlogPreview />
        <div className="bg-slate-900 py-6 text-center border-t border-slate-800">
          <Link
            to="/blog"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            <span>Read All Travel Guides & Road Trip Articles</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section className="relative">
        <FAQ />
        <div className="bg-slate-100 py-6 text-center border-t border-slate-200">
          <Link
            to="/faq"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight size={14} className="text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 12. Contact Desk */}
      <Contact />
    </div>
  );
}
