import React, { useState } from 'react';
import { CheckCircle2, Search, SlidersHorizontal, Sparkles, ArrowRight, Video } from 'lucide-react';
import { SOLUTION_STEPS } from '../data/editors';

interface SolutionSectionProps {
  onStartMatching: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onStartMatching }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solution" className="py-20 md:py-28 border-t border-slate-900/[0.08] dark:border-white/[0.1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
            Curated Matching Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-display">
            We do the searching for you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            No endless job boards. No sorting 500 low-effort pitches. We curate and match you directly with proven editors who fit your specific project DNA.
          </p>
        </div>

        {/* Clean Visual Flow (Linear Step Timeline with Interactive Focus) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Spine Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-slate-900/[0.08] dark:border-white/[0.1] z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {SOLUTION_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] border-[#F27D26] dark:border-[#F97316] shadow-md ring-1 ring-[#F27D26]/40'
                      : 'bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] border-slate-900/[0.08] dark:border-white/[0.1] hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40'
                  }`}
                >
                  <div>
                    {/* Step indicator header */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-white/20 text-white dark:bg-black/10 dark:text-[#0A0A0B]'
                            : 'bg-white dark:bg-[#1A1A1F] text-[#64748B] dark:text-[#94A3B8] border border-slate-900/[0.06] dark:border-white/[0.08]'
                        }`}
                      >
                        {step.step}
                      </span>
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-transform ${
                          isSelected
                            ? 'bg-[#F27D26] dark:bg-[#F97316] scale-125'
                            : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    </div>

                    <h3 className="font-bold text-sm sm:text-base leading-snug mb-2 tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mt-2 ${
                      isSelected
                        ? 'text-slate-300 dark:text-slate-600'
                        : 'text-[#64748B] dark:text-[#94A3B8]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Flow Detail Preview Panel */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] dark:bg-white text-[#F27D26] dark:text-[#F97316] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                  Step {SOLUTION_STEPS[activeStep].step} Focus
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mt-0.5">
                  {SOLUTION_STEPS[activeStep].title}
                </h4>
                <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mt-1 max-w-xl leading-relaxed">
                  {SOLUTION_STEPS[activeStep].description}
                </p>
              </div>
            </div>

            <button
              onClick={onStartMatching}
              className="shrink-0 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Start Your Matching Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
