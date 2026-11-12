const URL_POST = "https://jsonplaceholder.typicode.com/todos?userId=";

interface TareaApi {userId:string,id:number,title:string,completed:boolean}
interface Tarea {id:number,titulo:string,completada:boolean}

async function obtenerTareas(usuario: number): Promise<Tarea[]> {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuario}`);
    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }else {
    const datos = (await respuesta.json()) as TareaApi
    const tarea: Tarea = {
        id: datos.id,
        titulo: datos.title,
        completada: datos.completed,
    };
    console.log(tarea);
    return (await respuesta.json()) as Tarea[];
    }
}
obtenerTareas(1)
/*const datos = await Promise.all([obtenerTareas(1),obtenerTareas(2)]);
datos.forEach((p) => console.log(`fetch paralelo -> [${p.id} ${p.title}]`));*/