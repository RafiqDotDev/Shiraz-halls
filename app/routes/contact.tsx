import React, { useState } from "react";
import type { Route } from "./+types/contact";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon, CrownIcon, SparklesIcon } from "../components/icons/Icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Locations & VIP Concierge Desk | Shiraz (shiraz.pk)" },
    {
      name: "description",
      content:
        "Visit Shiraz Arena on Ring Road, Shiraz Gathering near Board Bazaar, and Shiraz Restaurant on Abdara Road, University Town, Peshawar. Call our VIP reservation desk.",
    },
  ];
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hallPreference, setHallPreference] = useState("Shiraz Arena");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const branches = [
    {
      name: "Shiraz Arena (Grand Imperial Palace)",
      role: "Monumental Wedding Ballrooms & Mega Award Shows",
      address: "Ring Road Interchange / Near University Town corridor, Peshawar",
      phone: "+92 91 570 1234 / +92 91 584 1234",
      timing: "10:00 AM – 11:30 PM (Daily)",
      features: "35ft Crystal Ceiling, 2,000 Capacity, Dual Bridal Suites, 400+ Car Valet Parking",
    },
    {
      name: "Shiraz Gathering (Crystal Glasshouse Marquee)",
      role: "Romantic Glasshouse Marquees & Garden Weddings",
      address: "Near Board Bazaar / Jamrud Road corridor, Peshawar",
      phone: "+92 91 560 5678 / +92 300 000 0000",
      timing: "10:00 AM – 11:30 PM (Daily)",
      features: "Panoramic Glasshouse Walls, Fairy Light Canopy, Open-Air Lawn Terrace",
    },
    {
      name: "Shiraz Ronaq & Flagship Restaurant",
      role: "Executive Dining, VIP Tastings & Intimate Banquets",
      address: "Abdara Road, University Town, Peshawar",
      phone: "+92 91 570 9999 / +92 91 570 8888",
      timing: "12:00 PM – 12:00 AM (Daily)",
      features: "35 Years Culinary Heritage, Live Dum Pukht, Desi Ghee Shinwari Karahi",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <MapPinIcon className="w-3.5 h-3.5 text-amber-700" />
          <span>Locations & Consultation</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight">
          Visit Our <span className="gold-text-gradient">Imperial Locations</span>
        </h1>
        <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto font-light">
          Experience our halls in person, meet with our Senior Banquet Directors, or arrange your family's complimentary menu tasting session.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Branch Cards */}
          <div className="lg:col-span-7 space-y-5">
            {branches.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200 shadow-md shadow-amber-900/5 hover:border-amber-400 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-lg text-zinc-900">
                      {b.name}
                    </h3>
                    <div className="text-xs text-amber-900 font-semibold">{b.role}</div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold shrink-0">
                    {idx + 1}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-600 my-4 pt-2 border-t border-zinc-100">
                  <div className="flex items-start gap-2.5">
                    <MapPinIcon className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-amber-700 shrink-0" />
                    <span className="font-mono font-medium text-zinc-800">{b.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ClockIcon className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{b.timing}</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-[11px] text-zinc-700">
                  <strong>Key Highlights:</strong> {b.features}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: In-Person Consultation Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-xl shadow-amber-900/5 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
              <SparklesIcon className="w-4 h-4 text-amber-700" />
              <span>VIP Walkthrough Request</span>
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-900 mb-1">
              Schedule Hall Inspection
            </h3>
            <p className="text-xs text-zinc-500 mb-6 font-light">
              Our Senior Banquet Consultant will welcome your family at the hall and guide you through stage setups and tasting options.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircleIcon className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-emerald-950 text-base">
                  Walkthrough Scheduled
                </h4>
                <p className="text-xs text-emerald-900 font-light leading-relaxed">
                  Thank you, {name}! Our Banquet Director will call you at {phone} within 2 hours to confirm your private hall walkthrough at {hallPreference}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline pt-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sardar Hamza Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Preferred Hall
                  </label>
                  <select
                    value={hallPreference}
                    onChange={(e) => setHallPreference(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option value="Shiraz Arena">Shiraz Arena (Ring Road)</option>
                    <option value="Shiraz Gathering">Shiraz Gathering (Board Bazaar)</option>
                    <option value="Shiraz Ronaq">Shiraz Ronaq (Abdara Road)</option>
                    <option value="Emerald Lawns">The Emerald Palm Lawns</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Target Event Date & Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Target date Dec 2026 for Barat (800 guests). Would like to inspect bridal suite..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl p-3 text-xs text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-md shadow-amber-400/20 transition-all"
                >
                  Confirm Walkthrough Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
