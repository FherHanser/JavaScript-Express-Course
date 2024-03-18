//Ahora escribiremos una función llamada buscarSumaDosNumeros que reciba un arreglo de números y un objetivo, 
//y devuelva los índices de los dos números que suman ese objetivo.

function buscarSumaDosNumeros(nums, objetivo) {
    const mapa = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complemento = objetivo - nums[i];
        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }
        mapa.set(nums[i], i);
    }
    return null;
}

// Ejemplo de uso:
console.log(buscarSumaDosNumeros([2, 7, 11, 15], 9)); // Debería imprimir [0, 1]
console.log(buscarSumaDosNumeros([3, 2, 4], 6)); // Debería imprimir [1, 2]
