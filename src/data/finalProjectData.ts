export interface ProjectSubStep {
  id: string;
  stepCode: string;
  role: 'CUENTA PRINCIPAL' | 'COLABORADOR' | 'AMBOS ROLES';
  title: string;
  ticketName?: string;
  ticketQuote?: string;
  explanation: string;
  terminalCommands?: string;
  fileEdits?: Array<{
    filePath: string;
    language: string;
    content: string;
    note?: string;
  }>;
  prTemplate?: {
    baseBranch: string;
    compareBranch: string;
    title: string;
    body: string;
    mergeMessage?: string;
  };
  warningNote?: string;
}

export interface ProjectPhase {
  phaseNumber: number;
  title: string;
  skillsPracticed: string;
  checkpointText: string;
  steps: ProjectSubStep[];
}

export const NOTAS_COLAB_RULES = [
  {
    number: 1,
    title: 'main es producción',
    description:
      'Solo contiene versiones publicadas y estables. Nadie trabaja directamente en ella. Solo recibe merges desde develop (releases) o desde ramas de hotfix (emergencias).'
  },
  {
    number: 2,
    title: 'develop es integración',
    description:
      'Todo el trabajo del día a día llega aquí, siempre mediante Pull Request aprobado. Es la rama configurada como "Default branch" del proyecto en GitHub.'
  },
  {
    number: 3,
    title: 'Las features nacen de develop y vuelven a develop',
    description:
      'Ramas de vida corta, buen nombre semántico (feature/... o fix/...) y Pull Request con revisión obligatoria del otro integrante.'
  },
  {
    number: 4,
    title: 'Un release es un PR de develop → main + un Tag anotado',
    description:
      'Cuando develop acumula un conjunto estable de funcionalidades, se fusiona hacia main por PR y se clava la versión para siempre con git tag -a vX.Y.Z.'
  },
  {
    number: 5,
    title: 'Un hotfix nace desde el Tag del release y vuelve a las 2 ramas',
    description:
      'Si aparece un bug urgente en producción, la rama hotfix nace desde el tag publicado (nunca desde develop, que puede tener cambios experimentales sin probar) y su arreglo vuelve con dos PRs: uno a main y otro a develop (backport).'
  }
];

export const FINAL_PROJECT_PHASES: ProjectPhase[] = [
  {
    phaseNumber: 0,
    title: 'Fase 0 · Fundar el proyecto y montar el equipo de dos personas',
    skillsPracticed:
      'uv como gestor moderno, git init, .gitignore desde el día uno, primer commit, remote add, push -u, modelo main/develop, Ruleset de protección de ramas, colaboradores e identidad local vs global.',
    checkpointText:
      'Repositorio en la nube con main y develop protegidas, develop como rama por defecto, dos clones en tu computador con identidades distintas y .gitignore blindado desde el commit 1.',
    steps: [
      {
        id: 'f0-1',
        stepCode: '0.1',
        role: 'CUENTA PRINCIPAL',
        title: 'Crear el proyecto Django con uv',
        explanation:
          'Creamos la carpeta principal ~/notas-colab e inicializamos con uv. Sorpresa: las herramientas modernas como uv ya ejecutan git init y crean un .gitignore básico automáticamente desde el segundo cero. Borramos el main.py de ejemplo, nos aseguramos de que la rama se llame main, instalamos Django y generamos el proyecto config y la app notas.',
        terminalCommands: `mkdir notas-colab && cd notas-colab
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
uv run python manage.py runserver`
      },
      {
        id: 'f0-2',
        stepCode: '0.2',
        role: 'CUENTA PRINCIPAL',
        title: 'Completar el .gitignore antes del primer commit',
        explanation:
          'Completamos el archivo .gitignore para evitar subir el entorno virtual (.venv que pesa cientos de megas), el bytecode (__pycache__), la base de datos local de desarrollo (db.sqlite3), secretos futuros (.env) y configuraciones del editor (.vscode/).',
        fileEdits: [
          {
            filePath: '.gitignore',
            language: 'gitignore',
            content: `.venv/
__pycache__/
*.pyc
db.sqlite3
.env
.vscode/`,
            note: 'Nada de esto viajará jamás al repositorio.'
          }
        ]
      },
      {
        id: 'f0-3',
        stepCode: '0.3',
        role: 'CUENTA PRINCIPAL',
        title: 'Primer commit y nacimiento de la rama develop',
        explanation:
          'Tomamos la primera foto del proyecto base en main y fundamos la segunda rama de larga vida: develop nace de main apuntando exactamente al mismo commit inicial (un papelito nuevo, gratis).',
        terminalCommands: `git status
git add .
git commit -m "feat: crea proyecto Django base con app de notas"

# Fundamos develop a partir de main:
git switch -c develop
git branch`
      },
      {
        id: 'f0-4',
        stepCode: '0.4',
        role: 'CUENTA PRINCIPAL',
        title: 'A la nube en GitHub con candados (Ruleset) e invitación',
        explanation:
          '1) En GitHub (cuenta principal) crea el repositorio notas-colab completamente vacío. 2) Conecta y sube main y develop. 3) En Settings -> General -> Default branch cambia la rama por defecto a develop (así todos los PRs apuntarán a develop automáticamente). 4) En Settings -> Rules -> Rulesets crea el ruleset "Proteger ramas largas" con Enforcement Active, agrega dos targets (Include default branch develop + Include by pattern main) y activa "Require a pull request before merging" con 1 approval required. 5) En Settings -> Collaborators -> Add people invita a tu segunda cuenta colaboradora y acepta la invitación.',
        terminalCommands: `git remote add origin https://github.com/TU_USUARIO/notas-colab.git
git push -u origin main
git push -u origin develop`
      },
      {
        id: 'f0-5',
        stepCode: '0.5',
        role: 'COLABORADOR',
        title: 'El colaborador monta su puesto de trabajo con identidad local',
        explanation:
          'En otra carpeta de tu misma computadora (~/notas-colab-companero), clonamos el repositorio, recreamos el entorno virtual idéntico con uv sync, nos posicionamos en develop y configuramos user.name y user.email SIN --global para que todo commit hecho en esa carpeta salga firmado por la cuenta de colaborador.',
        terminalCommands: `cd ~
git clone https://github.com/TU_USUARIO/notas-colab.git notas-colab-companero
cd notas-colab-companero
uv sync
git switch develop

# Configuramos la identidad LOCAL (gana sobre la global solo en esta carpeta):
git config user.name "TU_USUARIO_COLABORADOR"
git config user.email "correo-del-colaborador@ejemplo.com"`
      }
    ]
  },
  {
    phaseNumber: 1,
    title: 'Fase 1 · Primera feature por la puerta correcta (Modelo Nota + Code Review)',
    skillsPracticed:
      'Ramas desde develop, Conventional Commits, git diff --staged, git commit --amend antes del push, Pull Request con plantilla profesional, Start a Review con Request Changes, merge con mensaje limpio y limpieza de ramas.',
    checkpointText:
      'Ciclo completo con revisión real superado: develop recibió su primera feature (Modelo Nota con 200 caracteres) mientras main sigue intacta esperando el primer release.',
    steps: [
      {
        id: 'f1-1',
        stepCode: '1.1',
        role: 'CUENTA PRINCIPAL',
        title: 'Crear la rama feature/modelo-nota y programar el modelo',
        ticketName: 'REQUERIMIENTO NC-1',
        ticketQuote:
          '"Como usuario, quiero que el sistema pueda guardar notas con un título, un contenido y su fecha de creación, para no perder mis ideas."',
        explanation:
          'En la carpeta principal creamos la rama feature/modelo-nota desde develop, definimos la clase Nota en notas/models.py y registramos la app \'notas\' dentro de INSTALLED_APPS en config/settings.py. Luego revisamos la foto con git diff --staged y commiteamos con un mensaje malo a propósito ("cambios") para practicar su corrección.',
        terminalCommands: `cd ~/notas-colab
git switch develop
git switch -c feature/modelo-nota

# Tras editar notas/models.py y config/settings.py:
git add notas/models.py config/settings.py
git diff --staged
git commit -m "cambios"`,
        fileEdits: [
          {
            filePath: 'notas/models.py',
            language: 'python',
            content: `from django.db import models

class Nota(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    creada = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo`,
            note: 'Además, en config/settings.py agrega \'notas\', al final de la lista INSTALLED_APPS.'
          }
        ]
      },
      {
        id: 'f1-2',
        stepCode: '1.2',
        role: 'CUENTA PRINCIPAL',
        title: 'Enmendar con --amend, generar migración y abrir el PR #1',
        explanation:
          'Como "cambios" es un mal mensaje y todavía es historia privada (sin push), lo corregimos con git commit --amend. Luego generamos la migración inicial de base de datos, hacemos su commit y subimos la rama para abrir el PR hacia develop.',
        terminalCommands: `git commit --amend -m "feat: agrega modelo Nota y registra la app"
git log --oneline -2

# Generamos y commiteamos los planos de la tabla para la base de datos:
uv run python manage.py makemigrations
git add notas/migrations/
git commit -m "feat: agrega migracion inicial del modelo Nota"

# Subimos la rama a GitHub:
git push -u origin feature/modelo-nota`,
        prTemplate: {
          baseBranch: 'develop',
          compareBranch: 'feature/modelo-nota',
          title: 'feat: agrega el modelo Nota (NC-1)',
          body: `## Qué hace
Implementa el requerimiento NC-1: agrega el modelo Nota con título, contenido y fecha de creación automática, registra la app en settings e incluye la migración inicial.

## Por qué
Es la base de datos de toda la app: sin este modelo no hay dónde guardar las notas.

## Cómo probarlo
uv run python manage.py migrate -> debe crear la tabla sin errores.`
        }
      },
      {
        id: 'f1-3',
        stepCode: '1.3 y 1.4',
        role: 'COLABORADOR',
        title: 'El colaborador pide cambios (Request Changes) y el autor actualiza el PR',
        explanation:
          'Desde la cuenta del colaborador entramos a Files changed, pulsamos + en la línea de titulo, escribimos "¿100 caracteres no es poco para un título? Propongo 200.", elegimos "Start a review" y arriba en "Submit review" seleccionamos "Request changes". Luego, desde la cuenta principal, sin abrir otro PR, cambiamos max_length=200 en notas/models.py, regeneramos la migración y hacemos commit + git push.',
        terminalCommands: `# En ~/notas-colab (Cuenta Principal, atendiendo la revisión en la misma rama):
# (Tras cambiar max_length=100 por max_length=200 en notas/models.py)
uv run python manage.py makemigrations
git add notas/
git commit -m "feat: amplia el titulo a 200 caracteres segun revision"
git push`
      },
      {
        id: 'f1-5',
        stepCode: '1.5',
        role: 'CUENTA PRINCIPAL',
        title: 'Aprobación, Merge con mensaje disciplinado y limpieza de ramas',
        explanation:
          'El colaborador aprueba el PR ("LGTM"). Desde la cuenta principal pulsamos Merge pull request editando el mensaje para que diga qué entró y conserve el enlace (#1), borramos la rama remota con el botón Delete branch y limpiamos la rama local en nuestra máquina.',
        terminalCommands: `# En GitHub -> Commit message del Merge:
# merge: integra el modelo Nota (NC-1) (#1)

# En ~/notas-colab (limpieza local):
git switch develop
git pull origin develop
git branch -d feature/modelo-nota`
      }
    ]
  },
  {
    phaseNumber: 2,
    title: 'Fase 2 · El colaborador avanza develop sin ti (Sembrando el conflicto)',
    skillsPracticed:
      'Reparto de tickets en paralelo, commits firmados por el segundo integrante, revisión cruzada y desincronización deliberada del repositorio local.',
    checkpointText:
      'develop remoto en GitHub avanzó con la página de inicio del colaborador, mientras tu copia local de develop quedó vieja a propósito.',
    steps: [
      {
        id: 'f2-1',
        stepCode: '2.1 y 2.2',
        role: 'COLABORADOR',
        title: 'El colaborador construye la página de inicio (NC-2) y tú la fusionas',
        ticketName: 'REQUERIMIENTO NC-2',
        ticketQuote:
          '"Como visitante, quiero ver una página de inicio con el nombre del proyecto y un mensaje de bienvenida, para saber dónde estoy."',
        explanation:
          'En la carpeta del colaborador (~/notas-colab-companero), actualizamos develop, creamos feature/pagina-inicio, programamos la vista inicio en notas/views.py y la ruta raíz en config/urls.py. El colaborador abre el PR y tú lo apruebas y fusionas desde la web.',
        warningNote:
          '¡Importante! Después de fusionar el PR en la web de GitHub, NO hagas git pull en tu carpeta principal todavía. Tu develop local debe quedarse desactualizado para vivir el conflicto real en la Fase 3.',
        terminalCommands: `cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c feature/pagina-inicio

# Tras editar notas/views.py y config/urls.py:
git add notas/views.py config/urls.py
git commit -m "feat: agrega pagina de inicio con saludo"
git push -u origin feature/pagina-inicio`,
        fileEdits: [
          {
            filePath: 'notas/views.py',
            language: 'python',
            content: `from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Bienvenido al proyecto.</p>")`
          },
          {
            filePath: 'config/urls.py',
            language: 'python',
            content: `from django.contrib import admin
from django.urls import path
from notas.views import inicio

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio),
]`
          }
        ],
        prTemplate: {
          baseBranch: 'develop',
          compareBranch: 'feature/pagina-inicio',
          title: 'feat: agrega pagina de inicio (NC-2)',
          body: `## Qué hace
Implementa NC-2: crea la vista de inicio con el nombre del proyecto y un saludo, y conecta la ruta raíz en urls.py.

## Por qué
El sitio no tenía ninguna página; ahora los visitantes ven algo al entrar.

## Cómo probarlo
uv run python manage.py runserver -> abrir http://127.0.0.1:8000`
        }
      }
    ]
  },
  {
    phaseNumber: 3,
    title: 'Fase 3 · El conflicto de verdad en equipo y resolución con git merge',
    skillsPracticed:
      'Conflicto real porque develop cambió mientras trabajabas, bloqueo de PR en GitHub, resolución local trayendo develop con git merge, lectura de marcadores y validación con git diff --check.',
    checkpointText:
      'Resolviste en local el choque entre las dos versiones de notas/views.py combinando el mejor título con el nuevo saludo, y entregaste un PR limpio.',
    steps: [
      {
        id: 'f3-1',
        stepCode: '3.1 y 3.2',
        role: 'CUENTA PRINCIPAL',
        title: 'Trabajar sobre un develop viejo y encontrar el bloqueo en GitHub',
        ticketName: 'REQUERIMIENTO NC-3',
        ticketQuote:
          '"Como visitante, quiero un mensaje de bienvenida más personal y cercano, que invite a usar la app."',
        explanation:
          'En tu carpeta principal (sin haber hecho pull), creas feature/saludo-personalizado y escribes tu propia versión de notas/views.py y config/urls.py tocando las mismas líneas que el colaborador ya fusionó en NC-2. Al subir y abrir el PR, GitHub bloquea el merge con "This branch has conflicts that must be resolved".',
        terminalCommands: `cd ~/notas-colab
git switch develop
git switch -c feature/saludo-personalizado

# Tras editar notas/views.py con "<h1>Mis Notas</h1><p>Tu espacio para pensar.</p>":
git add notas/views.py config/urls.py
git commit -m "feat: agrega inicio con saludo personalizado"
git push -u origin feature/saludo-personalizado`
      },
      {
        id: 'f3-3',
        stepCode: '3.3 y 3.4',
        role: 'CUENTA PRINCIPAL',
        title: 'Resolver el conflicto en local como profesional y cerrar el PR',
        explanation:
          'Actualizamos nuestro develop local, volvemos a nuestra rama y ejecutamos git merge develop. Abos archivos entran en conflicto, combinamos lo mejor de ambos en notas/views.py ("Notas Colab" + "Tu espacio para pensar."), borramos los marcadores <<< === >>>, verificamos con git diff --check, confirmamos y empujamos.',
        terminalCommands: `git switch develop
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
git branch -d feature/saludo-personalizado`,
        fileEdits: [
          {
            filePath: 'notas/views.py (Resuelto y limpio)',
            language: 'python',
            content: `from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Tu espacio para pensar.</p>")`
          }
        ]
      }
    ]
  },
  {
    phaseNumber: 4,
    title: 'Fase 4 · Rebase bien hecho (Historia lineal y la semilla del bug "226")',
    skillsPracticed:
      'git rebase sobre historia privada ANTES del primer push, resolución de conflicto durante un rebase, git rebase --continue y entrega de PR con historia 100% lineal.',
    checkpointText:
      'Rebaseaste tu rama privada sobre la punta de develop antes de compartirla, lograste un historial lineal sin commits de unión intermedios y sembraste el typo "226" rumbo a producción.',
    steps: [
      {
        id: 'f4-1',
        stepCode: '4.1',
        role: 'COLABORADOR',
        title: 'El colaborador vuelve a mover develop con el ticket NC-4',
        ticketName: 'REQUERIMIENTO NC-4',
        ticketQuote:
          '"El texto de bienvenida no es claro; hay que ajustarlo para que invite a la acción."',
        explanation:
          'El colaborador crea fix/texto-bienvenida, cambia el párrafo a <p>Organiza tus ideas.</p>, abre su PR y tú lo apruebas y fusionas en develop.',
        terminalCommands: `cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c fix/texto-bienvenida
# Edita notas/views.py con <p>Organiza tus ideas.</p>
git add notas/views.py
git commit -m "fix: mejora el texto de bienvenida"
git push -u origin fix/texto-bienvenida`
      },
      {
        id: 'f4-2',
        stepCode: '4.2 y 4.3',
        role: 'CUENTA PRINCIPAL',
        title: 'Agregar el pie de página (con "226") y hacer git rebase develop antes de subir',
        ticketName: 'REQUERIMIENTO NC-5',
        ticketQuote:
          '"Como visitante, quiero ver un pie de página con el nombre y el año del proyecto."',
        explanation:
          'En tu carpeta (con develop viejo), creas feature/pie-de-pagina y agregas <footer>Notas Colab 226</footer>. Haces commit PERO NO HACES PUSH. Como tu commit sigue siendo historia privada, actualizas develop, ejecutas git rebase develop, resuelves el conflicto combinando "Organiza tus ideas." + "<footer>Notas Colab 226</footer>", cierras con git rebase --continue y recién ahí haces tu primer push.',
        warningNote:
          'Escribe literalmente "Notas Colab 226" (y no 2026): es un bug sembrado a propósito que viajará hasta producción para que lo reparemos con un Hotfix real en la Fase 8.',
        terminalCommands: `cd ~/notas-colab
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
git push -u origin feature/pie-de-pagina`,
        fileEdits: [
          {
            filePath: 'notas/views.py (Tras resolver el rebase)',
            language: 'python',
            content: `from django.http import HttpResponse

def inicio(request):
    return HttpResponse("<h1>Notas Colab</h1><p>Organiza tus ideas.</p><footer>Notas Colab 226</footer>")`
          }
        ]
      }
    ]
  },
  {
    phaseNumber: 5,
    title: 'Fase 5 · La interrupción: git stash al rescate ante un bug urgente',
    skillsPracticed:
      'Pausar trabajo a medias con git stash sin ensuciar el historial, cambiar de rama para revisar una urgencia (BUG-0), retomar con git stash pop y conectar la vista con el modelo Nota.',
    checkpointText:
      'Estacionaste tu código incompleto en la pila LIFO, revisaste y fusionaste la urgencia móvil y recuperaste tu trabajo exacto donde ibas.',
    steps: [
      {
        id: 'f5-1',
        stepCode: '5.1 y 5.2',
        role: 'AMBOS ROLES',
        title: 'Trabajo a medias en NC-6, alarma de BUG-0 y uso de git stash / stash pop',
        ticketName: 'REQUERIMIENTO NC-6 + BUG-0 (URGENTE)',
        ticketQuote:
          'NC-6: "Ver en el inicio cuántas notas tengo guardadas" | BUG-0: "El saludo se corta feo en pantallas de celular. Acortarlo ya."',
        explanation:
          'Empiezas feature/vista-lista agregando solo el import de Nota sin commitear. Suena la alarma del BUG-0: el colaborador sube fix/saludo-corto ("Tus ideas, en orden.") y te pide revisarlo YA. En tu carpeta guardas tu cambio a medias con git stash, traes y verificas su rama, apruebas y fusionas su PR en GitHub, vuelves a feature/vista-lista, recuperas tu import con git stash pop y completas el conteo con Nota.objects.count().',
        terminalCommands: `# 1. En ~/notas-colab estás a mitad de feature/vista-lista y suena la urgencia:
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
git push -u origin feature/vista-lista`,
        fileEdits: [
          {
            filePath: 'notas/views.py (Con conteo real de base de datos)',
            language: 'python',
            content: `from django.http import HttpResponse
from notas.models import Nota

def inicio(request):
    notas = Nota.objects.count()
    return HttpResponse(
        "<h1>Notas Colab</h1><p>Tus ideas, en orden.</p>"
        f"<p>Notas guardadas:{notas}</p>"
        "<footer>Notas Colab 226</footer>"
    )`
          }
        ]
      }
    ]
  },
  {
    phaseNumber: 6,
    title: 'Fase 6 · Deshacer en equipo: git reset (privado) vs Revert en GitHub (público)',
    skillsPracticed:
      'La regla de oro en acción: eliminar commits experimentales privados con git reset --hard HEAD~2 y anular un commit defectuoso ya publicado en develop mediante un PR de Revert.',
    checkpointText:
      'Aplicaste las dos mitades de la regla de oro: lo privado se reescribió sin dejar rastro con reset --hard, y lo compartido se anuló hacia adelante con revert.',
    steps: [
      {
        id: 'f6-1',
        stepCode: '6.1',
        role: 'CUENTA PRINCIPAL',
        title: 'Reset: El experimento local que no debió existir (Historia privada)',
        explanation:
          'Creamos la rama experimento/colores y hacemos dos commits de prueba con un archivo CSS. Como nos arrepentimos y NUNCA hicimos push, aplicamos git reset --hard HEAD~2 y borramos la rama como si nada hubiera pasado.',
        terminalCommands: `git switch develop && git pull origin develop
git switch -c experimento/colores
echo "/* prueba de estilos */" > notas/static.css
git add . && git commit -m "feat: experimento de estilos"
echo "/* mas pruebas */" >> notas/static.css
git add . && git commit -m "feat: mas experimentos"

# Como es historia 100% privada, retrocedemos y borramos todo:
git reset --hard HEAD~2
git switch develop
git branch -D experimento/colores`
      },
      {
        id: 'f6-2',
        stepCode: '6.2',
        role: 'CUENTA PRINCIPAL',
        title: 'Revert: El commit malo ("DEBUG MODE ON") que ya llegó a develop',
        ticketName: 'REQUERIMIENTO NC-7 (Ticket vago)',
        ticketQuote: '"Agregar un indicador visual del modo de la app."',
        explanation:
          'En feature/mensaje-debug agregamos <p>DEBUG MODE ON</p> al inicio, abrimos el PR, el colaborador lo aprueba por descuido y se fusiona en develop. ¡Ahora el error ya es público en develop! Prohibido usar reset. Entramos al PR ya fusionado en GitHub, pulsamos el botón "Revert", GitHub crea automáticamente la rama y el PR con el commit inverso, el colaborador lo aprueba y lo fusionamos.',
        terminalCommands: `# Tras fusionar el PR de Revert en GitHub, actualizamos develop local:
git switch develop && git pull origin develop
git log --oneline -5
# Verás el commit malo y justo encima el commit "Revert ..." que lo anula limpiamente.`
      }
    ]
  },
  {
    phaseNumber: 7,
    title: 'Fase 7 · El Release: develop → main + Tag anotado v1.0.0',
    skillsPracticed:
      'Pull Request de release entre ramas de larga duración (base: main <- compare: develop), changelog basado en Conventional Commits, git tag -a v1.0.0, push explícito del tag y publicación de GitHub Release.',
    checkpointText:
      'main contiene exactamente la primera versión publicada en producción clavada con el tag v1.0.0, mientras develop permanece abierta para el trabajo futuro.',
    steps: [
      {
        id: 'f7-1',
        stepCode: '7.1, 7.2 y 7.3',
        role: 'CUENTA PRINCIPAL',
        title: 'Fusionar develop en main, clavar el tag v1.0.0 y publicar el Release',
        explanation:
          'Abrimos en GitHub un PR cambiando la base a main y compare a develop con el resumen de NC-1 a NC-6. El colaborador aprueba y hacemos Merge (¡NUNCA borres develop!). Luego en nuestra consola traemos main actualizada, creamos el tag anotado v1.0.0, lo empujamos explícitamente a GitHub y publicamos el Release oficial en la pestaña Releases.',
        terminalCommands: `git switch main
git pull origin main
git tag -a v1.0.0 -m "Primera version estable de Notas Colab"
git push origin v1.0.0`,
        prTemplate: {
          baseBranch: 'main',
          compareBranch: 'develop',
          title: 'release: version 1.0.0',
          body: `## Primera versión estable de Notas Colab

Incluye:
- Modelo Nota con migración inicial (NC-1)
- Página de inicio con saludo (NC-2, NC-3, NC-4, BUG-0)
- Pie de página con nombre y año (NC-5)
- Conteo de notas guardadas en el inicio (NC-6)

Todo el contenido fue revisado y aprobado por PR en develop.`
        }
      }
    ]
  },
  {
    phaseNumber: 8,
    title: 'Fase 8 · La emergencia en producción: Hotfix desde el Tag v1.0.0 y parche v1.0.1',
    skillsPracticed:
      'Crear una rama de hotfix naciendo desde un Tag con git switch --detach v1.0.0, aislar producción del trabajo experimental de develop, doble PR del hotfix (a main y backport a develop), tag v1.0.1 y limpieza con git fetch --prune.',
    checkpointText:
      '¡Proyecto Final Completado! Naciste una rama desde un tag, arreglaste el bug "226 -> 2026" en producción sin arrastrar el lema [beta] de develop, llevaste el fix a ambas ramas largas y publicaste v1.0.1.',
    steps: [
      {
        id: 'f8-1',
        stepCode: '8.1',
        role: 'COLABORADOR',
        title: 'Mientras tanto, develop recibe trabajo experimental ([beta])',
        explanation:
          'Después del release v1.0.0, el colaborador sube feature/lema-beta cambiando el lema en develop a "Tus ideas, en orden. [beta]" y lo fusionan en develop. Este cambio es experimental y NO debe salir a producción todavía.',
        terminalCommands: `cd ~/notas-colab-companero
git switch develop && git pull origin develop
git switch -c feature/lema-beta
# Cambia el <p> por <p>Tus ideas, en orden. [beta]</p>
git add notas/views.py
git commit -m "feat: prueba nuevo lema"
git push -u origin feature/lema-beta`
      },
      {
        id: 'f8-2',
        stepCode: '8.2',
        role: 'CUENTA PRINCIPAL',
        title: 'Explota BUG-1 en producción: Nacer la rama hotfix desde el tag v1.0.0',
        ticketName: 'BUG-1 (URGENTE, PRODUCCIÓN)',
        ticketQuote:
          '"El pie de página de la versión publicada (v1.0.0) dice \'Notas Colab 226\'. Lo están viendo todos los usuarios. Corregir YA."',
        explanation:
          '¡La semilla de la Fase 4 floreció! Como develop ya tiene el lema [beta] sin validar, el arreglo NO puede nacer de develop. Viajamos en el tiempo a la foto exacta de producción con git switch --detach v1.0.0, creamos desde ahí la rama hotfix/corrige-anio-footer, cambiamos 226 por 2026 y subimos la rama.',
        terminalCommands: `cd ~/notas-colab
git fetch --tags
git switch --detach v1.0.0
cat notas/views.py

# Nacemos la rama del hotfix directamente desde el tag v1.0.0:
git switch -c hotfix/corrige-anio-footer

# Corregimos "226" -> "2026" en notas/views.py y subimos:
git add notas/views.py
git commit -m "fix: corrige el anio en el pie de pagina"
git push -u origin hotfix/corrige-anio-footer`
      },
      {
        id: 'f8-3',
        stepCode: '8.3 y 8.4',
        role: 'CUENTA PRINCIPAL',
        title: 'El doble destino del Hotfix (PR a main + PR a develop) y Release v1.0.1',
        explanation:
          'Desde la misma rama hotfix/corrige-anio-footer abrimos DOS Pull Requests: (1) PR 1 hacia main para publicar la corrección en producción sin el [beta], y (2) PR 2 hacia develop (backport) para que el próximo release no reviva el bug "226" (resolviendo el pequeño conflicto en develop para conservar tanto el lema [beta] como el año 2026). Finalmente, clavamos el tag v1.0.1 en main y limpiamos referencias fantasma con git fetch --prune.',
        terminalCommands: `# Tras fusionar el PR 1 en main y el PR 2 en develop:
git switch main && git pull origin main
git tag -a v1.0.1 -m "Corrige el anio del pie de pagina"
git push origin v1.0.1

# Actualizamos develop local, borramos la rama del hotfix y limpiamos referencias remotas muertas:
git switch develop && git pull origin develop
git branch -d hotfix/corrige-anio-footer
git fetch --prune`,
        prTemplate: {
          baseBranch: 'main (PR 1) y luego develop (PR 2 - Backport)',
          compareBranch: 'hotfix/corrige-anio-footer',
          title: 'hotfix: corrige el anio del pie de pagina (BUG-1)',
          body: `## Qué corrige
BUG-1: el footer de la v1.0.0 publicada dice "226" en vez de "2026".

## Origen y Doble Destino
Rama creada desde el tag v1.0.0 para no arrastrar trabajo experimental [beta] de develop. Se integra en main (parche v1.0.1) y en develop (backport).`
        }
      }
    ]
  }
];
