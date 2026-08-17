// Actividad: Generador de Consejos con JavaScript

// PASO 1: Seleccionar los elementos del DOM
// Utiliza 'const' para declarar las variables, ya que estos elementos no cambiarán.
// Pista: usa document.getElementById('id-del-elemento')

// TODO: Selecciona el botón usando su id ('fetch-btn') y asígnalo a una variable const


// TODO: Selecciona el párrafo del texto ('quote-text') y asígnalo a una variable const




// PASO 2: Crear la función para consumir la API
// Utilizaremos una Arrow Function y la sintaxis async/await
// URL de la API: 'https://api.adviceslip.com/advice'

const obtenerConsejo = async () => {
    try {
        // Deshabilitamos el botón mientras carga para evitar múltiples clics
        // TODO: (opcional pero recomendado) deshabilitar el botón
        // Mostramos un texto de carga
        //TODO: (opcional) puedes cambiar el texto del párrafo a mientras se carga

        // 2.1 Utiliza 'fetch' para llamar a la API. Recuerda usar 'await' ya que fetch devuelve una promesa.
        // TODO: const respuesta = ...
        
        // 2.2 Convierte la respuesta a formato JSON. También requiere 'await' ya que es una promesa.
        // TODO: const data = ...
        
        // 2.3 Extrae el consejo. (La API devuelve el texto dentro de data.slip.advice)
        // TODO: const consejo = ...

        // 2.4 Muestra el consejo en el HTML usando Template Literals (``)
        // TODO: textoConsejo.textContent = ...
        
    } catch (error) {
        // Qué pasa si hay un error (ej. el usuario se queda sin internet)
        // TODO: console.error...
        // TODO: text.textcontent = ...
    } finally {
        // El bloque finally se ejecuta SIEMPRE, haya error o no.
        // Aquí volvemos a habilitar el botón para que puedan pedir otro consejo.
        // TODO: boton.disabled ...

    }
};

// Conectamos el botón con la función
// Utilizamos addEventListener para escuchar el evento de 'clic' en el botón

// TODO: boton.addEventListener...
