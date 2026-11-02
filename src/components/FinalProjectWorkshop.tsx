import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Terminal,
  FileCode,
  GitPullRequest,
  AlertTriangle,
  Users,
  FileText
} from 'lucide-react';
import { FINAL_PROJECT_PHASES, NOTAS_COLAB_RULES } from '../data/finalProjectData';

export const FinalProjectWorkshop: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'CUENTA PRINCIPAL' | 'COLABORADOR'>('ALL');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleStepCompleted = (id: string) => {
    setCompletedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const totalStepsCount = FINAL_PROJECT_PHASES.reduce(
    (acc, p) => acc + p.steps.length,
    0
  );
  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  const displayedPhases =
    activePhase === 'all'
      ? FINAL_PROJECT_PHASES
      : FINAL_PROJECT_PHASES.filter((p) => p.phaseNumber === activePhase);

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-8">
      {/* Header Banner */}
      <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-orange-400 font-semibold">Clases 10 y 11 · Proyecto Final</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">5:41:09 – 7:42:37</span>
              <span aria-hidden="true">·</span>
              <span>Django + uv + 2 Cuentas de GitHub</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-tight mb-3">
              &ldquo;Notas Colab&rdquo;: Todo el curso en una sola App
            </h1>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              Guía práctica paso a paso para simular un equipo real de dos desarrolladores en un
              solo computador usando dos carpetas (<code className="text-orange-300">~/notas-colab</code>{' '}
              y <code className="text-sky-300">~/notas-colab-companero</code>) con dos identidades y
              dos cuentas de GitHub.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 shrink-0 min-w-[240px]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Progreso de Práctica</span>
              <span className="font-mono text-orange-400 font-semibold tabular-nums">
                {completedCount} / {totalStepsCount} pasos
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-orange-500 transition-all"
                style={{
                  width: `${Math.round((completedCount / totalStepsCount) * 100)}%`
                }}
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <a
                href="/assets/aistudio/Clase_10_-_proyecto_final_git_github_7a42511e.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Proyecto Final</span>
              </a>
              {completedCount > 0 && (
                <button
                  onClick={() => setCompletedSteps({})}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Reiniciar checks
                </button>
              )}
            </div>
          </div>
        </div>

        {/* The 5 Rules of main and develop */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <h2 className="text-sm font-semibold text-white mb-4">
            Las 5 Reglas del Juego: El modelo de ramas main y develop que gobierna todo el proyecto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {NOTAS_COLAB_RULES.map((rule) => (
              <div
                key={rule.number}
                className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-orange-400 font-semibold mb-1 tabular-nums">
                    REGLA 0{rule.number}
                  </div>
                  <h3 className="text-xs font-semibold text-white mb-1.5">{rule.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Toolbar: Phase Selector + Role Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setActivePhase('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activePhase === 'all'
                ? 'bg-orange-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Todas las Fases (0–8)
          </button>
          {FINAL_PROJECT_PHASES.map((p) => (
            <button
              key={p.phaseNumber}
              onClick={() => setActivePhase(p.phaseNumber)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                activePhase === p.phaseNumber
                  ? 'bg-orange-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Fase {p.phaseNumber}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
          <Users className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
          {(['ALL', 'CUENTA PRINCIPAL', 'COLABORADOR'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                roleFilter === r
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {r === 'ALL' ? 'Ambos Roles' : r}
            </button>
          ))}
        </div>
      </div>

      {/* Phases List */}
      <div className="space-y-10">
        {displayedPhases.map((phase) => {
          const steps = phase.steps.filter(
            (st) =>
              roleFilter === 'ALL' ||
              st.role === roleFilter ||
              st.role === 'AMBOS ROLES'
          );
          if (steps.length === 0) return null;

          return (
            <section
              key={phase.phaseNumber}
              className="bg-[#131C31] border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6"
            >
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-mono text-orange-400 font-semibold mb-1 tabular-nums">
                  FASE 0{phase.phaseNumber} DE 08
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {phase.title}
                </h2>
                <p className="text-xs lg:text-sm text-slate-300">
                  <span className="font-semibold text-slate-200">Práctica integrada: </span>
                  {phase.skillsPracticed}
                </p>
              </div>

              <div className="space-y-6">
                {steps.map((step) => {
                  const isDone = !!completedSteps[step.id];
                  return (
                    <div
                      key={step.id}
                      className={`bg-[#0F172A] border rounded-xl p-5 transition-colors space-y-4 ${
                        isDone ? 'border-emerald-500/50' : 'border-slate-800'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleStepCompleted(step.id)}
                            className="text-slate-400 hover:text-emerald-400 transition-colors"
                            aria-label={`Marcar paso ${step.stepCode} como completado`}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </button>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-mono">
                              <span className="text-orange-400 font-semibold tabular-nums">
                                Paso {step.stepCode}
                              </span>
                              <span aria-hidden="true" className="text-slate-600">
                                ·
                              </span>
                              <span
                                className={
                                  step.role === 'CUENTA PRINCIPAL'
                                    ? 'text-emerald-400 font-semibold'
                                    : step.role === 'COLABORADOR'
                                    ? 'text-sky-400 font-semibold'
                                    : 'text-amber-300 font-semibold'
                                }
                              >
                                {step.role === 'CUENTA PRINCIPAL'
                                  ? 'CUENTA PRINCIPAL (~/notas-colab)'
                                  : step.role === 'COLABORADOR'
                                  ? 'COLABORADOR (~/notas-colab-companero)'
                                  : 'AMBOS ROLES EN EQUIPO'}
                              </span>
                            </div>
                            <h3 className="text-base font-semibold text-white mt-0.5">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {step.ticketName && step.ticketQuote && (
                        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5">
                          <div className="text-xs font-mono font-semibold text-orange-300 mb-1">
                            {step.ticketName}
                          </div>
                          <p className="text-xs lg:text-sm text-slate-200 italic">
                            {step.ticketQuote}
                          </p>
                        </div>
                      )}

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {step.explanation}
                      </p>

                      {step.warningNote && (
                        <div className="bg-amber-950/30 border border-amber-500/40 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-amber-200">
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{step.warningNote}</span>
                        </div>
                      )}

                      {step.terminalCommands && (
                        <div className="bg-[#090D16] border border-slate-800 rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-xs">
                            <span className="font-mono text-slate-300 flex items-center gap-2">
                              <Terminal className="w-3.5 h-3.5 text-orange-400" />
                              Comandos de Terminal ({step.role})
                            </span>
                            <button
                              onClick={() =>
                                handleCopy(step.terminalCommands!, `${step.id}-cmd`)
                              }
                              className="text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                            >
                              {copiedId === `${step.id}-cmd` ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copiado</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copiar</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 text-xs font-mono text-orange-200 overflow-x-auto leading-relaxed">
                            {step.terminalCommands}
                          </pre>
                        </div>
                      )}

                      {step.fileEdits &&
                        step.fileEdits.map((fe, idx) => (
                          <div
                            key={idx}
                            className="bg-[#090D16] border border-slate-800 rounded-lg overflow-hidden"
                          >
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-xs">
                              <span className="font-mono text-sky-300 flex items-center gap-2">
                                <FileCode className="w-3.5 h-3.5" />
                                Archivo: {fe.filePath}
                              </span>
                              <button
                                onClick={() =>
                                  handleCopy(fe.content, `${step.id}-file-${idx}`)
                                }
                                className="text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                              >
                                {copiedId === `${step.id}-file-${idx}` ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">Copiado</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copiar archivo</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                              {fe.content}
                            </pre>
                            {fe.note && (
                              <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800 text-xs text-slate-400">
                                {fe.note}
                              </div>
                            )}
                          </div>
                        ))}

                      {step.prTemplate && (
                        <div className="bg-[#090D16] border border-emerald-500/30 rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 bg-emerald-950/30 border-b border-slate-800 text-xs">
                            <span className="font-mono text-emerald-300 flex items-center gap-2">
                              <GitPullRequest className="w-3.5 h-3.5" />
                              Pull Request en GitHub ({step.prTemplate.baseBranch} &larr;{' '}
                              {step.prTemplate.compareBranch})
                            </span>
                            <button
                              onClick={() =>
                                handleCopy(
                                  `${step.prTemplate!.title}\n\n${step.prTemplate!.body}`,
                                  `${step.id}-pr`
                                )
                              }
                              className="text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                            >
                              {copiedId === `${step.id}-pr` ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copiado</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copiar plantilla PR</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="p-4 space-y-2 text-xs font-mono">
                            <div className="text-white font-semibold">
                              Título: {step.prTemplate.title}
                            </div>
                            <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                              {step.prTemplate.body}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Phase Checkpoint Footer */}
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="text-xs lg:text-sm text-emerald-200">
                  <span className="font-mono font-semibold text-emerald-400">
                    CHECKPOINT · FASE {phase.phaseNumber}:{' '}
                  </span>
                  {phase.checkpointText}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
