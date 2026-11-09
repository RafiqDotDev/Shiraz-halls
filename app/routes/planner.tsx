import React from "react";
import type { Route } from "./+types/planner";
import { BudgetCalculator } from "../components/BudgetCalculator";
import { WeddingTimelinePlanner } from "../components/WeddingTimelinePlanner";
import { SlidersIcon, ClockIcon, SparklesIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pakistani Wedding Budget & Timeline Planner | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Comprehensive Pakistani wedding budget allocation calculator (PKR) and 8-month milestone roadmap for grand celebrations at Shiraz Arena and Shiraz Gathering.",
    },
  ];
}

export default function PlannerPage() {
  return (
    <div>
      {/* Light Luxury Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdfcfa] via-[#faf6ee] to-[#faf8f5] border-b border-amber-200/60 pt-28 pb-14 lg:pb-18">
        {/* Ambient atmospheric warm glows */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-900/5">
            <ClockIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Wedding Planning Suite</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
            Wedding Budget & <span className="gold-text-gradient">Timeline Roadmap</span>
          </h1>

          <p className="font-serif text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto font-light leading-relaxed">
            Plan every rupee and milestone with certainty. Calculate realistic Pakistani wedding expenditures and follow our 8-month master schedule for an effortless grand celebration.
          </p>

          {/* Planning Suite Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>100% Free PKR Cost Allocation Tool</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>8-Month Step-by-Step Roadmap</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Peshawar Vendor Guidance</span>
            </span>
          </div>
        </div>
      </section>

      {/* Budget Calculator */}
      <BudgetCalculator />

      {/* Timeline Checklist */}
      <WeddingTimelinePlanner />
    </div>
  );
}
