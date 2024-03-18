/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 * - Los anagramas son palabras con el contenido de letras idénticos = amor, roma, listen, silent
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function sonAnagramas(palabra1, palabra2) {
    // Convertir las palabras a minúsculas y ordenar sus letras
    var ordenada1 = palabra1.toLowerCase().split('').sort().join('');
    var ordenada2 = palabra2.toLowerCase().split('').sort().join('');
    
    // Comparar las palabras ordenadas
    return ordenada1 === ordenada2;
}

// Ejemplos de uso:
console.log(sonAnagramas('amor', 'roma'));  // true
console.log(sonAnagramas('hello', 'world'));  // false
console.log(sonAnagramas('listen', 'silent'));  // true
console.log(sonAnagramas('school master', 'the classroom'));  // true



/*
En esta función, se convierten ambas palabras a minúsculas para que la comparación sea insensible a mayúsculas y minúsculas. 
Luego, se dividen las palabras en un arreglo de caracteres, se ordenan alfabéticamente y se vuelven a unir en una cadena de texto. 
Finalmente, se compara si las dos palabras ordenadas son iguales y se retorna el resultado.
 */