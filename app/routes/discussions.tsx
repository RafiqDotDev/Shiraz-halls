import React from "react";
import type { Route } from "./+types/discussions";
import { EventDiscussions } from "../components/EventDiscussions";
import { MessageSquareIcon, SparklesIcon, CrownIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Event Discussions & Wedding Majlis | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Connect with brides, grooms, and Shiraz certified event planners. Discuss Barat stage decor, sound acoustics, menu tastings, and vendor recommendations in Peshawar.",
    },
  ];
}

export default function DiscussionsPage() {
  return (
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-14 lg:pb-18">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-sm shadow-amber-900/5">
            <MessageSquareIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>The Sovereign Wedding Majlis</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            Wedding Discussions & <span className="gold-text-gradient">Community Forum</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            Real questions, authentic bride & groom reviews, and verified answers from Shiraz senior hospitality planners and executive master chefs.
          </p>

          {/* Community Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Barat & Walima Stage Advice</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Verified Patron Reviews</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Direct Chef Tastings Insights</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Component */}
      <EventDiscussions />
    </div>
  );
}
