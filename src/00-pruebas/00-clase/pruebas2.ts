/*interface ICoche {marca:string,modelo:string,color:string}

class Cochee implements ICoche {
    constructor(public marcaa:string,public modeloo:string,
        public color:string,private bastidor:string,public matricula:string,
        protected propietario:string){
    }
    arrancar() {
        return `Arrancando el ${this.marcaa} ${this.modeloo} con nmatricula ${this.matricula}`
    }
}
class CocheElectrico extends Cochee {
    constructor(marcaa:string,modeloo:string,color:string,
        bastidor:string,matricula:string,propietario:string){
        super(marcaa,modeloo,color,bastidor,matricula,propietario)
    }
    get getPropietario() {
        return this.propietario;
    }
}

class CocheCombustion extends Cochee {
    onstructor(marcaa:string,modeloo:string,color:string,
        bastidor:string,matricula:string,propietario:string,km:number){
        super(marcaa,modeloo,color,bastidor,matricula,propietario,km)
    }
}
let c111 = new Cochee("Seat","Leon","Rojo","485489A8","7896LSZ","Jose Antonio")
console.log(c111.arrancar())*/