import React from "react";
import type { Route } from "./+types/booking";
import { useSearchParams } from "react-router";
import { AutomatedBookingSystem } from "../components/AutomatedBookingSystem";
import { SparklesIcon, ShieldCheckIcon, PhoneIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Automated Booking & Cost Estimator | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Real-time automated wedding hall booking, date availability checker, per-head catering cost calculations, and official voucher generation for Shiraz Arena & Shiraz Gathering.",
    },
  ];
}

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const venueParam = searchParams.get("venue") || "shiraz-arena";
  const dateParam = searchParams.get("date") || "2026-12-18";
  const slotParam = (searchParams.get("slot") as "afternoon" | "evening") || "evening";
  const guestsParam = Number(searchParams.get("guests")) || 600;

  return (
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-14 lg:pb-18">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-900/5">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Real-Time Reservation Engine</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            Automated <span className="gold-text-gradient">Booking System</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            Lock your preferred date, configure custom Pakistani menu courses, add royal production services, and generate your instant official Shiraz voucher in PKR.
          </p>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Shiraz Price Lock</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>100% Transparent Itemized PKR Breakdown</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Instant Digital Voucher & Booking ID</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Automated Booking System Component */}
      <AutomatedBookingSystem
        initialVenueId={venueParam}
        initialDate={dateParam}
        initialSlot={slotParam}
        initialGuests={guestsParam}
      />
    </div>
  );
}
