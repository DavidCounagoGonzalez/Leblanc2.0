window.addEventListener("load", inicio);

function inicio(){
const desplegable = document.querySelector(".desplegable");
const items = document.querySelectorAll(".itemMenu");
const burguir = document.querySelector(".hamburguesa");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function desplega(){
    if(desplegable.classList.contains("showMenu")){
        desplegable.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }else{
        desplegable.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

burguir.addEventListener("click", desplega);

items.forEach(
    function(item){
        item.addEventListener("click", desplega);
    }
)
}