var contDibujo = 0;
var encontradas = 0;
var letraRepetidas = [];

inputLetra.addEventListener("input", function () {
    /*var contDibujo = 0;
    var encontradas = 0;
    var letraRepetidas = [];*/
    var letraIngresada = inputLetra.value.toUpperCase();
    console.log("la letra ingresada es " + letraIngresada);

    if (!validarCaracteres(letraIngresada)) {
        alert("Debe ingresar una letra");
        inputLetra.value = "";
    } else {
        if (esRepetida(letraIngresada, letraRepetidas)) {
            msjRepetida();
            inputLetra.value = "";
            
        } else {
            console.log("buscando letra");
            if (palabraAdivinar.indexOf(letraIngresada) != -1) {
                
                for (var i = 0; i < palabraAdivinar.length; i++) {
                    if (letraIngresada == palabraAdivinar[i]) {
                        dibujarLetra(pincel,letraIngresada, i + 1, palabraAdivinar.length);
                        encontradas++;
                        if (encontradas == palabraAdivinar.length) {
                            msjGanaste();
                            contenedorLetras.classList.add("invisible");                               
                        }

                        console.log("encontradas " + encontradas);
                        inputLetra.value = "";
                    }
                }
            } else if (contDibujo <= 6) {
                letrasNoEn.textContent += letraIngresada + "  -  ";
                pincel.setLineDash([]);
                switch (contDibujo) {
                    case 0:
                        dibujarCabeza(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 1:
                        dibujarCuerpo(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 2:
                        dibujarBrazoDer(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 3:
                        dibujarBrazoIzq(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 4:
                        dibujarPiernaDer(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 5:
                        dibujarPiernaIzq(pincel);
                        contDibujo++;
                        inputLetra.value = "";
                        break;
                    case 6:
                        msjPerdiste();
                        contenedorLetras.classList.add("invisible");
                }
            }
        }
    }
});

function validarCaracteres(caracter) {
    var reg = /^[A-Z\s]+$/;
    return reg.test(caracter);
}

function esRepetida(letra, array) {
    if (array.indexOf(letra) != -1) {
        return true;
    } else {
        array.push(letra);
        return false;
    }
}
