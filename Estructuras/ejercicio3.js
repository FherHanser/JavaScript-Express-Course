// Verificar si una cadena es un palíndromo

function esPalindromo(cadena) {

    const cadenaProcesada = cadena.toLowerCase().replace(/\s/g, '');


    return cadenaProcesada === cadenaProcesada.split('').reverse().join('');

}


const cadena = "Anita lava la tina";
console.log(esPalindromo(cadena));