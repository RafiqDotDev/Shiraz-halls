import React, { useState } from "react";
import { VENUES } from "../data/shirazData";
import type { Venue } from "../types";
import { CrownIcon, UsersIcon, MapPinIcon, CheckCircleIcon, SparklesIcon, ChevronRightIcon, AwardIcon } from "./icons/Icons";

interface VenueShowcaseProps {
  onSelectVenueForBooking: (venueId: string) => void;
  onOpenVisualizer: (venueId: string) => void;
}

export const VenueShowcase: React.FC<VenueShowcaseProps> = ({
  onSelectVenueForBooking,
  onOpenVisualizer,
}) => {
  const [activeVenueId, setActiveVenueId] = useState(VENUES[0].id);
  const [showComparison, setShowComparison] = useState(false);

  const activeVenue = VENUES.find((v) => v.id === activeVenueId) || VENUES[0];

  return (
    <section id="venues" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative Top Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider uppercase">
            <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>The Imperial Collection</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Legendary Venues Crafted for{" "}
            <span className="gold-text-gradient">Royal Celebrations</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Each Shiraz venue is masterfully designed with dedicated architectural themes, acoustic isolation, VIP bridal sanctuaries, and backup generator power for effortless, unforgettable weddings.
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-amber-400 bg-white text-amber-900 hover:bg-amber-50 shadow-sm transition-colors flex items-center gap-2"
            >
              <span>{showComparison ? "Close Comparison" : "Compare Hall Specs Side-by-Side"}</span>
              <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform ${showComparison ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Table in Light Theme */}
        {showComparison && (
          <div className="mb-14 overflow-x-auto bg-white rounded-3xl p-6 border border-amber-200 shadow-xl shadow-amber-900/5">
            <h3 className="font-display text-lg text-amber-950 font-bold mb-4 flex items-center gap-2">
              <AwardIcon className="w-5 h-5 text-amber-700" />
              <span>Architectural & Capacity Comparison Matrix</span>
            </h3>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-amber-900 bg-amber-50/60">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider rounded-l-lg">Feature</th>
                  {VENUES.map((v) => (
                    <th key={v.id} className="py-3 px-4 font-bold">{v.name.split("-")[0]}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">Guest Capacity</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4 font-mono font-bold text-amber-900">{v.capacityMin} - {v.capacityMax} guests</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">Ceiling Height</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4">{v.ceilingHeight}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">Hall Dimensions</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4 font-mono">{v.dimensions}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">Base Hall Booking</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4 font-mono text-emerald-800 font-bold">₨ {v.baseHallRent.toLocaleString()}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">VIP Bridal Suites</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4 font-medium">
                      {v.id === "shiraz-arena" ? "Dual 5-Star Suites" : "Private Luxury Suite"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-zinc-500 font-medium">Action</td>
                  {VENUES.map((v) => (
                    <td key={v.id} className="py-3 px-4">
                      <button
                        onClick={() => {
                          onSelectVenueForBooking(v.id);
                          setShowComparison(false);
                        }}
                        className="text-xs bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                      >
                        Select & Book
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Venue Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {VENUES.map((venue) => {
            const isSelected = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-white border-amber-500 shadow-md shadow-amber-900/10 scale-[1.02] ring-2 ring-amber-400/20"
                    : "bg-white/80 border-zinc-200 hover:border-amber-300 hover:bg-white"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                )}
                <div className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider mb-1">
                  {venue.badges[0]}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-zinc-900">
                  {venue.name.split("-")[0]}
                </div>
                <div className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1.5 font-medium">
                  <UsersIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{venue.capacityMin} - {venue.capacityMax} Guests</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Venue Hero Showcase Card (Light Theme) */}
        <div className="bg-white rounded-3xl overflow-hidden border border-amber-200 shadow-xl shadow-amber-900/5 grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Visual Area */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] overflow-hidden group">
            <img
              src={activeVenue.image}
              alt={activeVenue.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Badges on Image */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              {activeVenue.badges.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-amber-950 shadow-md"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Rating pill */}
            <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-white/95 shadow-md flex items-center gap-1.5 text-xs text-amber-900 font-bold">
              <span className="text-amber-500">★</span>
              <span>{activeVenue.rating}</span>
              <span className="text-zinc-500 font-normal">({activeVenue.reviewsCount} reviews)</span>
            </div>

            {/* Bottom Caption on Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="font-display text-2xl sm:text-3xl font-bold mb-1">
                {activeVenue.name}
              </div>
              <div className="text-sm font-serif italic text-amber-200 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{activeVenue.location}</span>
              </div>
            </div>
          </div>

          {/* Right Info & Specs Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-2">
                {activeVenue.subtitle}
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                {activeVenue.description}
              </p>

              {/* Key Specs Box */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 mb-6">
                <div>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider block font-medium">Dimensions</span>
                  <span className="font-mono text-xs text-zinc-900 font-semibold">{activeVenue.dimensions}</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider block font-medium">Ceiling Height</span>
                  <span className="font-mono text-xs text-amber-900 font-semibold">{activeVenue.ceilingHeight}</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider block font-medium">Base Hall Fee</span>
                  <span className="font-mono text-xs text-emerald-800 font-bold">₨ {activeVenue.baseHallRent.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider block font-medium">Guest Range</span>
                  <span className="font-mono text-xs text-amber-900 font-bold">{activeVenue.capacityMin} - {activeVenue.capacityMax}</span>
                </div>
              </div>

              {/* Key Amenities */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                  Venue Inclusions:
                </div>
                <div className="space-y-1.5">
                  {activeVenue.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-100">
              <button
                onClick={() => onSelectVenueForBooking(activeVenue.id)}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 transition-all shadow-md shadow-amber-500/20 text-center flex items-center justify-center gap-2"
              >
                <SparklesIcon className="w-4 h-4 text-amber-950" />
                <span>Book This Venue</span>
              </button>

              <button
                onClick={() => onOpenVisualizer(activeVenue.id)}
                className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-900 border border-amber-300 bg-amber-50 hover:bg-amber-100 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>3D Layout Planner</span>
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
