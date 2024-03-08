// Dado un arreglo, queremos escribir una función que devuelva un nuevo arreglo sin elementos duplicados.
// Ordenar de menor a mayor.


function eliminarDuplicados(arreglo) {
    sinDuplicados = [];

    for (let elemento of arreglo) {


        if (!sinDuplicados.includes(elemento)) {
            sinDuplicados.push(elemento)

        }
    }

    return sinDuplicados.sort((b, a) => a - b)

}

const arregloOriginal = [21,21,21, 32, 151, 45, 11, 11, 21, 21, 21, 356, 356];
console.log(eliminarDuplicados(arregloOriginal));