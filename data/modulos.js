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
