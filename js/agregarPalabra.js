
var btnAgregarPalabra = document.querySelector(".btn-agregar-palabra");
var inputAgregarPalabra = document.getElementById("input-agregar-palabra");
var btnGuardarEmpezar = document.querySelector(".btn-comenzar");
var btnCancelar = document.querySelector(".btn-cancelar");
var nuevaPalabra = "";


btnAgregarPalabra.addEventListener("click", function(){
    pieFooter.classList.add("invisible");
    inputAgregarPalabra.value = "";
    contenedorIniciar.classList.add("invisible");
    console.log("agregar palabra");
    inputAgregarPalabra.focus();
    contenedorAgregar.classList.remove("invisible");
    
});

btnGuardarEmpezar.addEventListener("click", function(){
    contenedorIniciar.classList.add("invisible");
    contenedorAgregar.classList.add("invisible");

    pantalla.classList.remove("invisible");
    contenedorLetras.classList.remove("invisible");
    contenedorNuevoJuego.classList.remove("invisible");
    inputLetra.focus();  
    dibujarHorca(pincel, "#3F1E01", 10);
    
    palabraAdivinar = inputAgregarPalabra.value.toUpperCase();
    console.log(palabraAdivinar);
    dibujarLineasPalabras(pincel, palabraAdivinar.length);
});

btnCancelar.addEventListener("click", function(){
    pieFooter.classList.remove("invisible");
    contenedorAgregar.classList.add("invisible");
    contenedorIniciar.classList.remove("invisible");
});