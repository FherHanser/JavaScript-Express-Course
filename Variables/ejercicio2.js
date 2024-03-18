

function personaData(nombre, apellido, edad) {
    var nombre = prompt("Ingresa el nombre: ");
    var apellido = prompt("Ingresa el apellido: ");
    var edad = prompt("edad: ");

    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad

    };
}

var datosPersona = personaData();

alert(
    "Nombre: " + datosPersona.nombre +
    "\nApelliado: " + datosPersona.apellido +
    "\nEdad: " + datosPersona.edad);

console.log("Nombre: " + datosPersona.nombre);
console.log("Apellido: " + datosPersona.apellido);
console.log("Edad: " + datosPersona.edad);




