//Creamos y mostramos la media del grupo
const notaaa:number[] = [7,4.5,9.25,6,3,8,10,5.5];
const sumaaa = notaaa.reduce((acumulador, nota) => acumulador + nota, 0);
const media = (sumaaa / notaaa.length).toFixed(2);
console.log(`Media del grupo: ${media}`);

//Maxima y minima, aprobados y suspensos
const max= Math.max(...notaaa); const min= Math.min(...notaaa);
console.log(`Máxima ${max} | Mínima: ${min}`);
const apr = notaaa.filter((n) => n >= 5); const sus = notaaa.filter((n) => n < 5);
console.log(`Aprobados ${apr.length} | Mínima: ${sus.length}`);

//Porcentaje de aprobados
const porcentaje = (apr.length / notaaa.length) *100;
console.log(`Porcentaje de aprobados: ${porcentaje.toFixed(1)}%`)

//Mostrar sumamos 0.5 a todos los numeros y lista principal
const sumarmas = notaaa.map(n => Math.min(n + 0.5, 10));
console.log("Con +0,5 ->", sumarmas); console.log("Original ->", notaaa);

//Recuento de datos y top 3
const recuento = {Sobresaliente: 0, Notable: 0, Suficiente:0, Insucifiente: 0};
for(const n of notaaa) {
    if(n>=9) {recuento.Sobresaliente++;
    }if(n>=7) {recuento.Notable++;
    }if(n>=5) {recuento.Suficiente++;
    }else {recuento.Insucifiente++;}
}
console.log("Reecuento ->",recuento)

const top3 = [...notaaa].sort((a, b) => b - a).slice(0, 3).join(",,");
console.log("Top 3->",top3)