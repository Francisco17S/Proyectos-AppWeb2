import { computadora, computadoras, prestamista, prestamistas, prestamo, prestamos } from "../arreglos/arreglos";


export function mostrarDatos() {
    console.log("Computadoras");
    computadoras.forEach((computadora: computadora) => {
        console.log(computadora);
    });

    console.log("Encuentros Deportivos:");
    for (let prestamista of prestamistas) {
        console.log(prestamista);
    }

    console.log("Pronósticos:");
    for (let i in prestamos) {
        console.log(prestamos[i]);
    }
}
