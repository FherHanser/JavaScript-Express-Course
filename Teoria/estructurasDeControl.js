let calificacion = 85;

if (calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Opción 1 seleccionada");
        break;
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    default:
        console.log("Opción no válida");
}

for (let i = 0; i < 3; i++) {
    console.log("Iteración i " + i);
}

let j = 0;
while (j < 3) {
    console.log("Iteración j " + j);
    j++;
}

let k = 0;
do {
    console.log("Iteración k " + k);
    k++;
} while (k < 5);
