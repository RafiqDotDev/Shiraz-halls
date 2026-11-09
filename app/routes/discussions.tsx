import React from "react";
import type { Route } from "./+types/discussions";
import { EventDiscussions } from "../components/EventDiscussions";
import { MessageSquareIcon, SparklesIcon, CrownIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Event Discussions & Wedding Majlis | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Connect with brides, grooms, and Shiraz certified event planners. Discuss Barat stage decor, sound acoustics, menu tastings, and vendor recommendations in Peshawar.",
    },
  ];
}

export default function DiscussionsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <MessageSquareIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>The Sovereign Wedding Majlis</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Wedding Discussions & <span className="gold-text-gradient">Community Forum</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Real questions, honest bride & groom reviews, and verified answers from Shiraz senior hospitality planners and executive master chefs.
        </p>
      </div>

      {/* Main Component */}
      <EventDiscussions />
    </div>
  );
}
