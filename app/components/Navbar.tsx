import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import {
  CrownIcon,
  PhoneIcon,
  SparklesIcon,
  CalendarIcon,
  MessageSquareIcon,
  UtensilsIcon,
  InstagramIcon,
} from "./icons/Icons";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Venues", href: "/venues" },
    { label: "3D Visualizer", href: "/visualizer" },
    { label: "Royal Catering", href: "/catering" },
    { label: "Discussions", href: "/discussions" },
    { label: "Wedding Planner", href: "/planner" },
    { label: "Gallery", href: "/gallery" },
    { label: "Locations", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Heritage Notice Bar */}
      <div className="bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/90 border-b border-amber-200 text-xs py-1.5 px-4 text-amber-950 font-medium tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-serif italic text-amber-900 font-bold">Shiraz Hospitality Group</span>
            <span className="hidden sm:inline text-amber-300">|</span>
            <span className="hidden sm:inline text-zinc-600 font-normal">
              Imperial Venues & Royal Catering Since 1990
            </span>
            <a
              href="https://www.instagram.com/shirazgrouppk/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[11px] text-amber-900 hover:text-amber-950 bg-white/80 border border-amber-300 px-2 py-0.5 rounded-full font-mono font-medium shadow-xs"
            >
              <InstagramIcon className="w-3 h-3 text-red-600" />
              <span>@shirazgrouppk</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-zinc-700">
            <a
              href="tel:+92915701234"
              className="flex items-center gap-1.5 hover:text-amber-900 transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden md:inline font-mono text-xs font-semibold">+92 91 570 1234</span>
              <span className="md:hidden">Call Desk</span>
            </a>
            <span className="text-amber-300">|</span>
            <span className="text-emerald-800 font-mono text-[11px] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 font-bold">
              ⚡ 2026/2027 Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Glass Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-amber-200/80 py-3 shadow-md shadow-amber-900/5 text-zinc-900"
            : "bg-white/90 backdrop-blur-sm border-b border-amber-100/60 py-4 text-zinc-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Monogram */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <CrownIcon className="w-5 h-5 text-amber-700 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-widest text-zinc-900">
                SHIRAZ
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-800 font-bold -mt-1">
                Arena • Gathering • Ronaq
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-wider transition-colors relative py-1.5 ${
                    isActive
                      ? "text-amber-950 font-extrabold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-600"
                      : "text-zinc-700 hover:text-amber-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action CTA & Instagram */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/shirazgrouppk/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors"
              title="Follow @shirazgrouppk on Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-red-600" />
            </a>

            <Link
              to="/booking"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <SparklesIcon className="w-3.5 h-3.5 text-amber-950" />
              <span>Automated Booking</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-amber-200 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive ? "bg-amber-100 text-amber-950 font-bold" : "text-zinc-700 hover:bg-amber-50 hover:text-amber-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="https://www.instagram.com/shirazgrouppk/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200"
              >
                <InstagramIcon className="w-4 h-4 text-red-600" />
                <span>Follow @shirazgrouppk</span>
              </a>
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 to-amber-500 shadow-md"
              >
                <SparklesIcon className="w-4 h-4 text-amber-950" />
                <span>Launch Automated Booking</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
