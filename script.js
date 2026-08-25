const colecciones = {
  "Artículos": {
    columnas: [
      { clave: "titulo",    etiqueta: "Título" },
      { clave: "categoria", etiqueta: "Categoría" },
      { clave: "autor",     etiqueta: "Autor" },
      { clave: "anio",      etiqueta: "Año" },
      { clave: "estado",    etiqueta: "Estado" }
    ],
    datos: [
      { titulo: "Introducción a las redes neuronales",  categoria: "Tecnología",  autor: "M. Gómez",     anio: 2023, estado: "Disponible" },
      { titulo: "Historia del Río de la Plata",          categoria: "Historia",    autor: "L. Fernández", anio: 2019, estado: "Prestado" },
      { titulo: "Cambio climático en el NEA",            categoria: "Ambiente",    autor: "S. Duarte",    anio: 2022, estado: "Disponible" },
      { titulo: "Economía circular aplicada",            categoria: "Economía",   autor: "R. Paredes",   anio: 2021, estado: "Reservado" },
      { titulo: "Literatura guaraní contemporánea",      categoria: "Literatura", autor: "N. Acosta",    anio: 2020, estado: "Disponible" },
      { titulo: "Bases de datos NoSQL",                  categoria: "Tecnología",  autor: "F. Ibarra",    anio: 2024, estado: "Prestado" },
      { titulo: "El yerbatero: producción y comercio",   categoria: "Economía",   autor: "C. Weiss",     anio: 2018, estado: "Disponible" },
      { titulo: "Biodiversidad de Misiones",             categoria: "Ambiente",   autor: "P. Sosa",      anio: 2023, estado: "Disponible" },
      { titulo: "Inteligencia artificial en la educación", categoria: "Tecnología", autor: "D. Roldán",  anio: 2024, estado: "Reservado" },
      { titulo: "Movimientos independentistas del NEA",  categoria: "Historia",    autor: "V. Cabral",    anio: 2017, estado: "Disponible" },
      { titulo: "Poesía misionera del siglo XX",          categoria: "Literatura", autor: "A. Benítez",   anio: 2016, estado: "Prestado" },
      { titulo: "Comercio fronterizo y desarrollo local", categoria: "Economía",   autor: "J. Meza",      anio: 2020, estado: "Disponible" },
      { titulo: "Gestión de residuos urbanos",             categoria: "Ambiente",   autor: "S. Duarte",    anio: 2021, estado: "Prestado" },
      { titulo: "Seguridad en aplicaciones web",           categoria: "Tecnología",  autor: "F. Ibarra",    anio: 2022, estado: "Disponible" },
      { titulo: "El Mercosur: origen y evolución",         categoria: "Economía",   autor: "R. Paredes",   anio: 2019, estado: "Disponible" },
      { titulo: "Narrativa oral guaraní",                  categoria: "Literatura", autor: "N. Acosta",    anio: 2018, estado: "Reservado" },
      { titulo: "Energías renovables en zonas rurales",    categoria: "Ambiente",   autor: "P. Sosa",      anio: 2024, estado: "Disponible" },
      { titulo: "Historia de las misiones jesuíticas",      categoria: "Historia",   autor: "V. Cabral",    anio: 2015, estado: "Disponible" },
      { titulo: "Inclusión digital en escuelas rurales",    categoria: "Tecnología", autor: "D. Roldán",    anio: 2023, estado: "Prestado" },
      { titulo: "Turismo sustentable en Iguazú",             categoria: "Ambiente",   autor: "C. Weiss",     anio: 2020, estado: "Disponible" },
      { titulo: "Cuentos breves del litoral",                categoria: "Literatura", autor: "A. Benítez",   anio: 2019, estado: "Disponible" },
      { titulo: "Análisis de datos con hojas de cálculo",    categoria: "Tecnología", autor: "F. Ibarra",    anio: 2021, estado: "Reservado" },
      { titulo: "Cooperativismo agrícola en Misiones",       categoria: "Economía",   autor: "J. Meza",      anio: 2022, estado: "Disponible" }
    ]
  },
  "Personas": {
    columnas: [
      { clave: "nombre",    etiqueta: "Nombre" },
      { clave: "categoria", etiqueta: "Rol" },
      { clave: "area",      etiqueta: "Área" },
      { clave: "anio",      etiqueta: "Desde" },
      { clave: "estado",    etiqueta: "Estado" }
    ],
    datos: [
      { nombre: "Marina Gómez",    categoria: "Docente",       area: "Sistemas",  anio: 2015, estado: "Activo" },
      { nombre: "Luis Fernández",  categoria: "Alumno",        area: "Historia",  anio: 2022, estado: "Activo" },
      { nombre: "Sabrina Duarte",  categoria: "Docente",       area: "Ambiente",  anio: 2018, estado: "Inactivo" },
      { nombre: "Rodrigo Paredes", categoria: "Alumno",        area: "Economía",  anio: 2021, estado: "Activo" },
      { nombre: "Noelia Acosta",   categoria: "Bibliotecaria", area: "Letras",    anio: 2019, estado: "Activo" },
      { nombre: "Franco Ibarra",   categoria: "Alumno",        area: "Sistemas",  anio: 2023, estado: "Activo" },
      { nombre: "Carla Weiss",     categoria: "Docente",       area: "Economía",  anio: 2012, estado: "Inactivo" },
      { nombre: "Diego Roldán",    categoria: "Alumno",        area: "Sistemas",  anio: 2024, estado: "Activo" },
      { nombre: "Valeria Cabral",  categoria: "Docente",       area: "Historia",  anio: 2016, estado: "Activo" },
      { nombre: "Agustín Benítez", categoria: "Alumno",        area: "Letras",    anio: 2020, estado: "Inactivo" },
      { nombre: "Julieta Meza",    categoria: "Bibliotecaria", area: "Economía",  anio: 2017, estado: "Activo" },
      { nombre: "Santiago Peralta",categoria: "Alumno",        area: "Ambiente",  anio: 2023, estado: "Activo" }
    ]
  }
};

/* ============================================================
   LÓGICA (no hace falta tocar nada de acá para abajo)
   ============================================================ */

let coleccionActual = Object.keys(colecciones)[0];
let ordenClave = null;
let ordenAscendente = true;

const elTabs        = document.getElementById("tabs");
const elBuscar       = document.getElementById("buscar");
const elCategoria    = document.getElementById("filtroCategoria");
const elEstado       = document.getElementById("filtroEstado");
const elAnio         = document.getElementById("filtroAnio");
const elCuerpoTabla  = document.getElementById("cuerpo-tabla");
const elEncabezado   = document.getElementById("filas-encabezado");
const elCantidad     = document.getElementById("cantidad");
const elLimpiar      = document.getElementById("limpiar");

function crearPestanas(){
  elTabs.innerHTML = "";
  Object.keys(colecciones).forEach(nombre => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (nombre === coleccionActual ? " activo" : "");
    btn.textContent = nombre;
    btn.addEventListener("click", () => {
      coleccionActual = nombre;
      ordenClave = null;
      elBuscar.value = "";
      crearPestanas();
      crearFiltros();
      crearEncabezado();
      render();
    });
    elTabs.appendChild(btn);
  });
}

function opcionesUnicas(campo){
  const set = new Set(colecciones[coleccionActual].datos.map(d => d[campo]).filter(Boolean));
  return Array.from(set).sort();
}

function crearFiltros(){
  elCategoria.innerHTML = '<option value="">Todas</option>';
  opcionesUnicas("categoria").forEach(v => {
    const op = document.createElement("option");
    op.value = v; op.textContent = v;
    elCategoria.appendChild(op);
  });

  elEstado.innerHTML = '<option value="">Todos</option>';
  opcionesUnicas("estado").forEach(v => {
    const op = document.createElement("option");
    op.value = v; op.textContent = v;
    elEstado.appendChild(op);
  });

  elAnio.innerHTML = '<option value="">Todos</option>';
  opcionesUnicas("anio").sort((a, b) => b - a).forEach(v => {
    const op = document.createElement("option");
    op.value = v; op.textContent = v;
    elAnio.appendChild(op);
  });
}

function crearEncabezado(){
  const cols = colecciones[coleccionActual].columnas;
  elEncabezado.innerHTML = "";
  cols.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col.etiqueta;
    th.dataset.clave = col.clave;
    th.addEventListener("click", () => {
      if(ordenClave === col.clave){
        ordenAscendente = !ordenAscendente;
      }else{
        ordenClave = col.clave;
        ordenAscendente = true;
      }
      render();
    });
    elEncabezado.appendChild(th);
  });
}

function filtrarDatos(){
  const texto = elBuscar.value.trim().toLowerCase();
  const cat = elCategoria.value;
  const est = elEstado.value;
  const anio = elAnio.value;
  const campoNombre = colecciones[coleccionActual].columnas[0].clave;

  let datos = colecciones[coleccionActual].datos.filter(item => {
    const coincideTexto = !texto || String(item[campoNombre]).toLowerCase().includes(texto);
    const coincideCat = !cat || item.categoria === cat;
    const coincideEstado = !est || item.estado === est;
    const coincideAnio = !anio || String(item.anio) === anio;
    return coincideTexto && coincideCat && coincideEstado && coincideAnio;
  });

  if(ordenClave){
    datos = datos.slice().sort((a, b) => {
      let va = a[ordenClave], vb = b[ordenClave];
      if(typeof va === "number" && typeof vb === "number"){
        return ordenAscendente ? va - vb : vb - va;
      }
      va = String(va).toLowerCase(); vb = String(vb).toLowerCase();
      if(va < vb) return ordenAscendente ? -1 : 1;
      if(va > vb) return ordenAscendente ? 1 : -1;
      return 0;
    });
  }

  return datos;
}

function render(){
  // marcar orden visual en encabezados
  Array.from(elEncabezado.children).forEach(th => {
    th.classList.remove("orden-asc", "orden-desc");
    if(th.dataset.clave === ordenClave){
      th.classList.add(ordenAscendente ? "orden-asc" : "orden-desc");
    }
  });

  const datos = filtrarDatos();
  const cols = colecciones[coleccionActual].columnas;

  elCuerpoTabla.innerHTML = "";

  if(datos.length === 0){
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = cols.length;
    td.className = "vacio";
    td.textContent = "No se encontraron resultados con estos filtros.";
    tr.appendChild(td);
    elCuerpoTabla.appendChild(tr);
  }else{
    datos.forEach(item => {
      const tr = document.createElement("tr");
      cols.forEach(col => {
        const td = document.createElement("td");
        td.dataset.etiqueta = col.etiqueta;
        if(col.clave === "estado"){
          const span = document.createElement("span");
          span.className = "etiqueta estado-" + item[col.clave];
          span.textContent = item[col.clave];
          td.appendChild(span);
        }else{
          td.textContent = item[col.clave];
        }
        tr.appendChild(td);
      });
      elCuerpoTabla.appendChild(tr);
    });
  }

  elCantidad.textContent = datos.length;
}

elBuscar.addEventListener("input", render);
elCategoria.addEventListener("change", render);
elEstado.addEventListener("change", render);
elAnio.addEventListener("change", render);
elLimpiar.addEventListener("click", () => {
  elBuscar.value = "";
  elCategoria.value = "";
  elEstado.value = "";
  elAnio.value = "";
  ordenClave = null;
  render();
});