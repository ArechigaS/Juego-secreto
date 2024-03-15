let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

    if  (numeroUsuario === numeroSecreto){
        asignarTextoElemento ('p',`acertaste del numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        // El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El numero secreto es menor');
        } else {
            asignarTextoElemento ('p','El numero es mayor');
        }
    }
    intentos++;
    limpiarCaja();

    return;
}
function limpiarCaja() {
    
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
   // Si ya sorteamos todos los numeros
   if (listaNumeroSorteados.length === numeroMaximo) {
       asignarTextoElemento('p', 'Ya no hay mas números por sortear');
    
    }else{
        // si el numero generado esta incluido en la lista

    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
    } else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
    
}

function condicionesIniciales(params) {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar numero aleatorio
    //resetear contador de intentos
    condicionesIniciales();
    //desactivar boton reiniciar
    document.getElementById('reiniciar').setAttribute( 'disabled', 'true' );

}


condicionesIniciales();