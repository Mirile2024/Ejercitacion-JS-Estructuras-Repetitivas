// 16. En 1994 el país A tiene una población de 25 millones de habitantes y el país B de 19.9 millones. Las
// tasas de crecimiento de la población son de 2% y 3% respectivamente. Desarrollar un algoritmo para
// informar en que año la población del país B supera a la de A.

const prompt = require('prompt-sync')({ siging: true })

let A = 25000000
let B = 19900000
let año = 1994

do {
    A=(A*(2/100)+A);
    console.log(Math.floor(A));
    B=(B*(3/100)+B);
    console.log(Math.floor(B));
    año++
    console.log(año);
    
} while (B < A);
console.log(`En el año ${año} la poblacion de B va a superar a A con ${Math.floor(B)} de habitantes`);

