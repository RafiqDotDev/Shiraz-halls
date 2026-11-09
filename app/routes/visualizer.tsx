import React from "react";
import type { Route } from "./+types/visualizer";
import { useSearchParams, useNavigate } from "react-router";
import { HallVisualizer } from "../components/HallVisualizer";
import { SparklesIcon, CrownIcon, SlidersIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3D Hall & Stage Layout Visualizer | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Interactive virtual wedding hall planner. Customize Mughal floral stages, catwalk aisles, lighting moods, and segregated ladies/gents arrangements at Shiraz venues.",
    },
  ];
}

export default function VisualizerPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const venueParam = searchParams.get("venue") || "shiraz-arena";

  const handleProceedToBooking = (venueId: string) => {
    navigate(`/booking?venue=${venueId}`);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <SlidersIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>Interactive Wedding Architecture Studio</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          3D Hall & Stage <span className="gold-text-gradient">Layout Visualizer</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Design your wedding floorplan interactively. Experiment with stage styling, ambient lighting moods, catwalk runways, and segregated seating enclosures in real-time.
        </p>
      </div>

      {/* Main Component */}
      <HallVisualizer
        initialVenueId={venueParam}
        onProceedToBooking={handleProceedToBooking}
      />
    </div>
  );
}
