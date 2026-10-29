//Creamos la clase expendiente
class Expendiente {
    private static creados = 0;
    constructor(public readonly numero: number, public nombre: string, private notas: number[]) {
        this.nombre = nombre; this.numero = numero; this.notas = notas;
    }
    static registrar(nombre:string) {
        this.creados++;
        return new Expendiente(1000+this.creados, nombre,[]);
    }
    static get total() { 
        return `Valor del contador ${Expendiente.creados}` 
    }
    anadirNota(nota:number) {
        if(nota < 0 || nota > 10) {
            throw new Error("Nota inválida");
        }else{
            this.notas.push(nota)
        }
    }
    get media():number {
        //Para decimal: Number((this.notas.reduce
        //((previa,act)=>previa+=act, 0)/this.notas.length).toFixed(2));
        return this.notas.reduce((previa,act)=>{return previa+=act;})/this.notas.length;
    }
    get Calificacion():string {
        let nota = "Insuficiente"
        if(this.media<5) {
            nota="Insuficiente"
        }else if(this.media>=5){
            nota="Suficiente"
        }else if(this.media>=7){
            nota="Notable"
        }else if(this.media>=9){
            nota="Sobresaliente"
        }return nota;
    }
    get historial() {
        return [...this.notas]
    }
}
//Muestro tanto expediente como nombre, notas y media
let e11 = Expendiente.registrar("Ana Serrano");
e11.anadirNota(8);e11.anadirNota(9.5);e11.anadirNota(7);
console.log(`Expediente ${e11.numero}- ${e11.nombre}`);
console.log(`Notas ${e11.historial}`);
console.log(e11.media);

//Mostramos datos de Luis
let e12 = Expendiente.registrar("Luis Gil");
e12.anadirNota(4);
console.log(`Expediente ${e12.numero}-${e12.nombre}: ${e12.Calificacion}`);

//Expendientes creados
console.log(`Expendiente creados: ${Expendiente.length}`);

//Mostramos nota de mas en Ana 15
try {
    e11.anadirNota(15);
} catch (error: any) {
    console.log("El resultado es:", error.message);
}
const historialAna = e11.historial;
historialAna.push(10); // Modificamos la copia obtenida del getter
console.log(`Historial real tras tocar la copia: ${e11.historial.length}`);

