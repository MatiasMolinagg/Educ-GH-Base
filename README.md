# Git & GitHub Masterclass 2026 — Guía Paso a Paso, Filminas Interactivas y Proyecto Final

Repositorio oficial de aprendizaje de **Git y GitHub** desde cero hasta flujos de equipo en producción (`main`, `develop`, `Pull Requests`, `Rulesets`, `Rebase`, `Tags`, `Trunk-Based Development` y el proyecto práctico **"Notas Colab"** con Django + `uv`).

---

## 📚 1. Leer la Guía Completa directamente en GitHub

Si solo quieres leer el manual teórico-práctico paso a paso desde la web de GitHub sin instalar nada, abre el archivo principal del curso incluido en este repositorio:

👉 **[Abrir `GUIA_COMPLETA_GIT_GITHUB_2026.md` (Manual Completo de las 11 Clases + Proyecto Final)](./GUIA_COMPLETA_GIT_GITHUB_2026.md)**

---

## 🖥️ 2.Cómo hacer que cualquiera ejecute la App Interactiva desde tu Repo (Sin instalar nada)

Este proyecto ya incluye un flujo automático de **GitHub Actions** (`.github/workflows/deploy.yml`) para que las filminas interactivas, el simulador y el visor de la guía queden publicados gratis en una página web (**GitHub Pages**) apenas lo subas a tu repositorio:

1. Sube este proyecto a un repositorio público en tu cuenta de GitHub.
2. En tu repositorio de GitHub, entra a **Settings** $\rightarrow$ **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment** $\rightarrow$ **Source**, selecciona **GitHub Actions**.
4. ¡Listo! En ~1 minuto GitHub compilará la aplicación y te dará un enlace público del estilo:
   `https://TU_USUARIO.github.io/NOMBRE_DE_TU_REPO/`
5. Puedes pegar ese enlace en la descripción de tu repo para que tus alumnos o colegas usen las **Filminas Interactivas**, el **Simulador de Git** y el botón **Exportar Guía PDF** directo desde el navegador.

*(Alternativa en 1 clic: también puedes importar tu repositorio en **[Vercel](https://vercel.com)** o **[Netlify](https://netlify.com)** gratis y se publicará automáticamente en cada `git push`).*

---

## 💻 3. Cómo ejecutar la plataforma en tu computadora (Modo Local)

Si tú o alguien que clone el repositorio quiere correrlo localmente en su máquina:

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/NOMBRE_DE_TU_REPO.git
cd NOMBRE_DE_TU_REPO

# 2. Instalar dependencias (requiere Node.js 18+)
npm install

# 3. Iniciar el servidor de desarrollo en http://localhost:3000
npm run dev
```

---

## 🗂️ Estructura de lo que incluye este repositorio

- 📄 **`GUIA_COMPLETA_GIT_GITHUB_2026.md`**: El informe completo en Markdown con las 11 clases detalladas, tablas de comandos, marcas de tiempo (`0:00:00` a `7:42:37`) y el proyecto final **Notas Colab**.
- 🎞️ **Presentador de Filminas de Clase (`src/components/SlideDeckPresenter.tsx`)**: Diapositivas interactivas con notas de orador (`N`), pantalla completa y animaciones en vivo.
- 🧪 **Simulador Visual de Git (`src/components/GitSandboxAndMarkdownView.tsx`)**: Laboratorio interactivo de las 3 zonas (*Working Directory*, *Staging Area*, *Repository*), pila `git stash` y modos de `git reset`.
- 🛠️ **Taller del Proyecto Final "Notas Colab" (`src/components/FinalProjectWorkshop.tsx`)**: Guía interactiva de las Fases 0 a 8 para practicar en equipo con dos cuentas de GitHub.
- 🖨️ **Exportador a PDF (`src/components/PrintableFullReport.tsx`)**: Maquetación editorial lista para imprimir o guardar como PDF desde el botón **Exportar Guía PDF**.
