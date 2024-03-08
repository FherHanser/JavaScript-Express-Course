// Dado un arreglo de números, queremos escribir una función que devuelva un nuevo arreglo con los números ordenados de menor a mayor.


function ordenarNumeros(arreglo) {

    return arreglo.slice().sort((a, b) => a - b);

}

const numeros = [10, 84, 96, 75, 21, 32, 11];
console.log(ordenarNumeros(numeros));