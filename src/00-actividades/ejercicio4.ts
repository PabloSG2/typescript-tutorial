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
const alfabetico = [...lista].sort();
console.log("Alfabético   ->", alfabetico);
console.log("Original     ->", lista);

//Acta que pone los nombres en mayusucula
const acta = lista.map(nombre => nombre.toUpperCase());
console.log("Para el acta ->", acta);

//Nombre de 4 letras
const masDeCuatro = lista.filter(nombre => nombre.length > 4);
console.log("Nombre > 4 letras ->", masDeCuatro);

//Juntar nombre en un unico texto
const listadoTexto = lista.join(', ');
console.log(`Listado: ${listadoTexto}`);