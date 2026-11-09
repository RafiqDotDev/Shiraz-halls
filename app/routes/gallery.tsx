import React, { useState } from "react";
import type { Route } from "./+types/gallery";
import { GallerySection } from "../components/GallerySection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { VirtualTourModal } from "../components/VirtualTourModal";
import { CameraIcon, EyeIcon, SparklesIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Celebration Gallery & Visual Splendor | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "High-definition photography of Barat entrances, Walima banquets, floral stage masterworks, and culinary spreads at Shiraz Arena and Shiraz Gathering.",
    },
  ];
}

export default function GalleryPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-14 lg:pb-18">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-sm shadow-amber-900/5">
            <CameraIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Moments of Timeless Elegance</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            Celebration Gallery & <span className="gold-text-gradient">Visual Splendor</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in real celebrations, majestic crystal lighting sequences, and gourmet banqueting from unforgettable weddings hosted across our halls.
          </p>

          {/* Quick Category Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Barat Royal Entrances</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Walima Banquets</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Mehndi Glass Marquees</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Floral Stage Art</span>
            </span>
          </div>

          <div className="pt-3 flex justify-center">
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all cursor-pointer"
            >
              <EyeIcon className="w-4 h-4 text-amber-950" />
              <span>Open 360° Interactive Simulator</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section Component */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* 360 Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}
