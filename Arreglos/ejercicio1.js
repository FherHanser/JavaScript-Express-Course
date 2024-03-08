// Escribe una función que tome un arreglo de números y devuelva la suma de todos los números en el arreglo.

function sumaArreglo(arreglo) {

    let suma = 0;

    for (let num of arreglo) {

        suma += num;
    }

    return suma

}

const numeros = [1231, 321, 21, 212, 12];
console.log(sumaArreglo(numeros));