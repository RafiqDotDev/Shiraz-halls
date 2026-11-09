import React, { useState } from "react";
import { CameraIcon, SparklesIcon, CrownIcon } from "./icons/Icons";

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: "g1",
      category: "barat",
      title: "Royal Barat Entrance at Shiraz Arena",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      caption: "35ft Austrian Chandelier & Hydraulic Groom Stage",
    },
    {
      id: "g2",
      category: "stage",
      title: "Mughal Gold & Ivory Stage Decor",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      caption: "Handcrafted Jali Lattice & 3,000 Fresh Roses",
    },
    {
      id: "g3",
      category: "mehndi",
      title: "Vibrant Sangeet Night at Shiraz Gathering",
      image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
      caption: "Fairy Light Canopy & Glass Marquee Garden Views",
    },
    {
      id: "g4",
      category: "walima",
      title: "Imperial Walima Banquet Reception",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      caption: "Emerald Palm Lawns under Starlit Open Skies",
    },
    {
      id: "g5",
      category: "food",
      title: "Shiraz Legendary Peshawari Dum Pukht & Live BBQ",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      caption: "35 Years of Authentic Culinary Heritage in Desi Ghee",
    },
    {
      id: "g6",
      category: "stage",
      title: "Modern Glass Catwalk & Crystal Runway",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      caption: "Reflective Mirrored Aisle with Cold Pyro Fountains",
    },
  ];

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <CameraIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Splendor</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Memories of{" "}
            <span className="gold-text-gradient">Timeless Majesty</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Glimpse the grand celebrations, floral stage masterworks, and culinary spreads hosted at Shiraz venues across the decades.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Celebrations" },
              { id: "barat", label: "Barat Entries" },
              { id: "walima", label: "Walima Banquets" },
              { id: "mehndi", label: "Mehndi & Sangeet" },
              { id: "stage", label: "Stage & Floral Decor" },
              { id: "food", label: "Gourmet Catering" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === f.id
                    ? "bg-amber-400 text-amber-950 shadow-md"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-amber-300 hover:bg-amber-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden border border-amber-200 hover:border-amber-400 transition-all duration-500 aspect-[4/3] bg-zinc-100 shadow-md shadow-amber-900/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 font-light opacity-90">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
