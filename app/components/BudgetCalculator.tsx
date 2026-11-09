import React, { useState } from "react";
import { SlidersIcon, SparklesIcon, CrownIcon, AwardIcon } from "./icons/Icons";

export const BudgetCalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState(6500000); // 6.5 Million PKR default

  const allocations = [
    {
      category: "Shiraz Royal Catering & Gourmet Feast",
      percent: 45,
      amount: Math.round(totalBudget * 0.45),
      desc: "Includes mutton dum pukht, shinwari karahi, live BBQ, and Iranian saffron sweets.",
      color: "bg-amber-400",
    },
    {
      category: "Shiraz Arena / Gathering Hall Rental & Climate Control",
      percent: 22,
      amount: Math.round(totalBudget * 0.22),
      desc: "Pillarless ballroom, backup generators, private bridal suites, and cleaning staff.",
      color: "bg-emerald-500",
    },
    {
      category: "Imperial Stage Decor, Catwalk & Floral Production",
      percent: 14,
      amount: Math.round(totalBudget * 0.14),
      desc: "Fresh floral arches, cold pyro entry, dry ice fog, and chandelier sequence.",
      color: "bg-rose-400",
    },
    {
      category: "Bridal Couture & Groom Royal Sherwani",
      percent: 10,
      amount: Math.round(totalBudget * 0.10),
      desc: "Designer Pakistani bridal wear, traditional jewellery, and footwear.",
      color: "bg-purple-500",
    },
    {
      category: "4K Cinematic Videography & Drone Live Stream",
      percent: 6,
      amount: Math.round(totalBudget * 0.06),
      desc: "Multi-camera wedding film, drone exterior vista, and instant family reels.",
      color: "bg-cyan-500",
    },
    {
      category: "Executive Valet, Hospitality & Contingency Reserve",
      percent: 3,
      amount: Math.round(totalBudget * 0.03),
      desc: "35-driver valet fleet, computerized tokens, and on-call VIP assistance.",
      color: "bg-zinc-400",
    },
  ];

  return (
    <section id="budget-calculator" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <SlidersIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Smart Wedding Tool</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Pakistani Wedding{" "}
            <span className="gold-text-gradient">Budget Allocator</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Plan your complete wedding finances with empirical Pakistani hospitality benchmarks. Adjust your total budget to see recommended breakdowns in Pakistani Rupees.
          </p>
        </div>

        {/* Main Budget Card (Light Theme) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xl shadow-amber-900/5">
          {/* Slider and Presets */}
          <div className="pb-8 border-b border-zinc-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                Total Projected Wedding Budget (PKR)
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-bold text-amber-900">
                ₨ {totalBudget.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="2500000"
              max="20000000"
              step="250000"
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2.5 bg-zinc-200 rounded-lg"
            />

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { label: "₨ 3.5M (Intimate Royal)", val: 3500000 },
                { label: "₨ 6.5M (Grand Imperial)", val: 6500000 },
                { label: "₨ 10M (Mega Barat & Walima)", val: 10000000 },
                { label: "₨ 15M+ (Shehenshah Palace)", val: 15000000 },
              ].map((p) => (
                <button
                  key={p.val}
                  type="button"
                  onClick={() => setTotalBudget(p.val)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    totalBudget === p.val
                      ? "bg-amber-400 text-amber-950 shadow-xs"
                      : "bg-zinc-50 text-zinc-600 border border-zinc-200 hover:bg-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Allocation Progress Bar */}
          <div className="pt-6 mb-6">
            <div className="flex h-3 rounded-full overflow-hidden gap-0.5 border border-zinc-200">
              {allocations.map((a) => (
                <div
                  key={a.category}
                  className={`${a.color} transition-all duration-500`}
                  style={{ width: `${a.percent}%` }}
                  title={`${a.category}: ${a.percent}%`}
                />
              ))}
            </div>
          </div>

          {/* Itemized Categories List */}
          <div className="space-y-3">
            {allocations.map((a) => (
              <div
                key={a.category}
                className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start gap-3">
                  <span className={`w-3.5 h-3.5 rounded-full ${a.color} shrink-0 mt-0.5`}></span>
                  <div>
                    <div className="text-xs font-bold text-zinc-900">{a.category}</div>
                    <div className="text-[11px] text-zinc-600 font-light">{a.desc}</div>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-6 sm:pl-0">
                  <div className="font-mono text-sm font-bold text-amber-900">
                    ₨ {a.amount.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono font-medium">{a.percent}% of Total</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-600 font-medium">
              Match your budget directly with Shiraz packages in the automated booking engine:
            </span>
            <a
              href="#automated-booking"
              className="py-2.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shrink-0"
            >
              Configure Within Budget
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
