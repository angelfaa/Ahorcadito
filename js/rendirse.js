var botonRendirse = document.querySelector(".btn-rendirse");

botonRendirse.addEventListener("click", function(){
    msjRendirse(palabraAdivinar);
    pieFooter.classList.remove("invisible");
    contenedorIniciar.classList.remove("invisible");
    pantalla.classList.add("invisible");
    contenedorLetras.classList.add("invisible");
    contenedorNuevoJuego.classList.add("invisible");
    pantalla.width = pantalla.width;
    contDibujo = 0;
    encontradas = 0;
    letraRepetidas = [];
    letrasNoEn.textContent = "";
});