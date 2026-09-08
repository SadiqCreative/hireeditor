import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Play, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { EDITORS_DATA } from '../data/editors';
import { Editor } from '../types';

interface BrowseEditorsProps {
  onSelectEditor: (editorId: string) => void;
  onOpenShowreel: (editorId: string) => void;
}

const CATEGORIES = [
  'All',
  'Commercial & Ads',
  'SaaS & Tech',
  'YouTube & Creators',
  'Motion & VFX',
  'Brand Films',
  'Documentary',
  'Short-form & TikTok'
];

export const BrowseEditors: React.FC<BrowseEditorsProps> = ({
  onSelectEditor,
  onOpenShowreel
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEditors = EDITORS_DATA.filter((editor) => {
    const matchesCategory =
      activeCategory === 'All' || editor.categories.includes(activeCategory);
    const matchesSearch =
      searchQuery === '' ||
      editor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      editor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      editor.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      editor.notableClients.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="browse" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
              Curated Talent Roster
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-display">
              Browse Vetted Editors
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] max-w-xl">
              Every editor in our roster is evaluated for narrative structure, pacing rhythm, technical discipline, and verified client history.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tool, client or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] text-xs placeholder:text-[#64748B] focus:outline-none focus:border-[#F27D26] dark:focus:border-[#F97316] transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                activeCategory === category
                  ? 'bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] border-[#F27D26] dark:border-[#F97316] shadow-xs'
                  : 'bg-[#F8FAFC] dark:bg-[#151518] text-[#64748B] dark:text-[#94A3B8] border-slate-900/[0.08] dark:border-white/[0.1] hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEditors.map((editor) => (
            <div
              key={editor.id}
              className="group rounded-2xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] p-6 shadow-xs flex flex-col justify-between transition-all hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 hover:shadow-md"
            >
              <div>
                {/* Card Header: Avatar, Name, Location & Availability */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={editor.avatar}
                      alt={editor.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-900/[0.08] dark:border-white/[0.1] shadow-xs"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#151518]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] truncate">
                        {editor.name}
                      </h3>
                      <span className="font-mono text-xs font-semibold text-[#64748B] dark:text-[#94A3B8]">
                        {editor.experienceYears}y exp
                      </span>
                    </div>

                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-medium truncate">
                      {editor.title}
                    </p>

                    <div className="flex items-center gap-3 mt-1.5 text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{editor.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F27D26]/10 dark:bg-[#F97316]/15 text-[#F27D26] dark:text-[#F97316] text-[11px] font-semibold mb-3.5">
                  <Clock className="w-3 h-3" />
                  <span>{editor.availability}</span>
                  <span className="opacity-60">•</span>
                  <span>{editor.availabilityType}</span>
                </div>

                {/* Short Professional Description */}
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
                  {editor.shortDescription}
                </p>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {editor.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.06] dark:border-white/[0.08] text-[#0F172A] dark:text-[#F8FAFC] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {editor.tools.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white dark:bg-[#1A1A1F] border border-slate-900/[0.06] dark:border-white/[0.08] text-[#64748B] dark:text-[#94A3B8]">
                      +{editor.tools.length - 3}
                    </span>
                  )}
                </div>

                {/* Notable Clients Footprint */}
                <div className="pt-3 border-t border-slate-900/[0.06] dark:border-white/[0.08] text-[11px] text-[#64748B] dark:text-[#94A3B8] mb-5 flex items-center justify-between">
                  <span className="font-medium text-[#64748B] dark:text-[#94A3B8]">Past clients:</span>
                  <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] truncate max-w-[180px]">
                    {editor.notableClients.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => onOpenShowreel(editor.id)}
                  className="py-2.5 px-3 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#1A1A1F] hover:border-[#F27D26]/40 text-[#0F172A] dark:text-[#F8FAFC] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#F27D26] dark:text-[#F97316]" />
                  <span>Showreel</span>
                </button>

                <button
                  onClick={() => onSelectEditor(editor.id)}
                  className="py-2.5 px-3 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEditors.length === 0 && (
          <div className="text-center py-16 p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800">
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              No editors matching "{searchQuery}". Try searching for Premiere Pro, After Effects, or another niche.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
