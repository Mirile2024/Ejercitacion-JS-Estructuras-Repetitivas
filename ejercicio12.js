// 12. Leer 20 números y encontrar el mayor y el menor valor leídos.


let numeroMayor= 0
let numeroMenor= 100
let numero


for (let i = 1; i <=20 ; i++) {
    const numero = Math.round(Math.random()*100)
    console.log(numero);
    if (numero > numeroMayor){
        numeroMayor = numero
    }else if( numero < numeroMenor){
        numeroMenor= numero
    }

}
console.log(`Numero Mayor: ${numeroMayor}`);
console.log(`Numero Menor: ${numeroMenor}`);