//Creamos la clase expendiente
class Expendiente {readonly numero:number;nombre:string;notas:number;
    constructor(numero:number,nombre:string,notas:number) {
    this.nombre=nombre; this.numero=numero; this.notas=notas; }
    private static creados = 0;
    static registrar(nombre:string): Expendiente {Expendiente.creados++;
    return new Expendiente(1000+Expendiente.creados,nombre,1);}
    get total() {return `Valor del contador ${Expendiente.creados}`}
    /*anadirNota(notas:number) {
        if(notasss < 0) {
            return `No se puede introducir la nota`
        }
    }
    static get media() {
        this.creados;    
    }
    static get calificacion() {
        if(notasss >= 9 ) {
            return 
        }
    }*/       
}
console.log(Expendiente.registrar("Ana Serrano"))