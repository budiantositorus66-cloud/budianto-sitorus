/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { ExplorerSection } from './components/ExplorerSection';
import { ProcessSimulator } from './components/ProcessSimulator';
import { QuizSection } from './components/QuizSection';
import { PromptStudioSection } from './components/PromptStudioSection';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <TopNav onOpenPromptStudio={() => scrollToSection('prompt-guru')} />

      <main className="flex-1">
        <HeroSection
          onStartExplore={() => scrollToSection('eksplorasi')}
          onJumpToPrompt={() => scrollToSection('prompt-guru')}
        />
        <ExplorerSection />
        <ProcessSimulator />
        <QuizSection />
        <PromptStudioSection />
      </main>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Informatika SD — Media Pembelajaran Kelas 4 SD · Materi Pengenalan Hardware &amp;
            Software
          </p>
          <div className="flex items-center gap-5">
            <a href="#eksplorasi" className="hover:text-slate-900 transition-colors">
              Eksplorasi
            </a>
            <a href="#simulasi" className="hover:text-slate-900 transition-colors">
              Simulasi
            </a>
            <a href="#kuis" className="hover:text-slate-900 transition-colors">
              Kuis
            </a>
            <a href="#prompt-guru" className="hover:text-slate-900 transition-colors">
              Prompt Guru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
