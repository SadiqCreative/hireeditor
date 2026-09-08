import React, { useState, useEffect } from 'react';
import { ThemeMode, Editor } from './types';
import { EDITORS_DATA } from './data/editors';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustProof } from './components/TrustProof';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { BrowseEditors } from './components/BrowseEditors';
import { EditorProfileModal } from './components/EditorProfileModal';
import { ShowreelModal } from './components/ShowreelModal';
import { ForEditors } from './components/ForEditors';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MatchmakingModal } from './components/MatchmakingModal';
import { JoinNetworkModal } from './components/JoinNetworkModal';

export default function App() {
  // Theme state: initialized to light theme by default as specified, supports instant toggle
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('eod_theme') as ThemeMode | null;
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Modal & View States
  const [isMatchModalOpen, setIsMatchModalOpen] = useState<boolean>(false);
  const [isJoinNetworkModalOpen, setIsJoinNetworkModalOpen] = useState<boolean>(false);
  const [selectedEditorForProfile, setSelectedEditorForProfile] = useState<Editor | null>(null);
  const [selectedEditorForShowreel, setSelectedEditorForShowreel] = useState<Editor | null>(null);
  const [presetClientCategory, setPresetClientCategory] = useState<string>('');
  const [presetEditorForMatch, setPresetEditorForMatch] = useState<Editor | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Synchronize HTML dark class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('eod_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMatchModal = (presetClient?: string, presetEditor?: Editor | null) => {
    setPresetClientCategory(presetClient || '');
    setPresetEditorForMatch(presetEditor || null);
    setIsMatchModalOpen(true);
  };

  const handleSelectEditorById = (editorId: string) => {
    const found = EDITORS_DATA.find((e) => e.id === editorId);
    if (found) {
      setSelectedEditorForProfile(found);
    }
  };

  const handleOpenShowreelById = (editorId: string) => {
    const found = EDITORS_DATA.find((e) => e.id === editorId);
    if (found) {
      setSelectedEditorForProfile(null);
      setSelectedEditorForShowreel(found);
    }
  };

  const handleHireFromProfileOrShowreel = (editor: Editor) => {
    setSelectedEditorForProfile(null);
    setSelectedEditorForShowreel(null);
    handleOpenMatchModal('', editor);
  };

  return (
    <div id="app-root" className="min-h-screen bg-white dark:bg-[#0A0A0B] text-[#0F172A] dark:text-[#F8FAFC] font-sans transition-colors duration-300 selection:bg-[#F27D26] selection:text-white dark:selection:bg-[#F97316] dark:selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={scrollToSection}
        onOpenMatchModal={() => handleOpenMatchModal()}
        activeSection={activeSection}
      />

      <main>
        {/* 2. HERO (Visual first as primary focal point, headline and text below) */}
        <Hero
          onFindEditor={() => handleOpenMatchModal()}
          onBrowseEditors={() => scrollToSection('browse')}
          onSelectEditor={handleSelectEditorById}
        />

        {/* 3. TRUST / SOCIAL PROOF */}
        <TrustProof />

        {/* 4. PROBLEM SECTION */}
        <ProblemSection
          onExploreSolution={() => scrollToSection('solution')}
        />

        {/* 5. SOLUTION SECTION */}
        <SolutionSection
          onStartMatching={() => handleOpenMatchModal()}
        />

        {/* 6. HOW IT WORKS */}
        <HowItWorks
          onFindEditor={() => handleOpenMatchModal()}
        />

        {/* 7. BROWSE EDITORS */}
        <BrowseEditors
          onSelectEditor={handleSelectEditorById}
          onOpenShowreel={handleOpenShowreelById}
        />

        {/* 10. FOR EDITORS */}
        <ForEditors
          onJoinNetwork={() => setIsJoinNetworkModalOpen(true)}
        />

        {/* 11. FINAL CTA */}
        <FinalCTA
          onFindEditor={() => handleOpenMatchModal()}
        />
      </main>

      {/* 12. FOOTER */}
      <Footer
        onNavigate={scrollToSection}
        onOpenMatchModal={() => handleOpenMatchModal()}
        onOpenJoinNetworkModal={() => setIsJoinNetworkModalOpen(true)}
        onContactClick={() => handleOpenMatchModal()}
      />

      {/* 8. EDITOR PROFILE (Dedicated Individual Profile Page/View) */}
      <EditorProfileModal
        editor={selectedEditorForProfile}
        onClose={() => setSelectedEditorForProfile(null)}
        onHireEditor={handleHireFromProfileOrShowreel}
        onOpenShowreel={handleOpenShowreelById}
      />

      {/* 9. EDITOR SHOWREEL PAGE (Dedicated Cinematic Showreel Page) */}
      <ShowreelModal
        editor={selectedEditorForShowreel}
        onClose={() => setSelectedEditorForShowreel(null)}
        onRequestEditor={handleHireFromProfileOrShowreel}
      />

      {/* Matching Intake Workflow Modal */}
      <MatchmakingModal
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
        presetClient={presetClientCategory}
        presetEditor={presetEditorForMatch}
      />

      {/* Editor Network Application Modal */}
      <JoinNetworkModal
        isOpen={isJoinNetworkModalOpen}
        onClose={() => setIsJoinNetworkModalOpen(false)}
      />
    </div>
  );
}
