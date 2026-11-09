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
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-14 lg:pb-18">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-sm shadow-amber-900/5">
            <SlidersIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Wedding Architecture Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            3D Hall & Stage <span className="gold-text-gradient">Layout Visualizer</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            Design your dream floorplan interactively. Experiment with royal Mughal floral stages, ambient mood lighting, catwalk runways, and segregated seating arrangements in real-time.
          </p>

          {/* Interactive Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Interactive Stage & Floral Presets</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Segregated Ladies & Gents Partitioning</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Real-Time Ambient Lighting Modes</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Component */}
      <HallVisualizer
        initialVenueId={venueParam}
        onProceedToBooking={handleProceedToBooking}
      />
    </div>
  );
}
