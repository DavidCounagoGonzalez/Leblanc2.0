window.addEventListener("load", inicio);

function inicio(){
const menu = document.querySelector(".despFiltros");
const abrir = document.getElementById("abrirFiltro");
const cerrar = document.getElementById("cerrarFiltro");

abrir.addEventListener("click", () =>{
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})
}