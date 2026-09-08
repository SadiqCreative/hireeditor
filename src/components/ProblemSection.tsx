import React from 'react';
import { Users, FileQuestion, Sliders, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { PROBLEM_POINTS } from '../data/editors';

interface ProblemSectionProps {
  onExploreSolution: () => void;
}

const iconsMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5 text-[#F27D26] dark:text-[#F97316]" />,
  FileQuestion: <FileQuestion className="w-5 h-5 text-amber-500" />,
  Sliders: <Sliders className="w-5 h-5 text-blue-500" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-[#F27D26] dark:text-[#F97316]" />,
  Clock: <Clock className="w-5 h-5 text-purple-500" />
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onExploreSolution }) => {
  return (
    <section id="problem" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
            The Hiring Bottleneck
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight font-display">
            Finding a good editor is easy.{' '}
            <span className="text-[#64748B] dark:text-[#94A3B8] block sm:inline font-normal">
              Finding the right one isn’t.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl">
            Anyone can buy video software. But finding an editor who intuitively commands your brand voice, respects deadlines, and masters your genre shouldn't take a month of trial-and-error.
          </p>
        </div>

        {/* 5 Problem Points in a Refined Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEM_POINTS.map((problem, index) => (
            <div
              key={index}
              className={`p-6 sm:p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 hover:shadow-xs flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.08] dark:border-white/[0.1] flex items-center justify-center mb-5">
                  {iconsMap[problem.icon] || <AlertTriangle className="w-5 h-5 text-[#F27D26]" />}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2.5">
                  {problem.title}
                </h3>

                <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {problem.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8]">
                <span>Pain Point 0{index + 1}</span>
                <span className="text-[#F27D26] dark:text-[#F97316] font-mono text-[11px] font-semibold">
                  High Risk
                </span>
              </div>
            </div>
          ))}

          {/* Quick Bridge Card to Solution */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#0F172A] text-white dark:bg-[#151518] flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#F27D26] dark:text-[#F97316] font-semibold mb-4">
                The Alternative
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Skip the noise. Get matched in 48 hours.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 leading-relaxed">
                We handle sourcing, vetting, and test project validation so you only interview top-tier talent ready to start.
              </p>
            </div>

            <button
              onClick={onExploreSolution}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white bg-[#F27D26] hover:bg-[#D96916] dark:bg-[#F97316] dark:hover:bg-[#EA580C] py-2.5 px-5 rounded-full transition-colors cursor-pointer w-fit shadow-xs"
            >
              <span>See How We Fix This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
