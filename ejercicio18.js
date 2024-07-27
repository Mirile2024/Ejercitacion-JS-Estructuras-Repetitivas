// 18. Un censista recopila ciertos datos aplicando encuestas para el último Censo Nacional de Población y
// Vivienda. Desea procesar los datos de todas las personas que alcance a encuestar en un día y
// obtener los porcentajes de estudios de niveles primario, secundario, superior no universitario,
// universitario y de postgrado.

const prompt = require('prompt-sync')({ siging: true }) 
        // nivel_primario = 1
        // nivel_secundario = 2
        // nivel_superior = 3
        // nivel_universitario = 4
        // nivel_postgrado = 5

let cant_primario=0
let cant_secundario=0
let cant_superior=0
let cant_universitario=0
let cant_postgrado=0
let cantidad = 5
let encuestados =0
do {
    nombreIngresado = parseInt(prompt(`Ingrese Nombre de la persona censada: `))
    nivelIngresado = parseInt(prompt(`Ingrese nivel de estudio: `))
    encuestados++
    if (nivelIngresado == 1){
        cant_primario++
    }else if (nivelIngresado == 2){
        cant_secundario++
    }else if (nivelIngresado == 3){
        cant_superior++
    }else if (nivelIngresado == 4){
        cant_universitario++
    }else if (nivelIngresado == 5){
        cant_postgrado++
    }
    cantidad--
} while (cantidad > 0);

console.log(`El porcentaje de nivel de estudio Primario es de: ${Math.floor((cant_primario * 100)/ encuestados)}%`);
console.log(`El porcentaje de nivel de estudio Secundario es de: ${Math.floor((cant_secundario * 100)/ encuestados)}%`);
console.log(`El porcentaje de nivel de estudio Superior es de: ${Math.floor((cant_superior * 100)/ encuestados)}%`);
console.log(`El porcentaje de nivel de estudio Universitario es de: ${Math.floor((cant_universitario * 100)/ encuestados)}%`);
console.log(`El porcentaje de nivel de estudio Posgrado es de: ${Math.floor((cant_postgrado * 100)/ encuestados)}%`);
