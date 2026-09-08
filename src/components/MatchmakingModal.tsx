import React, { useState } from 'react';
import { X, Check, ArrowRight, Video, Sparkles, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import { ClientCategory, Editor } from '../types';
import { EDITORS_DATA } from '../data/editors';

interface MatchmakingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetClient?: string;
  presetEditor?: Editor | null;
}

const CLIENT_OPTIONS: ClientCategory[] = [
  'Startups',
  'Agencies',
  'Creators',
  'Brands',
  'Businesses',
  'Podcasts'
];

const GENRE_OPTIONS = [
  'Commercials & Paid Ads',
  'YouTube Long-Form',
  'SaaS Product Walkthroughs',
  '3D Motion & Visual Effects',
  'Short-Form TikTok / Reels',
  'Documentary & Founder Story'
];

export const MatchmakingModal: React.FC<MatchmakingModalProps> = ({
  isOpen,
  onClose,
  presetClient,
  presetEditor
}) => {
  const [step, setStep] = useState<number>(1);
  const [clientType, setClientType] = useState<string>(presetClient || 'Startups');
  const [selectedGenre, setSelectedGenre] = useState<string>('SaaS Product Walkthroughs');
  const [commitment, setCommitment] = useState<'Dedicated Full-Time' | 'Freelance / Project' | 'Ongoing Part-Time'>('Dedicated Full-Time');
  const [budget, setBudget] = useState<string>('$4,000 - $8,000 / mo');
  const [description, setDescription] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E1015] text-neutral-900 dark:text-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-900/[0.08] dark:border-white/[0.1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center">
              <Video className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Editors on Demand • Matching Intake
            </span>
          </div>

          <button
            onClick={resetForm}
            className="p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                Step 0{step} of 03
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i <= step
                        ? 'w-7 bg-[#F27D26] dark:bg-[#F97316]'
                        : 'w-3 bg-slate-200 dark:bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {presetEditor && (
              <div className="p-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center gap-3">
                <img
                  src={presetEditor.avatar}
                  alt={presetEditor.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div className="text-xs">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    Direct Request for {presetEditor.name}
                  </span>
                  <p className="text-emerald-700 dark:text-emerald-400">
                    Your brief will be prioritized directly with {presetEditor.name.split(' ')[0]}'s schedule.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 1: Company Profile & Video Genre */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 text-[#0F172A] dark:text-[#F8FAFC] font-display">
                    What best describes your organization?
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                    We match based on verified experience in your specific industry.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {CLIENT_OPTIONS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setClientType(c)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                        clientType === c
                          ? 'border-[#F27D26] dark:border-[#F97316] bg-[#F27D26] dark:bg-[#F97316] text-white shadow-xs'
                          : 'border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#F27D26]/40'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                    Primary Video Style Needed
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {GENRE_OPTIONS.map((genre) => (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => setSelectedGenre(genre)}
                        className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                          selectedGenre === genre
                            ? 'border-[#F27D26] dark:border-[#F97316] bg-[#F27D26]/10 text-[#F27D26] dark:text-[#F97316] font-semibold'
                            : 'border-slate-900/[0.08] dark:border-white/[0.1] text-[#64748B] dark:text-[#94A3B8] hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Engagement Model & Timeline */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    What capacity are you looking for?
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    We accommodate dedicated hires or single project milestones.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Dedicated Full-Time', 'Freelance / Project', 'Ongoing Part-Time'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCommitment(c)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        commitment === c
                          ? 'border-[#F27D26] dark:border-[#F97316] bg-[#F27D26] dark:bg-[#F97316] text-white shadow-xs'
                          : 'border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{c}</span>
                      <span className="block text-[10px] mt-1 opacity-80">
                        {c === 'Dedicated Full-Time' ? '40 hrs/wk embedded' : c === 'Freelance / Project' ? 'Fixed milestone sprint' : '15-20 hrs/wk flexible'}
                      </span>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#F27D26]"
                  >
                    <option value="$2,000 - $4,000 / mo">$2,000 - $4,000 / project or month</option>
                    <option value="$4,000 - $8,000 / mo">$4,000 - $8,000 / project or month (Recommended)</option>
                    <option value="$8,000+ / mo">$8,000+ / month (Enterprise & Senior Lead)</option>
                    <option value="Hourly Billing ($80 - $140/hr)">Hourly Milestone Billing ($80 - $140/hr)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Brief & Contact Details */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 text-[#0F172A] dark:text-[#F8FAFC] font-display">
                    Tell us what you need.
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                    Our post-production directors will review your requirements and send a curated match dossier.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
                    Brief description or link to reference videos
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="E.g., We need a senior editor to cut 4 high-converting product videos and 12 short-form ads per month. Pacing like Linear/Apple..."
                    className="w-full p-3 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-[#F27D26]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full p-3 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Studio"
                      className="w-full p-3 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#64748B]/60 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1] text-[11px] text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F27D26] dark:text-[#F97316] shrink-0" />
                  <span>Strict NDA guarantee. We never share your project materials or unreleased assets.</span>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-900/[0.08] dark:border-white/[0.1] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] cursor-pointer"
                >
                  Back
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-3 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{step === 3 ? 'Submit & Match Me' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Requirement Received
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              Our post-production directors are now evaluating suitable editors from our talent network for <span className="font-semibold text-neutral-900 dark:text-white">{company || clientType}</span>.
            </p>

            <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-left max-w-md mx-auto text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-400">Target Match:</span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">{clientType} • {selectedGenre}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Turnaround:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">&lt; 48 Hours Guaranteed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Follow-up:</span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">{email || 'Via direct email'}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
