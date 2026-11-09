import React from "react";
import { StarIcon, CrownIcon, AwardIcon } from "./icons/Icons";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      id: "rev-1",
      name: "Malik Jahangir & Family",
      event: "Barat Reception (1,400 Guests) at Shiraz Arena",
      quote:
        "Hosting our son's Barat at Shiraz Arena was effortless. The computerized climate control kept 1,400 guests comfortable even in high summer, and the mutton Shinwari Karahi was served boiling hot to every single table.",
      rating: 5,
      date: "October 2026",
    },
    {
      id: "rev-2",
      name: "Dr. Samina & Col. Tariq Arbab",
      event: "Walima Dinner (800 Guests) at Shiraz Gathering",
      quote:
        "The glass marquee setting at Shiraz Gathering surrounded by manicured lawns gave our daughter's wedding an ethereal fairy-tale vibe. The live Samovar Kashmiri tea station was the talk of the evening.",
      rating: 5,
      date: "September 2026",
    },
    {
      id: "rev-3",
      name: "Engr. Shahabuddin Yousafzai",
      event: "Corporate Gala & Awards at Shiraz Ronaq",
      quote:
        "Shiraz has been our family's gold standard for culinary heritage since 1994. The Dum Pukht is unmatched anywhere in Pakistan. Professional staff and seamless valet execution.",
      rating: 5,
      date: "August 2026",
    },
  ];

  return (
    <section className="py-20 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <AwardIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Patron Experiences</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Treasured Words from{" "}
            <span className="gold-text-gradient">Distinguished Families</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-none p-6 border-2 border-amber-200/90 flex flex-col justify-between shadow-lg shadow-amber-900/5"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif italic text-zinc-700 text-sm leading-relaxed mb-6 font-light">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <div className="font-display font-bold text-zinc-900 text-sm">{r.name}</div>
                <div className="text-[11px] text-amber-800 font-semibold">{r.event}</div>
                <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
