

//declaramos las variables
let suma;
let resta, multiplicacion, division;
let numeroUno, numeroDos;


let resultado = document.getElementById("resultado");

console.log(resultado);

function saludar() {
    resultado.innerHTML = 'Hola Usuario, un placer!!!';
}

function iniciar() {
    numeroUno = prompt('Ingrese un número');
    numeroDos = prompt('Ingrese otro número');
    console.log(numeroUno, numeroDos);
}



function sumar() {
    suma = numeroUno + numeroDos;
    console.log(' El resultado de la suma es ' + suma)
}

function restar() {
    
}

function multiplicar() {
    
}

function dividir() {
    
}