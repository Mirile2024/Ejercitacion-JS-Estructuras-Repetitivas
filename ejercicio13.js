// 13. Escribir un programa que lea valores enteros hasta que se introduzca un 0 y calcule la media de los
// positivos y la media de los negativos


const prompt = require('prompt-sync')({ siging: true })
  

let positivo =0
let negativo =0
let sumaPositivo =0
let sumaNegativo =0
do {
 numeroIngresado = parseInt(prompt('Ingrese Valor: '))
  if( numeroIngresado > 0){
    sumaPositivo += numeroIngresado
    positivo++
  }
  if(numeroIngresado < 0){
    sumaNegativo += numeroIngresado
    negativo++
  }
} while (numeroIngresado != 0);
console.log(`la media de los positivos es : ${sumaPositivo/ positivo}  `);
console.log(`la media de los negativo es : ${sumaNegativo/ negativo}  `);