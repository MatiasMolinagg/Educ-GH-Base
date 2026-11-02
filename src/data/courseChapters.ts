export interface TimestampItem {
  time: string;
  title: string;
  classNumber: number;
}

export interface TerminalStep {
  command: string;
  output: string[];
  explanation: string;
  zoneHighlight?: 'working' | 'staging' | 'repo' | 'remote';
  graphState?: {
    nodes: Array<{
      id: string;
      label: string;
      branch: 'main' | 'feature' | 'develop' | 'hotfix' | 'orphan';
      x: number;
      y: number;
      parent?: string;
      secondParent?: string;
      isCommitMerge?: boolean;
    }>;
    pointers: Array<{
      name: string;
      target: string;
      type: 'branch' | 'head' | 'tag' | 'remote';
    }>;
  };
}

export interface SlideItem {
  id: string;
  classNumber: number;
  slideIndex: string;
  sectionKicker: string;
  title: string;
  subtitle: string;
  keyTakeaway: string;
  speakerNotes: string;
  visualType:
    | 'three-zones'
    | 'snapshot-diff'
    | 'terminal-sim'
    | 'branch-pointer'
    | 'merge-comparison'
    | 'conflict-markers'
    | 'remote-sync'
    | 'pr-lifecycle'
    | 'undo-matrix'
    | 'detach-stash-ignore'
    | 'rebase-alice-bob'
    | 'tags-trunk'
    | 'comparison-table';
  bullets: Array<{
    heading: string;
    body: string;
    code?: string;
    badgeText?: string;
    statusType?: 'nominal' | 'warning' | 'danger' | 'info';
  }>;
  terminalSteps?: TerminalStep[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface GuideSection {
  id: string;
  classNumber: number;
  title: string;
  duration: string;
  timestampRange: string;
  summary: string;
  mentalModelQuote: string;
  pdfAssetPath: string;
  timestamps: TimestampItem[];
  concepts: Array<{
    title: string;
    explanation: string;
    analogy?: string;
    keyRule?: string;
    codeExample?: {
      title: string;
      language: string;
      code: string;
      output?: string;
    };
  }>;
  commandsTable: Array<{
    command: string;
    purpose: string;
    example: string;
    zoneOrImpact: string;
  }>;
  pitfallsAndFixes: Array<{
    problem: string;
    whyItHappens: string;
    solutionCommand: string;
    explanation: string;
  }>;
}

export const COURSE_TIMESTAMPS: TimestampItem[] = [
  { time: '0:00:00', title: 'CLASE 1 · Qué es Git', classNumber: 1 },
  { time: '0:01:45', title: 'Versionar a mano con .zip', classNumber: 1 },
  { time: '0:04:14', title: 'Git: una máquina de tomar fotos', classNumber: 1 },
  { time: '0:06:53', title: 'Un commit es una foto completa', classNumber: 1 },
  { time: '0:11:37', title: 'Working directory, staging y repositorio', classNumber: 1 },
  { time: '0:18:00', title: 'git init y la carpeta .git', classNumber: 1 },
  { time: '0:28:46', title: 'Por qué existe el staging', classNumber: 1 },
  { time: '0:33:20', title: 'CLASE 2 · Instalar y configurar Git', classNumber: 2 },
  { time: '0:40:18', title: 'user.name y user.email', classNumber: 2 },
  { time: '0:46:11', title: 'Primer repo por consola', classNumber: 2 },
  { time: '0:55:01', title: 'Buenos mensajes de commit', classNumber: 2 },
  { time: '0:57:31', title: 'Conventional Commits', classNumber: 2 },
  { time: '1:01:50', title: 'Commits desde VS Code', classNumber: 2 },
  { time: '1:10:42', title: 'CLASE 3 · Ramas', classNumber: 3 },
  { time: '1:17:23', title: 'Una rama no copia el proyecto', classNumber: 3 },
  { time: '1:20:40', title: '.git/refs/heads por dentro', classNumber: 3 },
  { time: '1:25:41', title: 'Qué es HEAD', classNumber: 3 },
  { time: '1:27:16', title: 'git switch vs checkout', classNumber: 3 },
  { time: '1:28:29', title: 'Cómo nombrar ramas', classNumber: 3 },
  { time: '1:34:31', title: 'Crear y usar ramas', classNumber: 3 },
  { time: '1:54:56', title: 'CLASE 4 · Merge y conflictos', classNumber: 4 },
  { time: '2:00:01', title: 'Fast-forward', classNumber: 4 },
  { time: '2:02:46', title: 'Three-way merge', classNumber: 4 },
  { time: '2:06:48', title: 'Cuándo aparece un conflicto', classNumber: 4 },
  { time: '2:08:13', title: 'Leer los marcadores', classNumber: 4 },
  { time: '2:20:58', title: 'Resolver un conflicto real', classNumber: 4 },
  { time: '2:30:46', title: 'CLASE 5 · Git vs GitHub', classNumber: 5 },
  { time: '2:36:18', title: 'Local vs remoto', classNumber: 5 },
  { time: '2:39:25', title: 'Qué es origin', classNumber: 5 },
  { time: '2:46:43', title: 'clone vs remote add', classNumber: 5 },
  { time: '2:49:36', title: 'git push -u', classNumber: 5 },
  { time: '2:53:07', title: 'fetch vs pull', classNumber: 5 },
  { time: '2:54:15', title: 'Subir el repo a GitHub', classNumber: 5 },
  { time: '2:59:03', title: 'Token de acceso personal', classNumber: 5 },
  { time: '3:05:12', title: 'fetch y merge manual', classNumber: 5 },
  { time: '3:08:28', title: 'CLASE 6 · Pull requests', classNumber: 6 },
  { time: '3:13:36', title: 'Ciclo de un PR', classNumber: 6 },
  { time: '3:17:02', title: 'Cómo revisar un PR', classNumber: 6 },
  { time: '3:27:43', title: 'Proteger main con un ruleset', classNumber: 6 },
  { time: '3:33:44', title: 'Crear el pull request', classNumber: 6 },
  { time: '3:35:52', title: 'Revisión y cambios pedidos', classNumber: 6 },
  { time: '3:43:38', title: 'CLASE 7 · Deshacer cambios', classNumber: 7 },
  { time: '3:52:20', title: 'git diff en vivo', classNumber: 7 },
  { time: '3:57:47', title: 'git restore', classNumber: 7 },
  { time: '4:11:54', title: 'git commit --amend', classNumber: 7 },
  { time: '4:17:00', title: 'reset soft, mixed y hard', classNumber: 7 },
  { time: '4:26:42', title: 'git revert', classNumber: 7 },
  { time: '4:29:22', title: 'CLASE 8 · Detach, stash, .gitignore', classNumber: 8 },
  { time: '4:34:05', title: 'Commits huérfanos', classNumber: 8 },
  { time: '4:46:38', title: 'git stash', classNumber: 8 },
  { time: '4:53:23', title: 'Hotfix urgente con stash', classNumber: 8 },
  { time: '5:00:47', title: '.gitignore', classNumber: 8 },
  { time: '5:03:42', title: 'CLASE 9 · Rebase, tags, trunk-based', classNumber: 9 },
  { time: '5:18:15', title: 'Nunca rebase en ramas compartidas', classNumber: 9 },
  { time: '5:22:30', title: 'Rebase antes del PR', classNumber: 9 },
  { time: '5:28:29', title: 'Tags', classNumber: 9 },
  { time: '5:38:03', title: 'Trunk-based development', classNumber: 9 },
  { time: '5:41:09', title: 'CLASE 10 · Proyecto final 1', classNumber: 10 },
  { time: '5:44:13', title: 'Proyecto con uv y Django', classNumber: 10 },
  { time: '5:57:58', title: 'GitHub y rama develop', classNumber: 10 },
  { time: '6:01:16', title: 'Segundo desarrollador', classNumber: 10 },
  { time: '6:06:02', title: 'Proteger main y develop', classNumber: 10 },
  { time: '6:10:23', title: 'Requerimiento 1 y PR', classNumber: 10 },
  { time: '6:25:15', title: 'Revisión con cambios', classNumber: 10 },
  { time: '6:34:23', title: 'Requerimiento 2', classNumber: 10 },
  { time: '6:39:41', title: 'Conflicto por no hacer pull', classNumber: 10 },
  { time: '6:48:28', title: 'CLASE 11 · Proyecto final 2', classNumber: 11 },
  { time: '6:59:41', title: 'git rebase develop', classNumber: 11 },
  { time: '7:07:40', title: 'git stash con bug urgente', classNumber: 11 },
  { time: '7:20:51', title: 'git reset en local', classNumber: 11 },
  { time: '7:23:33', title: 'Revert desde GitHub', classNumber: 11 },
  { time: '7:30:07', title: 'Release v1.0.0 y tag', classNumber: 11 },
  { time: '7:37:19', title: 'Hotfix en producción', classNumber: 11 },
  { time: '7:42:37', title: 'Tag v1.0.1 y cierre', classNumber: 11 }
];

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 'clase-01',
    classNumber: 1,
    title: 'Clase 01 · Cómo piensa Git: Working Directory, Staging y Repositorio',
    duration: '33 min',
    timestampRange: '0:00:00 – 0:33:19',
    summary:
      'El modelo mental fundamental de Git: por qué versionar con archivos .zip fracasa, qué significa un sistema de control de versiones distribuido (DVCS), por qué un commit es una foto completa del proyecto y cómo operan las 3 áreas más los 4 estados de un archivo.',
    mentalModelQuote:
      'Un commit no guarda una lista de lo que cambiaste: toma una foto del estado completo de todo tu proyecto en ese instante. Las diferencias (+5 -2) Git las calcula después.',
    pdfAssetPath:
      '/assets/aistudio/Clase_01_-_Curso_Git_2026___01__Working_Directory__Staging_y_Repositorio_b151263c.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 1),
    concepts: [
      {
        title: '1.1 El dolor que Git resuelve (El síndrome del archivo .zip)',
        explanation:
          'Antes de usar un sistema de control de versiones, todos hemos tenido carpetas con archivos como proyecto.zip, proyecto_final.zip, proyecto_final_BUENO.zip y proyecto_final_BUENO_v2_estavezsi.zip. Este enfoque manual fracasa por tres razones críticas: (1) No sabes qué líneas exactas cambiaron de una versión a otra, (2) Dos personas no pueden trabajar en paralelo sobre los mismos archivos sin pisarse el trabajo, y (3) No existe forma de volver atrás con seguridad si un cambio nuevo rompe lo que ya funcionaba.',
        analogy:
          'Guardar zips manuales es como fotocopiar un libro entero sin anotar qué página corregiste ni quién hizo la corrección.',
        keyRule:
          'Git fue diseñado por Linus Torvalds en 2005 para mantener el kernel de Linux con eficiencia, velocidad e integridad criptográfica (SHA-1) sobre miles de archivos.'
      },
      {
        title: '1.2 VCS Local vs Centralizado vs Distribuido (DVCS)',
        explanation:
          'En un sistema de control de versiones Centralizado (CVCS como Subversion), existe un único servidor con la base de datos histórica y las computadoras locales solo descargan la última foto; si el servidor cae o no tienes internet, no puedes hacer commits ni ver la historia. Git es un Sistema de Control de Versiones Distribuido (DVCS): cada desarrollador que clona el proyecto tiene una copia completa del repositorio con toda su historia, todas sus fotos y todas sus ramas en su propio disco duro.',
        analogy:
          'No hay un único servidor con "la verdad única". Cada copia del repositorio en cada computadora contiene el álbum fotográfico completo desde el primer commit.',
        keyRule:
          'Git funciona 100% en tu máquina local y no requiere internet ni cuenta en ninguna plataforma para crear commits, ramas o viajar en el tiempo.'
      },
      {
        title: '1.3 La Idea del Día: Git piensa en Fotos (Snapshots), no en Diferencias',
        explanation:
          'Mucha gente cree que un commit guarda únicamente la lista de líneas agregadas o borradas. Ese es el modelo equivocado. En realidad, cada vez que haces git commit, Git toma una instantánea (snapshot) de cómo están TODOS los archivos rastreados del proyecto en ese momento y la guarda en un álbum cronológico. Si un archivo no cambió entre el commit A y el commit B, Git no lo duplica en el disco: guarda un enlace al archivo idéntico anterior para no llenar el almacenamiento.',
        analogy:
          '¿Y el "+2 -2" en verde y rojo que muestra GitHub? Esas diferencias no estaban guardadas: Git resta la Foto B menos la Foto A en tiempo real cuando se lo pides.',
        codeExample: {
          title: 'Cómo calcula Git las diferencias entre dos fotos completas',
          language: 'python',
          code: `# Foto Commit A (Ayer - Estado completo guardado)
def saludar():
    print("hola")
# fin

# Foto Commit B (Hoy - Estado completo guardado)
def saludar():
    print("hola!")
    log("ok")`,
          output: `# Resultado calculado al vuelo por Git (diff A -> B):
 def saludar():
-    print("hola")
+    print("hola!")
+    log("ok")
-# fin`
        }
      },
      {
        title: '1.4 Las 3 Áreas de Git y los 4 Estados de los Archivos',
        explanation:
          'Tus archivos viven y viajan a través de tres zonas locales: (1) Working Directory (Directorio de trabajo): tu carpeta normal donde creas, editas y borras archivos; (2) Staging Area (Área de preparación o Index): la zona intermedia donde eliges y agrupas exactamente qué cambios entrarán en la próxima foto usando git add; (3) Repository (.git directory): la base de datos donde quedan guardadas las fotos inmutables para siempre al ejecutar git commit. Dentro de este flujo, un archivo puede estar en 4 estados: Untracked (nuevo, Git no lo sigue, aparece en rojo), Modified (rastreado pero modificado respecto a la última foto, en rojo), Staged (preparado en el área de ensayo listo para la próxima foto, en verde) y Committed (confirmado y seguro dentro de .git).',
        analogy:
          'Imagina una fiesta: el Working Directory es la pista de baile donde todos se mueven; el Staging Area es cuando dices "ustedes tres, párense frente a la cámara"; y el Repository (.git) es la foto ya disparada y pegada en el álbum.',
        codeExample: {
          title: 'El viaje completo de un archivo por las 3 zonas',
          language: 'bash',
          code: `git init
echo "Hola Git" > saludo.txt
git status                # 1. Working Directory -> Untracked (rojo)
git add saludo.txt
git status                # 2. Staging Area -> Changes to be committed (verde)
git commit -m "Mi primer commit"
git status                # 3. Repository -> nothing to commit, working tree clean`,
          output: `[master (root-commit) a3f5c9e] Mi primer commit
 1 file changed, 1 insertion(+)
 create mode 100644 saludo.txt`
        }
      },
      {
        title: '1.5 El Momento "AHHH": git add NO guarda el archivo, congela el momento',
        explanation:
          'Uno de los errores más frecuentes al empezar es pensar que git add "agrega el archivo a una lista de nombres". En realidad, git add toma una copia exacta del contenido que tiene el archivo en el instante en que ejecutas git add y la pone en el Staging Area. Si editas saludo.txt a la versión v1, haces git add saludo.txt, luego vuelves a editar saludo.txt a la versión v2 y haces git commit sin volver a hacer git add, la foto del commit saldrá con v1 (lo que estaba en staging), mientras v2 se queda afuera en el Working Directory.',
        keyRule:
          '¿Por qué existen dos pasos (add y commit)? Porque el Staging Area es un superpoder: si tocaste 5 archivos pero 3 son del diseño y 2 corrigen un bug, puedes hacer git add de los primeros 3 para un commit limpio, y luego git add de los otros 2 para otro commit separado.'
      },
      {
        title: '1.6 Qué hay dentro de la carpeta oculta .git',
        explanation:
          'Al ejecutar git init nace una subcarpeta oculta llamada .git. Es la caja negra del avión y jamás debes editar sus archivos internos a mano. Contiene: objects/ (la base de datos donde viven todas las fotos y contenidos comprimidos), refs/ (los punteros a las ramas y tags), HEAD (el archivo que indica en qué rama o commit estás parado ahora mismo), config (la configuración local de ese repositorio) y hooks/ (scripts automáticos que se disparan antes o después de eventos como commit o push).',
        codeExample: {
          title: 'Inspeccionando el álbum con git log',
          language: 'bash',
          code: `# Ver historial completo con autor, fecha, hash completo y mensaje:
git log

# Ver historial compacto (una foto por línea con hash corto de 7 caracteres):
git log --oneline`,
          output: `a3f5c9e (HEAD -> master) Agrego una línea
7b1e4d2 Mi primer commit
# Nota: Si la terminal "se pega" en (END) con muchos commits, presiona la tecla 'q' para salir del paginador.`
        }
      }
    ],
    commandsTable: [
      {
        command: 'git init',
        purpose: 'Inicializa un repositorio Git vacío en la carpeta actual creando el directorio oculto .git/',
        example: 'git init',
        zoneOrImpact: 'Crea Repository (.git)'
      },
      {
        command: 'git status',
        purpose: 'Muestra el estado actual de los archivos (Untracked, Modified, Staged) y la rama activa',
        example: 'git status',
        zoneOrImpact: 'Solo lectura (Inspección)'
      },
      {
        command: 'git add <archivo>',
        purpose: 'Congela el estado actual de un archivo y lo lleva al Staging Area para el próximo commit',
        example: 'git add saludo.txt',
        zoneOrImpact: 'Working Dir → Staging Area'
      },
      {
        command: 'git add .',
        purpose: 'Prepara todos los archivos nuevos (untracked) y modificados del directorio actual en Staging',
        example: 'git add .',
        zoneOrImpact: 'Working Dir → Staging Area'
      },
      {
        command: 'git add -u',
        purpose: 'Agrega al Staging Area únicamente los archivos que ya estaban en tracking y fueron modificados o borrados (ignora untracked nuevos)',
        example: 'git add -u',
        zoneOrImpact: 'Tracked Modified → Staging'
      },
      {
        command: 'git commit -m "Mensaje"',
        purpose: 'Toma la foto definitiva de todo lo que está en el Staging Area y la guarda en el repositorio local',
        example: 'git commit -m "feat: agrega archivo de saludo"',
        zoneOrImpact: 'Staging Area → Repository (.git)'
      },
      {
        command: 'git log --oneline',
        purpose: 'Abre el álbum de fotos mostrando un commit por línea con su código hash único',
        example: 'git log --oneline',
        zoneOrImpact: 'Solo lectura (Historial)'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Modifiqué un archivo después de hacer git add y mi cambio nuevo no salió en el commit',
        whyItHappens: 'git add preparó la versión anterior del archivo en el Staging Area; la edición nueva quedó en el Working Directory.',
        solutionCommand: 'git add <archivo> && git commit -m "Actualiza cambio"',
        explanation: 'Siempre que edites un archivo tras haber hecho git add, debes volver a ejecutar git add antes de commitear.'
      },
      {
        problem: 'Ejecuté git log y la terminal quedó bloqueada mostrando ":" o "(END)" al final',
        whyItHappens: 'Cuando el historial no entra en una pantalla, Git abre el paginador less.',
        solutionCommand: 'Presionar la tecla q',
        explanation: 'La letra q (quit) cierra inmediatamente el paginador y te devuelve el control del prompt.'
      }
    ]
  },
  {
    id: 'clase-02',
    classNumber: 2,
    title: 'Clase 02 · Instalación, Configuración de Identidad y Conventional Commits',
    duration: '37 min',
    timestampRange: '0:33:20 – 1:10:41',
    summary:
      'Cómo instalar Git en Windows, macOS y Linux, configurar la firma de autor global y local, ejecutar el primer ciclo real de trabajo y dominar la escritura de mensajes profesionales con Conventional Commits y asistencia de IA.',
    mentalModelQuote:
      'Cada commit sale firmado para siempre con tu nombre, correo y fecha. Y un buen mensaje no dice "cambios": dice qué hace el commit en modo imperativo y por qué se tomó esa decisión.',
    pdfAssetPath:
      '/assets/aistudio/Clase_02_-_Curso_Git_2026__02_Instalaci_n__configuraci_n_y_tu_primer_commit_72bcd404.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 2),
    concepts: [
      {
        title: '2.1 Instalación multiplataforma y por qué Git vive en la terminal',
        explanation:
          'Git no es una aplicación con ventanas ni iconos de escritorio: es una herramienta de línea de comandos (CLI). Se instala distinto según el sistema operativo (winget o git-scm.com en Windows, Homebrew en macOS, apt en Ubuntu/Debian), pero en los tres sistemas el destino es idéntico: que al abrir una terminal y escribir git --version responda con git version 2.x.x. Aprendemos primero por consola a propósito: cuando entiendes qué pasa por dentro en la terminal, cualquier interfaz gráfica (VS Code, GitHub Desktop, SourceTree, GitKraken) resulta obvia.',
        codeExample: {
          title: 'Instalación y verificación en los 3 sistemas operativos',
          language: 'bash',
          code: `# Windows (PowerShell con winget o descargando Git Bash desde git-scm.com):
winget install --id Git.Git -e --source winget

# macOS (Terminal con Homebrew):
brew install git

# Linux Ubuntu / Debian (Bash):
sudo apt update && sudo apt install git -y

# Verificación universal en cualquier sistema:
git --version`,
          output: `git version 2.45.1`
        }
      },
      {
        title: '2.2 Configurar tu Identidad: ¿Quién firma la foto?',
        explanation:
          'Antes de tomar tu primera foto, Git necesita saber tu nombre y tu correo electrónico. Esto NO es iniciar sesión ni crear una cuenta, y no lleva contraseña: es simplemente decirle a la cámara qué nombre y correo debe grabar dentro de los metadatos de cada commit. Si usas el flag --global, la configuración se guarda en tu usuario del sistema operativo (~/.gitconfig) y se aplica a todos los proyectos de tu máquina. Si omites --global dentro de un repositorio específico, se guarda en .git/config solo para esa carpeta (y la configuración local siempre le gana a la global, ideal para separar cuenta laboral o simular un segundo colaborador).',
        keyRule:
          'Cuando más adelante conectes con GitHub, usa el mismo correo electrónico con el que registraste tu cuenta de GitHub para que la plataforma enlace tus commits con tu perfil.',
        codeExample: {
          title: 'Configurar identidad global y verificarla',
          language: 'bash',
          code: `# Configuración global (una sola vez por computadora):
git config --global user.name "Ada Lovelace"
git config --global user.email "ada@correo.com"

# Configurar editor por defecto (opcional, ej. VS Code) y rama inicial main:
git config --global init.defaultBranch main

# Verificar los datos configurados:
git config --list`,
          output: `user.name=Ada Lovelace
user.email=ada@correo.com
init.defaultbranch=main`
        }
      },
      {
        title: '2.3 Las 3 Reglas de un Buen Mensaje de Commit',
        explanation:
          'Escribir git commit -m "cambios" o "cosas" o "arreglos" no le sirve a nadie, ni siquiera a ti mismo dentro de tres semanas cuando busques en qué momento se introdujo un error. Un mensaje profesional cumple tres principios: (1) Modo imperativo: escríbelo como una orden o completando la frase "Si se aplica, este commit..." (Ejemplo: "Agrega validación" o "Corrige el cálculo de impuestos", nunca "Agregué" ni "Agregando"); (2) Conciso arriba: la primera línea debe ser corta y directa (idealmente menos de 50-72 caracteres) porque es el título que aparece en git log --oneline; (3) El porqué, no el cómo: el código fuente ya muestra qué líneas cambiaron; si el cambio no es obvio, usa el cuerpo del mensaje para explicar la razón de negocio.',
        codeExample: {
          title: 'Comparativa entre malos y buenos mensajes de commit',
          language: 'bash',
          code: `# ❌ Malos mensajes (no dicen qué cambió ni por qué):
git commit -m "cambios"
git commit -m "arreglo bug"
git commit -m "Agregué cosas en el carrito"

# ✅ Buenos mensajes (imperativos, claros y específicos):
git commit -m "Agrega validación de correo en registro"
git commit -m "Corrige el cálculo de impuestos en el carrito"`
        }
      },
      {
        title: '2.4 Conventional Commits: El estándar de la industria',
        explanation:
          'Conventional Commits (conventionalcommits.org) es la convención profesional que estructura el mensaje empezando con una palabra clave seguida de un ámbito opcional y dos puntos: tipo(scope): descripción. Permite leer el historial de un vistazo y automatizar la generación de versiones (Semantic Versioning) y changelogs. Con solo dos tipos (feat y fix) cubres el 80% de tu trabajo diario, y el resto te da precisión quirúrgica.',
        codeExample: {
          title: 'Estructura y catálogo completo de Conventional Commits',
          language: 'bash',
          code: `# Estructura oficial:
# <tipo>(<scope opcional>): <descripción en imperativo>

git commit -m "feat(auth): agrega login con Google OAuth"
git commit -m "fix(carrito): corrige redondeo de IVA al aplicar cupón"
git commit -m "docs: actualiza guía de instalación en README"
git commit -m "style: formatea indentación sin cambiar lógica"
git commit -m "refactor(api): simplifica consulta de usuarios"
git commit -m "perf: optimiza carga de imágenes en catálogo"
git commit -m "test: agrega pruebas unitarias para conversor"
git commit -m "build: actualiza dependencia de Django a 5.1"
git commit -m "ci: configura pipeline de GitHub Actions"
git commit -m "chore: actualiza reglas de .gitignore"
git commit -m "feat!: cambia respuesta de API v2 (Breaking Change)"`
        }
      },
      {
        title: '2.5 Herramientas de IA y Commits en 2026',
        explanation:
          'Hoy existen asistentes de IA en VS Code y en la terminal que leen tu diff y te proponen el mensaje de commit automáticamente. Son sumamente útiles cuando te quedas en blanco, pero requieren criterio humano: la IA puede describir qué líneas se tocaron pero desconocer la intención real de negocio o mezclar dos cambios no relacionados. Tú siempre debes revisar el diff, verificar qué archivos están en Staging y validar el mensaje antes de confirmar.'
      }
    ],
    commandsTable: [
      {
        command: 'git --version',
        purpose: 'Comprueba que Git está instalado y muestra la versión activa en el sistema',
        example: 'git --version',
        zoneOrImpact: 'Sistema Operativo'
      },
      {
        command: 'git config --global user.name "Nombre"',
        purpose: 'Define el nombre de autor que firmará todos los commits en esta computadora',
        example: 'git config --global user.name "Matias Molina"',
        zoneOrImpact: 'Configuración Global (~/.gitconfig)'
      },
      {
        command: 'git config --global user.email "email"',
        purpose: 'Define el correo electrónico que firmará todos los commits en esta computadora',
        example: 'git config --global user.email "matias@ejemplo.com"',
        zoneOrImpact: 'Configuración Global (~/.gitconfig)'
      },
      {
        command: 'git config user.name "Otro"',
        purpose: 'Define un nombre de autor exclusivo para la carpeta/repositorio actual (sobreescribe la global)',
        example: 'git config user.name "Colaborador Demo"',
        zoneOrImpact: 'Configuración Local (.git/config)'
      },
      {
        command: 'git help',
        purpose: 'Muestra la guía de ayuda rápida e índice de comandos principales de Git en la terminal',
        example: 'git help',
        zoneOrImpact: 'Ayuda en consola'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Al hacer mi primer commit aparece el error "Author identity unknown / Please tell me who you are"',
        whyItHappens: 'Git no permite crear una foto sin firma de autor y aún no has ejecutado git config user.name y user.email.',
        solutionCommand: 'git config --global user.name "Tu Nombre" && git config --global user.email "tu@correo.com"',
        explanation: 'Configura ambos valores y vuelve a ejecutar el comando git commit.'
      }
    ]
  },
  {
    id: 'clase-03',
    classNumber: 3,
    title: 'Clase 03 · Ramas (Branches) y el puntero HEAD por dentro',
    duration: '44 min',
    timestampRange: '1:10:42 – 1:54:55',
    summary:
      'Por qué existen las ramas para trabajar en paralelo sin romper producción, el mito de que una rama copia carpetas, cómo funciona realmente un archivo de 41 bytes en .git/refs/heads, qué es el puntero HEAD y cómo nombrar ramas profesionalmente.',
    mentalModelQuote:
      'Una rama NO duplica tus archivos ni crea otra carpeta. Una rama es literalmente un papelito de texto plano que guarda el identificador (hash) de un commit.',
    pdfAssetPath:
      '/assets/aistudio/Clase_03_-_Curso_Git_2026__03__Ramas_8a74d183.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 3),
    concepts: [
      {
        title: '3.1 Por qué existen las ramas: Líneas de trabajo independientes',
        explanation:
          'Imagina que tu aplicación ya está en producción en la rama main y los usuarios la están usando. Quieres construir un login con Google o agregar la escala Kelvin a un conversor de temperatura, pero te llevará varios commits y pruebas en los que el código puede quedar roto a mitad de camino. Si trabajas directo sobre main, rompes la versión estable. Al abrir una rama aparte (por ejemplo, feature/login), construyes, pruebas y te equivocas con total tranquilidad: la rama main queda intacta y cada miembro del equipo avanza en su propia rama sin pisar a los demás.',
        keyRule:
          'Separar en ramas para construir con tranquilidad y volver a juntar (merge) cuando el trabajo está probado son las dos mitades de la misma historia.'
      },
      {
        title: '3.2 El malentendido más caro vs Lo que de verdad pasa',
        explanation:
          'Mucha gente imagina que cuando crea una rama, Git copia todos los archivos del proyecto en otra carpeta oculta (como hacer Copiar y Pegar de proyecto/ a proyecto-copia/). Eso es totalmente falso. En Git, los commits están encadenados donde cada commit nuevo apunta a su commit padre anterior. Una rama es únicamente un archivo de texto diminuto dentro de .git/refs/heads/ que tiene escrito el hash de 40 caracteres del commit al que apunta (ej. ref: c3). Crear una rama nueva con git branch login estando en el commit c3 simplemente crea otro papelito de texto que también dice "c3". No copia ni un solo archivo de código.',
        analogy:
          'Por eso en Git crear una rama en un proyecto de 100.000 archivos tarda 0.001 segundos y ocupa 41 bytes: solo estás pegando un post-it nuevo sobre la misma foto.',
        codeExample: {
          title: 'Abriendo la caja negra: qué hay dentro de .git/refs/heads y .git/HEAD',
          language: 'bash',
          code: `# Creamos una rama llamada login (sin movernos todavía):
git branch login

# Si miramos qué guardó Git por dentro en sus papelitos:
cat .git/refs/heads/main
cat .git/refs/heads/login
cat .git/HEAD`,
          output: `0fad08b19e2fc3f2a1da4d0c771c9d0e3f8a9d31   # <- Papelito main (apunta al commit 0fad0)
0fad08b19e2fc3f2a1da4d0c771c9d0e3f8a9d31   # <- Papelito login (apunta al mismo commit 0fad0)
ref: refs/heads/main                       # <- Papelito HEAD ("Usted está parado en main")`
        }
      },
      {
        title: '3.3 Qué es HEAD: El indicador de "Usted está aquí"',
        explanation:
          'Si tienes dos o tres ramas apuntando al mismo commit c3, ¿cómo sabe Git cuál de esos papelitos debe avanzar cuando hagas el próximo commit c4? Para eso existe HEAD. HEAD es otro papelito especial que guarda el nombre de la rama en la que estás parado ahora mismo. Si HEAD apunta a main, estás parado en main; cuando te cambias con git switch login, HEAD se reescribe para decir "login" y el próximo commit que hagas moverá únicamente el papelito login hacia adelante, mientras main ni se entera.',
        codeExample: {
          title: 'Crear ramas y moverse entre ellas con git switch (moderno) vs git checkout (clásico)',
          language: 'bash',
          code: `# Ver todas las ramas locales (el asterisco * marca dónde está HEAD):
git branch

# Forma moderna y clara (recomendada desde Git 2.23+):
git switch login                  # Cambia a una rama existente
git switch -c feature/kelvin      # Crea la rama y salta a ella en un solo paso

# Equivalente clásico (que verás en tutoriales antiguos y scripts):
git checkout login                # Cambia a una rama existente
git checkout -b feature/kelvin    # Crea la rama y salta a ella`
        }
      },
      {
        title: '3.4 Convención profesional para nombrar ramas',
        explanation:
          'Vas a crear decenas de ramas en un proyecto. Un buen nombre te permite saber qué se está construyendo en cada una sin necesidad de abrirla. La convención estándar utiliza el formato tipo/descripcion-corta y sigue cuatro reglas de oro: (1) Todo en minúsculas, (2) Separa palabras con guiones medios (-), jamás con espacios ni caracteres especiales, (3) Descriptivo pero corto (2 a 4 palabras), y (4) En equipos reales, incluye el código del ticket (ej. feature/NC-1-modelo-nota o feature/PROJ-123-login).',
        codeExample: {
          title: 'Prefijos estándar vs Nombres prohibidos',
          language: 'bash',
          code: `# ✅ Nombres profesionales con prefijo semántico:
feature/login-google             # Funcionalidad nueva
fix/error-calculo-impuestos      # Corrección de un bug en desarrollo
hotfix/caida-pasarela-pagos      # Arreglo urgente directo para producción
docs/actualiza-readme            # Cambios exclusivos de documentación

# ❌ Nombres que NO dicen nada (evitar siempre):
# prueba, cambios, rama2, lo-de-ayer, arreglos, matias-final`
        }
      }
    ],
    commandsTable: [
      {
        command: 'git branch',
        purpose: 'Lista todas las ramas locales y marca con un asterisco (*) la rama actual donde apunta HEAD',
        example: 'git branch',
        zoneOrImpact: 'Solo lectura'
      },
      {
        command: 'git branch <nombre>',
        purpose: 'Crea una nueva rama apuntando al commit actual, pero SIN cambiarte a ella',
        example: 'git branch feature/kelvin',
        zoneOrImpact: 'Crea puntero en .git/refs/heads/'
      },
      {
        command: 'git switch <rama>',
        purpose: 'Mueve el puntero HEAD a la rama indicada y actualiza tu Working Directory a esa foto',
        example: 'git switch feature/kelvin',
        zoneOrImpact: 'Mueve HEAD + Working Dir'
      },
      {
        command: 'git switch -c <rama>',
        purpose: 'Crea una rama nueva y mueve HEAD hacia ella inmediatamente (equivale a git checkout -b)',
        example: 'git switch -c feature/formato-resultado',
        zoneOrImpact: 'Crea rama + Mueve HEAD'
      },
      {
        command: 'git branch -m <nombre>',
        purpose: 'Renombra la rama en la que estás parado actualmente',
        example: 'git branch -m main',
        zoneOrImpact: 'Renombra puntero de rama'
      },
      {
        command: 'git branch -d <rama>',
        purpose: 'Elimina una rama local de forma segura (solo si sus cambios ya fueron fusionados)',
        example: 'git branch -d feature/kelvin',
        zoneOrImpact: 'Borra el papelito de la rama'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Creé la rama con git branch mi-rama, hice commits, pero se guardaron en main',
        whyItHappens: 'git branch <nombre> solo crea el papelito, pero no mueve HEAD. Seguías parado en main.',
        solutionCommand: 'git switch -c mi-rama',
        explanation: 'Acostúmbrate a usar git switch -c <rama> para crear y saltar a la rama nueva en una sola acción.'
      }
    ]
  },
  {
    id: 'clase-04',
    classNumber: 4,
    title: 'Clase 04 · Merges & Conflicts: Unir ramas y desempatar choques',
    duration: '36 min',
    timestampRange: '1:54:56 – 2:30:45',
    summary:
      'Cómo volver a juntar líneas paralelas con git merge, la diferencia técnica entre Fast-Forward y Three-Way Merge, cuándo y por qué ocurre un conflicto, cómo leer los marcadores <<<<<<< ======= >>>>>>> y cómo resolverlos o abortar sin miedo.',
    mentalModelQuote:
      'Un conflicto no es un error ni significa que hiciste algo mal: son dos cambios que chocan en la misma línea del mismo archivo, y una decisión humana que los desempata.',
    pdfAssetPath:
      '/assets/aistudio/Clase_04_-_Curso_Git_2026__04__Merge___Conflicts_0f7b1cb9.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 4),
    concepts: [
      {
        title: '4.1 Qué es un Merge y la Regla de Ubicación',
        explanation:
          'Hacer un merge significa fusionar dos ramas: una rama origen (la que aporta el trabajo nuevo, por ejemplo login) y una rama destino (la que recibe el trabajo, por ejemplo main). La regla inquebrantable de Git para hacer un merge es: siempre debes pararte primero en la rama que RECIBE (destino) y desde ahí jalar la rama que APORTA (origen).',
        codeExample: {
          title: 'El ritual de 2 pasos para fusionar una rama en main',
          language: 'bash',
          code: `# 1. Párate en la rama destino (la que recibe los cambios):
git switch main

# 2. Fusiona la rama origen (la que trae los commits nuevos):
git merge login`
        }
      },
      {
        title: '4.2 Tipo 1 de 2: Fast-Forward Merge (El caso feliz trabajando solo)',
        explanation:
          'Ocurre cuando creaste la rama login desde el commit c2 de main, avanzaste 3 commits en login (c3, c4, c5), y durante ese tiempo NADIE hizo ningún commit nuevo en main (main siguió quieta en c2). Cuando te paras en main y ejecutas git merge login, Git ve que el camino es una línea recta continua: no necesita combinar nada ni crear un commit nuevo; simplemente desliza el papelito de main hacia adelante hasta alcanzar a c5.',
        analogy:
          'Como main no se movió, Git solo adelanta el marcador de página hasta donde llegó login. En la terminal verás literalmente la frase "Fast-forward".'
      },
      {
        title: '4.3 Tipo 2 de 2: Three-Way Merge (Cuando ambos caminos avanzaron)',
        explanation:
          'Ocurre cuando creaste login desde c2, hiciste commits en login, pero mientras tanto main TAMBIÉN recibió otros commits nuevos por su cuenta. Ahora los caminos se bifurcaron y Git ya no puede solo deslizar el puntero. Para unirlos, Git realiza un Three-Way Merge mirando 3 fotos: (1) El ancestro común del que partieron ambas ramas, (2) La última foto de la rama destino (main), y (3) La última foto de la rama origen (login). Con esa comparación crea una foto nueva especial llamada Commit de Merge, que tiene DOS padres en lugar de uno.',
        analogy:
          'El commit de merge es la cicatriz honesta en el historial que dice: "aquí se volvieron a unir dos caminos paralelos".'
      },
      {
        title: '4.4 ¿Cuándo aparece un Conflicto? (Y cuándo NO)',
        explanation:
          'En un Fast-Forward jamás puede haber conflicto. En un Three-Way Merge, si una rama modificó app.py y la otra modificó style.css, o si ambas modificaron partes distintas del mismo archivo (por ejemplo, una tocó la línea 5 y la otra la línea 80), Git combina todo automáticamente sin preguntar nada. El conflicto aparece ÚNICAMENTE cuando ambas ramas modificaron la MISMA línea del MISMO archivo de formas distintas (o cuando una rama editó un archivo que la otra rama borró). Git detiene el merge a mitad de camino y te pide a ti que tomes la decisión.',
        codeExample: {
          title: 'Anatomía exacta de los marcadores de conflicto en el editor',
          language: 'text',
          code: `<<<<<<< HEAD
Color favorito: rojo
=======
Color favorito: verde
>>>>>>> cambio-color`,
          output: `Traducción de los 3 símbolos que Git inyecta en el archivo:
1. <<<<<<< HEAD         -> Arriba de la divisoria está la versión de la rama donde estás parado (ej. main).
2. =======              -> Línea divisoria que separa las dos propuestas en choque.
3. >>>>>>> cambio-color -> Abajo de la divisoria está la versión que viene de la rama que estás fusionando.`
        }
      },
      {
        title: '4.5 Cómo resolver cualquier conflicto en 2 pasos (y el botón de pánico)',
        explanation:
          'Cuando salta un conflicto, primero respira: Git no borró ni perdió nada, solo está en pausa (git status te mostrará el archivo bajo "Unmerged paths"). Se resuelve siempre con la misma receta de 2 pasos: Paso 1: Abre el archivo en tu editor, decide qué código debe quedar (el de arriba, el de abajo, una combinación de ambos o algo nuevo) y BORRA OBLIGATORIAMENTE las tres líneas de marcadores (<<<<<<<, =======, >>>>>>>). Paso 2: Ejecuta git add <archivo> (así le avisas a Git "ya decidí, esta versión limpia es la buena") y cierra con git commit -m "merge: ...". ¿Te enredaste o te arrepentiste a mitad del conflicto? Ejecuta git merge --abort y todo vuelve exactamente a como estaba antes de intentar el merge.',
        codeExample: {
          title: 'Flujo completo de resolución de conflicto en consola',
          language: 'bash',
          code: `git switch main
git merge cambio-color
# Auto-merging colores.txt
# CONFLICT (content): Merge conflict in colores.txt
# Automatic merge failed; fix conflicts and then commit the result.

# 1. Editas colores.txt dejando limpio: "Color favorito: rojo y verde" (sin <<< === >>>)
# 2. Verificas que no hayan quedado marcadores olvidados:
git diff --check

# 3. Marcas como resuelto con git add y cierras el commit de merge:
git add colores.txt
git commit -m "merge: integra cambio-color combinando preferencias"

# (Opcional) Botón de pánico si querías cancelar antes del commit:
# git merge --abort`
        }
      }
    ],
    commandsTable: [
      {
        command: 'git merge <rama>',
        purpose: 'Fusiona la rama indicada dentro de la rama en la que estás parado actualmente',
        example: 'git merge feature/login',
        zoneOrImpact: 'Une historias en rama actual'
      },
      {
        command: 'git merge --abort',
        purpose: 'Cancela un merge en conflicto y devuelve todo el proyecto al estado exacto previo al merge',
        example: 'git merge --abort',
        zoneOrImpact: 'Botón de escape seguro'
      },
      {
        command: 'git diff --check',
        purpose: 'Verifica que no hayan quedado marcadores de conflicto (<<< === >>>) ni espacios residuales antes de hacer commit',
        example: 'git diff --check',
        zoneOrImpact: 'Validación post-conflicto'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Hice git merge main estando parado en feature/login y todo quedó al revés',
        whyItHappens: 'Olvidaste cambiar primero a la rama destino (main). Metiste main dentro de login en vez de login dentro de main.',
        solutionCommand: 'git switch main && git merge feature/login',
        explanation: 'Recuerda siempre: párate en la rama que recibe y desde ahí llama a la que aporta.'
      },
      {
        problem: 'Resolví el conflicto pero en la web o en la app se imprimen signos "<<<<<<< HEAD"',
        whyItHappens: 'Hiciste git add y git commit sin haber borrado las líneas demarcadoras que Git escribió en el archivo.',
        solutionCommand: 'Borrar las líneas <<<, ===, >>> del archivo, hacer git add y git commit --amend',
        explanation: 'Para Git los marcadores son texto normal una vez que tú haces git add; usa git diff --check antes de confirmar.'
      }
    ]
  },
  {
    id: 'clase-05',
    classNumber: 5,
    title: 'Clase 05 · Git vs GitHub: Repositorios Remotos, origin, push, fetch y pull',
    duration: '38 min',
    timestampRange: '2:30:46 – 3:08:27',
    summary:
      'La diferencia real entre el motor local Git y la plataforma en la nube GitHub, qué es un remoto, qué significa realmente la palabra origin, cómo empezar con clone vs remote add, el flag -u (--set-upstream), la diferencia entre git fetch y git pull, y cómo autenticarse con Personal Access Tokens (PAT).',
    mentalModelQuote:
      'Git es al correo electrónico lo que GitHub es a Gmail. Y "origin" no es un comando mágico ni es GitHub: es simplemente el apodo (alias) por defecto para no escribir la URL entera cada vez.',
    pdfAssetPath:
      '/assets/aistudio/Clase_05_-_Curso_Git_2026__05_Git_vs_GitHub_f1ae7c2e.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 5),
    concepts: [
      {
        title: '5.1 Git ≠ GitHub: Cara a cara punto por punto',
        explanation:
          'Hasta la Clase 4 hiciste commits, creaste ramas y resolviste merges sin tener cuenta en ningún sitio y sin necesitar internet, porque todo eso es Git corriendo en tu computadora dentro de la carpeta .git. El problema es que si se rompe tu disco duro o pierdes la laptop, se pierde todo, y además tus compañeros no pueden ver tus ramas. Ahí entra GitHub (o alternativas como GitLab y Bitbucket): una plataforma en la nube que hospeda copias remotas de repositorios de Git para tener respaldo y colaborar en equipo.',
        keyRule:
          'En un sistema distribuido como Git, el repositorio remoto en GitHub no es técnicamente "más importante" que tu copia local: es simplemente otra copia completa del álbum con la que todo el equipo acuerda sincronizarse.'
      },
      {
        title: '5.2 ¿Qué es "origin"? Es solo un alias para una URL',
        explanation:
          'Cuando escribes git push origin main, mucha gente piensa que origin es una palabra reservada de GitHub. No lo es: origin es simplemente un nombre corto (alias) que apunta a la dirección URL del repositorio remoto (por ejemplo, https://github.com/usuario/proyecto.git) para que no tengas que escribir la URL larga cada vez. Se llama origin por convención ("el lugar donde se originó el clon"), pero podrías llamarlo github, trabajo o respaldo.',
        codeExample: {
          title: 'Ver y gestionar los alias de repositorios remotos',
          language: 'bash',
          code: `# Ver qué alias remotos tienes configurados y a qué URL apuntan:
git remote -v

# Agregar un remoto bajo el alias estándar "origin":
git remote add origin https://github.com/edward/curso-git.git

# (Opcional) Agregar un segundo remoto de respaldo en GitLab:
git remote add backup https://gitlab.com/edward/curso-git.git`,
          output: `origin  https://github.com/edward/curso-git.git (fetch)
origin  https://github.com/edward/curso-git.git (push)`
        }
      },
      {
        title: '5.3 Dos formas de empezar: ¿El proyecto ya existe en la nube o nace en tu máquina?',
        explanation:
          'Existen dos caminos opuestos según dónde nació el proyecto: Caso A (Ya existe en GitHub -> Lo traigo a mi máquina): un compañero creó el repo o es un proyecto open source. Ejecutas git clone <url> y Git descarga toda la carpeta, toda la historia de commits y además configura el alias origin automáticamente. Caso B (Ya existe en mi máquina -> Lo subo a GitHub): tú hiciste git init y commits en local, vas a GitHub y creas un repositorio COMPLETAMENTE VACÍO (sin README ni .gitignore para no crear commits desconectados), y luego conectas tu carpeta con git remote add origin <url> seguido de git push -u origin main.',
        codeExample: {
          title: 'Caso A (Clonar existente) vs Caso B (Subir repo local nuevo)',
          language: 'bash',
          code: `# CASO A: El repositorio ya existe en GitHub -> lo descargo listo para usar
git clone https://github.com/usuario/proyecto.git
cd proyecto

# CASO B: El repositorio nació en mi máquina -> lo vinculo y subo a un repo vacío en GitHub
git remote add origin https://github.com/usuario/mi-proyecto.git
git push -u origin main`
        }
      },
      {
        title: '5.4 Qué hace git push y el significado exacto del flag -u (--set-upstream)',
        explanation:
          'git push NO envía carpetas sueltas ni vuelve a subir todo el proyecto cada vez: compara los commits que tienes en tu rama local contra los que tiene el remoto, y envía únicamente los commits nuevos que faltan (por ejemplo, si el remoto tiene A-B y tú tienes A-B-C-D, solo viajan C y D). ¿Y qué hace el flag -u (abreviatura de --set-upstream) en git push -u origin main? No sube más datos ni acelera la red: simplemente guarda en tu configuración que tu rama local main "sigue" (tracks) a la rama remota origin/main. Gracias a usar -u la primera vez que publicas una rama, a partir de la segunda vez puedes escribir simplemente git push o git pull a secas sin repetir origin main.',
        keyRule:
          'Usa git push -u origin <nombre-rama> únicamente la primera vez que subes una rama nueva a GitHub; en los siguientes envíos de esa misma rama basta con git push.'
      },
      {
        title: '5.5 La gran diferencia: git fetch (el prudente) vs git pull (el rápido)',
        explanation:
          'Para traer novedades desde GitHub hacia tu computadora existen dos comandos que suelen confundirse: (1) git fetch origin ("El prudente"): se conecta a GitHub y descarga todos los commits nuevos que hicieron tus compañeros, actualizando el puntero remoto origin/main en tu máquina, pero NO modifica tus archivos ni los mezcla con tu rama local main. Te permite inspeccionar qué cambió (ej. git log main..origin/main) antes de decidir unirlos manualmente con git merge origin/main. (2) git pull origin main ("El rápido"): ejecuta internamente dos comandos seguidos: git fetch + git merge de inmediato sobre tu rama actual. Es más directo, pero como incluye un merge automático, puede disparar un conflicto si tocaste las mismas líneas que el remoto.',
        codeExample: {
          title: 'Ecuación fundamental: git pull = git fetch + git merge',
          language: 'bash',
          code: `# Camino Prudente (2 pasos: descargar para ver, y luego fusionar):
git fetch origin
git log --oneline main..origin/main   # Veo qué commits nuevos llegaron
git merge origin/main                 # Los integro cuando estoy seguro

# Camino Rápido (1 paso: descarga y fusiona de inmediato):
git pull origin main`
        }
      },
      {
        title: '5.6 Autenticación en GitHub: Personal Access Token (PAT) y SSH',
        explanation:
          'Al hacer tu primer git push por HTTPS, GitHub ya no acepta la contraseña normal de tu cuenta web por razones de seguridad. Debes autenticarte usando GitHub Credential Manager (que abre el navegador) o creando un Personal Access Token (PAT) desde tu cuenta de GitHub: vas a Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token, le das un nombre descriptivo, eliges fecha de expiración, marcas el permiso (scope) "repo" y copias el código generado para pegarlo cuando la terminal te pida el Password.'
      }
    ],
    commandsTable: [
      {
        command: 'git clone <url>',
        purpose: 'Descarga una copia completa de un repositorio remoto y configura el alias origin automáticamente',
        example: 'git clone https://github.com/usuario/repo.git',
        zoneOrImpact: 'Remoto → Crea carpeta Local + .git'
      },
      {
        command: 'git remote add origin <url>',
        purpose: 'Registra la dirección de un servidor remoto bajo el apodo "origin" en tu repositorio local',
        example: 'git remote add origin https://github.com/usuario/repo.git',
        zoneOrImpact: 'Configura vínculo en .git/config'
      },
      {
        command: 'git push -u origin <rama>',
        purpose: 'Sube los commits de tu rama al remoto y deja establecido el vínculo de seguimiento (--set-upstream)',
        example: 'git push -u origin main',
        zoneOrImpact: 'Local Repository → Remote Repository'
      },
      {
        command: 'git fetch origin',
        purpose: 'Descarga los commits nuevos del remoto para revisarlos sin mezclarlos con tu trabajo actual',
        example: 'git fetch origin',
        zoneOrImpact: 'Actualiza origin/* sin tocar Working Dir'
      },
      {
        command: 'git pull origin <rama>',
        purpose: 'Descarga los cambios del remoto y los fusiona inmediatamente con tu rama actual (fetch + merge)',
        example: 'git pull origin main',
        zoneOrImpact: 'Remoto → Local + Working Dir'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Hice git remote add origin <url>, abrí GitHub en el navegador y el repositorio sigue vacío',
        whyItHappens: 'git remote add solo agenda el número de teléfono del servidor en tu máquina, pero todavía no envió ningún commit.',
        solutionCommand: 'git push -u origin main',
        explanation: 'Después de vincular el remoto con remote add, debes ejecutar git push para transferir los commits.'
      },
      {
        problem: 'Intento hacer git pull o git push pero recibo error porque tengo cambios locales sin commitear',
        whyItHappens: 'Git protege tus archivos modificados en el Working Directory para no sobrescribirlos al traer cambios del servidor.',
        solutionCommand: 'git add . && git commit -m "mensaje" (o git stash) antes de git pull',
        explanation: 'Mantén tu directorio de trabajo limpio (working tree clean) antes de sincronizar con tus colegas.'
      }
    ]
  },
  {
    id: 'clase-06',
    classNumber: 6,
    title: 'Clase 06 · Pull Requests (PR), Protección de Ramas y Code Review en Equipo',
    duration: '35 min',
    timestampRange: '3:08:28 – 3:43:37',
    summary:
      'Por qué pushear directo a main en equipo es una receta para el caos, qué es un Pull Request como capa social sobre Git, cómo blindar main con Rulesets, cómo realizar y responder un Code Review profesional y cómo resolver los 2 casos de conflictos en equipo.',
    mentalModelQuote:
      'El comando "git pull-request" no existe: Git solo conoce commits, ramas y merges. El Pull Request es la capa social de revisión y calidad que GitHub montó encima.',
    pdfAssetPath:
      '/assets/aistudio/Clase_06_-_Curso_Git_2026__06_Pull_Requests_c408f954.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 6),
    concepts: [
      {
        title: '6.1 El caos de pushear directo a main vs La única puerta de entrada',
        explanation:
          'Imagina un equipo de 5 desarrolladores haciendo git push origin main directamente todos los días: nadie revisa el código de nadie, cualquier commit con un bug rompe producción al instante y el error le llega directo a los usuarios finales. En los equipos profesionales, main está protegida con candado (Branch Protection / Rulesets): cualquier intento de hacer push directo a main rebota con el error GH006: Protected branch update failed. La única puerta de entrada a main es a través de un Pull Request revisado y aprobado.',
        keyRule:
          'main protegida = rama principal siempre estable, probada y lista para desplegar en cualquier momento.'
      },
      {
        title: '6.2 Qué es un Pull Request y su Ciclo Completo de 6 Pasos',
        explanation:
          'Un Pull Request (PR, llamado Merge Request en GitLab) es una solicitud formal en la nube donde le dices a tu equipo: "Terminé esta funcionalidad en mi rama feature/login-google; por favor revísenla, discútanla y, si está todo bien, fusiónenla dentro de main". El ciclo completo consta de 6 pasos: (1) Creas una rama local desde main actualizada, (2) Haces tus commits, (3) Subes tu rama a GitHub con git push -u origin feature/... y abres el PR describiendo Qué hace / Por qué / Cómo probarlo, (4) El equipo hace Code Review y deja comentarios por línea, (5) Corren las validaciones automáticas (CI: tests y compilación en verde), y (6) Se aprueba, se hace Merge a main y se elimina la rama que ya cumplió su misión.',
        codeExample: {
          title: 'Cómo actualizar un Pull Request cuando el revisor pide cambios (Request Changes)',
          language: 'bash',
          code: `# El revisor dejó comentarios pidiendo validar que el correo no esté vacío.
# ¡NO abras otro Pull Request nuevo! En tu misma rama local haces el arreglo:
git add auth/login.py
git commit -m "fix(auth): agrega validación de correo obligatorio según revisión"
git push

# Resultado: El mismo PR #42 en GitHub se actualiza automáticamente en vivo.`
        }
      },
      {
        title: '6.3 Cómo hacer un Code Review con criterio (y por qué necesitas ojos ajenos)',
        explanation:
          'Cuando revisas el PR de un compañero en la pestaña "Files changed", la pregunta rectora es: "¿Este cambio es correcto, mantiene la calidad y puede entrar a main sin romper nada?". Al terminar de leer el diff tienes tres veredictos posibles en "Review changes": (1) Comment: deja observaciones generales sin aprobar ni bloquear, (2) Request changes: bloquea la fusión hasta que el autor corrija un problema detectado, y (3) Approve: da luz verde para integrar. Nota clave: GitHub bloquea por diseño que el autor de un PR apruebe su propio Pull Request; en un repositorio con rama protegida, obligatoriamente otra persona del equipo debe dar el Approve.'
      },
      {
        title: '6.4 Los 2 Casos de Conflictos en Equipo (y quién los resuelve)',
        explanation:
          '¿Qué pasa cuando dos desarrolladores trabajan en sus propias ramas pero tocan la misma línea de checkout.py (por ejemplo, uno puso descuento 0.9 y el otro puso 0.85)? El primero que aprueba y fusiona su PR entra limpio a main. Al segundo le aparecerá el aviso "This branch has conflicts that must be resolved". ¿Quién debe resolverlo? Siempre el autor del PR que quiere entrar. Existen dos momentos en que esto ocurre: Caso 1 (El conflicto te espera al abrir el PR): tu compañero mergeó antes de que tú abrieras el PR. Caso 2 (El conflicto aparece en plena revisión): abriste tu PR limpio y hasta estaba aprobado, pero antes de pulsar Merge otro compañero fusionó su PR tocando tus mismas líneas y GitHub bloqueó el botón en vivo. En ambos casos la solución profesional es traer main a tu rama local, resolver los marcadores, hacer commit y git push.',
        codeExample: {
          title: 'Receta estándar para desbloquear tu PR con conflictos desde tu computadora',
          language: 'bash',
          code: `# 1. Traes los últimos cambios que entraron a main (o develop):
git switch main
git pull origin main

# 2. Vuelves a tu rama del PR y fusionas main adentro de tu rama:
git switch feature/promo
git merge main

# 3. Abres el archivo en conflicto, eliges la versión correcta y borras <<< === >>>
# 4. Confirmas y empujas a tu rama:
git add .
git commit -m "merge: resuelve conflicto con main en cálculo de descuento"
git push
# ¡Listo! El PR en GitHub vuelve a ponerse en verde automáticamente.`
        }
      }
    ],
    commandsTable: [
      {
        command: 'Settings → Rules → Rulesets',
        purpose: 'Configura en GitHub la protección de ramas (ej. exigir PR y 1 aprobación antes de permitir merge a main)',
        example: 'Require a pull request before merging (Required approvals: 1)',
        zoneOrImpact: 'Seguridad en GitHub'
      },
      {
        command: 'Start a review vs Add single comment',
        purpose: 'En GitHub, "Start a review" agrupa todos tus comentarios en borrador y los envía juntos con tu veredicto final',
        example: 'Files changed → + en la línea → Start a review → Submit review',
        zoneOrImpact: 'Code Review en GitHub'
      },
      {
        command: 'Delete branch (post-merge)',
        purpose: 'Elimina la rama remota en GitHub una vez que el PR ya fue fusionado en la rama base',
        example: 'Confirm merge → Delete branch',
        zoneOrImpact: 'Limpieza en GitHub'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Me pidieron una corrección en mi Pull Request, cerré el PR y abrí un PR nuevo',
        whyItHappens: 'Desconocer que un PR sigue a la rama: si cierras el PR se pierde todo el hilo de conversación y contexto de la revisión.',
        solutionCommand: 'Hacer commit + git push sobre la misma rama del PR abierto',
        explanation: 'Cualquier commit nuevo que empujes a la rama del PR actualiza el Pull Request existente al instante.'
      }
    ]
  },
  {
    id: 'clase-07',
    classNumber: 7,
    title: 'Clase 07 · Deshacer Cambios en Git: diff, restore, --amend, reset y revert',
    duration: '45 min',
    timestampRange: '3:43:38 – 4:29:21',
    summary:
      'El arsenal completo para inspeccionar y corregir errores en cualquier etapa: las 4 comparaciones de git diff, las 3 situaciones de git restore, cómo enmendar el último commit con --amend, la notación HEAD~N, la tabla maestra de git reset (--soft, --mixed, --hard) y por qué en historia compartida siempre se usa git revert.',
    mentalModelQuote:
      'La pregunta que decide todo antes de deshacer un commit es una sola: ¿Ese commit ya fue compartido con otras personas (git push)? Si está solo en tu máquina, puedes reescribir (amend/reset); si ya es público, corrige hacia adelante (revert).',
    pdfAssetPath:
      '/assets/aistudio/Clase_07_-_Curso_Git_2026__07_Git_restore__reset_y_revert_7ad79698.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 7),
    concepts: [
      {
        title: '7.1 Antes de deshacer hay que VER: Las 4 comparaciones de git diff',
        explanation:
          'git diff es tu lente de aumento de solo lectura: jamás modifica ni borra un solo byte, pero te muestra línea por línea qué vas a perder antes de ejecutar un comando destructivo. Dependiendo de los argumentos que le pases, pone frente a frente cuatro pares distintos de zonas o puntos de la historia.',
        codeExample: {
          title: 'Las 4 variantes de git diff que debes dominar',
          language: 'bash',
          code: `# 1. Working Directory vs Staging Area (lo que editaste y AÚN NO agregaste con git add):
git diff

# 2. Staging Area vs Último Commit HEAD (lo que SÍ preparaste con git add e irá en la foto):
git diff --staged     # (o su sinónimo exacto: git diff --cached)

# 3. Entre dos commits de la historia (ej. el commit anterior vs el actual):
git diff HEAD~1 HEAD  # (o usando hashes: git diff 8b19e2f c3f2a1d)

# 4. Entre dos ramas completas antes de hacer un merge:
git diff main develop`
        }
      },
      {
        title: '7.2 git restore: Las 3 situaciones para restaurar archivos individuales',
        explanation:
          'Mientras git diff solo mira, git restore actúa sobre archivos concretos en tres escenarios: Situación 1 (Descartar cambios del Working Directory): editaste saludo.py sin hacer git add y quieres tirar esos cambios a la basura volviendo a cómo estaba en HEAD; ejecutas git restore saludo.py (¡Cuidado! No hay vuelta atrás porque esos cambios nunca estuvieron en un commit). Situación 2 (Deshacer un git add sin perder tu código): agregaste config.py al Staging por error pero aún no quieres incluirlo en este commit; ejecutas git restore --staged config.py y el archivo sale de la lista verde pero conserva todas tus modificaciones intactas en tu editor. Situación 3 (Viajar en el tiempo para un solo archivo con --source): quieres recuperar cómo estaba saludo.py hace dos commits sin tocar el resto del proyecto; ejecutas git restore --source=HEAD~2 saludo.py.',
        codeExample: {
          title: 'Las 3 jugadas de git restore en la terminal',
          language: 'bash',
          code: `# Situación 1: Descartar ediciones no preparadas (Destructivo: revisa antes con git diff)
git diff saludo.py
git restore saludo.py

# Situación 2: Sacar un archivo del Staging Area SIN perder los cambios hechos en él
git restore --staged config.py

# Situación 3: Traer al Working Directory la versión de un archivo de un commit anterior
git restore --source=HEAD~1 saludo.py
# (También acepta hash exacto: git restore --source=8b19e2f saludo.py)`
        }
      },
      {
        title: '7.3 git commit --amend: Enmendar el último commit sin ensuciar el historial',
        explanation:
          'Acabas de hacer un commit hace 10 segundos y notas uno de dos errores clásicos: (1) Escribiste mal el mensaje, o (2) Te olvidaste de meter un archivo que iba en esa misma foto (como config.py). En vez de hacer un segundo commit llamado "ahora sí agrego el archivo olvidado", usas git commit --amend. Atención: internamente --amend no edita el commit viejo (los commits son inmutables), sino que construye un commit NUEVO que reemplaza al anterior, cambiando su hash (ej. de c3f2a1d a 9e81b4f). Por eso solo debes usarlo antes de hacer git push.',
        codeExample: {
          title: 'Corregir el mensaje o agregar un archivo olvidado al último commit',
          language: 'bash',
          code: `# Caso A: Solo quieres corregir el mensaje del último commit
git commit --amend -m "feat(auth): agrega autenticación con Google OAuth"

# Caso B: Olvidaste incluir config.py en el commit que acabas de hacer
git add config.py
git commit --amend --no-edit   # --no-edit reutiliza el mensaje que ya tenías sin abrir el editor`
        }
      },
      {
        title: '7.4 Notación HEAD~N y los 3 Modos de git reset (--soft, --mixed, --hard)',
        explanation:
          'En Git, HEAD~1 significa "1 paso hacia atrás desde HEAD" (el padre), HEAD~2 "2 pasos hacia atrás" (el abuelo), y así sucesivamente. Cuando ejecutas git reset HEAD~1 en tu historia local, Git mueve el puntero de tu rama un commit hacia atrás (dejando el último commit huérfano fuera de la historia). Pero ¿qué hace Git con el código que habías escrito dentro de ese commit quitado? Eso lo deciden los 3 modos de reset: (1) --soft: mueve la rama atrás, pero deja todos tus cambios listos y verdes en el Staging Area (ideal para volver a commitear o unir varios commits pequeños en uno solo); (2) --mixed (el modo por defecto si no escribes flag): mueve la rama atrás, vacía el Staging Area, pero deja tus cambios a salvo en el Working Directory como modificados en rojo; (3) --hard: mueve la rama atrás, vacía el Staging Area y DESTRUYE los cambios del Working Directory restaurando la carpeta exactamente al commit destino.',
        codeExample: {
          title: 'Comparativa práctica de los 3 modos de git reset',
          language: 'bash',
          code: `# 1. Modo --soft: Quita el commit pero deja los cambios preparados en Staging (verde)
git reset --soft HEAD~1

# 2. Modo --mixed (default): Quita el commit y saca de Staging, pero conserva tu código en el archivo (rojo)
git reset HEAD~1

# 3. Modo --hard: Quita el commit y BORRA por completo todos los cambios hechos en él (¡Peligroso!)
git reset --hard HEAD~1`
        }
      },
      {
        title: '7.5 git revert: Corregir hacia adelante en historia compartida',
        explanation:
          '¿Qué pasa si el commit con el bug ya fue subido con git push y tus compañeros ya lo descargaron? Prohibido usar git reset: si borras un commit hacia atrás en una rama compartida, tu historia diverge de la del servidor, te obligaría a hacer git push --force y romperías los repositorios de todo el equipo. En historia compartida se corrige hacia adelante con git revert <hash>: Git analiza qué hizo el commit malo (si agregó 5 líneas, las borra; si borró 2, las vuelve a poner) y crea un commit NUEVO al final de la fila que anula exactamente sus efectos. Así nadie pierde historia y todos se actualizan con un simple git pull.',
        codeExample: {
          title: 'Anular un commit público de forma segura con git revert',
          language: 'bash',
          code: `# El commit c3f2a1d ya está en GitHub y tiene un bug. Creamos su antídoto:
git revert c3f2a1d
# Resultado: Nace el commit nuevo d41f0a9: Revert "feat: login con Google"
git push origin main`
        }
      }
    ],
    commandsTable: [
      {
        command: 'git diff / git diff --staged',
        purpose: 'Compara cambios no preparados (Working vs Staging) o cambios ya preparados (Staging vs HEAD)',
        example: 'git diff --staged',
        zoneOrImpact: 'Solo lectura (Inspección)'
      },
      {
        command: 'git restore <archivo>',
        purpose: 'Descarta las modificaciones locales de un archivo devolviéndolo a su estado en el último commit',
        example: 'git restore app.py',
        zoneOrImpact: 'Sobrescribe Working Directory'
      },
      {
        command: 'git restore --staged <archivo>',
        purpose: 'Saca un archivo del Staging Area (deshace git add) conservando las ediciones en tu carpeta',
        example: 'git restore --staged config.py',
        zoneOrImpact: 'Staging Area → Working Directory'
      },
      {
        command: 'git commit --amend',
        purpose: 'Reemplaza el último commit local permitiendo corregir su mensaje o sumar archivos olvidados',
        example: 'git commit --amend --no-edit',
        zoneOrImpact: 'Reescribe el último commit local'
      },
      {
        command: 'git reset [--soft|--mixed|--hard] HEAD~N',
        purpose: 'Retrocede el puntero de la rama N commits hacia atrás manejando el staging y working dir según el flag',
        example: 'git reset --soft HEAD~1',
        zoneOrImpact: 'Reescribe historia local'
      },
      {
        command: 'git revert <hash>',
        purpose: 'Crea un nuevo commit que invierte exactamente los cambios introducidos por un commit anterior',
        example: 'git revert c3f2a1d',
        zoneOrImpact: 'Agrega commit nuevo (Seguro en equipo)'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Hice git reset HEAD~1 en una rama que ya estaba en GitHub y ahora git push me rechaza el envío',
        whyItHappens: 'Retrocediste tu rama local reescribiendo historia que el servidor remoto ya tenía registrada.',
        solutionCommand: 'git pull (para recuperar el commit) y luego git revert <hash>',
        explanation: 'Nunca uses reset sobre commits que ya subiste a una rama compartida; usa git revert.'
      }
    ]
  },
  {
    id: 'clase-08',
    classNumber: 8,
    title: 'Clase 08 · Viajes en el Tiempo (--detach), Pila Temporal (git stash) y .gitignore',
    duration: '34 min',
    timestampRange: '4:29:22 – 5:03:41',
    summary:
      'Tres herramientas indispensables para el flujo diario: cómo viajar a cualquier commit pasado en modo detached HEAD y rescatar commits huérfanos, cómo guardar trabajo a medias en una pila LIFO con git stash sin hacer commits sucios, y cómo configurar el filtro .gitignore.',
    mentalModelQuote:
      'Con --detach viajas al pasado sin mover ninguna rama; con git stash estacionas tu trabajo a medias en una pila LIFO para atender una urgencia; y con .gitignore blindas la puerta contra entornos virtuales y secretos.',
    pdfAssetPath:
      '/assets/aistudio/Clase_08_-_Curso_Git_2026__08__git_stash__--detach_y_.gitignore_6478d044.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 8),
    concepts: [
      {
        title: '8.1 git switch --detach: Qué significa estar en "Detached HEAD"',
        explanation:
          'Normalmente, el puntero HEAD apunta al nombre de una rama (ej. main) y la rama apunta al último commit. Pero ¿qué pasa si quieres ver cómo funcionaba tu proyecto hace 10 commits en el hash a1b2c3d sin alterar ni mover ninguna rama? Ejecutas git switch --detach a1b2c3d. En ese instante, HEAD se "desprende" de la rama y apunta directamente al commit antiguo. Es tu máquina del tiempo de solo lectura para probar versiones pasadas o buscar en qué commit nació un bug.',
        keyRule:
          'Si estando en detached HEAD haces commits nuevos de prueba y luego ejecutas git switch main, esos commits quedan "huérfanos" (ninguna rama los apunta) y el garbage collector de Git terminará borrándolos. Si quieres conservarlos, antes de salir rescátalos creando una rama ahí mismo con git switch -c mi-rama-rescate.',
        codeExample: {
          title: 'Viajar a un commit pasado con --detach y rescatar un experimento',
          language: 'bash',
          code: `# 1. Viajamos al commit antiguo a1b2c3d sin mover ninguna rama:
git switch --detach a1b2c3d
# You are in 'detached HEAD' state...

# 2. Caso A: Solo miramos y volvemos sano y salvo a main:
git switch main

# 3. Caso B: Hicimos un commit en detached HEAD y queremos salvarlo en una rama nueva:
git switch -c rescate-experimento`
        }
      },
      {
        title: '8.2 git stash: El estacionamiento temporal en pila LIFO',
        explanation:
          'Estás a mitad de camino programando en tu rama formulario (tienes app.py y utils.py modificados pero incompletos) y te avisan de un bug urgente en main. Intentas hacer git switch main y Git te bloquea con el error: "Your local changes to the following files would be overwritten by switch". No quieres hacer un commit falso tipo "WIP a medias no tocar". La solución es git stash: guarda tus cambios modificados y tu staging en una pila temporal interna y deja tu Working Directory completamente limpio al instante. La pila funciona como LIFO (Last In, First Out: el último en entrar es siempre stash@{0} y renumera los anteriores). Cuando terminas la urgencia y vuelves a tu rama, ejecutas git stash pop y recuperas tu trabajo exacto donde ibas.',
        keyRule:
          '¿Qué entra al stash por defecto? Entran los archivos modificados que ya estaban rastreados (tracked) y los cambios en el Staging Area. Los archivos nuevos (untracked) NO entran a menos que agregues el flag -u (git stash -u).',
        codeExample: {
          title: 'Los 6 comandos del arsenal de git stash',
          language: 'bash',
          code: `git stash                  # 1. Guarda cambios tracked en la cima de la pila (stash@{0}) y limpia el directorio
git stash -u               #    (Variante: incluye también archivos nuevos untracked)
git stash list             # 2. Muestra todos los stashes guardados en la pila LIFO
git stash pop              # 3. Recupera el último stash (stash@{0}) y lo ELIMINA de la pila (apply + drop)
git stash apply            # 4. Recupera el último stash pero lo CONSERVA guardado en la pila
git stash drop stash@{0}   # 5. Borra un stash específico de la pila sin aplicarlo
git stash clear            # 6. Vacía toda la pila de stashes (¡Sin vuelta atrás!)`
        }
      },
      {
        title: '8.3 .gitignore: El filtro en la puerta del repositorio',
        explanation:
          'En todo proyecto existen archivos que jamás deben subir al repositorio: carpetas de dependencias pesadas (node_modules/, .venv/), archivos compilados (__pycache__/, *.pyc, dist/, *.class), bases de datos locales (db.sqlite3), archivos temporales (*.log) y, sobre todo, archivos con contraseñas y claves secretas (.env). Para ignorarlos, creas en la raíz un archivo llamado .gitignore. Puedes ignorar por nombre exacto, carpeta entera (terminada en /), extensión comodín (*.log) e incluso crear excepciones con el signo de exclamación (!important.log re-incluye ese archivo aunque exista la regla *.log arriba).',
        keyRule:
          '¡Letra pequeña crítica! .gitignore solo filtra archivos que AÚN NO están siendo rastreados por Git. Si por descuido hiciste git add y commit de .env antes de ponerlo en .gitignore, Git seguirá rastreándolo hasta que lo saques del índice con git rm --cached .env.',
        codeExample: {
          title: 'Plantilla profesional de .gitignore y rescate con git rm --cached',
          language: 'bash',
          code: `# Ejemplo de archivo .gitignore combinando reglas y excepción (!):
.venv/
node_modules/
__pycache__/
*.pyc
*.log
!important.log
.env
db.sqlite3
.vscode/

# ¿Ya habías subido .env por error antes de ignorarlo? Sácalo del repo sin borrarlo de tu disco:
git rm --cached .env
git commit -m "chore: deja de rastrear archivo .env en el repositorio"`
        }
      }
    ],
    commandsTable: [
      {
        command: 'git switch --detach <commit>',
        purpose: 'Apunta HEAD directamente a un commit o tag para inspeccionar el pasado sin mover ramas',
        example: 'git switch --detach a1b2c3d',
        zoneOrImpact: 'Modo Detached HEAD'
      },
      {
        command: 'git stash / git stash -u',
        purpose: 'Guarda el trabajo en progreso en la pila temporal (con -u incluye archivos nuevos untracked)',
        example: 'git stash -u',
        zoneOrImpact: 'Working/Staging → Pila Stash'
      },
      {
        command: 'git stash list',
        purpose: 'Lista todos los cambios apilados mostrando su índice stash@{0}, stash@{1}...',
        example: 'git stash list',
        zoneOrImpact: 'Solo lectura (Pila LIFO)'
      },
      {
        command: 'git stash pop / apply',
        purpose: 'Restaura los cambios desde la pila a tu directorio (pop lo borra de la pila; apply lo conserva)',
        example: 'git stash pop',
        zoneOrImpact: 'Pila Stash → Working Directory'
      },
      {
        command: 'git rm --cached <archivo>',
        purpose: 'Deja de rastrear un archivo en Git sin eliminarlo físicamente de tu carpeta local',
        example: 'git rm --cached config.json',
        zoneOrImpact: 'Saca del índice para que .gitignore actúe'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Agregué db.sqlite3 al archivo .gitignore pero sigue apareciendo modificado en cada git status',
        whyItHappens: 'db.sqlite3 ya había sido incluido en un commit anterior, y .gitignore solo afecta a archivos untracked.',
        solutionCommand: 'git rm --cached db.sqlite3 && git commit -m "chore: quita db.sqlite3 del seguimiento"',
        explanation: 'Con --cached eliminas el archivo del seguimiento de Git pero lo conservas intacto en tu computadora.'
      }
    ]
  },
  {
    id: 'clase-09',
    classNumber: 9,
    title: 'Clase 09 · Git Rebase, Tags de Versiones y Trunk-Based Development',
    duration: '37 min',
    timestampRange: '5:03:42 – 5:41:08',
    summary:
      'Las tres piezas avanzadas para dominar el flujo profesional: cómo reubicar commits con git rebase para lograr una historia lineal antes del PR, por qué jamás se hace rebase de ramas públicas (el desastre de Alice y Bob), cómo clavar versiones inmutables con Git Tags (Lightweight vs Annotated) y la filosofía de integración continua con Trunk-Based Development.',
    mentalModelQuote:
      'Rebase para actualizar TU rama privada antes de abrir el Pull Request; Merge para unir el Pull Request a la rama compartida; Tag anotado para clavar cada release en producción.',
    pdfAssetPath:
      '/assets/aistudio/Clase_09_-_Curso_Git_2026__09__Git_Rebase__Tags___Trunk_Based_8cf261ca.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 9),
    concepts: [
      {
        title: '9.1 ¿Qué es git rebase y en qué se diferencia de git merge?',
        explanation:
          'Supongamos que creaste tu rama feature cuando main iba por el commit C. Hiciste dos commits tuyos (D y E), pero mientras tanto main avanzó con F y G. Si unes con git merge, Git conserva la bifurcación tal como ocurrió y crea un commit de unión M. En cambio, cuando te paras en feature y ejecutas git rebase main, Git toma tus commits D y E, los aparta temporalmente, actualiza la base de tu rama hasta G, y vuelve a aplicar tus cambios uno por uno encima de G creando los commits nuevos D\' y E\' (mismos cambios, pero con nuevos identificadores hash). El resultado es una historia completamente recta y lineal, como si hubieras empezado tu trabajo hoy desde la última versión de main.',
        codeExample: {
          title: 'El flujo real en equipo: Rebase antes del PR, Merge al final',
          language: 'bash',
          code: `# 1. Actualizas tu main local con lo último del equipo:
git switch main
git pull origin main

# 2. Te pasas a TU rama privada (que aún no compartiste con nadie) y haces rebase:
git switch feature/login
git rebase main
# (Si hay conflicto: editas archivo -> git add <archivo> -> git rebase --continue)

# 3. Ahora tu rama está al día y lineal. La subes y abres el Pull Request:
git push -u origin feature/login
# 4. Cuando aprueban el PR en GitHub, se integra en main con git merge.`
        }
      },
      {
        title: '9.2 La Regla de Oro del Rebase: El Desastre de Alice y Bob',
        explanation:
          'Regla de oro inquebrantable: NUNCA hagas rebase de ramas públicas compartidas en las que trabajan otras personas. ¿Por qué? Veamos qué pasa cuando Alice y Bob trabajan juntos sobre la misma rama remota feature/login: (1) Ambos descargan la rama con D y E; (2) Bob agrega el commit F y hace push; (3) Alice hace pull (recibe D, E, F) pero decide "limpiar la historia" haciendo git rebase main y fuerza la subida al remoto con git push --force-with-lease; (4) En GitHub, los commits D, E y F desaparecen y son reemplazados por D\', E\' y F\' con hashes nuevos; (5) Cuando Bob intenta hacer git pull, su Git entra en pánico: su máquina sigue teniendo los commits viejos D, E, F mientras el remoto tiene otra línea divergente D\', E\', F\', provocando conflictos cruzados y duplicación de commits.',
        keyRule:
          'Si los commits están solo en tu máquina (o en una rama donde trabajas únicamente tú antes de abrir el PR), rebase es tu mejor aliado. Si la rama ya es pública y compartida con compañeros, usa merge.'
      },
      {
        title: '9.3 Git Tags: Marcas permanentes para Releases (Lightweight vs Annotated)',
        explanation:
          'A diferencia de una rama (branch), que es un papelito móvil que avanza con cada commit nuevo, un Git Tag es una etiqueta clavada con cemento sobre un commit específico que NO se mueve jamás. Se utiliza para inmortalizar lanzamientos a producción usando Versionado Semántico (ej. v1.0.0, v1.1.0, v2.0.0). Existen dos tipos: (1) Lightweight Tag (git tag v1.0.0): un simple puntero sin metadatos adicionales; y (2) Annotated Tag (git tag -a v1.0.0 -m "Mensaje", el estándar recomendado para releases): un objeto completo en la base de datos de Git que guarda quién publicó la versión, en qué fecha exacta, el mensaje de lanzamiento y permite firma criptográfica GPG.',
        keyRule:
          '¡Detalle clave! Por seguridad y rendimiento, un git push normal NO sube los tags a GitHub. Debes empujarlos explícitamente con git push origin v1.0.0 (o git push --tags).',
        codeExample: {
          title: 'El kit completo de comandos para gestionar Tags en producción',
          language: 'bash',
          code: `# 1. Crear un Tag Anotado (Recomendado para todo release):
git tag -a v1.0.0 -m "Primera versión estable en producción"

# 2. Crear un tag sobre un commit anterior olvidado pasando su hash:
git tag -a v0.9.0 a3f25d8 -m "Versión beta inicial"

# 3. Listar todos los tags y ver los metadatos completos de un tag anotado:
git tag
git show v1.0.0

# 4. Subir un tag específico a GitHub (los tags no viajan solos con git push):
git push origin v1.0.0

# 5. Viajar al código exacto de un tag (como un tag no es una rama, usa --detach):
git switch --detach v1.0.0

# 6. Eliminar un tag mal puesto en local y en el servidor remoto:
git tag -d v1.0.0
git push origin --delete v1.0.0`
        }
      },
      {
        title: '9.4 Trunk-Based Development (TBD) vs Ramas de Larga Duración',
        explanation:
          'En los flujos tradicionales antiguos (como Git Flow clásico mal aplicado), los equipos abrían ramas feature que duraban 2 semanas, 3 semanas o 1 mes enteras aisladas. Al intentar juntarlas al final del mes, explotaban decenas de conflictos gigantescos ("Merge Hell") y nadie sabía qué cambio rompió qué. Trunk-Based Development (TBD) propone la solución moderna: todos los desarrolladores integran su trabajo frecuentemente en una única rama principal llamada el "tronco" (trunk, normalmente main). Las ramas de funcionalidad viven solo unas pocas horas o máximo 1-2 días, contienen commits pequeños, pasan por pruebas automáticas (CI/CD) y se eliminan apenas se integran (git branch -d).',
        analogy:
          'Frase clave para entrevistas técnicas: "Ramas de vida corta, cambios pequeños e integración continua al tronco, para que los merges nunca duelan."'
      }
    ],
    commandsTable: [
      {
        command: 'git rebase <rama-base>',
        purpose: 'Reaplica los commits de tu rama actual encima de la punta más reciente de la rama base',
        example: 'git rebase main',
        zoneOrImpact: 'Reescribe historia linealmente'
      },
      {
        command: 'git rebase --continue / --abort',
        purpose: 'Continúa el rebase tras resolver un conflicto con git add, o lo cancela volviendo al estado inicial',
        example: 'git rebase --continue',
        zoneOrImpact: 'Control de Rebase'
      },
      {
        command: 'git tag -a <vX.Y.Z> -m "..."',
        purpose: 'Crea una etiqueta anotada permanente con autor, fecha y mensaje en el commit actual',
        example: 'git tag -a v1.0.0 -m "Release 1.0.0"',
        zoneOrImpact: 'Marca inmutable en .git/refs/tags'
      },
      {
        command: 'git push origin <tag>',
        purpose: 'Publica una etiqueta específica en el repositorio remoto de GitHub',
        example: 'git push origin v1.0.0',
        zoneOrImpact: 'Local Tag → Remote Tag'
      },
      {
        command: 'git show <tag>',
        purpose: 'Muestra los metadatos de la etiqueta anotada (autor, fecha, mensaje) y el diff del commit etiquetado',
        example: 'git show v1.0.0',
        zoneOrImpact: 'Solo lectura'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Creé el tag v1.0.0 en mi máquina, hice git push origin main, pero en GitHub dice "0 tags"',
        whyItHappens: 'git push solo envía los commits de la rama, nunca envía las etiquetas por defecto.',
        solutionCommand: 'git push origin v1.0.0',
        explanation: 'Empuja el tag explícitamente por su nombre (o usa git push --tags para enviar todos).'
      }
    ]
  },
  {
    id: 'clase-10-11',
    classNumber: 10,
    title: 'Clases 10 y 11 · Proyecto Final "Notas Colab": Todo el Curso en una sola App (Fases 0 a 8)',
    duration: '2h 01m',
    timestampRange: '5:41:09 – 7:42:37',
    summary:
      'Simulación práctica integral de un equipo de 2 desarrolladores en un solo computador construyendo la app web "Notas Colab" con Django y uv: modelo main + develop con Rulesets, revisión de PR con Request Changes, resolución de conflictos reales con merge y con rebase, interrupción urgente con git stash, reset vs revert en GitHub, Release v1.0.0 y emergencia en producción con Hotfix v1.0.1 nacido desde un tag.',
    mentalModelQuote:
      'Aquí no venimos a memorizar comandos sueltos: conectamos dos cuentas de GitHub, dos carpetas locales con identidades distintas y las 5 reglas de oro de main y develop sobre código real.',
    pdfAssetPath:
      '/assets/aistudio/Clase_10_-_proyecto_final_git_github_7a42511e.pdf',
    timestamps: COURSE_TIMESTAMPS.filter((t) => t.classNumber === 10 || t.classNumber === 11),
    concepts: [
      {
        title: '10.1 Las 5 Reglas del Juego: Modelo main + develop en "Notas Colab"',
        explanation:
          'En el proyecto final construimos una aplicación mínima en Django usando el gestor moderno uv y simulamos un equipo real de dos personas en tu misma computadora mediante dos carpetas (~/notas-colab con tu identidad global principal, y ~/notas-colab-companero con la identidad local de tu segunda cuenta colaboradora). Todo el proyecto se gobierna por 5 reglas inquebrantables: (1) main es producción: solo contiene versiones publicadas, nadie trabaja directo en ella y solo recibe merges desde develop (releases) o desde ramas de hotfix; (2) develop es integración: es la rama por defecto del repo donde llega todo el trabajo diario por PR; (3) Las features nacen de develop y vuelven a develop por PR con revisión obligatoria; (4) Un release es un PR de develop -> main más un tag anotado que clava la versión; (5) Un hotfix de producción nace SIEMPRE desde el tag del release (nunca desde develop, que puede tener código experimental sin probar) y su corrección vuelve mediante dos PRs tanto a main como a develop (backport).'
      },
      {
        title: '10.2 Resumen de las 9 Fases Prácticas (Fase 0 a Fase 8)',
        explanation:
          'En la pestaña dedicada "Proyecto Notas Colab" de esta plataforma tienes el paso a paso interactivo con todos los archivos y comandos de las 9 fases: Fase 0 (Fundar proyecto con uv, completar .gitignore con db.sqlite3 y .env, crear develop, subir a GitHub, proteger ambas ramas con un Ruleset exigiendo 1 aprobación e invitar al colaborador); Fase 1 (Requerimiento NC-1 Modelo Nota, uso de git diff --staged, corrección con commit --amend antes de subir, PR con plantilla Qué/Por qué/Cómo probarlo, el colaborador pide ampliar max_length de 100 a 200 con Request Changes y fusión limpia); Fase 2 (El colaborador construye NC-2 página de inicio y avanza develop sin que tú hagas pull); Fase 3 (Trabajas sobre tu develop viejo en NC-3, salta conflicto real en notas/views.py al abrir el PR y lo resuelves en local con git merge develop + git diff --check); Fase 4 (NC-4 y NC-5 en paralelo donde plantas intencionalmente la semilla del año erróneo "226" en el footer y actualizas tu historia privada antes del primer push con git rebase develop y git rebase --continue); Fase 5 (A mitad de NC-6 suena la alarma del BUG-0 móvil: estacionas con git stash, revisas y fusionas el fix urgente, y retomas con git stash pop); Fase 6 (Deshaces un experimento privado con git reset --hard HEAD~2 y anulas el commit público malo "DEBUG MODE ON" usando el botón Revert de GitHub); Fase 7 (PR de Release develop -> main y tag anotado v1.0.0); y Fase 8 (Mientras develop tiene un lema [beta] sin probar, explota en producción el bug del año "226": viajas con git switch --detach v1.0.0, naces la rama hotfix/corrige-anio-footer desde el tag, abres doble PR a main y a develop y publicas el parche v1.0.1).'
      }
    ],
    commandsTable: [
      {
        command: 'uv init --name notas-colab && uv add django',
        purpose: 'Crea el proyecto Python moderno con git init automático, entorno virtual .venv y Django instalado',
        example: 'uv add django',
        zoneOrImpact: 'Fase 0 · Fundación'
      },
      {
        command: 'git config user.name / user.email (sin --global)',
        purpose: 'Configura la identidad exclusiva del segundo desarrollador dentro de ~/notas-colab-companero',
        example: 'git config user.email "colaborador@ejemplo.com"',
        zoneOrImpact: 'Fase 0.5 · Doble Identidad'
      },
      {
        command: 'git rebase develop → git rebase --continue',
        purpose: 'Reubica tus commits locales sobre la última punta de develop antes de hacer tu primer git push',
        example: 'git rebase develop',
        zoneOrImpact: 'Fase 4 · Historia Lineal'
      },
      {
        command: 'git fetch --tags && git switch --detach v1.0.0',
        purpose: 'Viaja exactamente a la foto publicada en producción para nacer el hotfix sin arrastrar cosas de develop',
        example: 'git switch -c hotfix/corrige-anio-footer',
        zoneOrImpact: 'Fase 8 · Hotfix de Producción'
      },
      {
        command: 'git fetch --prune',
        purpose: 'Limpia las referencias remotas fantasma (origin/feature/...) de ramas que ya fueron borradas en GitHub',
        example: 'git fetch --prune',
        zoneOrImpact: 'Auditoría y Limpieza Final'
      }
    ],
    pitfallsAndFixes: [
      {
        problem: 'Saqué la rama del hotfix desde develop en lugar de sacarla desde el tag v1.0.0',
        whyItHappens: 'Por costumbre creaste la rama desde develop, pero develop ya tenía el lema experimental "[beta]" que no debía salir a producción.',
        solutionCommand: 'git switch --detach v1.0.0 && git switch -c hotfix/corrige-anio-footer',
        explanation: 'Un hotfix de emergencia siempre nace desde el tag del release activo en producción y luego se fusiona tanto en main como en develop.'
      }
    ]
  }
];

export const SLIDE_DECK: SlideItem[] = [
  // CLASE 01
  {
    id: 'c1-s1',
    classNumber: 1,
    slideIndex: '01 / 04',
    sectionKicker: 'Clase 01 · Fundamentos y Modelo Mental',
    title: 'El dolor de versionar a mano vs Cómo piensa Git',
    subtitle: 'Por qué proyecto_final_BUENO_v2.zip fracasa y cómo la idea de tomar fotos completas resuelve los 3 problemas de raíz.',
    keyTakeaway: 'Un commit es una foto completa de todo el proyecto en un instante dado — nunca una lista de cambios sueltos.',
    speakerNotes:
      'Pregunta a la clase quién ha tenido una carpeta con proyecto_final_BUENO_estavezsi.zip. Explica que hoy no memorizamos comandos: entendemos el modelo mental de las fotos (snapshots) con el que los comandos caen por su propio peso.',
    visualType: 'snapshot-diff',
    bullets: [
      {
        heading: '01. El síndrome del archivo .zip',
        body: 'No sabes qué líneas cambiaron de una versión a otra, dos personas no pueden trabajar sin pisarse y no hay cómo volver atrás con seguridad.',
        code: 'proyecto.zip -> proyecto_final_BUENO_v2_estavezsi.zip',
        statusType: 'danger'
      },
      {
        heading: '02. Sistema Distribuido (DVCS)',
        body: 'Creado por Linus Torvalds en 2005. No depende de un servidor central: cada copia local tiene toda la historia y funciona 100% sin internet.',
        statusType: 'info'
      },
      {
        heading: '03. Fotos completas, diferencias calculadas',
        body: 'Cada commit guarda cómo estaba TODO el proyecto. El "+2 -2" en verde y rojo que ves en GitHub no estaba guardado: Git resta Foto B menos Foto A en el momento.',
        code: 'Commit B (hoy) - Commit A (ayer) = Diff calculado en vivo',
        statusType: 'nominal'
      }
    ]
  },
  {
    id: 'c1-s2',
    classNumber: 1,
    slideIndex: '02 / 04',
    sectionKicker: 'Clase 01 · Las 3 Áreas y los 4 Estados',
    title: '¿Dónde viven tus archivos antes de la foto?',
    subtitle: 'El flujo universal que repetirás toda tu carrera: editas en tu carpeta, preparas el grupo en Staging y disparas la foto al Repositorio.',
    keyTakeaway: 'git add no guarda en el historial: solo forma el grupo en el Staging Area. Si vuelves a editar después del add, ese cambio nuevo queda afuera.',
    speakerNotes:
      'Usa la analogía de la fiesta: Working Directory es la gente moviéndose, Staging Area es decir "ustedes párense aquí para el retrato" (git add) y Repository (.git) es la foto ya impresa en el álbum (git commit). Haz clic en los pasos de la terminal interactiva.',
    visualType: 'three-zones',
    bullets: [
      {
        heading: 'Zona 1 · Working Directory (Tus archivos)',
        body: 'Tu carpeta de trabajo. Los archivos nuevos nacen como Untracked (rojo) y los ya conocidos que editas pasan a Modified (rojo).',
        code: 'echo "Hola Git" > saludo.txt   # Estado: Untracked',
        statusType: 'danger'
      },
      {
        heading: 'Zona 2 · Staging Area (Lo que preparas)',
        body: 'Con git add congelas una copia exacta del archivo en ese instante para entrar en la próxima foto. Pasa a estado Staged (verde).',
        code: 'git add saludo.txt             # Estado: Changes to be committed',
        statusType: 'warning'
      },
      {
        heading: 'Zona 3 · Repository .git (El álbum inmutable)',
        body: 'Con git commit disparas la foto de lo que había en Staging. Queda firmada con un hash único (ej. a3f5c9e) en .git/objects/.',
        code: 'git commit -m "Mi primer commit"  # Estado: Committed',
        statusType: 'nominal'
      }
    ],
    terminalSteps: [
      {
        command: 'git init',
        output: ['Initialized empty Git repository in /mi-proyecto/.git/'],
        explanation: '1. Nace la caja negra oculta .git/ que contendrá el álbum de fotos.',
        zoneHighlight: 'repo'
      },
      {
        command: 'echo "Hola v1" > saludo.txt && git status',
        output: [
          'On branch main',
          'No commits yet',
          'Untracked files:',
          '  (use "git add <file>..." to include in what will be committed)',
          '        saludo.txt'
        ],
        explanation: '2. El archivo vive en el Working Directory como Untracked (rojo).',
        zoneHighlight: 'working'
      },
      {
        command: 'git add saludo.txt && git status',
        output: [
          'On branch main',
          'Changes to be committed:',
          '  (use "git rm --cached <file>..." to unstage)',
          '        new file:   saludo.txt'
        ],
        explanation: '3. git add congela la versión v1 de saludo.txt dentro del Staging Area (verde).',
        zoneHighlight: 'staging'
      },
      {
        command: 'git commit -m "feat: primera foto" && git log --oneline',
        output: [
          '[main (root-commit) a3f5c9e] feat: primera foto',
          ' 1 file changed, 1 insertion(+)',
          'a3f5c9e (HEAD -> main) feat: primera foto'
        ],
        explanation: '4. La foto entra para siempre al Repository (.git) con el número de serie único a3f5c9e.',
        zoneHighlight: 'repo'
      }
    ]
  },
  // CLASE 02
  {
    id: 'c2-s1',
    classNumber: 2,
    slideIndex: '01 / 02',
    sectionKicker: 'Clase 02 · Instalación e Identidad',
    title: 'Cada foto sale firmada con tu identidad',
    subtitle: 'Por qué Git vive en la terminal, cómo verificar git --version y cómo configurar tu firma global o por carpeta.',
    keyTakeaway: 'git config --global user.name y user.email no inician sesión en ningún servidor: le indican a Git quién firma cada foto que tomes.',
    speakerNotes:
      'Recalca que el correo que configuren queda público dentro de los metadatos del commit. Si trabajan con dos cuentas (como haremos en el proyecto final Notas Colab), la configuración local sin --global sobreescribe a la global.',
    visualType: 'terminal-sim',
    bullets: [
      {
        heading: '01. Mismo destino en cualquier Sistema Operativo',
        body: 'Instales con winget (Windows), brew (macOS) o apt (Linux), el objetivo es que la terminal responda con git version 2.x.x.',
        code: 'git --version   # -> git version 2.45.1',
        statusType: 'info'
      },
      {
        heading: '02. Firma Global (--global) vs Firma Local por carpeta',
        body: 'Con --global firmas todos los proyectos de tu PC. Sin --global dentro de un repo, firmas solo los commits de ese proyecto.',
        code: 'git config --global user.name "Ada Lovelace"\ngit config --global user.email "ada@correo.com"',
        statusType: 'nominal'
      },
      {
        heading: '03. Anatomía interna de la firma del commit',
        body: 'Dentro del commit quedan grabados para siempre 4 datos inmutables: Hash único, Autor (Nombre + Correo), Fecha/Hora exacta y Mensaje.',
        statusType: 'warning'
      }
    ],
    terminalSteps: [
      {
        command: 'git config --global user.name "Ada Lovelace"',
        output: ['# Guardado en ~/.gitconfig para todos tus proyectos'],
        explanation: 'Establece el nombre de autor a nivel global en tu computadora.',
        zoneHighlight: 'repo'
      },
      {
        command: 'git config --global user.email "ada@correo.com"',
        output: ['# Usa el mismo correo de tu cuenta de GitHub'],
        explanation: 'Establece el correo que GitHub usará más adelante para enlazar tus commits a tu perfil.',
        zoneHighlight: 'repo'
      },
      {
        command: 'git init && git add README.md && git commit -m "feat: crea el README inicial"',
        output: [
          'Initialized empty Git repository in ~/mi-proyecto/.git/',
          '[main (root-commit) a1b2c3d] feat: crea el README inicial',
          ' Author: Ada Lovelace <ada@correo.com>',
          ' 1 file changed, 1 insertion(+)'
        ],
        explanation: 'Tu primer flujo completo firmado con tu identidad.',
        zoneHighlight: 'repo'
      }
    ]
  },
  {
    id: 'c2-s2',
    classNumber: 2,
    slideIndex: '02 / 02',
    sectionKicker: 'Clase 02 · Conventional Commits',
    title: 'Cómo escribir mensajes de commit profesionales',
    subtitle: 'Modo imperativo, conciso arriba, explicando el porqué y estructurado con el estándar Conventional Commits.',
    keyTakeaway: 'Con feat: y fix: cubres el 80% de tu carrera. Completa mentalmente la frase: "Si se aplica, este commit... [Agrega / Corrige / Actualiza]".',
    speakerNotes:
      'Muestra por qué "cambios" o "cosas" es inútil en un equipo. Explica la estructura tipo(scope): descripción y advierte sobre el uso de IA: la IA propone el texto, pero el desarrollador revisa y manda.',
    visualType: 'comparison-table',
    bullets: [
      {
        heading: 'Regla 1 · Modo Imperativo',
        body: 'Escribe "Agrega validación" o "Corrige cálculo", nunca en pasado ("Agregué") ni en gerundio ("Agregando").',
        code: 'feat(auth): agrega login con Google',
        statusType: 'nominal'
      },
      {
        heading: 'Regla 2 · El porqué sobre el cómo',
        body: 'El código ya muestra qué líneas tocaste. Si la razón no es obvia, explica por qué hizo falta el cambio.',
        code: 'fix(carrito): ajusta tasa de impuesto según normativa junio 2026',
        statusType: 'info'
      },
      {
        heading: 'Regla 3 · IA con criterio humano',
        body: 'Las herramientas de IA redactan excelentes borradores de commit, pero tú debes leer el diff y confirmar que describa la verdad.',
        statusType: 'warning'
      }
    ],
    comparisonTable: {
      headers: ['Prefijo', 'Propósito Cuándo Usarlo', 'Ejemplo Real'],
      rows: [
        ['feat', 'Nueva funcionalidad visible para el usuario', 'feat(notas): agrega modelo Nota con fecha automática'],
        ['fix', 'Corrección de un bug o error de comportamiento', 'fix(inicio): corrige año 2026 en el pie de página'],
        ['docs', 'Cambios exclusivos en documentación (README, guías)', 'docs: explica pasos de instalación con uv'],
        ['refactor', 'Reestructura código interno sin cambiar qué hace', 'refactor(views): extrae cálculo de estadísticas'],
        ['style / perf', 'Formato (espacios, comillas) / Mejora de rendimiento', 'perf(db): optimiza conteo con Nota.objects.count()'],
        ['test / chore', 'Pruebas automáticas / Mantenimiento (.gitignore, deps)', 'chore: agrega db.sqlite3 y .env al .gitignore']
      ]
    }
  },
  // CLASE 03
  {
    id: 'c3-s1',
    classNumber: 3,
    slideIndex: '01 / 02',
    sectionKicker: 'Clase 03 · Ramas por dentro',
    title: 'Una rama es solo un papelito con un identificador',
    subtitle: 'Rompiendo el mito más caro: abrir una rama no duplica carpetas ni archivos; solo crea un puntero de 41 bytes a un commit.',
    keyTakeaway: 'Una rama apunta a un commit, y HEAD apunta a la rama en la que estás parado ahora mismo ("Usted está aquí").',
    speakerNotes:
      'Recorre los 4 pasos interactivos del grafo para mostrar cómo main y feature/kelvin son simples etiquetas apuntando a nodos y cómo HEAD decide cuál etiqueta avanza al hacer commit.',
    visualType: 'branch-pointer',
    bullets: [
      {
        heading: '01. Cero duplicación de archivos',
        body: 'Crear una rama escribe un archivo de texto plano en .git/refs/heads/<nombre> con el hash del commit actual. Es instantáneo y gratis.',
        code: 'git branch feature/kelvin   # Solo crea el papelito en c3',
        statusType: 'nominal'
      },
      {
        heading: '02. El papelito HEAD ("Usted está aquí")',
        body: 'HEAD guarda el nombre de la rama activa. Al ejecutar git switch, HEAD salta a la otra rama y actualiza tus archivos.',
        code: 'git switch -c feature/kelvin  # Crea la rama y mueve HEAD a ella',
        statusType: 'info'
      },
      {
        heading: '03. Convención de nombres limpios',
        body: 'Todo en minúsculas, palabras separadas por guiones y con prefijo semántico: feature/, fix/, hotfix/, docs/.',
        code: 'feature/escala-kelvin   |   feature/formato-resultado',
        statusType: 'warning'
      }
    ],
    terminalSteps: [
      {
        command: 'git log --oneline',
        output: [
          '0fad0 (HEAD -> main) redondea a 2 decimales',
          'f8a9d convierte en 2 sentidos',
          '31dd6 crea conversor básico'
        ],
        explanation: 'Escena 1: Tenemos 3 commits en línea recta en main. HEAD apunta a main.',
        graphState: {
          nodes: [
            { id: '31dd6', label: '31dd6', branch: 'main', x: 80, y: 120 },
            { id: 'f8a9d', label: 'f8a9d', branch: 'main', x: 200, y: 120, parent: '31dd6' },
            { id: '0fad0', label: '0fad0', branch: 'main', x: 320, y: 120, parent: 'f8a9d' }
          ],
          pointers: [
            { name: 'main', target: '0fad0', type: 'branch' },
            { name: 'HEAD', target: '0fad0', type: 'head' }
          ]
        }
      },
      {
        command: 'git switch -c feature/kelvin && git commit -m "feat: añade escala Kelvin"',
        output: [
          'Switched to a new branch \'feature/kelvin\'',
          '[feature/kelvin k1a2b] feat: añade escala Kelvin'
        ],
        explanation: 'Escena 2: Nace el papelito feature/kelvin, HEAD salta a él y avanza al nuevo commit k1a2b mientras main sigue intacta en 0fad0.',
        graphState: {
          nodes: [
            { id: '31dd6', label: '31dd6', branch: 'main', x: 80, y: 120 },
            { id: 'f8a9d', label: 'f8a9d', branch: 'main', x: 200, y: 120, parent: '31dd6' },
            { id: '0fad0', label: '0fad0', branch: 'main', x: 320, y: 120, parent: 'f8a9d' },
            { id: 'k1a2b', label: 'k1a2b', branch: 'feature', x: 450, y: 55, parent: '0fad0' }
          ],
          pointers: [
            { name: 'main', target: '0fad0', type: 'branch' },
            { name: 'feature/kelvin', target: 'k1a2b', type: 'branch' },
            { name: 'HEAD', target: 'k1a2b', type: 'head' }
          ]
        }
      },
      {
        command: 'git switch main && git switch -c feature/formato && git commit -m "feat: mejora formato"',
        output: [
          'Switched to branch \'main\'',
          'Switched to a new branch \'feature/formato\'',
          '[feature/formato u7v8w] feat: mejora formato'
        ],
        explanation: 'Escena 3: Volvemos a main (0fad0) y abrimos una segunda línea paralela feature/formato (u7v8w). Dos desarrollos avanzan sin pisarse.',
        graphState: {
          nodes: [
            { id: '31dd6', label: '31dd6', branch: 'main', x: 80, y: 120 },
            { id: 'f8a9d', label: 'f8a9d', branch: 'main', x: 200, y: 120, parent: '31dd6' },
            { id: '0fad0', label: '0fad0', branch: 'main', x: 320, y: 120, parent: 'f8a9d' },
            { id: 'k1a2b', label: 'k1a2b', branch: 'feature', x: 450, y: 55, parent: '0fad0' },
            { id: 'u7v8w', label: 'u7v8w', branch: 'develop', x: 450, y: 185, parent: '0fad0' }
          ],
          pointers: [
            { name: 'main', target: '0fad0', type: 'branch' },
            { name: 'feature/kelvin', target: 'k1a2b', type: 'branch' },
            { name: 'feature/formato', target: 'u7v8w', type: 'branch' },
            { name: 'HEAD', target: 'u7v8w', type: 'head' }
          ]
        }
      }
    ]
  },
  // CLASE 04
  {
    id: 'c4-s1',
    classNumber: 4,
    slideIndex: '01 / 02',
    sectionKicker: 'Clase 04 · Merges: Fast-Forward vs Three-Way',
    title: 'Cómo unir ramas paralelas en una sola línea',
    subtitle: 'Párate siempre en la rama que recibe (destino) y jala la rama que aporta (origen). Conoce los dos tipos de merge.',
    keyTakeaway: 'Si main no se movió, Git hace Fast-Forward (solo adelanta el puntero). Si ambas ramas avanzaron, Git hace Three-Way Merge creando un commit de unión con dos padres.',
    speakerNotes:
      'Muestra la diferencia visual entre el caso feliz trabajando solo (Fast-Forward) y el trabajo real en equipo donde ambas ramas avanzaron (Three-Way Merge mirando ancestro común + origen + destino).',
    visualType: 'merge-comparison',
    bullets: [
      {
        heading: 'Regla de Oro · Párate en la que recibe',
        body: 'Para llevar el trabajo de login hacia main, primero ejecutas git switch main y luego git merge login.',
        code: 'git switch main && git merge login',
        statusType: 'info'
      },
      {
        heading: 'Tipo 1 · Fast-Forward (Sin commit nuevo)',
        body: 'Cuando main se quedó quieta mientras login avanzaba, Git solo desliza el papelito de main hasta alcanzar a login.',
        code: 'Updating 0fad0..k1a2b -> Fast-forward',
        statusType: 'nominal'
      },
      {
        heading: 'Tipo 2 · Three-Way Merge (Commit de 2 padres)',
        body: 'Cuando ambas ramas tienen commits nuevos, Git compara 3 fotos (ancestro común + main + login) y crea un commit de merge M.',
        code: 'Merge made by the \'ort\' strategy.',
        statusType: 'warning'
      }
    ]
  },
  {
    id: 'c4-s2',
    classNumber: 4,
    slideIndex: '02 / 02',
    sectionKicker: 'Clase 04 · Resolución de Conflictos',
    title: 'Los marcadores de conflicto y la receta de 2 pasos',
    subtitle: 'Solo chocan si dos ramas tocaron la misma línea del mismo archivo de formas distintas. Git frena y te pide desempatar.',
    keyTakeaway: 'Receta universal para cualquier conflicto: 1) Decide el texto final y borra las líneas <<< === >>>; 2) Haz git add + git commit (o usa git merge --abort para cancelar).',
    speakerNotes:
      'Desmitifica el miedo a los marcadores. Explica qué significa HEAD (donde estás parado), la línea divisoria ======= y el nombre de la rama inferior. Recuerda mencionar git diff --check.',
    visualType: 'conflict-markers',
    bullets: [
      {
        heading: '<<<<<<< HEAD (Tu versión actual)',
        body: 'Todo lo que aparece entre <<<<<<< HEAD y ======= es lo que tiene la rama donde estás parado ahora mismo (ej. main).',
        code: '<<<<<<< HEAD\nColor favorito: rojo',
        statusType: 'info'
      },
      {
        heading: '>>>>>>> cambio-color (La rama que traes)',
        body: 'Todo lo que está debajo de ======= hasta >>>>>>> es la propuesta que viene de la rama que estás fusionando.',
        code: '=======\nColor favorito: verde\n>>>>>>> cambio-color',
        statusType: 'warning'
      },
      {
        heading: 'Resolución limpia o Escape seguro',
        body: 'Borras los 3 marcadores dejando el código limpio, ejecutas git add colores.txt y git commit. Si te asustas: git merge --abort.',
        code: 'git add colores.txt && git commit -m "merge: queda rojo"',
        statusType: 'nominal'
      }
    ]
  },
  // CLASE 05
  {
    id: 'c5-s1',
    classNumber: 5,
    slideIndex: '01 / 01',
    sectionKicker: 'Clase 05 · Git vs GitHub y Sincronización Remota',
    title: 'De tu máquina a la nube: origin, push -u, fetch y pull',
    subtitle: 'Git es el motor local; GitHub es la plataforma en la nube donde vive otra copia completa para respaldar y colaborar.',
    keyTakeaway: 'origin es solo un alias para la URL remota; -u fija el seguimiento la primera vez; fetch trae sin mezclar (prudente) y pull trae + fusiona al instante (fetch + merge).',
    speakerNotes:
      'Aclara los dos caminos de inicio: git clone (cuando ya existe en GitHub) vs git remote add origin (cuando nació en local). Destaca por qué git pull puede generar un conflicto: porque lleva un git merge adentro.',
    visualType: 'remote-sync',
    bullets: [
      {
        heading: 'origin es un alias + el flag -u (--set-upstream)',
        body: 'Con git remote add origin <url> le das un nombre corto a la URL. Con git push -u origin main enlazas tu rama local con origin/main.',
        code: 'git remote add origin https://github.com/user/repo.git\ngit push -u origin main',
        statusType: 'info'
      },
      {
        heading: 'git fetch (El prudente 🧐)',
        body: 'Descarga los commits nuevos del servidor a origin/main para que los revises, pero NO toca tus archivos ni los mezcla con tu trabajo.',
        code: 'git fetch origin   # Descarga novedades sin mezclar',
        statusType: 'nominal'
      },
      {
        heading: 'git pull (El rápido ⚡ = fetch + merge)',
        body: 'Descarga los cambios del remoto y ejecuta un merge inmediato con tu rama actual. Rápido, pero puede disparar conflictos.',
        code: 'git pull origin main   # Equivale a fetch + merge',
        statusType: 'warning'
      }
    ]
  },
  // CLASE 06
  {
    id: 'c6-s1',
    classNumber: 6,
    slideIndex: '01 / 01',
    sectionKicker: 'Clase 06 · Pull Requests y Trabajo en Equipo',
    title: 'La única puerta de entrada a main: Pull Request + Code Review',
    subtitle: 'Con main protegida por un Ruleset, ningún push directo pasa. Todo cambio entra por PR revisado y aprobado por otro par de ojos.',
    keyTakeaway: 'Si el revisor pide cambios (Request Changes) o aparece un conflicto con main, el autor corrige en su misma rama, hace commit + push y el mismo PR se actualiza solo.',
    speakerNotes:
      'Explica la diferencia entre Caso 1 (el conflicto ya existe al abrir el PR porque un compañero mergeó antes) y Caso 2 (el conflicto aparece mientras revisan tu PR porque otro PR entró a main en el medio).',
    visualType: 'pr-lifecycle',
    bullets: [
      {
        heading: '01. Rama protegida (Error GH006)',
        body: 'Configurando un Ruleset en GitHub sobre main y develop, el push directo rebota y se exige 1 aprobación obligatoria de otra persona.',
        code: 'remote: error: GH006: Protected branch update failed for \'main\'',
        statusType: 'danger'
      },
      {
        heading: '02. Ciclo del PR y Revisión en Borrador',
        body: 'Usa "Start a review" (no "Comment" suelto) para agrupar todas tus observaciones de línea en un solo veredicto: Approve o Request Changes.',
        code: 'rama -> commits -> push -> PR -> Review -> Merge -> Delete branch',
        statusType: 'nominal'
      },
      {
        heading: '03. Conflictos en PR (Caso 1 y Caso 2)',
        body: 'Los resuelve el autor del PR: traes main actualizada a tu rama local, resuelves los marcadores, haces commit y git push.',
        code: 'git switch main && git pull\ngit switch mi-rama && git merge main\n# resolver -> git add . -> git commit -> git push',
        statusType: 'warning'
      }
    ]
  },
  // CLASE 07
  {
    id: 'c7-s1',
    classNumber: 7,
    slideIndex: '01 / 01',
    sectionKicker: 'Clase 07 · Deshacer Cambios sin Miedo',
    title: 'diff, restore, --amend, reset (--soft / --mixed / --hard) y revert',
    subtitle: 'Primero inspecciona con git diff; luego elige la herramienta exacta según si el error vive solo en tu máquina o ya fue compartido.',
    keyTakeaway: 'Historia privada (sin push) -> puedes reescribir con --amend o git reset. Historia compartida (con push) -> corrige siempre hacia adelante con git revert.',
    speakerNotes:
      'Pasa por la tabla de los 3 modos de git reset (--soft conserva staging, --mixed vacía staging pero conserva tus ediciones, --hard destruye todo) y contrástalo con git revert que crea un commit nuevo seguro para el equipo.',
    visualType: 'undo-matrix',
    bullets: [
      {
        heading: 'Inspeccionar y Restaurar Archivos (diff & restore)',
        body: 'git diff ve lo no preparado; git diff --staged ve lo preparado. git restore descarta cambios y git restore --staged saca del staging sin borrar nada.',
        code: 'git restore app.py              # Descarta edición local\ngit restore --staged config.py  # Deshace git add sin perder código\ngit restore --source=HEAD~1 a.py # Rescata versión de hace 1 commit',
        statusType: 'info'
      },
      {
        heading: 'Historia Local Privada (--amend & reset)',
        body: '--amend corrige el último commit. git reset HEAD~1 retrocede la rama: --soft deja en staging, --mixed deja en working dir, --hard borra todo.',
        code: 'git commit --amend -m "Nuevo mensaje"\ngit reset --soft HEAD~1   # Conserva en Staging\ngit reset --hard HEAD~1   # Elimina cambios por completo',
        statusType: 'warning'
      },
      {
        heading: 'Historia Compartida Pública (git revert)',
        body: 'Cuando ya hiciste push, nunca uses reset. git revert <hash> crea un commit nuevo que invierte los efectos del commit malo sin romper el repo del equipo.',
        code: 'git revert c3f2a1d && git push origin main',
        statusType: 'nominal'
      }
    ],
    comparisonTable: {
      headers: ['Modo de git reset', '¿Mueve la rama atrás?', '¿Conserva Staging Area?', '¿Conserva Working Directory?'],
      rows: [
        ['git reset --soft HEAD~1', 'Sí (retrocede a HEAD~1)', 'Sí (cambios listos en verde)', 'Sí (archivos intactos)'],
        ['git reset --mixed HEAD~1 (default)', 'Sí (retrocede a HEAD~1)', 'No (se vacía el staging)', 'Sí (cambios presentes en rojo)'],
        ['git reset --hard HEAD~1', 'Sí (retrocede a HEAD~1)', 'No (se vacía el staging)', 'No (cambios ELIMINADOS sin vuelta atrás)']
      ]
    }
  },
  // CLASE 08
  {
    id: 'c8-s1',
    classNumber: 8,
    slideIndex: '01 / 01',
    sectionKicker: 'Clase 08 · Herramientas del Día a Día',
    title: 'Viajar con --detach, apilar con git stash y filtrar con .gitignore',
    subtitle: 'Inspecciona cualquier punto del pasado sin mover ramas, guarda trabajo incompleto en una pila LIFO ante emergencias y evita subir secretos.',
    keyTakeaway: 'Si haces commits en detached HEAD, rescátalos con git switch -c <rama> antes de salir. Y recuerda que .gitignore solo filtra archivos aún no rastreados.',
    speakerNotes:
      'Muestra cómo git stash apila en orden LIFO (stash@{0} siempre es el más reciente) y cómo pop = apply + drop. Recuerda el truco de git rm --cached cuando alguien subió .env o db.sqlite3 antes de configurar .gitignore.',
    visualType: 'detach-stash-ignore',
    bullets: [
      {
        heading: '01. git switch --detach <hash> (Máquina del tiempo)',
        body: 'HEAD apunta directo al commit sin mover ninguna rama. Si creas commits ahí (huérfanos), sálvalos antes de salir con git switch -c mi-rama.',
        code: 'git switch --detach a1b2c3d\n# Para rescatar commits hechos aquí:\ngit switch -c rama-rescate',
        statusType: 'info'
      },
      {
        heading: '02. git stash (Pila temporal LIFO)',
        body: 'Estaciona cambios tracked para dejar el directorio limpio y cambiar de rama. Usa -u para incluir untracked y pop para recuperar y borrar de la pila.',
        code: 'git stash -u          # Guarda en stash@{0}\ngit stash list        # Ver pila LIFO\ngit stash pop         # Aplica y elimina de la pila',
        statusType: 'warning'
      },
      {
        heading: '03. .gitignore y negación con !',
        body: 'Ignora .venv/, node_modules/, *.log y .env. Usa !important.log para excepciones y git rm --cached si el archivo ya estaba rastreado.',
        code: '*.log\n!important.log\n# Si ya estaba en un commit anterior:\ngit rm --cached .env',
        statusType: 'nominal'
      }
    ]
  },
  // CLASE 09
  {
    id: 'c9-s1',
    classNumber: 9,
    slideIndex: '01 / 02',
    sectionKicker: 'Clase 09 · Git Rebase y la Regla de Oro',
    title: 'Merge vs Rebase y el Desastre de Alice y Bob',
    subtitle: 'Rebase reubica tus commits sobre la punta más reciente logrando una historia lineal, pero cambia los hashes: jamás lo uses en ramas compartidas.',
    keyTakeaway: 'Flujo profesional en equipo: usa git rebase en TU rama local para actualizarla antes de abrir el PR, y usa git merge al final para integrar el PR en main/develop.',
    speakerNotes:
      'Camina por los 5 pasos del desastre de Alice y Bob: cuando Alice hace rebase + push forzado sobre una rama compartida donde Bob también trabajaba, reescribe D, E, F como D\', E\', F\' y rompe la sincronización de Bob.',
    visualType: 'rebase-alice-bob',
    bullets: [
      {
        heading: 'Cómo funciona git rebase',
        body: 'Aparta temporalmente tus commits D y E, avanza tu rama hasta la última versión de main (G) y los reaplica encima como D\' y E\' con hashes nuevos.',
        code: 'git switch feature\ngit rebase main\n# Si hay conflicto: editar -> git add . -> git rebase --continue',
        statusType: 'info'
      },
      {
        heading: 'La Regla de Oro (Alice & Bob)',
        body: 'Nunca hagas rebase de ramas públicas compartidas. Al cambiar los hashes de commits que otro compañero ya descargó, creas historias divergentes rotas.',
        statusType: 'danger'
      },
      {
        heading: 'La dupla perfecta: Rebase + Merge',
        body: '1) Actualizas tu rama local privada con git rebase develop antes de subirla; 2) Abres un PR limpio y lineal; 3) Se une a develop con git merge.',
        statusType: 'nominal'
      }
    ]
  },
  {
    id: 'c9-s2',
    classNumber: 9,
    slideIndex: '02 / 02',
    sectionKicker: 'Clase 09 · Git Tags y Trunk-Based Development',
    title: 'Etiquetas permanentes (Tags) y vivir pegados al tronco (TBD)',
    subtitle: 'Clava cada versión publicada (v1.0.0) con un Annotated Tag que nunca se mueve, e integra ramas cortas de horas en el tronco principal.',
    keyTakeaway: 'Una rama avanza con cada commit; un tag queda clavado para siempre en esa foto. Y recuerda: los tags NO viajan solos con git push.',
    speakerNotes:
      'Compara Lightweight Tag vs Annotated Tag (-a -m) y muestra por qué Trunk-Based Development reemplazó a las ramas eternas de semanas: ramas de horas + commits pequeños = merges que nunca duelen.',
    visualType: 'tags-trunk',
    bullets: [
      {
        heading: '01. Annotated Tag (Recomendado para Releases)',
        body: 'Guarda autor, fecha, mensaje de release y commit exacto. Empújalo explícitamente al servidor con git push origin v1.0.0.',
        code: 'git tag -a v1.0.0 -m "Primera versión estable"\ngit show v1.0.0\ngit push origin v1.0.0',
        statusType: 'nominal'
      },
      {
        heading: '02. Viajar o nacer un Hotfix desde un Tag',
        body: 'Como un tag no es una rama, lo visitas con --detach. Desde ahí puedes nacer una rama de hotfix con la foto exacta de producción.',
        code: 'git switch --detach v1.0.0\ngit switch -c hotfix/v1.0.1',
        statusType: 'warning'
      },
      {
        heading: '03. Trunk-Based Development (TBD)',
        body: 'En lugar de ramas que duran semanas acumulando conflictos, todos integran varias veces al día en el tronco con ramas efímeras que se borran al fusionar.',
        code: 'git pull -> git switch -c feat/boton -> commit -> PR & merge -> git branch -d',
        statusType: 'info'
      }
    ]
  },
  // CLASES 10 Y 11
  {
    id: 'c10-s1',
    classNumber: 10,
    slideIndex: '01 / 01',
    sectionKicker: 'Clases 10 y 11 · Proyecto Final Integrador',
    title: '"Notas Colab": Todo el curso aplicado en un equipo real (Fases 0 a 8)',
    subtitle: 'Dos cuentas de GitHub, dos carpetas locales con uv + Django, modelo main/develop protegido y todos los escenarios de la vida real.',
    keyTakeaway: 'Desde fundar el repo y pedir cambios en un PR hasta resolver conflictos con merge y rebase, usar stash en una urgencia, revertir un error público y lanzar un hotfix desde el tag v1.0.0.',
    speakerNotes:
      'Invita a los alumnos a cambiar a la pestaña "Proyecto Notas Colab" de la aplicación para ejecutar paso a paso las 9 fases completas alternando entre la Cuenta Principal y la Cuenta del Colaborador.',
    visualType: 'comparison-table',
    bullets: [
      {
        heading: 'Reglas de main y develop en Notas Colab',
        body: 'main es producción (solo recibe releases desde develop o hotfixes). develop es integración por defecto (recibe todas las features por PR aprobado).',
        statusType: 'nominal'
      },
      {
        heading: 'La semilla del bug "226" -> "2026"',
        body: 'En la Fase 4 plantamos "Notas Colab 226" en el footer con rebase; pasa en el Release v1.0.0 (Fase 7) y en la Fase 8 nacemos el hotfix desde el tag v1.0.0 sin arrastrar el lema [beta] de develop.',
        statusType: 'warning'
      },
      {
        heading: 'Doble destino de todo Hotfix',
        body: 'El hotfix se fusiona con PR 1 hacia main (y se etiqueta v1.0.1) y con PR 2 hacia develop (backport) para que el próximo release no reviva el bug.',
        statusType: 'info'
      }
    ],
    comparisonTable: {
      headers: ['Fase', 'Misión en "Notas Colab"', 'Herramientas de Git & GitHub Practicadas'],
      rows: [
        ['Fase 0', 'Fundar proyecto Django con uv y 2 puestos de trabajo', 'uv init, .gitignore, main/develop, Ruleset (1 approval), config local vs global'],
        ['Fase 1', 'Requerimiento NC-1: Modelo Nota y primera revisión', 'feature branch, git diff --staged, commit --amend, PR, Request Changes, Delete branch'],
        ['Fase 2 y 3', 'NC-2 y NC-3: Trabajo paralelo y conflicto real (Caso 2)', 'Avance de develop sin pull, conflicto en notas/views.py, git merge develop, diff --check'],
        ['Fase 4', 'NC-4 y NC-5: Pie de página con historia lineal', 'Rebase de historia privada antes del primer push, conflicto en rebase, rebase --continue'],
        ['Fase 5', 'NC-6 + BUG-0: Interrupción urgente a mitad de tarea', 'git stash, git fetch, revisión de emergencia, git stash pop y cierre con rebase'],
        ['Fase 6', 'Experimento fallido vs Error público (NC-7 DEBUG MODE)', 'git reset --hard HEAD~2 (privado) vs Botón Revert en GitHub (compartido)'],
        ['Fase 7 y 8', 'Release v1.0.0 + Emergencia Hotfix BUG-1 (v1.0.1)', 'PR develop -> main, git tag -a v1.0.0, switch --detach v1.0.0, doble PR hotfix y tag v1.0.1']
      ]
    }
  }
];
