/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*  
    Necesitamos recorrer los números del 1 al 100. Utilizaremos un bucle for para esto.
    En cada iteración del bucle, vamos a verificar si el número actual es un múltiplo de 3, de 5 o de ambos. 
    Para esto, utilizaremos operadores de módulo (%) para determinar si el número es divisible por 3, por 5 o por ambos sin dejar un residuo.
    Si el número es un múltiplo de 3, imprimiremos "fizz". Si es un múltiplo de 5, imprimiremos "buzz". Si es un múltiplo de ambos 3 y 5, 
    imprimiremos "fizzbuzz". De lo contrario, simplemente imprimiremos el número. 
    
*/


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}