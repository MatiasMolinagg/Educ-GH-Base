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
import { downloadWindowsCompatibleArchive } from './utils/projectArchiveBuilder';
import { generateRepositoryMarkdown } from './data/markdownGenerator';

type ActiveSection = 'slides' | 'guide' | 'project' | 'markdown';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('slides');
  const [selectedGuideClass, setSelectedGuideClass] = useState<number | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<string>('');

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
      {/* Top Bar Contract: 3 Zones separated by gap-8 */}
      <header className="no-print sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveSection('slides')}
            className="text-lg font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 cursor-pointer"
          >
            Git &amp; GitHub Masterclass
          </button>

          {/* Zone 2: 4 clean single-line text navigation links */}
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

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() =>
                downloadWindowsCompatibleArchive({
                  includePdfs: false,
                  extension: 'zip',
                  onProgress: setDownloadStatus
                })
              }
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Descargar Repo (Windows)
            </button>
          </div>
        </div>
      </header>

      {/* Direct Windows-Compatible Download Bar */}
      <div className="no-print bg-slate-900/90 border-b border-slate-800 px-6 py-3">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-semibold text-orange-400">
              Descargar para Windows / WinRAR:
            </span>
            <button
              onClick={() =>
                downloadWindowsCompatibleArchive({
                  includePdfs: false,
                  extension: 'zip',
                  onProgress: setDownloadStatus
                })
              }
              className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              ⬇ Descargar .ZIP (Formato Windows DOS)
            </button>
            <button
              onClick={() =>
                downloadWindowsCompatibleArchive({
                  includePdfs: false,
                  extension: 'rar',
                  onProgress: setDownloadStatus
                })
              }
              className="px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              ⬇ Descargar .RAR (Abrir con WinRAR / 7-Zip)
            </button>
            <button
              onClick={() =>
                downloadWindowsCompatibleArchive({
                  includePdfs: true,
                  extension: 'rar',
                  onProgress: setDownloadStatus
                })
              }
              className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              ⬇ Completo + 12 PDFs (.RAR)
            </button>
            <button
              onClick={handleDownloadOnlyMd}
              className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 font-mono transition-colors whitespace-nowrap cursor-pointer"
            >
              ⬇ Solo archivo .MD
            </button>
            {downloadStatus && (
              <span className="font-mono text-amber-300 animate-pulse">
                {downloadStatus}
              </span>
            )}
          </div>

          <button
            onClick={handlePrintPdf}
            className="text-slate-300 hover:text-white underline font-medium whitespace-nowrap cursor-pointer"
          >
            Imprimir / Guardar Guía en PDF
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace (No-Print) */}
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

      {/* Clean Footer */}
      <footer className="no-print border-t border-slate-800/80 py-6 px-6 mt-12">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Curso Completo de Git &amp; GitHub 2026 · Guía de Aprendizaje, Filminas Guiadas y Proyecto Final Notas Colab
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveSection('markdown')}
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

      {/* Complete Printable / PDF Report (Rendered when printing/saving as PDF) */}
      <PrintableFullReport />
    </div>
  );
}
