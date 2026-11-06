//Funcion de promesa
function espera(ms:number) {return new Promise<string>((resolve,reject)=> {
    if(ms<0) {reject(new Error('El tiempo de espera no puede ser negativo'))}else 
    {setTimeout(()=>{resolve(`Se ha realizado una espera de ${ms} ms`)},ms)}})}
espera(1000).then((resultado:string)=>{console.log(resultado)})
espera(-1).then((resultado:string)=>{console.log(resultado)}).catch((e:Error)=>{
console.log(`Hay un error ${e.message}`)}).finally(()=>{console.log("Promesa final")})

interface POST {userId:number;id:number;title:string;body:string;}
/*Fetch y await que espera
async function getDatos():Promise<string> {
    const URL_POST = "https://jsonplaceholder.typicode.com/posts/1"
    let response:Response = await fetch(URL_POST)
    let data= (await response.json() as string); return data} //Devuelve como string
getDatos().then((data:string)=>{console.log(data)}).catch((e:Error)=>console.log(e.message))

*///Fetch y await que espera
async function getPost():Promise<POST[]> {
    const URL_POST = "https://jsonplaceholder.typicode.com/posts/"
    let response:Response = await fetch(URL_POST)
    let data= (await response.json() as POST[]); return data} //Devuelve como string
getPost().then((post:POST[])=>{console.log(post)}).catch((e:Error)=>console.log(e.message))