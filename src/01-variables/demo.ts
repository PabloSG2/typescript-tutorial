//Prueba de codigo
let desconocido:unknown= "Pablo";
if (typeof(desconocido)== "string") {
  console.log(desconocido.toUpperCase());
}

let hola:string|undefined = undefined;
hola="Hola Mundo";console.log(hola.toUpperCase());
let booleano:boolean = true; console.log(booleano);
function nombre():string{return "Pablo";} console.log(`Hola ${nombre()}`);
let edad= 18; console.log(`${edad>=18? 'Mayor edad' : 'menor edad'}`);

let cualquierCosa:any = "Pablo";
cualquierCosa=1;console.log(cualquierCosa);

//Puerta logica AND,OR Y NOT
console.log(true&&false); console.log(true||true);

//Operaciones aritmeticas, decremento y incremento
console.log(10*3); console.log(9/3); console.log(10**3);
console.log(++edad , --edad);

//Interfaz del Usuario
interface Usuario {
  nombre:string;edad:number;dni?:string;
}

//Usuario en array
type Usuario1 = { nombre: string; direccion?: { ciudad: string }};
const u2: Usuario1= { nombre: "Ana", direccion: { ciudad: "Cadiz"}};
const u3: Usuario1= { nombre: "Luis"};
console.log(`Direccion de Ana ${u2.direccion?.ciudad || "no se conoce"}`);
console.log(`Direccion de Jose ${u3.direccion?.ciudad ?? "no se conoce"}`);

//Copiamos numeros a numeros_copy que se muestran igual
let numeros = [1,2,3,4,5,6]; let numeros_copy = [...numeros];
console.log(numeros_copy)

//Unimos personas y luego la metemos en un mismo array que se muestra
let p1= {nombre:"Pablo", apellidos:"SG"}
let p1_contacto = {...p1,email:"pablo"}; console.log(p1_contacto)
let p2= {nombre: "Manuel", apellidos:"Sanchez"}; let personas= [p1,p2];
let nuevas_personas = [...personas, {nombre: "Pepe", apellidos:"Lara"}];
console.log(nuevas_personas)

//Ejemplo de mostrar las variables 
let {nombre:variable_nombre,apellidos:variable_apellido} = p1
console.log(p1);

//Ejemplo de los dias de la semana con switch
let dia_semana:number = 8;
switch (dia_semana) {
  case 1:
    console.log("Es 1");
    break;
  default:
    console.log("Otros");
    break;
}

//Ejemplo for con valor e indice (in y on)
for (const indice in numeros) {
  console.log(`Indice: ${indice} - Valor: ${numeros[indice]}`);
}
for (const valor of numeros) {console.log(valor);}

//Ejemplo for con multiplo de 2
for (const valor of numeros) { 
 if(valor%2==0) {console.log(valor)}
 else {
  continue; //si ponemos break coje solo el primero
  } 
}

//Uso de array tridimensionales,
let array:number[]=[1,2,3,4,5,6]; 
let array1:(string|number)[][]=[[1,"dos","tres",4,5], ["seis",7, "ocho"]];
console.log(array); console.log(array1);

//Copia de los nombres
let nuevas_personas1: Usuario[] =  []
for(const p of nuevas_personas1) {
  nuevas_personas1.push({...p})
} console.log(nuevas_personas);

//Split, sort,push, pop, unshift, shift
let frutas = ["pera", "naranja"]; 
frutas.push("tomate"); //pone numero final
frutas.unshift("sandia"); //al principio
console.log(frutas)
frutas.shift() //quita el primero
console.log(frutas)

//Array para encontrarlo
console.log(`La pera se encuentra en la posición: ${frutas.indexOf("pera")}`);
console.log(`El tomate está en el array: ${frutas.includes("tomate")}`);
console.log(frutas.find((valor:string)=>{return valor.length>=3}))
frutas.forEach((valor:string)=>{console.log(valor)})