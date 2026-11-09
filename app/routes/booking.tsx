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
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
          <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
          <span>Real-Time Reservation Engine</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Automated <span className="gold-text-gradient">Booking System</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Lock your preferred date, configure custom Pakistani menu courses, add royal production services, and generate your instant official Shiraz voucher in PKR.
        </p>
      </div>

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
