//Dado un arreglo, queremos escribir una función que devuelva un nuevo arreglo donde cada elemento del arreglo original esté duplicado.

function duplicarElementos(arreglo) {

    arregloDuplicado = [];

    for (let elemento of arreglo) {

        arregloDuplicado.push(elemento);
        arregloDuplicado.push(elemento);

    }

    return arregloDuplicado

}

const arregloOriginal = [12, 20, 30, 41, 51];
console.log(duplicarElementos(arregloOriginal));