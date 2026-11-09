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
    <div className="pt-24 pb-16">
      {/* Page Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <CrownIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>The Sovereign Venues of Khyber</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          The Imperial <span className="gold-text-gradient">Hall Collection</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-light">
          From the 35ft Austrian crystal ballroom at Shiraz Arena to the panoramic glass marquees of Shiraz Gathering. Compare architecture, capacities, and reserve your date.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => {
              setTourVenueId("shiraz-arena");
              setIsTourModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-900 bg-white border border-amber-300 hover:bg-amber-50 shadow-sm transition-all"
          >
            <EyeIcon className="w-4 h-4 text-amber-700" />
            <span>Launch 360° Virtual Tour</span>
          </button>
        </div>
      </div>

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
