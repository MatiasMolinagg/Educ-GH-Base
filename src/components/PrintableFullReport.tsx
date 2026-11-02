import React from 'react';
import { GUIDE_SECTIONS, COURSE_TIMESTAMPS } from '../data/courseChapters';
import { FINAL_PROJECT_PHASES, NOTAS_COLAB_RULES } from '../data/finalProjectData';

export const PrintableFullReport: React.FC = () => {
  return (
    <div className="hidden print-only max-w-4xl mx-auto p-8 text-slate-900 bg-white">
      {/* Cover Header */}
      <div className="border-b-2 border-slate-900 pb-6 mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mb-2">
          Guía Oficial de Estudio · Curso Completo de Git &amp; GitHub 2026
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Manual Completo de Aprendizaje Paso a Paso: Git, GitHub y Proyecto Final &ldquo;Notas Colab&rdquo;
        </h1>
        <p className="text-sm text-slate-700 leading-relaxed">
          Compendio integral de las 11 clases del curso: fundamentos de control de versiones
          distribuido, las 3 áreas de Git, Conventional Commits, ramas y puntero HEAD, Fast-Forward
          vs Three-Way Merge, resolución de conflictos, sincronización con GitHub, Pull Requests y
          Rulesets, comandos para deshacer cambios, detached HEAD, git stash, .gitignore, Rebase,
          Tags, Trunk-Based Development y simulación paso a paso de un equipo real con Django + uv.
        </p>
      </div>

      {/* Chronological Index */}
      <div className="mb-10 print-avoid-break">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Índice Cronológico de Temas (0:00:00 a 7:42:37)
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs font-mono border border-slate-300 rounded p-4">
          {COURSE_TIMESTAMPS.map((ts, i) => (
            <div key={i} className="flex items-center justify-between py-0.5 border-b border-slate-100">
              <span>
                <strong>{ts.time}</strong> — {ts.title}
              </span>
              <span className="text-slate-500">Clase {ts.classNumber}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All 11 Classes */}
      {GUIDE_SECTIONS.map((sec) => (
        <section key={sec.id} className="mb-10 print-page-break">
          <div className="border-b border-slate-400 pb-3 mb-4">
            <div className="text-xs font-mono text-slate-600">
              MÓDULO 0{sec.classNumber} · {sec.timestampRange} · {sec.duration}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">{sec.title}</h2>
            <p className="text-sm text-slate-700 mt-1">{sec.summary}</p>
            <p className="text-xs italic text-slate-800 mt-2 bg-slate-100 p-2.5 rounded border border-slate-300">
              Idea Clave: &ldquo;{sec.mentalModelQuote}&rdquo;
            </p>
          </div>

          <div className="space-y-5">
            {sec.concepts.map((c, idx) => (
              <div key={idx} className="print-avoid-break space-y-2">
                <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                <p className="text-xs text-slate-800 leading-relaxed">{c.explanation}</p>
                {c.keyRule && (
                  <p className="text-xs text-slate-900 font-medium">
                    • Regla práctica: {c.keyRule}
                  </p>
                )}
                {c.codeExample && (
                  <div className="mt-2">
                    <div className="text-xs font-mono font-semibold text-slate-700 mb-1">
                      Ejemplo: {c.codeExample.title}
                    </div>
                    <pre className="p-3 text-xs font-mono rounded border border-slate-300 bg-slate-50">
                      {c.codeExample.code}
                      {c.codeExample.output ? `\n\n# Salida:\n${c.codeExample.output}` : ''}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 print-avoid-break">
            <h3 className="text-sm font-bold text-slate-900 mb-2">
              Tabla de Comandos — Clase {sec.classNumber}
            </h3>
            <table className="w-full text-left border-collapse border border-slate-300 text-xs">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300">Comando</th>
                  <th className="p-2 border-r border-slate-300">Propósito</th>
                  <th className="p-2">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {sec.commandsTable.map((cmd, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-2 font-mono font-semibold border-r border-slate-300">
                      {cmd.command}
                    </td>
                    <td className="p-2 border-r border-slate-300">{cmd.purpose}</td>
                    <td className="p-2 font-mono">{cmd.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Final Project Notas Colab */}
      <section className="print-page-break">
        <div className="border-b-2 border-slate-900 pb-3 mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Proyecto Final Integrador Paso a Paso: &ldquo;Notas Colab&rdquo; (Fases 0 a 8)
          </h2>
          <p className="text-xs text-slate-700 mt-1">
            Simulación completa de dos desarrolladores en un solo computador con Django y uv.
          </p>
        </div>

        <div className="mb-6 print-avoid-break">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Las 5 Reglas del Modelo main y develop
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-xs text-slate-800">
            {NOTAS_COLAB_RULES.map((r) => (
              <li key={r.number}>
                <strong>{r.title}:</strong> {r.description}
              </li>
            ))}
          </ol>
        </div>

        {FINAL_PROJECT_PHASES.map((phase) => (
          <div key={phase.phaseNumber} className="mb-8 print-avoid-break">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3">
              {phase.title}
            </h3>
            <div className="space-y-4">
              {phase.steps.map((st) => (
                <div key={st.id} className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-900">
                    Paso {st.stepCode} [{st.role}] — {st.title}
                  </div>
                  <p className="text-xs text-slate-800">{st.explanation}</p>
                  {st.terminalCommands && (
                    <pre className="p-2.5 text-xs font-mono border border-slate-300 rounded bg-slate-50">
                      {st.terminalCommands}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
