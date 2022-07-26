/* LOGICA CHECK VIABILIDAD */ 
let viabilidadSi = document.getElementById('viabilidadSi');
let viabilidadNo = document.getElementById('viabilidadNo');
let detalleViabilidad = document.getElementById('detalleViabilidad');

viabilidadSi.addEventListener("change", function (e) {
    if (this.checked) detalleViabilidad.classList.remove('d-none');
});

viabilidadNo.addEventListener("change", function (e) {
    if (this.checked) detalleViabilidad.classList.add('d-none');
});

/* LOGICA CHECK ANTECEDENTES TECNOLOGICOS */ 
let antecedentesSi = document.getElementById('antecedentesSi');
let antecedentesNo = document.getElementById('antecedentesNo');
let detalleAntecedentes = document.getElementById('detalleAntecedentes');

antecedentesSi.addEventListener("change", function (e) {
    if (this.checked) detalleAntecedentes.classList.remove('d-none');
});

antecedentesNo.addEventListener("change", function (e) {
    if (this.checked) detalleAntecedentes.classList.add('d-none');
});

/* LOGICA CHECK MERCADO */ 
let mercadoSi = document.getElementById('mercadoSi');
let mercadoNo = document.getElementById('mercadoNo');
let detalleMercado = document.getElementById('detalleMercado');

mercadoSi.addEventListener("change", function (e) {
    if (this.checked) detalleMercado.classList.remove('d-none');
});

mercadoNo.addEventListener("change", function (e) {
    if (this.checked) detalleMercado.classList.add('d-none');
});

/* LOGICA CHECK PROPIEDAD */ 
let propiedadSi = document.getElementById('propiedadSi');
let propiedadNo = document.getElementById('propiedadNo');
let detallePropiedad = document.getElementById('detallePropiedad');

propiedadSi.addEventListener("change", function (e) {
    if (this.checked) detallePropiedad.classList.remove('d-none');
});

propiedadNo.addEventListener("change", function (e) {
    if (this.checked) detallePropiedad.classList.add('d-none');
});

/* LOGICA CHECK INVERSION */ 
let inversionSi = document.getElementById('inversionSi');
let inversionNo = document.getElementById('inversionNo');
let detalleInversion = document.getElementById('detalleInversion');

inversionSi.addEventListener("change", function (e) {
    if (this.checked) detalleInversion.classList.remove('d-none');
});

inversionNo.addEventListener("change", function (e) {
    if (this.checked) detalleInversion.classList.add('d-none');
});

/* LOGICA CHECK PREMIO */ 
let premioSi = document.getElementById('premioSi');
let premioNo = document.getElementById('premioNo');
let detallePremio = document.getElementById('detallePremio');

premioSi.addEventListener("change", function (e) {
    if (this.checked) detallePremio.classList.remove('d-none');
});

premioNo.addEventListener("change", function (e) {
    if (this.checked) detallePremio.classList.add('d-none');
});