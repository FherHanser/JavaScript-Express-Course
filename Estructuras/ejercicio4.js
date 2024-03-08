// Implementar un conjunto (set).

class Set {
    constructor() {
        this.items = {};
    }

    agregar(elemento) {
        if (!this.esMiembro(elemento)) {
            this.items[elemento] = elemento;
            return true;
        }
        return false;
    }

    eliminar(elemento) {
        if (this.esMiembro(elemento)) {
            delete this.items[elemento];
            return true;
        }
        return false;
    }

    esMiembro(elemento) {
        return this.items.hasOwnProperty(elemento);
    }

    obtenerTamano() {
        return Object.keys(this.items).length;
    }
}

// Ejemplo de uso:
const conjunto = new Set();
console.log(conjunto.agregar(1)); // Debería imprimir true
console.log(conjunto.agregar(2)); // Debería imprimir true
console.log(conjunto.agregar(1)); // Debería imprimir false (ya existe)
console.log(conjunto.obtenerTamano()); // Debería imprimir 2
console.log(conjunto.eliminar(1)); // Debería imprimir true
console.log(conjunto.eliminar(3)); // Debería imprimir false (no existe)
console.log(conjunto.obtenerTamano()); // Debería imprimir 1
