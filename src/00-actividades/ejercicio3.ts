function calificar(nota: number): string {
  if (nota < 0 || nota > 10) {
    return "Nota no válida";
  } else if (nota >= 9) {
    return "Sobresaliente";
  } else if (nota >= 7) {
    return "Notable";
  } else if (nota >= 6) {
    return "Bien";
  } else if (nota >= 5) {
    return "Suficiente";
  } else {
    return "Insuficiente";
  }
}
const notass: number[] = [10, 8.5, 6.2, 5, 3.4, 11];  
for (const nota of notass) {
    console.log(`${nota} -> ${calificar(nota)}`)
}

const meses: number [] = [6,9,12];
for (const mes of meses) {
switch (mes) {
    case 1:case 2:case 3:
        console.log(`Mes ${mes} -> 1º evaluacion`);
        break;
    case 4:case 5:case 6:
        console.log(`Mes ${mes} -> Convocatoria ordinaria`)
        break;
    case 7:case 8:case 9:
        console.log(`Mes ${mes} -> Convocatoria extraordinaria`)
        break;
    default:
        console.log(`Mes ${mes} -> Sin convocatoria este mes`)
        break;
    }   
}

let aprobados1= 0; let suspensos1= 0;
for (const nota of notass) {
    if (nota < 0 || nota > 10 ) {continue;}
    if (nota >=5) {aprobados1++;} else {suspensos1++;}
}
console.log(`Aprobados: ${aprobados1} | Suspensos: ${suspensos1}`);

let array2:number [] = [4,5,10,6,10];
for (const [posicion,valor] of array2.entries()) {
    if (valor == 10) {
         console.log(`Primer 10 en la posicion ${posicion}`)
        break;
    }
}