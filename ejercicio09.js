// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.

// 1 * 1 
// 2 * 2 
// 3 * 6 
// 4 * 24 
// 5 * 120
// 6 * 720 
const prompt = require('prompt-sync')({ siging: true }) 

let A = parseInt(prompt('Ingrese Valor: '))
if (A < 0) {
    A *= -1
  }

for (let i= 1; i<=A; i++){
let factorial= 1
let valor= 1
while ( valor<=i ) {
    factorial = factorial * valor
    valor++
  }
  console.log(i + " = " + factorial);
}
// como solucionar esto (22 = 1.1240007277776077e+21)