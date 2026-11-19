type Pelicula = {titulo:string,director:string,anio:number,duracion:number,nota:number,vista:boolean}

const peliculas:Pelicula[] = [
    {titulo:"Origen",director:"Christopher Nolan",anio:2010,duracion:148,nota:8.8,vista:true},
    {titulo:"Parásitos",director:"Bong Joon-ho",anio:2019,duracion:132,nota:8.5,vista:false},
    {titulo:"El laberinto del fauno",director:"Guillermo del Toro",anio:2006,duracion:118,nota:8.2,vista:true},
    {titulo:"Instellar",director:"Christopher Nolan",anio:2014,duracion:169,nota:8.7,vista:false},
    {titulo:"Coco",director:"Lee Unkrich",anio:2017,duracion:105,nota:8.4,vista:true},
]
console.log(peliculas.filter(p => { return p.vista === false; }));
