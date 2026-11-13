interface UsuarioApi {id:number;name:string;email:string;address:{street:string};
}
interface Usuarioo {id:number,name:string,email:string,address:{street:string}}
async function obtenerUsuarios(usuarios: number) {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarios}`);
    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }
    const contenido =  (await respuesta.json()) as Usuarioo;
    const usuario: Usuarioo = {
    id: contenido.id,
    name: contenido.name,
    email: contenido.email,
    address: contenido.address,
  };
  console.log(usuario)
} 
obtenerUsuarios(1)