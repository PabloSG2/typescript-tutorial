//Mostramos lista principal
const lista:string [] = ['Ana','Luis', 'Marta'];
console.log(`Inicial -> ${lista}`)

//Añadimos 3 personas y borramos Carlos
lista.push('Pedro','Lucia');
console.log(`Tras 2 altas -> ${lista}`)
lista.unshift('Carlos');
console.log(`Tras traslado -> ${lista}`)

//Borramos el primero que seria Carlos
const baja = lista.shift();
console.log(`Baja de ${baja} ->`, lista);

//Preguntamos si está marta y sofía con includes
console.log(`¿Está Marta? -> ${lista.includes('Marta')}`);
console.log(`¿Está Sofía? -> ${lista.includes('Sofía')}`);

//Preguntamos en que ubicación están con indexOf
console.log(`¿Posicion Lucia? -> ${lista.indexOf('Lucia')}`);
console.log(`¿Posicion Sofia? -> ${lista.indexOf('Sofia')}`);

//Ponemos la lista alfabetica, original y acta
const alfabetico = lista.sort();
console.log(`Alfabetico -> ${alfabetico}`);
console.log(`Alfabetico -> ${lista}`);