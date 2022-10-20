

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
    
    /*
    numeroUno = parseFloat(prompt('Ingrese un número: '));
    numeroDos = parseFloat(prompt('Ingrese otro número: '));
    */
    datoUno = prompt('Ingrese un número: ');
    datoDos = prompt('Ingrese otro número: ');

    numeroUno = parseFloat (datoUno);
    numeroDos = parseFloat (datoDos);

    console.log(numeroUno, numeroDos);
}

/*function validar() {
    if (numeroUno == NaN && numeroDos == NaN) {
        alert('Es necesario llenar el dato')
    } 
}*/

/*function validar() {
    if (numeroUno == undefined && numeroDos == undefined ) {
        alert('Es necesario llenar el dato, click en iniciar Calculos')
    } 
}*/

/*
function validar(){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert('Debe ingresar un valor numérico')
    }
    else if(numero1 == "" || numero2 == "")
    {
        alert('Debe completar ambos valores')
    }
}

function sumar() {
    validar();
    suma = numero1 + numero2;
    resultado.innerHTML = `El resultado es: ${suma}`;
} */

function sumar() {

    //validacion con un if
    //true/false
    //validar();
    if (numeroUno == undefined && numeroDos == undefined ) {
        alert('Es necesario llenar el dato, click en Iniciar Calculos')
    } else{
        suma = numeroUno + numeroDos;
        resultado.innerHTML = `El resultado de la suma es: ${suma}`;
        console.log(' El resultado de la suma es ' + suma)
    }

    


}

function restar() {
    //validar();
    resta = numeroUno - numeroDos;
    resultado.innerHTML = `El resultado de la resta es: ${resta}`;
}

function multiplicar() {
    //validar();
    multiplicacion = numeroUno * numeroDos;
    resultado.innerHTML = `El resultado de la multiplicacion es: ${multiplicacion}`;
}

function dividir() {
    //validar();
    division = numeroUno / numeroDos;
    resultado.innerHTML = `El resultado de la division es: ${division}`;
}