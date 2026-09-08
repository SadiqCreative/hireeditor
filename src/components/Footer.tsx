import React from 'react';
import { Video, ArrowUpRight, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenMatchModal: () => void;
  onOpenJoinNetworkModal: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenMatchModal,
  onOpenJoinNetworkModal,
  onContactClick
}) => {
  return (
    <footer className="border-t border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#070709] text-[#0F172A] dark:text-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F27D26] dark:text-[#F97316] flex items-center justify-center shadow-xs">
                <Video className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Editors on Demand
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-sm leading-relaxed">
              The premier video editor talent matching service. You need an editor. We find the right one. Connecting brands, creators, and agencies with vetted post-production masters.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Matching Engine Online • 48h Turnaround</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
              <li>
                <button
                  onClick={onOpenMatchModal}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  Find an Editor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('browse')}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  Browse Editors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-editors')}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  For Editors
                </button>
              </li>
            </ul>
          </div>

          {/* Talent Network Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
              Talent
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
              <li>
                <button
                  onClick={onOpenJoinNetworkModal}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Join the Network</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-editors')}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  Vetting Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('browse')}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  Showreel Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#F27D26] dark:hover:text-[#F97316] transition-colors cursor-pointer text-left"
                >
                  Contact Matching Team
                </button>
              </li>
              <li>
                <span className="text-[#64748B] dark:text-[#94A3B8] text-xs">
                  hello@editorsondemand.com
                </span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1 text-[11px] text-[#64748B] dark:text-[#94A3B8] bg-white dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1] px-2.5 py-1 rounded-full shadow-2xs">
                  <Shield className="w-3 h-3 text-[#F27D26] dark:text-[#F97316]" />
                  Enterprise NDA Standard
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} Editors on Demand. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="cursor-default hover:text-[#0F172A] dark:hover:text-[#F8FAFC]">Privacy Policy</span>
            <span className="cursor-default hover:text-[#0F172A] dark:hover:text-[#F8FAFC]">Terms of Service</span>
            <span className="cursor-default hover:text-[#0F172A] dark:hover:text-[#F8FAFC]">Talent Code of Ethics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
