// Ahora creamos una función llamada esPalindromo que verifique si una cadena es un palíndromo.

function esPalindromo(cadena) {
    const cadenaProcesada = cadena.toLowerCase().replace(/\s/g, '');
    return cadenaProcesada === cadenaProcesada.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("JavaScript"));

