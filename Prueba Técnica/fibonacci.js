//Fibonacci


// Forma 1
function fibonacci(n) {
    if (n <= 1) {

        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

//console.log(fibonacci(8));


/*****************************************************************/


// Forma 2

function fibonacci(n) {
    const secuencia = [0, 1];

    for (let i = 2; i <= n; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }

    return secuencia;
}

console.log(fibonacci(8));




