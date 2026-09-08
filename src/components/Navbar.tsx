import React, { useState, useEffect } from 'react';
import { Sun, Moon, Video, Menu, X, ArrowRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenMatchModal: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onNavigate,
  onOpenMatchModal,
  activeSection = 'hero'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0A0A0B]/90 backdrop-blur-md border-b border-slate-900/[0.08] dark:border-white/[0.1] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] group-hover:bg-[#F27D26] dark:group-hover:bg-[#F97316] dark:group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
            <Video className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#0F172A] dark:text-[#F8FAFC] block leading-none">
              Editors on Demand
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#64748B] dark:text-[#94A3B8] font-medium">
              Talent Network
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 font-medium text-sm">
          <button
            onClick={() => handleNavClick('browse')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeSection === 'browse'
                ? 'text-[#0F172A] dark:text-[#F8FAFC] bg-[#F8FAFC] dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#151518]'
            }`}
          >
            Browse Editors
          </button>

          <button
            onClick={() => handleNavClick('how-it-works')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeSection === 'how-it-works'
                ? 'text-[#0F172A] dark:text-[#F8FAFC] bg-[#F8FAFC] dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#151518]'
            }`}
          >
            How It Works
          </button>

          <button
            onClick={() => handleNavClick('for-editors')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeSection === 'for-editors'
                ? 'text-[#0F172A] dark:text-[#F8FAFC] bg-[#F8FAFC] dark:bg-[#151518] border border-slate-900/[0.08] dark:border-white/[0.1]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#151518]'
            }`}
          >
            For Editors
          </button>
        </nav>

        {/* Right Actions: Theme Toggle + Primary CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button (styled as .toggle-btn) */}
          <button
            id="theme-toggle-button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC] text-xs font-medium hover:border-[#F27D26]/40 dark:hover:border-[#F97316]/40 transition-colors cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="hidden sm:inline text-[11px]">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#F27D26]" />
                <span className="hidden sm:inline text-[11px]">Dark</span>
              </>
            )}
          </button>

          {/* Primary CTA (Capsule Pill CTA from Artistic Flair) */}
          <button
            id="nav-primary-cta"
            onClick={onOpenMatchModal}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] dark:hover:text-white text-xs font-semibold transition-all shadow-xs group cursor-pointer"
          >
            <span>Find an Editor</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-900/[0.08] dark:border-white/[0.1] bg-[#F8FAFC] dark:bg-[#151518] text-[#0F172A] dark:text-[#F8FAFC]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-900/[0.08] dark:border-white/[0.1] bg-white/95 dark:bg-[#151518]/95 backdrop-blur-lg px-4 py-4 space-y-2">
          <button
            onClick={() => handleNavClick('browse')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#1A1A1F]"
          >
            Browse Editors
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#1A1A1F]"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('for-editors')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#1A1A1F]"
          >
            For Editors
          </button>
          <div className="pt-2 border-t border-slate-900/[0.08] dark:border-white/[0.1]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMatchModal();
              }}
              className="w-full py-3 rounded-full bg-[#0F172A] hover:bg-[#F27D26] text-white dark:bg-[#F8FAFC] dark:hover:bg-[#F97316] dark:text-[#0A0A0B] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Find an Editor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
