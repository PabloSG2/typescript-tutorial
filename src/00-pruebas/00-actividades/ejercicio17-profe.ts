interface TareaApi1 {userId:string,id:number,title:string,completed:boolean}
interface Tarea1 {id:number,title:string,completed:boolean}

async function obtenerTareas1(usuario: number): Promise<Tarea1[]> {
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