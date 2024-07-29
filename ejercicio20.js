// 20. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. Diseñe un algoritmo
 //que lea por cada cliente, el monto total de su compra. Al final del día que escriba la cantidad total de 
 //ventas y el número de clientes atendidos.
 const prompt = require('prompt-sync')({ siging: true })

 let clientes =0
 let compras = 0
 let totalClientes = 0
 let totalVentas = 0
 do {
    compras = parseInt(prompt('Total compras: '))
    totalVentas+=compras
    totalClientes++
 } while (compras >0)
 console.log(`el total de compras es: ${totalVentas} y el total de clientes fue de:${totalClientes-1} durante el dia de hoy`);