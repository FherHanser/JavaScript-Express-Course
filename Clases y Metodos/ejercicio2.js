// Aumentaremos el nivel agregando un método para saludar a la persona y otro método para verificar si es mayor de edad.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Métodos
    establecerNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    obtenerNombre() {
        return this.nombre;

    }

    establecerEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }

    obtenerEdad() {
        return this.edad;
    }

    saludar (){
        console.log(`¡Hola! Soy ${this.nombre}, mucho gusto!, tengo ${this.edad} años`);

    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return "y soy mayor de edad."
        } else {
            return "y soy menor de edad."
        }
    }

}


//Instanciando personas.
const persona1 = new Persona('Fernand Hanser', 35);
persona1.saludar();
console.log (persona1.esMayorDeEdad());


const persona2 = new Persona('André Hanser', 9);
persona2.saludar();
console.log (persona2.esMayorDeEdad());




