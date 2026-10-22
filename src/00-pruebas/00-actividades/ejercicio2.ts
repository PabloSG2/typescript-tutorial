type notas = {practica: number;examen:null;};
const n:notas = {practica: 8.5,examen: null,};
const n1:notas = {practica: 0,examen: null,};

//Resultado
console.log(`Práctica: ${n.practica ?? "sin entregar"}`);
console.log(`Examen: ${n.examen ?? "sin corregir"}`);
console.log(`Con || -> ${n1.practica || "sin nota"}`);
console.log(`Con ?? -> ${n1.practica ?? "sin nota"}`);

type Contacto = {email:string,telefono?:string,}
type Alumno = {nombre:string,contacto?:  Contacto,}
const a1:Alumno = {nombre: "Ana",contacto: {email: "ana@ies.es",},};
const a2:Alumno = {nombre: "Luis",};

//Resultado de los datos
console.log(`Email de Ana :${a1.contacto?.email ?? "no consta"}`); 
console.log(`Email de Luis :${a2.contacto?.email ?? "no consta"}`); 
console.log(`Tlf de Ana:${a1.contacto?.telefono ?? "no consta"}`); 

const desdeFormulario: unknown = "7.25";
if (typeof desdeFormulario === "string") {
    const nNum: number = parseFloat(desdeFormulario);
    console.log(`Convertida a número: ${nNum}`);
}