// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.
// A ^ B = A*A*A*A (B veces) = B*B*B*B (A veces)
// 2 ^ 5 = 2**2**2**2**2
// 2 ^ 5 = 5*5
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let multiplicacion = 0
let negativo = false
// Lógica opcional para que se multiplique la menor cantidad de veces
if (B < 0) {
  B *= -1
  negativo = !negativo

}
if (A < 0) {
  A *= -1
  negativo = !negativo
}
if (B > A) {
    // Intercambio de los valores de las variables [A, B] = [B, A]
    const aux = B
    B = A
    A = aux
  }
let resultado=A
let ciclo =--B
for (let i = 0; i < ciclo; i++) {
    // multiplicacion += A
    multiplicacion = resultado * A
    console.log({ multiplicacion })
    resultado= multiplicacion
  }
  // es indistinto poner esto
  if( 'A' * 'B' ){
    console.log(multiplicacion);
}
