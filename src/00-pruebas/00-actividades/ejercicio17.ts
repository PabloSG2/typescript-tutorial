export{}
interface TareaApi {userId:string,id:number,title:string,completed:boolean}
interface Tarea {id:number,title:string,completed:boolean}

async function obtenerTareas(usuario: number): Promise<Tarea[]> {
    const URL_POST = `https://jsonplaceholder.typicode.com/todos?userId=${usuario}`;
    const respuesta:Response = await fetch(URL_POST);
    if (respuesta.status != 200) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }else {
    const datos1:TareaApi[] = await (respuesta.json() as Promise<TareaApi[]>)
    const tareas = datos1.map((t:TareaApi)=>{return {
    id:t.id,title:t.title,completed:t.completed}})
    
    return tareas
    }
}
/*Promesas
let promesas=Promise.all([obtenerTareas(1),obtenerTareas(2),obtenerTareas(3)])
promesas.then((datos) =>{datos.forEach(datos => {
  console.log(datos)
});})*/

obtenerTareas(1)
  .then((tareas) => {
    const total = tareas.length;
    const completadas = tareas.filter((t) => t.completed).length;
    const pendientes = total - completadas;
    const porcentaje = ((completadas / total) * 100).toFixed(1);
    const contenido = tareas.filter((t)=> !t.completed).slice(0,3)

    console.log(`Usuario 1: ${total} tareas`);
    console.log(`Completadas: ${completadas} (${porcentaje} %)`);
    console.log(`Pendientes: ${pendientes}`);
    console.log("Primeras pendientes: ")
    contenido.forEach((t)=>  {
      console.log(`- ${t.title}`)
    })
    const Larga = tareas.reduce((max, t) => (t.title.length > max.title.length ? t : max));
    console.log(`Titulo más largo: ${Larga.title}`)
  })
 const [deUno, deDos] = await Promise.all([obtenerTareas(1), obtenerTareas(2)]);
  const contar = (lista: Tarea[]): number => lista.filter((t) => t.completed).length;
  console.log(`Completadas -> usuario 1: ${contar(deUno)} | usuario 2: ${contar(deDos)}`);
//.then((tareas) => console.log(tareas))