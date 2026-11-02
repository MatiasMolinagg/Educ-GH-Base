import React, { useState, useMemo } from 'react';
import {
  Download,
  Copy,
  Check,
  Terminal,
  FileCode2,
  RotateCcw,
  Plus,
  ArrowRight,
  Layers,
  GitBranch,
  GitCommit
} from 'lucide-react';
import { generateRepositoryMarkdown } from '../data/markdownGenerator';

interface SimFile {
  name: string;
  workingVersion: number;
  stagedVersion: number | null;
  committedVersion: number | null;
}

interface SimCommit {
  hash: string;
  branch: string;
  message: string;
  filesSnapshot: Record<string, number>;
}

export const GitSandboxAndMarkdownView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'markdown' | 'sandbox'>('markdown');

  // Markdown generator options
  const [includeTimestamps, setIncludeTimestamps] = useState(true);
  const [includeFinalProject, setIncludeFinalProject] = useState(true);
  const [includeCheatsheet, setIncludeCheatsheet] = useState(true);
  const [copiedMd, setCopiedMd] = useState(false);

  const markdownContent = useMemo(
    () =>
      generateRepositoryMarkdown({
        includeTimestamps,
        includeFinalProject,
        includeCheatsheet
      }),
    [includeTimestamps, includeFinalProject, includeCheatsheet]
  );

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GUIA_COMPLETA_GIT_GITHUB_2026.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Interactive Git Sandbox State
  const [currentBranch, setCurrentBranch] = useState<'main' | 'feature/login'>('main');
  const [commitMsgInput, setCommitMsgInput] = useState('feat: actualiza modelos de notas');
  const [files, setFiles] = useState<SimFile[]>([
    { name: 'saludo.py', workingVersion: 1, stagedVersion: 1, committedVersion: 1 },
    { name: 'models.py', workingVersion: 2, stagedVersion: null, committedVersion: 1 },
    { name: 'views.py', workingVersion: 1, stagedVersion: null, committedVersion: null }
  ]);
  const [stashStack, setStashStack] = useState<Array<{ id: string; files: SimFile[] }>>([]);
  const [commits, setCommits] = useState<SimCommit[]>([
    {
      hash: 'a1b2c3d',
      branch: 'main',
      message: 'feat: primer commit con saludo y modelo base',
      filesSnapshot: { 'saludo.py': 1, 'models.py': 1 }
    }
  ]);
  const [terminalLog, setTerminalLog] = useState<string[]>([
    '$ git init && git commit -m "feat: primer commit con saludo y modelo base"',
    '[main (root-commit) a1b2c3d] feat: primer commit con saludo y modelo base'
  ]);

  const appendLog = (cmd: string, result: string) => {
    setTerminalLog((prev) => [...prev.slice(-9), `$ ${cmd}`, result]);
  };

  const editFileInWorking = (fileName: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.name === fileName ? { ...f, workingVersion: f.workingVersion + 1 } : f
      )
    );
    appendLog(
      `echo "cambio" >> ${fileName}`,
      `Archivo ${fileName} editado en Working Directory (nueva versión no preparada en Staging).`
    );
  };

  const stageFile = (fileName: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.name === fileName ? { ...f, stagedVersion: f.workingVersion } : f
      )
    );
    appendLog(
      `git add ${fileName}`,
      `Se congeló la foto actual de ${fileName} en el Staging Area.`
    );
  };

  const stageAll = () => {
    setFiles((prev) =>
      prev.map((f) => ({ ...f, stagedVersion: f.workingVersion }))
    );
    appendLog(
      'git add .',
      'Todos los archivos del Working Directory pasaron al Staging Area (verde).'
    );
  };

  const unstageFile = (fileName: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.name === fileName ? { ...f, stagedVersion: f.committedVersion } : f
      )
    );
    appendLog(
      `git restore --staged ${fileName}`,
      `${fileName} salió del Staging Area pero conserva tus cambios en el Working Directory.`
    );
  };

  const discardWorkingChanges = (fileName: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.name === fileName && f.committedVersion !== null
          ? { ...f, workingVersion: f.committedVersion, stagedVersion: f.committedVersion }
          : f
      )
    );
    appendLog(
      `git restore ${fileName}`,
      `Cambios locales de ${fileName} descartados; vuelve a la versión de HEAD.`
    );
  };

  const runCommit = () => {
    const hasStagedChanges = files.some(
      (f) => f.stagedVersion !== null && f.stagedVersion !== f.committedVersion
    );
    if (!hasStagedChanges) {
      appendLog(
        `git commit -m "${commitMsgInput}"`,
        'nothing to commit (prepara primero cambios con git add).'
      );
      return;
    }
    const newHash = Math.random().toString(16).substring(2, 9);
    const snapshot: Record<string, number> = {};
    setFiles((prev) =>
      prev.map((f) => {
        const nextCommitted = f.stagedVersion !== null ? f.stagedVersion : f.committedVersion;
        if (nextCommitted !== null) snapshot[f.name] = nextCommitted;
        return {
          ...f,
          committedVersion: nextCommitted
        };
      })
    );
    setCommits((prev) => [
      {
        hash: newHash,
        branch: currentBranch,
        message: commitMsgInput || 'feat: actualiza proyecto',
        filesSnapshot: snapshot
      },
      ...prev
    ]);
    appendLog(
      `git commit -m "${commitMsgInput}"`,
      `[${currentBranch} ${newHash}] ${commitMsgInput} (Foto guardada en .git/objects)`
    );
  };

  const runStash = () => {
    setStashStack((prev) => [
      { id: `stash@{0}`, files: JSON.parse(JSON.stringify(files)) },
      ...prev
    ]);
    setFiles((prev) =>
      prev
        .filter((f) => f.committedVersion !== null)
        .map((f) => ({
          ...f,
          workingVersion: f.committedVersion!,
          stagedVersion: f.committedVersion
        }))
    );
    appendLog(
      'git stash -u',
      `Saved working directory and index state WIP on ${currentBranch} -> working tree clean`
    );
  };

  const runStashPop = () => {
    if (stashStack.length === 0) {
      appendLog('git stash pop', 'No stash entries found.');
      return;
    }
    const [top, ...rest] = stashStack;
    setFiles(top.files);
    setStashStack(rest);
    appendLog(
      'git stash pop',
      'Cambios recuperados intactos en tu directorio y eliminados de la cima de la pila LIFO.'
    );
  };

  const runReset = (mode: 'soft' | 'mixed' | 'hard') => {
    if (commits.length <= 1) {
      appendLog(`git reset --${mode} HEAD~1`, 'Ya estás en el primer commit (root-commit).');
      return;
    }
    const [, ...remainingCommits] = commits;
    const targetCommit = remainingCommits[0];
    setCommits(remainingCommits);

    setFiles((prev) =>
      prev.map((f) => {
        const prevCommitVer = targetCommit.filesSnapshot[f.name] ?? null;
        if (mode === 'soft') {
          return { ...f, committedVersion: prevCommitVer };
        }
        if (mode === 'mixed') {
          return { ...f, committedVersion: prevCommitVer, stagedVersion: prevCommitVer };
        }
        return {
          ...f,
          committedVersion: prevCommitVer,
          stagedVersion: prevCommitVer,
          workingVersion: prevCommitVer ?? 1
        };
      })
    );
    appendLog(
      `git reset --${mode} HEAD~1`,
      mode === 'soft'
        ? 'HEAD retrocedió 1 commit. Tus cambios quedaron listos en Staging (verde).'
        : mode === 'mixed'
        ? 'HEAD retrocedió 1 commit. El Staging se vació pero tus cambios siguen en Working Dir.'
        : 'HEAD retrocedió 1 commit y todos los cambios del commit quitado fueron ELIMINADOS.'
    );
  };

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-8">
      {/* Sub-navigation Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('markdown')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeSubTab === 'markdown'
                ? 'bg-orange-500 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>Archivo Markdown (.MD) para subir a tu Repo</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sandbox')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeSubTab === 'sandbox'
                ? 'bg-orange-500 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Laboratorio Interactivo (3 Zonas + Stash + Reset)</span>
          </button>
        </div>

        {activeSubTab === 'markdown' && (
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyMarkdown}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              {copiedMd ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">¡Markdown copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar todo el .MD</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Descargar GUIA_COMPLETA_GIT_GITHUB_2026.md</span>
            </button>
          </div>
        )}
      </div>

      {activeSubTab === 'markdown' ? (
        <div className="space-y-6">
          <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Generador de Documentación Markdown (.md) para tu Repositorio de GitHub
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Listo para subir como <code className="text-orange-300">README.md</code> o{' '}
                  <code className="text-orange-300">GUIA_COMPLETA_GIT_GITHUB_2026.md</code> en tu
                  repositorio. Incluye todas las clases, bloques de código, tablas y el proyecto
                  final paso a paso.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTimestamps}
                    onChange={(e) => setIncludeTimestamps(e.target.checked)}
                    className="rounded accent-orange-500"
                  />
                  <span>Incluir Mapa de Tiempos (TXT)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeFinalProject}
                    onChange={(e) => setIncludeFinalProject(e.target.checked)}
                    className="rounded accent-orange-500"
                  />
                  <span>Incluir Proyecto Final Notas Colab</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCheatsheet}
                    onChange={(e) => setIncludeCheatsheet(e.target.checked)}
                    className="rounded accent-orange-500"
                  />
                  <span>Incluir Tabla Cheatsheet</span>
                </label>
              </div>
            </div>

            <div className="bg-[#090D16] border border-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>GUIA_COMPLETA_GIT_GITHUB_2026.md</span>
                <span className="tabular-nums">
                  {markdownContent.split('\n').length} líneas · Listo para GitHub
                </span>
              </div>
              <pre className="p-5 text-xs font-mono text-slate-200 max-h-[600px] overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {markdownContent}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Interactive Sandbox */}
          <div className="bg-[#131C31] border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Simulador en Vivo: Cómo viajan los archivos entre las 3 Zonas
                </h2>
                <p className="text-xs text-slate-300 mt-0.5">
                  Prueba en directo por qué <code className="text-orange-300">git add</code> congela
                  una versión, cómo funciona <code className="text-orange-300">git restore</code> y
                  qué diferencia a los 3 modos de <code className="text-orange-300">git reset</code>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentBranch((b) => (b === 'main' ? 'feature/login' : 'main'))
                  }
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-700 flex items-center gap-1.5"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>HEAD &rarr; {currentBranch} (Cambiar rama)</span>
                </button>
                <button
                  onClick={runStash}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700"
                >
                  git stash ({stashStack.length})
                </button>
                <button
                  onClick={runStashPop}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-700"
                >
                  git stash pop
                </button>
              </div>
            </div>

            {/* 3 Zones Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
              {/* Zone 1: Working Directory */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-sm font-semibold text-white">1. Working Directory</span>
                    <button
                      onClick={stageAll}
                      className="px-2.5 py-1 text-xs font-mono bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold rounded"
                    >
                      git add .
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {files.map((f) => {
                      const isUntracked = f.committedVersion === null && f.stagedVersion === null;
                      const isModified =
                        f.committedVersion !== null &&
                        f.workingVersion !== f.stagedVersion &&
                        f.workingVersion !== f.committedVersion;
                      return (
                        <div
                          key={f.name}
                          className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono font-semibold text-slate-100">
                              {f.name}{' '}
                              <span className="text-slate-400 tabular-nums">
                                (v{f.workingVersion})
                              </span>
                            </span>
                            <span
                              className={`font-mono text-[11px] ${
                                isUntracked
                                  ? 'text-rose-400'
                                  : isModified
                                  ? 'text-amber-400'
                                  : 'text-emerald-400'
                              }`}
                            >
                              {isUntracked
                                ? 'Untracked'
                                : isModified
                                ? 'Modified'
                                : 'Clean'}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <button
                              onClick={() => editFileInWorking(f.name)}
                              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-[11px]"
                            >
                              Editar (+v{f.workingVersion + 1})
                            </button>
                            <button
                              onClick={() => stageFile(f.name)}
                              className="px-2 py-1 rounded bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 font-mono text-[11px]"
                            >
                              git add
                            </button>
                            {f.committedVersion !== null &&
                              f.workingVersion !== f.committedVersion && (
                                <button
                                  onClick={() => discardWorkingChanges(f.name)}
                                  className="px-2 py-1 rounded bg-rose-950/50 hover:bg-rose-900/50 text-rose-300 font-mono text-[11px]"
                                >
                                  git restore
                                </button>
                              )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Zone 2: Staging Area */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-sm font-semibold text-white">2. Staging Area (Index)</span>
                    <span className="text-xs font-mono text-emerald-400">Listo para la foto</span>
                  </div>

                  <div className="space-y-2.5 mb-4">
                    {files.filter((f) => f.stagedVersion !== null).map((f) => {
                      const isStagedChange = f.stagedVersion !== f.committedVersion;
                      return (
                        <div
                          key={f.name}
                          className={`border rounded-lg p-3 text-xs ${
                            isStagedChange
                              ? 'bg-emerald-950/20 border-emerald-500/50'
                              : 'bg-slate-900/60 border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono font-semibold text-slate-100">
                              {f.name}{' '}
                              <span className="text-emerald-300 tabular-nums">
                                (Foto congelada: v{f.stagedVersion})
                              </span>
                            </span>
                            {isStagedChange && (
                              <span className="font-mono text-[11px] text-emerald-400">
                                Staged ✓
                              </span>
                            )}
                          </div>
                          {isStagedChange && (
                            <button
                              onClick={() => unstageFile(f.name)}
                              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-[11px]"
                            >
                              git restore --staged
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <input
                    type="text"
                    value={commitMsgInput}
                    onChange={(e) => setCommitMsgInput(e.target.value)}
                    placeholder="Mensaje de commit..."
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-1.5 text-xs font-mono text-slate-100"
                  />
                  <button
                    onClick={runCommit}
                    className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono"
                  >
                    git commit -m &quot;{commitMsgInput}&quot;
                  </button>
                </div>
              </div>

              {/* Zone 3: Repository (.git) */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <span className="text-sm font-semibold text-white">3. Repository (.git)</span>
                    <span className="text-xs font-mono text-orange-400 tabular-nums">
                      {commits.length} commits
                    </span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                    {commits.map((c, idx) => (
                      <div
                        key={c.hash}
                        className={`p-3 rounded-lg border text-xs font-mono ${
                          idx === 0
                            ? 'bg-orange-500/10 border-orange-500/40'
                            : 'bg-slate-900 border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-orange-300 font-semibold tabular-nums">
                            {c.hash}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {idx === 0 ? `HEAD -> ${c.branch}` : c.branch}
                          </span>
                        </div>
                        <div className="text-slate-200 font-sans text-xs">{c.message}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    Probar los 3 modos de git reset HEAD~1:
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => runReset('soft')}
                      className="py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono text-[11px]"
                    >
                      --soft
                    </button>
                    <button
                      onClick={() => runReset('mixed')}
                      className="py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-[11px]"
                    >
                      --mixed
                    </button>
                    <button
                      onClick={() => runReset('hard')}
                      className="py-1.5 rounded bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 font-mono text-[11px]"
                    >
                      --hard
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Terminal Console */}
            <div className="bg-[#090D16] border border-slate-800 rounded-xl p-4 font-mono text-xs">
              <div className="text-slate-400 pb-2 mb-2 border-b border-slate-800">
                Salida de Terminal en Vivo
              </div>
              <div className="space-y-1 text-slate-300">
                {terminalLog.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.startsWith('$') ? 'text-orange-300 font-semibold mt-1' : 'text-slate-300'
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
