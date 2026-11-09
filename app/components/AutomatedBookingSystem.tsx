import React, { useState } from "react";
import { VENUES, MENU_PACKAGES, EVENT_ADDONS, MENU_ITEMS_CATALOG } from "../data/shirazData";
import { BookingConfirmationModal } from "./BookingConfirmationModal";
import {
  SparklesIcon,
  CrownIcon,
  CalendarIcon,
  UsersIcon,
  UtensilsIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ShieldCheckIcon,
  PhoneIcon,
  AwardIcon,
} from "./icons/Icons";

interface AutomatedBookingSystemProps {
  initialVenueId?: string;
  initialDate?: string;
  initialSlot?: "afternoon" | "evening";
  initialGuests?: number;
}

export const AutomatedBookingSystem: React.FC<AutomatedBookingSystemProps> = ({
  initialVenueId = "shiraz-arena",
  initialDate = "2026-12-18",
  initialSlot = "evening",
  initialGuests = 600,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedVenueId, setSelectedVenueId] = useState(initialVenueId);
  const [eventType, setEventType] = useState("Barat");
  const [eventDate, setEventDate] = useState(initialDate);
  const [eventSlot, setEventSlot] = useState<"afternoon" | "evening">(initialSlot);
  const [guestCount, setGuestCount] = useState(initialGuests);
  const [selectedMenuPackageId, setSelectedMenuPackageId] = useState("pkg-gold");
  const [selectedCustomDishes, setSelectedCustomDishes] = useState<string[]>(["m-2"]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "addon-floral-stage",
    "addon-dry-ice-sparks",
  ]);

  // Contact State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Peshawar");
  const [specialNotes, setSpecialNotes] = useState("");

  // Confirmation Modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedBookingRef, setConfirmedBookingRef] = useState("");

  const eventTypes = [
    "Barat",
    "Walima",
    "Mehndi / Sangeet",
    "Qawwali / Sufi Night",
    "Nikah & Reception",
    "Corporate Gala",
  ];

  const selectedVenue = VENUES.find((v) => v.id === selectedVenueId) || VENUES[0];
  const selectedMenuPackage =
    MENU_PACKAGES.find((p) => p.id === selectedMenuPackageId) || MENU_PACKAGES[1];

  // Calculate pricing breakdown
  const hallBaseRent = selectedVenue.baseHallRent;

  // Custom dish extra per head
  const customDishesTotalPerHead = selectedCustomDishes.reduce((acc, dishId) => {
    const item = MENU_ITEMS_CATALOG.find((m) => m.id === dishId);
    return acc + (item?.extraPerHead || 0);
  }, 0);

  const effectivePerHead = selectedMenuPackage.pricePerHead + customDishesTotalPerHead;
  const cateringSubtotal = guestCount * effectivePerHead;

  const addonsSubtotal = selectedAddons.reduce((acc, addonId) => {
    const addon = EVENT_ADDONS.find((a) => a.id === addonId);
    return acc + (addon?.price || 0);
  }, 0);

  const subtotalBeforeDiscounts = hallBaseRent + cateringSubtotal + addonsSubtotal;

  // 5% discount for Afternoon Lunch slots (automated incentive)
  const slotDiscount = eventSlot === "afternoon" ? Math.round(subtotalBeforeDiscounts * 0.05) : 0;
  const serviceTax = Math.round((subtotalBeforeDiscounts - slotDiscount) * 0.05);
  const grandTotal = subtotalBeforeDiscounts - slotDiscount + serviceTax;

  const toggleCustomDish = (dishId: string) => {
    if (selectedCustomDishes.includes(dishId)) {
      setSelectedCustomDishes(selectedCustomDishes.filter((id) => id !== dishId));
    } else {
      setSelectedCustomDishes([...selectedCustomDishes, dishId]);
    }
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your Name and WhatsApp phone number.");
      return;
    }
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `SHZ-2026-${randomNum}`;
    setConfirmedBookingRef(ref);
    setIsConfirmationOpen(true);
  };

  return (
    <section id="automated-booking" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Automated Reservation & Cost Estimator</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Reserve Your Imperial Date with{" "}
            <span className="gold-text-gradient">Instant Automation</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Customize hall, capacity, royal menus, and production add-ons with automated real-time availability checks and transparent per-head pricing in Pakistani Rupees.
          </p>

          {/* Stepper Progress Bar (Light Theme) */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {[
                { step: 1, label: "Hall & Date" },
                { step: 2, label: "Guests & Menu" },
                { step: 3, label: "Production" },
                { step: 4, label: "Summary" },
              ].map((s) => {
                const isActive = currentStep === s.step;
                const isCompleted = currentStep > s.step;
                return (
                  <button
                    key={s.step}
                    onClick={() => setCurrentStep(s.step)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-sm ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : isActive
                          ? "bg-amber-400 text-amber-950 ring-4 ring-amber-300/40"
                          : "bg-zinc-200 text-zinc-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircleIcon className="w-5 h-5 text-white" /> : s.step}
                    </div>
                    <span
                      className={`text-[11px] font-medium mt-2 transition-colors ${
                        isActive ? "text-amber-900 font-bold" : "text-zinc-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Booking Interactive Grid (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column (Steps 1-4) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xl shadow-amber-900/5">
            {/* STEP 1: VENUE & EVENT SLOT */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">
                    Step 1: Choose Your Venue & Event Slot
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal">
                    Select your preferred Shiraz hall, event nature, and target date.
                  </p>
                </div>

                {/* Venue Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {VENUES.map((v) => {
                    const isSelected = v.id === selectedVenueId;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVenueId(v.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-amber-50/60 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                            : "bg-zinc-50 border-zinc-200 hover:border-amber-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-display font-bold text-sm text-zinc-900">
                            {v.name.split("-")[0]}
                          </span>
                          <span className="text-[10px] font-mono uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                            ₨ {v.baseHallRent.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-500 line-clamp-1">{v.subtitle}</div>
                        <div className="mt-2 text-[11px] text-amber-900 font-mono font-semibold flex items-center gap-1">
                          <UsersIcon className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Cap: {v.capacityMin} - {v.capacityMax} guests</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Event Type Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Event Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setEventType(type)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          eventType === type
                            ? "bg-amber-400 text-amber-950 font-bold shadow-sm"
                            : "bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      min="2026-11-10"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white font-mono shadow-sm"
                    />
                    <span className="text-[11px] text-emerald-700 mt-1 block flex items-center gap-1 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                      <span>Prime Slot Available on this Date</span>
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setEventSlot("afternoon")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          eventSlot === "afternoon"
                            ? "bg-amber-50/80 border-amber-500 shadow-sm"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-white"
                        }`}
                      >
                        <div className="text-xs font-bold text-zinc-900">Afternoon Lunch</div>
                        <div className="text-[10px] text-zinc-500">1:00 PM - 4:30 PM</div>
                        <div className="text-[10px] text-emerald-700 font-bold mt-1">5% Off Rate</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setEventSlot("evening")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          eventSlot === "evening"
                            ? "bg-amber-50/80 border-amber-500 shadow-sm"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-white"
                        }`}
                      >
                        <div className="text-xs font-bold text-zinc-900">Evening Dinner</div>
                        <div className="text-[10px] text-zinc-500">7:30 PM - 12:00 AM</div>
                        <div className="text-[10px] text-amber-900 font-bold mt-1">Prime Royal Hour</div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-zinc-100">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-md flex items-center gap-2"
                  >
                    <span>Proceed to Guests & Menu</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: GUEST COUNT & CATERING MENU */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">
                    Step 2: Guest Count & Catering Menu Tier
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Adjust the guest slider and select from our four Michelin-grade Pakistani wedding menus.
                  </p>
                </div>

                {/* Guest Slider */}
                <div className="bg-amber-50/40 p-5 rounded-2xl border border-amber-200/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-zinc-600 font-bold">
                      Total Expected Guests
                    </span>
                    <span className="font-mono text-xl font-bold text-amber-900">
                      {guestCount} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min={selectedVenue.capacityMin}
                    max={selectedVenue.capacityMax}
                    step="25"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-zinc-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                    <span>Min: {selectedVenue.capacityMin}</span>
                    <span>Recommended for {selectedVenue.name.split("-")[0]}</span>
                    <span>Max: {selectedVenue.capacityMax}</span>
                  </div>
                </div>

                {/* Menu Package Cards */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Select Royal Menu Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {MENU_PACKAGES.map((pkg) => {
                      const isSelected = pkg.id === selectedMenuPackageId;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedMenuPackageId(pkg.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                            isSelected
                              ? "bg-amber-50/70 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                              : "bg-zinc-50 border-zinc-200 hover:border-amber-300 hover:bg-white"
                          }`}
                        >
                          {pkg.badge && (
                            <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-300">
                              {pkg.badge}
                            </span>
                          )}
                          <div className="font-display font-bold text-sm text-zinc-900">{pkg.name}</div>
                          <div className="text-amber-800 font-mono font-bold text-sm mt-1">
                            ₨ {pkg.pricePerHead.toLocaleString()}{" "}
                            <span className="text-[10px] text-zinc-500 font-normal">/ head</span>
                          </div>
                          <p className="text-xs text-zinc-600 mt-2 line-clamp-2">{pkg.description}</p>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {pkg.highlights.slice(0, 3).map((h) => (
                              <span
                                key={h}
                                className="text-[10px] bg-white text-zinc-700 px-2 py-0.5 rounded border border-zinc-200"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Gourmet Additions */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Optional Live Specialty Stations (Per-Head Additions)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {MENU_ITEMS_CATALOG.filter((i) => i.extraPerHead).map((dish) => {
                      const isChecked = selectedCustomDishes.includes(dish.id);
                      return (
                        <div
                          key={dish.id}
                          onClick={() => toggleCustomDish(dish.id)}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-colors ${
                            isChecked
                              ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold"
                              : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isChecked
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-zinc-300"
                              }`}
                            >
                              {isChecked && <CheckCircleIcon className="w-3.5 h-3.5" />}
                            </div>
                            <span className="font-medium">{dish.name}</span>
                          </div>
                          <span className="font-mono text-emerald-700 text-[11px] font-bold">
                            +₨ {dish.extraPerHead}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-zinc-100">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="py-3 px-5 rounded-xl text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md flex items-center gap-2"
                  >
                    <span>Proceed to Stage Production</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PRODUCTION & STAGE ADD-ONS */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">
                    Step 3: Royal Stage Decor & Production Add-ons
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Elevate your celebration with signature grand entrances, live Sufi troupes, and 4K aerial streaming.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {EVENT_ADDONS.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all relative ${
                          isSelected
                            ? "bg-amber-50/70 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                            : "bg-zinc-50 border-zinc-200 hover:border-amber-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? "bg-amber-500 border-amber-500 text-white"
                                  : "border-zinc-300"
                              }`}
                            >
                              {isSelected && <CheckCircleIcon className="w-3.5 h-3.5" />}
                            </div>
                            <span className="font-bold text-xs text-zinc-900">{addon.name}</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-zinc-600 mt-2 pl-6 line-clamp-2">
                          {addon.description}
                        </p>

                        <div className="mt-3 pl-6 flex items-center justify-between">
                          <span className="text-amber-900 font-mono font-bold text-xs">
                            ₨ {addon.price.toLocaleString()}
                          </span>
                          {addon.badge && (
                            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                              {addon.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4 border-t border-zinc-100">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="py-3 px-5 rounded-xl text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md flex items-center gap-2"
                  >
                    <span>Proceed to Contact & Review</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT & FINAL REVIEW */}
            {currentStep === 4 && (
              <form onSubmit={handleCompleteBooking} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">
                    Step 4: Contact Information & Reservation Lock
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Provide your contact details to generate your official Shiraz booking voucher.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sardar Hamza Khan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="hamza@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      City of Residence
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    >
                      <option value="Peshawar">Peshawar</option>
                      <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                      <option value="Mardan">Mardan</option>
                      <option value="Abbottabad">Abbottabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Overseas Pakistani (UK/USA/Gulf)">Overseas Pakistani (UK/USA/Gulf)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Segregated ladies seating arrangement, extra mild spice for overseas guests, special stage color theme..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="flex justify-between pt-4 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="py-3 px-5 rounded-xl text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="py-3 px-8 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md flex items-center gap-2"
                  >
                    <SparklesIcon className="w-4 h-4 text-amber-950" />
                    <span>Generate Official Booking Voucher</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Live Cost Estimation & Summary Card (Light Theme) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white border border-amber-200 rounded-3xl p-6 shadow-xl shadow-amber-900/5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-display">
                  Live Cost Estimator
                </span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                  Automated PKR
                </span>
              </div>

              {/* Selected Specs Quick List */}
              <div className="py-4 space-y-2.5 text-xs text-zinc-700 border-b border-zinc-100">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Hall:</span>
                  <span className="font-bold text-zinc-900">{selectedVenue.name.split("-")[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Event:</span>
                  <span className="text-amber-900 font-bold">{eventType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date & Slot:</span>
                  <span className="font-mono text-zinc-900 capitalize font-medium">{eventDate} ({eventSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Guests:</span>
                  <span className="font-mono font-bold text-zinc-900">{guestCount} persons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Menu Tier:</span>
                  <span className="text-amber-800 font-bold">{selectedMenuPackage.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Rate / Head:</span>
                  <span className="font-mono text-emerald-800 font-bold">₨ {effectivePerHead.toLocaleString()}</span>
                </div>
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="py-4 space-y-2 text-xs border-b border-zinc-100">
                <div className="flex justify-between text-zinc-600">
                  <span>Base Hall Rental:</span>
                  <span className="font-mono text-zinc-900 font-semibold">₨ {hallBaseRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Catering ({guestCount} x ₨ {effectivePerHead}):</span>
                  <span className="font-mono text-zinc-900 font-semibold">₨ {cateringSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Production Addons ({selectedAddons.length}):</span>
                  <span className="font-mono text-zinc-900 font-semibold">₨ {addonsSubtotal.toLocaleString()}</span>
                </div>

                {slotDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Afternoon Slot Discount (5%):</span>
                    <span className="font-mono">-₨ {slotDiscount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-600">
                  <span>Provincial Service Fee (5%):</span>
                  <span className="font-mono text-zinc-900 font-semibold">₨ {serviceTax.toLocaleString()}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">
                    Grand Total
                  </div>
                  <div className="text-[10px] text-zinc-400">All taxes & services included</div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-2xl font-bold text-amber-900">
                    ₨ {grandTotal.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-zinc-500 block font-mono">PKR</span>
                </div>
              </div>
            </div>

            {/* Trust & Guarantee Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-zinc-600 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-[11px]">
                <ShieldCheckIcon className="w-4 h-4 text-amber-700" />
                <span>Shiraz Executive Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Dates are held tentatively for 48 hours upon online submission. No non-refundable advance required until contract signing at our University Town or Ring Road desk.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        bookingData={{
          bookingRef: confirmedBookingRef,
          venueName: selectedVenue.name,
          eventType,
          date: eventDate,
          slot: eventSlot,
          guestCount,
          menuPackageName: selectedMenuPackage.name,
          totalAmount: grandTotal,
          fullName,
          phone,
          city,
          selectedAddons: selectedAddons.map((id) => {
            const add = EVENT_ADDONS.find((a) => a.id === id);
            return add ? add.name : id;
          }),
        }}
      />
    </section>
  );
};
