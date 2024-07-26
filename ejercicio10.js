// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...
const prompt = require('prompt-sync')({ siging: true }) 
let A = 0
let B = 1
let Fibonacci= 0
for (let i = 0; i <= 100;i++) {
    Fibonacci= A + B
    console.log(A + ' + ' + B + ' = ' + Fibonacci );
    A = B 
    B = Fibonacci
}