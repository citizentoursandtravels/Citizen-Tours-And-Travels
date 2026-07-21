import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Phone, Mail, MapPin, Calendar, Clock, Car, Users, Route, FileText, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { PACKAGES } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleId?: string;
  initialPackageId?: string;
}

const VEHICLE_OPTIONS = [
  "Hatchback",
  "Sedan",
  "SUV",
  "Innova",
  "Ertiga",
  "Tempo Traveller",
  "Mini Bus",
  "Luxury Bus",
];

const TRIP_TYPES = [
  "One Way",
  "Round Trip",
  "Local",
  "Outstation",
];

export function BookingModal({ isOpen, onClose, initialVehicleId, initialPackageId }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    pickupDate: "",
    pickupTime: "",
    vehicleType: "",
    passengers: "",
    tripType: "",
    specialRequirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync initial selections and prefill when modal opens
  useEffect(() => {
    if (isOpen) {
      let mappedVehicle = "";
      let mappedDrop = "";
      let mappedTripType = "";
      let mappedSpecial = "";

      if (initialVehicleId) {
        const lowerId = initialVehicleId.toLowerCase();
        if (lowerId.includes("ertiga")) mappedVehicle = "Ertiga";
        else if (lowerId.includes("innova")) mappedVehicle = "Innova";
        else if (lowerId.includes("tempo") || lowerId.includes("urbania")) mappedVehicle = "Tempo Traveller";
        else if (lowerId.includes("suv") || lowerId.includes("fortuner")) mappedVehicle = "SUV";
        else if (lowerId.includes("sedan") || lowerId.includes("mercedes")) mappedVehicle = "Sedan";
      }

      if (initialPackageId) {
        const pkg = PACKAGES.find((p) => p.id === initialPackageId);
        if (pkg) {
          mappedDrop = pkg.title;
          mappedTripType = "Outstation";
          mappedSpecial = `Interested in the "${pkg.title}" Package (${pkg.duration})`;
        }
      }

      setFormData({
        name: "",
        phone: "",
        email: "",
        pickup: "",
        drop: mappedDrop,
        pickupDate: "",
        pickupTime: "",
        vehicleType: mappedVehicle,
        passengers: "",
        tripType: mappedTripType,
        specialRequirements: mappedSpecial,
      });
      setErrors({});
      setTouched({});
      setIsSubmitted(false);

      // Smooth focus
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 150);
    }
  }, [isOpen, initialVehicleId, initialPackageId]);

  // Handle Input Changes & Inline Validations
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    const trimmedVal = value.trim();

    switch (name) {
      case "name":
        if (!trimmedVal) errorMsg = "Full name is required";
        break;
      case "phone":
        if (!trimmedVal) {
          errorMsg = "Mobile number is required";
        } else if (!/^\+?[0-9\s-]{8,15}$/.test(trimmedVal)) {
          errorMsg = "Please enter a valid mobile number";
        }
        break;
      case "pickup":
        if (!trimmedVal) errorMsg = "Pickup location is required";
        break;
      case "drop":
        if (!trimmedVal) errorMsg = "Drop location is required";
        break;
      case "pickupDate":
        if (!value) errorMsg = "Pickup date is required";
        break;
      case "pickupTime":
        if (!value) errorMsg = "Pickup time is required";
        break;
      case "vehicleType":
        if (!value) errorMsg = "Please select a vehicle type";
        break;
      case "passengers":
        if (!trimmedVal) {
          errorMsg = "Number of passengers is required";
        } else {
          const num = parseInt(trimmedVal, 10);
          if (isNaN(num) || num <= 0) {
            errorMsg = "Must be 1 or more passengers";
          }
        }
        break;
      case "tripType":
        if (!value) errorMsg = "Please select a trip type";
        break;
      default:
        break;
    }

    setErrors((prev) => {
      const copy = { ...prev };
      if (errorMsg) {
        copy[name] = errorMsg;
      } else {
        delete copy[name];
      }
      return copy;
    });
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    const requiredKeys = ["name", "phone", "pickup", "drop", "pickupDate", "pickupTime", "vehicleType", "passengers", "tripType"];

    requiredKeys.forEach((key) => {
      const val = formData[key as keyof typeof formData] || "";
      const trimmedVal = val.trim();
      
      if (!trimmedVal) {
        if (key === "vehicleType") newErrors[key] = "Please select a vehicle type";
        else if (key === "tripType") newErrors[key] = "Please select a trip type";
        else if (key === "pickupDate") newErrors[key] = "Pickup date is required";
        else if (key === "pickupTime") newErrors[key] = "Pickup time is required";
        else newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1).replace("Date", "").replace("Time", "")} is required`;
      } else if (key === "phone" && !/^\+?[0-9\s-]{8,15}$/.test(trimmedVal)) {
        newErrors[key] = "Please enter a valid mobile number";
      } else if (key === "passengers") {
        const num = parseInt(trimmedVal, 10);
        if (isNaN(num) || num <= 0) {
          newErrors[key] = "Must be 1 or more passengers";
        }
      }
    });

    setErrors(newErrors);
    
    // Mark all as touched
    const allTouched: Record<string, boolean> = {};
    requiredKeys.forEach((k) => { allTouched[k] = true; });
    setTouched(allTouched);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      // Find the first error element and scroll to it if possible
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const el = document.getElementsByName(firstErrorKey)[0];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }

    const emailStr = formData.email.trim() ? formData.email.trim() : "Not Provided";
    const specialReqStr = formData.specialRequirements.trim() ? formData.specialRequirements.trim() : "None";

    // Format prefilled WhatsApp Message exactly as requested
    const formattedMessage = `🚖 *NEW BOOKING REQUEST*

👤 Name:
${formData.name.trim()}

📞 Mobile:
${formData.phone.trim()}

📧 Email:
${emailStr}

📍 Pickup:
${formData.pickup.trim()}

🏁 Drop:
${formData.drop.trim()}

📅 Date:
${formData.pickupDate}

🕒 Time:
${formData.pickupTime}

🚗 Vehicle:
${formData.vehicleType}

👥 Passengers:
${formData.passengers}

🛣 Trip Type:
${formData.tripType}

📝 Special Requirements:
${specialReqStr}

-------------------------------
Booked from Citizen Tours & Travels Website
-------------------------------`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappURL = `https://wa.me/919724002200?text=${encodedMessage}`;

    // Open WhatsApp in a new tab with the prefilled message
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    // Change status to success
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
        {/* Glass backdrop with dark tint and blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
        />

        {/* Modal Window Container - Premium Glassmorphism styling */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col my-4"
        >
          {/* Accent Gold Top Bar */}
          <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 shrink-0" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-navy-500 hover:text-navy-900 hover:bg-navy-100 transition-all p-1.5 rounded-full border border-navy-100 bg-white cursor-pointer z-20"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-50 border border-gold-200 text-gold-700 mb-2 shadow-xs">
                    <Car size={13} /> Instant WhatsApp Booking
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-950 tracking-tight">
                    Book Your <span className="text-gold-600">Dream Journey</span>
                  </h3>
                  <p className="text-navy-600 text-sm mt-1">
                    Complete the travel questionnaire below. All reservation requests are securely compiled and sent to our agents instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Personal Details */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-navy-400 uppercase tracking-wider border-b border-navy-100 pb-1">
                      1. Passenger Contact Information
                    </h4>
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                          <User size={18} />
                        </div>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your full name"
                          className={`w-full bg-navy-50/50  border ${
                            errors.name ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                          } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400  shadow-xs`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle size={13} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Contact details row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Phone size={18} />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. +91 98765 43210"
                            className={`w-full bg-navy-50/50  border ${
                              errors.phone ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400  shadow-xs`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Address (Optional) */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Email Address <span className="text-navy-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Mail size={18} />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full bg-navy-50/50 border border-navy-200 focus:border-gold-500 focus:bg-white text-navy-950 rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400 shadow-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey details */}
                  <div className="space-y-4 pt-1">
                    <h4 className="text-xs font-bold text-navy-400 uppercase tracking-wider border-b border-navy-100 pb-1">
                      2. Trip & Logistics Details
                    </h4>

                    {/* Pickup & Drop Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Pickup Location */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Pickup Location <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                            <MapPin size={18} />
                          </div>
                          <input
                            type="text"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Ahmedabad Airport, Hotel, etc."
                            className={`w-full bg-navy-50/50  border ${
                              errors.pickup ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400  shadow-xs`}
                          />
                        </div>
                        {errors.pickup && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.pickup}
                          </p>
                        )}
                      </div>

                      {/* Drop Location */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Drop Location <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-500">
                            <MapPin size={18} />
                          </div>
                          <input
                            type="text"
                            name="drop"
                            value={formData.drop}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Somnath, Statue of Unity, destination..."
                            className={`w-full bg-navy-50/50  border ${
                              errors.drop ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400  shadow-xs`}
                          />
                        </div>
                        {errors.drop && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.drop}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Pickup Date */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Pickup Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Calendar size={18} />
                          </div>
                          <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-navy-50/50  border ${
                              errors.pickupDate ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all shadow-xs`}
                          />
                        </div>
                        {errors.pickupDate && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.pickupDate}
                          </p>
                        )}
                      </div>

                      {/* Pickup Time */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Pickup Time <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Clock size={18} />
                          </div>
                          <input
                            type="time"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-navy-50/50  border ${
                              errors.pickupTime ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all shadow-xs`}
                          />
                        </div>
                        {errors.pickupTime && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.pickupTime}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Vehicles and Passengers Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Vehicle Type */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Vehicle Type <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Car size={18} />
                          </div>
                          <select
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-navy-50/50  border ${
                              errors.vehicleType ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all shadow-xs cursor-pointer appearance-none`}
                          >
                            <option value="">-- Choose Vehicle --</option>
                            {VEHICLE_OPTIONS.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                        {errors.vehicleType && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.vehicleType}
                          </p>
                        )}
                      </div>

                      {/* Passengers */}
                      <div>
                        <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                          Number of Passengers <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                            <Users size={18} />
                          </div>
                          <input
                            type="number"
                            name="passengers"
                            min="1"
                            value={formData.passengers}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. 4"
                            className={`w-full bg-navy-50/50  border ${
                              errors.passengers ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                            } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all placeholder:text-navy-400  shadow-xs`}
                          />
                        </div>
                        {errors.passengers && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle size={13} /> {errors.passengers}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Trip Type */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                        Trip Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-navy-400">
                          <Route size={18} />
                        </div>
                        <select
                          name="tripType"
                          value={formData.tripType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-navy-50/50  border ${
                            errors.tripType ? "border-red-500 focus:border-red-500" : "border-navy-200  focus:border-gold-500"
                          } focus:bg-white  text-navy-950  rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all shadow-xs cursor-pointer appearance-none`}
                        >
                          <option value="">-- Select Trip Type --</option>
                          {TRIP_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      {errors.tripType && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle size={13} /> {errors.tripType}
                        </p>
                      )}
                    </div>

                    {/* Special Requirements (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-navy-700 mb-1.5">
                        Special Requirements <span className="text-navy-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3.5 pointer-events-none text-navy-400">
                          <FileText size={18} />
                        </div>
                        <textarea
                          name="specialRequirements"
                          rows={2.5}
                          value={formData.specialRequirements}
                          onChange={handleChange}
                          placeholder="Luggage details, baby/elderly assistance, custom route stop requests..."
                          className="w-full bg-navy-50/50 border border-navy-200 focus:border-gold-500 focus:bg-white text-navy-950 rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all resize-none placeholder:text-navy-400 shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Area */}
                  <div className="pt-4 border-t border-navy-100">
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.98]"
                    >
                      <MessageSquare size={18} className="fill-white" />
                      Send Booking on WhatsApp
                    </button>
                    <p className="text-center text-[11px] text-navy-400 mt-2">
                      Clicking submit will validate entries and open official WhatsApp Click-to-Chat instantly.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 px-4"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border border-green-200 text-[#25D366] mb-5 shadow-lg shadow-green-500/10">
                  <CheckCircle2 size={44} className="animate-pulse" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-950 mb-2">
                  WhatsApp Request Dispatched!
                </h3>
                <p className="text-navy-600 text-base max-w-md mx-auto mb-6">
                  Thank you, <span className="text-navy-950 font-semibold">{formData.name}</span>! Your booking request details have been formatted and sent to our agents via WhatsApp.
                </p>

                {/* Structured details card */}
                <div className="bg-navy-50/70 border border-navy-150 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left space-y-2.5 text-sm shadow-inner">
                  <h4 className="text-xs font-bold text-navy-400 uppercase tracking-widest border-b border-navy-100 pb-1.5 mb-2">
                    Formatted Booking Profile
                  </h4>
                  <p className="text-navy-700"><strong className="text-gold-700">Lead Passenger:</strong> {formData.name}</p>
                  <p className="text-navy-700"><strong className="text-gold-700">Mobile Number:</strong> {formData.phone}</p>
                  <p className="text-navy-700"><strong className="text-gold-700">Logistics Loop:</strong> {formData.pickup} → {formData.drop}</p>
                  <p className="text-navy-700"><strong className="text-gold-700">Scheduled:</strong> {formData.pickupDate} @ {formData.pickupTime}</p>
                  <p className="text-navy-700"><strong className="text-gold-700">Vehicle Type:</strong> {formData.vehicleType} ({formData.passengers} pax)</p>
                  <p className="text-navy-700"><strong className="text-gold-700">Journey Formula:</strong> {formData.tripType}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    onClick={() => {
                      const emailStr = formData.email.trim() ? formData.email.trim() : "Not Provided";
                      const specialReqStr = formData.specialRequirements.trim() ? formData.specialRequirements.trim() : "None";
                      const msg = `🚖 *NEW BOOKING REQUEST*

👤 Name:
${formData.name.trim()}

📞 Mobile:
${formData.phone.trim()}

📧 Email:
${emailStr}

📍 Pickup:
${formData.pickup.trim()}

🏁 Drop:
${formData.drop.trim()}

📅 Date:
${formData.pickupDate}

🕒 Time:
${formData.pickupTime}

🚗 Vehicle:
${formData.vehicleType}

👥 Passengers:
${formData.passengers}

🛣 Trip Type:
${formData.tripType}

📝 Special Requirements:
${specialReqStr}

-------------------------------
Booked from Citizen Tours & Travels Website
-------------------------------`;
                      window.open(`https://wa.me/919724002200?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all text-sm uppercase tracking-wider cursor-pointer"
                  >
                    <MessageSquare size={18} className="fill-white" />
                    Open WhatsApp Again
                  </button>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-lg border border-navy-700 hover:border-gold-500/40 transition-all text-sm uppercase tracking-wider cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
