import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  MessageSquareText,
  BookOpen,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Info,
  XCircle
} from 'lucide-react';
import { SLIDE_DECK, GUIDE_SECTIONS } from '../data/courseChapters';
import { SlideVisualCanvas } from './SlideVisualCanvas';

interface SlideDeckPresenterProps {
  onOpenGuideClass: (classNumber: number) => void;
}

export const SlideDeckPresenter: React.FC<SlideDeckPresenterProps> = ({
  onOpenGuideClass
}) => {
  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredSlides =
    selectedClass === 'all'
      ? SLIDE_DECK
      : SLIDE_DECK.filter((s) => s.classNumber === selectedClass);

  const activeSlide = filteredSlides[currentIdx] || filteredSlides[0];
  const matchingSection = GUIDE_SECTIONS.find(
    (sec) => sec.classNumber === activeSlide?.classNumber
  );

  useEffect(() => {
    setCurrentIdx(0);
  }, [selectedClass]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setCurrentIdx((prev) => Math.min(prev + 1, filteredSlides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIdx((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'n' || e.key === 'N') {
        setShowSpeakerNotes((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredSlides.length]);

  if (!activeSlide) return null;

  return (
    <div
      className={`${
        isExpanded
          ? 'fixed inset-0 z-50 bg-[#0F172A] overflow-y-auto p-6'
          : 'max-w-[1360px] mx-auto px-6 py-6'
      }`}
    >
      {/* Module Selector Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedClass === 'all'
                ? 'bg-orange-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Todas las Clases ({SLIDE_DECK.length})
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedClass(num)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                selectedClass === num
                  ? 'bg-orange-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {num === 10 ? 'Clases 10–11 (Proyecto)' : `Clase 0${num}`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowSpeakerNotes((prev) => !prev)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              showSpeakerNotes
                ? 'bg-slate-800 text-orange-300 border-orange-500/40'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <MessageSquareText className="w-3.5 h-3.5" />
            <span>Guía Docente (N)</span>
          </button>

          <button
            onClick={() => onOpenGuideClass(activeSlide.classNumber)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Ir al Capítulo Detallado</span>
          </button>

          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            {isExpanded ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Salir de Proyección</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Modo Proyección</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main 16:9 Slide Frame */}
      <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl">
        {/* Slide Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-semibold">{activeSlide.sectionKicker}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">
              {matchingSection?.timestampRange || 'Curso Git 2026'}
            </span>
          </div>
          <div className="font-mono text-slate-400 tabular-nums">
            Filmina {currentIdx + 1} de {filteredSlides.length} ({activeSlide.slideIndex})
          </div>
        </div>

        <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-tight mb-2 max-w-4xl">
          {activeSlide.title}
        </h1>
        <p className="text-sm lg:text-base text-slate-300 max-w-3xl mb-8">
          {activeSlide.subtitle}
        </p>

        {/* Two-Zone Sandbox Split: Left Concepts (40%) + Right Interactive Stage (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {activeSlide.bullets.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-semibold text-white">{b.heading}</h3>
                    {b.statusType === 'nominal' && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Recomendado
                      </span>
                    )}
                    {b.statusType === 'warning' && (
                      <span className="text-xs font-mono text-amber-400 flex items-center gap-1 shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Atención
                      </span>
                    )}
                    {b.statusType === 'danger' && (
                      <span className="text-xs font-mono text-rose-400 flex items-center gap-1 shrink-0">
                        <XCircle className="w-3.5 h-3.5" />
                        Evitar
                      </span>
                    )}
                    {b.statusType === 'info' && (
                      <span className="text-xs font-mono text-sky-400 flex items-center gap-1 shrink-0">
                        <Info className="w-3.5 h-3.5" />
                        Concepto
                      </span>
                    )}
                  </div>
                  <p className="text-xs lg:text-sm text-slate-300 leading-relaxed">{b.body}</p>
                </div>
                {b.code && (
                  <pre className="mt-3 bg-[#090D16] border border-slate-800/90 rounded-lg px-3 py-2 text-xs font-mono text-orange-300 overflow-x-auto">
                    {b.code}
                  </pre>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <SlideVisualCanvas slide={activeSlide} />
          </div>
        </div>

        {/* Bottom Key Takeaway Banner inside Slide */}
        <div className="mt-8 pt-5 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs lg:text-sm text-slate-200">
            <span className="font-semibold text-orange-400">Lo que te llevas de esta filmina: </span>
            {activeSlide.keyTakeaway}
          </div>

          {matchingSection?.pdfAssetPath && (
            <a
              href={matchingSection.pdfAssetPath}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-sky-400 hover:text-sky-300 underline flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Ver PDF original de Clase {activeSlide.classNumber}</span>
            </a>
          )}
        </div>
      </div>

      {/* Slide Navigation Controls + Speaker Notes */}
      <div className="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(prev - 1, 0))}
            disabled={currentIdx === 0}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-200 border border-slate-800 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior (←)</span>
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {filteredSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Ir a filmina ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIdx === idx
                    ? 'w-7 bg-orange-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentIdx((prev) => Math.min(prev + 1, filteredSlides.length - 1))
            }
            disabled={currentIdx === filteredSlides.length - 1}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-40 text-slate-950 font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Siguiente (→)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {showSpeakerNotes && (
          <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300">
            <span className="font-semibold text-orange-300">Guía para el Orador / Docente: </span>
            {activeSlide.speakerNotes}
          </div>
        )}
      </div>
    </div>
  );
};
