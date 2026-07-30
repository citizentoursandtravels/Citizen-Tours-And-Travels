import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import heroBgImg from "../assets/images/regenerated_image_1784098622037.png";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  bgImage = heroBgImg,
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-50 scale-105"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-4 overflow-x-auto no-scrollbar">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-orange-400 transition-colors shrink-0"
          >
            <Home size={14} className="text-orange-400" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={14} className="text-slate-500 shrink-0" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-orange-400 transition-colors shrink-0 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-amber-400 font-bold shrink-0 whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title (H1 for SEO) */}
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none mb-3">
          {title}
        </h1>

        {/* Coral Accent Line */}
        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mb-4" />

        {/* Subtitle / Description */}
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
