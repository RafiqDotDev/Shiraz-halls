import React from "react";
import type { Route } from "./+types/catering";
import { useNavigate } from "react-router";
import { MenuBuilder } from "../components/MenuBuilder";
import { UtensilsIcon, SparklesIcon, AwardIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Royal Peshawari Catering & Menu Builder | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Explore 35 years of iconic Peshawari culinary excellence. Build your wedding menu with authentic Mutton Dum Pukht, Desi Ghee Shinwari Karahi, Balochi Sajji, and clay pot Zafrani Kheer.",
    },
  ];
}

export default function CateringPage() {
  const navigate = useNavigate();

  const handleSelectMenuForBooking = () => {
    navigate("/booking");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <UtensilsIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>35 Years of Peshawari Gastronomic Mastery</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Royal Peshawari <span className="gold-text-gradient">Catering & Menu Builder</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Slow-cooked Dum Pukht in pure lamb fat, organic rock salt, sizzling fresh Shinwari Karahis in pure butterfat, and Iranian saffron sweets. Assemble your complimentary VIP tasting tray.
        </p>
      </div>

      {/* Main Component */}
      <MenuBuilder onSelectMenuForBooking={handleSelectMenuForBooking} />
    </div>
  );
}
