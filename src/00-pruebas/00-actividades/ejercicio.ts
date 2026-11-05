interface Equipos {equipo1:string;equipo2:string}
interface Futbol {g1:number;g2:number;equipo:Equipos;}
class Equipooo implements Futbol {
    g1:number;
    g2:number;
    equipo: Equipos;
    constructor(g1:number,g2:number, equipo:Equipos) {
        this.g1 = g1;
        this.g2= g2;
        this.equipo= equipo;
    }
}
type F1 = Partial<Equipooo>
let partido1:F1 = {g1:2,g2:1,equipo:{equipo1:"Real Madrid",equipo2:"BARCELONA"}};
console.log(partido1.equipo?.equipo1,partido1.g1,partido1.g2,partido1.equipo?.equipo2)