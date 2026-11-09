import React from "react";
import { CrownIcon, PhoneIcon, MapPinIcon, MailIcon, SparklesIcon, InstagramIcon } from "./icons/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f0e8] border-t border-amber-200 text-zinc-600 text-xs">
      {/* Upper Footer Links & Venues */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/20">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <CrownIcon className="w-5 h-5 text-amber-700" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-widest text-zinc-900">
                  SHIRAZ
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-800 block -mt-1 font-bold">
                  Hospitality & Wedding Empire
                </span>
              </div>
            </div>

            <p className="text-zinc-600 text-xs leading-relaxed font-light">
              Since 1990, Shiraz has stood as Pakistan’s pinnacle of bespoke hospitality, uniting architectural majesty, royal wedding marquees, and iconic Peshawari cuisine.
            </p>

            {/* Official Instagram Badge */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/shirazgrouppk/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 hover:text-amber-950 hover:bg-amber-50 transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-red-600" />
                <span className="font-mono text-xs font-semibold">@shirazgrouppk</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full border border-amber-300/80 font-bold">Official</span>
              </a>
            </div>

            <div className="pt-1 text-[11px] text-amber-900 flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Online Automated Reservations Active</span>
            </div>
          </div>

          {/* Venues Addresses */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-900">
              Our Signature Locations
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-700">
              <div>
                <strong className="text-zinc-900 block font-semibold">Shiraz Arena (Grand Hall)</strong>
                <span className="text-zinc-500">Ring Road Interchange / Near University Town, Peshawar</span>
              </div>
              <div>
                <strong className="text-zinc-900 block font-semibold">Shiraz Gathering (Crystal Marquee)</strong>
                <span className="text-zinc-500">Board Bazaar / Jamrud Road corridor, Peshawar</span>
              </div>
              <div>
                <strong className="text-zinc-900 block font-semibold">Shiraz Ronaq & Restaurant</strong>
                <span className="text-zinc-500">Abdara Road, University Town, Peshawar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-900">
              Experience & Features
            </h4>
            <ul className="space-y-2 text-zinc-600">
              <li>
                <a href="/venues" className="hover:text-amber-900 transition-colors">
                  The Imperial Hall Collection
                </a>
              </li>
              <li>
                <a href="/booking" className="hover:text-amber-900 transition-colors">
                  Automated Booking Engine & Cost Estimator
                </a>
              </li>
              <li>
                <a href="/visualizer" className="hover:text-amber-900 transition-colors">
                  3D Hall & Stage Layout Visualizer
                </a>
              </li>
              <li>
                <a href="/catering" className="hover:text-amber-900 transition-colors">
                  Pakistani Royal Catering Menu Builder
                </a>
              </li>
              <li>
                <a href="/discussions" className="hover:text-amber-900 transition-colors">
                  Event Discussions & Majlis Community
                </a>
              </li>
              <li>
                <a href="/planner" className="hover:text-amber-900 transition-colors">
                  Pakistani Wedding Checklist & Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-900">
              VIP Concierge Desk
            </h4>
            <div className="space-y-2.5">
              <a
                href="tel:+92915701234"
                className="flex items-center gap-2.5 text-zinc-800 hover:text-amber-900 transition-colors font-medium"
              >
                <PhoneIcon className="w-4 h-4 text-amber-700" />
                <span className="font-mono text-xs">+92 91 570 1234 / 584 1234</span>
              </a>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
              >
                <span className="w-4 h-4 text-center">💬</span>
                <span className="font-mono text-xs">+92 300 000 0000 (WhatsApp)</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-600">
                <MailIcon className="w-4 h-4 text-amber-700" />
                <span>reservations@shiraz.pk</span>
              </div>

              <div className="pt-3">
                <a
                  href="/booking"
                  className="inline-block w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all cursor-pointer"
                >
                  Book Your Wedding Date
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-200/80 bg-[#eee7dc] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-[11px]">
          <div>
            © {new Date().getFullYear()} Shiraz Hospitality Group (shiraz.pk). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/shirazgrouppk/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:text-amber-950 flex items-center gap-1 font-mono font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-red-600" />
              <span>@shirazgrouppk</span>
            </a>
            <span className="text-amber-300">|</span>
            <span className="font-serif italic text-amber-900">
              The Epitome of Royal Hospitality in Peshawar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
