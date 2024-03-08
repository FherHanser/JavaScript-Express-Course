// Dado un arreglo de números, queremos escribir una función que filtre y devuelva un nuevo arreglo que solo contenga los números pares del arreglo original.
// Adicional podemos agregar un mensaje para informar si no se encuentran números pares.

function filtrarNumerosPares(arreglo) {
    numerosPares = [];
    var mensaje = "Todos los numeros son impares";

    for (let num of arreglo) {

        if (num % 2 === 0) {

            numerosPares.push(num);

        }

    }

    if (numerosPares.length === 0) {

        console.log(mensaje)
    } else {

        return numerosPares;
    }

}

const numeros = [123,6547,97,169,847,547];
console.log (filtrarNumerosPares(numeros));