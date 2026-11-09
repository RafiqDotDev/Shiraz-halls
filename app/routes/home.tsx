import React, { useState } from "react";
import type { Route } from "./+types/home";
import { Link, useNavigate } from "react-router";
import { VENUES, INITIAL_DISCUSSIONS } from "../data/shirazData";
import { HallAvailabilityCalendar } from "../components/HallAvailabilityCalendar";
import { WeddingFAQ } from "../components/WeddingFAQ";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { VirtualTourModal } from "../components/VirtualTourModal";
import {
  CrownIcon,
  SparklesIcon,
  CalendarIcon,
  UsersIcon,
  MapPinIcon,
  ChevronRightIcon,
  AwardIcon,
  CheckCircleIcon,
  UtensilsIcon,
  EyeIcon,
  SlidersIcon,
  MessageSquareIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  PlayIcon,
} from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Shiraz | Imperial Wedding Halls, Shiraz Arena & Royal Catering (shiraz.pk)",
    },
    {
      name: "description",
      content:
        "Welcome to Shiraz Hospitality Group (shiraz.pk). Experience Peshawar's most prestigious wedding venues: Shiraz Arena, Shiraz Gathering glasshouse marquees, and 35 years of royal Peshawari culinary mastery.",
    },
    {
      name: "keywords",
      content:
        "Shiraz Arena, Shiraz Gathering, Shiraz Ronaq, Shiraz Peshawar, wedding halls Peshawar, automated wedding booking, Pakistani catering, Dum Pukht, bridal stage decor",
    },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const [selectedVenue, setSelectedVenue] = useState(VENUES[0].id);
  const [selectedDate, setSelectedDate] = useState("2026-12-18");
  const [selectedSlot, setSelectedSlot] = useState<"afternoon" | "evening">(
    "evening",
  );
  const [guestCount, setGuestCount] = useState(600);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  const currentVenue = VENUES.find((v) => v.id === selectedVenue) || VENUES[0];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/booking?venue=${selectedVenue}&date=${selectedDate}&slot=${selectedSlot}&guests=${guestCount}`,
    );
  };

  const handleCalendarDateSelect = (
    venueId: string,
    date: string,
    slot: "afternoon" | "evening",
  ) => {
    navigate(`/booking?venue=${venueId}&date=${date}&slot=${slot}`);
  };

  return (
    <div className="pt-20">
      {/* 1. NATURAL LUXURY HERO SECTION WITH RIGHT-HAND VISUAL SHOWCASE */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] py-12 lg:py-20">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Shiraz Luxury Wedding Hall"
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf6ee]/90 to-transparent" />
        </div>

        {/* Ambient decorative glowing light spots */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto space-y-10 sm:space-y-12">
          {/* Main Hero Split Grid: Left Text & CTAs, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headlines, Narrative & CTAs (6 or 7 Cols) */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              {/* Royal Pill Badge */}

              {/* Natural Hero Headlines */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                  Where Royal Legacies Meet{" "}
                  <span className="gold-text-gradient block mt-1">
                    Modern Architectural Grandeur
                  </span>
                </h1>

                <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl font-light leading-relaxed">
                  Welcome to{" "}
                  <strong className="text-amber-900 font-semibold">
                    Shiraz
                  </strong>
                  . Step into Peshawar’s most prestigious celebrations across
                  the 35ft crystal ballroom of{" "}
                  <strong className="text-amber-900 font-semibold">
                    Shiraz Arena
                  </strong>
                  , the romantic glasshouse of{" "}
                  <strong className="text-amber-900 font-semibold">
                    Shiraz Gathering
                  </strong>
                  , and the 35-year gourmet heritage of{" "}
                  <strong className="text-amber-900 font-semibold">
                    Shiraz Ronaq
                  </strong>
                  .
                </p>
              </div>

              {/* Natural Quick CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/booking"
                  className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-md shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <SparklesIcon className="w-4 h-4 text-amber-950" />
                  <span>Launch Automated Booking</span>
                </Link>

                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 bg-white border border-amber-300 hover:bg-amber-50 shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <EyeIcon className="w-4 h-4 text-amber-700 group-hover:scale-110 transition-transform" />
                  <span>360° Virtual Hall Tour</span>
                </button>

                <Link
                  to="/visualizer"
                  className="px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-900 hover:text-amber-950 hover:bg-amber-100/60 transition-all flex items-center gap-1.5"
                >
                  <span>3D Layout Planner</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* VIP Trust & Credibility Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-600 border-t border-amber-200/60">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                  <span className="font-bold text-zinc-900">4.9 / 5.0</span>
                  <span className="text-zinc-500 font-serif italic">
                    (348+ verified weddings)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                  <span>Triple 500kVA Zero Load-Shedding</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Luxury Visual Showcase (5 or 6 Cols) */}
            <div className="lg:col-span-6 xl:col-span-5 relative space-y-3.5">
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-none overflow-hidden border-2 border-amber-300/90 shadow-2xl shadow-amber-900/15 aspect-[4/3] sm:aspect-[16/11] bg-zinc-900 group">
                <img
                  src={currentVenue.image}
                  alt={currentVenue.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                {/* Top-Left Live Status Pill */}
                <div className="absolute top-3.5 left-3.5 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-none border border-emerald-400/40 flex items-center gap-2 text-[11px] text-emerald-300 font-semibold shadow-md">
                  <span className="w-2 h-2 rounded-none bg-emerald-400 animate-ping"></span>
                  <span>Open for 2026/2027 Booking</span>
                </div>

                {/* Top-Right Venue Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none border border-amber-300/90 shadow-md flex items-center gap-1.5 text-[11px] text-amber-950 font-bold">
                  <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
                  <span>{currentVenue.badges[0] || "Signature Hall"}</span>
                </div>

                {/* Center 360 Virtual Tour Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    type="button"
                    onClick={() => setIsTourModalOpen(true)}
                    className="pointer-events-auto p-3.5 rounded-none bg-white/90 hover:bg-white text-amber-950 shadow-2xl border-2 border-amber-400 hover:scale-105 active:scale-95 transition-all group/btn flex items-center gap-2 backdrop-blur-md cursor-pointer"
                    title="Open 360° Virtual Tour"
                  >
                    <div className="w-7 h-7 rounded-none bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-amber-950">
                      <PlayIcon className="w-4 h-4 ml-0.5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider pr-2 hidden sm:inline">
                      View 360° Tour
                    </span>
                  </button>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-none border border-amber-200/90 shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-amber-800 tracking-wider block">
                        {currentVenue.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-sm sm:text-base text-zinc-900 truncate">
                        {currentVenue.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-amber-900 block font-mono">
                        ₨ {currentVenue.baseHallRent.toLocaleString()}
                      </span>
                      <span className="text-[9px] text-zinc-500 uppercase">
                        Base Hall Rental
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-zinc-600 pt-1.5 border-t border-zinc-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <UsersIcon className="w-3.5 h-3.5 text-amber-700" />
                      <span>
                        {currentVenue.capacityMin} - {currentVenue.capacityMax}{" "}
                        Guests
                      </span>
                    </span>
                    <span className="text-amber-900 font-serif italic text-xs">
                      {currentVenue.dimensions}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Venue Thumbnail Selector Ribbon */}
              <div className="grid grid-cols-4 gap-2">
                {VENUES.map((v) => {
                  const isSelected = v.id === selectedVenue;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVenue(v.id)}
                      className={`relative rounded-none overflow-hidden border transition-all text-left p-1 group cursor-pointer ${
                        isSelected
                          ? "border-amber-500 bg-amber-50 shadow-md ring-1 ring-amber-400"
                          : "border-zinc-200 bg-white/80 hover:border-amber-300"
                      }`}
                    >
                      <div className="aspect-[16/10] rounded-none overflow-hidden relative">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-amber-500/25 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-none bg-white shadow"></span>
                          </div>
                        )}
                      </div>
                      <div className="text-[10px] font-bold text-zinc-800 truncate mt-1 px-1">
                        {v.name.split("-")[0].trim()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Date Availability & Automated Estimator Bar (Full Width across container) */}
          <div className="bg-white rounded-none p-5 sm:p-7 shadow-xl shadow-amber-900/5 border-2 border-amber-200/90">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 text-xs uppercase tracking-wider text-amber-900 font-bold">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-amber-600" />
                <span>
                  Instant Hall Availability & Automated Cost Estimator
                </span>
              </div>
              <span className="text-emerald-700 font-mono text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-none border border-emerald-200 hidden sm:inline font-bold">
                ⚡ Live 2026/2027 Reservation Radar
              </span>
            </div>

            <form
              onSubmit={handleHeroSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end"
            >
              {/* Select Venue */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                  Select Venue
                </label>
                <div className="relative">
                  <select
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-3 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white appearance-none font-medium shadow-xs"
                  >
                    {VENUES.map((v) => (
                      <option
                        key={v.id}
                        value={v.id}
                        className="bg-white text-zinc-900"
                      >
                        {v.name.split("-")[0].trim()}
                      </option>
                    ))}
                  </select>
                  <MapPinIcon className="w-3.5 h-3.5 text-amber-600 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                  Wedding Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min="2026-11-10"
                  max="2027-12-31"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-none px-3 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white font-mono shadow-xs"
                />
              </div>

              {/* Slot */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                  Slot
                </label>
                <div className="grid grid-cols-2 gap-1 bg-zinc-100 p-1 rounded-none border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("afternoon")}
                    className={`py-1.5 rounded-none text-[11px] font-bold transition-all cursor-pointer ${
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
                    className={`py-1.5 rounded-none text-[11px] font-bold transition-all cursor-pointer ${
                      selectedSlot === "evening"
                        ? "bg-amber-400 text-amber-950 shadow-xs"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Dinner
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 flex justify-between">
                  <span>Guests</span>
                  <span className="text-amber-800 font-mono font-bold">
                    {guestCount}p
                  </span>
                </label>
                <div className="relative flex items-center">
                  <input
                    type="range"
                    min="150"
                    max="2000"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-none text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all flex items-center justify-center gap-1.5 group cursor-pointer"
              >
                <span>Check & Book</span>
                <ChevronRightIcon className="w-4 h-4 text-amber-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Proof Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-amber-200/80">
            <div className="text-center p-3.5 rounded-none bg-white/80 border border-amber-200/80 shadow-xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-800">
                35+
              </div>
              <div className="text-xs text-zinc-600 font-medium tracking-wide uppercase mt-0.5">
                Years Legacy
              </div>
            </div>
            <div className="text-center p-3.5 rounded-none bg-white/80 border border-amber-200/80 shadow-xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-800">
                12,500+
              </div>
              <div className="text-xs text-zinc-600 font-medium tracking-wide uppercase mt-0.5">
                Weddings Hosted
              </div>
            </div>
            <div className="text-center p-3.5 rounded-none bg-white/80 border border-amber-200/80 shadow-xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-800">
                2,500
              </div>
              <div className="text-xs text-zinc-600 font-medium tracking-wide uppercase mt-0.5">
                Max Guest Capacity
              </div>
            </div>
            <div className="text-center p-3.5 rounded-none bg-white/80 border border-amber-200/80 shadow-xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-800">
                4.9 / 5.0
              </div>
              <div className="text-xs text-zinc-600 font-medium tracking-wide uppercase mt-0.5">
                Verified Patron Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY & HERITAGE NARRATIVE SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-none overflow-hidden border-2 border-amber-200 shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                  alt="Shiraz Royal Heritage Wedding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    Abdara Road & Ring Road, Peshawar
                  </span>
                  <div className="font-display text-2xl font-bold">
                    Peshawar’s Royal Hospitality Emblem Since 1990
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-none p-4 border-2 border-amber-300 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                    <CrownIcon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-zinc-900">
                      Zero Load-Shedding
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      3x 500kVA Industrial Backup Generators
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storytelling Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>The Shiraz Philosophy</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                A Half-Century Tradition of Honour, Warmth &{" "}
                <span className="gold-text-gradient">Khyber Hospitality</span>
              </h2>

              <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
                For over three decades, Shiraz has stood at the beating heart of
                Peshawar’s most cherished celebrations. What began as an iconic
                family culinary haven on Abdara Road has blossomed into an
                empire of grand architectural halls and glasshouse marquees.
              </p>

              <div className="space-y-3 pt-2 text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pillarless Engineering:</strong> Monumental 20,000
                    sq ft hall spaces with 35ft crystal chandelier drops that
                    offer unhindered sightlines for every wedding guest.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Desi Ghee & Fresh Meat Heritage:</strong> 100%
                    organic pasture goat meat, slow-cooked in its own fat with
                    rock salt according to 300-year-old regional traditions.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bespoke Female Dignity & Segregation:</strong>{" "}
                    Soundproof partition panels, separate private entrances, and
                    female security/waitstaff upon request.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/venues"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 shadow-sm"
                >
                  Explore All 4 Halls
                </Link>
                <Link
                  to="/catering"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:bg-zinc-50"
                >
                  View Royal Catering Menus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED VENUES TEASER GRID */}
      <section className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>The Sovereign Collection</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                Our Signature{" "}
                <span className="gold-text-gradient">Wedding Halls</span>
              </h2>
              <p className="font-serif text-lg text-zinc-600 font-light">
                Tailored for grand Barat entries, romantic glasshouse Walimas,
                and vibrant floral Mehndis.
              </p>
            </div>

            <Link
              to="/venues"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 hover:text-amber-950 py-2 border-b-2 border-amber-500 self-start md:self-auto"
            >
              <span>Compare All Venues Side-by-Side</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENUES.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-none overflow-hidden border-2 border-amber-200/90 shadow-md shadow-amber-900/5 flex flex-col justify-between group hover:border-amber-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase bg-white/95 text-amber-950 px-2.5 py-0.5 rounded-none border border-amber-300/80 shadow-xs">
                      {v.badges[0]}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white font-mono text-xs font-bold">
                      {v.capacityMin} - {v.capacityMax} Guests
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-bold text-lg text-zinc-900 group-hover:text-amber-900 transition-colors">
                      {v.name.split("-")[0]}
                    </h3>
                    <p className="text-xs text-zinc-500 line-clamp-2 font-light">
                      {v.tagline}
                    </p>
                    <div className="text-[11px] font-mono text-emerald-800 font-bold pt-2">
                      Base Hall: ₨ {v.baseHallRent.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-zinc-100 mt-2">
                  <Link
                    to={`/booking?venue=${v.id}`}
                    className="py-2.5 text-center rounded-none bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs shadow-xs transition-colors"
                  >
                    Book Hall
                  </Link>
                  <Link
                    to={`/visualizer?venue=${v.id}`}
                    className="py-2.5 text-center rounded-none bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold text-xs transition-colors"
                  >
                    3D Layout
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME DATE CALENDAR RADAR */}
      <HallAvailabilityCalendar
        onSelectDateAndHall={handleCalendarDateSelect}
      />

      {/* 5. GASTRONOMIC EXPERIENCE TEASER */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <UtensilsIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>The Culinary Standard</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Authentic Peshawari Dum Pukht &{" "}
                <span className="gold-text-gradient">Royal Mughal Feasts</span>
              </h2>

              <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
                Our kitchen is led by master ustaads who have preserved Khyber’s
                heirloom recipes for 35 years. Every dish is seasoned
                exclusively with pure butterfat, Himalayan rock salt, and whole
                aromatics.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-none bg-amber-50/50 border border-amber-200">
                  <div className="font-display font-bold text-sm text-zinc-900">
                    Mutton Dum Pukht
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Slow-sealed in dough pots for 6 hours
                  </div>
                </div>
                <div className="p-4 rounded-none bg-amber-50/50 border border-amber-200">
                  <div className="font-display font-bold text-sm text-zinc-900">
                    Shinwari Karahi
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Desi ghee, fresh tomatoes & rock salt
                  </div>
                </div>
                <div className="p-4 rounded-none bg-amber-50/50 border border-amber-200">
                  <div className="font-display font-bold text-sm text-zinc-900">
                    Live Bread Tandoors
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Peshawari Roghni, Taftan & Kulcha
                  </div>
                </div>
                <div className="p-4 rounded-none bg-amber-50/50 border border-amber-200">
                  <div className="font-display font-bold text-sm text-zinc-900">
                    Brass Samovars
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Kashmiri chai & roasted almond qahwa
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 shadow-md"
                >
                  <SparklesIcon className="w-4 h-4 text-amber-950" />
                  <span>Build Custom Menu & Tasting Platter</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-none overflow-hidden border-2 border-amber-200 shadow-xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
                  alt="Shiraz Royal Banqueting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY VOICES & RECENT DISCUSSIONS PREVIEW */}
      <section className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <MessageSquareIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>Shiraz Wedding Majlis</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                Conversations from{" "}
                <span className="gold-text-gradient">Real Couples</span>
              </h2>
              <p className="font-serif text-lg text-zinc-600 font-light">
                Recent questions, acoustics reviews, and verified planner advice
                from our community forum.
              </p>
            </div>

            <Link
              to="/discussions"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 hover:text-amber-950 py-2 border-b-2 border-amber-500 self-start md:self-auto"
            >
              <span>Visit Full Discussions Forum</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_DISCUSSIONS.slice(0, 2).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-none p-6 border-2 border-zinc-200 shadow-md shadow-amber-900/5 space-y-4 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-amber-100 flex items-center justify-center font-bold text-xs text-amber-900">
                      {post.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-zinc-900">
                        {post.author}
                      </div>
                      <div className="text-[10px] text-zinc-500">
                        {post.authorRole} • {post.createdAt}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-none border border-amber-200">
                    {post.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-zinc-900">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-600 line-clamp-3 font-light leading-relaxed">
                  {post.content}
                </p>

                {post.replies.length > 0 && (
                  <div className="p-3.5 rounded-none bg-emerald-50 border border-emerald-200 text-xs">
                    <span className="font-bold text-emerald-950 block text-[11px] mb-1">
                      👑 {post.replies[0].author}:
                    </span>
                    <span className="text-zinc-700 line-clamp-2 font-light">
                      {post.replies[0].content}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <Link
                    to="/discussions"
                    className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1"
                  >
                    <span>Read Full Thread</span>
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <WeddingFAQ />

      {/* 8. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 9. MAJESTIC CLOSING INVITATION BANNER */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 relative overflow-hidden shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-sm">
            <CrownIcon className="w-7 h-7 text-amber-950" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Begin Your Legacy with Shiraz
          </h2>

          <p className="font-serif text-lg sm:text-xl max-w-2xl mx-auto opacity-90 font-light">
            Peak weekend dates for the 2026/2027 wedding season are reserving
            rapidly. Initiate your automated quotation or schedule your VIP
            walkthrough today.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/booking"
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-900 shadow-xl transition-all"
            >
              Book Wedding Date Now
            </Link>
            <a
              href="tel:+92915701234"
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-950 bg-white/90 hover:bg-white border border-amber-300 shadow-sm transition-all"
            >
              Call VIP Desk (+92 91 570 1234)
            </a>
          </div>
        </div>
      </section>

      {/* 360 Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultVenueId={selectedVenue}
      />
    </div>
  );
}
