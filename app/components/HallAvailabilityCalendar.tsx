import React, { useState } from "react";
import { CalendarIcon, ClockIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from "./icons/Icons";
import { VENUES } from "../data/shirazData";

interface HallAvailabilityCalendarProps {
  onSelectDateAndHall: (venueId: string, date: string, slot: "afternoon" | "evening") => void;
}

export const HallAvailabilityCalendar: React.FC<HallAvailabilityCalendarProps> = ({
  onSelectDateAndHall,
}) => {
  const [selectedVenueId, setSelectedVenueId] = useState(VENUES[0].id);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // 0: Nov 2026, 1: Dec 2026, 2: Jan 2027

  const months = [
    { label: "November 2026", year: 2026, month: 11, days: 30, startDayOfWeek: 0 },
    { label: "December 2026", year: 2026, month: 12, days: 31, startDayOfWeek: 2 },
    { label: "January 2027", year: 2027, month: 1, days: 31, startDayOfWeek: 5 },
    { label: "February 2027", year: 2027, month: 2, days: 28, startDayOfWeek: 1 },
  ];

  const currentMonth = months[currentMonthIndex];

  // Helper to determine mocked slot status for a date to make the demo realistic
  const getSlotStatus = (day: number) => {
    // Weekends (Fridays/Sundays) are higher demand
    const isPrime = day % 7 === 5 || day % 7 === 0;
    if (day % 6 === 0) return "booked";
    if (isPrime && day % 3 === 0) return "lunch_only";
    return "available";
  };

  const handleDayClick = (day: number) => {
    const status = getSlotStatus(day);
    if (status === "booked") return;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = currentMonth.month < 10 ? `0${currentMonth.month}` : `${currentMonth.month}`;
    const dateStr = `${currentMonth.year}-${formattedMonth}-${formattedDay}`;
    const slot: "afternoon" | "evening" = status === "lunch_only" ? "afternoon" : "evening";
    onSelectDateAndHall(selectedVenueId, dateStr, slot);
  };

  return (
    <section id="calendar" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Peak Wedding Season Radar</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Live Hall Availability{" "}
            <span className="gold-text-gradient">Calendar Matrix</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Check real-time date openings across Shiraz Arena, Shiraz Gathering, and Shiraz Ronaq. Select any available date to launch your automated booking.
          </p>
        </div>

        {/* Main Calendar Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xl shadow-amber-900/5">
          {/* Venue Switcher & Month Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-100">
            {/* Hall Selector */}
            <div className="flex flex-wrap gap-2">
              {VENUES.slice(0, 3).map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVenueId(v.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    v.id === selectedVenueId
                      ? "bg-amber-400 text-amber-950 shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {v.name.split("-")[0]}
                </button>
              ))}
            </div>

            {/* Month Navigator */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentMonthIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentMonthIndex === 0}
                className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4 text-zinc-700" />
              </button>
              <span className="font-display font-bold text-sm text-zinc-900 min-w-[140px] text-center">
                {currentMonth.label}
              </span>
              <button
                onClick={() => setCurrentMonthIndex((prev) => Math.min(months.length - 1, prev + 1))}
                disabled={currentMonthIndex === months.length - 1}
                className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronRightIcon className="w-4 h-4 text-zinc-700" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-zinc-500 uppercase tracking-wider py-4">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span className="text-amber-800">Fri</span>
            <span>Sat</span>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty offset padding cells */}
            {[...Array(currentMonth.startDayOfWeek)].map((_, i) => (
              <div key={`empty-${i}`} className="h-16 rounded-2xl bg-zinc-50/40 border border-transparent" />
            ))}

            {/* Days in Month */}
            {[...Array(currentMonth.days)].map((_, i) => {
              const day = i + 1;
              const status = getSlotStatus(day);
              return (
                <div
                  key={`day-${day}`}
                  onClick={() => handleDayClick(day)}
                  className={`h-16 rounded-2xl p-2 border transition-all flex flex-col justify-between ${
                    status === "booked"
                      ? "bg-zinc-100/70 border-zinc-200 opacity-50 cursor-not-allowed"
                      : status === "lunch_only"
                      ? "bg-amber-50/80 border-amber-300 hover:border-amber-500 cursor-pointer shadow-xs"
                      : "bg-white border-zinc-200 hover:border-emerald-500 hover:shadow-md cursor-pointer"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs font-bold text-zinc-900">{day}</span>
                    {status === "available" && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    )}
                    {status === "lunch_only" && (
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    )}
                    {status === "booked" && (
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    )}
                  </div>

                  <span className="text-[9px] font-mono leading-tight">
                    {status === "available" && <span className="text-emerald-700 font-bold">Open</span>}
                    {status === "lunch_only" && <span className="text-amber-800 font-bold">Lunch Only</span>}
                    {status === "booked" && <span className="text-zinc-400">Booked</span>}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4 text-zinc-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Both Lunch & Dinner Open</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Afternoon Lunch Only (5% Off)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span>Fully Booked</span>
              </span>
            </div>

            <span className="text-[11px] text-zinc-400">
              Click any open date to initiate reservation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
