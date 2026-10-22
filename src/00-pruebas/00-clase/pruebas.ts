import { log } from "console"; //Esto lo pone manualmente al poner dev

//Definimos los tipos de cada uno
type Direccion = {calle:string, numero:number}
type Personaa = {nombree:string, apellidoss:string,direccion:Direccion}
let per1 = {nombree:"Pablo", apellidoss:"SG", direccion:{calle:"A",numero:1}}
console.log(per1); let {nombree,apellidoss} = per1; console.log(apellidoss);

//ENUM de dia y estados
enum DIAA {Lunes=1,Martes=2,Miercoles=3,Jueves=4,Viernes=5,Sabado=6,Domingo=7}
console.log(`Día sin posición: `+DIAA.Lunes, `Día con posición: `+DIAA[1]);

enum EstadoPedido {Pendiente,Proceso} type statusPedido="PENDIENTE"|"PROCESO"; 
let estado:EstadoPedido = EstadoPedido.Pendiente; console.log(estado);
let estado2:statusPedido = "PROCESO"; console.log(estado2)

//INTERFAZ Usuario necesita en let:Usuario, con eso email ya coje lo que tiene
type EMAIL = `${string}@${"gmail"|"outlook"|"hotmail"}.${"es"|"com"}`
interface USUARIO {readonly id:number,nombreee:string,emaail:EMAIL
    edad:number, esMayorEdad:(edad:number) =>void;
}
let u1:USUARIO = {id:1,nombreee:"Pablo",edad:18,emaail:"pablo@gmail.com",esMayorEdad:()=> {console.log(`${u1.edad>18?'Es mayor de edad':'Es menor de edad'}`)}}; 
//u1.esMayorEdad(); console.log(u1)

//Clases, constructor
class Coche {marca:string;modelo:string;kilometros:number;color:string="Rojo";
    constructor(marca:string,modelo:string,km:number,color:string){
        this.marca= marca;this.modelo= modelo;
        this.kilometros= km;this.color= color;
    }
    /*Lo que realiza es hacer tanto la definicion de atributos como constructor
    constructor(public marca:string,public modelo:string,public km:number,
    public color:string{}*/
    conducir() {
        this.kilometros++;
    }

    get getMarca() {return this.marca;}
    set setMarca(marca:string) {this.marca=marca;}
    toString() {console.log(`${this.marca} ${this.modelo} ${this.kilometros} ${this.color} `)}

    static calcularAnyoMatricula(matricula:string):number {
        let letra = matricula[-1];
        switch(letra) {case 'A': return 2000;break;
            case 'B': return 2002;break; default: return 0;}}
}
let c1 = new Coche("Seat","Toledo",220000,"gris")
c1.toString(); c1.conducir(); c1.toString();
Coche.calcularAnyoMatricula("2564353A");

//Clase con static
class Utilidades {static suma(a:number,b:number){return a+b}}
let res= Utilidades.suma(1,2); console.log(`Suma: `+res)

/*Herencias
class CocheElectrico extends Coche {
    constructor(public marca:string,private modelo:string,private km:number,
    protected color:string){
        super()
    }
}
*/