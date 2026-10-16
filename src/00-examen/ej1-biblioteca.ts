// Definimos la estructura (objeto) de un Libro
type Libro = {titulo: string;autor: string;anio: number;paginas: number;disponible: boolean;};

let Libros: Libro[] = [
    { titulo: 'El Quijote', autor: 'Cervantes', anio: 1605, paginas: 863, disponible: true },
    { titulo: 'La Regenta', autor: 'Clarín', anio: 1884, paginas: 712, disponible: false },
    { titulo: 'Niebla', autor: 'Unamuno', anio: 1914, paginas: 296, disponible: true },
    { titulo: 'Nada', autor: 'Carmen Laforet', anio: 1945, paginas: 288, disponible: true },
    { titulo: 'Marianela', autor: 'Galdós', anio: 1878, paginas: 240, disponible: false },
];

// Mostramos los títulos de los libros disponibles separados por |
const librosDisponibles = Libros.filter();
console.log("Disponibles:", librosDisponibles.join(" | "));

// Mostramos el total de páginas de todo el catálogo
const totalPaginas = Libros.reduce((acumulado, libro) => acumulado + libro.paginas, 0);
console.log("Total de páginas:", totalPaginas);

// Buscamos si existe algún libro cuyo autor incluya 'Unamuno' o 'Lorca'
console.log(`¿Está Unamuno? -> ${Libros.autor.includes('Unamuno')}`);
console.log(`¿Está Marta? -> ${Libros.autor.includes('Lorca')}`);