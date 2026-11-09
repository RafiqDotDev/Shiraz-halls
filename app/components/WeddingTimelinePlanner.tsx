import React, { useState } from "react";
import { CalendarIcon, CheckCircleIcon, SparklesIcon, CrownIcon, ClockIcon } from "./icons/Icons";

export const WeddingTimelinePlanner: React.FC = () => {
  const [weddingDate, setWeddingDate] = useState("2026-12-20");
  const [completedTasks, setCompletedTasks] = useState<string[]>([
    "task-1",
    "task-2",
  ]);

  const milestones = [
    {
      id: "task-1",
      period: "6-8 Months Prior",
      title: "Hall Reservation & Date Lock",
      desc: "Lock Shiraz Arena or Shiraz Gathering hall slot; reserve Friday/Sunday peak dates.",
      category: "Venue",
    },
    {
      id: "task-2",
      period: "4-5 Months Prior",
      title: "Bridal Couture & Groom Sherwani",
      desc: "Finalize bespoke designer bridal lehenga and Groom sherwani tailored in Lahore/Rawalpindi.",
      category: "Attire",
    },
    {
      id: "task-3",
      period: "2-3 Months Prior",
      title: "Shiraz VIP Menu Tasting Session",
      desc: "Visit Shiraz Restaurant on Abdara Road with family elders to sample Dum Pukht & Shinwari Karahi.",
      category: "Catering",
    },
    {
      id: "task-4",
      period: "6 Weeks Prior",
      title: "Stage Decor & Catwalk Production",
      desc: "Select floral color palette, 35ft chandelier dimming sequence, and dry ice sparkler entrance.",
      category: "Production",
    },
    {
      id: "task-5",
      period: "3 Weeks Prior",
      title: "Guest RSVP & Final Headcount",
      desc: "Confirm final guest count in the Shiraz portal to ensure exact catering and valet prep.",
      category: "Logistics",
    },
    {
      id: "task-6",
      period: "1 Week Prior",
      title: "Bridal Suite Butler Rehearsal",
      desc: "Coordinate entry song timing with audio engineers and verify backup generator protocols.",
      category: "Execution",
    },
  ];

  const toggleTask = (id: string) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((t) => t !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const progressPercent = Math.round((completedTasks.length / milestones.length) * 100);

  return (
    <section id="timeline-planner" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ClockIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Wedding Hall Tool</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Pakistani Wedding{" "}
            <span className="gold-text-gradient">Timeline & Checklist</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Stay completely stress-free with our automated milestone roadmap designed specifically for grand Pakistani wedding celebrations at Shiraz halls.
          </p>
        </div>

        {/* Milestone Tracker Card (Light Theme) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xl shadow-amber-900/5">
          {/* Top Date & Progress Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-6 h-6 text-amber-600" />
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-600 block font-bold">
                  Target Wedding Date
                </span>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-1.5 text-sm text-zinc-900 font-mono focus:outline-none focus:border-amber-500 shadow-xs"
                />
              </div>
            </div>

            <div className="w-full sm:w-64">
              <div className="flex justify-between text-xs mb-1.5 font-bold">
                <span className="text-zinc-600">Preparation Progress:</span>
                <span className="text-amber-800 font-mono">{progressPercent}% Ready</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Timeline Milestones List */}
          <div className="mt-8 space-y-3">
            {milestones.map((m) => {
              const isDone = completedTasks.includes(m.id);
              return (
                <div
                  key={m.id}
                  onClick={() => toggleTask(m.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                    isDone
                      ? "bg-zinc-50/60 border-zinc-200 opacity-65"
                      : "bg-white border-zinc-200 hover:border-amber-400 shadow-xs hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isDone
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-zinc-300 bg-zinc-50"
                    }`}
                  >
                    {isDone && <CheckCircleIcon className="w-4 h-4" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span
                        className={`font-bold text-sm ${
                          isDone ? "line-through text-zinc-400" : "text-zinc-900"
                        }`}
                      >
                        {m.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200 shrink-0 font-bold">
                        {m.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
