window.addEventListener('load', inicio);

function inicio(){

    const preguntas = document.querySelectorAll(".pregunta_titulo");

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () =>{
            desactivar(preguntas);
            pregunta.nextElementSibling.classList.add('activo');
        })
    })

}

function desactivar(preguntas){
    preguntas.forEach(pregunta => {
            pregunta.nextElementSibling.classList.remove('activo');
    })
}