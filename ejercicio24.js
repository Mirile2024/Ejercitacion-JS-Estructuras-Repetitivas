// 24. Un galpón tiene al comienzo de la jornada una cantidad inicial (Stock inicial) de cajones
// con productos de un solo tipo, luego repetidamente, entran y salen camiones, que traen o
// llevan cantidades de cajones. Si no alcanza la cantidad a llevar, se debe mostrar un mensaje
// “NO ALCANZA”, se lleva todo lo que hay; se muestra lo que se lleva y el galpón queda vacío.
// Se muestra al final de la jornada cuantos cajones hay en el galpón (Stock final), y cuantos
// cajones ingresaron y cuantos cajones salieron en toda la jornada. Ejemplo:

// ┌─────────────┬───────────┬────────────────┬────────────────┐
// │  Movimiento │  Cantidad │  Stock Inicial │  Stock Final   │
// ├─────────────┼───────────┼────────────────┼────────────────┤
// │ Ingreso     │ 10        │ 50             │ 60             │
// │ Egreso      │ 20        │ 60             │ 40             │
// │ Ingreso     │ 15        │ 40             │ 55             │
// │ Egreso      │ 60        │ 55             │ NO ALCANZA     │
// └─────────────┴───────────┴────────────────┴────────────────┘

const prompt = require('prompt-sync')({ siging: true })
let stockInicial = 100
let stockFinal = 0
let cantidad = 0
let Egreso =0
let Ingreso =0

let valor= 1
    do {
        movimiento= prompt('Ingrese si es; Ingreso o Egreso: ')
        cantidad = parseInt(prompt('Ingrese la cantidad de cajas a mover: '))
        if(movimiento=='Egreso'){
            if(cantidad>stockInicial){
                console.log(`EL STOCK NO ALCANZA, SALEN: ${stockFinal} Y EL GALPON QUEDA VACIO!`);
                stockInicial=0
                Egreso+=cantidad
                stockFinal=0
                            }else{
                stockFinal= stockInicial - cantidad
                stockInicial-=cantidad
                Egreso+=cantidad
            }

            
        }else if(movimiento=='Ingreso'){
            stockFinal= stockInicial + cantidad
            stockInicial+=cantidad
            Ingreso+=cantidad
        }
        console.log(`La cantidad de cajas disponibles en el galpon es de: ${stockFinal}`);
        console.log(`La cantidad de cajas Ingresadas durante la jornada fue de: ${Ingreso}`);
        console.log(`La cantidad de cajas Egresadas durante la jornada fue de: ${Egreso}`);
        valor++
} while (valor<=5);