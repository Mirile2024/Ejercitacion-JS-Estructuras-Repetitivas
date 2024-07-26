// 14. Leer 10 valores desde teclado y mostrar la media de los pares y la media de los impares. Hacer tres
// versiones, con un bucle: para, mientras y repetir. Repetir el ejercicio considerando que el número de
// valores se le solicita al usuario.
const prompt = require('prompt-sync')({ siging: true })

let pares =0
let impares =0
let sumaImpares =0
let sumaPares =0
let index = 0
// for (let i = 1; i <=10 ; i++){
//     numeroIngresado = parseInt(prompt('Ingrese Valor: '))
//     if ((numeroIngresado%2) == 0 ){
//         sumaPares += numeroIngresado
//         pares++
//     }
//     if ((numeroIngresado%2) !== 0 ){
//         sumaImpares += numeroIngresado
//         impares++
//     }

// }
// console.log(`la media de los pares es : ${sumaPares/ pares}  `);
// console.log(`la media de los impares es : ${sumaImpares/ impares}  `);


// do { 
//     numeroIngresado = parseInt(prompt('Ingrese Valor: '))
//     if ((numeroIngresado%2) == 0 ){
//         sumaPares += numeroIngresado
//         pares++
//     }
//     if ((numeroIngresado%2) !== 0 ){
//         sumaImpares += numeroIngresado
//         impares++
//     }

//     index++
// } while (index != 10);
// console.log(`la media de los pares es : ${sumaPares/ pares}  `);
// console.log(`la media de los impares es : ${sumaImpares/ impares}  `);
while (index != 10) {
        numeroIngresado = parseInt(prompt('Ingrese Valor: '))
    if ((numeroIngresado%2) == 0 ){
        sumaPares += numeroIngresado
        pares++
    }
    if ((numeroIngresado%2) !== 0 ){
        sumaImpares += numeroIngresado
        impares++
    }

    index++

}
console.log(`la media de los pares es : ${sumaPares/ pares}  `);
console.log(`la media de los impares es : ${sumaImpares/ impares}  `);
