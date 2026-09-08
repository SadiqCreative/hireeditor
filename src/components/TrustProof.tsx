import React from 'react';
import { TRUST_METRICS, TRUSTED_BRANDS } from '../data/editors';

export const TrustProof: React.FC = () => {
  return (
    <section id="trust" className="w-full py-12 md:py-16 border-y border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC]/70 dark:bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#64748B] dark:text-[#94A3B8] mb-2">
            Social Proof & Track Record
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-display">
            Trusted by creators, agencies, businesses and growing teams.
          </h2>
        </div>

        {/* Brand Logos / Subtle Monograms */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-12 opacity-80 dark:opacity-70 transition-opacity">
          {TRUSTED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 group cursor-default transition-transform hover:scale-105"
            >
              <div className="w-7 h-7 rounded-md bg-white dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1] text-[#0F172A] dark:text-[#F8FAFC] group-hover:border-[#F27D26] dark:group-hover:border-[#F97316] flex items-center justify-center font-mono text-xs font-bold transition-colors">
                {brand.symbol}
              </div>
              <span className="font-display font-semibold text-sm tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* High-Impact Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] shadow-xs text-center sm:text-left transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                {metric.label}
              </div>
              <div className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
