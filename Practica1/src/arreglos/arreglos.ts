//Entidades
export interface computadora {
    ID: number;
    descripcion: string;
    detallesTecnicos: string;
    costoPorHoraPrestamo: number;
}

export interface prestamista {
    ID: number;
    nombre: string;
    identificacion: string;
}

export interface prestamo {
    ID: number;
    IDcomputadora: number;
    IDprestamista: number;
    fecha: Date;
    hora: string;
    numeroHorasPrestamo: number;
}

// Arreglo de Computadoras
export const computadoras: computadora[] = [
    { ID: 1, descripcion: "Asus", detallesTecnicos: "Intel Core i5, 8GB RAM", costoPorHoraPrestamo: 10 },
    { ID: 2, descripcion: "Lenovo", detallesTecnicos: "AMD Ryzen 7, 16GB RAM", costoPorHoraPrestamo: 15 },
    { ID: 3, descripcion: "MacBook", detallesTecnicos: "Apple A12 Bionic, 128GB almacenamiento", costoPorHoraPrestamo: 8 },
    { ID: 4, descripcion: "MSI", detallesTecnicos: "Intel Xeon, 32GB RAM, 1TB SSD", costoPorHoraPrestamo: 20 },
    { ID: 5, descripcion: "Dell", detallesTecnicos: "Intel Celeron, 4GB RAM", costoPorHoraPrestamo: 5 }
];

// Arreglo de Prestamistas
export const prestamistas: prestamista[] = [
    { ID: 1, nombre: "Leandro Flores", identificacion: "1316438272" },
    { ID: 2, nombre: "Jorge Zambrano", identificacion: "1315789618" },
    { ID: 3, nombre: "Solange Delgado", identificacion: "1313551739" },
    { ID: 4, nombre: "Jandry Moreira", identificacion: "1316930476" },
    { ID: 5, nombre: "Jerson Cuenca", identificacion: "1315967909" }
];

// Arreglo de Préstamos
export const prestamos: prestamo[] = [
    { ID: 1, IDcomputadora: 1, IDprestamista: 2, fecha: new Date(), hora: "10:00", numeroHorasPrestamo: 4 },
    { ID: 2, IDcomputadora: 3, IDprestamista: 3, fecha: new Date(), hora: "12:00", numeroHorasPrestamo: 6 },
    { ID: 3, IDcomputadora: 2, IDprestamista: 1, fecha: new Date(), hora: "14:00", numeroHorasPrestamo: 3 },
    { ID: 4, IDcomputadora: 4, IDprestamista: 4, fecha: new Date(), hora: "16:00", numeroHorasPrestamo: 5 },
    { ID: 5, IDcomputadora: 5, IDprestamista: 5, fecha: new Date(), hora: "18:00", numeroHorasPrestamo: 2 }
];