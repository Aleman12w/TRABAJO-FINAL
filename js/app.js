/* Lee MODULOS y EQUIPO (data/modulos.js) y construye toda la página.
   Si cambias los datos, la página cambia sola. */

const $ = id => document.getElementById(id);

/* ---------- Utilidades ---------- */
function esc(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function norm(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
function lista(items) {
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

/* ---------- Estado (se guarda en el navegador) ---------- */
const LS = { rep: "hub3dsa:repasados", vis: "hub3dsa:vistos", vol: "hub3dsa:volteadas", log: "hub3dsa:logros" };
const idsValidos = MODULOS.map(m => m.id);
let repasados = leer(LS.rep, []).filter(id => idsValidos.includes(id));
let vistos = leer(LS.vis, []).filter(id => idsValidos.includes(id));
let volteadas = leer(LS.vol, 0);
let desbloqueados = leer(LS.log, []);
let busqueda = "";
let etiqueta = null;

/* ---------- Buscador + filtro de tecnologías ---------- */
function filtrados() {
  const q = norm(busqueda.trim());
  return MODULOS.filter(m => {
    if (etiqueta && !(m.herramientas || []).includes(etiqueta)) return false;
    if (!q) return true;
    const texto = norm([m.nombre, m.resumen, m.docente, ...(m.herramientas || []), ...(m.programas || [])].join(" "));
    return texto.includes(q);
  });
}

function pintarTarjetas() {
  const lista_ = filtrados();
  $("rejilla").innerHTML = lista_.length ? lista_.map(m => `
    <article class="tarjeta${repasados.includes(m.id) ? " repasada" : ""}">
      <span class="icono" aria-hidden="true">${esc(m.icono || "📘")}</span>
      <h3>${esc(m.nombre)}</h3>
      <p class="docente">${esc(m.docente)}</p>
      <p>${esc(m.resumen)}</p>
      ${repasados.includes(m.id) ? '<span class="sello">✓ Repasado</span>' : ""}
      <button class="boton" data-id="${esc(m.id)}">Abrir ficha</button>
    </article>
  `).join("") : '<p class="suave">No hay módulos que coincidan con tu búsqueda.</p>';
  $("contador").textContent = `${MODULOS.length} módulos en el mapa del año`;
  $("filtroActivo").innerHTML = etiqueta
    ? `Filtrando por <b>${esc(etiqueta)}</b> · <button class="enlace" id="quitarFiltro">Quitar filtro</button>`
    : "";
  pintarProgreso();
}

function pintarProgreso() {
  const total = MODULOS.length || 1;
  $("progresoBarra").style.width = Math.round((repasados.length / total) * 100) + "%";
  $("progresoTxt").textContent = `Repasados: ${repasados.length} de ${MODULOS.length}`;
}

/* ---------- Nube de tecnologías ---------- */
function pintarNube() {
  const cuenta = {};
  MODULOS.forEach(m => (m.herramientas || []).forEach(h => { cuenta[h] = (cuenta[h] || 0) + 1; }));
  const nombres = Object.keys(cuenta).sort((a, b) => a.localeCompare(b, "es"));
  $("nubeTec").innerHTML = nombres.map(n => {
    const tam = Math.min(0.95 + cuenta[n] * 0.2, 2);
    return `<button class="etiqueta" style="font-size:${tam}rem" data-tec="${esc(n)}"
      aria-pressed="${etiqueta === n}">${esc(n)} <small>${cuenta[n]}</small></button>`;
  }).join("");
}

/* ---------- Línea de tiempo animada ---------- */
function pintarLinea() {
  $("lineaTiempo").innerHTML = MODULOS.map(m => `
    <li class="hito">
      <span class="punto" aria-hidden="true">${esc(m.icono || "•")}</span>
      <div class="hito-cuerpo">
        <span class="periodo">${esc(m.periodo || "")}</span>
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
    if (m.flashcards && m.flashcards.length) {
      m.flashcards.forEach(c => cartas.push({ mod: m.nombre, p: c.p, r: c.r }));
    } else {
      // Tarjetas automáticas a partir de los datos del módulo
      if ((m.herramientas || []).length)
        cartas.push({ mod: m.nombre, p: `¿Qué herramientas usaste en «${m.nombre}»?`, r: m.herramientas.join(", ") });
      if ((m.programas || []).length)
        cartas.push({ mod: m.nombre, p: `¿Con qué programas trabajaste en «${m.nombre}»?`, r: m.programas.join(", ") });
      if ((m.aprendizajes || []).length)
        cartas.push({ mod: m.nombre, p: `Menciona lo que aprendiste en «${m.nombre}».`, r: m.aprendizajes.join(" · ") });
    }
  });
  return cartas;
}

function pintarCarta() {
  const c = mazo[pos];
  const carta = $("carta");
  carta.classList.remove("vuelta");
  if (!c) {
    $("cartaFrente").textContent = "Todavía no hay tarjetas.";
    $("cartaDorso").textContent = "";
    $("cartaNum").textContent = "";
    return;
  }
  $("cartaFrente").innerHTML = `<small>${esc(c.mod)}</small>${esc(c.p)}`;
  $("cartaDorso").innerHTML = `<small>Respuesta</small>${esc(c.r)}`;
  $("cartaNum").textContent = `${pos + 1} / ${mazo.length}`;
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
  { id: "primero", ico: "🌱", t: "Primer paso",        d: "Marca 1 módulo como repasado",       ok: () => repasados.length >= 1 },
  { id: "mitad",   ico: "🚀", t: "A mitad de camino",  d: "Repasa la mitad de los módulos",     ok: () => MODULOS.length > 0 && repasados.length >= Math.ceil(MODULOS.length / 2) },
  { id: "todos",   ico: "🏆", t: "Año completo",       d: "Repasa todos los módulos",           ok: () => MODULOS.length > 0 && repasados.length >= MODULOS.length },
  { id: "curioso", ico: "🔎", t: "Curioso",            d: "Abre 3 fichas distintas",            ok: () => vistos.length >= 3 },
  { id: "cartas",  ico: "🃏", t: "Maestro de tarjetas", d: "Voltea 10 flashcards",              ok: () => volteadas >= 10 }
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
      if (avisar) toast(`${l.ico} ¡Logro desbloqueado: ${l.t}!`);
    }
  });
  pintarLogros();
}

function pintarLogros() {
  $("insignias").innerHTML = LOGROS.map(l => {
    const on = desbloqueados.includes(l.id);
    return `<div class="insignia${on ? " on" : ""}">
      <span class="ico" aria-hidden="true">${on ? l.ico : "🔒"}</span>
      <b>${esc(l.t)}</b>
      <small>${esc(l.d)}</small>
      <span class="solo-lectores">${on ? "Desbloqueado" : "Bloqueado"}</span>
    </div>`;
  }).join("");
}

/* ---------- Ficha del módulo (con videos) ---------- */
function videoHTML(v) {
  const m = String(v.url).match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (m) {
    return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${m[1]}"
      title="${esc(v.titulo)}" loading="lazy" allowfullscreen></iframe></div>`;
  }
  return `<p><a href="${esc(v.url)}" target="_blank" rel="noopener">▶ ${esc(v.titulo)}</a></p>`;
}

function abrirFicha(id) {
  const m = MODULOS.find(x => x.id === id);
  if (!m) return;
  if (!vistos.includes(id)) {
    vistos.push(id);
    guardar(LS.vis, vistos);
    evaluarLogros(true);
  }
  const hecho = repasados.includes(id);
  $("fichaContenido").innerHTML = `
    <h2 id="fichaTitulo">${esc(m.icono || "")} ${esc(m.nombre)}</h2>
    <p class="docente">${esc(m.docente)}${m.periodo ? " · " + esc(m.periodo) : ""}</p>
    <p>${esc(m.resumen)}</p>
    <h3>Lo que aprendí</h3><ul>${lista(m.aprendizajes)}</ul>
    <h3>Instrumentos</h3><ul>${lista(m.instrumentos)}</ul>
    <h3>Programas</h3><ul>${lista(m.programas)}</ul>
    <h3>Herramientas</h3><ul>${lista(m.herramientas)}</ul>
    <h3>Recursos</h3><ul>${enlaces(m.recursos)}</ul>
    <h3>Evidencias</h3><ul>${enlaces(m.evidencias)}</ul>
    <h3>Tutoriales en video</h3>
    ${(m.videos && m.videos.length) ? m.videos.map(videoHTML).join("") : "<p class='suave'>Pendiente</p>"}
    <p><button class="boton" id="marcar" data-id="${esc(id)}">${hecho ? "✓ Repasado (clic para desmarcar)" : "Marcar como repasado"}</button></p>
  `;
  $("ficha").showModal();
}

function alternarRepasado(id) {
  const i = repasados.indexOf(id);
  if (i === -1) repasados.push(id); else repasados.splice(i, 1);
  guardar(LS.rep, repasados);
  pintarTarjetas();
  evaluarLogros(true);
  const b = $("marcar");
  if (b) b.textContent = repasados.includes(id) ? "✓ Repasado (clic para desmarcar)" : "Marcar como repasado";
}

/* ---------- Equipo ---------- */
function pintarEquipo() {
  $("integrantes").innerHTML = lista(EQUIPO);
}

/* ---------- Eventos ---------- */
$("rejilla").addEventListener("click", e => {
  const b = e.target.closest("button[data-id]");
  if (b) abrirFicha(b.dataset.id);
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
  if (b) alternarRepasado(b.dataset.id);
});
$("cerrar").addEventListener("click", () => $("ficha").close());
$("ficha").addEventListener("click", e => { if (e.target === $("ficha")) $("ficha").close(); });

$("buscar").addEventListener("input", e => { busqueda = e.target.value; pintarTarjetas(); });

// Atajo de teclado: "/" o Ctrl/Cmd+K enfocan el buscador; Escape lo limpia
document.addEventListener("keydown", e => {
  const enCampo = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  const abierto = $("ficha").open;
  if (abierto) return;
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
pintarTarjetas();
pintarNube();
pintarLinea();
mazo = construirMazo();
pintarCarta();
pintarLogros();
pintarEquipo();

/* ---------- PWA: registra el service worker ---------- */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
