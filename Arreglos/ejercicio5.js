// Dadas dos matrices bidimensionales del mismo tamaño, queremos escribir una función que devuelva una nueva matriz que sea la suma de las dos matrices dadas.

function sumarMatrices(matriz1, matriz2) {

    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        return "Las matrices no coinciden en tamaño";
    }

    const filas = matriz1.length;
    const columnas = matriz1[0].length;


    //Inicializamos una matriz vacia
    const resultado = new Array(filas).fill(0).map(() => new Array(columnas).fill(0));



    //Sumanos las matrices utilizando un ciclo for
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return resultado;
}

//Operación y salida
const matriz1 = [[1, 2], [3, 4]];
const matriz2 = [[5, 6], [7, 8]];
console.log(sumarMatrices(matriz1, matriz2));

