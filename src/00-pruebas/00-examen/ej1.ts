interface Facturable { calcularImporte(): number, ficha(): string };
type EstadoReparacion = "recibida"|"en_reparacion"|"terminada"|"entregada";
abstract class Reparacion {
    public estado:EstadoReparacion = "recibida";
    constructor(public id: number, public cliente: string, public modelo: string) 
    {}
    public cambiarEstado(nuevo: EstadoReparacion): void {
        this.estado = nuevo;
    }
    abstract calcularImporte(): number;
    public ficha(id: string, nombre: string,) {
        console.log(`"#${this.id}, ${this.cliente} - ${this.modelo}- ${this.calcularImporte} - ${this.estado}`);
    }
}

class ResolucionPantalla extends Reparacion {
    private precioPieza: number;
    private urgente: boolean;

    constructor(precioPieza: number, urgente: boolean) {
        super();
        this.precioPieza = precioPieza;
        this.urgente = urgente
    };
    override calcularImporte(manoObra = 30, calcular: number): number {
        calcular = this.precioPieza + manoObra;
        if (this.urgente === true) {
            calcular + 15;
        }
        return calcular;
    }
    public override ficha(id: string, nombre: string): void {
        if (this.urgente == true) {
            console.log(`"#${this.id}, ${this.cliente} - ${this.modelo}- ${this.calcularImporte} - ${this.estado}- URGENTE`);
        }else {
            console.log(`"#${this.id}, ${this.cliente} - ${this.modelo}- ${this.calcularImporte} - ${this.estado}`);
        }
    }
}

type Reparacion = {cliente:string,modelo:string,precioPieza:number,urgente:boolean};

public class static GestionTaller extends  {
    private static reparaciones:Reparacion[];
    private ultimold = 0;
    
    public registrar(Reparacion[]) {
        
    }
    public listar(CopiaArray[]) {
        const CopiaArray = [...Reparacion];
    }
    public buscar(id) {
        if("id" != undefined) {
            true;
        };else {
            false;
        }
    }
    public cambiarEstado(id,nuevo) {
        if(id === true) {
            true;
        }else {
            false;
        }
    }
    public porEstado(estado) {
        return estado;
    }
    public totalFacturado(suma) {
        return suma
    }
}

let p1: Reparacion = [1, "Ana", "iPhone 13", "recibida", 95];
console.log(p1.id)