import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  FolderGit2,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Terminal,
  Layers,
  Tag,
  CloudUpload,
  CloudDownload,
  Copy,
  Check
} from 'lucide-react';
import { SlideItem } from '../data/courseChapters';

interface SlideVisualCanvasProps {
  slide: SlideItem;
}

export const SlideVisualCanvas: React.FC<SlideVisualCanvasProps> = ({ slide }) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [mergeMode, setMergeMode] = useState<'fast-forward' | 'three-way'>('fast-forward');
  const [conflictStep, setConflictStep] = useState<'raw' | 'resolved' | 'aborted'>('raw');
  const [remoteAction, setRemoteAction] = useState<'idle' | 'push' | 'fetch' | 'pull'>('idle');
  const [prStage, setPrStage] = useState<number>(1);
  const [resetMode, setResetMode] = useState<'soft' | 'mixed' | 'hard' | 'revert'>('mixed');
  const [stashDemoStep, setStashDemoStep] = useState<number>(0);
  const [aliceBobStep, setAliceBobStep] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Reset internal step when slide changes
  React.useEffect(() => {
    setStepIdx(0);
    setConflictStep('raw');
    setRemoteAction('idle');
    setPrStage(1);
    setStashDemoStep(0);
    setAliceBobStep(1);
  }, [slide.id]);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  if (slide.visualType === 'snapshot-diff') {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
            <span className="text-xs font-mono text-slate-400">
              Modelo Mental: Fotos Completas vs Cálculo de Diferencias
            </span>
            <span className="text-xs font-mono text-emerald-400 tabular-nums">
              Commit B − Commit A = Diff
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-200">Foto · Commit A</span>
                <span className="text-xs font-mono text-slate-400 tabular-nums">7b1e4d2</span>
              </div>
              <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded border border-slate-800/80">
{`def saludar():
    print("hola")
# fin`}
              </pre>
              <p className="text-xs text-slate-400 mt-2">Estado completo guardado ayer</p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-200">Foto · Commit B</span>
                <span className="text-xs font-mono text-orange-400 tabular-nums">a3f5c9e</span>
              </div>
              <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded border border-slate-800/80">
{`def saludar():
    print("hola!")
    log("ok")`}
              </pre>
              <p className="text-xs text-slate-400 mt-2">Estado completo guardado hoy</p>
            </div>

            <div className="bg-slate-900/90 border border-emerald-500/40 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-emerald-300">Diff calculado al vuelo</span>
                <span className="text-xs font-mono text-emerald-400 tabular-nums">+2 −2</span>
              </div>
              <div className="text-xs font-mono bg-slate-950 p-3 rounded border border-slate-800/80 space-y-1">
                <div className="text-slate-300">def saludar():</div>
                <div className="bg-rose-950/60 text-rose-300 px-1 rounded">−   print("hola")</div>
                <div className="bg-emerald-950/60 text-emerald-300 px-1 rounded">+   print("hola!")</div>
                <div className="bg-emerald-950/60 text-emerald-300 px-1 rounded">+   log("ok")</div>
                <div className="bg-rose-950/60 text-rose-300 px-1 rounded">− # fin</div>
              </div>
              <p className="text-xs text-slate-400 mt-2">Git lo calcula cuando se lo pides</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-orange-400">Álbum cronológico (.git/objects):</span>{' '}
            Cada commit encadena la foto completa y apunta a su padre anterior.
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>commit 1</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span>commit 2</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-orange-400 font-semibold">commit 3 (HEAD)</span>
          </div>
        </div>
      </div>
    );
  }

  if (slide.visualType === 'three-zones' || slide.visualType === 'terminal-sim') {
    const steps = slide.terminalSteps || [];
    const activeStep = steps[stepIdx] || steps[0];

    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-semibold text-slate-200">
                Demostración Interactiva Paso a Paso
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStepIdx(idx)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                    stepIdx === idx
                      ? 'bg-orange-500 text-slate-950 font-semibold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Paso {idx + 1}
                </button>
              ))}
              <button
                onClick={() => setStepIdx((prev) => (prev + 1) % steps.length)}
                className="px-3 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <Play className="w-3 h-3" />
                Siguiente
              </button>
            </div>
          </div>

          {slide.visualType === 'three-zones' && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div
                className={`p-3.5 rounded-lg border transition-colors ${
                  activeStep?.zoneHighlight === 'working'
                    ? 'bg-rose-950/30 border-rose-500/70'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 mb-1">1. Working Directory</div>
                <div className="text-xs text-slate-400">Tus archivos editados</div>
                {activeStep?.zoneHighlight === 'working' && (
                  <div className="mt-2 text-xs font-mono text-rose-300">saludo.txt (Untracked)</div>
                )}
              </div>

              <div
                className={`p-3.5 rounded-lg border transition-colors ${
                  activeStep?.zoneHighlight === 'staging'
                    ? 'bg-amber-950/30 border-amber-500/70'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 mb-1">2. Staging Area</div>
                <div className="text-xs text-slate-400">Preparados con git add</div>
                {activeStep?.zoneHighlight === 'staging' && (
                  <div className="mt-2 text-xs font-mono text-emerald-300">saludo.txt (Staged v1)</div>
                )}
              </div>

              <div
                className={`p-3.5 rounded-lg border transition-colors ${
                  activeStep?.zoneHighlight === 'repo'
                    ? 'bg-emerald-950/30 border-emerald-500/70'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="text-xs font-semibold text-slate-200 mb-1">3. Repository (.git)</div>
                <div className="text-xs text-slate-400">Fotos confirmadas</div>
                {activeStep?.zoneHighlight === 'repo' && stepIdx >= 3 && (
                  <div className="mt-2 text-xs font-mono text-emerald-300 tabular-nums">
                    commit a3f5c9e
                  </div>
                )}
              </div>
            </div>
          )}

          {activeStep && (
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800/80">
                <span>~/mi-proyecto — bash</span>
                <button
                  onClick={() => copyText(activeStep.command, 'step-cmd')}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                >
                  {copiedCode === 'step-cmd' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar comando</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-orange-300 font-semibold mb-2">$ {activeStep.command}</div>
              <div className="space-y-1 text-slate-300">
                {activeStep.output.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.includes('new file:') || line.includes('[main')
                        ? 'text-emerald-400'
                        : line.includes('saludo.txt') && activeStep.zoneHighlight === 'working'
                        ? 'text-rose-400'
                        : 'text-slate-300'
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {activeStep && (
          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span>{activeStep.explanation}</span>
            <span className="font-mono text-slate-400 tabular-nums">
              Paso {stepIdx + 1} / {steps.length}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (slide.visualType === 'branch-pointer') {
    const steps = slide.terminalSteps || [];
    const activeStep = steps[stepIdx] || steps[0];
    const graph = activeStep?.graphState;

    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              Grafo de Commits y Punteros en Vivo (.git/refs/heads)
            </span>
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStepIdx(idx)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                    stepIdx === idx
                      ? 'bg-orange-500 text-slate-950 font-semibold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Escena {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {graph && (
            <div className="bg-slate-950 border border-slate-800/90 rounded-lg p-4 mb-4">
              <svg viewBox="0 0 560 230" className="w-full h-48">
                {/* Edges */}
                {graph.nodes.map((node) => {
                  if (!node.parent) return null;
                  const parentNode = graph.nodes.find((n) => n.id === node.parent);
                  if (!parentNode) return null;
                  return (
                    <line
                      key={`${parentNode.id}-${node.id}`}
                      x1={parentNode.x}
                      y1={parentNode.y}
                      x2={node.x}
                      y2={node.y}
                      stroke={
                        node.branch === 'feature'
                          ? '#10B981'
                          : node.branch === 'develop'
                          ? '#0EA5E9'
                          : '#F97316'
                      }
                      strokeWidth="3"
                    />
                  );
                })}

                {/* Nodes */}
                {graph.nodes.map((node) => {
                  const nodePointers = graph.pointers.filter((p) => p.target === node.id);
                  return (
                    <g key={node.id}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="22"
                        fill="#0F172A"
                        stroke={
                          node.branch === 'feature'
                            ? '#10B981'
                            : node.branch === 'develop'
                            ? '#0EA5E9'
                            : '#F97316'
                        }
                        strokeWidth="3"
                      />
                      <text
                        x={node.x}
                        y={node.y + 4}
                        textAnchor="middle"
                        className="fill-slate-100 text-[11px] font-mono"
                      >
                        {node.label}
                      </text>

                      {nodePointers.map((ptr, pIdx) => (
                        <g
                          key={ptr.name}
                          transform={`translate(${node.x - 42}, ${node.y + 30 + pIdx * 24})`}
                        >
                          <rect
                            width="84"
                            height="20"
                            rx="4"
                            fill={ptr.type === 'head' ? '#F59E0B' : '#1E293B'}
                            stroke={ptr.type === 'head' ? '#F59E0B' : '#475569'}
                          />
                          <text
                            x="42"
                            y="14"
                            textAnchor="middle"
                            className={`text-[10px] font-mono font-semibold ${
                              ptr.type === 'head' ? 'fill-slate-950' : 'fill-slate-200'
                            }`}
                          >
                            {ptr.name}
                          </text>
                        </g>
                      ))}
                    </g>
                  );
                })}
              </svg>
            </div>
          )}

          {activeStep && (
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 font-mono text-xs">
              <div className="text-orange-300 mb-1">$ {activeStep.command}</div>
              {activeStep.output.map((l, i) => (
                <div key={i} className="text-slate-300">
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
          {activeStep?.explanation}
        </div>
      </div>
    );
  }

  if (slide.visualType === 'merge-comparison') {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
            <span className="text-xs font-semibold text-slate-200">
              Comparador Interactivo de Fusión (git merge)
            </span>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setMergeMode('fast-forward')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  mergeMode === 'fast-forward'
                    ? 'bg-orange-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Tipo 1: Fast-Forward
              </button>
              <button
                onClick={() => setMergeMode('three-way')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  mergeMode === 'three-way'
                    ? 'bg-orange-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Tipo 2: Three-Way Merge
              </button>
            </div>
          </div>

          {mergeMode === 'fast-forward' ? (
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-xs font-semibold text-emerald-400 mb-2">
                  Fast-Forward: main no tuvo commits nuevos mientras login avanzaba
                </div>
                <svg viewBox="0 0 520 150" className="w-full h-36">
                  <line x1="70" y1="75" x2="430" y2="75" stroke="#10B981" strokeWidth="3" />
                  {[
                    { id: 'c1', x: 70, label: 'c1' },
                    { id: 'c2', x: 190, label: 'c2 (antes main)' },
                    { id: 'c3', x: 310, label: 'c3 (login)' },
                    { id: 'c4', x: 430, label: 'c4 (main + login)' }
                  ].map((n, i) => (
                    <g key={n.id}>
                      <circle
                        cx={n.x}
                        cy="75"
                        r="20"
                        fill="#0F172A"
                        stroke={i === 3 ? '#10B981' : '#64748B'}
                        strokeWidth="3"
                      />
                      <text
                        x={n.x}
                        y="79"
                        textAnchor="middle"
                        className="fill-slate-100 text-xs font-mono"
                      >
                        {n.id}
                      </text>
                      <text
                        x={n.x}
                        y="115"
                        textAnchor="middle"
                        className="fill-slate-400 text-[10px] font-mono"
                      >
                        {n.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-xs font-mono text-slate-300">
{`$ git switch main
$ git merge login
Updating c2..c4
Fast-forward (No se crea ningún commit nuevo: main solo desliza su papelito hasta c4)`}
              </pre>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
                <div className="text-xs font-semibold text-amber-400 mb-2">
                  Three-Way Merge: Ambas ramas avanzaron y se unen en un Commit de Merge (M) con 2 padres
                </div>
                <svg viewBox="0 0 520 170" className="w-full h-40">
                  <line x1="70" y1="85" x2="180" y2="85" stroke="#64748B" strokeWidth="3" />
                  <line x1="180" y1="85" x2="310" y2="40" stroke="#0EA5E9" strokeWidth="3" />
                  <line x1="180" y1="85" x2="310" y2="130" stroke="#F97316" strokeWidth="3" />
                  <line x1="310" y1="40" x2="440" y2="85" stroke="#10B981" strokeWidth="3" />
                  <line x1="310" y1="130" x2="440" y2="85" stroke="#10B981" strokeWidth="3" />

                  <circle cx="70" cy="85" r="18" fill="#0F172A" stroke="#64748B" strokeWidth="3" />
                  <text x="70" y="89" textAnchor="middle" className="fill-slate-200 text-xs font-mono">c1</text>

                  <circle cx="180" cy="85" r="18" fill="#0F172A" stroke="#EAB308" strokeWidth="3" />
                  <text x="180" y="89" textAnchor="middle" className="fill-amber-300 text-xs font-mono">c2</text>
                  <text x="180" y="118" textAnchor="middle" className="fill-amber-300 text-[10px] font-mono">3. Ancestro</text>

                  <circle cx="310" cy="40" r="18" fill="#0F172A" stroke="#0EA5E9" strokeWidth="3" />
                  <text x="310" y="44" textAnchor="middle" className="fill-sky-300 text-xs font-mono">c3</text>
                  <text x="310" y="15" textAnchor="middle" className="fill-sky-300 text-[10px] font-mono">2. Destino (main)</text>

                  <circle cx="310" cy="130" r="18" fill="#0F172A" stroke="#F97316" strokeWidth="3" />
                  <text x="310" y="134" textAnchor="middle" className="fill-orange-300 text-xs font-mono">c4</text>
                  <text x="310" y="162" textAnchor="middle" className="fill-orange-300 text-[10px] font-mono">1. Origen (login)</text>

                  <circle cx="440" cy="85" r="21" fill="#064E3B" stroke="#10B981" strokeWidth="3" />
                  <text x="440" y="89" textAnchor="middle" className="fill-emerald-200 text-xs font-mono font-bold">M</text>
                  <text x="440" y="122" textAnchor="middle" className="fill-emerald-300 text-[10px] font-mono">Merge (2 padres)</text>
                </svg>
              </div>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-xs font-mono text-slate-300">
{`$ git switch main
$ git merge login
Merge made by the 'ort' strategy. (Crea el commit M que une c3 y c4)`}
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slide.visualType === 'conflict-markers') {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              Simulador de Resolución de Conflicto en colores.txt
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setConflictStep('raw')}
                className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 ${
                  conflictStep === 'raw'
                    ? 'bg-rose-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                1. Conflicto Detectado
              </button>
              <button
                onClick={() => setConflictStep('resolved')}
                className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 ${
                  conflictStep === 'resolved'
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                2. Borrar Marcadores + Commit
              </button>
              <button
                onClick={() => setConflictStep('aborted')}
                className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 ${
                  conflictStep === 'aborted'
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                Escape: merge --abort
              </button>
            </div>
          </div>

          {conflictStep === 'raw' && (
            <div className="space-y-3">
              <div className="bg-slate-950 border border-rose-500/40 rounded-lg p-4 font-mono text-xs space-y-1.5">
                <div className="text-slate-400 pb-1 border-b border-slate-800">
                  colores.txt — Unmerged paths (ambas ramas tocaron la línea 1)
                </div>
                <div className="bg-emerald-950/50 text-emerald-300 px-2 py-1 rounded">
                  &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Versión actual en main)
                </div>
                <div className="text-slate-100 pl-2">Color favorito: rojo</div>
                <div className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  ======= (Divisoria)
                </div>
                <div className="text-slate-100 pl-2">Color favorito: verde</div>
                <div className="bg-sky-950/50 text-sky-300 px-2 py-1 rounded">
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt; cambio-color (Versión de la rama entrante)
                </div>
              </div>
              <div className="text-xs text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                Git está en pausa. Ahora tú decides qué línea conservar y eliminas las marcas{' '}
                <code className="text-orange-300">&lt;&lt;&lt; === &gt;&gt;&gt;</code>.
              </div>
            </div>
          )}

          {conflictStep === 'resolved' && (
            <div className="space-y-3">
              <div className="bg-slate-950 border border-emerald-500/40 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="text-emerald-400 pb-1 border-b border-slate-800">
                  colores.txt — Limpio y sin marcadores
                </div>
                <div className="text-slate-100 py-1">Color favorito: rojo</div>
              </div>
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-xs font-mono text-emerald-300">
{`$ git diff --check
$ git add colores.txt
$ git commit -m "merge: resuelve conflicto eligiendo color rojo"
[main 9f4e2a1] merge: resuelve conflicto eligiendo color rojo`}
              </pre>
            </div>
          )}

          {conflictStep === 'aborted' && (
            <div className="space-y-3">
              <pre className="bg-slate-950 border border-amber-500/40 rounded-lg p-4 text-xs font-mono text-amber-300">
{`$ git merge --abort
$ git status
On branch main
nothing to commit, working tree clean`}
              </pre>
              <div className="text-xs text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                Botón de pánico ejecutado: todo volvió exactamente al segundo previo a intentar el merge, con cero consecuencias.
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slide.visualType === 'remote-sync') {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
            <span className="text-xs font-semibold text-slate-200">
              Sincronización Local ↔ Remoto (origin)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setRemoteAction('push')}
                className={`px-2.5 py-1 text-xs font-mono rounded whitespace-nowrap shrink-0 ${
                  remoteAction === 'push'
                    ? 'bg-orange-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                git push -u
              </button>
              <button
                onClick={() => setRemoteAction('fetch')}
                className={`px-2.5 py-1 text-xs font-mono rounded whitespace-nowrap shrink-0 ${
                  remoteAction === 'fetch'
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                git fetch
              </button>
              <button
                onClick={() => setRemoteAction('pull')}
                className={`px-2.5 py-1 text-xs font-mono rounded whitespace-nowrap shrink-0 ${
                  remoteAction === 'pull'
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                git pull
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-200">Tu Computadora (Git Local)</span>
                <span className="text-xs font-mono text-orange-400">rama: main</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">A</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">B</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="px-2.5 py-1 rounded bg-orange-500/20 border border-orange-500/50 text-orange-300">
                  C
                </span>
                {remoteAction === 'pull' && (
                  <>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-300">
                      D (fusionado)
                    </span>
                  </>
                )}
              </div>
              {remoteAction === 'fetch' && (
                <div className="mt-3 text-xs font-mono text-sky-300">
                  Puntero origin/main actualizado con D (tu rama local main sigue en C hasta que revises).
                </div>
              )}
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-200">Nube GitHub (Alias: origin)</span>
                <span className="text-xs font-mono text-sky-400">origin/main</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">A</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">B</span>
                {(remoteAction === 'push' || remoteAction === 'pull') && (
                  <>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    <span className="px-2.5 py-1 rounded bg-orange-500/20 border border-orange-500/50 text-orange-300">
                      C
                    </span>
                  </>
                )}
                {(remoteAction === 'fetch' || remoteAction === 'pull') && (
                  <>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    <span className="px-2.5 py-1 rounded bg-sky-500/20 border border-sky-500/50 text-sky-300">
                      D (de un colega)
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 font-mono text-xs text-slate-300">
            {remoteAction === 'idle' && (
              <span>
                Haz clic en <strong className="text-orange-400">git push -u</strong>,{' '}
                <strong className="text-sky-400">git fetch</strong> o{' '}
                <strong className="text-emerald-400">git pull</strong> arriba para simular el viaje de los commits.
              </span>
            )}
            {remoteAction === 'push' && (
              <span>
                $ git push -u origin main → Envía únicamente el commit C que le faltaba a GitHub y configura el seguimiento (--set-upstream).
              </span>
            )}
            {remoteAction === 'fetch' && (
              <span>
                $ git fetch origin → Descarga el commit D del servidor para que lo inspecciones, pero NO toca tu código de trabajo todavía.
              </span>
            )}
            {remoteAction === 'pull' && (
              <span>
                $ git pull origin main → Ejecuta git fetch + git merge en un solo paso, integrando D directamente en tu rama local.
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (slide.visualType === 'pr-lifecycle') {
    const stages = [
      { step: 1, label: '1. Rama', desc: 'git switch -c feature/login-google desde main/develop.' },
      { step: 2, label: '2. Commits', desc: 'Commits pequeños y atómicos con Conventional Commits.' },
      { step: 3, label: '3. Push + PR', desc: 'git push -u origin feature/login-google y abrir PR en GitHub.' },
      { step: 4, label: '4. Review', desc: 'Otro integrante revisa el diff (Start a review -> Request Changes o Approve).' },
      { step: 5, label: '5. Checks CI', desc: 'Pruebas automáticas pasan en verde y no hay conflictos con la base.' },
      { step: 6, label: '6. Merge + Clean', desc: 'Merge pull request en GitHub, Delete branch remota y git branch -d en local.' }
    ];
    const current = stages.find((s) => s.step === prStage) || stages[0];

    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              El Ciclo de Vida Completo de un Pull Request (#42)
            </span>
            <span className="text-xs font-mono text-emerald-400">main protegida con Ruleset</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-5">
            {stages.map((st) => (
              <button
                key={st.step}
                onClick={() => setPrStage(st.step)}
                className={`px-2 py-2 text-xs font-mono rounded border transition-colors text-center whitespace-nowrap shrink-0 ${
                  prStage === st.step
                    ? 'bg-orange-500 text-slate-950 border-orange-400 font-semibold'
                    : prStage > st.step
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-700/50'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">{current.label}</span>
              <span className="text-xs font-mono text-orange-400 tabular-nums">
                Etapa {current.step} de 6
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-3">{current.desc}</p>
            <div className="bg-slate-900 border border-slate-800 rounded p-3 font-mono text-xs text-slate-300">
              {prStage <= 3 && (
                <div>
                  $ git switch -c feature/login-google{'\n'}
                  $ git commit -m "feat(auth): agrega OAuth con Google"{'\n'}
                  $ git push -u origin feature/login-google
                </div>
              )}
              {prStage === 4 && (
                <div>
                  Reviewer comenta en auth/login.py:{'\n'}
                  "¿Qué te parece validar que email no sea None antes de crear el usuario?"{'\n'}
                  Autor ejecuta en la MISMA rama: git commit -am "fix: valida email" &amp;&amp; git push
                </div>
              )}
              {prStage >= 5 && (
                <div className="text-emerald-300">
                  ✓ 1 approving review by @colaborador · ✓ All checks have passed{'\n'}
                  Merge commit: "merge: integra login con Google (#42)" → Delete branch
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.visualType === 'rebase-alice-bob') {
    const aliceSteps = [
      {
        n: 1,
        title: '1. Estado Inicial',
        desc: 'Alice y Bob descargan la rama compartida feature/login. Ambos tienen A-B-C en main y D-E en feature/login.'
      },
      {
        n: 2,
        title: '2. Bob avanza y hace push',
        desc: 'Bob agrega el commit F a feature/login y ejecuta git push. GitHub ahora tiene D-E-F.'
      },
      {
        n: 3,
        title: '3. Alice hace pull',
        desc: 'Alice hace git pull y recibe F. Los tres (Bob, GitHub y Alice) tienen exactamente D-E-F.'
      },
      {
        n: 4,
        title: '4. El error de Alice: Rebase + Force Push',
        desc: 'Alice decide "limpiar" la rama compartida haciendo git rebase main y git push --force-with-lease. En GitHub mueren D, E, F y nacen D\', E\', F\' con otros hashes.'
      },
      {
        n: 5,
        title: '5. Explota el repositorio de Bob',
        desc: 'Bob intenta hacer git pull y su Git colapsa: su máquina tiene la historia vieja D-E-F y el remoto tiene otra línea divergente D\'-E\'-F\'.'
      }
    ];
    const currentAlice = aliceSteps.find((s) => s.n === aliceBobStep) || aliceSteps[0];

    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              Simulación de la Regla de Oro: El Desastre de Alice y Bob
            </span>
            <div className="flex items-center gap-1">
              {aliceSteps.map((s) => (
                <button
                  key={s.n}
                  onClick={() => setAliceBobStep(s.n)}
                  className={`px-2.5 py-1 text-xs font-mono rounded tabular-nums ${
                    aliceBobStep === s.n
                      ? 'bg-rose-500 text-slate-950 font-semibold'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Paso {s.n}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 font-mono text-xs">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
              <div className="font-sans font-semibold text-slate-200 mb-1">Bob (Local)</div>
              <div className="text-slate-400">
                {aliceBobStep === 1 && 'D → E'}
                {aliceBobStep >= 2 && aliceBobStep <= 4 && 'D → E → F'}
                {aliceBobStep === 5 && (
                  <span className="text-rose-400">
                    ¡Choque! Local D-E-F vs Remoto D&apos;-E&apos;-F&apos;
                  </span>
                )}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
              <div className="font-sans font-semibold text-sky-300 mb-1">GitHub (Remoto)</div>
              <div className="text-slate-400">
                {aliceBobStep === 1 && 'D → E'}
                {(aliceBobStep === 2 || aliceBobStep === 3) && 'D → E → F'}
                {aliceBobStep >= 4 && (
                  <span className="text-amber-300">Reescrito: D&apos; → E&apos; → F&apos;</span>
                )}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
              <div className="font-sans font-semibold text-orange-300 mb-1">Alice (Local)</div>
              <div className="text-slate-400">
                {aliceBobStep <= 2 && 'D → E (sin F)'}
                {aliceBobStep === 3 && 'D → E → F'}
                {aliceBobStep >= 4 && (
                  <span className="text-rose-300">rebase + push --force: D&apos;-E&apos;-F&apos;</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
            <div className="text-sm font-semibold text-white mb-1">{currentAlice.title}</div>
            <p className="text-xs text-slate-300">{currentAlice.desc}</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-emerald-300">
          Conclusión: Usa git rebase únicamente en tus ramas locales privadas antes de abrir el PR.
        </div>
      </div>
    );
  }

  if (slide.visualType === 'detach-stash-ignore') {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              Simulador de Pila LIFO (git stash)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setStashDemoStep((prev) => Math.min(prev + 1, 3))}
                className="px-2.5 py-1 text-xs font-mono bg-orange-500 text-slate-950 font-semibold rounded whitespace-nowrap shrink-0"
              >
                + git stash (Apilar)
              </button>
              <button
                onClick={() => setStashDemoStep((prev) => Math.max(prev - 1, 0))}
                className="px-2.5 py-1 text-xs font-mono bg-emerald-500 text-slate-950 font-semibold rounded whitespace-nowrap shrink-0"
              >
                ↑ git stash pop (Desapilar)
              </button>
              <button
                onClick={() => setStashDemoStep(0)}
                className="px-2 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded"
              >
                clear
              </button>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {stashDemoStep === 0 && (
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 text-center text-xs text-slate-400 font-mono">
                Pila de Stash vacía — Working tree clean. Pulsa &quot;+ git stash&quot; para apilar trabajo en progreso.
              </div>
            )}
            {stashDemoStep >= 3 && (
              <div className="bg-orange-500/15 border border-orange-500/50 rounded-lg p-3 flex items-center justify-between font-mono text-xs">
                <span className="text-orange-300 font-semibold">stash@&#123;0&#125; (Último en entrar)</span>
                <span className="text-slate-200">WIP on api: 91c2f3a endpoints</span>
              </div>
            )}
            {stashDemoStep >= 2 && (
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 flex items-center justify-between font-mono text-xs">
                <span className="text-sky-300">
                  stash@&#123;{stashDemoStep === 3 ? '1' : '0'}&#125;
                </span>
                <span className="text-slate-300">WIP on navbar: 3fa81bc menú móvil</span>
              </div>
            )}
            {stashDemoStep >= 1 && (
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">
                  stash@&#123;{stashDemoStep - 1}&#125;
                </span>
                <span className="text-slate-300">WIP on formulario: e4f5a6b login básico</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-300">
          Orden LIFO (Last In, First Out): cada nuevo git stash entra arriba como stash@&#123;0&#125; y renumera los anteriores.
        </div>
      </div>
    );
  }

  // Default for comparison-table, undo-matrix, tags-trunk
  if (slide.comparisonTable) {
    return (
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <span className="text-xs font-semibold text-slate-200">
              Tabla de Referencia Estructurada
            </span>
            <span className="text-xs font-mono text-slate-400">Estándar del Curso 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400">
                  {slide.comparisonTable.headers.map((h, i) => (
                    <th key={i} className="py-2.5 px-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-xs">
                {slide.comparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/60 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-2.5 px-3 ${
                          cIdx === 0
                            ? 'font-mono font-semibold text-orange-300 whitespace-nowrap'
                            : cIdx === 2
                            ? 'font-mono text-emerald-300'
                            : 'text-slate-200'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for tags-trunk visual
  return (
    <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <span className="text-xs font-semibold text-slate-200">
            El Tronco Vivo (Trunk-Based Development) + Git Tags Inmutables
          </span>
          <span className="text-xs font-mono text-amber-400 tabular-nums">v1.0.0 → v1.0.1</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 mb-4">
          <svg viewBox="0 0 540 165" className="w-full h-36">
            {/* Main trunk */}
            <line x1="40" y1="85" x2="500" y2="85" stroke="#10B981" strokeWidth="4" />
            {/* Short lived branches */}
            <path
              d="M 110 85 Q 145 30 180 30 L 220 30 Q 250 30 275 85"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2.5"
            />
            <path
              d="M 310 85 Q 340 135 370 135 L 410 135 Q 435 135 460 85"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2.5"
            />

            {[60, 110, 275, 310, 460].map((cx, i) => (
              <circle
                key={i}
                cx={cx}
                cy="85"
                r="10"
                fill="#0F172A"
                stroke="#10B981"
                strokeWidth="3"
              />
            ))}

            {/* Tag v1.0.0 */}
            <g transform="translate(245, 102)">
              <rect width="62" height="22" rx="4" fill="#451A03" stroke="#F59E0B" />
              <text x="31" y="15" textAnchor="middle" className="fill-amber-300 text-[10px] font-mono font-semibold">
                v1.0.0
              </text>
            </g>

            {/* Tag v1.0.1 */}
            <g transform="translate(430, 102)">
              <rect width="62" height="22" rx="4" fill="#451A03" stroke="#F59E0B" />
              <text x="31" y="15" textAnchor="middle" className="fill-amber-300 text-[10px] font-mono font-semibold">
                v1.0.1
              </text>
            </g>
          </svg>
        </div>

        <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-xs font-mono text-slate-300">
{`# El flujo Trunk-Based Development de memoria:
1. git pull origin main
2. git switch -c feature/login-button   # Rama efímera (horas, no semanas)
3. Commits pequeños + PR + CI en verde
4. Merge al tronco + git branch -d feature/login-button`}
        </pre>
      </div>
    </div>
  );
};
