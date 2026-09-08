import React, { useState } from 'react';
import { Briefcase, Calendar, Check, ArrowRight, Zap, Clock, Shield, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/editors';

interface HowItWorksProps {
  onFindEditor: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onFindEditor }) => {
  const [model, setModel] = useState<'both' | 'fulltime' | 'freelance'>('both');

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8FAFC]/60 dark:bg-[#0D0D11] border-t border-slate-900/[0.08] dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-display">
            How Editors on Demand Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            From initial project requirements to the first cut delivered in your Slack or Frame.io.
          </p>

          {/* Model Selector / Support for Both */}
          <div className="mt-8 inline-flex p-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] shadow-xs">
            <button
              onClick={() => setModel('both')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                model === 'both'
                  ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] shadow-xs'
                  : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              All Engagements
            </button>
            <button
              onClick={() => setModel('fulltime')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                model === 'fulltime'
                  ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] shadow-xs'
                  : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              Dedicated Full-Time
            </button>
            <button
              onClick={() => setModel('freelance')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                model === 'freelance'
                  ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] shadow-xs'
                  : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              Freelance & Projects
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] shadow-xs flex flex-col justify-between transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-[#F27D26] dark:text-[#F97316] font-mono font-bold text-sm flex items-center justify-center mb-5">
                  {step.number}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Zero friction</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Full-Time vs Freelance Projects Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Option A: Full-time */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
              <Briefcase className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
              Full-Time Hiring
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-display">
              Dedicated In-House Editors
            </h3>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-6 leading-relaxed">
              Ideal for high-volume content creators, SaaS marketing engines, and agencies needing 40 hrs/week embedded in their team.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-[#F8FAFC] mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Exclusively dedicated to your brand</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Standardized monthly flat retainers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct Slack, Discord & Frame.io integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>14-day risk-free talent replacement guarantee</span>
              </li>
            </ul>
            <button
              onClick={onFindEditor}
              className="w-full py-2.5 rounded-full border border-slate-900/[0.12] dark:border-white/[0.15] bg-[#F8FAFC] hover:bg-[#F27D26] hover:text-white dark:bg-[#1A1A1F] dark:hover:bg-[#F97316] dark:hover:text-white text-[#0F172A] dark:text-[#F8FAFC] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            >
              Inquire Full-Time Match
            </button>
          </div>

          {/* Option B: Freelance Projects */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
              <Zap className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
              Freelance & Project-Based
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-display">
              On-Demand Project Sprints
            </h3>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-6 leading-relaxed">
              Ideal for commercial campaigns, product launch hero videos, one-off podcast seasons, and seasonal spikes in post-production.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-[#F8FAFC] mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Turnkey fixed milestones or hourly billing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Immediate kickoff (often within 48-72 hours)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Specialized experts for 3D motion, color or doc</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Scale capacity up or down with zero payroll lock-in</span>
              </li>
            </ul>
            <button
              onClick={onFindEditor}
              className="w-full py-2.5 rounded-full border border-slate-900/[0.12] dark:border-white/[0.15] bg-[#F8FAFC] hover:bg-[#F27D26] hover:text-white dark:bg-[#1A1A1F] dark:hover:bg-[#F97316] dark:hover:text-white text-[#0F172A] dark:text-[#F8FAFC] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            >
              Inquire Project Match
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
