//Prueba de codigo
let desconocido:unknown= "Pablo";
if (typeof(desconocido)== "string") {
  console.log(desconocido.toUpperCase());
}

let hola:string|undefined = undefined;
hola="Hola Mundo";console.log(hola.toUpperCase());

let cualquierCosa:any = "Pablo";
cualquierCosa=1;console.log(cualquierCosa);

let booleano:boolean = true; console.log(booleano);
let edad= 18; console.log(`Hola eres ${edad==18?'Mayor':'Menor'}`);

function nombre():string{return "Pablo";}
console.log(`Hola ${nombre()}`);

//Puerta logica AND,OR Y NOT
console.log(true&&false); console.log(true||true);

//Operaciones aritmeticas
console.log(10*3); console.log(9/3); console.log(10**3);

//Incremento y Decremento de variables
console.log(++edad , --edad);

//Interfaz del Usuario
interface Usuario {
  nombre:string;edad:number;dni:string;
}
