function dibujarHorca(pincel, color, lineW){
    pincel.lineWidth = lineW;
    pincel.strokeStyle = color;
    pincel.beginPath();
    pincel.lineCap="round";
    //base
    pincel.moveTo(pantalla.width*0.35,pantalla.height*0.60);
    pincel.lineTo(pantalla.width*0.55,pantalla.height*0.60);
    //verticaL
    pincel.moveTo(pantalla.width*0.45,pantalla.height*0.60);
    pincel.lineTo(pantalla.width*0.45,pantalla.height*0.20);
   
    pincel.moveTo(pantalla.width*0.44,pantalla.height*0.20);
    pincel.lineTo(pantalla.width*0.65,pantalla.height*0.20);

    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.20);
    pincel.lineTo(pantalla.width*0.64,pantalla.height*0.30);
    
    pincel.stroke();
    pincel.closePath();
}

function dibujarCabeza(){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    
    pincel.arc(pantalla.width*0.64,pantalla.height*0.33125,25,0,2*Math.PI);
    pincel.stroke();
    pincel.closePath();
}

function dibujarCuerpo(pincel){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.3625);
    pincel.lineTo(pantalla.width*0.64,pantalla.height*0.51);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPiernaIzq(pincel){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.51);
    pincel.lineTo(pantalla.width*0.60,pantalla.height*0.56);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPiernaDer(pincel){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.51);
    pincel.lineTo(pantalla.width*0.68,pantalla.height*0.56);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoIzq(pincel){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.40);
    pincel.lineTo(pantalla.width*0.60,pantalla.height*0.45);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoDer(pincel){
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(pantalla.width*0.64,pantalla.height*0.40);
    pincel.lineTo(pantalla.width*0.68,pantalla.height*0.45);
    pincel.stroke();
    pincel.closePath();
}