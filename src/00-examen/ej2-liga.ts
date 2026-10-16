// Definimos la estructura de un Equipo
type Equipo = {nombre: string;ganados: number;empatados: number;perdidos: number;};

// Creamos los datos de los equipos
let equipos: Equipo[] = [
    { nombre: "Atletico Sur", ganados: 5, empatados: 2, perdidos: 1 },
    { nombre: "Deportivo Norte", ganados: 6, empatados: 0, perdidos: 2 },
    { nombre: "Unión Centro", ganados: 3, empatados: 3, perdidos: 2 },
    { nombre: "Real Este", ganados: 2, empatados: 1, perdidos: 5 },
];

// Creamos la función donde se recogen los puntos (ganados * 3 y empatados * 1)
function calcularPuntos(equipo: Equipo): number {
    return (equipo.ganados * 3) + (equipo.empatados * 1);
}

// Mostramos la clasificación formateada con los puntos de mayor a menor
const clasificacion = [...equipos].sort((a, b) => calcularPuntos(b) - calcularPuntos(a));

clasificacion.forEach(equipo => {
    console.log(`${equipo.nombre} - ${calcularPuntos(equipo)} pts`);
});

// Mostramos el primer equipo del array original y el primer ordenado con el formato exacto
console.log(`1er equipo del array original: ${equipos[0].nombre}`);