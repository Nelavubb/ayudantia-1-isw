# Actividad: Generador de Consejos Aleatorios

¡Bienvenido/a a la actividad práctico! En esta actividad conectaremos HTML, CSS y JavaScript moderno para consumir una API pública y crear una aplicación web funcional. Al final, subiremos el código a tu propio repositorio.

---

## Paso 1: Obtener el código base

Para comenzar, necesitas los archivos base del proyecto (`index.html`, `style.css` y `app.js`). Tienes dos opciones para hacerlo:

### Opción A: Copiar y pegar
1. Crea una carpeta en tu computadora llamada `generador-consejos` y ábrela en Visual Studio Code.
2. Crea los tres archivos: `index.html`, `style.css` y `app.js`.
3. Copia el contenido proporcionado en el repositorio y pégalo en sus archivos respectivos.

### Opción B: Clonar el repositorio (Recomendado para practcar Git)
Si prefieres usar la terminal, abre tu terminal en la carpeta donde guardas tus proyectos y ejecuta:
```bash
git clone <URL_DEL_REPOSITORIO_SSH>
cd <NOMBRE_DE_LA_CARPETA>
```
*(Nota: Si usas esta opción, asegúrate de borrar la carpeta oculta `.git` localmente para que luego puedas vincularlo a tu propio repositorio limpio).*

---

## Paso 2: La actividad (Escribir el código JavaScript)

El diseño ya está listo. Tu misión es darle vida usando JavaScript moderno.

1. Abre el archivo `app.js` en tu editor.
2. Lee los comentarios que dicen `TODO`. Estos indican exactamente dónde debes escribir tu código.
3. Para ir probando tus avances:
   * Haz clic derecho en tu archivo `index.html` y selecciona **"Open with Live Server"** (si tienes la extensión instalada, si no, instálala desde las extensiones).
   * O simplemente haz doble clic en tu archivo `index.html` para abrirlo en tu navegador.
4. Abre las herramientas de desarrollo en tu navegador y mantenla abierta. Así podrás ver algunas cosas interesantes.

---

## Paso 3: Subir a tu propio repositorio GitHub

Una vez que tu código funcione localmente, es hora de guardarlo en tu propia "nube" usando Git y GitHub.

Asegúrate de haber creado previamente un **repositorio vacío** en tu cuenta de GitHub y ten la URL a mano (ej. `https://github.com/tu-usuario/mi-repositorio.git`).

Abre la terminal en VS Code (`Ctrl + \`` o `Ver > Terminal`) y ejecuta los siguientes comandos uno por uno:

**1. Inicializar Git (Solo si usaste la Opción A del Paso 1):**
```bash
git init
```

**2. Preparar y guardar tus archivos:**
```bash
git add .
git commit -m "Mensaje"
```

**3. Renombrar la rama principal a 'main' (estándar actual):**
```bash
git branch -M main
```

**4. Conectar tu computadora con tu repositorio de GitHub:**
Reemplaza `<TU_URL_DE_GITHUB>` con el enlace del repositorio vacío que creaste.
```bash
git remote add origin <TU_URL_DE_GITHUB>
```

**5. Subir el código:**
```bash
git push -u origin main
```

---

## Paso 4 (Opcional): Publicar tu web

Ya tienes el código en GitHub, pero ahora vamos a convertirlo en una página web real usando **GitHub Pages**.

1. Ve a tu repositorio en GitHub.
2. Haz clic en la pestaña **Settings** (Configuración) con el ícono de engranaje.
3. En el menú lateral izquierdo, busca la sección **Pages** (Páginas).
4. Donde dice **Branch** (Rama), cambia el botón que dice `None` y selecciona `main`.
5. Haz clic en **Save** (Guardar).

**Espera un par de minutos** y recarga la página. En la parte superior de esa misma sección aparecerá un enlace. Ese es el link público de tu aplicación, ya puedes compartirlo para que otros vean tu trabajo.