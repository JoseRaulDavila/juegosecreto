let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número! en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario ingresó un número incorrecto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGnerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // si el número generado ya está en la lista, generar uno nuevo

    console.log(listaNumeroSorteado);  // para debuggear
    console.log(numeroGnerado);  // para debuggear
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números han sido sorteados');
    } else {
        if (listaNumeroSorteado.includes(numeroGnerado)) {
            return generarNumeroSecreto();  // volver a generar un número nuevo si ya está
        } else {
            listaNumeroSorteado.push(numeroGnerado);
            return numeroGnerado;
        }
    }
}

function condicionInicial() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja de texto
    limpiarCaja();
    // indicar intervalo de intentos
    condicionInicial();
    // generar nuevo número secreto
    // deshabilitar botón reiniciar
    // inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionInicial();
console.log(numeroSecreto);

