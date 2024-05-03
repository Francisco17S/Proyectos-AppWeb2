import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function buscarTransaccionPorId(transaccionId: number) {
  try {
    // Buscamos la transacción por su ID
    const transaccion = await prisma.prestamo.findUnique({
      where: {
        ID: transaccionId,
      },
      include: {
        computadora: true,
        prestamista: true,
      },
    });

    if (transaccion) {
      console.log('Transacción encontrada:');
      console.log('ID:', transaccion.ID);
      console.log('Computadora:', transaccion.computadora);
      console.log('Prestamista:', transaccion.prestamista);
      console.log('Fecha:', transaccion.fecha);
      console.log('Hora:', transaccion.hora);
      console.log('Número de horas de préstamo:', transaccion.numeroHorasPrestamo);
    } else {
      console.log('No se encontró ninguna transacción con ese ID.');
    }
  } catch (error) {
    console.error('Error al buscar la transacción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llamamos a la función para buscar una transacción por su ID
buscarTransaccionPorId(1); // Aquí debes pasar el ID de la transacción que deseas buscar
