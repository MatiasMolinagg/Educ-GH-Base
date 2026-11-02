import React, { useState } from 'react';
import {
  Search,
  Copy,
  Check,
  FileText,
  Clock,
  Terminal,
  AlertCircle,
  CheckCircle2,
  Presentation,
  Printer,
  ChevronRight
} from 'lucide-react';
import { GUIDE_SECTIONS, COURSE_TIMESTAMPS } from '../data/courseChapters';

interface StepByStepGuideViewProps {
  selectedClassNumber: number | null;
  onSelectClass: (classNumber: number | null) => void;
  onOpenSlidesForClass: (classNumber: number) => void;
  onPrintGuide: () => void;
}

export const StepByStepGuideView: React.FC<StepByStepGuideViewProps> = ({
  selectedClassNumber,
  onSelectClass,
  onOpenSlidesForClass,
  onPrintGuide
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showTimestampsModal, setShowTimestampsModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const filteredSections = GUIDE_SECTIONS.filter((sec) => {
    const matchesClass =
      selectedClassNumber === null || sec.classNumber === selectedClassNumber;
    if (!matchesClass) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      sec.summary.toLowerCase().includes(q) ||
      sec.concepts.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.explanation.toLowerCase().includes(q) ||
          c.codeExample?.code.toLowerCase().includes(q)
      ) ||
      sec.commandsTable.some(
        (cmd) =>
          cmd.command.toLowerCase().includes(q) ||
          cmd.purpose.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-8">
      {/* Top Hero Banner of the Guide */}
      <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-orange-400 font-semibold">Informe Guiado Paso a Paso</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">11 Clases Completas (0:00:00 a 7:42:37)</span>
              <span aria-hidden="true">·</span>
              <span>Material de Estudio + Ejemplos</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-tight mb-3">
              Manual Completo de Aprendizaje: Git &amp; GitHub
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              Guía exhaustiva paso a paso con todos los modelos mentales, comandos comentados,
              comparativas, tablas de referencia y casos prácticos extraídos de las 11 clases y las
              presentaciones del curso.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowTimestampsModal((prev) => !prev)}
              className="px-4 py-2.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Clock className="w-4 h-4 text-orange-400" />
              <span>
                {showTimestampsModal
                  ? 'Ocultar Índice de Tiempos (TXT)'
                  : 'Ver Índice de Tiempos (72 Capítulos)'}
              </span>
            </button>

            <button
              onClick={onPrintGuide}
              className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar PDF Completo</span>
            </button>
          </div>
        </div>

        {/* Collapsible Complete Chronological Index from informacion.txt */}
        {showTimestampsModal && (
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white">
                Mapa Cronológico Completo del Curso (Archivo informacion.txt · 72 temas)
              </h2>
              <span className="text-xs font-mono text-slate-400">
                Haz clic en cualquier capítulo para ir a su clase
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-2">
              {COURSE_TIMESTAMPS.map((ts, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectClass(ts.classNumber === 11 ? 10 : ts.classNumber);
                    setShowTimestampsModal(false);
                  }}
                  className="text-left p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="truncate">
                    <span className="text-xs font-mono text-orange-400 mr-2 tabular-nums">
                      {ts.time}
                    </span>
                    <span className="text-xs text-slate-200">{ts.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Layout: Left Sidebar Index + Right Detailed Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 bg-[#131C31] border border-slate-800 rounded-xl p-4 lg:sticky lg:top-6">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar comando o tema..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="text-xs font-semibold text-slate-400 px-2 mb-2">
            Capítulos de la Guía
          </div>
          <nav className="space-y-1">
            <button
              onClick={() => onSelectClass(null)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                selectedClassNumber === null
                  ? 'bg-orange-500 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800/80'
              }`}
            >
              <span>Ver Todas las Clases (01–11)</span>
              <span className="font-mono tabular-nums">10</span>
            </button>

            {GUIDE_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => onSelectClass(sec.classNumber)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  selectedClassNumber === sec.classNumber
                    ? 'bg-orange-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="truncate">{sec.title}</div>
                <div
                  className={`text-[11px] font-mono tabular-nums mt-0.5 ${
                    selectedClassNumber === sec.classNumber
                      ? 'text-slate-900'
                      : 'text-slate-500'
                  }`}
                >
                  {sec.timestampRange} · {sec.duration}
                </div>
              </button>
            ))}
          </nav>

          {/* Reference to Intro PPT */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-300 mb-2">
              Material PDF Adjunto Original
            </div>
            <a
              href="/assets/aistudio/1.PPT_Git_824c9aaf.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-sky-400 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">1.PPT_Git (Presentación Base)</span>
            </a>
          </div>
        </aside>

        {/* Detailed Chapter Cards */}
        <div className="lg:col-span-9 space-y-10">
          {filteredSections.length === 0 ? (
            <div className="bg-[#131C31] border border-slate-800 rounded-xl p-12 text-center">
              <p className="text-sm text-slate-300 mb-3">
                No se encontraron capítulos o comandos que coincidan con &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  onSelectClass(null);
                }}
                className="px-4 py-2 text-xs font-medium bg-orange-500 text-slate-950 rounded-lg font-semibold"
              >
                Mostrar todo el manual
              </button>
            </div>
          ) : (
            filteredSections.map((sec) => (
              <article
                key={sec.id}
                id={`chapter-${sec.classNumber}`}
                className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8"
              >
                {/* Chapter Header */}
                <div className="border-b border-slate-800 pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono tabular-nums">
                      <span className="text-orange-400 font-semibold">
                        MÓDULO 0{sec.classNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{sec.timestampRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sec.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenSlidesForClass(sec.classNumber)}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-orange-300 border border-slate-700 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <Presentation className="w-3.5 h-3.5" />
                        <span>Abrir Filminas de esta Clase</span>
                      </button>
                      <a
                        href={sec.pdfAssetPath}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-700 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>PDF Original</span>
                      </a>
                    </div>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {sec.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {sec.summary}
                  </p>

                  {/* Mental Model Highlight Box (No thick left border per constitution; clean all-around hairline border) */}
                  <div className="bg-[#0F172A] border border-orange-500/30 rounded-xl p-4">
                    <div className="text-xs font-semibold text-orange-400 mb-1">
                      Modelo Mental de la Clase
                    </div>
                    <p className="text-xs lg:text-sm text-slate-200 italic">
                      &ldquo;{sec.mentalModelQuote}&rdquo;
                    </p>
                  </div>

                  {/* Timestamps Row */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Temas y marcas de tiempo:</span>
                    {sec.timestamps.map((t, i) => (
                      <span key={i} className="font-mono tabular-nums">
                        <strong className="text-orange-300">{t.time}</strong> {t.title}
                        {i < sec.timestamps.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Concepts & Examples */}
                <div className="space-y-6">
                  {sec.concepts.map((concept, cIdx) => {
                    const copyId = `${sec.id}-c-${cIdx}`;
                    return (
                      <div
                        key={cIdx}
                        className="bg-[#0F172A] border border-slate-800/90 rounded-xl p-5 space-y-4"
                      >
                        <h3 className="text-base lg:text-lg font-semibold text-white">
                          {concept.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed max-w-[75ch]">
                          {concept.explanation}
                        </p>

                        {(concept.analogy || concept.keyRule) && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                            {concept.analogy && (
                              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-300">
                                <span className="font-semibold text-sky-400 block mb-1">
                                  Analogía para recordar en clase:
                                </span>
                                {concept.analogy}
                              </div>
                            )}
                            {concept.keyRule && (
                              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-300">
                                <span className="font-semibold text-emerald-400 block mb-1">
                                  Regla Práctica Fundamental:
                                </span>
                                {concept.keyRule}
                              </div>
                            )}
                          </div>
                        )}

                        {concept.codeExample && (
                          <div className="bg-[#090D16] border border-slate-800 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-xs">
                              <span className="font-mono text-slate-300 flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                                {concept.codeExample.title}
                              </span>
                              <button
                                onClick={() =>
                                  handleCopy(concept.codeExample!.code, copyId)
                                }
                                className="text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                              >
                                {copiedKey === copyId ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">Copiado</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copiar código</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-4 text-xs font-mono text-orange-200 overflow-x-auto leading-relaxed">
                              {concept.codeExample.code}
                            </pre>
                            {concept.codeExample.output && (
                              <div className="border-t border-slate-800/80 bg-slate-950/90 p-4">
                                <div className="text-[11px] font-mono text-slate-400 mb-1">
                                  Salida / Resultado en Consola:
                                </div>
                                <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                                  {concept.codeExample.output}
                                </pre>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Commands Reference Table for this Class */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    Tabla de Comandos de la Clase {sec.classNumber}
                  </h3>
                  <div className="overflow-x-auto bg-[#0F172A] border border-slate-800 rounded-xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="py-3 px-4 font-medium">Comando</th>
                          <th className="py-3 px-4 font-medium">Propósito</th>
                          <th className="py-3 px-4 font-medium">Ejemplo Práctico</th>
                          <th className="py-3 px-4 font-medium">Zona / Impacto</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/70">
                        {sec.commandsTable.map((cmd, idx) => (
                          <tr key={idx} className="hover:bg-slate-900/60">
                            <td className="py-3 px-4 font-mono font-semibold text-orange-300 whitespace-nowrap">
                              {cmd.command}
                            </td>
                            <td className="py-3 px-4 text-slate-200">{cmd.purpose}</td>
                            <td className="py-3 px-4 font-mono text-emerald-300 whitespace-nowrap">
                              {cmd.example}
                            </td>
                            <td className="py-3 px-4 font-mono text-slate-400 whitespace-nowrap">
                              {cmd.zoneOrImpact}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Common Pitfalls & Fixes */}
                {sec.pitfallsAndFixes.length > 0 && (
                  <div>
                    <h3 className="text-base font-semibold text-white mb-3">
                      Errores Clásicos y Solución Inmediata
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sec.pitfallsAndFixes.map((pf, idx) => (
                        <div
                          key={idx}
                          className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-2"
                        >
                          <div className="flex items-start gap-2 text-xs font-semibold text-rose-300">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <span>{pf.problem}</span>
                          </div>
                          <p className="text-xs text-slate-400">{pf.whyItHappens}</p>
                          <div className="pt-1">
                            <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Solución:</span>
                            </div>
                            <code className="block bg-[#090D16] border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-emerald-300">
                              {pf.solutionCommand}
                            </code>
                            <p className="text-xs text-slate-300 mt-1.5">{pf.explanation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
