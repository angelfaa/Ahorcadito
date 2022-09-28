function dibujarLineasPalabras(pincel,cantLetras){
    var posInicial = (pantalla.width/2) - (cantLetras /2) *100;
    pincel.lineWidth = 4;
    pincel.strokeStyle = "black";
    pincel.setLineDash([60,40]);
    pincel.beginPath();
    pincel.moveTo(posInicial,pantalla.height - 200);
    pincel.lineTo(posInicial +cantLetras*100,pantalla.height - 200);
    
    pincel.stroke();
    pincel.closePath();
}

function dibujarLetra(pincel, letra, posicion,cantLetras){
    var posInicial = (pantalla.width/2) - (cantLetras /2) *100;
    var pos = posInicial + (posicion -1) * 100; 
   
    pincel.font = "65px arial";
    
    pincel.fillText(letra,pos +8,pantalla.height-208);
}
;