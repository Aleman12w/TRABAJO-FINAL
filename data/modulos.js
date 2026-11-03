/* =====================================================
   AQUÍ SE EDITAN LOS MÓDULOS.
   Para agregar uno: copia un bloque { ... }, pégalo
   al final de la lista (con coma entre bloques) y cambia
   los textos. No hay que tocar el HTML ni el JS.
   Los módulos de abajo son EJEMPLOS: reemplázalos con
   los reales de tu equipo (el orden de la lista es el
   orden de la línea de tiempo).

   Campos nuevos del nivel Épico:
   - periodo:    texto corto para la línea de tiempo ("Feb–Mar")
   - flashcards: [{ p: "pregunta", r: "respuesta" }]. Si lo dejas
                 vacío, se generan tarjetas automáticas.
   - videos:     [{ titulo, url }] con enlaces de YouTube (se
                 incrustan) u otro sitio (se muestra el enlace).
   ===================================================== */

const EQUIPO = [
  "Integrante 1 · Líder Git",
  "Integrante 2 · Diseñador UI",
  "Integrante 3 · Curador de contenido",
  "Integrante 4 · QA y accesibilidad"
];

const MODULOS = [
  {
    id: "python",                         // único, sin espacios ni tildes
    nombre: "Programación con Python",
    docente: "Javier Mineros",            // o "Arcides Canales"
    icono: "🐍",
    periodo: "Febrero – Marzo",
    resumen: "Escribí programas con variables, ciclos y funciones.",
    aprendizajes: [
      "Usar condicionales y ciclos",
      "Crear funciones reutilizables",
      "Leer errores del intérprete"
    ],
    instrumentos: ["Guía de ejercicios", "Rúbrica del proyecto"],
    programas: ["Python 3", "Visual Studio Code"],
    herramientas: ["Python", "Flet"],
    recursos: [
      { titulo: "Documentación de Python", url: "https://docs.python.org/es/3/" }
    ],
    evidencias: [
      { titulo: "Mi proyecto en GitHub", url: "https://github.com/" }
    ],
    flashcards: [
      { p: "¿Para qué sirve una función?", r: "Para agrupar código reutilizable bajo un nombre y llamarlo cuando se necesite." },
      { p: "¿Qué diferencia hay entre for y while?", r: "for recorre una colección o rango; while repite mientras una condición sea verdadera." }
    ],
    videos: [],   // ej: { titulo: "Mi tutorial", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
    quiz: []      // el quiz se llena el Día 2
  },
  {
    id: "web",
    nombre: "Desarrollo web",
    docente: "Javier Mineros",
    icono: "🌐",
    periodo: "Abril – Mayo",
    resumen: "Construí páginas con HTML, CSS y JavaScript.",
    aprendizajes: [
      "Estructura semántica en HTML",
      "Diseño adaptable con CSS",
      "Manipular el DOM con JavaScript"
    ],
    instrumentos: ["Lista de cotejo", "Examen práctico"],
    programas: ["Visual Studio Code", "Navegador con herramientas F12"],
    herramientas: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    recursos: [
      { titulo: "MDN Web Docs", url: "https://developer.mozilla.org/es/" }
    ],
    evidencias: [],
    flashcards: [
      { p: "¿Qué es el DOM?", r: "La representación en árbol de la página que JavaScript puede leer y modificar." }
    ],
    videos: [],
    quiz: []
  },
  {
    id: "bd",
    nombre: "Bases de datos",
    docente: "Arcides Canales",
    icono: "🗄️",
    periodo: "Junio – Agosto",
    resumen: "Diseñé tablas y consulté datos con SQL.",
    aprendizajes: [
      "Crear tablas y relaciones",
      "Consultas SELECT, INSERT, UPDATE",
      "Normalización básica"
    ],
    instrumentos: ["Guía de laboratorio", "Examen escrito"],
    programas: ["MySQL", "SQL Server"],
    herramientas: ["SQL", "Python"],
    recursos: [
      { titulo: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" }
    ],
    evidencias: [],
    flashcards: [],   // vacío = tarjetas automáticas
    videos: [],
    quiz: []
  }
  
];
