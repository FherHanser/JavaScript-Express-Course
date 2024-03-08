// Dado un arreglo y un número k, queremos escribir una función que devuelva un nuevo arreglo donde los elementos estén rotados a la derecha k veces.

function rotarDerecha(arr, k) {
    const longitud = arr.length;
    const rotaciones = k % longitud;
    const parteDerecha = arr.slice(longitud - rotaciones);
    const parteIzquierda = arr.slice(0, longitud - rotaciones);
    return parteDerecha.concat(parteIzquierda);
}

// Ejemplo de uso:
const arregloOriginal = [1, 2, 3, 4, 5];
const k = 3;
console.log(rotarDerecha(arregloOriginal, k)); // Debería imprimir [4, 5, 1, 2, 3]
