// 19. Ingrese un valor numérico correspondiente a un mes y a continuación muestre todos los meses en
// letras que restan para llegar a diciembre del mismo año (por ejemplo, si ingresa 10 debe mostrar
// octubre, noviembre y diciembre). Validar que se ingrese un número de mes válido y el proceso
// finaliza cuando el operador ingresa el valor cero. Muestre también los valores correctos e
// incorrectos ingresados por el usuario.

const prompt = require('prompt-sync')({ siging: true })

let mes = parseInt(prompt('ingrese Mes: '))
do {
    if(mes!=0){
        for(i=mes; i<=12;i++){
            let nombreMes
            switch (mes) {
                case 1:
                    nombreMes = 'Enero';
        
                    break;
                case 2:
                    nombreMes = 'Febrero';
        
                    break;
                case 3:
                    nombreMes = 'Marzo'
        
                    break;
                case 4:
                    nombreMes = 'Abril'
        
                    break;
                case 5:
                    nombreMes = 'Mayo'
        
                    break;
                case 6:
                    nombreMes = 'Junio'
        
                    break;
                case 7:
                    nombreMes = 'Julio'
        
                    break;
                case 8:
                    nombreMes = 'Agosto'
        
                    break;
                case 9:
                    nombreMes = 'Septiembre'
        
                    break;
                case 10:
                    nombreMes = 'Octubre'
        
                    break;
                case 11:
                    nombreMes = 'Noviembre'
        
                    break;
                case 12:
                    nombreMes = 'Diciembre'
        
                    break;
        
                default:
                    nombreMes = 'Mes Invalido'
                    break;
            }
            mes++
            console.log(nombreMes);
        }
    }else{
    console.log(`El numero de mes ingresado es invalido`);
    }   
    mes=0
} while (mes !=0);
