// Declaración de variables con diferentes tipos de datos
let numero = 10;
let cadena = "Hola mundo";
let esVerdadero = true;
let objeto = { nombre: "Juan", edad: 30 };
let arreglo = [1, 2, 3, 4, 5];
let noDefinido = undefined;
let valorNulo = null;
let noEsUnNumero = NaN;
let simbolo = Symbol('simbolo');

// Imprimir los tipos de datos
console.log(typeof numero); // number
console.log(typeof cadena); // string
console.log(typeof esVerdadero); // boolean
console.log(typeof objeto); // object
console.log(typeof arreglo); // object (JavaScript trata los arreglos como objetos)
console.log(typeof noDefinido); // undefined
console.log(typeof valorNulo); // object (un error histórico de JavaScript, null se considera un objeto)
console.log(typeof noEsUnNumero); // number
console.log(typeof simbolo); // symbol

/*En este ejemplo, declaramos variables con diferentes tipos de datos y utilizamos el operador 
typeof para determinar el tipo de cada variable. Esto nos permite entender cómo JavaScript interpreta 
y maneja los diferentes tipos de datos.*/

for (let propiedad in objeto){

    console.log(`El objeto es el siguiente: ${propiedad}: ${objeto[propiedad]}`);
}
