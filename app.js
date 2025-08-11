let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (Elemento, texto) {
   let ElementoHTML = document.querySelector (Elemento);
   ElementoHTML.innerHTML = texto;
   return;

}

function verificarIntento() {

    let numeroDeUsuario = parseInt (document.getElementById ('numeroUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario=== numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos===1)? 'intento' :'intentos'}` )
        document.getElementById ('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerto
         if (numeroDeUsuario> numeroSecreto) {
           asignarTextoElemento ('p', 'El numero secreto es menor')
         } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
         }
         intentos++;
         limpiarCaja();
    }
    

   
    return;
}

function limpiarCaja (){
   document.querySelector('#numeroUsuario').value= '';

   
}


function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){ 
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
        } else

    //si el numero generado estan en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    
    }else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    
}
function condicionesIniciales () {
asignarTextoElemento ('h1' , 'juego del numero secreto!');
asignarTextoElemento ('p' , `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto= generarNumeroSecreto();
intentos=1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaja de intervalo de numeros.
    //generar el numero aleatorio.
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego.
document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIniciales();