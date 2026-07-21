import React from "react";
import { Compass, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import logoImg from "../assets/images/citizen_travels_logo_1784098450742.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-navy-50 border-t border-navy-100 text-navy-950 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: Company Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="Citizen Travels Logo"
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
            </div>

            <p className="text-navy-600 text-xs leading-relaxed font-normal">
              Citizen Tours & Travels is Ahmedabad's premier transport service provider since 2007. We operate premium, clean, sanitized vehicles with expert highway chauffeurs to offer perfect journeys.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-navy-200 text-navy-600 hover:text-white hover:bg-gold-500 hover:border-gold-500 flex items-center justify-center transition-all duration-200 shadow-xs"
                  aria-label={soc.label}
                >
                  <soc.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold-600 border-b border-navy-100 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Vehicle Fleet", href: "#fleet" },
                { name: "Tour Packages", href: "#packages" },
                { name: "Client FAQs", href: "#faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-navy-700 hover:text-gold-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-gold-500/50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold-600 border-b border-navy-100 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Premium Car Rental",
                "Tempo Traveller (9-26S)",
                "Airport Pick & Drop",
                "Wedding Coach Transit",
                "Corporate Staff Contracts",
                "Outstation Tour Cab",
                "Pilgrimage Circuit Loops",
              ].map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="text-navy-700 hover:text-gold-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-gold-500/50" />
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tour Packages (3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold-600 border-b border-navy-100 pb-2">
              Tour Packages
            </h4>
            <ul className="space-y-2.5">
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
                  <a
                    href="#packages"
                    onClick={(e) => handleLinkClick(e, "#packages")}
                    className="text-navy-700 hover:text-gold-600 text-xs flex items-center gap-1 transition-colors duration-200"
                  >
                    <ChevronRight size={12} className="text-gold-500/50" />
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="pt-8 border-t border-navy-150 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-navy-500">
          <p>© {currentYear} Citizen Tours & Travels. All Rights Reserved. Crafted for premium road hospitality.</p>
          <div className="flex items-center gap-6">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-gold-600 transition-colors">Privacy Policy</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-gold-600 transition-colors">Terms of Service</a>
            <a href="#faqs" onClick={(e) => handleLinkClick(e, "#faqs")} className="hover:text-gold-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
