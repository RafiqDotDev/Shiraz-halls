import React, { useState } from "react";
import { SparklesIcon, CalendarIcon, UsersIcon, MapPinIcon, ChevronRightIcon, AwardIcon, CheckCircleIcon, EyeIcon } from "./icons/Icons";
import { VENUES } from "../data/shirazData";

interface HeroProps {
  onCheckAvailability: (venueId: string, date: string, slot: "afternoon" | "evening", guests: number) => void;
  onOpenTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability, onOpenTour }) => {
  const [selectedVenue, setSelectedVenue] = useState(VENUES[0].id);
  const [selectedDate, setSelectedDate] = useState("2026-12-15");
  const [selectedSlot, setSelectedSlot] = useState<"afternoon" | "evening">("evening");
  const [guestCount, setGuestCount] = useState(600);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(selectedVenue, selectedDate, selectedSlot, guestCount);
  };

  const currentVenue = VENUES.find((v) => v.id === selectedVenue) || VENUES[0];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] py-16 lg:py-24">
      {/* Background image tint */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Shiraz Luxury Wedding Hall"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf6ee]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content & Quick Estimator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-900 text-xs tracking-wider uppercase shadow-md shadow-amber-900/5 backdrop-blur-md">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-bold">The Sovereign Hospitality Institution of Khyber Since 1990</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span className="text-zinc-600 font-serif lowercase italic">official portal</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                Where Royal Legacies Meet{" "}
                <span className="gold-text-gradient block mt-1">Modern Architectural Grandeur</span>
              </h1>

              <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl font-light leading-relaxed">
                Welcome to <strong className="text-amber-900 font-semibold">Shiraz</strong>. From the monumental 35ft crystal ballroom of
                <strong className="text-amber-900 font-semibold"> Shiraz Arena</strong> to the romantic glasshouse of <strong className="text-amber-900 font-semibold">Shiraz Gathering</strong> and the legendary gourmet heritage of <strong className="text-amber-900 font-semibold">Shiraz Ronaq</strong>.
              </p>
            </div>

            {/* Quick Estimator Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-amber-900/5 border border-amber-200">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100 text-xs uppercase tracking-wider text-amber-900 font-bold">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-amber-600" />
                  <span>Instant Hall Availability & Automated Cost Estimator</span>
                </div>
                <span className="text-emerald-700 font-mono text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 hidden sm:inline font-bold">
                  ⚡ Live 2026/2027 Open
                </span>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
                {/* Select Venue */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Select Venue
                  </label>
                  <div className="relative">
                    <select
                      value={selectedVenue}
                      onChange={(e) => setSelectedVenue(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white appearance-none font-medium shadow-xs"
                    >
                      {VENUES.map((v) => (
                        <option key={v.id} value={v.id} className="bg-white text-zinc-900">
                          {v.name.split("-")[0]}
                        </option>
                      ))}
                    </select>
                    <MapPinIcon className="w-3.5 h-3.5 text-amber-600 absolute right-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min="2026-11-10"
                    max="2027-12-31"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white font-mono shadow-xs"
                  />
                </div>

                {/* Slot & Guest Count */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1 flex justify-between">
                    <span>Slot & Guests</span>
                    <span className="text-amber-800 font-mono font-bold">{guestCount}p</span>
                  </label>
                  <div className="grid grid-cols-2 gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("afternoon")}
                      className={`py-1 rounded-lg text-[10px] font-bold transition-all ${
                        selectedSlot === "afternoon"
                          ? "bg-amber-400 text-amber-950 shadow-xs"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      Lunch
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSlot("evening")}
                      className={`py-1 rounded-lg text-[10px] font-bold transition-all ${
                        selectedSlot === "evening"
                          ? "bg-amber-400 text-amber-950 shadow-xs"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      Dinner
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all flex items-center justify-center gap-1.5 group"
                >
                  <span>Check & Book</span>
                  <ChevronRightIcon className="w-4 h-4 text-amber-950 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Proof Badges */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              <div className="text-center p-2.5 rounded-2xl bg-white/70 border border-amber-100 shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-800">35+</div>
                <div className="text-[10px] text-zinc-600 font-medium uppercase mt-0.5">Years Legacy</div>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-white/70 border border-amber-100 shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-800">12,500+</div>
                <div className="text-[10px] text-zinc-600 font-medium uppercase mt-0.5">Weddings</div>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-white/70 border border-amber-100 shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-800">2,500</div>
                <div className="text-[10px] text-zinc-600 font-medium uppercase mt-0.5">Max Capacity</div>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-white/70 border border-amber-100 shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-800">4.9 ★</div>
                <div className="text-[10px] text-zinc-600 font-medium uppercase mt-0.5">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Luxury Visual Showcase */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300 shadow-2xl shadow-amber-900/10 aspect-[4/5] bg-zinc-900 group">
              <img
                src={currentVenue.image}
                alt={currentVenue.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Feature Pill */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300 shadow-md flex items-center gap-1.5 text-xs text-amber-950 font-bold">
                <SparklesIcon className="w-3.5 h-3.5 text-amber-600" />
                <span>35ft Austrian Crystal Ceiling</span>
              </div>

              {/* Floating Hall Details Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-amber-200 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-800 tracking-wider block">
                      {currentVenue.badges[0]}
                    </span>
                    <h3 className="font-display font-bold text-base text-zinc-900">
                      {currentVenue.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-amber-900 block font-mono">
                      ₨ {currentVenue.baseHallRent.toLocaleString()}
                    </span>
                    <span className="text-[9px] text-zinc-500 uppercase">Base Hall Rental</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-600 pt-1 border-t border-zinc-100">
                  <span className="flex items-center gap-1 font-medium">
                    <UsersIcon className="w-3.5 h-3.5 text-amber-700" />
                    <span>{currentVenue.capacityMin} - {currentVenue.capacityMax} Guests</span>
                  </span>
                  <span className="text-emerald-700 font-semibold font-mono text-[11px]">
                    ⚡ Zero Load-Shedding (3x 500kVA)
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Carousel */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {VENUES.map((v) => {
                const isSelected = v.id === selectedVenue;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVenue(v.id)}
                    className={`relative rounded-xl overflow-hidden border transition-all text-left group p-1 ${
                      isSelected
                        ? "border-amber-500 bg-amber-50 shadow-md ring-2 ring-amber-400/30"
                        : "border-zinc-200 bg-white hover:border-amber-300"
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-amber-500/20" />
                      )}
                    </div>
                    <div className="text-[10px] font-bold text-zinc-800 truncate mt-1 px-1">
                      {v.name.split("-")[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
