import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function consultarTransacciones() {
  try {
    // Consultamos todas las transacciones
    const transacciones = await prisma.prestamo.findMany({
      include: {
        computadora: {
          select: {
            descripcion: true,
            detallesTecnicos: true,
            costoPorHoraPrestamo: true,
          },
        },
        prestamista: {
          select: {
            nombre: true,
            identificacion: true,
          },
        },
      },
    });

    console.log('Transacciones:');
    transacciones.forEach((transaccion, index) => {
      console.log(`Transacción ${index + 1}:`);
      console.log('ID:', transaccion.ID);
      console.log('Computadora:', transaccion.computadora);
      console.log('Prestamista:', transaccion.prestamista);
      console.log('Fecha:', transaccion.fecha);
      console.log('Hora:', transaccion.hora);
      console.log('Número de horas de préstamo:', transaccion.numeroHorasPrestamo);
    });
  } catch (error) {
    console.error('Error al consultar las transacciones:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llamamos a la función para consultar todas las transacciones
consultarTransacciones();
