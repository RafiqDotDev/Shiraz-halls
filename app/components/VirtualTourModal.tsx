import React, { useState } from "react";
import { XIcon, EyeIcon, SparklesIcon, CrownIcon, ChevronRightIcon, ChevronLeftIcon } from "./icons/Icons";
import { VENUES } from "../data/shirazData";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVenueId?: string;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  defaultVenueId = "shiraz-arena",
}) => {
  const [selectedVenueId, setSelectedVenueId] = useState(defaultVenueId);
  const [activeViewpoint, setActiveViewpoint] = useState<"stage" | "aisle" | "bridal_suite" | "buffet">("stage");
  const [timeOfDay, setTimeOfDay] = useState<"night" | "day">("night");

  if (!isOpen) return null;

  const currentVenue = VENUES.find((v) => v.id === selectedVenueId) || VENUES[0];

  const viewpoints = [
    { id: "stage", label: "Mughal Royal Stage View", desc: "View from the bride & groom sovereign sofa overlooking 1,500 guests." },
    { id: "aisle", label: "Entrance Catwalk & Chandeliers", desc: "Walkway perspective under 35ft Austrian crystal chandeliers." },
    { id: "bridal_suite", label: "VIP Bridal Vanity Lounge", desc: "Private sanctuary with luxury mirrors and personal attendant desk." },
    { id: "buffet", label: "Live Dum Pukht & Tandoor Pavilion", desc: "Live culinary stations and brass samovar tea counter." },
  ];

  const viewpointImages: Record<string, string> = {
    stage: currentVenue.image,
    aisle: currentVenue.gallery[1] || currentVenue.image,
    bridal_suite: currentVenue.gallery[2] || currentVenue.image,
    buffet: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/70 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white border border-amber-300 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Control Bar (Light Theme) */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-200 border border-amber-300 flex items-center justify-center">
              <EyeIcon className="w-4 h-4 text-amber-900" />
            </div>
            <div>
              <span className="font-display font-bold text-zinc-900 text-sm sm:text-base flex items-center gap-2">
                <span>360° Virtual Hall Immersion</span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline font-bold">
                  Interactive Simulator
                </span>
              </span>
              <span className="text-zinc-500 text-xs block">{currentVenue.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Day / Night Toggle */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-zinc-300 text-xs shadow-xs">
              <button
                onClick={() => setTimeOfDay("day")}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  timeOfDay === "day" ? "bg-amber-400 text-amber-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                ☀️ Day
              </button>
              <button
                onClick={() => setTimeOfDay("night")}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  timeOfDay === "night" ? "bg-amber-400 text-amber-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                🌙 Evening Glow
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors border border-zinc-200"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Venue Switcher Bar */}
        <div className="px-5 py-2.5 bg-zinc-50 border-b border-zinc-200 flex gap-2 overflow-x-auto">
          {VENUES.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVenueId(v.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                v.id === selectedVenueId
                  ? "bg-amber-400 text-amber-950 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200"
              }`}
            >
              {v.name.split("-")[0]}
            </button>
          ))}
        </div>

        {/* Main 360 Viewport Container */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] overflow-hidden bg-black group">
          <img
            src={viewpointImages[activeViewpoint]}
            alt={activeViewpoint}
            className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105 ${
              timeOfDay === "night" ? "brightness-95 contrast-110" : "brightness-105 contrast-100"
            }`}
          />

          {/* Floating Perspective Selector Pills on Canvas */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10">
            {viewpoints.map((vp) => (
              <button
                key={vp.id}
                onClick={() => setActiveViewpoint(vp.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all border ${
                  activeViewpoint === vp.id
                    ? "bg-white text-amber-950 border-amber-400 font-bold shadow-md ring-2 ring-amber-400/30"
                    : "bg-black/60 text-white border-white/20 hover:bg-black/80"
                }`}
              >
                {vp.label}
              </button>
            ))}
          </div>

          {/* Viewpoint Info Card at Bottom (Light Theme) */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-900 font-bold">
                Current Viewpoint
              </div>
              <div className="font-display font-bold text-zinc-900 text-base">
                {viewpoints.find((v) => v.id === activeViewpoint)?.label}
              </div>
              <div className="text-xs text-zinc-600 font-medium">
                {viewpoints.find((v) => v.id === activeViewpoint)?.desc}
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 shadow-md shrink-0"
            >
              Lock In Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
