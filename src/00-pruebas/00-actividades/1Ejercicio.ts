interface UsuarioApi {id:number;name:string;email:string;address:{street:string}
phone:string,website:string,company:{name:string};}
interface Usuarioo {id:number,name:string,email:string,address:{street:string}
phone:string,website:string,company:{name:string};}
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
    phone: contenido.phone,
    website: contenido.website,
    company: contenido.company,
  };
  /*Muestra los capas por debajo
  console.dir(usuario,{depth:null})*/
  console.log(usuario)
} 
obtenerUsuarios(1)