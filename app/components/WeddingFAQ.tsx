import React, { useState } from "react";
import { ChevronDownIcon, ShieldCheckIcon, SparklesIcon } from "./icons/Icons";

export const WeddingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Shiraz's power backup guarantee during load-shedding?",
      a: "Shiraz Arena and Shiraz Gathering are equipped with three industrial 500kVA Caterpillar backup generators connected through automatic synchronised transfer switches. In the event of grid interruption, transitions occur within 3 seconds with zero flicker to stage lighting, sound, or central AC.",
    },
    {
      q: "Can Shiraz accommodate strictly segregated ladies and gents wedding arrangements?",
      a: "Yes. Both Shiraz Arena and Shiraz Gathering feature acoustic partition walls with completely separate red-carpet entrances, separate buffet lines, dedicated female waitstaff, and female security guards to ensure 100% privacy for ladies.",
    },
    {
      q: "How does the complimentary VIP menu tasting session work?",
      a: "Upon completing your online automated reservation voucher, our banquet desk coordinates an executive tasting session for up to 6 family members at Shiraz Restaurant, University Town. You sample your selected dishes cooked live by our Master Chefs.",
    },
    {
      q: "What are the advance payment milestones and date-lock terms?",
      a: "Online reservations place a tentative 48-hour complimentary hold on your date. Contract signing requires a 25% deposit, 50% 30 days prior to the wedding, and the remaining 25% on the week of the event. Dates can be rescheduled with 45 days prior notice without penalty.",
    },
    {
      q: "Is dedicated valet parking provided for all wedding guests?",
      a: "Yes. Shiraz provides an executive fleet of 35 uniformed valet drivers with computerized SMS token retrieval and private paved parking accommodating up to 450 vehicles simultaneously.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-amber-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Essential Wedding Inquiries</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Frequently Asked{" "}
            <span className="gold-text-gradient">Questions & Policies</span>
          </h2>

          <p className="font-serif text-lg text-zinc-700 leading-relaxed font-light">
            Everything you need to know about electricity backup, segregated arrangements, VIP tasting, and valet logistics.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-none border border-zinc-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-sm text-zinc-900 hover:text-amber-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 leading-relaxed font-light border-t border-zinc-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
