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
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <CameraIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>Moments of Timeless Elegance</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Celebration Gallery & <span className="gold-text-gradient">Visual Splendor</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Immerse yourself in real celebrations, majestic lighting sequences, and gourmet banqueting from unforgettable weddings hosted across our halls.
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setIsTourModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-900 bg-white border border-amber-300 hover:bg-amber-50 shadow-sm transition-all"
          >
            <EyeIcon className="w-4 h-4 text-amber-700" />
            <span>Open 360° Interactive Simulator</span>
          </button>
        </div>
      </div>

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
