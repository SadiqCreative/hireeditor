import React from 'react';
import { DollarSign, Shield, ArrowRight, Video, Sparkles, Check, Flame, Trophy } from 'lucide-react';

interface ForEditorsProps {
  onJoinNetwork: () => void;
}

export const ForEditors: React.FC<ForEditorsProps> = ({ onJoinNetwork }) => {
  return (
    <section id="for-editors" className="py-20 md:py-28 border-t border-slate-900/[0.08] dark:border-white/[0.1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
            Talent Community
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight font-display">
            Great editors deserve great opportunities.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl">
            You shouldn’t spend 60% of your work week pitching on cheap freelance platforms or chasing unpaid invoices. Join our private roster and get matched directly with serious creators, funded startups, and premier agencies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] shadow-xs flex flex-col justify-between transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center mb-5">
                <Trophy className="w-5 h-5 text-[#F27D26] dark:text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-display">
                Pre-Vetted, High-Paying Clients
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Work exclusively with businesses and creators who understand the true economic value of rhythm, color, sound, and visual storytelling.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              <span>Average rate: $90–$140/hr</span>
            </div>
          </div>

          <div className="p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] shadow-xs flex flex-col justify-between transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-display">
                Guaranteed Escrow & On-Time Payouts
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                We handle the contracts, milestone verifications, and cross-border currency payouts. You simply edit great work and get paid every two weeks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              <span>Zero invoice chasing</span>
            </div>
          </div>

          <div className="p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] shadow-xs flex flex-col justify-between transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center mb-5">
                <Flame className="w-5 h-5 text-[#F27D26] dark:text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-display">
                No Bidding Wars
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                We don’t pit 50 editors against each other to drive rates down. When we recommend you, you are one of maximum 2 hand-picked candidates presented to the client.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              <span>Direct 1-on-1 matches</span>
            </div>
          </div>

        </div>

        {/* Banner with CTA */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#0F172A] text-white dark:bg-[#151518] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F27D26] dark:text-[#F97316] mb-2">
              Application Process
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
              Ready to elevate your editing roster?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
              Accepting applications from senior video editors, motion designers, and colorists with a minimum 4 years of verified commercial or creator experience.
            </p>
          </div>

          <button
            id="join-network-cta"
            onClick={onJoinNetwork}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#D96916] text-white dark:bg-[#F97316] dark:hover:bg-[#EA580C] font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Join the Editor Network</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
