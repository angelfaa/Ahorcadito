var contenedorIniciar = document.querySelector(".contenedor-buttons-inicio");
var botonIniciar = document.querySelector(".btn-inicio-juego");
var contenedorNuevoJuego= document.querySelector(".contenedor-nuevo-juego");
contenedorNuevoJuego.classList.add("invisible");
var pantalla = document.querySelector("canvas");
pantalla.classList.add("invisible");
var contenedorLetras = document.querySelector(".contenedor-letras");
contenedorLetras.classList.add("invisible");
var inputLetra = document.getElementById("input-letras");
var pincel = pantalla.getContext("2d");
var contenedorAgregar = document.querySelector(".contenedor-agregar-palabra");
contenedorAgregar.classList.add("invisible");
var letrasNoEn = document.querySelector("#letras-noencontradas");
var palabraAdivinar = "";
var pieFooter = document.querySelector("footer");


var palabras = ["HTML", "CSS","JAVASCRIPT", "LENGUAJES", "PROGRAMACION", 
"BUCLE", "FUNCION", "CANVAS","JAVA", "FIGMA", "FORMULARIO"];

botonIniciar.addEventListener("click",function(){
    contenedorIniciar.classList.add("invisible");
    pieFooter.classList.add("invisible");
    pantalla.classList.remove("invisible");
    contenedorLetras.classList.remove("invisible");
    contenedorNuevoJuego.classList.remove("invisible");
    inputLetra.focus();  
    dibujarHorca(pincel, "#3F1E01", 10);
    
    palabraAdivinar = sorteaPalabra();
    dibujarLineasPalabras(pincel, palabraAdivinar.length);
});


function sorteaPalabra(){
    var indPal = Math.floor(Math.random() * palabras.length);
    var palabraSorteada = palabras[indPal];
    palabras.splice(indPal,1);
    console.log("esta es la palabra sorteada" +palabraSorteada);
    return palabraSorteada;
}



