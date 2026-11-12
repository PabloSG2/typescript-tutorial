export{}
interface TareaApi {userId:string,id:number,title:string,completed:boolean}
interface Tarea {id:number,title:string,completed:boolean}

async function obtenerTareas(usuario: number): Promise<Tarea1[]> {
    const URL_POST = `https://jsonplaceholder.typicode.com/todos?userId=${usuario}`;
    const respuesta:Response = await fetch(URL_POST);
    if (respuesta.status != 200) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }else {
    const datos1:TareaApi1[] = await (respuesta.json() as Promise<TareaApi1[]>)
    const tareas = datos1.map((t:TareaApi1)=>{return {
    id:t.id,title:t.title,completed:t.completed}})
    
    return tareas
    }
}
obtenerTareas(1)
  .then((tareas) => {
    const total = tareas.length;
    const completadas = tareas.filter((t) => t.completed).length;
    const pendientes = total - completadas;
    const porcentaje = ((completadas / total) * 100).toFixed(1);

    console.log(`Usuario 1: ${total} tareas`);
    console.log(`Completadas: ${completadas} (${porcentaje} %)`);
    console.log(`Pendientes: ${pendientes}`);
  })
//.then((tareas) => console.log(tareas))