/* LOGICA CHECK VIABILIDAD */ 
let estadoVerificado = document.getElementById('estadoVerificado');
let estadoRechazado = document.getElementById('estadoRechazado');
let detalleRechazo = document.getElementById('detalleRechazo');

estadoVerificado.addEventListener("change", function (e) {
    if (this.checked) detalleRechazo.classList.add('d-none');
});

estadoRechazado.addEventListener("change", function (e) {
    if (this.checked) detalleRechazo.classList.remove('d-none');
});
