//Ejemplo de clases.


//Creamos la clase Persona
class Persona {
    constructor(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    // Método para establecer nombre
    establecerNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }


    // Método para obtner el nombre
    obtenerNombre() {
        return this.nombre
    }

    // Método para establecer la edad
    establecerEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }

    // Método para obtener la edad
    obtenerEdad() {
        return this.edad;

    }

    // Método para establecer país
    establecerPais(nuevoPais) {
        this.pais = nuevoPais
    }


    // Método para obtener país
    obtenerPais() {
        return this.pais;
    }
}


// Ahora creamos una persona, o sea instanciamos la clase persona
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Carlos Alberto', 55);
const persona3 = new Persona('Roberto Pérez', 60);
const persona4 = new Persona ('Fernand Hanser', 30 , 'Guatemala')

console.log (persona1);
console.log (persona2);
console.log (persona3);
console.log (persona4);



