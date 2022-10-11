//Variables

console.log('Hola JavaScript');

var pepe; //declaracion de una variable

let nombre;

const DNI = 40641420;

nombre = 'Matias' 

console.log(nombre);

nombre = 'Javier' 
nombre = 'Zioshi'

console.log(nombre);

console.log(DNI);

let falso = false;

let verdadero = true;

console.log(falso);

console.log(verdadero);

console.log('========================================================================================');


//Mostrar datos en la consola

//concatenar datos
console.log("Hola, mi nombre es " + nombre + " y mi país es Argentina y mi DNI es " + DNI + ".");

console.log('Hola, mi nombre es ' + nombre + ' y mi país es Argentina y mi DNI es ' + DNI + '.');

//utilizamos el template string
console.log(`Hola, mi nombre es ${nombre} y mi país es Argentina y mi DNI es ${DNI}.`);

console.log('========================================================================================');

//Arrays

let banana = 'banana'
let manzana = 'manzana'

let frutas = ['peras','bananas','manzanas','naranjas'];

console.log(`Las frutas del arreglo son ${frutas}`)

console.log(`La primer fruta de nuestro array es: ${frutas[0]}`)
console.log(`La primer fruta de nuestro array es: ${frutas[1]}`)
console.log(`La primer fruta de nuestro array es: ${frutas[2]}`)
console.log(`La primer fruta de nuestro array es: ${frutas[3]}`)

//Metodo de los arreglos
console.log(`Los elementos del array frutas son ${frutas.length} `)

frutas.push('mangos')

console.log(`Las frutas del arreglo son ${frutas}`)

console.log(`Los elementos del array frutas son ${frutas.length} `)

let persona = ['Pepe','1245789','true'];

console.log(`Los datos del arreglo son ${persona}`)

console.log('========================================================================================');

//Objetos - JSON

let pais = {
    nombre: 'Argentina' ,
    provincias: 24 ,
    capital: 'Buenos Aires' ,
    poblacion: 45000000 ,
    ubicacion: 'America' , 
}

console.log(pais);
console.log(`La capital de mi pais es ${pais.capital}`)
console.log(`La capital de mi pais es ${pais.nombre}`)
console.log(`La capital de mi pais es ${pais.poblacion}`)
console.log(`La capital de mi pais es ${pais.provincias}`)
