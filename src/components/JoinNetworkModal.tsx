import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Video, ShieldCheck } from 'lucide-react';

interface JoinNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinNetworkModal: React.FC<JoinNetworkModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showreelUrl, setShowreelUrl] = useState('');
  const [experience, setExperience] = useState('5-8 years');
  const [primaryTools, setPrimaryTools] = useState<string[]>(['Premiere Pro', 'After Effects']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTool = (tool: string) => {
    if (primaryTools.includes(tool)) {
      setPrimaryTools(primaryTools.filter((t) => t !== tool));
    } else {
      setPrimaryTools([...primaryTools, tool]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const allTools = [
    'Premiere Pro',
    'DaVinci Resolve Studio',
    'After Effects',
    'Cinema 4D',
    'Blender',
    'CapCut Desktop'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E1015] text-neutral-900 dark:text-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-900/[0.08] dark:border-white/[0.1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center">
              <Video className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              Join the Talent Network
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1 text-[#0F172A] dark:text-[#F8FAFC] font-display">
                Apply to Editors on Demand
              </h3>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                We accept the top 3% of post-production specialists. All applicants undergo portfolio credit verification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1 text-[#0F172A] dark:text-[#F8FAFC]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Cole"
                  className="w-full p-2.5 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#F27D26]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-[#0F172A] dark:text-[#F8FAFC]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@editor.pro"
                  className="w-full p-2.5 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#F27D26]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-[#0F172A] dark:text-[#F8FAFC]">
                Link to Showreel or Portfolio * (Vimeo, YouTube, Google Drive or Site)
              </label>
              <input
                type="url"
                required
                value={showreelUrl}
                onChange={(e) => setShowreelUrl(e.target.value)}
                placeholder="https://vimeo.com/..."
                className="w-full p-2.5 rounded-xl border border-slate-900/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#151518] text-xs text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#F27D26]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5 text-[#0F172A] dark:text-[#F8FAFC]">
                Primary Editing & Motion Software
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allTools.map((tool) => {
                  const active = primaryTools.includes(tool);
                  return (
                    <button
                      type="button"
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                        active
                          ? 'border-[#F27D26] bg-[#F27D26] text-white dark:border-[#F97316] dark:bg-[#F97316] font-semibold'
                          : 'border-slate-900/[0.08] dark:border-white/[0.1] text-[#64748B] dark:text-[#94A3B8] bg-[#F8FAFC] dark:bg-[#151518]'
                      }`}
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1] text-[11px] text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F27D26] dark:text-[#F97316] shrink-0" />
              <span>No fees to join. High-value client matches. Guaranteed bi-weekly payout.</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold tracking-tight font-display text-[#0F172A] dark:text-[#F8FAFC]">
              Application Submitted
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-sm mx-auto">
              Thank you, {name}. Our creative evaluation directors will review your showreel and get in touch within 3 business days.
            </p>
            <div className="pt-3">
              <button
                onClick={handleClose}
                className="px-7 py-2.5 rounded-full bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0A0A0B] text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
