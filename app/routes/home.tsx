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
  CheckCircleIcon,
  UtensilsIcon,
  EyeIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  StarIcon,
  PlayIcon,
} from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Wedding Halls & Catering in Peshawar | Shiraz",
    },
    {
      name: "description",
      content:
        "Plan a wedding or celebration in Peshawar with Shiraz. Explore our venues, check available dates and discover Peshawari catering.",
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
      {/* 1. LUMINOUS LUXURY LIGHT HERO SECTION */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] text-zinc-900 py-14 sm:py-16 lg:py-20 border-b border-amber-200/60">
        <div
          aria-hidden="true"
          className="absolute -top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-100/70 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto space-y-12">
          {/* Main Hero Split Grid: Left Text & CTAs, Right Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines, Narrative & CTAs (6 or 7 Cols) */}
            <div className="md:col-span-7 lg:col-span-6 space-y-6 lg:space-y-7">
              {/* Official Shiraz Group Brand Pill Badge */}
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-amber-900">
                <span className="h-px w-8 bg-amber-600" />
                <span>Peshawar hospitality, since 1990</span>
              </div>

              {/* Natural Hero Headlines */}
              <div className="space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight text-zinc-900 leading-[0.98]">
                  A beautiful place for{" "}
                  <span className="text-amber-800 italic">
                    life’s biggest moments.
                  </span>
                </h1>

                <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-xl leading-8">
                  From grand celebrations at Shiraz Arena to intimate gatherings
                  in our glasshouse, we bring thoughtful hospitality, beautiful
                  spaces and much-loved Peshawari cooking together.
                </p>
              </div>

              {/* Natural Quick CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/booking"
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-zinc-900 hover:bg-amber-900 shadow-lg shadow-zinc-900/10 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Plan your celebration</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-5 py-3.5 rounded-full text-sm font-semibold text-zinc-700 bg-white/80 border border-zinc-200 hover:border-amber-400 hover:text-amber-900 transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <EyeIcon className="w-4 h-4 text-amber-700" />
                  <span>Take a virtual tour</span>
                </button>

                <Link
                  to="/visualizer"
                  className="px-3 py-3.5 text-sm font-semibold text-amber-900 hover:text-amber-950 transition-colors flex items-center gap-1.5"
                >
                  <span>Explore layouts</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>

              {/* VIP Trust & Credibility Badges */}
              <div className="pt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-600 border-t border-amber-200/80">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-600">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-zinc-900">4.9 / 5</span>
                  <span className="text-zinc-500">from 348+ celebrations</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-700" />
                  <span>Triple 500 kVA backup power</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Luxury Visual Showcase (5 or 6 Cols) */}
            <div className="md:col-span-5 lg:col-span-6 relative space-y-3">
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white shadow-2xl shadow-zinc-900/15 aspect-[4/3] bg-zinc-900 group">
                <img
                  src={currentVenue.image}
                  alt={currentVenue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-zinc-800 font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>2026–27 dates open</span>
                </div>

                <div className="absolute top-4 right-4 bg-zinc-950/65 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-medium">
                  {currentVenue.badges[0] || "Shiraz venue"}
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    type="button"
                    onClick={() => setIsTourModalOpen(true)}
                    className="pointer-events-auto p-3 rounded-full bg-white/95 hover:bg-white text-zinc-900 shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                    title="Open 360° Virtual Tour"
                  >
                    <span className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-zinc-950">
                      <PlayIcon className="w-4 h-4 ml-0.5" />
                    </span>
                    <span className="text-sm font-semibold pr-2 hidden sm:inline">
                      Take a look inside
                    </span>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-[11px] font-medium text-amber-800 tracking-wide block">
                        {currentVenue.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 truncate">
                        {currentVenue.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-semibold text-zinc-900 block">
                        ₨ {currentVenue.baseHallRent.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-zinc-500">
                        Starting hall rent
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-600 pt-3 border-t border-zinc-200">
                    <span className="flex items-center gap-1.5">
                      <UsersIcon className="w-3.5 h-3.5 text-amber-700" />
                      {currentVenue.capacityMin}–{currentVenue.capacityMax} guests
                    </span>
                    <span className="text-zinc-500">
                      {currentVenue.dimensions}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Venue Thumbnail Selector Ribbon */}
              <div className="grid grid-cols-4 gap-2.5">
                {VENUES.map((v) => {
                  const isSelected = v.id === selectedVenue;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVenue(v.id)}
                      aria-pressed={isSelected}
                      className={`relative rounded-xl overflow-hidden border transition-all text-left p-1.5 group cursor-pointer ${
                        isSelected
                          ? "border-amber-600 bg-white shadow-sm"
                          : "border-zinc-200/80 bg-white/70 hover:border-amber-400"
                      }`}
                    >
                      <div className="aspect-[16/10] rounded-lg overflow-hidden relative">
                        <img
                          src={v.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-[11px] font-medium text-zinc-800 truncate mt-1.5 px-1">
                        {v.name.split("-")[0].trim()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Date Availability & Automated Estimator Bar (Full Width across container) */}
          <div className="bg-white/90 rounded-2xl p-5 sm:p-7 shadow-lg shadow-zinc-900/5 border border-zinc-200/80">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-zinc-100">
              <div className="flex items-center gap-2.5 text-zinc-900 font-semibold">
                <CalendarIcon className="w-4 h-4 text-amber-700" />
                <span>Find a date for your celebration</span>
              </div>
              <span className="text-emerald-800 text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                2026–27 dates open
              </span>
            </div>

            <form
              onSubmit={handleHeroSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
            >
              {/* Select Venue */}
              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-2">
                  Venue
                </label>
                <div className="relative">
                  <select
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/15 appearance-none"
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
                  <MapPinIcon className="w-4 h-4 text-amber-700 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-2">
                  Event date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min="2026-11-10"
                  max="2027-12-31"
                  className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/15"
                />
              </div>

              {/* Slot */}
              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-2">
                  Time
                </label>
                <div className="grid grid-cols-2 gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("afternoon")}
                    aria-pressed={selectedSlot === "afternoon"}
                    className={`py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      selectedSlot === "afternoon"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Lunch
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSlot("evening")}
                    aria-pressed={selectedSlot === "evening"}
                    className={`py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      selectedSlot === "evening"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    Dinner
                  </button>
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="flex justify-between text-xs font-medium text-zinc-600 mb-2">
                  <span>Guests</span>
                  <span className="text-zinc-900 tabular-nums">
                    {guestCount}
                  </span>
                </label>
                <input
                  type="range"
                  min="150"
                  max="2000"
                  step="50"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  aria-label="Number of guests"
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-amber-900 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Check availability</span>
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Proof Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/75 border border-zinc-200/80">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900">
                35+
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 mt-1">
                Years in Peshawar
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/75 border border-zinc-200/80">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900">
                12,500+
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 mt-1">
                Celebrations hosted
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/75 border border-zinc-200/80">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900">
                2,500
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 mt-1">
                Guest capacity
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/75 border border-zinc-200/80">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900">
                4.9 / 5
              </div>
              <div className="text-xs sm:text-sm text-zinc-600 mt-1">
                Guest rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY & HERITAGE NARRATIVE SECTION */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/10 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding reception with floral décor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-200 font-medium block mb-2">
                    Abdara Road & Ring Road, Peshawar
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-medium">
                    A Peshawar tradition since 1990
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 border border-zinc-200 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-800 font-bold">
                    <CrownIcon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-zinc-900">
                      Backup power on site
                    </div>
                    <div className="text-xs text-zinc-500">
                      Three 500 kVA generators
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storytelling Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-amber-900">
                <span className="h-px w-8 bg-amber-600" />
                <span>A little about us</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
                More than 35 years of{" "}
                <span className="text-amber-800 italic">bringing people together.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 leading-8">
                Shiraz began on Abdara Road with a simple idea: make every
                gathering feel special. Today, our family of venues brings
                together thoughtful service, welcoming spaces and the flavours
                of Peshawar.
              </p>

              <div className="space-y-4 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Room to celebrate:</strong> Spacious, pillar-free
                    halls with clear sightlines and room for your guests.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Food with a sense of place:</strong> Peshawari
                    favourites and family recipes, prepared for sharing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Considered arrangements:</strong> Private entrances,
                    partitions and female staff can be arranged on request.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/venues"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-white bg-zinc-900 hover:bg-amber-900 transition-colors"
                >
                  Meet our venues
                </Link>
                <Link
                  to="/catering"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-zinc-700 hover:text-zinc-950 border border-zinc-200 hover:border-amber-400 transition-colors"
                >
                  Explore the menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED VENUES TEASER GRID */}
      <section className="py-20 sm:py-24 bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-amber-900">
                <span className="h-px w-8 bg-amber-600" />
                <span>Find your setting</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight">
                Spaces for every{" "}
                <span className="text-amber-800 italic">kind of celebration.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-7">
                From lively mehndis to elegant walimas, find a venue that feels
                right for your gathering.
              </p>
            </div>

            <Link
              to="/venues"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-900 hover:text-amber-950 py-2 self-start md:self-auto"
            >
              <span>Explore all venues</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENUES.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm flex flex-col justify-between group hover:shadow-lg hover:shadow-zinc-900/5 hover:border-amber-300 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-medium bg-white/95 text-zinc-800 px-3 py-1 rounded-full shadow-sm">
                      {v.badges[0]}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                      {v.capacityMin}–{v.capacityMax} guests
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-semibold text-lg text-zinc-900 group-hover:text-amber-900 transition-colors">
                      {v.name.split("-")[0]}
                    </h3>
                    <p className="text-sm text-zinc-600 line-clamp-2">
                      {v.tagline}
                    </p>
                    <div className="text-sm text-zinc-700 pt-2">
                      From <span className="font-semibold">₨ {v.baseHallRent.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-zinc-100 mt-2">
                  <Link
                    to={`/booking?venue=${v.id}`}
                    className="py-2.5 text-center rounded-xl bg-zinc-900 hover:bg-amber-900 text-white font-semibold text-sm transition-colors"
                  >
                    Check dates
                  </Link>
                  <Link
                    to={`/visualizer?venue=${v.id}`}
                    className="py-2.5 text-center rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 font-semibold text-sm transition-colors"
                  >
                    View layout
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
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-amber-900">
                <span className="h-px w-8 bg-amber-600" />
                <UtensilsIcon className="w-4 h-4 text-amber-700" />
                <span>Gather around the table</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
                Good food makes{" "}
                <span className="text-amber-800 italic">a good gathering.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 leading-8">
                Our kitchen brings Peshawari favourites and time-honoured
                recipes to the table, made for long conversations and second
                helpings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-zinc-200/80">
                  <div className="font-semibold text-sm text-zinc-900">
                    Mutton Dum Pukht
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Slow-sealed in dough pots for 6 hours
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-zinc-200/80">
                  <div className="font-semibold text-sm text-zinc-900">
                    Shinwari Karahi
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Desi ghee, fresh tomatoes & rock salt
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-zinc-200/80">
                  <div className="font-semibold text-sm text-zinc-900">
                    Live Bread Tandoors
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Peshawari Roghni, Taftan & Kulcha
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-zinc-200/80">
                  <div className="font-semibold text-sm text-zinc-900">
                    Brass Samovars
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Kashmiri chai & roasted almond qahwa
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-zinc-900 hover:bg-amber-900 transition-colors"
                >
                  <SparklesIcon className="w-4 h-4" />
                  <span>Explore catering</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-[1.75rem] overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-900/10 aspect-square">
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
      <section className="py-20 sm:py-24 bg-[#faf8f5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-amber-900">
                <span className="h-px w-8 bg-amber-600" />
                <MessageSquareIcon className="w-3.5 h-3.5 text-amber-700" />
                <span>From our community</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight">
                A little advice from{" "}
                <span className="text-amber-800 italic">people who’ve been there.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-7">
                Browse questions, recommendations and wedding-day tips shared
                by the Shiraz community.
              </p>
            </div>

            <Link
              to="/discussions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-900 hover:text-amber-950 py-2 self-start md:self-auto"
            >
              <span>Visit the community</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_DISCUSSIONS.slice(0, 2).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm space-y-4 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center font-semibold text-sm text-amber-900">
                      {post.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-zinc-900">
                        {post.author}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {post.authorRole} • {post.createdAt}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    {post.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-zinc-900">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>

                {post.replies.length > 0 && (
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-zinc-200 text-sm">
                    <span className="font-semibold text-zinc-900 block text-xs mb-1">
                      {post.replies[0].author} replied:
                    </span>
                    <span className="text-zinc-600 line-clamp-2">
                      {post.replies[0].content}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <Link
                    to="/discussions"
                    className="text-sm font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1"
                  >
                    <span>Read the conversation</span>
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
      <section className="py-20 sm:py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-amber-800/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center border border-white/15">
            <CrownIcon className="w-6 h-6 text-amber-300" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight">
            Let’s make it a day to remember.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-8">
            Tell us what you’re planning. We’ll help you find the right space,
            date and menu for your celebration.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/booking"
              className="px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              Check availability
            </Link>
            <a
              href="tel:+92915701234"
              className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
            >
              Call us: +92 91 570 1234
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
