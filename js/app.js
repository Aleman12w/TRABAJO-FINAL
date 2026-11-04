/* Lee MODULOS y EQUIPO (data/modulos.js) y construye toda la página.
   Si cambias los datos, la página cambia sola.  Versión v0.6 (Día 2 + diseño nuevo) */

const $ = id => document.getElementById(id);

/* ---------- Utilidades ---------- */
function esc(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
// Minúsculas y sin acentos: así "sesion" encuentra "sesión"
function norm(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
function lista(items) {
  return (items || []).map(i => `<li>${esc(i)}</li>`).join("");
}
function pildoras(items) {
  return (items || []).map(i => `<li>${esc(i)}</li>`).join("");
}
function enlaces(items) {
  if (!items || !items.length) return "<li>Pendiente</li>";
  return items
    .map(e => `<li><a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.titulo)}</a></li>`)
    .join("");
}
// localStorage puede fallar (modo privado): siempre con try/catch
function leer(k, def) {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; }
}
function guardar(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
}
function quitar(k) {
  try { localStorage.removeItem(k); } catch (e) {}
}

/* ---------- Colores: cada módulo recibe uno de la paleta ---------- */
const PALETA = ["#3B5BFF", "#FF5C7A", "#A7E22E", "#FFC932", "#12C2A9"];   // igual que --c1 ... --c5 del CSS
const TINTA = "#12203F";

// Texto blanco o azul tinta, según qué se lea mejor sobre ese color
function textoSobre(hex) {
  const n = parseInt(hex.slice(1), 16);
  const luz = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return luz > 125 ? TINTA : "#fff";
}
// Un módulo puede traer su propio color en modulos.js (color: "#RRGGBB")
function colorDe(m) {
  if (m && /^#[0-9a-f]{6}$/i.test(m.color || "")) return m.color;
  const i = Math.max(0, MODULOS.indexOf(m));
  return PALETA[i % PALETA.length];
}
function estiloColor(hex) {
  return `--mc:${hex};--mc-tx:${textoSobre(hex)}`;
}

/* ---------- Estado (se guarda en el navegador) ---------- */
const LS = { rep: "hub3dsa:repasados", vis: "hub3dsa:vistos", vol: "hub3dsa:volteadas", log: "hub3dsa:logros" };
const idsValidos = MODULOS.map(m => m.id);
let repasados = leer(LS.rep, []).filter(id => idsValidos.includes(id));
let vistos = leer(LS.vis, []).filter(id => idsValidos.includes(id));
let volteadas = leer(LS.vol, 0);
let desbloqueados = leer(LS.log, []);
let busqueda = "";
let etiqueta = null;        // filtro de la nube de tecnologías
let docente = null;         // filtro por docente
let pendienteSello = null;  // módulo cuyo sello debe "caer" cuando se cierre la ficha

/* ---------- Anatomía de una ficha terminada (guía del Día 2) ---------- */
const MINIMOS = [
  { campo: "instrumentos", min: 2, etq: "Instrumentos" },
  { campo: "programas",    min: 2, etq: "Programas" },
  { campo: "herramientas", min: 2, etq: "Herramientas" },
  { campo: "recursos",     min: 3, etq: "Recursos" },
  { campo: "evidencias",   min: 1, etq: "Evidencias" },
  { campo: "quiz",         min: 3, etq: "Preguntas de quiz" }
];
function completitud(m) {
  const detalle = MINIMOS.map(r => {
    const n = (m[r.campo] || []).length;
    return { etq: r.etq, min: r.min, n, ok: n >= r.min };
  });
  return { ok: detalle.filter(d => d.ok).length, total: detalle.length, detalle };
}
function medidorHTML(c) {
  return `<span class="medidor" role="img" aria-label="Ficha: ${c.ok} de ${c.total} mínimos cumplidos">${
    c.detalle.map(d => `<span class="${d.ok ? "on" : ""}"></span>`).join("")}</span>`;
}

/* ---------- Buscador + filtros (docente y tecnología) ---------- */
function filtrados() {
  const q = norm(busqueda.trim());
  return MODULOS.filter(m => {
    if (docente && m.docente !== docente) return false;
    if (etiqueta && !(m.herramientas || []).includes(etiqueta)) return false;
    if (!q) return true;
    const texto = norm([
      m.nombre, m.resumen, m.docente,
      ...(m.herramientas || []), ...(m.programas || []), ...(m.aprendizajes || [])
    ].join(" "));
    return texto.includes(q);
  });
}

function limpiarFiltros() {
  busqueda = "";
  etiqueta = null;
  docente = null;
  $("buscar").value = "";
  pintarFiltrosDocente();
  pintarNube();
  pintarTarjetas();
}

function pintarFiltrosDocente() {
  const nombres = [...new Set(MODULOS.map(m => m.docente).filter(Boolean))];
  const chips = [{ v: null, t: "Todos" }, ...nombres.map(n => ({ v: n, t: n }))];
  $("filtrosDoc").innerHTML = chips.map(c =>
    `<button class="chip" data-doc="${c.v === null ? "" : esc(c.v)}" aria-pressed="${docente === c.v}">${esc(c.t)}</button>`
  ).join("");
}

/* ---------- Módulos: una carpeta por módulo ---------- */
function carpetaHTML(m) {
  const c = completitud(m);
  const hecho = repasados.includes(m.id);
  const herr = m.herramientas || [];
  const chips = herr.slice(0, 4).map(h => `<li>${esc(h)}</li>`).join("") +
    (herr.length > 4 ? `<li class="mas">+${herr.length - 4}</li>` : "");
  // El sello solo se anima si la ficha ya está cerrada (si no, nadie lo vería)
  const anima = m.id === pendienteSello && !$("ficha").open;
  return `
    <article class="carpeta" style="${estiloColor(colorDe(m))}">
      <span class="pestana">${esc(m.docente)}</span>
      <div class="cuerpo">
        <div class="cab-mod">
          <span class="ico" aria-hidden="true">${esc(m.icono || "📘")}</span>
          <div>
            <h3>${esc(m.nombre)}</h3>
            ${m.periodo ? `<p class="periodo-txt">${esc(m.periodo)}</p>` : ""}
          </div>
        </div>
        <p class="resumen">${esc(m.resumen)}</p>
        <ul class="aprendi">${lista((m.aprendizajes || []).slice(0, 3))}</ul>
        ${chips ? `<ul class="pildoras" aria-label="Herramientas">${chips}</ul>` : ""}
        <div class="medidor-fila">
          ${medidorHTML(c)}
          <span class="medidor-txt">${c.ok === c.total ? "Ficha completa" : `Ficha ${c.ok} de ${c.total}`}</span>
        </div>
        <button class="abrir" data-id="${esc(m.id)}">Abrir ficha<span class="solo-lectores"> de ${esc(m.nombre)}</span></button>
        ${hecho ? `<span class="sello${anima ? " nuevo" : ""}">Repasado</span>` : ""}
      </div>
    </article>`;
}

function pintarTarjetas() {
  const visibles = filtrados();
  $("rejilla").classList.toggle("mosaico", visibles.length >= 5);
  $("rejilla").innerHTML = visibles.length ? visibles.map(carpetaHTML).join("") : `
    <div class="vacio">
      <p>No hay módulos con esa búsqueda</p>
      <p class="suave">Prueba con otra palabra, por ejemplo una herramienta o un programa, o quita los filtros.</p>
      <button class="boton" data-limpiar="1">Quitar filtros</button>
    </div>`;

  $("conteo").textContent = `Mostrando ${visibles.length} de ${MODULOS.length} módulos`;
  $("contador").textContent = `${MODULOS.length} módulos en el mapa del año`;
  $("filtroActivo").innerHTML = etiqueta
    ? `Tecnología: <b>${esc(etiqueta)}</b> <button class="enlace" id="quitarFiltro">Quitar</button>`
    : "";
  pintarProgreso();
}

/* ---------- Progreso del repaso: tira de bloques + barra ---------- */
function pintarTira() {
  $("tira").innerHTML = MODULOS.map(m => {
    const hecho = repasados.includes(m.id);
    return `<button class="bloque${hecho ? " hecho" : ""}" style="${estiloColor(colorDe(m))}" data-id="${esc(m.id)}"
      title="${esc(m.nombre)}" aria-label="${esc(m.nombre)}: ${hecho ? "repasado" : "pendiente"}. Abrir ficha">${esc(m.icono || "📘")}</button>`;
  }).join("");
}

function pintarProgreso() {
  const total = MODULOS.length || 1;
  const pct = Math.round((repasados.length / total) * 100);
  pintarTira();
  $("progresoBarra").style.width = pct + "%";
  $("progreso").setAttribute("aria-valuenow", String(pct));
  $("progresoTxt").textContent = pct === 100
    ? "¡Repasaste todo el año!"
    : `Repasaste ${repasados.length} de ${MODULOS.length} módulos (${pct} %)`;
  const completas = MODULOS.filter(m => { const c = completitud(m); return c.ok === c.total; }).length;
  $("fichasTxt").textContent = `Fichas completas: ${completas} de ${MODULOS.length}`;
}

/* ---------- Nube de tecnologías ---------- */
function pintarNube() {
  const cuenta = {};
  MODULOS.forEach(m => (m.herramientas || []).forEach(h => { cuenta[h] = (cuenta[h] || 0) + 1; }));
  const nombres = Object.keys(cuenta).sort((a, b) => a.localeCompare(b, "es"));
  const giros = [-2, 1.5, -1, 2, 0];
  $("nubeTec").innerHTML = nombres.map((n, i) => {
    const col = PALETA[i % PALETA.length];
    const tam = Math.min(1 + cuenta[n] * 0.22, 2.1);
    return `<button class="etiqueta" style="${estiloColor(col)};--giro:${giros[i % giros.length]}deg;font-size:${tam}rem"
      data-tec="${esc(n)}" aria-pressed="${etiqueta === n}">${esc(n)}<small>${cuenta[n]}</small></button>`;
  }).join("");
}

/* ---------- Línea de tiempo ---------- */
function pintarLinea() {
  $("lineaTiempo").innerHTML = MODULOS.map(m => `
    <li class="hito" style="${estiloColor(colorDe(m))}">
      <span class="punto" aria-hidden="true">${esc(m.icono || "•")}</span>
      <div class="hito-cuerpo">
        ${m.periodo ? `<span class="periodo">${esc(m.periodo)}</span>` : ""}
        <h3>${esc(m.nombre)}</h3>
        <p>${esc(m.resumen)}</p>
      </div>
    </li>
  `).join("");
  const items = document.querySelectorAll(".hito");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.2 });
    items.forEach(i => obs.observe(i));
  } else {
    items.forEach(i => i.classList.add("visible"));
  }
}

/* ---------- Flashcards ---------- */
let mazo = [];
let pos = 0;

function construirMazo() {
  const cartas = [];
  MODULOS.forEach(m => {
    const col = colorDe(m);
    if (m.flashcards && m.flashcards.length) {
      m.flashcards.forEach(c => cartas.push({ mod: m.nombre, col, p: c.p, r: c.r }));
    } else {
      // Tarjetas automáticas a partir de los datos del módulo
      if ((m.herramientas || []).length)
        cartas.push({ mod: m.nombre, col, p: `¿Qué herramientas usaste en «${m.nombre}»?`, r: m.herramientas.join(", ") });
      if ((m.programas || []).length)
        cartas.push({ mod: m.nombre, col, p: `¿Con qué programas trabajaste en «${m.nombre}»?`, r: m.programas.join(", ") });
      if ((m.aprendizajes || []).length)
        cartas.push({ mod: m.nombre, col, p: `Menciona lo que aprendiste en «${m.nombre}».`, r: m.aprendizajes.join(". ") });
    }
  });
  return cartas;
}

function pintarCarta() {
  const c = mazo[pos];
  const carta = $("carta");
  carta.classList.remove("vuelta");
  if (!c) {
    $("cartaFrente").textContent = "Todavía no hay fichas de repaso.";
    $("cartaDorso").textContent = "";
    $("cartaNum").textContent = "";
    return;
  }
  carta.style.setProperty("--mc", c.col);
  carta.style.setProperty("--mc-tx", textoSobre(c.col));
  $("cartaFrente").innerHTML = `<small>${esc(c.mod)}</small>${esc(c.p)}`;
  $("cartaDorso").innerHTML = `<small>Respuesta</small>${esc(c.r)}`;
  $("cartaNum").textContent = `${pos + 1} de ${mazo.length}`;
}

function voltear() {
  if (!mazo.length) return;
  const carta = $("carta");
  carta.classList.toggle("vuelta");
  if (carta.classList.contains("vuelta")) {
    volteadas++;
    guardar(LS.vol, volteadas);
    evaluarLogros(true);
  }
}
function mover(d) {
  if (!mazo.length) return;
  pos = (pos + d + mazo.length) % mazo.length;
  pintarCarta();
}
function barajar() {
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  pos = 0;
  pintarCarta();
}

/* ---------- Logros ---------- */
const LOGROS = [
  { id: "primero", ico: "🌱", t: "Primer paso",         d: "Marca 1 módulo como repasado",     ok: () => repasados.length >= 1 },
  { id: "mitad",   ico: "🚀", t: "A mitad de camino",   d: "Repasa la mitad de los módulos",   ok: () => MODULOS.length > 0 && repasados.length >= Math.ceil(MODULOS.length / 2) },
  { id: "todos",   ico: "🏆", t: "Año completo",        d: "Repasa todos los módulos",         ok: () => MODULOS.length > 0 && repasados.length >= MODULOS.length },
  { id: "curioso", ico: "🔎", t: "Curioso",             d: "Abre 3 fichas distintas",          ok: () => vistos.length >= 3 },
  { id: "cartas",  ico: "🃏", t: "Maestro de fichas",   d: "Voltea 10 fichas de repaso",       ok: () => volteadas >= 10 },
  { id: "fichas",  ico: "✅", t: "Fichas impecables",   d: "Completa los mínimos de todas las fichas", ok: () => MODULOS.length > 0 && MODULOS.every(m => { const c = completitud(m); return c.ok === c.total; }) }
];

let temporizadorToast;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("ver");
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => t.classList.remove("ver"), 3200);
}

function evaluarLogros(avisar) {
  LOGROS.forEach(l => {
    if (l.ok() && !desbloqueados.includes(l.id)) {
      desbloqueados.push(l.id);
      guardar(LS.log, desbloqueados);
      if (avisar) toast(`${l.ico} Logro desbloqueado: ${l.t}`);
    }
  });
  pintarLogros();
}

function pintarLogros() {
  $("insignias").innerHTML = LOGROS.map((l, i) => {
    const on = desbloqueados.includes(l.id);
    return `<div class="insignia${on ? " on" : ""}" style="--mc:${PALETA[i % PALETA.length]}">
      <span class="ico" aria-hidden="true">${l.ico}</span>
      <b>${esc(l.t)}</b>
      <small>${esc(l.d)}</small>
      <span class="solo-lectores">${on ? "Desbloqueado" : "Bloqueado"}</span>
    </div>`;
  }).join("");
}

/* ---------- Celebración al llegar al 100 % ---------- */
function confeti() {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = document.createElement("canvas");
  cv.className = "confeti";
  cv.setAttribute("aria-hidden", "true");
  cv.width = window.innerWidth;
  cv.height = window.innerHeight;
  document.body.appendChild(cv);
  const ctx = cv.getContext("2d");
  const piezas = Array.from({ length: 140 }, () => ({
    x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
    vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4,
    s: 5 + Math.random() * 6, c: PALETA[Math.floor(Math.random() * PALETA.length)], r: Math.random() * 6
  }));
  const inicio = performance.now();
  (function cuadro(t) {
    ctx.clearRect(0, 0, cv.width, cv.height);
    piezas.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.r += 0.1;
      ctx.fillStyle = p.c;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (t - inicio < 3500) requestAnimationFrame(cuadro); else cv.remove();
  })(inicio);
}

function celebrar() {
  confeti();
  setTimeout(() => toast("🎉 100 %: repasaste todos los módulos del año"), 1800);
}
/* ---------- QUIZ DINÁMICO POR MÓDULO ---------- */

let quizActual = [];

function mezclarArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function generarQuiz(modulo) {
  const aprendizajes = modulo.aprendizajes || [];

  if (aprendizajes.length === 0) {
    return [];
  }

  // Crear preguntas a partir de los aprendizajes del módulo
  let banco = aprendizajes.map((aprendizaje, index) => {
    const distractores = aprendizajes.filter((a, i) => i !== index);

    const opcionesIncorrectas = mezclarArray([
      ...distractores,
      "Una actividad que no corresponde al módulo",
      "Un tema que no está relacionado con lo aprendido"
    ]).slice(0, 3);

    const opciones = mezclarArray([
      aprendizaje,
      ...opcionesIncorrectas
    ]);

    return {
      pregunta: `¿Cuál de estas opciones representa un aprendizaje de ${modulo.nombre}?`,
      opciones: opciones,
      respuesta: aprendizaje
    };
  });

  // Si hay menos de 3 aprendizajes, repetir preguntas para completar el quiz
  while (banco.length < 3) {
    banco = banco.concat(banco);
  }

  // Seleccionar 3 preguntas aleatorias
  return mezclarArray(banco).slice(0, 3);
}

function pintarQuiz() {
  if (!quizActual.length) {
    return `
      <h3>Quiz del módulo</h3>
      <p class="suave">Todavía no hay preguntas disponibles para este módulo.</p>
    `;
  }

  return `
    <section class="quiz-modulo">
      <h3>📝 Quiz del módulo</h3>
      <p class="suave">Responde las 3 preguntas y comprueba tus conocimientos.</p>

      <div class="preguntas-quiz">
        ${quizActual.map((q, i) => `
          <fieldset class="pregunta-quiz">
            <legend>${i + 1}. ${esc(q.pregunta)}</legend>

            ${q.opciones.map((opcion, j) => `
              <label class="opcion-quiz">
                <input
                  type="radio"
                  name="pregunta-${i}"
                  value="${j}"
                >
                <span>${esc(opcion)}</span>
              </label>
            `).join("")}

            <div id="resultado-${i}" class="resultado-quiz"></div>
          </fieldset>
        `).join("")}
      </div>

      <button class="boton" id="calificarQuiz">
        Comprobar respuestas
      </button>

      <div id="resultadoFinalQuiz" class="resultado-final-quiz"></div>
    </section>
  `;
}

function calificarQuiz() {
  let correctas = 0;
  let respondidas = 0;

  quizActual.forEach((pregunta, i) => {
    const seleccionada = document.querySelector(
      `input[name="pregunta-${i}"]:checked`
    );

    const resultado = $(`resultado-${i}`);

    if (!seleccionada) {
      resultado.textContent = "⚠️ No respondiste esta pregunta.";
      resultado.style.color = "#d97706";
      return;
    }

    respondidas++;

    const opcionElegida = pregunta.opciones[Number(seleccionada.value)];

    if (opcionElegida === pregunta.respuesta) {
      correctas++;
      resultado.textContent = "✅ ¡Correcto!";
      resultado.style.color = "#16a34a";
    } else {
      resultado.textContent = `❌ Incorrecto. Respuesta correcta: ${pregunta.respuesta}`;
      resultado.style.color = "#dc2626";
    }
  });

  const resultadoFinal = $("resultadoFinalQuiz");

  resultadoFinal.innerHTML = `
    <h3>Resultado del quiz</h3>
    <p>Respuestas correctas: <strong>${correctas} de 3</strong></p>
    <p>Preguntas respondidas: ${respondidas} de 3</p>
    <p>Calificación: <strong>${Math.round((correctas / 3) * 10)}/10</strong></p>
    <button class="boton sec" id="nuevoQuiz">Intentar otro quiz</button>
  `;

  $("calificarQuiz").disabled = true;
}
/* ---------- Ficha del módulo (con enlace directo y videos) ---------- */
function videoHTML(v) {
  const m = String(v.url).match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (m) {
    return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${m[1]}"
      title="${esc(v.titulo)}" loading="lazy" allowfullscreen></iframe></div>`;
  }
  return `<p><a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.titulo)}</a></p>`;
}

function estadoFichaHTML(m) {
  const c = completitud(m);
  return `<details class="estado-ficha"${c.ok === c.total ? "" : " open"}>
    <summary>Estado de la ficha: ${c.ok} de ${c.total} mínimos cumplidos</summary>
    <ul class="mins">${c.detalle.map(d =>
      `<li class="${d.ok ? "ok" : "falta"}">${d.ok ? "✓" : "✗"} ${esc(d.etq)}: ${d.n} de ${d.min}</li>`).join("")}</ul>
  </details>`;
}

function abrirFicha(id, sinHash) {
  const m = MODULOS.find(x => x.id === id);
  if (!m) return;

  if (!vistos.includes(id)) {
    vistos.push(id);
    guardar(LS.vis, vistos);
    evaluarLogros(true);
  }

  const col = colorDe(m);
  const hecho = repasados.includes(id);

  // Generar 3 preguntas nuevas cada vez que se abre el módulo
  quizActual = generarQuiz(m);

  $("ficha").style.setProperty("--mc", col);
  $("ficha").style.setProperty("--mc-tx", textoSobre(col));

  $("fichaContenido").innerHTML = `
    <div class="ficha-cab">
      <h2 id="fichaTitulo">
        <span aria-hidden="true">${esc(m.icono || "")}</span>
        ${esc(m.nombre)}
      </h2>

      <div class="tags">
        <span>${esc(m.docente)}</span>
        ${m.periodo ? `<span>${esc(m.periodo)}</span>` : ""}
      </div>
    </div>

    <div class="ficha-cuerpo">

      <p>${esc(m.resumen)}</p>

      ${estadoFichaHTML(m)}

      <h3>Lo que aprendí</h3>
      <ul>${lista(m.aprendizajes)}</ul>

      <h3>Instrumentos</h3>
      <ul>${lista(m.instrumentos)}</ul>

      <h3>Programas</h3>
      <ul class="pildoras">${pildoras(m.programas)}</ul>

      <h3>Herramientas</h3>
      <ul class="pildoras">${pildoras(m.herramientas)}</ul>

      <h3>Recursos</h3>
      <ul>${enlaces(m.recursos)}</ul>

      <h3>Evidencias</h3>
      <ul>${enlaces(m.evidencias)}</ul>

      <h3>Tutoriales en video</h3>

      ${(m.videos && m.videos.length)
        ? m.videos.map(videoHTML).join("")
        : "<p class='suave'>Pendiente</p>"
      }

      ${pintarQuiz()}

      <p class="acciones">
        <button class="boton" id="marcar" data-id="${esc(id)}">
          ${hecho ? "Repasado (clic para desmarcar)" : "Marcar como repasado"}
        </button>

        <button class="boton sec" id="copiarEnlace">
          Copiar enlace
        </button>
      </p>

    </div>
  `;

  if (!sinHash) {
    try {
      history.replaceState(null, "", "#modulo=" + id);
    } catch (e) {}
  }

  if (!$("ficha").open) {
    $("ficha").showModal();
  }

  $("ficha").scrollTop = 0;
}

function alternarRepasado(id) {
  const i = repasados.indexOf(id);
  const agregado = i === -1;
  if (agregado) repasados.push(id); else repasados.splice(i, 1);
  guardar(LS.rep, repasados);
  pendienteSello = agregado ? id : null;
  pintarTarjetas();
  evaluarLogros(true);
  const b = $("marcar");
  if (b) b.textContent = repasados.includes(id) ? "Repasado (clic para desmarcar)" : "Marcar como repasado";
  // Al llegar al 100 %: cerrar la ficha (el diálogo tapa el confeti) y celebrar
  if (agregado && repasados.length === MODULOS.length) {
    $("ficha").close();
    celebrar();
  }
}

function copiarEnlace() {
  const url = location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => toast("Enlace copiado"), () => toast("No se pudo copiar el enlace"));
  } else {
    toast("Copia el enlace desde la barra de direcciones");
  }
}

// Si la URL trae #modulo=id, abre esa ficha directamente
function abrirDesdeHash() {
  const m = location.hash.match(/^#modulo=([\w-]+)/);
  if (m && idsValidos.includes(m[1]) && !$("ficha").open) abrirFicha(m[1], true);
}

/* ---------- Reiniciar progreso ---------- */
function reiniciar() {
  if (!window.confirm("¿Borrar tu progreso (módulos repasados, logros y fichas volteadas)?")) return;
  repasados = []; vistos = []; volteadas = 0; desbloqueados = []; pendienteSello = null;
  [LS.rep, LS.vis, LS.vol, LS.log].forEach(quitar);
  pintarTarjetas();
  pintarLogros();
  toast("Progreso reiniciado");
}

/* ---------- Equipo ---------- */
function pintarEquipo() {
  $("integrantes").innerHTML = lista(EQUIPO);
}

/* ---------- Eventos ---------- */
$("rejilla").addEventListener("click", e => {
  if (e.target.closest("button[data-limpiar]")) { limpiarFiltros(); return; }
  const b = e.target.closest("button[data-id]");
  if (b) abrirFicha(b.dataset.id);
});
$("tira").addEventListener("click", e => {
  const b = e.target.closest("button[data-id]");
  if (b) abrirFicha(b.dataset.id);
});
$("filtrosDoc").addEventListener("click", e => {
  const b = e.target.closest("button[data-doc]");
  if (!b) return;
  docente = b.dataset.doc || null;
  pintarFiltrosDocente();
  pintarTarjetas();
});
$("filtroActivo").addEventListener("click", e => {
  if (e.target.id === "quitarFiltro") { etiqueta = null; pintarNube(); pintarTarjetas(); }
});
$("nubeTec").addEventListener("click", e => {
  const b = e.target.closest("button[data-tec]");
  if (!b) return;
  etiqueta = etiqueta === b.dataset.tec ? null : b.dataset.tec;
  pintarNube();
  pintarTarjetas();
  $("modulos").scrollIntoView({ behavior: "smooth" });
});
$("fichaContenido").addEventListener("click", e => {

  const b = e.target.closest("#marcar");

  if (b) {
    alternarRepasado(b.dataset.id);
  }

  if (e.target.closest("#copiarEnlace")) {
    copiarEnlace();
  }

  // Calificar las respuestas
  if (e.target.closest("#calificarQuiz")) {
    calificarQuiz();
  }

  // Generar otro quiz sin cerrar el módulo
  if (e.target.closest("#nuevoQuiz")) {
    const moduloId = MODULOS.find(m =>
      $("fichaTitulo").textContent.includes(m.nombre)
    );

    if (moduloId) {
      abrirFicha(moduloId.id, true);
    }
  }

});
$("cerrar").addEventListener("click", () => $("ficha").close());
$("ficha").addEventListener("click", e => { if (e.target === $("ficha")) $("ficha").close(); });
// Al cerrar la ficha (botón, clic fuera o Esc): limpia #modulo=... y deja caer el sello
$("ficha").addEventListener("close", () => {
  if (/^#modulo=/.test(location.hash)) {
    try { history.replaceState(null, "", location.pathname + location.search + "#modulos"); } catch (e) {}
  }
  if (pendienteSello) {
    pintarTarjetas();
    pendienteSello = null;
  }
});
window.addEventListener("hashchange", abrirDesdeHash);

$("buscar").addEventListener("input", e => { busqueda = e.target.value; pintarTarjetas(); });
$("reiniciar").addEventListener("click", reiniciar);

// Atajo de teclado: "/" o Ctrl/Cmd+K enfocan el buscador; Escape lo limpia
document.addEventListener("keydown", e => {
  const enCampo = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if ($("ficha").open) return;
  if ((e.key === "/" && !enCampo) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
    e.preventDefault();
    $("modulos").scrollIntoView({ behavior: "smooth" });
    $("buscar").focus();
  } else if (e.key === "Escape" && document.activeElement === $("buscar")) {
    $("buscar").value = "";
    busqueda = "";
    $("buscar").blur();
    pintarTarjetas();
  }
});

$("carta").addEventListener("click", voltear);
$("prev").addEventListener("click", () => mover(-1));
$("next").addEventListener("click", () => mover(1));
$("barajar").addEventListener("click", barajar);

/* ---------- Arranque ---------- */
pintarFiltrosDocente();
pintarTarjetas();
pintarNube();
pintarLinea();
mazo = construirMazo();
pintarCarta();
evaluarLogros(false);
pintarEquipo();
abrirDesdeHash();

/* ---------- PWA: registra el service worker ---------- */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

