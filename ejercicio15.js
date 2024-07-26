// 15. Escribir un programa que lea números enteros de teclado hasta que encuentre uno que cumpla las
// siguientes condiciones:
// • Múltiplo de 2.
// • No múltiplo de 5.
// • Mayor que 100.
// • Menor que 10.000.

const prompt = require('prompt-sync')({ siging: true })
let N = 1
do {
    numeroIngresado = parseInt(prompt('Ingrese Valor: '))
    if (numeroIngresado%2 == 0) {
        if (numeroIngresado%5 != 0) {
            if (numeroIngresado < 10000) {
                if (numeroIngresado > 100) {
                    console.log(`Este es el numero correcto: ${numeroIngresado}`);
                    N = 0
                }
            }
        }
    }
}while (N == 1);