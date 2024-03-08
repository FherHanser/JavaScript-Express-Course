let a = 10;
let b = 5;

// Operadores aritméticos
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Operadores de comparación
console.log(a === b); // false
console.log(a !== b); // true
console.log(a > b); // true
console.log(a < b); // false

// Operadores lógicos
console.log((a > 5) && (b < 10)); // true
console.log((a > 5) || (b > 10)); // true
console.log(!(a > 5)); // false

// Operadores de asignación
a += 2;
console.log(a); // 12

// Operador ternario
let resultado = (a > b) ? "a es mayor que b" : "b es mayor o igual que a";
console.log(resultado); // a es mayor que b
