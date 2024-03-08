//Implementar una pila (stack)

class Stack {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if (this.items.length === 0) {
            return "La pila está vacía";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

// Ejemplo de uso:
const pila = new Stack();
pila.push(1);
pila.push(2);
pila.push(3);

console.log(pila.pop()); // Debería imprimir 3
console.log(pila.peek()); // Debería imprimir 2
