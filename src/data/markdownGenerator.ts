import { COURSE_TIMESTAMPS, GUIDE_SECTIONS } from './courseChapters';
import { FINAL_PROJECT_PHASES, NOTAS_COLAB_RULES } from './finalProjectData';

export function generateRepositoryMarkdown(options?: {
  includeTimestamps?: boolean;
  includeFinalProject?: boolean;
  includeCheatsheet?: boolean;
}): string {
  const includeTimestamps = options?.includeTimestamps ?? true;
  const includeFinalProject = options?.includeFinalProject ?? true;
  const includeCheatsheet = options?.includeCheatsheet ?? true;

  const lines: string[] = [];

  lines.push('# Guía Completa de Aprendizaje Paso a Paso: Git & GitHub Masterclass (2026)');
  lines.push('');
  lines.push(
    '> **Manual técnico de estudio, referencia de comandos y guía práctica paso a paso.**  '
  );
  lines.push(
    '> Cubre desde el modelo mental interno de Git (`Working Directory`, `Staging Area`, `.git`, `HEAD`) hasta flujos colaborativos profesionales en GitHub (`Pull Requests`, `Rulesets`, `Rebase`, `Tags`, `Trunk-Based Development`) y el proyecto final integrador **"Notas Colab"** (Django + `uv`).'
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Qué vas a aprender en esta guía');
  lines.push('');
  lines.push('- **Commits, staging, ramas y `HEAD` por dentro**: por qué un commit es una foto completa y cómo funciona una rama como un puntero de 41 bytes.');
  lines.push('- **Merge, conflictos, rebase y cuándo usar cada uno**: diferencia entre *Fast-Forward*, *Three-Way Merge* y *Rebase*, lectura de marcadores `<<<<<<< ======= >>>>>>>` y la regla de oro de Alice y Bob.');
  lines.push('- **GitHub profesional**: repositorios remotos, alias `origin`, `git push -u`, `git fetch` vs `git pull`, Tokens de Acceso Personal (PAT), *Pull Requests*, *Code Review* y protección de ramas con *Rulesets*.');
  lines.push('- **Deshacer errores sin miedo**: `git diff`, `git restore`, `git commit --amend`, los 3 modos de `git reset` (`--soft`, `--mixed`, `--hard`), `git revert`, viajes con `--detach` y la pila `LIFO` de `git stash`.');
  lines.push('- **Flujo de equipo real con `main`, `develop`, `release` y `hotfix`**: simulación paso a paso de un equipo de 2 desarrolladores construyendo la app **Notas Colab**.');
  lines.push('');

  lines.push('## Índice de Módulos');
  lines.push('');
  GUIDE_SECTIONS.forEach((sec) => {
    lines.push(`- **[${sec.title}](#clase-${sec.classNumber})** *(${sec.timestampRange} · ${sec.duration})*`);
  });
  if (includeFinalProject) {
    lines.push('- **[Proyecto Final Paso a Paso: "Notas Colab" (Fases 0 a 8)](#proyecto-final-notas-colab)**');
  }
  if (includeCheatsheet) {
    lines.push('- **[Tabla Maestra de Comandos Rápidos (Cheatsheet)](#tabla-maestra-de-comandos)**');
  }
  lines.push('');

  if (includeTimestamps) {
    lines.push('---');
    lines.push('');
    lines.push('## Mapa Cronológico de Capítulos del Curso');
    lines.push('');
    lines.push('| Tiempo | Capítulo / Tema | Módulo |');
    lines.push('| :--- | :--- | :--- |');
    COURSE_TIMESTAMPS.forEach((item) => {
      lines.push(`| \`${item.time}\` | ${item.title} | Clase ${item.classNumber} |`);
    });
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  // Render all 11 classes in detail
  GUIDE_SECTIONS.forEach((sec) => {
    lines.push(`<a id="clase-${sec.classNumber}"></a>`);
    lines.push(`## ${sec.title}`);
    lines.push('');
    lines.push(`**Rango en el curso:** \`${sec.timestampRange}\` · **Duración:** ${sec.duration}`);
    lines.push('');
    lines.push(`> **Idea Clave de la Clase:** *"${sec.mentalModelQuote}"*`);
    lines.push('');
    lines.push(sec.summary);
    lines.push('');

    sec.concepts.forEach((concept) => {
      lines.push(`### ${concept.title}`);
      lines.push('');
      lines.push(concept.explanation);
      lines.push('');
      if (concept.analogy) {
        lines.push(`- **Analogía mental:** ${concept.analogy}`);
      }
      if (concept.keyRule) {
        lines.push(`- **Regla de oro:** ${concept.keyRule}`);
      }
      if (concept.analogy || concept.keyRule) {
        lines.push('');
      }
      if (concept.codeExample) {
        lines.push(`**Ejemplo práctico — ${concept.codeExample.title}:**`);
        lines.push('');
        lines.push(`\`\`\`${concept.codeExample.language}`);
        lines.push(concept.codeExample.code);
        lines.push('```');
        lines.push('');
        if (concept.codeExample.output) {
          lines.push('Salida / Resultado:');
          lines.push('```text');
          lines.push(concept.codeExample.output);
          lines.push('```');
          lines.push('');
        }
      }
    });

    lines.push(`### Comandos Clave de la Clase ${sec.classNumber}`);
    lines.push('');
    lines.push('| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |');
    lines.push('| :--- | :--- | :--- | :--- |');
    sec.commandsTable.forEach((cmd) => {
      lines.push(
        `| \`${cmd.command}\` | ${cmd.purpose} | \`${cmd.example}\` | ${cmd.zoneOrImpact} |`
      );
    });
    lines.push('');

    if (sec.pitfallsAndFixes.length > 0) {
      lines.push(`### Errores Frecuentes y Cómo Solucionarlos (Clase ${sec.classNumber})`);
      lines.push('');
      sec.pitfallsAndFixes.forEach((pf) => {
        lines.push(`- **Problema:** *${pf.problem}*`);
        lines.push(`  - **Por qué ocurre:** ${pf.whyItHappens}`);
        lines.push(`  - **Solución:** \`${pf.solutionCommand}\` — ${pf.explanation}`);
      });
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  });

  if (includeFinalProject) {
    lines.push('<a id="proyecto-final-notas-colab"></a>');
    lines.push('## Proyecto Final Paso a Paso: "Notas Colab" (Clases 10 y 11)');
    lines.push('');
    lines.push(
      'En este proyecto integrador construimos una aplicación web real en **Django** gestionada con **`uv`**, simulando un equipo de **dos desarrolladores** en una sola computadora mediante dos carpetas (`~/notas-colab` para tu **Cuenta Principal** y `~/notas-colab-companero` para tu **Cuenta de Colaborador**).'
    );
    lines.push('');
    lines.push('### Las 5 Reglas de Oro del Modelo `main` y `develop`');
    lines.push('');
    NOTAS_COLAB_RULES.forEach((r) => {
      lines.push(`${r.number}. **${r.title}**: ${r.description}`);
    });
    lines.push('');

    FINAL_PROJECT_PHASES.forEach((phase) => {
      lines.push(`### ${phase.title}`);
      lines.push('');
      lines.push(`- **Qué practicas aquí:** ${phase.skillsPracticed}`);
      lines.push('');

      phase.steps.forEach((step) => {
        lines.push(`#### Paso ${step.stepCode} [${step.role}] — ${step.title}`);
        lines.push('');
        if (step.ticketName && step.ticketQuote) {
          lines.push(`> **${step.ticketName}:** ${step.ticketQuote}`);
          lines.push('');
        }
        lines.push(step.explanation);
        lines.push('');
        if (step.warningNote) {
          lines.push(`> **Atención:** ${step.warningNote}`);
          lines.push('');
        }
        if (step.terminalCommands) {
          lines.push('```bash');
          lines.push(step.terminalCommands);
          lines.push('```');
          lines.push('');
        }
        if (step.fileEdits && step.fileEdits.length > 0) {
          step.fileEdits.forEach((fe) => {
            lines.push(`Archivo \`${fe.filePath}\`:`);
            lines.push('');
            lines.push(`\`\`\`${fe.language}`);
            lines.push(fe.content);
            lines.push('```');
            if (fe.note) {
              lines.push(`*Nota: ${fe.note}*`);
            }
            lines.push('');
          });
        }
        if (step.prTemplate) {
          lines.push(
            `**Plantilla del Pull Request en GitHub (\`${step.prTemplate.baseBranch} <- ${step.prTemplate.compareBranch}\`):**`
          );
          lines.push('');
          lines.push('```markdown');
          lines.push(`Título: ${step.prTemplate.title}`);
          lines.push('');
          lines.push(step.prTemplate.body);
          lines.push('```');
          lines.push('');
        }
      });

      lines.push(`**Checkpoint Fase ${phase.phaseNumber}:** ${phase.checkpointText}`);
      lines.push('');
      lines.push('---');
      lines.push('');
    });
  }

  if (includeCheatsheet) {
    lines.push('<a id="tabla-maestra-de-comandos"></a>');
    lines.push('## Tabla Maestra de Comandos Rápidos (Cheatsheet)');
    lines.push('');
    lines.push('| Categoría | Comando | Descripción |');
    lines.push('| :--- | :--- | :--- |');
    lines.push('| **Configuración** | `git config --global user.name "Nombre"` | Define tu nombre de autor global |');
    lines.push('| **Configuración** | `git config --global user.email "correo"` | Define tu correo de autor global |');
    lines.push('| **Básicos** | `git init` | Inicializa un nuevo repositorio Git en la carpeta actual |');
    lines.push('| **Básicos** | `git status` | Muestra el estado de archivos en Working Directory y Staging |');
    lines.push('| **Básicos** | `git add <archivo>` / `git add .` | Prepara un archivo o todos los cambios en el Staging Area |');
    lines.push('| **Básicos** | `git commit -m "tipo: mensaje"` | Toma una foto inmutable de lo que está en el Staging Area |');
    lines.push('| **Historial** | `git log --oneline --graph --all` | Muestra el grafo compacto de commits y todas las ramas |');
    lines.push('| **Ramas** | `git branch` | Lista las ramas locales y marca dónde está `HEAD` |');
    lines.push('| **Ramas** | `git switch -c <rama>` | Crea una rama nueva y mueve `HEAD` hacia ella |');
    lines.push('| **Ramas** | `git switch <rama>` | Cambia a una rama existente |');
    lines.push('| **Ramas** | `git branch -d <rama>` | Elimina una rama local ya fusionada |');
    lines.push('| **Fusión** | `git merge <rama>` | Une la rama indicada dentro de la rama donde estás parado |');
    lines.push('| **Fusión** | `git merge --abort` | Cancela un merge con conflictos y restaura el estado previo |');
    lines.push('| **Remotos** | `git clone <url>` | Descarga un repositorio remoto completo y configura `origin` |');
    lines.push('| **Remotos** | `git remote add origin <url>` | Conecta tu repositorio local con un servidor remoto |');
    lines.push('| **Remotos** | `git push -u origin <rama>` | Sube la rama al remoto y fija el seguimiento (`--set-upstream`) |');
    lines.push('| **Remotos** | `git fetch origin` | Descarga cambios del remoto sin mezclarlos con tu trabajo |');
    lines.push('| **Remotos** | `git pull origin <rama>` | Descarga cambios del remoto y hace merge inmediato (`fetch + merge`) |');
    lines.push('| **Inspección** | `git diff` / `git diff --staged` | Compara cambios sin preparar o cambios ya preparados en Staging |');
    lines.push('| **Deshacer** | `git restore <archivo>` | Descarta modificaciones locales en el Working Directory |');
    lines.push('| **Deshacer** | `git restore --staged <archivo>` | Saca un archivo del Staging Area sin perder tus cambios |');
    lines.push('| **Deshacer** | `git restore --source=HEAD~1 <archivo>` | Recupera la versión de un archivo desde un commit anterior |');
    lines.push('| **Deshacer** | `git commit --amend -m "..."` | Corrige el mensaje o agrega archivos olvidados al último commit local |');
    lines.push('| **Deshacer** | `git reset --soft HEAD~1` | Quita el último commit local dejando sus cambios listos en Staging |');
    lines.push('| **Deshacer** | `git reset --mixed HEAD~1` | Quita el último commit local dejando sus cambios en Working Directory |');
    lines.push('| **Deshacer** | `git reset --hard HEAD~1` | Quita el último commit local y elimina por completo sus cambios |');
    lines.push('| **Deshacer** | `git revert <hash>` | Crea un commit nuevo que anula otro commit (seguro en ramas compartidas) |');
    lines.push('| **Día a Día** | `git switch --detach <hash>` | Viaja a un commit o tag en modo solo lectura (`detached HEAD`) |');
    lines.push('| **Día a Día** | `git stash` / `git stash -u` | Guarda trabajo incompleto en la pila LIFO temporal |');
    lines.push('| **Día a Día** | `git stash pop` | Recupera el último stash (`stash@{0}`) y lo saca de la pila |');
    lines.push('| **Día a Día** | `git rm --cached <archivo>` | Deja de rastrear un archivo en Git sin borrarlo de tu disco |');
    lines.push('| **Avanzado** | `git rebase <rama-base>` | Reubica tus commits locales sobre la punta de otra rama (historia lineal) |');
    lines.push('| **Avanzado** | `git tag -a v1.0.0 -m "Mensaje"` | Crea un tag anotado permanente para marcar un release |');
    lines.push('| **Avanzado** | `git push origin v1.0.0` | Publica un tag en el repositorio remoto de GitHub |');
    lines.push('');
  }

  lines.push('---');
  lines.push('*Guía generada para repositorio GitHub — Curso Completo de Git & GitHub 2026.*');

  return lines.join('\n');
}
