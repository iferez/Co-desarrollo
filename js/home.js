var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* VALIDACION VER EMPRESAS */ 
let verTodasEmpresas = document.getElementById('verTodasEmpresas');
let verMenosEmpresas = document.getElementById('verMenosEmpresas');

verTodasEmpresas.addEventListener("click", function (e) {
    verTodasEmpresas.classList.add("d-none");
    verMenosEmpresas.classList.remove("d-none");
    verMenosEmpresas.classList.add("d-inline-block");
});

verMenosEmpresas.addEventListener("click", function (e) {
    verMenosEmpresas.classList.remove("d-inline-block");
    verMenosEmpresas.classList.add("d-none");
    verTodasEmpresas.classList.remove("d-none");
    verTodasEmpresas.classList.add("d-inline-block");
});

