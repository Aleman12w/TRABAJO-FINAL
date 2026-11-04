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

   DÍA 2 · Anatomía mínima de una ficha terminada (el portal
   la mide solo y lo muestra como "Ficha 4/6" en cada tarjeta):
     instrumentos ≥ 2 · programas ≥ 2 · herramientas ≥ 2
     recursos ≥ 3 (con enlace verificado) · evidencias ≥ 1
     quiz ≥ 3 preguntas (el quiz se programa en el Día 3)
   Los módulos de abajo cumplen pocos mínimos A PROPÓSITO:
   al llenarlos con contenido real, verás subir el contador.
   ===================================================== */

const EQUIPO = [
  "Integrante 1 · Líder Git",
  "Integrante 2 · Diseñador UI",
  "Integrante 3 · Curador de contenido",
  "Integrante 4 · QA y accesibilidad"
];

const MODULOS = [
  // =========================
  // PRIMER AÑO
  // =========================

  {
    id: "diseno-multimedia",
    nombre: "Diseño de aplicaciones multimedia",
    docente: "Luis Mario Solis Cajul",
    icono: "🎨",
    periodo: "Primer año",
    resumen: "Diseñé aplicaciones multimedia utilizando elementos gráficos, imágenes, audio y video.",
    aprendizajes: [
      "Diseño de interfaces multimedia",
      "Edición y manipulación de imágenes",
      "Integración de audio y video",
      "Principios de diseño visual y experiencia de usuario"
    ],
    instrumentos: ["Guías prácticas", "Proyectos multimedia", "Exámenes"],
    programas: ["Canva", "Adobe Photoshop", "CapCut"],
    herramientas: ["Diseño gráfico", "Edición multimedia", "Recursos digitales"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "desarrollo-paginas-web",
    nombre: "Desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    icono: "🌐",
    periodo: "Primer año",
    resumen: "Aprendí a desarrollar páginas web mediante lenguajes de programación y diseño web.",
    aprendizajes: [
      "Estructuración de páginas con HTML",
      "Diseño y estilos utilizando CSS",
      "Fundamentos de JavaScript",
      "Creación de páginas web responsivas",
      "Organización de archivos y proyectos web"
    ],
    instrumentos: ["Guías de laboratorio", "Prácticas individuales", "Proyectos web"],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["HTML", "CSS", "JavaScript", "GitHub"],
    recursos: [
      { titulo: "Documentación de HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { titulo: "Documentación de CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { titulo: "JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "ingles-sistemas-web",
    nombre: "Conversación en inglés sobre sistemas informáticos y desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    icono: "🇬🇧",
    periodo: "Primer año",
    resumen: "Desarrollé habilidades de comunicación en inglés utilizando vocabulario técnico relacionado con la informática y el desarrollo web.",
    aprendizajes: [
      "Vocabulario técnico de sistemas informáticos",
      "Conversaciones sobre desarrollo web",
      "Descripción de componentes de una computadora",
      "Expresión oral y comprensión auditiva",
      "Uso de términos tecnológicos en inglés"
    ],
    instrumentos: ["Exposiciones orales", "Diálogos", "Evaluaciones escritas"],
    programas: ["Google Translate", "Duolingo"],
    herramientas: ["Diccionario técnico", "Práctica oral", "Audios en inglés"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "proyectos-tecnologicos-web",
    nombre: "Proyectos tecnológicos de desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    icono: "💻",
    periodo: "Primer año",
    resumen: "Desarrollé proyectos tecnológicos aplicando conocimientos de diseño y programación web para solucionar necesidades.",
    aprendizajes: [
      "Planificación de proyectos web",
      "Identificación de problemas y necesidades",
      "Diseño de interfaces de usuario",
      "Desarrollo de sitios web funcionales",
      "Presentación y documentación de proyectos"
    ],
    instrumentos: ["Proyecto práctico", "Rúbricas", "Exposiciones"],
    programas: ["Visual Studio Code", "GitHub"],
    herramientas: ["HTML", "CSS", "JavaScript", "Metodologías de desarrollo"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "algoritmos-logica",
    nombre: "Elaboración de algoritmos usando lógica de programación",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🧠",
    periodo: "Primer año",
    resumen: "Aprendí a resolver problemas mediante algoritmos, estructuras lógicas y fundamentos de programación.",
    aprendizajes: [
      "Identificación y análisis de problemas",
      "Elaboración de pseudocódigo",
      "Diagramas de flujo",
      "Variables y tipos de datos",
      "Estructuras condicionales y repetitivas"
    ],
    instrumentos: ["Guías de ejercicios", "Prácticas de laboratorio", "Exámenes"],
    programas: ["PSeInt", "Visual Studio Code"],
    herramientas: ["Pseudocódigo", "Diagramas de flujo", "Lógica de programación"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "identificacion-requerimientos",
    nombre: "Identificación de requerimientos para diseñar o modificar sistemas informáticos",
    docente: "Francisco Arcides Canales Sorto",
    icono: "📋",
    periodo: "Primer año",
    resumen: "Aprendí a identificar las necesidades de los usuarios y establecer los requerimientos de un sistema informático.",
    aprendizajes: [
      "Identificación de necesidades del cliente",
      "Requerimientos funcionales y no funcionales",
      "Técnicas de recopilación de información",
      "Análisis de requerimientos",
      "Elaboración de documentación técnica"
    ],
    instrumentos: ["Entrevistas", "Guías de trabajo", "Documentación de proyectos"],
    programas: ["Microsoft Word", "Draw.io"],
    herramientas: ["Diagramas", "Encuestas", "Entrevistas", "Historias de usuario"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "manual-sistemas-calidad",
    nombre: "Elaboración de manual de sistemas de calidad para el desarrollo de software",
    docente: "Francisco Arcides Canales Sorto",
    icono: "📚",
    periodo: "Primer año",
    resumen: "Conocí los principios de calidad del software y elaboré documentación para establecer estándares en su desarrollo.",
    aprendizajes: [
      "Conceptos de calidad del software",
      "Identificación de estándares de calidad",
      "Elaboración de manuales de calidad",
      "Documentación de procesos",
      "Control y evaluación de calidad"
    ],
    instrumentos: ["Investigaciones", "Manuales técnicos", "Exposiciones"],
    programas: ["Microsoft Word", "Microsoft Excel"],
    herramientas: ["Normas ISO", "Documentación técnica", "Control de calidad"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "microempresa-cooperativa",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🏢",
    periodo: "Primer año",
    resumen: "Aprendí los fundamentos para organizar y poner en funcionamiento una microempresa mediante el trabajo cooperativo.",
    aprendizajes: [
      "Fundamentos del emprendimiento",
      "Organización de una microempresa",
      "Trabajo en equipo y asociatividad",
      "Administración de recursos",
      "Organización de actividades empresariales"
    ],
    instrumentos: ["Planes de trabajo", "Exposiciones", "Proyectos grupales"],
    programas: ["Microsoft Word", "Microsoft Excel", "Canva"],
    herramientas: ["Organigramas", "Presupuestos", "Planificación empresarial"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },


  // =========================
  // SEGUNDO AÑO
  // =========================

  {
    id: "instalaciones-redes-lan",
    nombre: "Diseño de instalaciones de redes LAN",
    docente: "Luis Mario Solis Cajul",
    icono: "🌐",
    periodo: "Segundo año",
    resumen: "Aprendí a diseñar instalaciones de redes LAN identificando sus componentes, conexiones y configuraciones.",
    aprendizajes: [
      "Conceptos básicos de redes LAN",
      "Identificación de dispositivos de red",
      "Diseño de topologías de red",
      "Cableado estructurado",
      "Configuración básica de redes"
    ],
    instrumentos: ["Guías de laboratorio", "Prácticas de conexión", "Exámenes"],
    programas: ["Cisco Packet Tracer", "Draw.io"],
    herramientas: ["Routers", "Switches", "Cable UTP", "Conectores RJ45"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "ingles-arquitectura-bases-datos",
    nombre: "Conversación en inglés sobre arquitectura de software y base de datos",
    docente: "Luis Mario Solis Cajul",
    icono: "🇬🇧",
    periodo: "Segundo año",
    resumen: "Fortalecí mi comunicación en inglés utilizando vocabulario relacionado con arquitectura de software y bases de datos.",
    aprendizajes: [
      "Vocabulario técnico de bases de datos",
      "Conceptos de arquitectura de software en inglés",
      "Descripción de estructuras de datos",
      "Conversaciones sobre tecnología",
      "Comprensión y expresión oral"
    ],
    instrumentos: ["Diálogos", "Exposiciones", "Evaluaciones orales"],
    programas: ["Google Translate", "Duolingo"],
    herramientas: ["Diccionario técnico", "Prácticas de conversación", "Audios"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "planes-negocio-cooperativo",
    nombre: "Diseño de planes de negocio en forma asociativa y cooperativa",
    docente: "Luis Mario Solis Cajul",
    icono: "📈",
    periodo: "Segundo año",
    resumen: "Aprendí a diseñar planes de negocio considerando la organización, administración y colaboración empresarial.",
    aprendizajes: [
      "Identificación de oportunidades de negocio",
      "Elaboración de planes empresariales",
      "Estudio de mercado",
      "Presupuestos y costos",
      "Organización cooperativa y asociativa"
    ],
    instrumentos: ["Planes de negocio", "Investigaciones", "Exposiciones"],
    programas: ["Microsoft Excel", "Microsoft Word", "Canva"],
    herramientas: ["Estudios de mercado", "Presupuestos", "Análisis FODA"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "componentes-base-datos",
    nombre: "Programación de componentes de base de datos",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🗄️",
    periodo: "Segundo año",
    resumen: "Aprendí a crear, administrar y programar componentes de bases de datos utilizando SQL.",
    aprendizajes: [
      "Diseño de tablas y relaciones",
      "Consultas SELECT, INSERT, UPDATE y DELETE",
      "Creación de procedimientos almacenados",
      "Uso de claves primarias y foráneas",
      "Operaciones CRUD"
    ],
    instrumentos: ["Guías de laboratorio", "Prácticas SQL", "Exámenes"],
    programas: ["MySQL", "SQL Server", "phpMyAdmin"],
    herramientas: ["SQL", "Modelado de datos", "Consultas y procedimientos"],
    recursos: [
      { titulo: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "diseno-arquitectura-software",
    nombre: "Diseño y arquitectura de software",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🏗️",
    periodo: "Segundo año",
    resumen: "Aprendí a diseñar la estructura de sistemas informáticos mediante modelos y principios de arquitectura de software.",
    aprendizajes: [
      "Fundamentos de arquitectura de software",
      "Diseño de componentes y módulos",
      "Diagramas UML",
      "Identificación de patrones de diseño",
      "Organización de la estructura de un sistema"
    ],
    instrumentos: ["Diagramas", "Prácticas", "Proyectos de software"],
    programas: ["Draw.io", "Visual Studio", "StarUML"],
    herramientas: ["UML", "Diagramas de clases", "Diagramas de componentes"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "programacion-orientada-objetos",
    nombre: "Desarrollo de programación orientada a objetos",
    docente: "Francisco Arcides Canales Sorto",
    icono: "💻",
    periodo: "Segundo año",
    resumen: "Desarrollé programas utilizando el paradigma de programación orientada a objetos y sus principales características.",
    aprendizajes: [
      "Conceptos de clases y objetos",
      "Encapsulamiento",
      "Herencia y polimorfismo",
      "Métodos y constructores",
      "Desarrollo de aplicaciones utilizando POO"
    ],
    instrumentos: ["Ejercicios prácticos", "Proyectos de programación", "Exámenes"],
    programas: ["Visual Studio", "Visual Studio Code"],
    herramientas: ["C#", ".NET", "Programación orientada a objetos"],
    recursos: [
      { titulo: "Documentación de C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "proyecto-innovador-segundo",
    nombre: "Proyecto innovador",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🚀",
    periodo: "Segundo año",
    resumen: "Desarrollé propuestas tecnológicas innovadoras para resolver problemas mediante soluciones informáticas.",
    aprendizajes: [
      "Identificación de problemas y oportunidades",
      "Generación de ideas innovadoras",
      "Planificación de proyectos tecnológicos",
      "Desarrollo de prototipos",
      "Presentación y evaluación de soluciones"
    ],
    instrumentos: ["Prototipos", "Informes", "Exposiciones"],
    programas: ["Visual Studio Code", "Canva", "GitHub"],
    herramientas: ["Prototipado", "Diseño de interfaces", "Metodologías de proyectos"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },


  // =========================
  // TERCER AÑO
  // =========================

  {
    id: "proyecto-innovador-software",
    nombre: "Proyecto innovador de Desarrollo de software",
    docente: "Javier Arturo Mineros Garcia",
    icono: "🚀",
    periodo: "Tercer año",
    resumen: "Desarrollé proyectos innovadores de software aplicando conocimientos de programación, análisis y diseño de sistemas.",
    aprendizajes: [
      "Identificación de necesidades tecnológicas",
      "Análisis y planificación de proyectos",
      "Diseño y desarrollo de aplicaciones",
      "Pruebas y validación del software",
      "Documentación y presentación de proyectos"
    ],
    instrumentos: ["Proyecto integrador", "Informe técnico", "Exposición final"],
    programas: ["Visual Studio", "Visual Studio Code", "GitHub"],
    herramientas: ["C#", "HTML", "CSS", "JavaScript", "Metodologías ágiles"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "ingles-mantenimiento-sistemas",
    nombre: "Conversación en inglés sobre mantenimiento de sistemas operativos",
    docente: "Javier Arturo Mineros Garcia",
    icono: "🇬🇧",
    periodo: "Tercer año",
    resumen: "Desarrollé habilidades de comunicación en inglés utilizando términos técnicos relacionados con los sistemas operativos y su mantenimiento.",
    aprendizajes: [
      "Vocabulario técnico de sistemas operativos",
      "Descripción de procesos de mantenimiento",
      "Identificación de problemas informáticos en inglés",
      "Conversaciones técnicas",
      "Comprensión de instrucciones de mantenimiento"
    ],
    instrumentos: ["Conversaciones", "Exposiciones orales", "Evaluaciones"],
    programas: ["Google Translate", "Duolingo"],
    herramientas: ["Diccionario técnico", "Audios", "Práctica oral"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "documentacion-sistemas",
    nombre: "Elaboración de documentación de sistemas informáticos",
    docente: "Javier Arturo Mineros Garcia",
    icono: "📄",
    periodo: "Tercer año",
    resumen: "Aprendí a elaborar documentación técnica y funcional para describir sistemas informáticos y sus procesos.",
    aprendizajes: [
      "Elaboración de manuales técnicos",
      "Documentación de procesos informáticos",
      "Manuales de usuario",
      "Diagramas y especificaciones del sistema",
      "Organización de documentación técnica"
    ],
    instrumentos: ["Manuales", "Informes técnicos", "Prácticas documentales"],
    programas: ["Microsoft Word", "Draw.io", "Microsoft Excel"],
    herramientas: ["Diagramas UML", "Documentación técnica", "Manuales de usuario"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "administracion-base-datos",
    nombre: "Administración de base de datos",
    docente: "Javier Arturo Mineros Garcia",
    icono: "🗄️",
    periodo: "Tercer año",
    resumen: "Aprendí a administrar bases de datos garantizando la organización, seguridad, integridad y disponibilidad de la información.",
    aprendizajes: [
      "Administración de usuarios y permisos",
      "Copias de seguridad y restauración",
      "Optimización de consultas SQL",
      "Mantenimiento de bases de datos",
      "Seguridad e integridad de la información"
    ],
    instrumentos: ["Guías de laboratorio", "Prácticas SQL", "Exámenes"],
    programas: ["MySQL", "SQL Server", "phpMyAdmin"],
    herramientas: ["SQL", "Backups", "Gestión de usuarios", "Administración de datos"],
    recursos: [
      { titulo: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" },
      { titulo: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "proyecto-arduino",
    nombre: "Proyecto Arduino",
    docente: "Javier Arturo Mineros Garcia",
    icono: "🤖",
    periodo: "Tercer año",
    resumen: "Desarrollé proyectos electrónicos utilizando Arduino, sensores y componentes programables.",
    aprendizajes: [
      "Fundamentos de electrónica básica",
      "Identificación de componentes electrónicos",
      "Programación de placas Arduino",
      "Conexión y utilización de sensores",
      "Desarrollo de prototipos electrónicos"
    ],
    instrumentos: ["Prácticas de laboratorio", "Prototipos", "Proyecto final"],
    programas: ["Arduino IDE", "Tinkercad"],
    herramientas: ["Arduino", "Sensores", "LED", "Protoboard", "Cables de conexión"],
    recursos: [
      { titulo: "Documentación oficial de Arduino", url: "https://docs.arduino.cc/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "desarrollo-aplicaciones-software",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Francisco Arcides Canales Sorto",
    icono: "👨‍💻",
    periodo: "Tercer año",
    resumen: "Desarrollé aplicaciones de software aplicando programación y análisis para resolver problemas de la vida cotidiana.",
    aprendizajes: [
      "Análisis de problemas y necesidades",
      "Diseño de soluciones informáticas",
      "Programación de aplicaciones",
      "Conexión con bases de datos",
      "Pruebas y corrección de errores"
    ],
    instrumentos: ["Prácticas de programación", "Proyectos", "Evaluaciones"],
    programas: ["Visual Studio", "Visual Studio Code", "MySQL"],
    herramientas: ["C#", ".NET", "SQL", "Depuración de código"],
    recursos: [
      { titulo: "Documentación de .NET", url: "https://learn.microsoft.com/es-es/dotnet/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "componentes-dispositivos-moviles",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco Arcides Canales Sorto",
    icono: "📱",
    periodo: "Tercer año",
    resumen: "Aprendí a desarrollar aplicaciones móviles mediante componentes, interfaces y herramientas de programación.",
    aprendizajes: [
      "Fundamentos del desarrollo móvil",
      "Diseño de interfaces para dispositivos móviles",
      "Creación y configuración de componentes",
      "Programación de eventos e interacciones",
      "Pruebas y ejecución de aplicaciones móviles"
    ],
    instrumentos: ["Guías prácticas", "Aplicaciones móviles", "Proyecto final"],
    programas: ["Visual Studio", ".NET MAUI", "Android"],
    herramientas: ["C#", "XAML", "Controles visuales", "Emuladores"],
    recursos: [
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" }
    ],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  },

  {
    id: "mantenimiento-sistema-informatico",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Francisco Arcides Canales Sorto",
    icono: "🛠️",
    periodo: "Tercer año",
    resumen: "Aprendí a realizar mantenimiento preventivo y correctivo para garantizar el funcionamiento adecuado de los sistemas informáticos.",
    aprendizajes: [
      "Mantenimiento preventivo y correctivo",
      "Diagnóstico de fallas de hardware y software",
      "Instalación y configuración de sistemas operativos",
      "Seguridad y protección de equipos",
      "Verificación del funcionamiento de sistemas informáticos"
    ],
    instrumentos: ["Prácticas de laboratorio", "Guías técnicas", "Evaluaciones"],
    programas: ["Windows", "CrystalDiskInfo", "Windows Defender"],
    herramientas: ["Destornilladores", "Multímetro", "Aire comprimido", "Herramientas de diagnóstico"],
    recursos: [],
    evidencias: [],
    flashcards: [],
    videos: [],
    quiz: []
  }

];
// ==========================================
// RECURSOS Y QUIZ DE LOS 23 MÓDULOS
// ==========================================

const contenidoExtra = {

  // ==========================================
  // PRIMER AÑO
  // ==========================================

  "diseno-multimedia": {
    recursos: [
      { titulo: "Canva - Diseño gráfico", url: "https://www.canva.com/es_es/" },
      { titulo: "GIMP - Edición de imágenes", url: "https://www.gimp.org/" },
      { titulo: "Adobe - Tutoriales creativos", url: "https://helpx.adobe.com/es/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es una aplicación multimedia?",
        opciones: [
          "Una aplicación que utiliza únicamente texto",
          "Una aplicación que combina texto, imágenes, audio y video",
          "Un programa exclusivo para bases de datos",
          "Un sistema operativo"
        ],
        respuesta: "Una aplicación que combina texto, imágenes, audio y video",
        explicacion: "Las aplicaciones multimedia integran diferentes medios para comunicar información."
      },
      {
        pregunta: "¿Cuál es el propósito principal del diseño de interfaces?",
        opciones: [
          "Hacer más difícil el uso de una aplicación",
          "Eliminar todos los elementos gráficos",
          "Facilitar la interacción del usuario",
          "Aumentar el tamaño de los archivos"
        ],
        respuesta: "Facilitar la interacción del usuario",
        explicacion: "Una buena interfaz permite que los usuarios utilicen una aplicación de manera sencilla."
      }
    ]
  },

  "desarrollo-paginas-web": {
    recursos: [
      { titulo: "MDN - HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { titulo: "MDN - CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { titulo: "JavaScript - Documentación", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { titulo: "W3Schools - Desarrollo web", url: "https://www.w3schools.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué lenguaje se utiliza para estructurar una página web?",
        opciones: ["CSS", "HTML", "Python", "SQL"],
        respuesta: "HTML",
        explicacion: "HTML define la estructura y el contenido de una página web."
      },
      {
        pregunta: "¿Para qué se utiliza CSS?",
        opciones: [
          "Para administrar bases de datos",
          "Para diseñar y dar estilos a páginas web",
          "Para crear sistemas operativos",
          "Para almacenar información"
        ],
        respuesta: "Para diseñar y dar estilos a páginas web",
        explicacion: "CSS permite modificar colores, tamaños, posiciones y presentación de los elementos."
      }
    ]
  },

  "ingles-sistemas-web": {
    recursos: [
      { titulo: "Duolingo - Inglés", url: "https://www.duolingo.com/" },
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      { titulo: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué significa la palabra 'Computer'?",
        opciones: ["Teléfono", "Computadora", "Impresora", "Teclado"],
        respuesta: "Computadora",
        explicacion: "Computer es el término en inglés para computadora."
      },
      {
        pregunta: "¿Qué significa 'Website'?",
        opciones: ["Base de datos", "Sistema operativo", "Sitio web", "Procesador"],
        respuesta: "Sitio web",
        explicacion: "Website hace referencia a un sitio web compuesto por diferentes páginas."
      }
    ]
  },

  "proyectos-tecnologicos-web": {
    recursos: [
      { titulo: "MDN - Aprende desarrollo web", url: "https://developer.mozilla.org/es/docs/Learn_web_development" },
      { titulo: "GitHub - Documentación", url: "https://docs.github.com/es" },
      { titulo: "Figma - Diseño de interfaces", url: "https://www.figma.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Cuál es el primer paso para desarrollar un proyecto web?",
        opciones: [
          "Publicar la página",
          "Identificar el problema y las necesidades",
          "Comprar un dominio",
          "Eliminar los archivos"
        ],
        respuesta: "Identificar el problema y las necesidades",
        explicacion: "Antes de desarrollar una solución es necesario conocer qué problema se desea resolver."
      },
      {
        pregunta: "¿Para qué sirve GitHub?",
        opciones: [
          "Editar fotografías",
          "Administrar redes físicas",
          "Almacenar y gestionar proyectos de código",
          "Crear documentos de texto"
        ],
        respuesta: "Almacenar y gestionar proyectos de código",
        explicacion: "GitHub permite alojar repositorios y colaborar en proyectos de desarrollo."
      }
    ]
  },

  "algoritmos-logica": {
    recursos: [
      { titulo: "PSeInt - Herramienta de pseudocódigo", url: "https://pseint.sourceforge.net/" },
      { titulo: "Programiz - Aprende programación", url: "https://www.programiz.com/" },
      { titulo: "Diagramas de flujo - Lucidchart", url: "https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es un algoritmo?",
        opciones: [
          "Un conjunto ordenado de pasos para resolver un problema",
          "Un dispositivo electrónico",
          "Un lenguaje de diseño",
          "Una base de datos"
        ],
        respuesta: "Un conjunto ordenado de pasos para resolver un problema",
        explicacion: "Un algoritmo establece instrucciones organizadas para alcanzar un resultado."
      },
      {
        pregunta: "¿Qué representa un rombo en un diagrama de flujo?",
        opciones: ["Inicio", "Proceso", "Decisión", "Fin"],
        respuesta: "Decisión",
        explicacion: "El rombo representa una condición que permite tomar diferentes caminos."
      }
    ]
  },

  "identificacion-requerimientos": {
    recursos: [
      { titulo: "Atlassian - Gestión de requisitos", url: "https://www.atlassian.com/es/agile/product-management/requirements" },
      { titulo: "Draw.io - Diagramas", url: "https://www.drawio.com/" },
      { titulo: "Lucidchart - Diagramas UML", url: "https://www.lucidchart.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es un requerimiento funcional?",
        opciones: [
          "Una característica física de la computadora",
          "Una función que el sistema debe realizar",
          "El color de una computadora",
          "Una conexión de internet"
        ],
        respuesta: "Una función que el sistema debe realizar",
        explicacion: "Los requerimientos funcionales describen las acciones y servicios que debe ofrecer un sistema."
      },
      {
        pregunta: "¿Cuál es una técnica para recopilar requerimientos?",
        opciones: ["Entrevistas", "Formatear discos", "Instalar programas", "Crear contraseñas"],
        respuesta: "Entrevistas",
        explicacion: "Las entrevistas permiten conocer directamente las necesidades de los usuarios."
      }
    ]
  },

  "manual-sistemas-calidad": {
    recursos: [
      { titulo: "ISO - Normas internacionales", url: "https://www.iso.org/es/home.html" },
      { titulo: "ISTQB - Pruebas de software", url: "https://www.istqb.org/" },
      { titulo: "Atlassian - Calidad de software", url: "https://www.atlassian.com/es/software-testing" }
    ],
    quiz: [
      {
        pregunta: "¿Qué busca garantizar la calidad del software?",
        opciones: [
          "Que el programa tenga muchos colores",
          "Que el software cumpla los requisitos y funcione correctamente",
          "Que el programa ocupe más espacio",
          "Que no tenga documentación"
        ],
        respuesta: "Que el software cumpla los requisitos y funcione correctamente",
        explicacion: "La calidad busca que el software satisfaga las necesidades y expectativas establecidas."
      },
      {
        pregunta: "¿Qué contiene un manual de calidad?",
        opciones: [
          "Únicamente imágenes",
          "Contraseñas de los usuarios",
          "Procedimientos, políticas y estándares de calidad",
          "Solamente códigos de programación"
        ],
        respuesta: "Procedimientos, políticas y estándares de calidad",
        explicacion: "El manual establece los lineamientos y procesos para mantener la calidad."
      }
    ]
  },

  "microempresa-cooperativa": {
    recursos: [
      { titulo: "CONAMYPE - El Salvador", url: "https://www.conamype.gob.sv/" },
      { titulo: "OIT - Cooperativas", url: "https://www.ilo.org/" },
      { titulo: "Canva - Planificación empresarial", url: "https://www.canva.com/es_es/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es una microempresa?",
        opciones: [
          "Una organización dedicada exclusivamente a actividades escolares",
          "Una empresa de pequeña escala",
          "Una institución gubernamental",
          "Una organización sin actividades económicas"
        ],
        respuesta: "Una empresa de pequeña escala",
        explicacion: "Una microempresa es una unidad económica de pequeña dimensión."
      },
      {
        pregunta: "¿Qué caracteriza al trabajo cooperativo?",
        opciones: [
          "Competir entre todos los integrantes",
          "Trabajar individualmente",
          "Colaborar para alcanzar objetivos comunes",
          "Evitar compartir responsabilidades"
        ],
        respuesta: "Colaborar para alcanzar objetivos comunes",
        explicacion: "La cooperación se basa en la participación y el esfuerzo conjunto."
      }
    ]
  },

  // ==========================================
  // SEGUNDO AÑO
  // ==========================================

  "instalaciones-redes-lan": {
    recursos: [
      { titulo: "Cisco Networking Academy", url: "https://www.netacad.com/" },
      { titulo: "Cisco - Fundamentos de redes", url: "https://www.cisco.com/" },
      { titulo: "Tinkercad - Simulación electrónica", url: "https://www.tinkercad.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué significa LAN?",
        opciones: [
          "Local Area Network",
          "Large Access Node",
          "Logical Application Network",
          "Long Area Number"
        ],
        respuesta: "Local Area Network",
        explicacion: "LAN significa red de área local y conecta dispositivos dentro de un espacio limitado."
      },
      {
        pregunta: "¿Qué dispositivo permite conectar varios equipos dentro de una red LAN?",
        opciones: ["Monitor", "Switch", "Impresora", "Escáner"],
        respuesta: "Switch",
        explicacion: "Un switch conecta dispositivos dentro de una red local y permite el intercambio de datos."
      }
    ]
  },

  "ingles-arquitectura-bases-datos": {
    recursos: [
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      { titulo: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
      { titulo: "W3Schools - SQL", url: "https://www.w3schools.com/sql/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué significa 'Database'?",
        opciones: ["Página web", "Base de datos", "Programa", "Teclado"],
        respuesta: "Base de datos",
        explicacion: "Database es el término en inglés utilizado para referirse a una base de datos."
      },
      {
        pregunta: "¿Qué significa 'Software Architecture'?",
        opciones: [
          "Arquitectura de software",
          "Mantenimiento físico",
          "Diseño gráfico",
          "Red local"
        ],
        respuesta: "Arquitectura de software",
        explicacion: "Software Architecture describe la estructura y organización de un sistema de software."
      }
    ]
  },

  "planes-negocio-cooperativo": {
    recursos: [
      { titulo: "CONAMYPE - Emprendimiento", url: "https://www.conamype.gob.sv/" },
      { titulo: "SCORE - Recursos para negocios", url: "https://www.score.org/" },
      { titulo: "Canva - Plan de negocios", url: "https://www.canva.com/es_es/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es un plan de negocios?",
        opciones: [
          "Una lista de empleados",
          "Un documento que describe cómo funcionará un negocio",
          "Un programa informático",
          "Una base de datos"
        ],
        respuesta: "Un documento que describe cómo funcionará un negocio",
        explicacion: "El plan de negocios establece objetivos, estrategias, recursos y proyecciones."
      },
      {
        pregunta: "¿Para qué sirve un análisis FODA?",
        opciones: [
          "Diseñar páginas web",
          "Crear contraseñas",
          "Identificar fortalezas, oportunidades, debilidades y amenazas",
          "Programar aplicaciones"
        ],
        respuesta: "Identificar fortalezas, oportunidades, debilidades y amenazas",
        explicacion: "El análisis FODA permite evaluar la situación interna y externa de un negocio."
      }
    ]
  },

  "componentes-base-datos": {
    recursos: [
      { titulo: "Documentación oficial de MySQL", url: "https://dev.mysql.com/doc/" },
      { titulo: "W3Schools - SQL", url: "https://www.w3schools.com/sql/" },
      { titulo: "SQLBolt - Tutorial interactivo", url: "https://sqlbolt.com/" },
      { titulo: "phpMyAdmin", url: "https://www.phpmyadmin.net/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué significa CRUD?",
        opciones: [
          "Create, Read, Update, Delete",
          "Connect, Run, Upload, Download",
          "Create, Remove, Use, Design",
          "Code, Read, Update, Develop"
        ],
        respuesta: "Create, Read, Update, Delete",
        explicacion: "CRUD representa las cuatro operaciones básicas para gestionar información."
      },
      {
        pregunta: "¿Para qué sirve una clave primaria?",
        opciones: [
          "Para decorar una tabla",
          "Para identificar de forma única cada registro",
          "Para eliminar una base de datos",
          "Para cambiar el nombre de una columna"
        ],
        respuesta: "Para identificar de forma única cada registro",
        explicacion: "La clave primaria identifica de manera única cada fila de una tabla."
      }
    ]
  },

  "diseno-arquitectura-software": {
    recursos: [
      { titulo: "IBM - Arquitectura de software", url: "https://www.ibm.com/think/topics/software-architecture" },
      { titulo: "UML - Object Management Group", url: "https://www.omg.org/spec/UML/" },
      { titulo: "Draw.io - Diagramas", url: "https://www.drawio.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué describe la arquitectura de software?",
        opciones: [
          "El aspecto físico de una computadora",
          "La estructura y organización de un sistema",
          "La velocidad del internet",
          "El diseño de una impresora"
        ],
        respuesta: "La estructura y organización de un sistema",
        explicacion: "La arquitectura define los componentes principales y cómo se relacionan."
      },
      {
        pregunta: "¿Para qué se utiliza UML?",
        opciones: [
          "Para administrar redes",
          "Para editar videos",
          "Para modelar y representar sistemas",
          "Para crear hojas de cálculo"
        ],
        respuesta: "Para modelar y representar sistemas",
        explicacion: "UML es un lenguaje de modelado visual utilizado en el diseño de software."
      }
    ]
  },

  "programacion-orientada-objetos": {
    recursos: [
      { titulo: "Microsoft Learn - C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { titulo: "Microsoft Learn - POO", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/oop" },
      { titulo: "W3Schools - C#", url: "https://www.w3schools.com/cs/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es una clase en programación orientada a objetos?",
        opciones: [
          "Un tipo de archivo de imagen",
          "Una plantilla para crear objetos",
          "Una base de datos",
          "Un sistema operativo"
        ],
        respuesta: "Una plantilla para crear objetos",
        explicacion: "Una clase define atributos y métodos que pueden utilizar sus objetos."
      },
      {
        pregunta: "¿Qué es la herencia?",
        opciones: [
          "Eliminar una clase",
          "Copiar archivos manualmente",
          "Permitir que una clase herede características de otra",
          "Cambiar el lenguaje de programación"
        ],
        respuesta: "Permitir que una clase herede características de otra",
        explicacion: "La herencia permite reutilizar atributos y métodos de una clase existente."
      }
    ]
  },

  "proyecto-innovador-segundo": {
    recursos: [
      { titulo: "IDEO - Design Thinking", url: "https://designthinking.ideo.com/" },
      { titulo: "Figma - Prototipos", url: "https://www.figma.com/" },
      { titulo: "GitHub - Proyectos", url: "https://github.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué caracteriza a un proyecto innovador?",
        opciones: [
          "Que no tenga objetivos",
          "Que proponga una solución novedosa a una necesidad",
          "Que no utilice tecnología",
          "Que no tenga planificación"
        ],
        respuesta: "Que proponga una solución novedosa a una necesidad",
        explicacion: "La innovación busca generar mejoras o soluciones nuevas a problemas existentes."
      },
      {
        pregunta: "¿Qué es un prototipo?",
        opciones: [
          "Una versión inicial de una solución",
          "Un documento financiero",
          "Una contraseña",
          "Un sistema operativo"
        ],
        respuesta: "Una versión inicial de una solución",
        explicacion: "Un prototipo permite representar y probar una idea antes de su implementación final."
      }
    ]
  },

  // ==========================================
  // TERCER AÑO
  // ==========================================

  "proyecto-innovador-software": {
    recursos: [
      { titulo: "GitHub - Documentación", url: "https://docs.github.com/es" },
      { titulo: "Microsoft Learn - Desarrollo de software", url: "https://learn.microsoft.com/es-es/" },
      { titulo: "Atlassian - Metodologías ágiles", url: "https://www.atlassian.com/es/agile" }
    ],
    quiz: [
      {
        pregunta: "¿Cuál es una etapa importante en el desarrollo de software?",
        opciones: [
          "Ignorar los requisitos",
          "Análisis y planificación",
          "Eliminar las pruebas",
          "Evitar la documentación"
        ],
        respuesta: "Análisis y planificación",
        explicacion: "Antes de desarrollar un sistema es importante analizar el problema y planificar la solución."
      },
      {
        pregunta: "¿Para qué se realizan pruebas de software?",
        opciones: [
          "Para aumentar el tamaño del proyecto",
          "Para comprobar que el sistema funciona correctamente",
          "Para eliminar todos los archivos",
          "Para cambiar el nombre del programa"
        ],
        respuesta: "Para comprobar que el sistema funciona correctamente",
        explicacion: "Las pruebas ayudan a detectar errores y verificar que el software cumpla sus requisitos."
      }
    ]
  },

  "ingles-mantenimiento-sistemas": {
    recursos: [
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      { titulo: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
      { titulo: "Microsoft Learn", url: "https://learn.microsoft.com/es-es/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué significa 'Operating System'?",
        opciones: ["Sistema operativo", "Base de datos", "Red local", "Página web"],
        respuesta: "Sistema operativo",
        explicacion: "Operating System es el término en inglés para sistema operativo."
      },
      {
        pregunta: "¿Qué significa 'Troubleshooting'?",
        opciones: [
          "Diseño gráfico",
          "Solución de problemas",
          "Programación web",
          "Instalación de juegos"
        ],
        respuesta: "Solución de problemas",
        explicacion: "Troubleshooting se refiere al proceso de identificar y solucionar fallas."
      }
    ]
  },

  "documentacion-sistemas": {
    recursos: [
      { titulo: "Microsoft Learn - Documentación", url: "https://learn.microsoft.com/es-es/" },
      { titulo: "Draw.io - Diagramas técnicos", url: "https://www.drawio.com/" },
      { titulo: "Atlassian - Documentación de proyectos", url: "https://www.atlassian.com/es/software/confluence" }
    ],
    quiz: [
      {
        pregunta: "¿Cuál es el propósito de un manual de usuario?",
        opciones: [
          "Enseñar a utilizar un sistema",
          "Eliminar información",
          "Modificar el hardware",
          "Crear una red LAN"
        ],
        respuesta: "Enseñar a utilizar un sistema",
        explicacion: "El manual de usuario explica cómo utilizar las funciones de una aplicación o sistema."
      },
      {
        pregunta: "¿Qué debe contener la documentación técnica?",
        opciones: [
          "Únicamente fotografías",
          "Información sobre la estructura y funcionamiento del sistema",
          "Solo nombres de usuarios",
          "Contraseñas personales"
        ],
        respuesta: "Información sobre la estructura y funcionamiento del sistema",
        explicacion: "La documentación técnica describe los componentes, configuraciones y procesos del sistema."
      }
    ]
  },

  "administracion-base-datos": {
    recursos: [
      { titulo: "MySQL - Documentación oficial", url: "https://dev.mysql.com/doc/" },
      { titulo: "SQL Server - Documentación", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { titulo: "MySQL - Copias de seguridad", url: "https://dev.mysql.com/doc/refman/8.4/en/backup-and-recovery.html" },
      { titulo: "W3Schools - SQL", url: "https://www.w3schools.com/sql/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es una copia de seguridad de una base de datos?",
        opciones: [
          "Una copia de los datos para recuperarlos si ocurre una pérdida",
          "Una tabla nueva",
          "Una consulta SQL",
          "Un usuario administrador"
        ],
        respuesta: "Una copia de los datos para recuperarlos si ocurre una pérdida",
        explicacion: "Los respaldos permiten recuperar información cuando se presentan fallas o pérdidas."
      },
      {
        pregunta: "¿Para qué sirven los permisos de usuario en una base de datos?",
        opciones: [
          "Para cambiar el diseño de la computadora",
          "Para controlar qué acciones puede realizar cada usuario",
          "Para aumentar la velocidad del teclado",
          "Para crear imágenes"
        ],
        respuesta: "Para controlar qué acciones puede realizar cada usuario",
        explicacion: "Los permisos permiten proteger la información y controlar el acceso."
      }
    ]
  },

  "proyecto-arduino": {
    recursos: [
      { titulo: "Arduino - Documentación oficial", url: "https://docs.arduino.cc/" },
      { titulo: "Arduino - Proyectos", url: "https://projecthub.arduino.cc/" },
      { titulo: "Tinkercad - Simulador de circuitos", url: "https://www.tinkercad.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es Arduino?",
        opciones: [
          "Un procesador de texto",
          "Una plataforma de hardware y software para proyectos electrónicos",
          "Una base de datos",
          "Un sistema operativo"
        ],
        respuesta: "Una plataforma de hardware y software para proyectos electrónicos",
        explicacion: "Arduino permite crear proyectos electrónicos mediante placas programables."
      },
      {
        pregunta: "¿Para qué sirve un sensor en Arduino?",
        opciones: [
          "Para detectar cambios en el entorno",
          "Para almacenar documentos",
          "Para diseñar páginas web",
          "Para imprimir archivos"
        ],
        respuesta: "Para detectar cambios en el entorno",
        explicacion: "Los sensores permiten obtener información del entorno, como temperatura, luz o distancia."
      }
    ]
  },

  "desarrollo-aplicaciones-software": {
    recursos: [
      { titulo: "Microsoft Learn - .NET", url: "https://learn.microsoft.com/es-es/dotnet/" },
      { titulo: "Microsoft Learn - C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { titulo: "MySQL - Documentación", url: "https://dev.mysql.com/doc/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es una aplicación de software?",
        opciones: [
          "Un componente físico",
          "Un programa diseñado para realizar determinadas tareas",
          "Un cable de red",
          "Un dispositivo de almacenamiento"
        ],
        respuesta: "Un programa diseñado para realizar determinadas tareas",
        explicacion: "Las aplicaciones permiten realizar actividades y resolver necesidades mediante software."
      },
      {
        pregunta: "¿Qué es la depuración de código?",
        opciones: [
          "Eliminar el proyecto",
          "Cambiar el color de una aplicación",
          "Identificar y corregir errores en un programa",
          "Instalar un sistema operativo"
        ],
        respuesta: "Identificar y corregir errores en un programa",
        explicacion: "La depuración permite encontrar errores y corregir el funcionamiento del código."
      }
    ]
  },

  "componentes-dispositivos-moviles": {
    recursos: [
      { titulo: "Microsoft Learn - .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { titulo: "XAML - Documentación", url: "https://learn.microsoft.com/es-es/dotnet/desktop/wpf/xaml/" },
      { titulo: "Android Developers", url: "https://developer.android.com/?hl=es-419" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es .NET MAUI?",
        opciones: [
          "Un sistema de gestión de bases de datos",
          "Un framework para desarrollar aplicaciones multiplataforma",
          "Un editor de imágenes",
          "Un lenguaje exclusivo de páginas web"
        ],
        respuesta: "Un framework para desarrollar aplicaciones multiplataforma",
        explicacion: ".NET MAUI permite desarrollar aplicaciones para diferentes plataformas utilizando una base de código compartida."
      },
      {
        pregunta: "¿Para qué se utiliza XAML en .NET MAUI?",
        opciones: [
          "Para diseñar interfaces de usuario",
          "Para administrar redes",
          "Para crear bases de datos",
          "Para editar videos"
        ],
        respuesta: "Para diseñar interfaces de usuario",
        explicacion: "XAML permite definir visualmente los elementos y la estructura de las interfaces."
      }
    ]
  },

  "mantenimiento-sistema-informatico": {
    recursos: [
      { titulo: "Microsoft Learn - Windows", url: "https://learn.microsoft.com/es-es/windows/" },
      { titulo: "CrystalDiskInfo", url: "https://crystalmark.info/en/software/crystaldiskinfo/" },
      { titulo: "Microsoft - Seguridad de Windows", url: "https://support.microsoft.com/es-es/windows" },
      { titulo: "iFixit - Guías de reparación", url: "https://www.ifixit.com/" }
    ],
    quiz: [
      {
        pregunta: "¿Qué es el mantenimiento preventivo?",
        opciones: [
          "Reparar únicamente equipos dañados",
          "Realizar acciones para evitar futuras fallas",
          "Eliminar todos los programas",
          "Cambiar siempre el sistema operativo"
        ],
        respuesta: "Realizar acciones para evitar futuras fallas",
        explicacion: "El mantenimiento preventivo busca reducir problemas antes de que ocurran."
      },
      {
        pregunta: "¿Qué es el mantenimiento correctivo?",
        opciones: [
          "Limpiar el equipo diariamente",
          "Realizar copias de seguridad",
          "Corregir fallas que ya se han presentado",
          "Instalar programas nuevos"
        ],
        respuesta: "Corregir fallas que ya se han presentado",
        explicacion: "El mantenimiento correctivo se realiza cuando un equipo o sistema presenta una falla."
      }
    ]
  }

};


// ==========================================
// INCORPORAR RECURSOS Y QUIZ A LOS MÓDULOS
// ==========================================

MODULOS.forEach(modulo => {
  const contenido = contenidoExtra[modulo.id];

  if (contenido) {
    modulo.recursos = contenido.recursos;
    modulo.quiz = contenido.quiz;
  }
});

console.log("Recursos y cuestionarios agregados correctamente.");

const modulo = MODULOS.find(m => m.id === "componentes-base-datos");

console.log(modulo.recursos);
console.log(modulo.quiz);

modulo.quiz.forEach((pregunta, index) => {
  console.log(`${index + 1}. ${pregunta.pregunta}`);
  console.log(pregunta.opciones);
});

// ==========================================
// QUIZ DINÁMICOS PARA TODOS LOS MÓDULOS
// ==========================================

// Función para mezclar preguntas y opciones aleatoriamente
function mezclarArray(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// Crear banco de preguntas para cada módulo
function crearBancoQuiz(modulo) {
    const aprendizajes = modulo.aprendizajes || [];

    return aprendizajes.map((aprendizaje, index) => {
        const otrosAprendizajes = aprendizajes.filter(
            (item, i) => i !== index
        );

        const distractores = mezclarArray([
            ...otrosAprendizajes,
            "Un tema que no corresponde al contenido del módulo",
            "Una actividad sin relación con el área de estudio"
        ]).slice(0, 3);

        return {
            pregunta: `¿Cuál de las siguientes opciones corresponde a un aprendizaje de "${modulo.nombre}"?`,
            opciones: mezclarArray([
                aprendizaje,
                ...distractores
            ]),
            respuesta: aprendizaje,
            explicacion: `La respuesta es correcta porque "${aprendizaje}" forma parte de los aprendizajes de este módulo.`
        };
    });
}

// Generar el banco de preguntas para todos los módulos
MODULOS.forEach(modulo => {
    modulo.bancoQuiz = crearBancoQuiz(modulo);
});

// Obtener 3 preguntas aleatorias cada vez que se abre un módulo
function obtenerQuizAleatorio(moduloId, cantidad = 3) {
    const modulo = MODULOS.find(m => m.id === moduloId);

    if (!modulo) {
        console.error("No se encontró el módulo:", moduloId);
        return [];
    }

    const banco = modulo.bancoQuiz || [];

    return mezclarArray(banco)
        .slice(0, cantidad)
        .map(pregunta => ({
            ...pregunta,
            opciones: mezclarArray(pregunta.opciones)
        }));
}

// Obtener el módulo con sus 3 preguntas aleatorias
function obtenerModuloConQuiz(moduloId) {
    const modulo = MODULOS.find(m => m.id === moduloId);

    if (!modulo) {
        return null;
    }

    return {
        ...modulo,
        quiz: obtenerQuizAleatorio(moduloId, 3)
    };
}