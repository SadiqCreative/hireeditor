import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onFindEditor: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onFindEditor }) => {
  return (
    <section id="final-cta" className="py-20 md:py-32 relative overflow-hidden border-t border-slate-900/[0.08] dark:border-white/[0.1]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F27D26]/10 dark:bg-[#F97316]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
          <span>Talent Matching Guaranteed</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.1] mb-6 font-display">
          Your next great editor is out there.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#64748B] dark:text-[#94A3B8] font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you’re looking for. We’ll help you find the right match.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-find-editor-cta"
            onClick={onFindEditor}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Find an Editor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Guarantee footer note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <ShieldCheck className="w-4 h-4 text-[#F27D26] dark:text-[#F97316]" />
          <span>No search fees until you choose your editor • 14-day trial period</span>
        </div>

      </div>
    </section>
  );
};
