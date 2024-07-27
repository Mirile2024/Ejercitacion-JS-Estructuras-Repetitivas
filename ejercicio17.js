// 17. Un ciclista recorre diariamente 200 kilómetros en su práctica competitiva. El atleta solicita un
// algoritmo que le permita registrar el tiempo empleado en cada recorrido, al final del proceso el
// algoritmo debería mostrar el promedio de los tiempos empleados. También necesita saber cuántas
// veces su tiempo fue menor a valor dado y cuál fue su mejor tiempo realizado.
const prompt = require('prompt-sync')({ siging: true })
let kmRecorridos = 200
let min = 30 //kilometros po hora minimo (velocidad)
let max = 50 //kilometros po hora maximo (velocidad)
let mejortiempo = 10000
let promedio = 0
let tiempoDiario
    for (let i = 1; i <= 5; i++){
    let kmhora = parseInt(prompt('Ingrese los km realizados: '))
        tiempoDiario = kmRecorridos * 60 / kmhora
        console.log(`A una velocidad de ${kmhora}km/h, el tiempo empleado fue de ${Math.floor(tiempoDiario)} minutos en realizar los ${kmRecorridos} km`);
        promedio += tiempoDiario
        if ( mejortiempo >tiempoDiario){
            mejortiempo = tiempoDiario
        }
    }
console.log(`El promedio de los tiempos empleados fue de ${Math.floor(promedio / 5)} minutos`);
console.log(`El mejor de los tiempos empleados fue de ${Math.floor(mejortiempo)} minutos`);
