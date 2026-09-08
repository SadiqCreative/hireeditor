import React from 'react';
import { X, MapPin, CheckCircle2, Clock, Play, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Editor } from '../types';

interface EditorProfileModalProps {
  editor: Editor | null;
  onClose: () => void;
  onHireEditor: (editor: Editor) => void;
  onOpenShowreel: (editorId: string) => void;
}

export const EditorProfileModal: React.FC<EditorProfileModalProps> = ({
  editor,
  onClose,
  onHireEditor,
  onOpenShowreel,
}) => {
  if (!editor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E1015] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 border-b border-slate-900/[0.08] dark:border-white/[0.1] bg-white/95 dark:bg-[#0E1015]/95 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
              Editor Talent Dossier
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Senior Talent
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
          
          {/* Top Profile Summary */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between pb-8 border-b border-slate-900/[0.08] dark:border-white/[0.1]">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="relative shrink-0">
                <img
                  src={editor.avatar}
                  alt={editor.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-slate-900/[0.08] dark:border-white/[0.1] shadow-xs"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0E1015]" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight font-display">
                    {editor.name}
                  </h2>
                  <div className="flex items-center text-amber-500 text-xs font-semibold gap-1 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{editor.rating}</span>
                  </div>
                </div>

                <p className="text-base font-medium text-[#64748B] dark:text-[#94A3B8]">
                  {editor.title}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {editor.location}
                  </span>
                  <span>•</span>
                  <span>{editor.experienceYears} Years Commercial Experience</span>
                  <span>•</span>
                  <span>{editor.completedProjects} Projects Delivered</span>
                </div>

                {/* Availability Pill */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Status: {editor.availability}</span>
                  <span>({editor.availabilityType})</span>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex sm:flex-col gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={() => onHireEditor(editor)}
                className="flex-1 md:w-48 py-3 px-5 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hire this Editor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenShowreel(editor.id)}
                className="flex-1 md:w-48 py-3 px-5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] hover:border-[#F27D26]/40 hover:text-[#F27D26] dark:hover:text-[#F97316] text-[#0F172A] dark:text-[#F8FAFC] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Showreel</span>
              </button>
            </div>
          </div>

          {/* Professional Introduction */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
              Professional Introduction
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {editor.fullBio}
            </p>
          </div>

          {/* Tools & Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
                Core Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {editor.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3.5 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] text-xs font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
                Technical Software Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {editor.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A1A1F] text-[#64748B] dark:text-[#94A3B8] text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Experience / Notable Clients */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
              Notable Brand & Creator Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {editor.notableClients.map((client) => (
                <div
                  key={client}
                  className="px-3.5 py-1.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] text-xs font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] dark:text-[#F97316]" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Work / Portfolio */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                Selected Portfolio Projects
              </h3>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {editor.portfolio.length} Featured Pieces
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editor.portfolio.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] overflow-hidden bg-[#F8FAFC] dark:bg-[#151518] hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 transition-all flex flex-col shadow-xs"
                >
                  {/* Thumbnail with overlay */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <button
                      onClick={() => onOpenShowreel(editor.id)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#F27D26] hover:bg-[#D96916] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </button>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-semibold drop-shadow-sm">{item.category}</span>
                      <span className="font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-xs">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Project metadata */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A] dark:text-[#F8FAFC] mb-1 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mb-2">
                        {item.client}
                      </p>
                      <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.impact && (
                      <div className="mt-3 pt-2.5 border-t border-slate-900/[0.08] dark:border-white/[0.08] text-[11px] font-medium text-[#F27D26] dark:text-[#F97316] flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.impact}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Guidance Box */}
          <div className="p-5 rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                Estimated Rates for {editor.name}
              </div>
              <div className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                Hourly: {editor.hourlyRateEstimate || '$95/hr'} • Full-Time: {editor.monthlyRateEstimate || '$6,500/mo'}
              </div>
            </div>

            <button
              onClick={() => onHireEditor(editor)}
              className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
            >
              Request Match with {editor.name.split(' ')[0]}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
