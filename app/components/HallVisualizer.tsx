import React, { useState } from "react";
import { VENUES } from "../data/shirazData";
import type { HallStageTheme, SeatingLayout, LightingMood } from "../types";
import { CrownIcon, UsersIcon, SparklesIcon, EyeIcon, SlidersIcon, CheckCircleIcon } from "./icons/Icons";

interface HallVisualizerProps {
  initialVenueId?: string;
  onProceedToBooking: (venueId: string) => void;
}

export const HallVisualizer: React.FC<HallVisualizerProps> = ({
  initialVenueId = "shiraz-arena",
  onProceedToBooking,
}) => {
  const [selectedVenueId, setSelectedVenueId] = useState(initialVenueId);
  const [stageTheme, setStageTheme] = useState<HallStageTheme>("mughal_royal");
  const [seatingLayout, setSeatingLayout] = useState<SeatingLayout>("round_tables");
  const [lightingMood, setLightingMood] = useState<LightingMood>("warm_gold");
  const [isSegregated, setIsSegregated] = useState(false);
  const [hasCatwalk, setHasCatwalk] = useState(true);

  const selectedVenue = VENUES.find((v) => v.id === selectedVenueId) || VENUES[0];

  // Colors based on lighting mood in Light Theme
  const lightingMoodStyles: Record<LightingMood, { bg: string; glow: string; text: string }> = {
    warm_gold: {
      bg: "bg-amber-50/70",
      glow: "shadow-[0_0_50px_rgba(212,158,55,0.18)]",
      text: "Warm Amber Candlelight",
    },
    royal_purple: {
      bg: "bg-purple-50/70",
      glow: "shadow-[0_0_50px_rgba(147,51,234,0.14)]",
      text: "Royal Amethyst & Violet",
    },
    rose_blush: {
      bg: "bg-rose-50/70",
      glow: "shadow-[0_0_50px_rgba(244,63,94,0.14)]",
      text: "Romantic English Rose",
    },
    crystal_white: {
      bg: "bg-cyan-50/60",
      glow: "shadow-[0_0_50px_rgba(56,189,248,0.12)]",
      text: "Crisp Diamond Ice",
    },
  };

  const currentLighting = lightingMoodStyles[lightingMood];
  const estimatedCapacity = seatingLayout === "round_tables" ? 850 : seatingLayout === "banquet_runway" ? 1100 : 650;

  return (
    <section id="hall-visualizer" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Extra Bespoke Wedding Hall Feature</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Interactive Hall & Stage{" "}
            <span className="gold-text-gradient">3D Layout Visualizer</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Plan your wedding floorplan interactively before stepping foot inside. Configure stage themes, lighting moods, catwalk aisles, and partition layouts in real time.
          </p>
        </div>

        {/* Visualizer Container (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Venue Selector */}
            <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-lg shadow-amber-900/5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
                1. Select Hall Floorplan
              </label>
              <div className="space-y-1.5">
                {VENUES.slice(0, 3).map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVenueId(v.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                      v.id === selectedVenueId
                        ? "bg-amber-50 border-amber-500 text-zinc-900 font-bold shadow-xs"
                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-white"
                    }`}
                  >
                    <span>{v.name.split("-")[0]}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{v.dimensions}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Theme */}
            <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-lg shadow-amber-900/5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
                2. Royal Stage Decor Theme
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "mughal_royal", name: "Imperial Mughal Gold" },
                  { id: "modern_crystal", name: "Modern Glass Crystal" },
                  { id: "emerald_garden", name: "Emerald Botanical" },
                  { id: "vintage_rose", name: "Vintage French Blush" },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setStageTheme(th.id as HallStageTheme)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                      stageTheme === th.id
                        ? "bg-amber-400 text-amber-950 font-bold border-amber-500 shadow-xs"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white"
                    }`}
                  >
                    {th.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Arrangement */}
            <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-lg shadow-amber-900/5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
                3. Seating & Table Topology
              </label>
              <div className="space-y-2">
                {[
                  { id: "round_tables", name: "Round Banquet Tables (10-Seater)", desc: "Classic luxury dining spacing" },
                  { id: "banquet_runway", name: "Imperial Long Runway Tables", desc: "Royal palace corridor banquet" },
                  { id: "royal_sofas", name: "Plush Velvet Sofas & Low Tables", desc: "Relaxed royal lounge vibe" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSeatingLayout(st.id as SeatingLayout)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                      seatingLayout === st.id
                        ? "bg-amber-50 border-amber-500 text-zinc-900 font-bold shadow-xs"
                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-white"
                    }`}
                  >
                    <div className="font-bold text-zinc-900">{st.name}</div>
                    <div className="text-[10px] text-zinc-500">{st.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lighting Mood & Pakistani Options */}
            <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-lg shadow-amber-900/5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
                4. Ambient Lighting & Partitions
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "warm_gold", name: "Warm Gold", color: "bg-amber-400" },
                  { id: "royal_purple", name: "Mughal Violet", color: "bg-purple-500" },
                  { id: "rose_blush", name: "Rose Blush", color: "bg-rose-400" },
                  { id: "crystal_white", name: "Crystal White", color: "bg-cyan-300" },
                ].map((lm) => (
                  <button
                    key={lm.id}
                    onClick={() => setLightingMood(lm.id as LightingMood)}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs transition-all ${
                      lightingMood === lm.id
                        ? "bg-amber-100 border-amber-500 text-amber-950 font-bold shadow-xs"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white"
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${lm.color} border border-black/10`}></span>
                    <span>{lm.name}</span>
                  </button>
                ))}
              </div>

              {/* Pakistani Segregation & Catwalk Toggles */}
              <div className="pt-2 border-t border-zinc-100 space-y-2">
                <div
                  onClick={() => setIsSegregated(!isSegregated)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 cursor-pointer text-xs"
                >
                  <span className="text-zinc-800 font-medium">Segregated Ladies / Gents Partition</span>
                  <div
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      isSegregated ? "bg-emerald-600" : "bg-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                        isSegregated ? "translate-x-4" : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  onClick={() => setHasCatwalk(!hasCatwalk)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 cursor-pointer text-xs"
                >
                  <span className="text-zinc-800 font-medium">Central Mirrored Catwalk Runway</span>
                  <div
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      hasCatwalk ? "bg-amber-500" : "bg-zinc-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                        hasCatwalk ? "translate-x-4" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floorplan Visual Canvas (Right Column - Light Theme) */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`rounded-3xl border border-amber-200 p-6 sm:p-8 transition-all duration-700 relative overflow-hidden min-h-[560px] flex flex-col justify-between ${currentLighting.bg} ${currentLighting.glow} bg-white shadow-xl shadow-amber-900/5`}
            >
              {/* Top Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping"></div>
                  <div>
                    <span className="font-display font-bold text-zinc-900 text-base">
                      {selectedVenue.name}
                    </span>
                    <span className="text-zinc-500 text-xs block font-mono">
                      Dimensions: {selectedVenue.dimensions} • Ceiling: {selectedVenue.ceilingHeight}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-amber-900 font-mono font-bold block">
                    ~{estimatedCapacity} Guest Layout
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                    {currentLighting.text}
                  </span>
                </div>
              </div>

              {/* Interactive Floorplan Map */}
              <div className="relative my-6 p-6 rounded-2xl bg-white border border-amber-200 min-h-[380px] flex flex-col justify-between shadow-sm">
                {/* 1. STAGE AT TOP */}
                <div className="text-center relative">
                  <div
                    className={`mx-auto max-w-md py-4 px-6 rounded-2xl border transition-all ${
                      stageTheme === "mughal_royal"
                        ? "bg-amber-100 border-amber-400 text-amber-950"
                        : stageTheme === "modern_crystal"
                        ? "bg-cyan-50 border-cyan-300 text-cyan-950"
                        : stageTheme === "emerald_garden"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    } shadow-md`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <CrownIcon className="w-5 h-5 text-amber-700" />
                      <span className="font-display font-bold text-sm tracking-widest uppercase">
                        ROYAL BRIDAL & GROOM STAGE
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-600 font-mono">
                      {stageTheme === "mughal_royal" && "Floral Mughal Arches • Handcrafted Velvet Sofa • Chandelier Drop"}
                      {stageTheme === "modern_crystal" && "Curved Lucite Glass • White Orchid Cascades • LED Screen"}
                      {stageTheme === "emerald_garden" && "Botanical Hanging Canopy • Fairy Tree Arches • Warm Amber Spots"}
                      {stageTheme === "vintage_rose" && "French Victorian Paneling • Champagne Gold Silk Drapes"}
                    </div>
                  </div>
                </div>

                {/* 2. CATWALK RUNWAY & SEATING ROWS */}
                <div className="relative my-6 flex justify-between items-center px-4">
                  {/* Left Seating Section */}
                  <div className={`flex-1 text-center p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 ${isSegregated ? "border-rose-300 bg-rose-50/40" : ""}`}>
                    <div className="text-[11px] font-bold text-zinc-800 mb-2">
                      {isSegregated ? "Ladies Royal Enclosure" : "Family Wing A"}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className={`p-2 text-[10px] font-mono border font-semibold ${
                            seatingLayout === "round_tables"
                              ? "rounded-full aspect-square flex items-center justify-center bg-white border-amber-300 text-amber-900 shadow-xs"
                              : "rounded-lg bg-white border-zinc-300 text-zinc-700"
                          }`}
                        >
                          T-{i}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Middle Catwalk Runway */}
                  {hasCatwalk ? (
                    <div className="w-16 mx-4 py-8 bg-gradient-to-b from-amber-100 via-amber-200/60 to-amber-100 border-x-2 border-dashed border-amber-400 rounded-lg flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-amber-900 rotate-90 my-auto">
                        Entrance Catwalk
                      </span>
                    </div>
                  ) : (
                    <div className="w-8 mx-2 border-l border-zinc-200 h-24 my-auto" />
                  )}

                  {/* Right Seating Section */}
                  <div className={`flex-1 text-center p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 ${isSegregated ? "border-cyan-300 bg-cyan-50/40" : ""}`}>
                    <div className="text-[11px] font-bold text-zinc-800 mb-2">
                      {isSegregated ? "Gents VIP Enclosure" : "Family Wing B"}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[7, 8, 9, 10, 11, 12].map((i) => (
                        <div
                          key={i}
                          className={`p-2 text-[10px] font-mono border font-semibold ${
                            seatingLayout === "round_tables"
                              ? "rounded-full aspect-square flex items-center justify-center bg-white border-amber-300 text-amber-900 shadow-xs"
                              : "rounded-lg bg-white border-zinc-300 text-zinc-700"
                          }`}
                        >
                          T-{i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. BUFFET & GRAND ENTRANCE AT BOTTOM */}
                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-[11px] font-semibold">
                    🍳 Live Dum Pukht & Tandoor Pavilion
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-[11px]">
                    🚪 Grand Mughal Red Carpet Entry Foyer
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-[11px] font-medium">
                    ☕ Traditional Samovar & Qahwa Station
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200">
                <div className="text-xs text-zinc-600 font-medium">
                  Ready to book this exact layout for your wedding?
                </div>
                <button
                  onClick={() => onProceedToBooking(selectedVenueId)}
                  className="py-2.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 transition-all shadow-md"
                >
                  Book This Configured Hall
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
