// Convertir un número a su representación en palabras.


class ConversorNumeros{
    constructor() {
        this.unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        this.decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        this.especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
        this.centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
    }

    convertirANombre(numero) {
        if (numero === 0) return 'cero';
        if (numero < 10) return this.unidades[numero];
        if (numero < 20) return this.especiales[numero - 10];
        if (numero < 100) return this.decenas[Math.floor(numero / 10)] + ' ' + this.unidades[numero % 10];
        if (numero < 1000) return this.centenas[Math.floor(numero / 100)] + ' ' + this.convertirANombre(numero % 100);
        if (numero < 1000000) return this.convertirANombre(Math.floor(numero / 1000)) + ' mil ' + this.convertirANombre(numero % 1000);
        return 'Número demasiado grande';
    }
}

// Ejemplo de uso:
const conversor = new ConversorNumeros();

console.log(conversor.convertirANombre(123)); 
console.log(conversor.convertirANombre(5678));
console.log(conversor.convertirANombre(100));




