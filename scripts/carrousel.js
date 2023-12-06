window.addEventListener('load', inicio);

function inicio(){
    const slider = document.querySelector(".slider--inner");

    let imagenes = slider.querySelectorAll("img");

    let index = 1;

    setInterval(function(){
        let porcentaje = index * -100;
        slider.style.transform = "translateX(" + porcentaje + "%)";
        index++;
        if(index > (imagenes.length -1)){
            index = 0;
        }
    }, 5000)
}