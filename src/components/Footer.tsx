import React from "react";
import { Link } from "react-router-dom";
import { Compass, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import logoImg from "../assets/images/citizen_travels_logo_1784098450742.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-navy-50 border-t border-navy-100 text-navy-950 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Column 1: Company Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Link to="/" onClick={handleScrollTop} className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Citizen Tours and Travels Logo"
                loading="lazy"
                decoding="async"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl object-contain shadow-md border border-navy-100 bg-white"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-black text-navy-950 text-lg tracking-tight uppercase block leading-none">
                  Citizen Travels
                </span>
                <span className="text-[10px] font-mono text-navy-500 tracking-widest uppercase block mt-1">
                  & Tours • Ahmedabad
                </span>
              </div>
            </Link>

            <p className="text-navy-600 text-xs leading-relaxed font-normal">
              Citizen Tours & Travels is Ahmedabad's premier transport service provider since 2007. We operate premium, clean, sanitized vehicles with expert highway chauffeurs to offer perfect journeys.
            </p>

            <div className="space-y-2 text-xs font-medium text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500 shrink-0" />
                <span>Ground Floor, C.G. Road, Navrangpura, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-orange-500 shrink-0" />
                <span>+91 97240 02200 / +91 92270 02400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-orange-500 shrink-0" />
                <span>citizentoursandtravels07@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-navy-200 text-navy-600 hover:text-white hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-200 shadow-xs"
                  aria-label={soc.label}
                >
                  <soc.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-orange-600 border-b border-navy-100 pb-2">
              All Pages
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Our Vehicles", path: "/fleet" },
                { name: "Tour Packages", path: "/tour-packages" },
                { name: "Photo Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Client FAQs", path: "/faq" },
                { name: "Travel Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
                { name: "Book My Ride", path: "/book-my-ride" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleScrollTop}
                    className="text-navy-700 hover:text-orange-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-orange-500/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-orange-600 border-b border-navy-100 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Premium Car Rental",
                "Tempo Traveller (12-26S)",
                "Airport Pick & Drop",
                "Wedding Coach Transit",
                "Corporate Staff Contracts",
                "Outstation Tour Cab",
                "Pilgrimage Circuit Loops",
                "Local City Full Day",
                "Railway Station Transfers",
              ].map((srv) => (
                <li key={srv}>
                  <Link
                    to="/services"
                    onClick={handleScrollTop}
                    className="text-navy-700 hover:text-orange-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-orange-500/50" />
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tour Packages (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-orange-600 border-b border-navy-100 pb-2">
              Tour Packages
            </h4>
            <ul className="space-y-2">
              {[
                "Gujarat Heritage Loop",
                "Rajasthan Palace Circuit",
                "Somnath & Dwarka Spiritual",
                "Statue of Unity Weekend",
                "Mount Abu Cooler",
                "Udaipur Romantic Getaway",
                "Bespoke Tailor-Made Tour",
              ].map((pkg) => (
                <li key={pkg}>
                  <Link
                    to="/tour-packages"
                    onClick={handleScrollTop}
                    className="text-navy-700 hover:text-orange-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-orange-500/50" />
                    {pkg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="pt-6 border-t border-navy-150 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-navy-500">
          <p>© {currentYear} Citizen Tours & Travels Pvt. Ltd. All Rights Reserved. Navrangpura, Ahmedabad.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" onClick={handleScrollTop} className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link to="/contact" onClick={handleScrollTop} className="hover:text-orange-600 transition-colors">Terms of Service</Link>
            <Link to="/faq" onClick={handleScrollTop} className="hover:text-orange-600 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

