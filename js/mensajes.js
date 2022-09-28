function msjGanaste(){
    Swal.fire({
        title: 'Felicidades!! Adivinaste la palabra secreta',
        width: 400,
        heigth: 400,
        padding: '3em',
        color: '#EF5B0C',
        background: '#fff url(https://sweetalert2.github.io/#iconsimages/trees.png)',
        
      });
}

function msjRepetida(){
    swal.fire("Oops!", "Letra ya ingresada!", "warning");
    
}

function msjPerdiste(){
    Swal.fire({
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          
        icon: 'error',
        title: 'Lo siento',
        text: 'Se te acabaron los intentos',
        footer: 'La palabra era ' +palabraAdivinar,
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
      });
}

function msjRendirse(palabra){
  Swal.fire('La palabra secreta era '+palabra);
}