import React from "react";
import { CheckCircleIcon, SparklesIcon, CrownIcon, XIcon, DownloadIcon, PhoneIcon } from "./icons/Icons";

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    bookingRef: string;
    venueName: string;
    eventType: string;
    date: string;
    slot: string;
    guestCount: number;
    menuPackageName: string;
    totalAmount: number;
    fullName: string;
    phone: string;
    city: string;
    selectedAddons: string[];
  };
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const shareText = `*SHIRAZ HOSPITALITY - WEDDING BOOKING INQUIRY*%0A` +
    `Ref ID: ${bookingData.bookingRef}%0A` +
    `Client: ${bookingData.fullName} (${bookingData.city})%0A` +
    `Phone: ${bookingData.phone}%0A` +
    `Venue: ${bookingData.venueName}%0A` +
    `Event: ${bookingData.eventType}%0A` +
    `Date: ${bookingData.date} (${bookingData.slot.toUpperCase()} Slot)%0A` +
    `Guests: ${bookingData.guestCount}%0A` +
    `Menu: ${bookingData.menuPackageName}%0A` +
    `Estimated Total: PKR ${bookingData.totalAmount.toLocaleString()}%0A` +
    `Please confirm the hall reservation for my dates.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-3 shadow-md shadow-emerald-500/10">
            <CheckCircleIcon className="w-8 h-8 text-emerald-700" />
          </div>
          <span className="text-[11px] font-mono tracking-widest text-amber-900 uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-300 font-bold">
            Automated Reservation Initiated
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 mt-2">
            Shiraz Imperial Voucher
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Reference ID: <strong className="font-mono text-amber-900 font-bold">{bookingData.bookingRef}</strong>
          </p>
        </div>

        {/* Voucher Body Card (Light Theme) */}
        <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-5 mb-6 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs border-b border-amber-200/80 pb-4">
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Venue</span>
              <span className="font-bold text-zinc-900">{bookingData.venueName}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Event Type</span>
              <span className="font-bold text-amber-900">{bookingData.eventType}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Wedding Date</span>
              <span className="font-bold font-mono text-zinc-900">{bookingData.date}</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Time Slot</span>
              <span className="font-bold text-emerald-800 capitalize">{bookingData.slot} Slot</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Total Guests</span>
              <span className="font-bold font-mono text-zinc-900">{bookingData.guestCount} Guests</span>
            </div>
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block font-medium">Menu Tier</span>
              <span className="font-bold text-amber-900">{bookingData.menuPackageName}</span>
            </div>
          </div>

          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1 font-medium">Client Profile</span>
            <div className="text-xs text-zinc-700 flex flex-wrap gap-x-4 gap-y-1">
              <span><strong>Name:</strong> {bookingData.fullName}</span>
              <span><strong>Phone:</strong> {bookingData.phone}</span>
              <span><strong>City:</strong> {bookingData.city}</span>
            </div>
          </div>

          {bookingData.selectedAddons.length > 0 && (
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-1 font-medium">Production Add-ons</span>
              <div className="flex flex-wrap gap-1.5">
                {bookingData.selectedAddons.map((addon) => (
                  <span
                    key={addon}
                    className="text-[11px] bg-white text-zinc-700 px-2 py-0.5 rounded border border-zinc-200 shadow-xs"
                  >
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Grand Total */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-200/80">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Automated Quotation Estimate</div>
              <div className="text-[10px] text-zinc-400">Includes hall setup, catering, selected services & taxes</div>
            </div>
            <div className="text-right">
              <span className="font-mono text-2xl font-bold text-amber-900">
                ₨ {bookingData.totalAmount.toLocaleString()}
              </span>
              <span className="text-[10px] text-zinc-500 block font-mono">PKR (Pakistani Rupee)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`https://wa.me/923000000000?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 transition-all"
          >
            <PhoneIcon className="w-4 h-4 text-white" />
            <span>Confirm Instant Hall Lock via WhatsApp Concierge</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrint}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-700 border border-zinc-300 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2"
            >
              <DownloadIcon className="w-4 h-4 text-zinc-600" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl text-xs font-bold text-amber-900 border border-amber-300 bg-amber-50 hover:bg-amber-100 transition-colors"
            >
              Close & Plan Layout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
