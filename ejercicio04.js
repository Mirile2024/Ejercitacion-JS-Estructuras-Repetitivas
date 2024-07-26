// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000
for (let i = 2; i <= 1000; i++) 
    { let pares = i  % 2 ; console.log(`${i} - ${pares}`); }
// if (impares === 0){
//     console.log('Impares');
// }

 console.log("\nNúmeros pares del 2 al 1000:"); for (let i = 2; i <= 1000; i += 2) { console.log(i); }

// PROBAR SI ANDA!!