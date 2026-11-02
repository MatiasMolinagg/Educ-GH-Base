/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SlideDeckPresenter } from './components/SlideDeckPresenter';
import { StepByStepGuideView } from './components/StepByStepGuideView';
import { FinalProjectWorkshop } from './components/FinalProjectWorkshop';
import { GitSandboxAndMarkdownView } from './components/GitSandboxAndMarkdownView';
import { PrintableFullReport } from './components/PrintableFullReport';
import { generateRepositoryMarkdown } from './data/markdownGenerator';

type ActiveSection = 'slides' | 'guide' | 'project' | 'markdown';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('slides');
  const [selectedGuideClass, setSelectedGuideClass] = useState<number | null>(null);

  const handleOpenGuideForClass = (classNumber: number) => {
    if (classNumber >= 10) {
      setActiveSection('project');
    } else {
      setSelectedGuideClass(classNumber);
      setActiveSection('guide');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSlidesForClass = (classNumber: number) => {
    setActiveSection('slides');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadOnlyMd = () => {
    const md = generateRepositoryMarkdown({
      includeTimestamps: true,
      includeFinalProject: true,
      includeCheatsheet: true
    });
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GUIA_COMPLETA_GIT_GITHUB_2026.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A] text-slate-100">
      <header className="no-print sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
          <button
            onClick={() => setActiveSection('slides')}
            className="text-lg font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 cursor-pointer"
          >
            Git &amp; GitHub Masterclass
          </button>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300 overflow-x-auto">
            <button
              onClick={() => setActiveSection('slides')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeSection === 'slides'
                  ? 'text-white border-orange-500 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Filminas de Clase
            </button>
            <button
              onClick={() => setActiveSection('guide')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeSection === 'guide'
                  ? 'text-white border-orange-500 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Guía Paso a Paso
            </button>
            <button
              onClick={() => setActiveSection('project')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeSection === 'project'
                  ? 'text-white border-orange-500 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Proyecto Notas Colab
            </button>
            <button
              onClick={() => setActiveSection('markdown')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeSection === 'markdown'
                  ? 'text-white border-orange-500 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Repositorio .MD &amp; Simulador
            </button>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadOnlyMd}
              className="px-3.5 py-2 text-xs font-mono text-sky-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Descargar .MD
            </button>
            <button
              onClick={handlePrintPdf}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Exportar Guía PDF
            </button>
          </div>
        </div>
      </header>

      <main className="no-print flex-1">
        {activeSection === 'slides' && (
          <SlideDeckPresenter onOpenGuideClass={handleOpenGuideForClass} />
        )}
        {activeSection === 'guide' && (
          <StepByStepGuideView
            selectedClassNumber={selectedGuideClass}
            onSelectClass={setSelectedGuideClass}
            onOpenSlidesForClass={handleOpenSlidesForClass}
            onPrintGuide={handlePrintPdf}
          />
        )}
        {activeSection === 'project' && <FinalProjectWorkshop />}
        {activeSection === 'markdown' && <GitSandboxAndMarkdownView />}
      </main>

      <footer className="no-print border-t border-slate-800/80 py-6 px-6 mt-12">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Curso Completo de Git &amp; GitHub 2026 · Guía de Aprendizaje, Filminas Guiadas y Proyecto Final Notas Colab
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDownloadOnlyMd}
              className="hover:text-slate-200 underline"
            >
              Descargar GUIA_COMPLETA_GIT_GITHUB_2026.md
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={handlePrintPdf}
              className="hover:text-slate-200 underline"
            >
              Guardar Manual en PDF
            </button>
          </div>
        </div>
      </footer>

      <PrintableFullReport />
    </div>
  );
}
