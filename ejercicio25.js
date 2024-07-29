// 25. Un autobús hace un recorrido por una ciudad desde un punto inicial donde suben N personas hasta
// un punto final donde descienden todas. El autobús realiza X paradas intermedias. Se sabe que en las
// paradas intermedias suben siempre 3 personas más que en la parada anterior y que desciende el
// 50% de la gente del autobús (sin contar los que suben en dicha parada). ¿Cuántas personas llegarán
// hasta el final del trayecto? Pedir al usuario los valores de N y X. Por ejemplo, para N = 10 y X = 3:

// ┌──────────────┬────────────┬─────────────────────────┬─────────────────────────┐
// │  Parada N°   │ Suben      │ Bajan                   │ Quedan en el autobús    │
// ├──────────────┼────────────┼─────────────────────────┼─────────────────────────┤
// │ Inicial      │ 10         │ -                       │ 10                      │
// │ 1            │ 3          │ 5                       │ 8                       │
// │ 2            │ 6          │ 4                       │ 10                       │
// │ 3            │ 9          │ 5                       │ 14                       │
// │ Final        │ -          │ -                       │ 14                       │
// └──────────────┴────────────┴─────────────────────────┴─────────────────────────┘


    let Suben = 0
    let Bajan = 0
    let totalPersonas = 0
    let n = parseInt(prompt(`Ingrese cant. de personas que suben: `))
    let x = parseInt(prompt(`Ingrese cant. de paradas intermedias : `))
    totalPersonas+=n
    console.log(`Suben ${n} personas`); //x unica vez

    
    for (i =0; i<x; i++){
        Suben+= 3
        Bajan = totalPersonas/2 
        totalPersonas= Bajan + Suben
    
        console.log(`Suben ${Suben} personas en la parada Nº ${i+1}`);
        console.log(`Bajan ${Bajan} personas en la parada Nº ${i+1}`);
        console.log(`En el autobus hay unas ${totalPersonas} personas`);
        }
        console.log(`En el final del trayecto quedan ${totalPersonas} en el Autobus`);