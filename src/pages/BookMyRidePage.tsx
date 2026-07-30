import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { VEHICLES, PACKAGES, SERVICES } from "../data";
import { Car, MapPin, Calendar, Clock, Users, Phone, MessageSquare, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";

export function BookMyRidePage() {
  const [searchParams] = useSearchParams();
  const preSelectedVehicle = searchParams.get("vehicle") || "";
  const preSelectedService = searchParams.get("service") || "";
  const preSelectedPackage = searchParams.get("package") || "";
  const preSelectedType = searchParams.get("type") || "Outstation Roundtrip";

  const [tripType, setTripType] = useState(preSelectedType);
  const [pickupCity, setPickupCity] = useState("Ahmedabad");
  const [destinationCity, setDestinationCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("4");
  const [vehicleId, setVehicleId] = useState(preSelectedVehicle || "innova");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedVehicle) setVehicleId(preSelectedVehicle);
    if (preSelectedPackage) {
      const pkg = PACKAGES.find((p) => p.id === preSelectedPackage);
      if (pkg) {
        setDestinationCity(pkg.title);
      }
    }
  }, [preSelectedVehicle, preSelectedPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedVehObj = VEHICLES.find((v) => v.id === vehicleId);
    const vehicleName = selectedVehObj ? selectedVehObj.name : vehicleId;

    const message = `*NEW BOOKING REQUEST - CITIZEN TOURS & TRAVELS*
----------------------------------------
*Name:* ${fullName}
*Mobile:* ${mobileNumber}
*Email:* ${email || "Not Provided"}
*Trip Type:* ${tripType}
*Pickup Location:* ${pickupCity}
*Destination:* ${destinationCity || "Local City / Package"}
*Pickup Date:* ${pickupDate}
${returnDate ? `*Return Date:* ${returnDate}\n` : ""}*Passengers:* ${passengers} Persons
*Selected Vehicle:* ${vehicleName}
*Special Notes:* ${notes || "None"}
----------------------------------------
Please reply with price quotation & booking confirmation.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919724002200?text=${encodedMessage}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Banner with Breadcrumbs */}
      <PageHeader
        title="Book My Ride - Instant Reservation"
        subtitle="Reserve your preferred vehicle in 2 minutes. Select your route, vehicle, travel dates, and get an instant transparent quote sent directly to WhatsApp."
        breadcrumbs={[{ name: "Book My Ride" }]}
      />

      {/* Main Reservation Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Booking Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 text-left">
              
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-slate-800 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase text-slate-900">
                    Booking Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have redirected your request details to our WhatsApp Desk (+91 97240 02200). Our travel consultant will verify vehicle availability and confirm your reservation shortly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://wa.me/919724002200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1faa53] text-white font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-black uppercase text-slate-900 mb-1">
                      1. Choose Trip Type
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      Select the nature of your ride for tailored fare calculations.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        "Outstation Roundtrip",
                        "Outstation One-Way",
                        "Local City Package",
                        "Airport Transfer",
                      ].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setTripType(type)}
                          className={`p-3 rounded-2xl text-xs font-bold transition-all text-center border cursor-pointer ${
                            tripType === type
                              ? "bg-slate-900 text-amber-400 border-slate-900 shadow-md"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Step 2: Route & Dates */}
                  <div>
                    <h3 className="font-display text-xl font-black uppercase text-slate-900 mb-1">
                      2. Route & Schedule
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      Enter pickup, destination, and travel dates.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Pickup Location
                        </label>
                        <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-2">
                          <MapPin size={16} className="text-slate-400 shrink-0" />
                          <input
                            type="text"
                            required
                            value={pickupCity}
                            onChange={(e) => setPickupCity(e.target.value)}
                            placeholder="e.g. Navrangpura, Ahmedabad"
                            className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Destination / City
                        </label>
                        <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-2">
                          <MapPin size={16} className="text-orange-500 shrink-0" />
                          <input
                            type="text"
                            required
                            value={destinationCity}
                            onChange={(e) => setDestinationCity(e.target.value)}
                            placeholder="e.g. Somnath, Udaipur, Kevadia"
                            className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Pickup Date
                        </label>
                        <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-2">
                          <Calendar size={16} className="text-slate-400 shrink-0" />
                          <input
                            type="date"
                            required
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none"
                          />
                        </div>
                      </div>

                      {tripType.includes("Roundtrip") && (
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                            Return Date
                          </label>
                          <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-2">
                            <Calendar size={16} className="text-slate-400 shrink-0" />
                            <input
                              type="date"
                              value={returnDate}
                              onChange={(e) => setReturnDate(e.target.value)}
                              className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Step 3: Vehicle & Passengers */}
                  <div>
                    <h3 className="font-display text-xl font-black uppercase text-slate-900 mb-1">
                      3. Vehicle Selection
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      Select vehicle class matching your passenger count.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Select Vehicle Model
                        </label>
                        <select
                          value={vehicleId}
                          onChange={(e) => setVehicleId(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-semibold text-slate-900 focus:outline-none"
                        >
                          {VEHICLES.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name} ({v.seating}) — {v.priceDesc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Passenger Count
                        </label>
                        <div className="relative bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-2">
                          <Users size={16} className="text-slate-400 shrink-0" />
                          <select
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none"
                          >
                            <option value="1">1 to 4 Persons (Sedan)</option>
                            <option value="6">5 to 7 Persons (Innova Crysta / Ertiga)</option>
                            <option value="12">8 to 12 Persons (Tempo Traveller)</option>
                            <option value="17">13 to 17 Persons (Tempo Traveller)</option>
                            <option value="26">18 to 26 Persons (Maharaja Traveller)</option>
                            <option value="45">27 to 56 Persons (Luxury Coach Bus)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Step 4: Contact Info */}
                  <div>
                    <h3 className="font-display text-xl font-black uppercase text-slate-900 mb-1">
                      4. Customer Contact Info
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      We will send quotation details to this mobile number.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Anand Sharma"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-semibold text-slate-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="e.g. 98250 12345"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-semibold text-slate-900 focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Special Requirements / Notes
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Need carrier for extra luggage, child seat, or wedding vehicle floral decoration..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs font-semibold text-slate-900 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-2xl"
                  >
                    <Send size={16} />
                    <span>Send Request To WhatsApp Desk</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Sidebar Summary & Guarantees */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
                <h4 className="font-display text-lg font-black uppercase text-amber-400 mb-4">
                  Why Book With Citizen Travels?
                </h4>

                <ul className="space-y-4 text-xs font-semibold text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Transparent Per-KM Rates:</strong> Zero hidden surprise surcharges upon trip end.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Doorstep Pickup:</strong> Drivers arrive 15 minutes before scheduled departure time.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Deep Sanitization:</strong> Vehicles washed and disinfected before every booking.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Free Cancellation:</strong> Modify or cancel up to 24 hours prior to departure without penalty.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Prefer Direct Phone Reservation?
                  </span>
                  <a
                    href="tel:+919724002200"
                    className="text-base font-black text-amber-400 hover:underline flex items-center gap-2 mt-1"
                  >
                    <Phone size={16} />
                    <span>+91 97240 02200</span>
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Quick Card */}
              <div className="bg-emerald-600 text-white rounded-3xl p-6 shadow-xl text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Need Help Right Now?</h4>
                    <p className="text-[11px] text-emerald-100">Our team is active 24/7 on WhatsApp</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919724002200?text=Hello%20Citizen%20Tours!%20I'm%20looking%20for%20an%20instant%20cab%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-emerald-800 font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider text-center block shadow-md hover:bg-emerald-50 transition-colors"
                >
                  Chat With Representative
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
