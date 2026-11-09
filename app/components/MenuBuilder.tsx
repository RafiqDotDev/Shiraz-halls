import React, { useState } from "react";
import { MENU_ITEMS_CATALOG } from "../data/shirazData";
import type { MenuItem } from "../types";
import { UtensilsIcon, SparklesIcon, CheckCircleIcon, CrownIcon, AwardIcon, ChevronRightIcon } from "./icons/Icons";

interface MenuBuilderProps {
  onSelectMenuForBooking: () => void;
}

export const MenuBuilder: React.FC<MenuBuilderProps> = ({ onSelectMenuForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [tastingPlate, setTastingPlate] = useState<string[]>([
    "st-1",
    "m-1",
    "m-2",
    "r-1",
    "d-1",
    "b-1",
  ]);

  const categories = [
    { id: "all", label: "Full Royal Spread" },
    { id: "starter", label: "Charcoal Starters" },
    { id: "main_roast", label: "Royal Roasts & Dum Pukht" },
    { id: "main_curry", label: "Desi Ghee Karahis" },
    { id: "rice", label: "Shahjahani Rice & Pulao" },
    { id: "dessert", label: "Mughal Desserts" },
    { id: "beverage", label: "Samovars & Refreshers" },
  ];

  const filteredDishes =
    activeCategory === "all"
      ? MENU_ITEMS_CATALOG
      : MENU_ITEMS_CATALOG.filter((i) => i.category === activeCategory);

  const toggleDishOnPlate = (id: string) => {
    if (tastingPlate.includes(id)) {
      setTastingPlate(tastingPlate.filter((item) => item !== id));
    } else {
      setTastingPlate([...tastingPlate, id]);
    }
  };

  const selectedPlateItems = MENU_ITEMS_CATALOG.filter((i) => tastingPlate.includes(i.id));

  return (
    <section id="menu-builder" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <UtensilsIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Legendary Peshawari Culinary Heritage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Craft Your Custom{" "}
            <span className="gold-text-gradient">Royal Wedding Feast</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Rooted in 35 years of iconic hospitality on Abdara Road and Ring Road. Pure butterfat, organic mountain rock salt, slow-braised mountain goat, and Iranian saffron confectioneries.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === c.id
                  ? "bg-amber-400 text-amber-950 shadow-md shadow-amber-400/20"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:border-amber-300 hover:bg-amber-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Dishes and Live Tasting Platter Tray (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dishes Catalog (Left Column) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredDishes.map((dish) => {
              const isSelected = tastingPlate.includes(dish.id);
              return (
                <div
                  key={dish.id}
                  onClick={() => toggleDishOnPlate(dish.id)}
                  className={`bg-white rounded-3xl p-5 border cursor-pointer transition-all relative group shadow-sm ${
                    isSelected
                      ? "border-amber-500 shadow-md ring-2 ring-amber-400/20 bg-amber-50/20"
                      : "border-zinc-200 hover:border-amber-300 hover:bg-zinc-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-display font-bold text-sm text-zinc-900 group-hover:text-amber-900 transition-colors">
                      {dish.name}
                    </span>
                    {dish.isSignature && (
                      <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300 shrink-0 font-bold">
                        Signature
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-light mb-4">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      {dish.spiceLevel && (
                        <span className="text-zinc-600 font-mono font-medium">
                          {dish.spiceLevel === "mild" && "🟢 Mild"}
                          {dish.spiceLevel === "medium" && "🟡 Medium Spice"}
                          {dish.spiceLevel === "spicy" && "🔴 Sizzling Peshawari"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`font-bold ${
                          isSelected ? "text-amber-800" : "text-zinc-500 group-hover:text-zinc-900"
                        }`}
                      >
                        {isSelected ? "✓ In Tasting Platter" : "+ Add to Tasting"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Tasting Platter (Right Sticky Column) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xl shadow-amber-900/5">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <AwardIcon className="w-5 h-5 text-amber-600" />
                  <span className="font-display font-bold text-zinc-900 text-sm">
                    VIP Tasting Platter
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 font-bold">
                  {selectedPlateItems.length} Dishes
                </span>
              </div>

              <div className="py-4 space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {selectedPlateItems.length === 0 ? (
                  <p className="text-xs text-zinc-400 text-center py-6">
                    Click any dishes to assemble your complimentary wedding menu tasting tray.
                  </p>
                ) : (
                  selectedPlateItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-zinc-50 border border-zinc-200"
                    >
                      <span className="text-zinc-800 font-medium truncate max-w-[200px]">
                        {item.name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDishOnPlate(item.id);
                        }}
                        className="text-zinc-400 hover:text-rose-600 text-xs px-1 font-bold"
                        title="Remove dish"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Complimentary Chef Tasting Info */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 leading-relaxed mb-4">
                <strong>Complimentary Executive Tasting:</strong> Once your automated booking is initiated, enjoy a private 6-person VIP tasting session hosted by our Master Chefs at Shiraz Restaurant, University Town.
              </div>

              <button
                onClick={onSelectMenuForBooking}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
              >
                <SparklesIcon className="w-4 h-4 text-amber-950" />
                <span>Lock Menu in Booking Wizard</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
