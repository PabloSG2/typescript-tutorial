type Pelicula = {titulo:string,director:string,anio:number,duracion:number,nota:number,vista:boolean}
const peliculas:Pelicula[] = [
    {titulo:"Origen",director:"Christopher Nolan",anio:2010,duracion:148,nota:8.8,vista:true},
    {titulo:"Parásitos",director:"Bong Joon-ho",anio:2019,duracion:132,nota:8.5,vista:false},
    {titulo:"El laberinto del fauno",director:"Guillermo del Toro",anio:2006,duracion:118,nota:8.2,vista:true},
    {titulo:"Instellar",director:"Christopher Nolan",anio:2014,duracion:169,nota:8.7,vista:false},
    {titulo:"Coco",director:"Lee Unkrich",anio:2017,duracion:105,nota:8.4,vista:true},
]

const vista = peliculas.filter(p => p.vista === false)
.map(p=> p.titulo).join("|")
console.log(vista)

const duracionTotal:number = peliculas.reduce((acc,p) => acc+p.duracion, 0);
const hora = Math.floor(duracionTotal/60)
const minuto = duracionTotal%60
console.log(`Duracion total ${hora}h ${minuto}min`);
console.log(`Duracion total ${duracionTotal} total`);

function buscarPorDirector(lista: Pelicula[], director: string): Pelicula | undefined {
    return lista.find(p => p.director === director);
}
const nolan = buscarPorDirector(peliculas, "Christopher Nolan");
const pedro = buscarPorDirector(peliculas, "Pedro Almodóvar");
console.log(`Christopher Nolan: ${nolan?.titulo ?? "No encontrado"}`);
console.log(`Pedro Almodóvar: ${pedro?.titulo ?? "No encontrado"}`);

function filtrarporNota(lista:Pelicula[],notaminima:number,soloVistas:boolean =false): Pelicula[] {
    let resultado = lista.filter(p => p.nota >= notaminima);
    if(soloVistas=== true) {
        resultado = resultado.filter(p => p.vista === true)
    }return resultado}

console.log(filtrarporNota(peliculas,8.5,false));
console.log(filtrarporNota(peliculas,8.9,true));
console.log(filtrarporNota(peliculas,5,true));