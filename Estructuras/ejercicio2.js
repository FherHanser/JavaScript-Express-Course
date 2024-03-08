// Implementar una cola (queue)

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

// Ejemplo de uso:
const cola = new Queue();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
console.log(cola.dequeue()); // Debería imprimir 1
console.log(cola.peek()); // Debería imprimir 2
