import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, Video, Layers, Wand2 } from 'lucide-react';
import { CLIENT_TYPES, EDITORS_DATA } from '../data/editors';

interface HeroVisualProps {
  onSelectEditor?: (editorId: string) => void;
  onOpenMatchModal?: (presetClient?: string) => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onSelectEditor, onOpenMatchModal }) => {
  const [selectedClientId, setSelectedClientId] = useState<string>('startups');
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);

  // Auto-cycle gently if user hasn't interacted recently
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedClientId((prev) => {
        const currentIndex = CLIENT_TYPES.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % CLIENT_TYPES.length;
        return CLIENT_TYPES[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const selectedClient = CLIENT_TYPES.find((c) => c.id === selectedClientId) || CLIENT_TYPES[0];
  const matchedEditors = EDITORS_DATA.filter((e) => selectedClient.matchedEditorIds.includes(e.id));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-4 pb-2">
      {/* Visual Canvas Container */}
      <div 
        id="hero-matching-engine"
        className="relative rounded-2xl md:rounded-3xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#FAFAFC] dark:bg-[#111115] shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
      >
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Ambient Top Accent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-[#F27D26]/10 dark:bg-[#F97316]/10 blur-3xl rounded-full pointer-events-none" />

        {/* Matching status indicator pill */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27D26] dark:bg-[#F97316]"></span>
            </span>
            <span className="font-semibold">Precision Talent Matching Engine</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[#64748B] dark:text-[#94A3B8]">Live Simulation</span>
          </div>
        </div>

        {/* Desktop & Tablet Tri-Node Matching Diagram */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Subtle SVG connector lines between columns (visible on desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1024 400" preserveAspectRatio="none">
              {/* Left connections to center */}
              <path
                d="M 280 80 C 420 80, 440 200, 512 200"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash"
              />
              <path
                d="M 280 200 C 420 200, 440 200, 512 200"
                fill="none"
                stroke="#F27D26"
                strokeWidth="1.75"
                strokeOpacity="0.45"
              />
              <path
                d="M 280 320 C 420 320, 440 200, 512 200"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash"
              />

              {/* Right connections from center */}
              <path
                d="M 744 80 C 600 80, 584 200, 512 200"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash"
              />
              <path
                d="M 744 200 C 600 200, 584 200, 512 200"
                fill="none"
                stroke="#F27D26"
                strokeWidth="1.75"
                strokeOpacity="0.45"
              />
              <path
                d="M 744 320 C 600 320, 584 200, 512 200"
                fill="none"
                stroke="var(--line-color)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash"
              />
            </svg>
          </div>

          {/* LEFT: Client Column */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 relative z-10">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#64748B] dark:text-[#94A3B8]">
                1. Select Client Type
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] hidden sm:inline">
                Click to preview match
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
              {CLIENT_TYPES.map((client) => {
                const isSelected = client.id === selectedClientId;
                return (
                  <button
                    key={client.id}
                    onClick={() => setSelectedClientId(client.id)}
                    className={`group relative text-left p-3.5 rounded-xl transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] border-[#F27D26] dark:border-[#F97316] shadow-sm ring-1 ring-[#F27D26]/50'
                        : 'bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] border-slate-900/[0.08] dark:border-white/[0.1] hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 hover:bg-white dark:hover:bg-[#1A1A1F]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-tight">{client.name}</span>
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          isSelected
                            ? 'bg-[#F27D26] dark:bg-[#F97316] scale-125'
                            : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-[11px] mt-1 line-clamp-1 transition-colors ${
                        isSelected
                          ? 'text-slate-300 dark:text-slate-600'
                          : 'text-[#64748B] dark:text-[#94A3B8]'
                      }`}
                    >
                      {client.typicalNeed}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CENTER: Editors on Demand Core Hub (Artistic Flair signature circular center-node) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center my-4 lg:my-0 relative z-20">
            
            {/* Signature Artistic Circular Node */}
            <div className="relative group cursor-pointer" onClick={() => onOpenMatchModal?.(selectedClient.name)}>
              {/* Outer dashed orbit circle */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-[#F27D26]/50 dark:border-[#F97316]/50 pointer-events-none animate-artistic-pulse" />
              
              {/* Center circular core */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#F27D26] dark:bg-[#F97316] flex flex-col items-center justify-center text-center text-white font-bold p-3 shadow-[0_0_40px_rgba(242,125,38,0.35)] dark:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-transform group-hover:scale-105 duration-200">
                <Video className="w-6 h-6 stroke-[2.2] mb-1 drop-shadow-xs" />
                <div className="leading-tight text-xs sm:text-sm font-extrabold tracking-tight">
                  Editors on Demand
                </div>
                <div className="text-[9px] uppercase tracking-widest font-semibold opacity-90 mt-1 px-2 py-0.5 rounded-full bg-white/20">
                  The Hub
                </div>
              </div>
            </div>

            {/* Dynamic matching specs card */}
            <div className="mt-5 w-full max-w-[280px] p-3.5 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] shadow-xs text-left text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">Target Match:</span>
                <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">{selectedClient.name}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">Vetting Standard:</span>
                <span className="font-mono text-[10px] text-[#F27D26] dark:text-[#F97316] font-bold">Top 2% Certified</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#64748B] dark:text-[#94A3B8]">Match Speed:</span>
                <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">&lt; 48 Hours</span>
              </div>

              {/* Action trigger button */}
              <button
                onClick={() => onOpenMatchModal?.(selectedClient.name)}
                className="mt-2 w-full py-2 px-3 rounded-full text-xs font-semibold bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white transition-all flex items-center justify-center gap-1.5 group cursor-pointer shadow-xs"
              >
                <span>Find Match for {selectedClient.name}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Professional Video Editors Column */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 relative z-10">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#64748B] dark:text-[#94A3B8]">
                2. Matched Talent
              </span>
              <span className="text-[11px] font-semibold text-[#F27D26] dark:text-[#F97316] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Vetted & Ready
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedClientId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-2.5"
                >
                  {matchedEditors.map((editor) => (
                    <div
                      key={editor.id}
                      className="group p-3.5 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 shadow-xs transition-all flex items-center gap-3.5"
                    >
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <img
                          src={editor.avatar}
                          alt={editor.name}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-900/[0.08] dark:border-white/[0.1]"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-[#151518] rounded-full" />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                            {editor.name}
                          </h4>
                          <span className="text-[11px] font-mono font-semibold text-[#64748B] dark:text-[#94A3B8]">
                            {editor.experienceYears}y exp
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] truncate">
                          {editor.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                          {editor.categories.slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.06] dark:border-white/[0.08] text-[#0F172A] dark:text-[#F8FAFC] font-medium"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        onClick={() => onSelectEditor?.(editor.id)}
                        className="shrink-0 p-2 rounded-lg text-[#64748B] hover:text-[#F27D26] dark:hover:text-[#F97316] hover:bg-white dark:hover:bg-[#1A1A1F] transition-colors cursor-pointer"
                        title="View profile"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom micro-summary within visual card */}
        <div className="mt-8 pt-4 border-t border-slate-900/[0.08] dark:border-white/[0.1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26] dark:bg-[#F97316]"></span>
            <span>Zero bidding wars • 100% human-vetted portfolio reviews • 14-day trial guarantee</span>
          </div>
          <div className="font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
            Network Status: 450+ editors active
          </div>
        </div>
      </div>
    </div>
  );
};
