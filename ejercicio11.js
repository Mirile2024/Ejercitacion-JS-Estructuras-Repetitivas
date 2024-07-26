// 11. Calcular el factorial de 10 números diferentes cuyos valores se leen.
const prompt = require('prompt-sync')({ siging: true }) 



for (let i= 1; i<=10; i++){
    let A = parseInt(prompt('Ingrese Valor: '))
    if (A < 0) {
        A *= -1
    }
    
    let factorial= 1
let valor= 1
while ( valor<=A) {
    factorial = factorial * valor
    valor++
  }
  console.log( 'Numero' + i + "= numero ingresado: " + A + " = Factorial " + factorial);
}
