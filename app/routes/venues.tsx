import React, { useState } from "react";
import type { Route } from "./+types/venues";
import { useNavigate } from "react-router";
import { VenueShowcase } from "../components/VenueShowcase";
import { VirtualTourModal } from "../components/VirtualTourModal";
import { EyeIcon, SparklesIcon, CrownIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Imperial Venues & Wedding Halls | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Explore Shiraz Arena, Shiraz Gathering glasshouse marquees, and Shiraz Ronaq. Compare hall dimensions, guest capacities, and Austrian crystal chandeliers in Peshawar.",
    },
  ];
}

export default function VenuesPage() {
  const navigate = useNavigate();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [tourVenueId, setTourVenueId] = useState("shiraz-arena");

  const handleSelectVenueForBooking = (venueId: string) => {
    navigate(`/booking?venue=${venueId}`);
  };

  const handleOpenVisualizer = (venueId: string) => {
    navigate(`/visualizer?venue=${venueId}`);
  };

  return (
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-16 lg:pb-20">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-sm shadow-amber-900/5">
            <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>The Sovereign Venues of Khyber</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            The Imperial <span className="gold-text-gradient">Hall Collection</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            From the monumental 35ft Austrian crystal ballroom at Shiraz Arena to the panoramic glasshouse marquees of Shiraz Gathering. Compare architecture, capacities, and reserve your date.
          </p>

          {/* Quick Hall Credential Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>4 Architectural Marvels</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>250 – 2,000 Guests</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>35ft Crystal Ceilings</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Triple 500kVA Zero Outage</span>
            </span>
          </div>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setTourVenueId("shiraz-arena");
                setIsTourModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all cursor-pointer"
            >
              <EyeIcon className="w-4 h-4 text-amber-950" />
              <span>Launch 360° Virtual Tour</span>
            </button>
            <button
              onClick={() => handleOpenVisualizer("shiraz-arena")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-800 bg-white border border-amber-300 hover:bg-amber-50 shadow-sm transition-all cursor-pointer"
            >
              <SparklesIcon className="w-4 h-4 text-amber-700" />
              <span>Open 3D Visualizer</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Venue Showcase Component */}
      <VenueShowcase
        onSelectVenueForBooking={handleSelectVenueForBooking}
        onOpenVisualizer={handleOpenVisualizer}
      />

      {/* 360 Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultVenueId={tourVenueId}
      />
    </div>
  );
}
