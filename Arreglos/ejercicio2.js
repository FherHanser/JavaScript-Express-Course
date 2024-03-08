// Dado un arreglo de números, el objetivo es escribir una función que encuentre y devuelva el número más grande en el arreglo.

function encontrarNumeroMayor(arreglo) {

    let numeroMayor = Number.NEGATIVE_INFINITY;

    for (let num of arreglo) {

        if (num > numeroMayor) {

            numeroMayor = num
        }
    }
    return numeroMayor

}

const numeros = [10, 12, 32, 54, 456];
console.log(encontrarNumeroMayor(numeros))
