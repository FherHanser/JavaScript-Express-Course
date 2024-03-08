
//Escribiremos una función llamada ordenarArreglo que ordene un arreglo de números en orden ascendente o descendente

function ordenarArreglo(arreglo, ascendente = true) {
    if (ascendente) {
        return arr.slice().sort((a, b) => a - b);
    } else {
        return arr.slice().sort((a, b) => b - a);
    }
}

// Ejemplo de uso:
const numeros = [4, 2, 8, 1, 6];
console.log(ordenarArreglo(numeros)); // Orden ascendente, debería imprimir [1, 2, 4, 6, 8]
console.log(ordenarArreglo(numeros, false)); // Orden descendente, debería imprimir [8, 6, 4, 2, 1]
