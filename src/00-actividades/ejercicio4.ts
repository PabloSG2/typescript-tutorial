//Mostramos lista principal
const lista:string [] = ['Ana','Luis', 'Marta'];
console.log(`Inicial -> ${lista}`)

//Añadimos 3 personas y borramos Carlos
let actualizada = lista.push('Pedro','Lucia');
console.log(`Tras 2 altas -> ${actualizada}`)
let actualizada2 = lista.push('Carlos');
console.log(`Tras 2 altas -> ${actualizada2}`)

//let actualizada3 = lista('Carlos');
//console.log(`Baja de Carlos -> ${actualizada3}`);
//console.log(`¿Está Marta? -> ${lista.find('Marta')}`)