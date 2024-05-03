import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function llenarTablaTransaccional() {
  try {
    // Creamos un arreglo con 10 elementos para insertar
    const elementos = Array.from({ length: 10 }, (_, index) => ({
      descripcion: `Descripción ${index + 1}`,
      detallesTecnicos: `Detalles técnicos ${index + 1}`,
      costoPorHoraPrestamo: Math.random() * 100, // Costo aleatorio entre 0 y 100
    }));

    // Insertamos los elementos en la tabla transaccional
    await Promise.all(
      elementos.map(async (elemento) => {
        await prisma.computadora.create({
          data: elemento,
        });
      })
    );

    console.log('¡Elementos insertados correctamente!');
  } catch (error) {
    console.error('Error al insertar elementos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llamamos a la función para ejecutarla
llenarTablaTransaccional();
