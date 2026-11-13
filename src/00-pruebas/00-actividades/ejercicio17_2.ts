interface TareaApi22 {userId:string,id:number,title:string,completed:boolean}
interface Tarea22 {id:number,titulo:string,completada:boolean}

async function obtenerTareass(usuario: number): Promise<Tarea22[]> {
    const URL_POST = `https://jsonplaceholder.typicode.com/todos?userId=${usuario}`;
    const respuesta:Response = await fetch(URL_POST);
    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }else {
    const datos = (await respuesta.json() as TareaApi22) as TareaApi22
    const tarea: Tarea22 = {
        id: datos.id,
        titulo: datos.title,
        completada: datos.completed,
    };
    console.log(tarea);
    return (await respuesta.json()) as Tarea22[];
    }
}
obtenerTareass(1)
.then((tareas) => console.log(tareas))