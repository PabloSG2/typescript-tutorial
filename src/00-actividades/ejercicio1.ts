type Curso = {
  nombre: string;capacidadMaxima: number;matriculados: number;
  tutor: string;grupo: string;};

const dam: Curso = {
  nombre: "IES Los Alcores - Desarrollo de Aplicaciones Multiplataforma",
  capacidadMaxima: 30,matriculados: 26,
  tutor: "A",grupo: "DAM2"};
dam.tutor = "Ana Serrano";

let alumnosmatriculados = 26;
let plazaslibres = dam.capacidadMaxima-dam.matriculados;
let matricula = alumnosmatriculados+2;
let actual = dam.capacidadMaxima-matricula;
let ocupacion = dam.matriculados * 100 / dam.capacidadMaxima;

console.log(dam.nombre);
console.log("Matriculados: " +dam.matriculados, " de " +dam.capacidadMaxima);
console.log("Plazas libres: " +plazaslibres);
console.log("Tras dos altas -> " +matricula+ " matriculados," +actual+ " libres");
console.log(`Ocupación: ${ocupacion.toFixed(1)} %`);

if(plazaslibres >= dam.capacidadMaxima) {
    console.log("Grupo completo");
}else {
    console.log("Quedan plazas");
}
console.log("Grupo " +dam.grupo+ " , tutor: " +dam.tutor);