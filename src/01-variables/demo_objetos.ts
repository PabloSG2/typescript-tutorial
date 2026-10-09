//Parte 1: Objetos normal
type Persona11 = {readonly dni:string, //es para que no se modifique
nombre:string,apellido:string, edad?:number, direccion:string}
let p11:Persona11 = {dni: "000",nombre:"Pablo", apellido: "SG", 
direccion:"Sevilla"};
let p22:Persona11 = {dni: "121",nombre:"Manu", apellido: "SR", edad:18, 
direccion: "Jerez"}; console.log(p11,p22)

//Parte 2 objetos 
type Desarrollador = {nuss:string, categoria:categoria, salario:number};
type Empleado = Persona11 & Desarrollador;
let e1:Empleado ={dni: "000",nombre:"Pablo", apellido: "SG", direccion:"Sevilla",
nuss:"aa",categoria:"junior", salario:3500};console.log(e1);

//Enum que coje por defecto con control+espacio los datos
type categoria = "junior" | "senior" | "leader" | "project manager"
let c11:categoria = "junior"

//Creacion de datos
type DNI =`${string}-${string}`;let d1:DNI = "00000-T";
type URL_ =`http${string}.${'es' | 'com'}`; 
let aa1:URL_ = "http://marca.es";