//Creamos Interface
interface Coche{marca:string;modelo:string;color:string;
bastidor:string;matricula:string;} 
let datosFormNuevo:Coche = {marca:"SEAT",modelo:"TOLEDO",color:"GRIS",
bastidor:"789456aAW", matricula:"7896LSZ"};console.log(datosFormNuevo); 

//PARTIAL: Usa parcialmente los archivos (coje los atributos opcionales)
type FormCoche = Partial<Coche>
let PARTIAL:FormCoche = {color:"GREEN",matricula:"7896LSZ"};console.log(PARTIAL);

//REQUIRED pone todos los atributos en obligatorio igual que PICK
let REQUIRED:Required<Coche> = {marca:"FERRARI",modelo:"2",color:"BLACK",
bastidor:"789456aAW",matricula:"7896LSZ"};console.log(REQUIRED);
type FormCoche2 = Pick<Coche,"color"|"matricula">
let PICK:FormCoche2 = {color:"GREEN",matricula:"121212"};console.log(PICK);

//Omit quita de elegir bastidor
type datosCoche = Omit<Coche, "bastidor"> 

//Pruebas
let Required1:Required<Coche> = {marca:"BMW",modelo:"ASTERO",color:"YELLOW",
bastidor:"789456aAW",matricula:"7896LSZ"};console.log(Required1);
let Partial1:Partial<Coche>={color:"AZUL",matricula:"7896LSZ"};console.log(Partial1);

function getCoche() {
    let datosAPI:Coche = {bastidor:"8",color:"a",marca:"a",modelo:"a",
    matricula:"3233"}; let {bastidor,...otrosDatos} = datosAPI
    return otrosDatos;}console.log(getCoche())