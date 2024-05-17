import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const prestamos = await prisma.prestamo2.findMany({
    where: { estado: estado as any },
  });
  res.json(prestamos);
});

router.post('/', async (req: Request, res: Response) => {
  const newPrestamo = await prisma.prestamo2.create({
    data: req.body,
  });
  res.status(201).json(newPrestamo);
});

router.get('/:id', async (req: Request, res: Response) => {
  const prestamo = await prisma.prestamo2.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (prestamo && prestamo.estado !== 'Eliminado') {
    res.json(prestamo);
  } else {
    res.status(404).send('Prestamo no encontrado');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPrestamo = await prisma.prestamo2.update({
      where: { ID: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedPrestamo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el prestamo' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPrestamo = await prisma.prestamo2.update({
      where: { ID: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el prestamo' });
  }
});

export default router;
