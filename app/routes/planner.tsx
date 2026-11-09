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
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-4 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
          <ClockIcon className="w-3.5 h-3.5 text-emerald-700" />
          <span>Interactive Wedding Suite</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Wedding Budget & <span className="gold-text-gradient">Timeline Roadmap</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Plan every rupee and milestone with certainty. Calculate realistic Pakistani wedding expenditures and follow our master schedule for an effortless wedding.
        </p>
      </div>

      {/* Budget Calculator */}
      <BudgetCalculator />

      {/* Timeline Checklist */}
      <WeddingTimelinePlanner />
    </div>
  );
}
