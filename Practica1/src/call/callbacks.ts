import { computadora,  computadoras, } from "../arreglos/arreglos";

export function buscarPorID<T>(datos: T[], ID: number, callback: (elemento: T) => void) {
    const elemento = datos.find((item: any) => item.ID === ID);
    if (elemento) {
        callback(elemento);
    } else {
        console.log("Elemento no encontrado");
    }
}

// Uso del callback
buscarPorID<computadora>(computadoras, 3, (computadora: computadora) => {
    console.log("computadora encontrado:");
    console.log(computadora);
});


