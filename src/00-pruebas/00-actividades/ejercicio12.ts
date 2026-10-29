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
        }
    }
    get historial() {
        return [...this.notas]
    }
}
console.log(Expendiente.registrar("Ana Serrano"))
let a21 = Expendiente.registrar("Pablo")