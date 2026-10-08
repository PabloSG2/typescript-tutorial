//Prueba de codigo
let desconocido: unknown = "Pablo";
if (typeof (desconocido) == "string") {
  console.log(desconocido.toUpperCase());
}

let hola: string | undefined = undefined;
hola = "Hola Mundo"; console.log(hola.toUpperCase());
let booleano: boolean = true; console.log(booleano);
function nombre(): string { return "Pablo"; } console.log(`Hola ${nombre()}`);
let edad = 18; console.log(`${edad >= 18 ? 'Mayor edad' : 'menor edad'}`);

let cualquierCosa: any = "Pablo";
cualquierCosa = 1; console.log(cualquierCosa);

//Puerta logica AND,OR Y NOT
console.log(true && false); console.log(true || true);

//Operaciones aritmeticas, decremento y incremento
console.log(10 * 3, 9 / 3, 10 ** 3); console.log(++edad, --edad);

//Interfaz del Usuario
interface Usuario {nombre: string; edad: number; dni?: string;}

//Usuario en array
type Usuario1 = { nombre: string; direccion?: { ciudad: string } };
const u2: Usuario1 = { nombre: "Ana", direccion: { ciudad: "Cadiz" } };
const u3: Usuario1 = { nombre: "Luis" };
console.log(`Direccion de Ana ${u2.direccion?.ciudad || "no se conoce"}`);
console.log(`Direccion de Jose ${u3.direccion?.ciudad ?? "no se conoce"}`);

//Copiamos numeros a numeros_copy que se muestran igual
let numeros = [1, 2, 3, 4, 5, 6]; let numeros_copy = [...numeros];
console.log(numeros_copy)

//Unimos personas y luego la metemos en un mismo array que se muestra
let p1 = { nombre: "Pablo", apellidos: "SG" }
let p1_contacto = { ...p1, email: "pablo" }; console.log(p1_contacto)
let p2 = { nombre: "Manuel", apellidos: "Sanchez" }; let personas = [p1, p2];
let nuevas_personas = [...personas, { nombre: "Pepe", apellidos: "Lara" }];
console.log(nuevas_personas)

//Ejemplo de mostrar las variables 
let {nombre: variable_nombre, apellidos: variable_apellido } = p1
console.log(p1);

//Ejemplo de los dias de la semana con switch
let dia_semana: number = 8;
switch (dia_semana) {
  case 1: console.log("Es 1");break;
  default: console.log("Otros");break;}

//Ejemplo for con valor e indice (in y on)
for (const indice in numeros) {
  console.log(`Indice: ${indice} - Valor: ${numeros[indice]}`);
}for (const valor of numeros) { console.log(valor); }

//Ejemplo for con multiplo de 2
for (const valor of numeros) {
  if (valor % 2 == 0) { console.log(valor) }
  else {continue;}} //si ponemos break coje solo el primero

//Uso de array tridimensionales,
let array: number[] = [1, 2, 3, 4, 5, 6];
let array1: (string | number)[][] = [[1, "dos", "tres", 4, 5], ["seis", 7, "ocho"]];
console.log(array); console.log(array1);

//Split, sort,push, pop, unshift, shift
let frutas = ["pera", "naranja"]; frutas.push("tomate"); //pone numero final
frutas.unshift("sandia");  console.log(frutas)//al principio
frutas.shift(); console.log(frutas)//quita el primero

//Array para encontrarlo
console.log(`La pera se encuentra en la posición: ${frutas.indexOf("pera")}`);
console.log(`El tomate está en el array: ${frutas.includes("tomate")}`);
console.log(frutas.find((valor: string) => { return valor.length >= 3 }))
frutas.forEach((valor: string) => { console.log(`Fruta: ` + valor) })

//Modifica datos
type Persona = { nombre: string, edad: number }
let pe1 = { nombre: "Pabloo", edad: 21 }
let pe2 = { edad: 20, nombre: "Manolo" }; let arraype = [pe1, pe2];
console.log(arraype); //Muestra datos sin sumar +1 en edad
arraype.map((valor: Persona) => { valor.edad += 1; return valor }); console.log(arraype)

//Ejemplo notas aprobados
let notas = [4, 5, 8, 7, 9, 10, 0, 1, 5];
let aprobados = notas.filter((valor: number) => valor >= 5);
console.log(aprobados)

//Reduce: ACUMULA todos los elementos en un único valor
let numeros2 = [1, 2, 3]
let sumar = numeros2.reduce((acc, act )=> { return acc + act })
console.log("Resultado: " +sumar);

/*lo que hace reduce seria esto
function fsuma(array: number[]) {let acumulador = 0
for (const n of numeros2) { acumulador = acumulador + n;}}*/

//Reduce de numeros mayores
let numeros3 = [3,2,6,9,1]
let mayor = numeros3.reduce((acumulador,actual) => {return actual>=acumulador?acumulador=actual:acumulador})
console.log("Numero mayor: " +mayor)

//Sort:ordenacion numeros4=[3,2,6,100,1] console.log(numeros4) pone mal el 100
numeros3.sort(); console.log(numeros3)
numeros3.sort((a,b)=>{return b-a}); console.log(numeros3) //Descendente
numeros3.sort((a,b)=>{return a-b}); console.log(numeros3) //Ascendente

//Slice para extraer un trozo y Join para unir
let nombres:string[] = ["Pablo", "S", "G"]
let nombreCompleto = nombres.join(" ");
let apellidos= nombres.slice(1)
console.log(apellidos)

//Tuplas estructura de secuencia ordenada si o si va delante el definido primero
let nombreEdad:[string,number] = ["PABLO",21];
let [nombre1,edad1] = nombreEdad;
console.log(nombre1);

type ProductoTupla = [nombre:string, precio:number]
type ProductoObject = {nombre:string, precio:number}
let pr1:ProductoTupla = ["Champu",9]; 
let pr2:ProductoObject = {precio:1,nombre:"Manzana"}; console.log(pr1,pr2);

//Funciones de ejemplos
console.log("Suma total: "+suma(1,2));function suma(a:number,b:number){return a+b;}
const FSUMA = function (a:number,b:number) {return a+b;} ; console.log(FSUMA(1,2));

//Elementos de array ordenados con funciones y coordenadas
let elementos = [1,2,3,4,5,6,7,8,9,5,3,2,1,2,43];
const ORDENAR = (a:number,b:number)=> a-b;
console.log(elementos.sort(ORDENAR));

type Coordenada = {x:number, y:number}; let c1:Coordenada = {x:1, y:2};
let c2:Coordenada = {x:1, y:3};let c3:Coordenada = {x:2, y:4};
let c4:Coordenada = {x:4, y:5};let coordenadas = [c1,c2,c3,c4]
let filtrado = coordenadas.filter((coordenada:Coordenada)=>coordenada.x>1)
console.log(coordenadas,filtrado)

//Funcion con ?? seria que si no se escribe lo pone vacio ejemplo debajo
function saludar(nombre:string, apellido?:string, edad?:number) {
  console.log(`Hola ${nombre} ${apellido??""}: ${edad??""}`);
}saludar("Pablo");saludar("Pablo","",21);saludar("Pablo","SG",21)

function sumaa(...numero:number[]) {
  return numero.reduce((acc,act)=>acc+act)
} console.log("Suma: "+sumaa(1,2,3,4,5,6,7,8,9))