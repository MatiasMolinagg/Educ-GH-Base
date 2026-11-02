# Guía Completa de Aprendizaje Paso a Paso: Git & GitHub Masterclass (2026)

> **Manual técnico de estudio, referencia de comandos y guía práctica paso a paso.**  
> Cubre desde el modelo mental interno de Git (`Working Directory`, `Staging Area`, `.git`, `HEAD`) hasta flujos colaborativos profesionales en GitHub (`Pull Requests`, `Rulesets`, `Rebase`, `Tags`, `Trunk-Based Development`) y el proyecto final integrador **"Notas Colab"** (Django + `uv`).

---

## Qué vas a aprender en esta guía

- **Commits, staging, ramas y `HEAD` por dentro**: por qué un commit es una foto completa y cómo funciona una rama como un puntero de 41 bytes.
- **Merge, conflictos, rebase y cuándo usar cada uno**: diferencia entre *Fast-Forward*, *Three-Way Merge* y *Rebase*, lectura de marcadores `<<<<<<< ======= >>>>>>>` y la regla de oro de Alice y Bob.
- **GitHub profesional**: repositorios remotos, alias `origin`, `git push -u`, `git fetch` vs `git pull`, Tokens de Acceso Personal (PAT), *Pull Requests*, *Code Review* y protección de ramas con *Rulesets*.
- **Deshacer errores sin miedo**: `git diff`, `git restore`, `git commit --amend`, los 3 modos de `git reset` (`--soft`, `--mixed`, `--hard`), `git revert`, viajes con `--detach` y la pila `LIFO` de `git stash`.
- **Flujo de equipo real con `main`, `develop`, `release` y `hotfix`**: simulación paso a paso de un equipo de 2 desarrolladores construyendo la app **Notas Colab**.

## Índice de Módulos

- **[Clase 01 · Cómo piensa Git: Working Directory, Staging y Repositorio](#clase-1)** *(0:00:00 – 0:33:19 · 33 min)*
- **[Clase 02 · Instalación, Configuración de Identidad y Conventional Commits](#clase-2)** *(0:33:20 – 1:10:41 · 37 min)*
- **[Clase 03 · Ramas (Branches) y el puntero HEAD por dentro](#clase-3)** *(1:10:42 – 1:54:55 · 44 min)*
- **[Clase 04 · Merges & Conflicts: Unir ramas y desempatar choques](#clase-4)** *(1:54:56 – 2:30:45 · 36 min)*
- **[Clase 05 · Git vs GitHub: Repositorios Remotos, origin, push, fetch y pull](#clase-5)** *(2:30:46 – 3:08:27 · 38 min)*
- **[Clase 06 · Pull Requests (PR), Protección de Ramas y Code Review en Equipo](#clase-6)** *(3:08:28 – 3:43:37 · 35 min)*
- **[Clase 07 · Deshacer Cambios en Git: diff, restore, --amend, reset y revert](#clase-7)** *(3:43:38 – 4:29:21 · 45 min)*
- **[Clase 08 · Viajes en el Tiempo (--detach), Pila Temporal (git stash) y .gitignore](#clase-8)** *(4:29:22 – 5:03:41 · 34 min)*
- **[Clase 09 · Git Rebase, Tags de Versiones y Trunk-Based Development](#clase-9)** *(5:03:42 – 5:41:08 · 37 min)*
- **[Clases 10 y 11 · Proyecto Final "Notas Colab": Todo el Curso en una sola App (Fases 0 a 8)](#clase-10)** *(5:41:09 – 7:42:37 · 2h 01m)*
- **[Proyecto Final Paso a Paso: "Notas Colab" (Fases 0 a 8)](#proyecto-final-notas-colab)**
- **[Tabla Maestra de Comandos Rápidos (Cheatsheet)](#tabla-maestra-de-comandos)**

---

## Mapa Cronológico de Capítulos del Curso

| Tiempo | Capítulo / Tema | Módulo |
| :--- | :--- | :--- |
| `0:00:00` | CLASE 1 · Qué es Git | Clase 1 |
| `0:01:45` | Versionar a mano con .zip | Clase 1 |
| `0:04:14` | Git: una máquina de tomar fotos | Clase 1 |
| `0:06:53` | Un commit es una foto completa | Clase 1 |
| `0:11:37` | Working directory, staging y repositorio | Clase 1 |
| `0:18:00` | git init y la carpeta .git | Clase 1 |
| `0:28:46` | Por qué existe el staging | Clase 1 |
| `0:33:20` | CLASE 2 · Instalar y configurar Git | Clase 2 |
| `0:40:18` | user.name y user.email | Clase 2 |
| `0:46:11` | Primer repo por consola | Clase 2 |
| `0:55:01` | Buenos mensajes de commit | Clase 2 |
| `0:57:31` | Conventional Commits | Clase 2 |
| `1:01:50` | Commits desde VS Code | Clase 2 |
| `1:10:42` | CLASE 3 · Ramas | Clase 3 |
| `1:17:23` | Una rama no copia el proyecto | Clase 3 |
| `1:20:40` | .git/refs/heads por dentro | Clase 3 |
| `1:25:41` | Qué es HEAD | Clase 3 |
| `1:27:16` | git switch vs checkout | Clase 3 |
| `1:28:29` | Cómo nombrar ramas | Clase 3 |
| `1:34:31` | Crear y usar ramas | Clase 3 |
| `1:54:56` | CLASE 4 · Merge y conflictos | Clase 4 |
| `2:00:01` | Fast-forward | Clase 4 |
| `2:02:46` | Three-way merge | Clase 4 |
| `2:06:48` | Cuándo aparece un conflicto | Clase 4 |
| `2:08:13` | Leer los marcadores | Clase 4 |
| `2:20:58` | Resolver un conflicto real | Clase 4 |
| `2:30:46` | CLASE 5 · Git vs GitHub | Clase 5 |
| `2:36:18` | Local vs remoto | Clase 5 |
| `2:39:25` | Qué es origin | Clase 5 |
| `2:46:43` | clone vs remote add | Clase 5 |
| `2:49:36` | git push -u | Clase 5 |
| `2:53:07` | fetch vs pull | Clase 5 |
| `2:54:15` | Subir el repo a GitHub | Clase 5 |
| `2:59:03` | Token de acceso personal | Clase 5 |
| `3:05:12` | fetch y merge manual | Clase 5 |
| `3:08:28` | CLASE 6 · Pull requests | Clase 6 |
| `3:13:36` | Ciclo de un PR | Clase 6 |
| `3:17:02` | Cómo revisar un PR | Clase 6 |
| `3:27:43` | Proteger main con un ruleset | Clase 6 |
| `3:33:44` | Crear el pull request | Clase 6 |
| `3:35:52` | Revisión y cambios pedidos | Clase 6 |
| `3:43:38` | CLASE 7 · Deshacer cambios | Clase 7 |
| `3:52:20` | git diff en vivo | Clase 7 |
| `3:57:47` | git restore | Clase 7 |
| `4:11:54` | git commit --amend | Clase 7 |
| `4:17:00` | reset soft, mixed y hard | Clase 7 |
| `4:26:42` | git revert | Clase 7 |
| `4:29:22` | CLASE 8 · Detach, stash, .gitignore | Clase 8 |
| `4:34:05` | Commits huérfanos | Clase 8 |
| `4:46:38` | git stash | Clase 8 |
| `4:53:23` | Hotfix urgente con stash | Clase 8 |
| `5:00:47` | .gitignore | Clase 8 |
| `5:03:42` | CLASE 9 · Rebase, tags, trunk-based | Clase 9 |
| `5:18:15` | Nunca rebase en ramas compartidas | Clase 9 |
| `5:22:30` | Rebase antes del PR | Clase 9 |
| `5:28:29` | Tags | Clase 9 |
| `5:38:03` | Trunk-based development | Clase 9 |
| `5:41:09` | CLASE 10 · Proyecto final 1 | Clase 10 |
| `5:44:13` | Proyecto con uv y Django | Clase 10 |
| `5:57:58` | GitHub y rama develop | Clase 10 |
| `6:01:16` | Segundo desarrollador | Clase 10 |
| `6:06:02` | Proteger main y develop | Clase 10 |
| `6:10:23` | Requerimiento 1 y PR | Clase 10 |
| `6:25:15` | Revisión con cambios | Clase 10 |
| `6:34:23` | Requerimiento 2 | Clase 10 |
| `6:39:41` | Conflicto por no hacer pull | Clase 10 |
| `6:48:28` | CLASE 11 · Proyecto final 2 | Clase 11 |
| `6:59:41` | git rebase develop | Clase 11 |
| `7:07:40` | git stash con bug urgente | Clase 11 |
| `7:20:51` | git reset en local | Clase 11 |
| `7:23:33` | Revert desde GitHub | Clase 11 |
| `7:30:07` | Release v1.0.0 y tag | Clase 11 |
| `7:37:19` | Hotfix en producción | Clase 11 |
| `7:42:37` | Tag v1.0.1 y cierre | Clase 11 |

---

<a id="clase-1"></a>
## Clase 01 · Cómo piensa Git: Working Directory, Staging y Repositorio

**Rango en el curso:** `0:00:00 – 0:33:19` · **Duración:** 33 min

> **Idea Clave de la Clase:** *"Un commit no guarda una lista de lo que cambiaste: toma una foto del estado completo de todo tu proyecto en ese instante. Las diferencias (+5 -2) Git las calcula después."*

El modelo mental fundamental de Git: por qué versionar con archivos .zip fracasa, qué significa un sistema de control de versiones distribuido (DVCS), por qué un commit es una foto completa del proyecto y cómo operan las 3 áreas más los 4 estados de un archivo.

### 1.1 El dolor que Git resuelve (El síndrome del archivo .zip)

Antes de usar un sistema de control de versiones, todos hemos tenido carpetas con archivos como proyecto.zip, proyecto_final.zip, proyecto_final_BUENO.zip y proyecto_final_BUENO_v2_estavezsi.zip. Este enfoque manual fracasa por tres razones críticas: (1) No sabes qué líneas exactas cambiaron de una versión a otra, (2) Dos personas no pueden trabajar en paralelo sobre los mismos archivos sin pisarse el trabajo, y (3) No existe forma de volver atrás con seguridad si un cambio nuevo rompe lo que ya funcionaba.

- **Analogía mental:** Guardar zips manuales es como fotocopiar un libro entero sin anotar qué página corregiste ni quién hizo la corrección.
- **Regla de oro:** Git fue diseñado por Linus Torvalds en 2005 para mantener el kernel de Linux con eficiencia, velocidad e integridad criptográfica (SHA-1) sobre miles de archivos.

### 1.2 VCS Local vs Centralizado vs Distribuido (DVCS)

En un sistema de control de versiones Centralizado (CVCS como Subversion), existe un único servidor con la base de datos histórica y las computadoras locales solo descargan la última foto; si el servidor cae o no tienes internet, no puedes hacer commits ni ver la historia. Git es un Sistema de Control de Versiones Distribuido (DVCS): cada desarrollador que clona el proyecto tiene una copia completa del repositorio con toda su historia, todas sus fotos y todas sus ramas en su propio disco duro.

- **Analogía mental:** No hay un único servidor con "la verdad única". Cada copia del repositorio en cada computadora contiene el álbum fotográfico completo desde el primer commit.
- **Regla de oro:** Git funciona 100% en tu máquina local y no requiere internet ni cuenta en ninguna plataforma para crear commits, ramas o viajar en el tiempo.

### 1.3 La Idea del Día: Git piensa en Fotos (Snapshots), no en Diferencias

Mucha gente cree que un commit guarda únicamente la lista de líneas agregadas o borradas. Ese es el modelo equivocado. En realidad, cada vez que haces git commit, Git toma una instantánea (snapshot) de cómo están TODOS los archivos rastreados del proyecto en ese momento y la guarda en un álbum cronológico. Si un archivo no cambió entre el commit A y el commit B, Git no lo duplica en el disco: guarda un enlace al archivo idéntico anterior para no llenar el almacenamiento.

- **Analogía mental:** ¿Y el "+2 -2" en verde y rojo que muestra GitHub? Esas diferencias no estaban guardadas: Git resta la Foto B menos la Foto A en tiempo real cuando se lo pides.

**Ejemplo práctico — Cómo calcula Git las diferencias entre dos fotos completas:**

```python
# Foto Commit A (Ayer - Estado completo guardado)
def saludar():
    print("hola")
# fin

# Foto Commit B (Hoy - Estado completo guardado)
def saludar():
    print("hola!")
    log("ok")
```

Salida / Resultado:
```text
# Resultado calculado al vuelo por Git (diff A -> B):
 def saludar():
-    print("hola")
+    print("hola!")
+    log("ok")
-# fin
```

### 1.4 Las 3 Áreas de Git y los 4 Estados de los Archivos

Tus archivos viven y viajan a través de tres zonas locales: (1) Working Directory (Directorio de trabajo): tu carpeta normal donde creas, editas y borras archivos; (2) Staging Area (Área de preparación o Index): la zona intermedia donde eliges y agrupas exactamente qué cambios entrarán en la próxima foto usando git add; (3) Repository (.git directory): la base de datos donde quedan guardadas las fotos inmutables para siempre al ejecutar git commit. Dentro de este flujo, un archivo puede estar en 4 estados: Untracked (nuevo, Git no lo sigue, aparece en rojo), Modified (rastreado pero modificado respecto a la última foto, en rojo), Staged (preparado en el área de ensayo listo para la próxima foto, en verde) y Committed (confirmado y seguro dentro de .git).

- **Analogía mental:** Imagina una fiesta: el Working Directory es la pista de baile donde todos se mueven; el Staging Area es cuando dices "ustedes tres, párense frente a la cámara"; y el Repository (.git) es la foto ya disparada y pegada en el álbum.

**Ejemplo práctico — El viaje completo de un archivo por las 3 zonas:**

```bash
git init
echo "Hola Git" > saludo.txt
git status                # 1. Working Directory -> Untracked (rojo)
git add saludo.txt
git status                # 2. Staging Area -> Changes to be committed (verde)
git commit -m "Mi primer commit"
git status                # 3. Repository -> nothing to commit, working tree clean
```

Salida / Resultado:
```text
[master (root-commit) a3f5c9e] Mi primer commit
 1 file changed, 1 insertion(+)
 create mode 100644 saludo.txt
```

### 1.5 El Momento "AHHH": git add NO guarda el archivo, congela el momento

Uno de los errores más frecuentes al empezar es pensar que git add "agrega el archivo a una lista de nombres". En realidad, git add toma una copia exacta del contenido que tiene el archivo en el instante en que ejecutas git add y la pone en el Staging Area. Si editas saludo.txt a la versión v1, haces git add saludo.txt, luego vuelves a editar saludo.txt a la versión v2 y haces git commit sin volver a hacer git add, la foto del commit saldrá con v1 (lo que estaba en staging), mientras v2 se queda afuera en el Working Directory.

- **Regla de oro:** ¿Por qué existen dos pasos (add y commit)? Porque el Staging Area es un superpoder: si tocaste 5 archivos pero 3 son del diseño y 2 corrigen un bug, puedes hacer git add de los primeros 3 para un commit limpio, y luego git add de los otros 2 para otro commit separado.

### 1.6 Qué hay dentro de la carpeta oculta .git

Al ejecutar git init nace una subcarpeta oculta llamada .git. Es la caja negra del avión y jamás debes editar sus archivos internos a mano. Contiene: objects/ (la base de datos donde viven todas las fotos y contenidos comprimidos), refs/ (los punteros a las ramas y tags), HEAD (el archivo que indica en qué rama o commit estás parado ahora mismo), config (la configuración local de ese repositorio) y hooks/ (scripts automáticos que se disparan antes o después de eventos como commit o push).

**Ejemplo práctico — Inspeccionando el álbum con git log:**

```bash
# Ver historial completo con autor, fecha, hash completo y mensaje:
git log

# Ver historial compacto (una foto por línea con hash corto de 7 caracteres):
git log --oneline
```

Salida / Resultado:
```text
a3f5c9e (HEAD -> master) Agrego una línea
7b1e4d2 Mi primer commit
# Nota: Si la terminal "se pega" en (END) con muchos commits, presiona la tecla 'q' para salir del paginador.
```

### Comandos Clave de la Clase 1

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git init` | Inicializa un repositorio Git vacío en la carpeta actual creando el directorio oculto .git/ | `git init` | Crea Repository (.git) |
| `git status` | Muestra el estado actual de los archivos (Untracked, Modified, Staged) y la rama activa | `git status` | Solo lectura (Inspección) |
| `git add <archivo>` | Congela el estado actual de un archivo y lo lleva al Staging Area para el próximo commit | `git add saludo.txt` | Working Dir → Staging Area |
| `git add .` | Prepara todos los archivos nuevos (untracked) y modificados del directorio actual en Staging | `git add .` | Working Dir → Staging Area |
| `git add -u` | Agrega al Staging Area únicamente los archivos que ya estaban en tracking y fueron modificados o borrados (ignora untracked nuevos) | `git add -u` | Tracked Modified → Staging |
| `git commit -m "Mensaje"` | Toma la foto definitiva de todo lo que está en el Staging Area y la guarda en el repositorio local | `git commit -m "feat: agrega archivo de saludo"` | Staging Area → Repository (.git) |
| `git log --oneline` | Abre el álbum de fotos mostrando un commit por línea con su código hash único | `git log --oneline` | Solo lectura (Historial) |

### Errores Frecuentes y Cómo Solucionarlos (Clase 1)

- **Problema:** *Modifiqué un archivo después de hacer git add y mi cambio nuevo no salió en el commit*
  - **Por qué ocurre:** git add preparó la versión anterior del archivo en el Staging Area; la edición nueva quedó en el Working Directory.
  - **Solución:** `git add <archivo> && git commit -m "Actualiza cambio"` — Siempre que edites un archivo tras haber hecho git add, debes volver a ejecutar git add antes de commitear.
- **Problema:** *Ejecuté git log y la terminal quedó bloqueada mostrando ":" o "(END)" al final*
  - **Por qué ocurre:** Cuando el historial no entra en una pantalla, Git abre el paginador less.
  - **Solución:** `Presionar la tecla q` — La letra q (quit) cierra inmediatamente el paginador y te devuelve el control del prompt.

---

<a id="clase-2"></a>
## Clase 02 · Instalación, Configuración de Identidad y Conventional Commits

**Rango en el curso:** `0:33:20 – 1:10:41` · **Duración:** 37 min

> **Idea Clave de la Clase:** *"Cada commit sale firmado para siempre con tu nombre, correo y fecha. Y un buen mensaje no dice "cambios": dice qué hace el commit en modo imperativo y por qué se tomó esa decisión."*

Cómo instalar Git en Windows, macOS y Linux, configurar la firma de autor global y local, ejecutar el primer ciclo real de trabajo y dominar la escritura de mensajes profesionales con Conventional Commits y asistencia de IA.

### 2.1 Instalación multiplataforma y por qué Git vive en la terminal

Git no es una aplicación con ventanas ni iconos de escritorio: es una herramienta de línea de comandos (CLI). Se instala distinto según el sistema operativo (winget o git-scm.com en Windows, Homebrew en macOS, apt en Ubuntu/Debian), pero en los tres sistemas el destino es idéntico: que al abrir una terminal y escribir git --version responda con git version 2.x.x. Aprendemos primero por consola a propósito: cuando entiendes qué pasa por dentro en la terminal, cualquier interfaz gráfica (VS Code, GitHub Desktop, SourceTree, GitKraken) resulta obvia.

**Ejemplo práctico — Instalación y verificación en los 3 sistemas operativos:**

```bash
# Windows (PowerShell con winget o descargando Git Bash desde git-scm.com):
winget install --id Git.Git -e --source winget

# macOS (Terminal con Homebrew):
brew install git

# Linux Ubuntu / Debian (Bash):
sudo apt update && sudo apt install git -y

# Verificación universal en cualquier sistema:
git --version
```

Salida / Resultado:
```text
git version 2.45.1
```

### 2.2 Configurar tu Identidad: ¿Quién firma la foto?

Antes de tomar tu primera foto, Git necesita saber tu nombre y tu correo electrónico. Esto NO es iniciar sesión ni crear una cuenta, y no lleva contraseña: es simplemente decirle a la cámara qué nombre y correo debe grabar dentro de los metadatos de cada commit. Si usas el flag --global, la configuración se guarda en tu usuario del sistema operativo (~/.gitconfig) y se aplica a todos los proyectos de tu máquina. Si omites --global dentro de un repositorio específico, se guarda en .git/config solo para esa carpeta (y la configuración local siempre le gana a la global, ideal para separar cuenta laboral o simular un segundo colaborador).

- **Regla de oro:** Cuando más adelante conectes con GitHub, usa el mismo correo electrónico con el que registraste tu cuenta de GitHub para que la plataforma enlace tus commits con tu perfil.

**Ejemplo práctico — Configurar identidad global y verificarla:**

```bash
# Configuración global (una sola vez por computadora):
git config --global user.name "Ada Lovelace"
git config --global user.email "ada@correo.com"

# Configurar editor por defecto (opcional, ej. VS Code) y rama inicial main:
git config --global init.defaultBranch main

# Verificar los datos configurados:
git config --list
```

Salida / Resultado:
```text
user.name=Ada Lovelace
user.email=ada@correo.com
init.defaultbranch=main
```

### 2.3 Las 3 Reglas de un Buen Mensaje de Commit

Escribir git commit -m "cambios" o "cosas" o "arreglos" no le sirve a nadie, ni siquiera a ti mismo dentro de tres semanas cuando busques en qué momento se introdujo un error. Un mensaje profesional cumple tres principios: (1) Modo imperativo: escríbelo como una orden o completando la frase "Si se aplica, este commit..." (Ejemplo: "Agrega validación" o "Corrige el cálculo de impuestos", nunca "Agregué" ni "Agregando"); (2) Conciso arriba: la primera línea debe ser corta y directa (idealmente menos de 50-72 caracteres) porque es el título que aparece en git log --oneline; (3) El porqué, no el cómo: el código fuente ya muestra qué líneas cambiaron; si el cambio no es obvio, usa el cuerpo del mensaje para explicar la razón de negocio.

**Ejemplo práctico — Comparativa entre malos y buenos mensajes de commit:**

```bash
# ❌ Malos mensajes (no dicen qué cambió ni por qué):
git commit -m "cambios"
git commit -m "arreglo bug"
git commit -m "Agregué cosas en el carrito"

# ✅ Buenos mensajes (imperativos, claros y específicos):
git commit -m "Agrega validación de correo en registro"
git commit -m "Corrige el cálculo de impuestos en el carrito"
```

### 2.4 Conventional Commits: El estándar de la industria

Conventional Commits (conventionalcommits.org) es la convención profesional que estructura el mensaje empezando con una palabra clave seguida de un ámbito opcional y dos puntos: tipo(scope): descripción. Permite leer el historial de un vistazo y automatizar la generación de versiones (Semantic Versioning) y changelogs. Con solo dos tipos (feat y fix) cubres el 80% de tu trabajo diario, y el resto te da precisión quirúrgica.

**Ejemplo práctico — Estructura y catálogo completo de Conventional Commits:**

```bash
# Estructura oficial:
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
git commit -m "feat!: cambia respuesta de API v2 (Breaking Change)"
```

### 2.5 Herramientas de IA y Commits en 2026

Hoy existen asistentes de IA en VS Code y en la terminal que leen tu diff y te proponen el mensaje de commit automáticamente. Son sumamente útiles cuando te quedas en blanco, pero requieren criterio humano: la IA puede describir qué líneas se tocaron pero desconocer la intención real de negocio o mezclar dos cambios no relacionados. Tú siempre debes revisar el diff, verificar qué archivos están en Staging y validar el mensaje antes de confirmar.

### Comandos Clave de la Clase 2

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git --version` | Comprueba que Git está instalado y muestra la versión activa en el sistema | `git --version` | Sistema Operativo |
| `git config --global user.name "Nombre"` | Define el nombre de autor que firmará todos los commits en esta computadora | `git config --global user.name "Matias Molina"` | Configuración Global (~/.gitconfig) |
| `git config --global user.email "email"` | Define el correo electrónico que firmará todos los commits en esta computadora | `git config --global user.email "matias@ejemplo.com"` | Configuración Global (~/.gitconfig) |
| `git config user.name "Otro"` | Define un nombre de autor exclusivo para la carpeta/repositorio actual (sobreescribe la global) | `git config user.name "Colaborador Demo"` | Configuración Local (.git/config) |
| `git help` | Muestra la guía de ayuda rápida e índice de comandos principales de Git en la terminal | `git help` | Ayuda en consola |

### Errores Frecuentes y Cómo Solucionarlos (Clase 2)

- **Problema:** *Al hacer mi primer commit aparece el error "Author identity unknown / Please tell me who you are"*
  - **Por qué ocurre:** Git no permite crear una foto sin firma de autor y aún no has ejecutado git config user.name y user.email.
  - **Solución:** `git config --global user.name "Tu Nombre" && git config --global user.email "tu@correo.com"` — Configura ambos valores y vuelve a ejecutar el comando git commit.

---

<a id="clase-3"></a>
## Clase 03 · Ramas (Branches) y el puntero HEAD por dentro

**Rango en el curso:** `1:10:42 – 1:54:55` · **Duración:** 44 min

> **Idea Clave de la Clase:** *"Una rama NO duplica tus archivos ni crea otra carpeta. Una rama es literalmente un papelito de texto plano que guarda el identificador (hash) de un commit."*

Por qué existen las ramas para trabajar en paralelo sin romper producción, el mito de que una rama copia carpetas, cómo funciona realmente un archivo de 41 bytes en .git/refs/heads, qué es el puntero HEAD y cómo nombrar ramas profesionalmente.

### 3.1 Por qué existen las ramas: Líneas de trabajo independientes

Imagina que tu aplicación ya está en producción en la rama main y los usuarios la están usando. Quieres construir un login con Google o agregar la escala Kelvin a un conversor de temperatura, pero te llevará varios commits y pruebas en los que el código puede quedar roto a mitad de camino. Si trabajas directo sobre main, rompes la versión estable. Al abrir una rama aparte (por ejemplo, feature/login), construyes, pruebas y te equivocas con total tranquilidad: la rama main queda intacta y cada miembro del equipo avanza en su propia rama sin pisar a los demás.

- **Regla de oro:** Separar en ramas para construir con tranquilidad y volver a juntar (merge) cuando el trabajo está probado son las dos mitades de la misma historia.

### 3.2 El malentendido más caro vs Lo que de verdad pasa

Mucha gente imagina que cuando crea una rama, Git copia todos los archivos del proyecto en otra carpeta oculta (como hacer Copiar y Pegar de proyecto/ a proyecto-copia/). Eso es totalmente falso. En Git, los commits están encadenados donde cada commit nuevo apunta a su commit padre anterior. Una rama es únicamente un archivo de texto diminuto dentro de .git/refs/heads/ que tiene escrito el hash de 40 caracteres del commit al que apunta (ej. ref: c3). Crear una rama nueva con git branch login estando en el commit c3 simplemente crea otro papelito de texto que también dice "c3". No copia ni un solo archivo de código.

- **Analogía mental:** Por eso en Git crear una rama en un proyecto de 100.000 archivos tarda 0.001 segundos y ocupa 41 bytes: solo estás pegando un post-it nuevo sobre la misma foto.

**Ejemplo práctico — Abriendo la caja negra: qué hay dentro de .git/refs/heads y .git/HEAD:**

```bash
# Creamos una rama llamada login (sin movernos todavía):
git branch login

# Si miramos qué guardó Git por dentro en sus papelitos:
cat .git/refs/heads/main
cat .git/refs/heads/login
cat .git/HEAD
```

Salida / Resultado:
```text
0fad08b19e2fc3f2a1da4d0c771c9d0e3f8a9d31   # <- Papelito main (apunta al commit 0fad0)
0fad08b19e2fc3f2a1da4d0c771c9d0e3f8a9d31   # <- Papelito login (apunta al mismo commit 0fad0)
ref: refs/heads/main                       # <- Papelito HEAD ("Usted está parado en main")
```

### 3.3 Qué es HEAD: El indicador de "Usted está aquí"

Si tienes dos o tres ramas apuntando al mismo commit c3, ¿cómo sabe Git cuál de esos papelitos debe avanzar cuando hagas el próximo commit c4? Para eso existe HEAD. HEAD es otro papelito especial que guarda el nombre de la rama en la que estás parado ahora mismo. Si HEAD apunta a main, estás parado en main; cuando te cambias con git switch login, HEAD se reescribe para decir "login" y el próximo commit que hagas moverá únicamente el papelito login hacia adelante, mientras main ni se entera.

**Ejemplo práctico — Crear ramas y moverse entre ellas con git switch (moderno) vs git checkout (clásico):**

```bash
# Ver todas las ramas locales (el asterisco * marca dónde está HEAD):
git branch

# Forma moderna y clara (recomendada desde Git 2.23+):
git switch login                  # Cambia a una rama existente
git switch -c feature/kelvin      # Crea la rama y salta a ella en un solo paso

# Equivalente clásico (que verás en tutoriales antiguos y scripts):
git checkout login                # Cambia a una rama existente
git checkout -b feature/kelvin    # Crea la rama y salta a ella
```

### 3.4 Convención profesional para nombrar ramas

Vas a crear decenas de ramas en un proyecto. Un buen nombre te permite saber qué se está construyendo en cada una sin necesidad de abrirla. La convención estándar utiliza el formato tipo/descripcion-corta y sigue cuatro reglas de oro: (1) Todo en minúsculas, (2) Separa palabras con guiones medios (-), jamás con espacios ni caracteres especiales, (3) Descriptivo pero corto (2 a 4 palabras), y (4) En equipos reales, incluye el código del ticket (ej. feature/NC-1-modelo-nota o feature/PROJ-123-login).

**Ejemplo práctico — Prefijos estándar vs Nombres prohibidos:**

```bash
# ✅ Nombres profesionales con prefijo semántico:
feature/login-google             # Funcionalidad nueva
fix/error-calculo-impuestos      # Corrección de un bug en desarrollo
hotfix/caida-pasarela-pagos      # Arreglo urgente directo para producción
docs/actualiza-readme            # Cambios exclusivos de documentación

# ❌ Nombres que NO dicen nada (evitar siempre):
# prueba, cambios, rama2, lo-de-ayer, arreglos, matias-final
```

### Comandos Clave de la Clase 3

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git branch` | Lista todas las ramas locales y marca con un asterisco (*) la rama actual donde apunta HEAD | `git branch` | Solo lectura |
| `git branch <nombre>` | Crea una nueva rama apuntando al commit actual, pero SIN cambiarte a ella | `git branch feature/kelvin` | Crea puntero en .git/refs/heads/ |
| `git switch <rama>` | Mueve el puntero HEAD a la rama indicada y actualiza tu Working Directory a esa foto | `git switch feature/kelvin` | Mueve HEAD + Working Dir |
| `git switch -c <rama>` | Crea una rama nueva y mueve HEAD hacia ella inmediatamente (equivale a git checkout -b) | `git switch -c feature/formato-resultado` | Crea rama + Mueve HEAD |
| `git branch -m <nombre>` | Renombra la rama en la que estás parado actualmente | `git branch -m main` | Renombra puntero de rama |
| `git branch -d <rama>` | Elimina una rama local de forma segura (solo si sus cambios ya fueron fusionados) | `git branch -d feature/kelvin` | Borra el papelito de la rama |

### Errores Frecuentes y Cómo Solucionarlos (Clase 3)

- **Problema:** *Creé la rama con git branch mi-rama, hice commits, pero se guardaron en main*
  - **Por qué ocurre:** git branch <nombre> solo crea el papelito, pero no mueve HEAD. Seguías parado en main.
  - **Solución:** `git switch -c mi-rama` — Acostúmbrate a usar git switch -c <rama> para crear y saltar a la rama nueva en una sola acción.

---

<a id="clase-4"></a>
## Clase 04 · Merges & Conflicts: Unir ramas y desempatar choques

**Rango en el curso:** `1:54:56 – 2:30:45` · **Duración:** 36 min

> **Idea Clave de la Clase:** *"Un conflicto no es un error ni significa que hiciste algo mal: son dos cambios que chocan en la misma línea del mismo archivo, y una decisión humana que los desempata."*

Cómo volver a juntar líneas paralelas con git merge, la diferencia técnica entre Fast-Forward y Three-Way Merge, cuándo y por qué ocurre un conflicto, cómo leer los marcadores <<<<<<< ======= >>>>>>> y cómo resolverlos o abortar sin miedo.

### 4.1 Qué es un Merge y la Regla de Ubicación

Hacer un merge significa fusionar dos ramas: una rama origen (la que aporta el trabajo nuevo, por ejemplo login) y una rama destino (la que recibe el trabajo, por ejemplo main). La regla inquebrantable de Git para hacer un merge es: siempre debes pararte primero en la rama que RECIBE (destino) y desde ahí jalar la rama que APORTA (origen).

**Ejemplo práctico — El ritual de 2 pasos para fusionar una rama en main:**

```bash
# 1. Párate en la rama destino (la que recibe los cambios):
git switch main

# 2. Fusiona la rama origen (la que trae los commits nuevos):
git merge login
```

### 4.2 Tipo 1 de 2: Fast-Forward Merge (El caso feliz trabajando solo)

Ocurre cuando creaste la rama login desde el commit c2 de main, avanzaste 3 commits en login (c3, c4, c5), y durante ese tiempo NADIE hizo ningún commit nuevo en main (main siguió quieta en c2). Cuando te paras en main y ejecutas git merge login, Git ve que el camino es una línea recta continua: no necesita combinar nada ni crear un commit nuevo; simplemente desliza el papelito de main hacia adelante hasta alcanzar a c5.

- **Analogía mental:** Como main no se movió, Git solo adelanta el marcador de página hasta donde llegó login. En la terminal verás literalmente la frase "Fast-forward".

### 4.3 Tipo 2 de 2: Three-Way Merge (Cuando ambos caminos avanzaron)

Ocurre cuando creaste login desde c2, hiciste commits en login, pero mientras tanto main TAMBIÉN recibió otros commits nuevos por su cuenta. Ahora los caminos se bifurcaron y Git ya no puede solo deslizar el puntero. Para unirlos, Git realiza un Three-Way Merge mirando 3 fotos: (1) El ancestro común del que partieron ambas ramas, (2) La última foto de la rama destino (main), y (3) La última foto de la rama origen (login). Con esa comparación crea una foto nueva especial llamada Commit de Merge, que tiene DOS padres en lugar de uno.

- **Analogía mental:** El commit de merge es la cicatriz honesta en el historial que dice: "aquí se volvieron a unir dos caminos paralelos".

### 4.4 ¿Cuándo aparece un Conflicto? (Y cuándo NO)

En un Fast-Forward jamás puede haber conflicto. En un Three-Way Merge, si una rama modificó app.py y la otra modificó style.css, o si ambas modificaron partes distintas del mismo archivo (por ejemplo, una tocó la línea 5 y la otra la línea 80), Git combina todo automáticamente sin preguntar nada. El conflicto aparece ÚNICAMENTE cuando ambas ramas modificaron la MISMA línea del MISMO archivo de formas distintas (o cuando una rama editó un archivo que la otra rama borró). Git detiene el merge a mitad de camino y te pide a ti que tomes la decisión.

**Ejemplo práctico — Anatomía exacta de los marcadores de conflicto en el editor:**

```text
<<<<<<< HEAD
Color favorito: rojo
=======
Color favorito: verde
>>>>>>> cambio-color
```

Salida / Resultado:
```text
Traducción de los 3 símbolos que Git inyecta en el archivo:
1. <<<<<<< HEAD         -> Arriba de la divisoria está la versión de la rama donde estás parado (ej. main).
2. =======              -> Línea divisoria que separa las dos propuestas en choque.
3. >>>>>>> cambio-color -> Abajo de la divisoria está la versión que viene de la rama que estás fusionando.
```

### 4.5 Cómo resolver cualquier conflicto en 2 pasos (y el botón de pánico)

Cuando salta un conflicto, primero respira: Git no borró ni perdió nada, solo está en pausa (git status te mostrará el archivo bajo "Unmerged paths"). Se resuelve siempre con la misma receta de 2 pasos: Paso 1: Abre el archivo en tu editor, decide qué código debe quedar (el de arriba, el de abajo, una combinación de ambos o algo nuevo) y BORRA OBLIGATORIAMENTE las tres líneas de marcadores (<<<<<<<, =======, >>>>>>>). Paso 2: Ejecuta git add <archivo> (así le avisas a Git "ya decidí, esta versión limpia es la buena") y cierra con git commit -m "merge: ...". ¿Te enredaste o te arrepentiste a mitad del conflicto? Ejecuta git merge --abort y todo vuelve exactamente a como estaba antes de intentar el merge.

**Ejemplo práctico — Flujo completo de resolución de conflicto en consola:**

```bash
git switch main
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
# git merge --abort
```

### Comandos Clave de la Clase 4

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git merge <rama>` | Fusiona la rama indicada dentro de la rama en la que estás parado actualmente | `git merge feature/login` | Une historias en rama actual |
| `git merge --abort` | Cancela un merge en conflicto y devuelve todo el proyecto al estado exacto previo al merge | `git merge --abort` | Botón de escape seguro |
| `git diff --check` | Verifica que no hayan quedado marcadores de conflicto (<<< === >>>) ni espacios residuales antes de hacer commit | `git diff --check` | Validación post-conflicto |

### Errores Frecuentes y Cómo Solucionarlos (Clase 4)

- **Problema:** *Hice git merge main estando parado en feature/login y todo quedó al revés*
  - **Por qué ocurre:** Olvidaste cambiar primero a la rama destino (main). Metiste main dentro de login en vez de login dentro de main.
  - **Solución:** `git switch main && git merge feature/login` — Recuerda siempre: párate en la rama que recibe y desde ahí llama a la que aporta.
- **Problema:** *Resolví el conflicto pero en la web o en la app se imprimen signos "<<<<<<< HEAD"*
  - **Por qué ocurre:** Hiciste git add y git commit sin haber borrado las líneas demarcadoras que Git escribió en el archivo.
  - **Solución:** `Borrar las líneas <<<, ===, >>> del archivo, hacer git add y git commit --amend` — Para Git los marcadores son texto normal una vez que tú haces git add; usa git diff --check antes de confirmar.

---

<a id="clase-5"></a>
## Clase 05 · Git vs GitHub: Repositorios Remotos, origin, push, fetch y pull

**Rango en el curso:** `2:30:46 – 3:08:27` · **Duración:** 38 min

> **Idea Clave de la Clase:** *"Git es al correo electrónico lo que GitHub es a Gmail. Y "origin" no es un comando mágico ni es GitHub: es simplemente el apodo (alias) por defecto para no escribir la URL entera cada vez."*

La diferencia real entre el motor local Git y la plataforma en la nube GitHub, qué es un remoto, qué significa realmente la palabra origin, cómo empezar con clone vs remote add, el flag -u (--set-upstream), la diferencia entre git fetch y git pull, y cómo autenticarse con Personal Access Tokens (PAT).

### 5.1 Git ≠ GitHub: Cara a cara punto por punto

Hasta la Clase 4 hiciste commits, creaste ramas y resolviste merges sin tener cuenta en ningún sitio y sin necesitar internet, porque todo eso es Git corriendo en tu computadora dentro de la carpeta .git. El problema es que si se rompe tu disco duro o pierdes la laptop, se pierde todo, y además tus compañeros no pueden ver tus ramas. Ahí entra GitHub (o alternativas como GitLab y Bitbucket): una plataforma en la nube que hospeda copias remotas de repositorios de Git para tener respaldo y colaborar en equipo.

- **Regla de oro:** En un sistema distribuido como Git, el repositorio remoto en GitHub no es técnicamente "más importante" que tu copia local: es simplemente otra copia completa del álbum con la que todo el equipo acuerda sincronizarse.

### 5.2 ¿Qué es "origin"? Es solo un alias para una URL

Cuando escribes git push origin main, mucha gente piensa que origin es una palabra reservada de GitHub. No lo es: origin es simplemente un nombre corto (alias) que apunta a la dirección URL del repositorio remoto (por ejemplo, https://github.com/usuario/proyecto.git) para que no tengas que escribir la URL larga cada vez. Se llama origin por convención ("el lugar donde se originó el clon"), pero podrías llamarlo github, trabajo o respaldo.

**Ejemplo práctico — Ver y gestionar los alias de repositorios remotos:**

```bash
# Ver qué alias remotos tienes configurados y a qué URL apuntan:
git remote -v

# Agregar un remoto bajo el alias estándar "origin":
git remote add origin https://github.com/edward/curso-git.git

# (Opcional) Agregar un segundo remoto de respaldo en GitLab:
git remote add backup https://gitlab.com/edward/curso-git.git
```

Salida / Resultado:
```text
origin  https://github.com/edward/curso-git.git (fetch)
origin  https://github.com/edward/curso-git.git (push)
```

### 5.3 Dos formas de empezar: ¿El proyecto ya existe en la nube o nace en tu máquina?

Existen dos caminos opuestos según dónde nació el proyecto: Caso A (Ya existe en GitHub -> Lo traigo a mi máquina): un compañero creó el repo o es un proyecto open source. Ejecutas git clone <url> y Git descarga toda la carpeta, toda la historia de commits y además configura el alias origin automáticamente. Caso B (Ya existe en mi máquina -> Lo subo a GitHub): tú hiciste git init y commits en local, vas a GitHub y creas un repositorio COMPLETAMENTE VACÍO (sin README ni .gitignore para no crear commits desconectados), y luego conectas tu carpeta con git remote add origin <url> seguido de git push -u origin main.

**Ejemplo práctico — Caso A (Clonar existente) vs Caso B (Subir repo local nuevo):**

```bash
# CASO A: El repositorio ya existe en GitHub -> lo descargo listo para usar
git clone https://github.com/usuario/proyecto.git
cd proyecto

# CASO B: El repositorio nació en mi máquina -> lo vinculo y subo a un repo vacío en GitHub
git remote add origin https://github.com/usuario/mi-proyecto.git
git push -u origin main
```

### 5.4 Qué hace git push y el significado exacto del flag -u (--set-upstream)

git push NO envía carpetas sueltas ni vuelve a subir todo el proyecto cada vez: compara los commits que tienes en tu rama local contra los que tiene el remoto, y envía únicamente los commits nuevos que faltan (por ejemplo, si el remoto tiene A-B y tú tienes A-B-C-D, solo viajan C y D). ¿Y qué hace el flag -u (abreviatura de --set-upstream) en git push -u origin main? No sube más datos ni acelera la red: simplemente guarda en tu configuración que tu rama local main "sigue" (tracks) a la rama remota origin/main. Gracias a usar -u la primera vez que publicas una rama, a partir de la segunda vez puedes escribir simplemente git push o git pull a secas sin repetir origin main.

- **Regla de oro:** Usa git push -u origin <nombre-rama> únicamente la primera vez que subes una rama nueva a GitHub; en los siguientes envíos de esa misma rama basta con git push.

### 5.5 La gran diferencia: git fetch (el prudente) vs git pull (el rápido)

Para traer novedades desde GitHub hacia tu computadora existen dos comandos que suelen confundirse: (1) git fetch origin ("El prudente"): se conecta a GitHub y descarga todos los commits nuevos que hicieron tus compañeros, actualizando el puntero remoto origin/main en tu máquina, pero NO modifica tus archivos ni los mezcla con tu rama local main. Te permite inspeccionar qué cambió (ej. git log main..origin/main) antes de decidir unirlos manualmente con git merge origin/main. (2) git pull origin main ("El rápido"): ejecuta internamente dos comandos seguidos: git fetch + git merge de inmediato sobre tu rama actual. Es más directo, pero como incluye un merge automático, puede disparar un conflicto si tocaste las mismas líneas que el remoto.

**Ejemplo práctico — Ecuación fundamental: git pull = git fetch + git merge:**

```bash
# Camino Prudente (2 pasos: descargar para ver, y luego fusionar):
git fetch origin
git log --oneline main..origin/main   # Veo qué commits nuevos llegaron
git merge origin/main                 # Los integro cuando estoy seguro

# Camino Rápido (1 paso: descarga y fusiona de inmediato):
git pull origin main
```

### 5.6 Autenticación en GitHub: Personal Access Token (PAT) y SSH

Al hacer tu primer git push por HTTPS, GitHub ya no acepta la contraseña normal de tu cuenta web por razones de seguridad. Debes autenticarte usando GitHub Credential Manager (que abre el navegador) o creando un Personal Access Token (PAT) desde tu cuenta de GitHub: vas a Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token, le das un nombre descriptivo, eliges fecha de expiración, marcas el permiso (scope) "repo" y copias el código generado para pegarlo cuando la terminal te pida el Password.

### Comandos Clave de la Clase 5

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git clone <url>` | Descarga una copia completa de un repositorio remoto y configura el alias origin automáticamente | `git clone https://github.com/usuario/repo.git` | Remoto → Crea carpeta Local + .git |
| `git remote add origin <url>` | Registra la dirección de un servidor remoto bajo el apodo "origin" en tu repositorio local | `git remote add origin https://github.com/usuario/repo.git` | Configura vínculo en .git/config |
| `git push -u origin <rama>` | Sube los commits de tu rama al remoto y deja establecido el vínculo de seguimiento (--set-upstream) | `git push -u origin main` | Local Repository → Remote Repository |
| `git fetch origin` | Descarga los commits nuevos del remoto para revisarlos sin mezclarlos con tu trabajo actual | `git fetch origin` | Actualiza origin/* sin tocar Working Dir |
| `git pull origin <rama>` | Descarga los cambios del remoto y los fusiona inmediatamente con tu rama actual (fetch + merge) | `git pull origin main` | Remoto → Local + Working Dir |

### Errores Frecuentes y Cómo Solucionarlos (Clase 5)

- **Problema:** *Hice git remote add origin <url>, abrí GitHub en el navegador y el repositorio sigue vacío*
  - **Por qué ocurre:** git remote add solo agenda el número de teléfono del servidor en tu máquina, pero todavía no envió ningún commit.
  - **Solución:** `git push -u origin main` — Después de vincular el remoto con remote add, debes ejecutar git push para transferir los commits.
- **Problema:** *Intento hacer git pull o git push pero recibo error porque tengo cambios locales sin commitear*
  - **Por qué ocurre:** Git protege tus archivos modificados en el Working Directory para no sobrescribirlos al traer cambios del servidor.
  - **Solución:** `git add . && git commit -m "mensaje" (o git stash) antes de git pull` — Mantén tu directorio de trabajo limpio (working tree clean) antes de sincronizar con tus colegas.

---

<a id="clase-6"></a>
## Clase 06 · Pull Requests (PR), Protección de Ramas y Code Review en Equipo

**Rango en el curso:** `3:08:28 – 3:43:37` · **Duración:** 35 min

> **Idea Clave de la Clase:** *"El comando "git pull-request" no existe: Git solo conoce commits, ramas y merges. El Pull Request es la capa social de revisión y calidad que GitHub montó encima."*

Por qué pushear directo a main en equipo es una receta para el caos, qué es un Pull Request como capa social sobre Git, cómo blindar main con Rulesets, cómo realizar y responder un Code Review profesional y cómo resolver los 2 casos de conflictos en equipo.

### 6.1 El caos de pushear directo a main vs La única puerta de entrada

Imagina un equipo de 5 desarrolladores haciendo git push origin main directamente todos los días: nadie revisa el código de nadie, cualquier commit con un bug rompe producción al instante y el error le llega directo a los usuarios finales. En los equipos profesionales, main está protegida con candado (Branch Protection / Rulesets): cualquier intento de hacer push directo a main rebota con el error GH006: Protected branch update failed. La única puerta de entrada a main es a través de un Pull Request revisado y aprobado.

- **Regla de oro:** main protegida = rama principal siempre estable, probada y lista para desplegar en cualquier momento.

### 6.2 Qué es un Pull Request y su Ciclo Completo de 6 Pasos

Un Pull Request (PR, llamado Merge Request en GitLab) es una solicitud formal en la nube donde le dices a tu equipo: "Terminé esta funcionalidad en mi rama feature/login-google; por favor revísenla, discútanla y, si está todo bien, fusiónenla dentro de main". El ciclo completo consta de 6 pasos: (1) Creas una rama local desde main actualizada, (2) Haces tus commits, (3) Subes tu rama a GitHub con git push -u origin feature/... y abres el PR describiendo Qué hace / Por qué / Cómo probarlo, (4) El equipo hace Code Review y deja comentarios por línea, (5) Corren las validaciones automáticas (CI: tests y compilación en verde), y (6) Se aprueba, se hace Merge a main y se elimina la rama que ya cumplió su misión.

**Ejemplo práctico — Cómo actualizar un Pull Request cuando el revisor pide cambios (Request Changes):**

```bash
# El revisor dejó comentarios pidiendo validar que el correo no esté vacío.
# ¡NO abras otro Pull Request nuevo! En tu misma rama local haces el arreglo:
git add auth/login.py
git commit -m "fix(auth): agrega validación de correo obligatorio según revisión"
git push

# Resultado: El mismo PR #42 en GitHub se actualiza automáticamente en vivo.
```

### 6.3 Cómo hacer un Code Review con criterio (y por qué necesitas ojos ajenos)

Cuando revisas el PR de un compañero en la pestaña "Files changed", la pregunta rectora es: "¿Este cambio es correcto, mantiene la calidad y puede entrar a main sin romper nada?". Al terminar de leer el diff tienes tres veredictos posibles en "Review changes": (1) Comment: deja observaciones generales sin aprobar ni bloquear, (2) Request changes: bloquea la fusión hasta que el autor corrija un problema detectado, y (3) Approve: da luz verde para integrar. Nota clave: GitHub bloquea por diseño que el autor de un PR apruebe su propio Pull Request; en un repositorio con rama protegida, obligatoriamente otra persona del equipo debe dar el Approve.

### 6.4 Los 2 Casos de Conflictos en Equipo (y quién los resuelve)

¿Qué pasa cuando dos desarrolladores trabajan en sus propias ramas pero tocan la misma línea de checkout.py (por ejemplo, uno puso descuento 0.9 y el otro puso 0.85)? El primero que aprueba y fusiona su PR entra limpio a main. Al segundo le aparecerá el aviso "This branch has conflicts that must be resolved". ¿Quién debe resolverlo? Siempre el autor del PR que quiere entrar. Existen dos momentos en que esto ocurre: Caso 1 (El conflicto te espera al abrir el PR): tu compañero mergeó antes de que tú abrieras el PR. Caso 2 (El conflicto aparece en plena revisión): abriste tu PR limpio y hasta estaba aprobado, pero antes de pulsar Merge otro compañero fusionó su PR tocando tus mismas líneas y GitHub bloqueó el botón en vivo. En ambos casos la solución profesional es traer main a tu rama local, resolver los marcadores, hacer commit y git push.

**Ejemplo práctico — Receta estándar para desbloquear tu PR con conflictos desde tu computadora:**

```bash
# 1. Traes los últimos cambios que entraron a main (o develop):
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
# ¡Listo! El PR en GitHub vuelve a ponerse en verde automáticamente.
```

### Comandos Clave de la Clase 6

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `Settings → Rules → Rulesets` | Configura en GitHub la protección de ramas (ej. exigir PR y 1 aprobación antes de permitir merge a main) | `Require a pull request before merging (Required approvals: 1)` | Seguridad en GitHub |
| `Start a review vs Add single comment` | En GitHub, "Start a review" agrupa todos tus comentarios en borrador y los envía juntos con tu veredicto final | `Files changed → + en la línea → Start a review → Submit review` | Code Review en GitHub |
| `Delete branch (post-merge)` | Elimina la rama remota en GitHub una vez que el PR ya fue fusionado en la rama base | `Confirm merge → Delete branch` | Limpieza en GitHub |

### Errores Frecuentes y Cómo Solucionarlos (Clase 6)

- **Problema:** *Me pidieron una corrección en mi Pull Request, cerré el PR y abrí un PR nuevo*
  - **Por qué ocurre:** Desconocer que un PR sigue a la rama: si cierras el PR se pierde todo el hilo de conversación y contexto de la revisión.
  - **Solución:** `Hacer commit + git push sobre la misma rama del PR abierto` — Cualquier commit nuevo que empujes a la rama del PR actualiza el Pull Request existente al instante.

---

<a id="clase-7"></a>
## Clase 07 · Deshacer Cambios en Git: diff, restore, --amend, reset y revert

**Rango en el curso:** `3:43:38 – 4:29:21` · **Duración:** 45 min

> **Idea Clave de la Clase:** *"La pregunta que decide todo antes de deshacer un commit es una sola: ¿Ese commit ya fue compartido con otras personas (git push)? Si está solo en tu máquina, puedes reescribir (amend/reset); si ya es público, corrige hacia adelante (revert)."*

El arsenal completo para inspeccionar y corregir errores en cualquier etapa: las 4 comparaciones de git diff, las 3 situaciones de git restore, cómo enmendar el último commit con --amend, la notación HEAD~N, la tabla maestra de git reset (--soft, --mixed, --hard) y por qué en historia compartida siempre se usa git revert.

### 7.1 Antes de deshacer hay que VER: Las 4 comparaciones de git diff

git diff es tu lente de aumento de solo lectura: jamás modifica ni borra un solo byte, pero te muestra línea por línea qué vas a perder antes de ejecutar un comando destructivo. Dependiendo de los argumentos que le pases, pone frente a frente cuatro pares distintos de zonas o puntos de la historia.

**Ejemplo práctico — Las 4 variantes de git diff que debes dominar:**

```bash
# 1. Working Directory vs Staging Area (lo que editaste y AÚN NO agregaste con git add):
git diff

# 2. Staging Area vs Último Commit HEAD (lo que SÍ preparaste con git add e irá en la foto):
git diff --staged     # (o su sinónimo exacto: git diff --cached)

# 3. Entre dos commits de la historia (ej. el commit anterior vs el actual):
git diff HEAD~1 HEAD  # (o usando hashes: git diff 8b19e2f c3f2a1d)

# 4. Entre dos ramas completas antes de hacer un merge:
git diff main develop
```

### 7.2 git restore: Las 3 situaciones para restaurar archivos individuales

Mientras git diff solo mira, git restore actúa sobre archivos concretos en tres escenarios: Situación 1 (Descartar cambios del Working Directory): editaste saludo.py sin hacer git add y quieres tirar esos cambios a la basura volviendo a cómo estaba en HEAD; ejecutas git restore saludo.py (¡Cuidado! No hay vuelta atrás porque esos cambios nunca estuvieron en un commit). Situación 2 (Deshacer un git add sin perder tu código): agregaste config.py al Staging por error pero aún no quieres incluirlo en este commit; ejecutas git restore --staged config.py y el archivo sale de la lista verde pero conserva todas tus modificaciones intactas en tu editor. Situación 3 (Viajar en el tiempo para un solo archivo con --source): quieres recuperar cómo estaba saludo.py hace dos commits sin tocar el resto del proyecto; ejecutas git restore --source=HEAD~2 saludo.py.

**Ejemplo práctico — Las 3 jugadas de git restore en la terminal:**

```bash
# Situación 1: Descartar ediciones no preparadas (Destructivo: revisa antes con git diff)
git diff saludo.py
git restore saludo.py

# Situación 2: Sacar un archivo del Staging Area SIN perder los cambios hechos en él
git restore --staged config.py

# Situación 3: Traer al Working Directory la versión de un archivo de un commit anterior
git restore --source=HEAD~1 saludo.py
# (También acepta hash exacto: git restore --source=8b19e2f saludo.py)
```

### 7.3 git commit --amend: Enmendar el último commit sin ensuciar el historial

Acabas de hacer un commit hace 10 segundos y notas uno de dos errores clásicos: (1) Escribiste mal el mensaje, o (2) Te olvidaste de meter un archivo que iba en esa misma foto (como config.py). En vez de hacer un segundo commit llamado "ahora sí agrego el archivo olvidado", usas git commit --amend. Atención: internamente --amend no edita el commit viejo (los commits son inmutables), sino que construye un commit NUEVO que reemplaza al anterior, cambiando su hash (ej. de c3f2a1d a 9e81b4f). Por eso solo debes usarlo antes de hacer git push.

**Ejemplo práctico — Corregir el mensaje o agregar un archivo olvidado al último commit:**

```bash
# Caso A: Solo quieres corregir el mensaje del último commit
git commit --amend -m "feat(auth): agrega autenticación con Google OAuth"

# Caso B: Olvidaste incluir config.py en el commit que acabas de hacer
git add config.py
git commit --amend --no-edit   # --no-edit reutiliza el mensaje que ya tenías sin abrir el editor
```

### 7.4 Notación HEAD~N y los 3 Modos de git reset (--soft, --mixed, --hard)

En Git, HEAD~1 significa "1 paso hacia atrás desde HEAD" (el padre), HEAD~2 "2 pasos hacia atrás" (el abuelo), y así sucesivamente. Cuando ejecutas git reset HEAD~1 en tu historia local, Git mueve el puntero de tu rama un commit hacia atrás (dejando el último commit huérfano fuera de la historia). Pero ¿qué hace Git con el código que habías escrito dentro de ese commit quitado? Eso lo deciden los 3 modos de reset: (1) --soft: mueve la rama atrás, pero deja todos tus cambios listos y verdes en el Staging Area (ideal para volver a commitear o unir varios commits pequeños en uno solo); (2) --mixed (el modo por defecto si no escribes flag): mueve la rama atrás, vacía el Staging Area, pero deja tus cambios a salvo en el Working Directory como modificados en rojo; (3) --hard: mueve la rama atrás, vacía el Staging Area y DESTRUYE los cambios del Working Directory restaurando la carpeta exactamente al commit destino.

**Ejemplo práctico — Comparativa práctica de los 3 modos de git reset:**

```bash
# 1. Modo --soft: Quita el commit pero deja los cambios preparados en Staging (verde)
git reset --soft HEAD~1

# 2. Modo --mixed (default): Quita el commit y saca de Staging, pero conserva tu código en el archivo (rojo)
git reset HEAD~1

# 3. Modo --hard: Quita el commit y BORRA por completo todos los cambios hechos en él (¡Peligroso!)
git reset --hard HEAD~1
```

### 7.5 git revert: Corregir hacia adelante en historia compartida

¿Qué pasa si el commit con el bug ya fue subido con git push y tus compañeros ya lo descargaron? Prohibido usar git reset: si borras un commit hacia atrás en una rama compartida, tu historia diverge de la del servidor, te obligaría a hacer git push --force y romperías los repositorios de todo el equipo. En historia compartida se corrige hacia adelante con git revert <hash>: Git analiza qué hizo el commit malo (si agregó 5 líneas, las borra; si borró 2, las vuelve a poner) y crea un commit NUEVO al final de la fila que anula exactamente sus efectos. Así nadie pierde historia y todos se actualizan con un simple git pull.

**Ejemplo práctico — Anular un commit público de forma segura con git revert:**

```bash
# El commit c3f2a1d ya está en GitHub y tiene un bug. Creamos su antídoto:
git revert c3f2a1d
# Resultado: Nace el commit nuevo d41f0a9: Revert "feat: login con Google"
git push origin main
```

### Comandos Clave de la Clase 7

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git diff / git diff --staged` | Compara cambios no preparados (Working vs Staging) o cambios ya preparados (Staging vs HEAD) | `git diff --staged` | Solo lectura (Inspección) |
| `git restore <archivo>` | Descarta las modificaciones locales de un archivo devolviéndolo a su estado en el último commit | `git restore app.py` | Sobrescribe Working Directory |
| `git restore --staged <archivo>` | Saca un archivo del Staging Area (deshace git add) conservando las ediciones en tu carpeta | `git restore --staged config.py` | Staging Area → Working Directory |
| `git commit --amend` | Reemplaza el último commit local permitiendo corregir su mensaje o sumar archivos olvidados | `git commit --amend --no-edit` | Reescribe el último commit local |
| `git reset [--soft|--mixed|--hard] HEAD~N` | Retrocede el puntero de la rama N commits hacia atrás manejando el staging y working dir según el flag | `git reset --soft HEAD~1` | Reescribe historia local |
| `git revert <hash>` | Crea un nuevo commit que invierte exactamente los cambios introducidos por un commit anterior | `git revert c3f2a1d` | Agrega commit nuevo (Seguro en equipo) |

### Errores Frecuentes y Cómo Solucionarlos (Clase 7)

- **Problema:** *Hice git reset HEAD~1 en una rama que ya estaba en GitHub y ahora git push me rechaza el envío*
  - **Por qué ocurre:** Retrocediste tu rama local reescribiendo historia que el servidor remoto ya tenía registrada.
  - **Solución:** `git pull (para recuperar el commit) y luego git revert <hash>` — Nunca uses reset sobre commits que ya subiste a una rama compartida; usa git revert.

---

<a id="clase-8"></a>
## Clase 08 · Viajes en el Tiempo (--detach), Pila Temporal (git stash) y .gitignore

**Rango en el curso:** `4:29:22 – 5:03:41` · **Duración:** 34 min

> **Idea Clave de la Clase:** *"Con --detach viajas al pasado sin mover ninguna rama; con git stash estacionas tu trabajo a medias en una pila LIFO para atender una urgencia; y con .gitignore blindas la puerta contra entornos virtuales y secretos."*

Tres herramientas indispensables para el flujo diario: cómo viajar a cualquier commit pasado en modo detached HEAD y rescatar commits huérfanos, cómo guardar trabajo a medias en una pila LIFO con git stash sin hacer commits sucios, y cómo configurar el filtro .gitignore.

### 8.1 git switch --detach: Qué significa estar en "Detached HEAD"

Normalmente, el puntero HEAD apunta al nombre de una rama (ej. main) y la rama apunta al último commit. Pero ¿qué pasa si quieres ver cómo funcionaba tu proyecto hace 10 commits en el hash a1b2c3d sin alterar ni mover ninguna rama? Ejecutas git switch --detach a1b2c3d. En ese instante, HEAD se "desprende" de la rama y apunta directamente al commit antiguo. Es tu máquina del tiempo de solo lectura para probar versiones pasadas o buscar en qué commit nació un bug.

- **Regla de oro:** Si estando en detached HEAD haces commits nuevos de prueba y luego ejecutas git switch main, esos commits quedan "huérfanos" (ninguna rama los apunta) y el garbage collector de Git terminará borrándolos. Si quieres conservarlos, antes de salir rescátalos creando una rama ahí mismo con git switch -c mi-rama-rescate.

**Ejemplo práctico — Viajar a un commit pasado con --detach y rescatar un experimento:**

```bash
# 1. Viajamos al commit antiguo a1b2c3d sin mover ninguna rama:
git switch --detach a1b2c3d
# You are in 'detached HEAD' state...

# 2. Caso A: Solo miramos y volvemos sano y salvo a main:
git switch main

# 3. Caso B: Hicimos un commit en detached HEAD y queremos salvarlo en una rama nueva:
git switch -c rescate-experimento
```

### 8.2 git stash: El estacionamiento temporal en pila LIFO

Estás a mitad de camino programando en tu rama formulario (tienes app.py y utils.py modificados pero incompletos) y te avisan de un bug urgente en main. Intentas hacer git switch main y Git te bloquea con el error: "Your local changes to the following files would be overwritten by switch". No quieres hacer un commit falso tipo "WIP a medias no tocar". La solución es git stash: guarda tus cambios modificados y tu staging en una pila temporal interna y deja tu Working Directory completamente limpio al instante. La pila funciona como LIFO (Last In, First Out: el último en entrar es siempre stash@{0} y renumera los anteriores). Cuando terminas la urgencia y vuelves a tu rama, ejecutas git stash pop y recuperas tu trabajo exacto donde ibas.

- **Regla de oro:** ¿Qué entra al stash por defecto? Entran los archivos modificados que ya estaban rastreados (tracked) y los cambios en el Staging Area. Los archivos nuevos (untracked) NO entran a menos que agregues el flag -u (git stash -u).

**Ejemplo práctico — Los 6 comandos del arsenal de git stash:**

```bash
git stash                  # 1. Guarda cambios tracked en la cima de la pila (stash@{0}) y limpia el directorio
git stash -u               #    (Variante: incluye también archivos nuevos untracked)
git stash list             # 2. Muestra todos los stashes guardados en la pila LIFO
git stash pop              # 3. Recupera el último stash (stash@{0}) y lo ELIMINA de la pila (apply + drop)
git stash apply            # 4. Recupera el último stash pero lo CONSERVA guardado en la pila
git stash drop stash@{0}   # 5. Borra un stash específico de la pila sin aplicarlo
git stash clear            # 6. Vacía toda la pila de stashes (¡Sin vuelta atrás!)
```

### 8.3 .gitignore: El filtro en la puerta del repositorio

En todo proyecto existen archivos que jamás deben subir al repositorio: carpetas de dependencias pesadas (node_modules/, .venv/), archivos compilados (__pycache__/, *.pyc, dist/, *.class), bases de datos locales (db.sqlite3), archivos temporales (*.log) y, sobre todo, archivos con contraseñas y claves secretas (.env). Para ignorarlos, creas en la raíz un archivo llamado .gitignore. Puedes ignorar por nombre exacto, carpeta entera (terminada en /), extensión comodín (*.log) e incluso crear excepciones con el signo de exclamación (!important.log re-incluye ese archivo aunque exista la regla *.log arriba).

- **Regla de oro:** ¡Letra pequeña crítica! .gitignore solo filtra archivos que AÚN NO están siendo rastreados por Git. Si por descuido hiciste git add y commit de .env antes de ponerlo en .gitignore, Git seguirá rastreándolo hasta que lo saques del índice con git rm --cached .env.

**Ejemplo práctico — Plantilla profesional de .gitignore y rescate con git rm --cached:**

```bash
# Ejemplo de archivo .gitignore combinando reglas y excepción (!):
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
git commit -m "chore: deja de rastrear archivo .env en el repositorio"
```

### Comandos Clave de la Clase 8

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git switch --detach <commit>` | Apunta HEAD directamente a un commit o tag para inspeccionar el pasado sin mover ramas | `git switch --detach a1b2c3d` | Modo Detached HEAD |
| `git stash / git stash -u` | Guarda el trabajo en progreso en la pila temporal (con -u incluye archivos nuevos untracked) | `git stash -u` | Working/Staging → Pila Stash |
| `git stash list` | Lista todos los cambios apilados mostrando su índice stash@{0}, stash@{1}... | `git stash list` | Solo lectura (Pila LIFO) |
| `git stash pop / apply` | Restaura los cambios desde la pila a tu directorio (pop lo borra de la pila; apply lo conserva) | `git stash pop` | Pila Stash → Working Directory |
| `git rm --cached <archivo>` | Deja de rastrear un archivo en Git sin eliminarlo físicamente de tu carpeta local | `git rm --cached config.json` | Saca del índice para que .gitignore actúe |

### Errores Frecuentes y Cómo Solucionarlos (Clase 8)

- **Problema:** *Agregué db.sqlite3 al archivo .gitignore pero sigue apareciendo modificado en cada git status*
  - **Por qué ocurre:** db.sqlite3 ya había sido incluido en un commit anterior, y .gitignore solo afecta a archivos untracked.
  - **Solución:** `git rm --cached db.sqlite3 && git commit -m "chore: quita db.sqlite3 del seguimiento"` — Con --cached eliminas el archivo del seguimiento de Git pero lo conservas intacto en tu computadora.

---

<a id="clase-9"></a>
## Clase 09 · Git Rebase, Tags de Versiones y Trunk-Based Development

**Rango en el curso:** `5:03:42 – 5:41:08` · **Duración:** 37 min

> **Idea Clave de la Clase:** *"Rebase para actualizar TU rama privada antes de abrir el Pull Request; Merge para unir el Pull Request a la rama compartida; Tag anotado para clavar cada release en producción."*

Las tres piezas avanzadas para dominar el flujo profesional: cómo reubicar commits con git rebase para lograr una historia lineal antes del PR, por qué jamás se hace rebase de ramas públicas (el desastre de Alice y Bob), cómo clavar versiones inmutables con Git Tags (Lightweight vs Annotated) y la filosofía de integración continua con Trunk-Based Development.

### 9.1 ¿Qué es git rebase y en qué se diferencia de git merge?

Supongamos que creaste tu rama feature cuando main iba por el commit C. Hiciste dos commits tuyos (D y E), pero mientras tanto main avanzó con F y G. Si unes con git merge, Git conserva la bifurcación tal como ocurrió y crea un commit de unión M. En cambio, cuando te paras en feature y ejecutas git rebase main, Git toma tus commits D y E, los aparta temporalmente, actualiza la base de tu rama hasta G, y vuelve a aplicar tus cambios uno por uno encima de G creando los commits nuevos D' y E' (mismos cambios, pero con nuevos identificadores hash). El resultado es una historia completamente recta y lineal, como si hubieras empezado tu trabajo hoy desde la última versión de main.

**Ejemplo práctico — El flujo real en equipo: Rebase antes del PR, Merge al final:**

```bash
# 1. Actualizas tu main local con lo último del equipo:
git switch main
git pull origin main

# 2. Te pasas a TU rama privada (que aún no compartiste con nadie) y haces rebase:
git switch feature/login
git rebase main
# (Si hay conflicto: editas archivo -> git add <archivo> -> git rebase --continue)

# 3. Ahora tu rama está al día y lineal. La subes y abres el Pull Request:
git push -u origin feature/login
# 4. Cuando aprueban el PR en GitHub, se integra en main con git merge.
```

### 9.2 La Regla de Oro del Rebase: El Desastre de Alice y Bob

Regla de oro inquebrantable: NUNCA hagas rebase de ramas públicas compartidas en las que trabajan otras personas. ¿Por qué? Veamos qué pasa cuando Alice y Bob trabajan juntos sobre la misma rama remota feature/login: (1) Ambos descargan la rama con D y E; (2) Bob agrega el commit F y hace push; (3) Alice hace pull (recibe D, E, F) pero decide "limpiar la historia" haciendo git rebase main y fuerza la subida al remoto con git push --force-with-lease; (4) En GitHub, los commits D, E y F desaparecen y son reemplazados por D', E' y F' con hashes nuevos; (5) Cuando Bob intenta hacer git pull, su Git entra en pánico: su máquina sigue teniendo los commits viejos D, E, F mientras el remoto tiene otra línea divergente D', E', F', provocando conflictos cruzados y duplicación de commits.

- **Regla de oro:** Si los commits están solo en tu máquina (o en una rama donde trabajas únicamente tú antes de abrir el PR), rebase es tu mejor aliado. Si la rama ya es pública y compartida con compañeros, usa merge.

### 9.3 Git Tags: Marcas permanentes para Releases (Lightweight vs Annotated)

A diferencia de una rama (branch), que es un papelito móvil que avanza con cada commit nuevo, un Git Tag es una etiqueta clavada con cemento sobre un commit específico que NO se mueve jamás. Se utiliza para inmortalizar lanzamientos a producción usando Versionado Semántico (ej. v1.0.0, v1.1.0, v2.0.0). Existen dos tipos: (1) Lightweight Tag (git tag v1.0.0): un simple puntero sin metadatos adicionales; y (2) Annotated Tag (git tag -a v1.0.0 -m "Mensaje", el estándar recomendado para releases): un objeto completo en la base de datos de Git que guarda quién publicó la versión, en qué fecha exacta, el mensaje de lanzamiento y permite firma criptográfica GPG.

- **Regla de oro:** ¡Detalle clave! Por seguridad y rendimiento, un git push normal NO sube los tags a GitHub. Debes empujarlos explícitamente con git push origin v1.0.0 (o git push --tags).

**Ejemplo práctico — El kit completo de comandos para gestionar Tags en producción:**

```bash
# 1. Crear un Tag Anotado (Recomendado para todo release):
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
git push origin --delete v1.0.0
```

### 9.4 Trunk-Based Development (TBD) vs Ramas de Larga Duración

En los flujos tradicionales antiguos (como Git Flow clásico mal aplicado), los equipos abrían ramas feature que duraban 2 semanas, 3 semanas o 1 mes enteras aisladas. Al intentar juntarlas al final del mes, explotaban decenas de conflictos gigantescos ("Merge Hell") y nadie sabía qué cambio rompió qué. Trunk-Based Development (TBD) propone la solución moderna: todos los desarrolladores integran su trabajo frecuentemente en una única rama principal llamada el "tronco" (trunk, normalmente main). Las ramas de funcionalidad viven solo unas pocas horas o máximo 1-2 días, contienen commits pequeños, pasan por pruebas automáticas (CI/CD) y se eliminan apenas se integran (git branch -d).

- **Analogía mental:** Frase clave para entrevistas técnicas: "Ramas de vida corta, cambios pequeños e integración continua al tronco, para que los merges nunca duelan."

### Comandos Clave de la Clase 9

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `git rebase <rama-base>` | Reaplica los commits de tu rama actual encima de la punta más reciente de la rama base | `git rebase main` | Reescribe historia linealmente |
| `git rebase --continue / --abort` | Continúa el rebase tras resolver un conflicto con git add, o lo cancela volviendo al estado inicial | `git rebase --continue` | Control de Rebase |
| `git tag -a <vX.Y.Z> -m "..."` | Crea una etiqueta anotada permanente con autor, fecha y mensaje en el commit actual | `git tag -a v1.0.0 -m "Release 1.0.0"` | Marca inmutable en .git/refs/tags |
| `git push origin <tag>` | Publica una etiqueta específica en el repositorio remoto de GitHub | `git push origin v1.0.0` | Local Tag → Remote Tag |
| `git show <tag>` | Muestra los metadatos de la etiqueta anotada (autor, fecha, mensaje) y el diff del commit etiquetado | `git show v1.0.0` | Solo lectura |

### Errores Frecuentes y Cómo Solucionarlos (Clase 9)

- **Problema:** *Creé el tag v1.0.0 en mi máquina, hice git push origin main, pero en GitHub dice "0 tags"*
  - **Por qué ocurre:** git push solo envía los commits de la rama, nunca envía las etiquetas por defecto.
  - **Solución:** `git push origin v1.0.0` — Empuja el tag explícitamente por su nombre (o usa git push --tags para enviar todos).

---

<a id="clase-10"></a>
## Clases 10 y 11 · Proyecto Final "Notas Colab": Todo el Curso en una sola App (Fases 0 a 8)

**Rango en el curso:** `5:41:09 – 7:42:37` · **Duración:** 2h 01m

> **Idea Clave de la Clase:** *"Aquí no venimos a memorizar comandos sueltos: conectamos dos cuentas de GitHub, dos carpetas locales con identidades distintas y las 5 reglas de oro de main y develop sobre código real."*

Simulación práctica integral de un equipo de 2 desarrolladores en un solo computador construyendo la app web "Notas Colab" con Django y uv: modelo main + develop con Rulesets, revisión de PR con Request Changes, resolución de conflictos reales con merge y con rebase, interrupción urgente con git stash, reset vs revert en GitHub, Release v1.0.0 y emergencia en producción con Hotfix v1.0.1 nacido desde un tag.

### 10.1 Las 5 Reglas del Juego: Modelo main + develop en "Notas Colab"

En el proyecto final construimos una aplicación mínima en Django usando el gestor moderno uv y simulamos un equipo real de dos personas en tu misma computadora mediante dos carpetas (~/notas-colab con tu identidad global principal, y ~/notas-colab-companero con la identidad local de tu segunda cuenta colaboradora). Todo el proyecto se gobierna por 5 reglas inquebrantables: (1) main es producción: solo contiene versiones publicadas, nadie trabaja directo en ella y solo recibe merges desde develop (releases) o desde ramas de hotfix; (2) develop es integración: es la rama por defecto del repo donde llega todo el trabajo diario por PR; (3) Las features nacen de develop y vuelven a develop por PR con revisión obligatoria; (4) Un release es un PR de develop -> main más un tag anotado que clava la versión; (5) Un hotfix de producción nace SIEMPRE desde el tag del release (nunca desde develop, que puede tener código experimental sin probar) y su corrección vuelve mediante dos PRs tanto a main como a develop (backport).

### 10.2 Resumen de las 9 Fases Prácticas (Fase 0 a Fase 8)

En la pestaña dedicada "Proyecto Notas Colab" de esta plataforma tienes el paso a paso interactivo con todos los archivos y comandos de las 9 fases: Fase 0 (Fundar proyecto con uv, completar .gitignore con db.sqlite3 y .env, crear develop, subir a GitHub, proteger ambas ramas con un Ruleset exigiendo 1 aprobación e invitar al colaborador); Fase 1 (Requerimiento NC-1 Modelo Nota, uso de git diff --staged, corrección con commit --amend antes de subir, PR con plantilla Qué/Por qué/Cómo probarlo, el colaborador pide ampliar max_length de 100 a 200 con Request Changes y fusión limpia); Fase 2 (El colaborador construye NC-2 página de inicio y avanza develop sin que tú hagas pull); Fase 3 (Trabajas sobre tu develop viejo en NC-3, salta conflicto real en notas/views.py al abrir el PR y lo resuelves en local con git merge develop + git diff --check); Fase 4 (NC-4 y NC-5 en paralelo donde plantas intencionalmente la semilla del año erróneo "226" en el footer y actualizas tu historia privada antes del primer push con git rebase develop y git rebase --continue); Fase 5 (A mitad de NC-6 suena la alarma del BUG-0 móvil: estacionas con git stash, revisas y fusionas el fix urgente, y retomas con git stash pop); Fase 6 (Deshaces un experimento privado con git reset --hard HEAD~2 y anulas el commit público malo "DEBUG MODE ON" usando el botón Revert de GitHub); Fase 7 (PR de Release develop -> main y tag anotado v1.0.0); y Fase 8 (Mientras develop tiene un lema [beta] sin probar, explota en producción el bug del año "226": viajas con git switch --detach v1.0.0, naces la rama hotfix/corrige-anio-footer desde el tag, abres doble PR a main y a develop y publicas el parche v1.0.1).

### Comandos Clave de la Clase 10

| Comando | Qué hace | Ejemplo de uso | Zona / Impacto |
| :--- | :--- | :--- | :--- |
| `uv init --name notas-colab && uv add django` | Crea el proyecto Python moderno con git init automático, entorno virtual .venv y Django instalado | `uv add django` | Fase 0 · Fundación |
| `git config user.name / user.email (sin --global)` | Configura la identidad exclusiva del segundo desarrollador dentro de ~/notas-colab-companero | `git config user.email "colaborador@ejemplo.com"` | Fase 0.5 · Doble Identidad |
| `git rebase develop → git rebase --continue` | Reubica tus commits locales sobre la última punta de develop antes de hacer tu primer git push | `git rebase develop` | Fase 4 · Historia Lineal |
| `git fetch --tags && git switch --detach v1.0.0` | Viaja exactamente a la foto publicada en producción para nacer el hotfix sin arrastrar cosas de develop | `git switch -c hotfix/corrige-anio-footer` | Fase 8 · Hotfix de Producción |
| `git fetch --prune` | Limpia las referencias remotas fantasma (origin/feature/...) de ramas que ya fueron borradas en GitHub | `git fetch --prune` | Auditoría y Limpieza Final |

### Errores Frecuentes y Cómo Solucionarlos (Clase 10)

- **Problema:** *Saqué la rama del hotfix desde develop en lugar de sacarla desde el tag v1.0.0*
  - **Por qué ocurre:** Por costumbre creaste la rama desde develop, pero develop ya tenía el lema experimental "[beta]" que no debía salir a producción.
  - **Solución:** `git switch --detach v1.0.0 && git switch -c hotfix/corrige-anio-footer` — Un hotfix de emergencia siempre nace desde el tag del release activo en producción y luego se fusiona tanto en main como en develop.

---

<a id="proyecto-final-notas-colab"></a>
## Proyecto Final Paso a Paso: "Notas Colab" (Clases 10 y 11)

En este proyecto integrador construimos una aplicación web real en **Django** gestionada con **`uv`**, simulando un equipo de **dos desarrolladores** en una sola computadora mediante dos carpetas (`~/notas-colab` para tu **Cuenta Principal** y `~/notas-colab-companero` para tu **Cuenta de Colaborador**).

### Las 5 Reglas de Oro del Modelo `main` y `develop`

1. **main es producción**: Solo contiene versiones publicadas y estables. Nadie trabaja directamente en ella. Solo recibe merges desde develop (releases) o desde ramas de hotfix (emergencias).
2. **develop es integración**: Todo el trabajo del día a día llega aquí, siempre mediante Pull Request aprobado. Es la rama configurada como "Default branch" del proyecto en GitHub.
3. **Las features nacen de develop y vuelven a develop**: Ramas de vida corta, buen nombre semántico (feature/... o fix/...) y Pull Request con revisión obligatoria del otro integrante.
4. **Un release es un PR de develop → main + un Tag anotado**: Cuando develop acumula un conjunto estable de funcionalidades, se fusiona hacia main por PR y se clava la versión para siempre con git tag -a vX.Y.Z.
5. **Un hotfix nace desde el Tag del release y vuelve a las 2 ramas**: Si aparece un bug urgente en producción, la rama hotfix nace desde el tag publicado (nunca desde develop, que puede tener cambios experimentales sin probar) y su arreglo vuelve con dos PRs: uno a main y otro a develop (backport).

### Fase 0 · Fundar el proyecto y montar el equipo de dos personas

- **Qué practicas aquí:** uv como gestor moderno, git init, .gitignore desde el día uno, primer commit, remote add, push -u, modelo main/develop, Ruleset de protección de ramas, colaboradores e identidad local vs global.

#### Paso 0.1 [CUENTA PRINCIPAL] — Crear el proyecto Django con uv

Creamos la carpeta principal ~/notas-colab e inicializamos con uv. Sorpresa: las herramientas modernas como uv ya ejecutan git init y crean un .gitignore básico automáticamente desde el segundo cero. Borramos el main.py de ejemplo, nos aseguramos de que la rama se llame main, instalamos Django y generamos el proyecto config y la app notas.

```bash
mkdir notas-colab && cd notas-colab
uv init --name notas-colab
ls -a
git status

# Limpiamos el archivo de ejemplo y aseguramos el nombre de la rama:
rm main.py
git branch -m main

# Instalamos Django y creamos la estructura del proyecto:
uv add django
uv run django-admin startproject config .
uv run python manage.py startapp notas

# Verificamos que el servidor levante en http://127.0.0.1:8000 (detener con Ctrl+C):
uv run python manage.py runserver
```

#### Paso 0.2 [CUENTA PRINCIPAL] — Completar el .gitignore antes del primer commit

Completamos el archivo .gitignore para evitar subir el entorno virtual (.venv que pesa cientos de megas), el bytecode (__pycache__), la base de datos local de desarrollo (db.sqlite3), secretos futuros (.env) y configuraciones del editor (.vscode/).

Archivo `.gitignore`:

```gitignore
.venv/
__pycache__/
*.pyc
db.sqlite3
.env
.vscode/
```
*Nota: Nada de esto viajará jamás al repositorio.*

#### Paso 0.3 [CUENTA PRINCIPAL] — Primer commit y nacimiento de la rama develop

Tomamos la primera foto del proyecto base en main y fundamos la segunda rama de larga vida: develop nace de main apuntando exactamente al mismo commit inicial (un papelito nuevo, gratis).

```bash
git status
git add .
git commit -m "feat: crea proyecto Django base con app de notas"

# Fundamos develop a partir de main:
git switch -c develop
git branch
```

#### Paso 0.4 [CUENTA PRINCIPAL] — A la nube en GitHub con candados (Ruleset) e invitación

1) En GitHub (cuenta principal) crea el repositorio notas-colab completamente vacío. 2) Conecta y sube main y develop. 3) En Settings -> General -> Default branch cambia la rama por defecto a develop (así todos los PRs apuntarán a develop automáticamente). 4) En Settings -> Rules -> Rulesets crea el ruleset "Proteger ramas largas" con Enforcement Active, agrega dos targets (Include default branch develop + Include by pattern main) y activa "Require a pull request before merging" con 1 approval required. 5) En Settings -> Collaborators -> Add people invita a tu segunda cuenta colaboradora y acepta la invitación.

```bash
git remote add origin https://github.com/TU_USUARIO/notas-colab.git
git push -u origin main
git push -u origin develop
```

#### Paso 0.5 [COLABORADOR] — El colaborador monta su puesto de trabajo con identidad local

En otra carpeta de tu misma computadora (~/notas-colab-companero), clonamos el repositorio, recreamos el entorno virtual idéntico con uv sync, nos posicionamos en develop y configuramos user.name y user.email SIN --global para que todo commit hecho en esa carpeta salga firmado por la cuenta de colaborador.

```bash
cd ~
git clone https://github.com/TU_USUARIO/notas-colab.git notas-colab-companero
cd notas-colab-companero
uv sync
git switch develop

# Configuramos la identidad LOCAL (gana sobre la global solo en esta carpeta):
git config user.name "TU_USUARIO_COLABORADOR"
git config user.email "correo-del-colaborador@ejemplo.com"
```

**Checkpoint Fase 0:** Repositorio en la nube con main y develop protegidas, develop como rama por defecto, dos clones en tu computador con identidades distintas y .gitignore blindado desde el commit 1.

---

### Fase 1 · Primera feature por la puerta correcta (Modelo Nota + Code Review)

- **Qué practicas aquí:** Ramas desde develop, Conventional Commits, git diff --staged, git commit --amend antes del push, Pull Request con plantilla profesional, Start a Review con Request Changes, merge con mensaje limpio y limpieza de ramas.

#### Paso 1.1 [CUENTA PRINCIPAL] — Crear la rama feature/modelo-nota y programar el modelo

> **REQUERIMIENTO NC-1:** "Como usuario, quiero que el sistema pueda guardar notas con un título, un contenido y su fecha de creación, para no perder mis ideas."

En la carpeta principal creamos la rama feature/modelo-nota desde develop, definimos la clase Nota en notas/models.py y registramos la app 'notas' dentro de INSTALLED_APPS en config/settings.py. Luego revisamos la foto con git diff --staged y commiteamos con un mensaje malo a propósito ("cambios") para practicar su corrección.

```bash
cd ~/notas-colab
git switch develop
git switch -c feature/modelo-nota

# Tras editar notas/models.py y config/settings.py:
git add notas/models.py config/settings.py
git diff --staged
git commit -m "cambios"
```

Archivo `notas/models.py`:

```python
from django.db import models

class Nota(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    creada = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
```
*Nota: Además, en config/settings.py agrega 'notas', al final de la lista INSTALLED_APPS.*

#### Paso 1.2 [CUENTA PRINCIPAL] — Enmendar con --amend, generar migración y abrir el PR #1

Como "cambios" es un mal mensaje y todavía es historia privada (sin push), lo corregimos con git commit --amend. Luego generamos la migración inicial de base de datos, hacemos su commit y subimos la rama para abrir el PR hacia develop.

```bash
git commit --amend -m "feat: agrega modelo Nota y registra la app"
git log --oneline -2

# Generamos y commiteamos los planos de la tabla para la base de datos:
uv run python manage.py makemigrations
git add notas/migrations/
git commit -m "feat: agrega migracion inicial del modelo Nota"

# Subimos la rama a GitHub:
git push -u origin feature/modelo-nota
```

**Plantilla del Pull Request en GitHub (`develop <- feature/modelo-nota`):**

```markdown
Título: feat: agrega el modelo Nota (NC-1)

## Qué hace
Implementa el requerimiento NC-1: agrega el modelo Nota con título, contenido y fecha de creación automática, registra la app en settings e incluye la migración inicial.

## Por qué
Es la base de datos de toda la app: sin este modelo no hay dónde guardar las notas.

## Cómo probarlo
uv run python manage.py migrate -> debe crear la tabla sin errores.
```

#### Paso 1.3 y 1.4 [COLABORADOR] — El colaborador pide cambios (Request Changes) y el autor actualiza el PR

Desde la cuenta del colaborador entramos a Files changed, pulsamos + en la línea de titulo, escribimos "¿100 caracteres no es poco para un título? Propongo 200.", elegimos "Start a review" y arriba en "Submit review" seleccionamos "Request changes". Luego, desde la cuenta principal, sin abrir otro PR, cambiamos max_length=200 en notas/models.py, regeneramos la migración y hacemos commit + git push.

```bash
# En ~/notas-colab (Cuenta Principal, atendiendo la revisión en la misma rama):
# (Tras cambiar max_length=100 por max_length=200 en notas/models.py)
uv run python manage.py makemigrations
git add notas/
git commit -m "feat: amplia el titulo a 200 caracteres segun revision"
git push
```

#### Paso 1.5 [CUENTA PRINCIPAL] — Aprobación, Merge con mensaje disciplinado y limpieza de ramas

El colaborador aprueba el PR ("LGTM"). Desde la cuenta principal pulsamos Merge pull request editando el mensaje para que diga qué entró y conserve el enlace (#1), borramos la rama remota con el botón Delete branch y limpiamos la rama local en nuestra máquina.

```bash
# En GitHub -> Commit message del Merge:
# merge: integra el modelo Nota (NC-1) (#1)

# En ~/notas-colab (limpieza local):
git switch develop
git pull origin develop
git branch -d feature/modelo-nota
```

**Checkpoint Fase 1:** Ciclo completo con revisión real superado: develop recibió su primera feature (Modelo Nota con 200 caracteres) mientras main sigue intacta esperando el primer release.

---

### Fase 2 · El colaborador avanza develop sin ti (Sembrando el conflicto)

- **Qué practicas aquí:** Reparto de tickets en paralelo, commits firmados por el segundo integrante, revisión cruzada y desincronización deliberada del repositorio local.

#### Paso 2.1 y 2.2 [COLABORADOR] — El colaborador construye la página de inicio (NC-2) y tú la fusionas

> **REQUERIMIENTO NC-2:** "Como visitante, quiero ver una página de inicio con el nombre del proyecto y un mensaje de bienvenida, para saber dónde estoy."

En la carpeta del colaborador (~/notas-colab-companero), actualizamos develop, creamos feature/pagina-inicio, programamos la vista inicio en notas/views.py y la ruta raíz en config/urls.py. El colaborador abre el PR y tú lo apruebas y fusionas desde la web.

> **Atención:** ¡Importante! Después de fusionar el PR en la web de GitHub, NO hagas git pull en tu carpeta principal todavía. Tu develop local debe quedarse desactualizado para vivir el conflicto real en la Fase 3.

```bash
cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c feature/pagina-inicio

# Tras editar notas/views.py y config/urls.py:
git add notas/views.py config/urls.py
git commit -m "feat: agrega pagina de inicio con saludo"
git push -u origin feature/pagina-inicio
```

Archivo `notas/views.py`:

```python
from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Bienvenido al proyecto.</p>")
```

Archivo `config/urls.py`:

```python
from django.contrib import admin
from django.urls import path
from notas.views import inicio

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio),
]
```

**Plantilla del Pull Request en GitHub (`develop <- feature/pagina-inicio`):**

```markdown
Título: feat: agrega pagina de inicio (NC-2)

## Qué hace
Implementa NC-2: crea la vista de inicio con el nombre del proyecto y un saludo, y conecta la ruta raíz en urls.py.

## Por qué
El sitio no tenía ninguna página; ahora los visitantes ven algo al entrar.

## Cómo probarlo
uv run python manage.py runserver -> abrir http://127.0.0.1:8000
```

**Checkpoint Fase 2:** develop remoto en GitHub avanzó con la página de inicio del colaborador, mientras tu copia local de develop quedó vieja a propósito.

---

### Fase 3 · El conflicto de verdad en equipo y resolución con git merge

- **Qué practicas aquí:** Conflicto real porque develop cambió mientras trabajabas, bloqueo de PR en GitHub, resolución local trayendo develop con git merge, lectura de marcadores y validación con git diff --check.

#### Paso 3.1 y 3.2 [CUENTA PRINCIPAL] — Trabajar sobre un develop viejo y encontrar el bloqueo en GitHub

> **REQUERIMIENTO NC-3:** "Como visitante, quiero un mensaje de bienvenida más personal y cercano, que invite a usar la app."

En tu carpeta principal (sin haber hecho pull), creas feature/saludo-personalizado y escribes tu propia versión de notas/views.py y config/urls.py tocando las mismas líneas que el colaborador ya fusionó en NC-2. Al subir y abrir el PR, GitHub bloquea el merge con "This branch has conflicts that must be resolved".

```bash
cd ~/notas-colab
git switch develop
git switch -c feature/saludo-personalizado

# Tras editar notas/views.py con "<h1>Mis Notas</h1><p>Tu espacio para pensar.</p>":
git add notas/views.py config/urls.py
git commit -m "feat: agrega inicio con saludo personalizado"
git push -u origin feature/saludo-personalizado
```

#### Paso 3.3 y 3.4 [CUENTA PRINCIPAL] — Resolver el conflicto en local como profesional y cerrar el PR

Actualizamos nuestro develop local, volvemos a nuestra rama y ejecutamos git merge develop. Abos archivos entran en conflicto, combinamos lo mejor de ambos en notas/views.py ("Notas Colab" + "Tu espacio para pensar."), borramos los marcadores <<< === >>>, verificamos con git diff --check, confirmamos y empujamos.

```bash
git switch develop
git pull origin develop
git switch feature/saludo-personalizado
git merge develop
# CONFLICT (content): Merge conflict in notas/views.py

# Editamos notas/views.py dejando la combinación limpia sin marcadores y verificamos:
git diff --check
git add .
git commit -m "merge: integra develop y combina titulo con saludo"
git push

# Tras aprobar y fusionar en GitHub, limpiamos en local:
git switch develop
git pull origin develop
git branch -d feature/saludo-personalizado
```

Archivo `notas/views.py (Resuelto y limpio)`:

```python
from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Tu espacio para pensar.</p>")
```

**Checkpoint Fase 3:** Resolviste en local el choque entre las dos versiones de notas/views.py combinando el mejor título con el nuevo saludo, y entregaste un PR limpio.

---

### Fase 4 · Rebase bien hecho (Historia lineal y la semilla del bug "226")

- **Qué practicas aquí:** git rebase sobre historia privada ANTES del primer push, resolución de conflicto durante un rebase, git rebase --continue y entrega de PR con historia 100% lineal.

#### Paso 4.1 [COLABORADOR] — El colaborador vuelve a mover develop con el ticket NC-4

> **REQUERIMIENTO NC-4:** "El texto de bienvenida no es claro; hay que ajustarlo para que invite a la acción."

El colaborador crea fix/texto-bienvenida, cambia el párrafo a <p>Organiza tus ideas.</p>, abre su PR y tú lo apruebas y fusionas en develop.

```bash
cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c fix/texto-bienvenida
# Edita notas/views.py con <p>Organiza tus ideas.</p>
git add notas/views.py
git commit -m "fix: mejora el texto de bienvenida"
git push -u origin fix/texto-bienvenida
```

#### Paso 4.2 y 4.3 [CUENTA PRINCIPAL] — Agregar el pie de página (con "226") y hacer git rebase develop antes de subir

> **REQUERIMIENTO NC-5:** "Como visitante, quiero ver un pie de página con el nombre y el año del proyecto."

En tu carpeta (con develop viejo), creas feature/pie-de-pagina y agregas <footer>Notas Colab 226</footer>. Haces commit PERO NO HACES PUSH. Como tu commit sigue siendo historia privada, actualizas develop, ejecutas git rebase develop, resuelves el conflicto combinando "Organiza tus ideas." + "<footer>Notas Colab 226</footer>", cierras con git rebase --continue y recién ahí haces tu primer push.

> **Atención:** Escribe literalmente "Notas Colab 226" (y no 2026): es un bug sembrado a propósito que viajará hasta producción para que lo reparemos con un Hotfix real en la Fase 8.

```bash
cd ~/notas-colab
git switch develop
git switch -c feature/pie-de-pagina
# Editamos notas/views.py agregando <footer>Notas Colab 226</footer>
git add notas/views.py
git commit -m "feat: agrega pie de pagina"

# ¡Alto! Antes del primer push, actualizamos develop y hacemos REBASE:
git switch develop
git pull origin develop
git switch feature/pie-de-pagina
git rebase develop

# Resolvemos el conflicto en notas/views.py y continuamos el rebase:
git add notas/views.py
git rebase --continue
git log --oneline -5

# Ahora sí, primer push con historia lineal impecable:
git push -u origin feature/pie-de-pagina
```

Archivo `notas/views.py (Tras resolver el rebase)`:

```python
from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Organiza tus ideas.</p><footer>Notas Colab 226</footer>")
```

**Checkpoint Fase 4:** Rebaseaste tu rama privada sobre la punta de develop antes de compartirla, lograste un historial lineal sin commits de unión intermedios y sembraste el typo "226" rumbo a producción.

---

### Fase 5 · La interrupción: git stash al rescate ante un bug urgente

- **Qué practicas aquí:** Pausar trabajo a medias con git stash sin ensuciar el historial, cambiar de rama para revisar una urgencia (BUG-0), retomar con git stash pop y conectar la vista con el modelo Nota.

#### Paso 5.1 y 5.2 [AMBOS ROLES] — Trabajo a medias en NC-6, alarma de BUG-0 y uso de git stash / stash pop

> **REQUERIMIENTO NC-6 + BUG-0 (URGENTE):** NC-6: "Ver en el inicio cuántas notas tengo guardadas" | BUG-0: "El saludo se corta feo en pantallas de celular. Acortarlo ya."

Empiezas feature/vista-lista agregando solo el import de Nota sin commitear. Suena la alarma del BUG-0: el colaborador sube fix/saludo-corto ("Tus ideas, en orden.") y te pide revisarlo YA. En tu carpeta guardas tu cambio a medias con git stash, traes y verificas su rama, apruebas y fusionas su PR en GitHub, vuelves a feature/vista-lista, recuperas tu import con git stash pop y completas el conteo con Nota.objects.count().

```bash
# 1. En ~/notas-colab estás a mitad de feature/vista-lista y suena la urgencia:
git stash
git fetch origin
git switch fix/saludo-corto
# Verificas el fix del colaborador, apruebas y fusionas su PR en GitHub.

# 2. Regresas a tu rama y recuperas tu trabajo a medias desde la pila:
git switch feature/vista-lista
git stash pop

# 3. Completas notas/views.py, haces commit, rebase sobre develop y push:
git add notas/views.py
git commit -m "feat: muestra el conteo de notas en el inicio"
git switch develop && git pull origin develop
git switch feature/vista-lista && git rebase develop
# (Resuelves conflicto si pide combinar el nuevo saludo -> git add -> git rebase --continue)
git push -u origin feature/vista-lista
```

Archivo `notas/views.py (Con conteo real de base de datos)`:

```python
from django.http import HttpResponse
from notas.models import Nota

def inicio(request):
    notas = Nota.objects.count()
    return HttpResponse(
        "<h1>Notas Colab</h1><p>Tus ideas, en orden.</p>"
        f"<p>Notas guardadas:{notas}</p>"
        "<footer>Notas Colab 226</footer>"
    )
```

**Checkpoint Fase 5:** Estacionaste tu código incompleto en la pila LIFO, revisaste y fusionaste la urgencia móvil y recuperaste tu trabajo exacto donde ibas.

---

### Fase 6 · Deshacer en equipo: git reset (privado) vs Revert en GitHub (público)

- **Qué practicas aquí:** La regla de oro en acción: eliminar commits experimentales privados con git reset --hard HEAD~2 y anular un commit defectuoso ya publicado en develop mediante un PR de Revert.

#### Paso 6.1 [CUENTA PRINCIPAL] — Reset: El experimento local que no debió existir (Historia privada)

Creamos la rama experimento/colores y hacemos dos commits de prueba con un archivo CSS. Como nos arrepentimos y NUNCA hicimos push, aplicamos git reset --hard HEAD~2 y borramos la rama como si nada hubiera pasado.

```bash
git switch develop && git pull origin develop
git switch -c experimento/colores
echo "/* prueba de estilos */" > notas/static.css
git add . && git commit -m "feat: experimento de estilos"
echo "/* mas pruebas */" >> notas/static.css
git add . && git commit -m "feat: mas experimentos"

# Como es historia 100% privada, retrocedemos y borramos todo:
git reset --hard HEAD~2
git switch develop
git branch -D experimento/colores
```

#### Paso 6.2 [CUENTA PRINCIPAL] — Revert: El commit malo ("DEBUG MODE ON") que ya llegó a develop

> **REQUERIMIENTO NC-7 (Ticket vago):** "Agregar un indicador visual del modo de la app."

En feature/mensaje-debug agregamos <p>DEBUG MODE ON</p> al inicio, abrimos el PR, el colaborador lo aprueba por descuido y se fusiona en develop. ¡Ahora el error ya es público en develop! Prohibido usar reset. Entramos al PR ya fusionado en GitHub, pulsamos el botón "Revert", GitHub crea automáticamente la rama y el PR con el commit inverso, el colaborador lo aprueba y lo fusionamos.

```bash
# Tras fusionar el PR de Revert en GitHub, actualizamos develop local:
git switch develop && git pull origin develop
git log --oneline -5
# Verás el commit malo y justo encima el commit "Revert ..." que lo anula limpiamente.
```

**Checkpoint Fase 6:** Aplicaste las dos mitades de la regla de oro: lo privado se reescribió sin dejar rastro con reset --hard, y lo compartido se anuló hacia adelante con revert.

---

### Fase 7 · El Release: develop → main + Tag anotado v1.0.0

- **Qué practicas aquí:** Pull Request de release entre ramas de larga duración (base: main <- compare: develop), changelog basado en Conventional Commits, git tag -a v1.0.0, push explícito del tag y publicación de GitHub Release.

#### Paso 7.1, 7.2 y 7.3 [CUENTA PRINCIPAL] — Fusionar develop en main, clavar el tag v1.0.0 y publicar el Release

Abrimos en GitHub un PR cambiando la base a main y compare a develop con el resumen de NC-1 a NC-6. El colaborador aprueba y hacemos Merge (¡NUNCA borres develop!). Luego en nuestra consola traemos main actualizada, creamos el tag anotado v1.0.0, lo empujamos explícitamente a GitHub y publicamos el Release oficial en la pestaña Releases.

```bash
git switch main
git pull origin main
git tag -a v1.0.0 -m "Primera version estable de Notas Colab"
git push origin v1.0.0
```

**Plantilla del Pull Request en GitHub (`main <- develop`):**

```markdown
Título: release: version 1.0.0

## Primera versión estable de Notas Colab

Incluye:
- Modelo Nota con migración inicial (NC-1)
- Página de inicio con saludo (NC-2, NC-3, NC-4, BUG-0)
- Pie de página con nombre y año (NC-5)
- Conteo de notas guardadas en el inicio (NC-6)

Todo el contenido fue revisado y aprobado por PR en develop.
```

**Checkpoint Fase 7:** main contiene exactamente la primera versión publicada en producción clavada con el tag v1.0.0, mientras develop permanece abierta para el trabajo futuro.

---

### Fase 8 · La emergencia en producción: Hotfix desde el Tag v1.0.0 y parche v1.0.1

- **Qué practicas aquí:** Crear una rama de hotfix naciendo desde un Tag con git switch --detach v1.0.0, aislar producción del trabajo experimental de develop, doble PR del hotfix (a main y backport a develop), tag v1.0.1 y limpieza con git fetch --prune.

#### Paso 8.1 [COLABORADOR] — Mientras tanto, develop recibe trabajo experimental ([beta])

Después del release v1.0.0, el colaborador sube feature/lema-beta cambiando el lema en develop a "Tus ideas, en orden. [beta]" y lo fusionan en develop. Este cambio es experimental y NO debe salir a producción todavía.

```bash
cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c feature/lema-beta
# Cambia el <p> por <p>Tus ideas, en orden. [beta]</p>
git add notas/views.py
git commit -m "feat: prueba nuevo lema"
git push -u origin feature/lema-beta
```

#### Paso 8.2 [CUENTA PRINCIPAL] — Explota BUG-1 en producción: Nacer la rama hotfix desde el tag v1.0.0

> **BUG-1 (URGENTE, PRODUCCIÓN):** "El pie de página de la versión publicada (v1.0.0) dice 'Notas Colab 226'. Lo están viendo todos los usuarios. Corregir YA."

¡La semilla de la Fase 4 floreció! Como develop ya tiene el lema [beta] sin validar, el arreglo NO puede nacer de develop. Viajamos en el tiempo a la foto exacta de producción con git switch --detach v1.0.0, creamos desde ahí la rama hotfix/corrige-anio-footer, cambiamos 226 por 2026 y subimos la rama.

```bash
cd ~/notas-colab
git fetch --tags
git switch --detach v1.0.0
cat notas/views.py

# Nacemos la rama del hotfix directamente desde el tag v1.0.0:
git switch -c hotfix/corrige-anio-footer

# Corregimos "226" -> "2026" en notas/views.py y subimos:
git add notas/views.py
git commit -m "fix: corrige el anio en el pie de pagina"
git push -u origin hotfix/corrige-anio-footer
```

#### Paso 8.3 y 8.4 [CUENTA PRINCIPAL] — El doble destino del Hotfix (PR a main + PR a develop) y Release v1.0.1

Desde la misma rama hotfix/corrige-anio-footer abrimos DOS Pull Requests: (1) PR 1 hacia main para publicar la corrección en producción sin el [beta], y (2) PR 2 hacia develop (backport) para que el próximo release no reviva el bug "226" (resolviendo el pequeño conflicto en develop para conservar tanto el lema [beta] como el año 2026). Finalmente, clavamos el tag v1.0.1 en main y limpiamos referencias fantasma con git fetch --prune.

```bash
# Tras fusionar el PR 1 en main y el PR 2 en develop:
git switch main && git pull origin main
git tag -a v1.0.1 -m "Corrige el anio del pie de pagina"
git push origin v1.0.1

# Actualizamos develop local, borramos la rama del hotfix y limpiamos referencias remotas muertas:
git switch develop && git pull origin develop
git branch -d hotfix/corrige-anio-footer
git fetch --prune
```

**Plantilla del Pull Request en GitHub (`main (PR 1) y luego develop (PR 2 - Backport) <- hotfix/corrige-anio-footer`):**

```markdown
Título: hotfix: corrige el anio del pie de pagina (BUG-1)

## Qué corrige
BUG-1: el footer de la v1.0.0 publicada dice "226" en vez de "2026".

## Origen y Doble Destino
Rama creada desde el tag v1.0.0 para no arrastrar trabajo experimental [beta] de develop. Se integra en main (parche v1.0.1) y en develop (backport).
```

**Checkpoint Fase 8:** ¡Proyecto Final Completado! Naciste una rama desde un tag, arreglaste el bug "226 -> 2026" en producción sin arrastrar el lema [beta] de develop, llevaste el fix a ambas ramas largas y publicaste v1.0.1.

---

<a id="tabla-maestra-de-comandos"></a>
## Tabla Maestra de Comandos Rápidos (Cheatsheet)

| Categoría | Comando | Descripción |
| :--- | :--- | :--- |
| **Configuración** | `git config --global user.name "Nombre"` | Define tu nombre de autor global |
| **Configuración** | `git config --global user.email "correo"` | Define tu correo de autor global |
| **Básicos** | `git init` | Inicializa un nuevo repositorio Git en la carpeta actual |
| **Básicos** | `git status` | Muestra el estado de archivos en Working Directory y Staging |
| **Básicos** | `git add <archivo>` / `git add .` | Prepara un archivo o todos los cambios en el Staging Area |
| **Básicos** | `git commit -m "tipo: mensaje"` | Toma una foto inmutable de lo que está en el Staging Area |
| **Historial** | `git log --oneline --graph --all` | Muestra el grafo compacto de commits y todas las ramas |
| **Ramas** | `git branch` | Lista las ramas locales y marca dónde está `HEAD` |
| **Ramas** | `git switch -c <rama>` | Crea una rama nueva y mueve `HEAD` hacia ella |
| **Ramas** | `git switch <rama>` | Cambia a una rama existente |
| **Ramas** | `git branch -d <rama>` | Elimina una rama local ya fusionada |
| **Fusión** | `git merge <rama>` | Une la rama indicada dentro de la rama donde estás parado |
| **Fusión** | `git merge --abort` | Cancela un merge con conflictos y restaura el estado previo |
| **Remotos** | `git clone <url>` | Descarga un repositorio remoto completo y configura `origin` |
| **Remotos** | `git remote add origin <url>` | Conecta tu repositorio local con un servidor remoto |
| **Remotos** | `git push -u origin <rama>` | Sube la rama al remoto y fija el seguimiento (`--set-upstream`) |
| **Remotos** | `git fetch origin` | Descarga cambios del remoto sin mezclarlos con tu trabajo |
| **Remotos** | `git pull origin <rama>` | Descarga cambios del remoto y hace merge inmediato (`fetch + merge`) |
| **Inspección** | `git diff` / `git diff --staged` | Compara cambios sin preparar o cambios ya preparados en Staging |
| **Deshacer** | `git restore <archivo>` | Descarta modificaciones locales en el Working Directory |
| **Deshacer** | `git restore --staged <archivo>` | Saca un archivo del Staging Area sin perder tus cambios |
| **Deshacer** | `git restore --source=HEAD~1 <archivo>` | Recupera la versión de un archivo desde un commit anterior |
| **Deshacer** | `git commit --amend -m "..."` | Corrige el mensaje o agrega archivos olvidados al último commit local |
| **Deshacer** | `git reset --soft HEAD~1` | Quita el último commit local dejando sus cambios listos en Staging |
| **Deshacer** | `git reset --mixed HEAD~1` | Quita el último commit local dejando sus cambios en Working Directory |
| **Deshacer** | `git reset --hard HEAD~1` | Quita el último commit local y elimina por completo sus cambios |
| **Deshacer** | `git revert <hash>` | Crea un commit nuevo que anula otro commit (seguro en ramas compartidas) |
| **Día a Día** | `git switch --detach <hash>` | Viaja a un commit o tag en modo solo lectura (`detached HEAD`) |
| **Día a Día** | `git stash` / `git stash -u` | Guarda trabajo incompleto en la pila LIFO temporal |
| **Día a Día** | `git stash pop` | Recupera el último stash (`stash@{0}`) y lo saca de la pila |
| **Día a Día** | `git rm --cached <archivo>` | Deja de rastrear un archivo en Git sin borrarlo de tu disco |
| **Avanzado** | `git rebase <rama-base>` | Reubica tus commits locales sobre la punta de otra rama (historia lineal) |
| **Avanzado** | `git tag -a v1.0.0 -m "Mensaje"` | Crea un tag anotado permanente para marcar un release |
| **Avanzado** | `git push origin v1.0.0` | Publica un tag en el repositorio remoto de GitHub |

---
*Guía generada para repositorio GitHub — Curso Completo de Git & GitHub 2026.*