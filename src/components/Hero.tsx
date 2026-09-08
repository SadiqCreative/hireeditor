import React from 'react';
import { ArrowRight, Search, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onFindEditor: () => void;
  onBrowseEditors: () => void;
  onSelectEditor: (editorId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onFindEditor,
  onBrowseEditors,
  onSelectEditor,
}) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* 1. Main Visual (Primary Focal Point at the TOP) */}
      <HeroVisual
        onSelectEditor={onSelectEditor}
        onOpenMatchModal={() => onFindEditor()}
      />

      {/* 2. Below the visual: Main Headline, Supporting Text, and CTAs */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center mt-10 md:mt-14">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
          <span>Professional Video Editor Talent Matching</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.08] mb-5 font-display">
          Find the Right Video Editor.
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-[#64748B] dark:text-[#94A3B8] font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you need. We’ll evaluate suitable editors from our talent network and connect you with the right one.
        </p>

        {/* CTAs with Artistic Flair capsule pill buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            id="hero-primary-cta"
            onClick={onFindEditor}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Find an Editor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-secondary-cta"
            onClick={onBrowseEditors}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-900/[0.12] dark:border-white/[0.15] bg-transparent hover:border-[#F27D26] dark:hover:border-[#F97316] text-[#0F172A] dark:text-[#F8FAFC] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8]" />
            <span>Browse Editors</span>
          </button>
        </div>

        {/* Supporting micro reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
            Top 2% Vetted Talent
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>48-Hour Matched Introductions</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>Full-time or Project-Based</span>
        </div>
      </div>
    </section>
  );
};
