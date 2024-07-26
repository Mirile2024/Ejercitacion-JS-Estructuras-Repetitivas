// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.
const prompt = require('prompt-sync')({ siging: true }) 

// 10 % 3 = 1
// 10-3-3-3 = 1
let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let resto = 0
if (B < 0) {
    B *= -1
  }
  if (A < 0) {
    A *= -1
  }
  
while (A >= B) {
  A = A - B
  resto++
  console.log(`el resultado de la division es: ${A}`)
}
    console.log(`El resto de la division es: ${A}`)

