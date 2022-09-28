var btnNuevoJuego = document.querySelector(".btn-nuevo-juego");

btnNuevoJuego.addEventListener("click",function(){
    botonRendirse.classList.remove("invisible");
    pantalla.width = pantalla.width;
    contDibujo = 0;
    encontradas = 0;
    letraRepetidas = [];
    letrasNoEn.textContent = "";
    contenedorLetras.classList.remove("invisible");
    inputLetra.focus();  
    dibujarHorca(pincel, "#3F1E01", 10);
    
    palabraAdivinar = sorteaPalabra();
    dibujarLineasPalabras(pincel, palabraAdivinar.length);
});