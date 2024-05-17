import express, { Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const prestamistas = await prisma.prestamista2.findMany({
    where: { estado: estado as any },
  });
  res.json(prestamistas);
});

router.post('/', async (req: Request, res: Response) => {
  const newPrestamista = await prisma.prestamista2.create({
    data: req.body,
  });
  res.status(201).json(newPrestamista);
});

router.get('/:id', async (req: Request, res: Response) => {
  const prestamista = await prisma.prestamista2.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (prestamista && prestamista.estado !== 'Eliminado') {
    res.json(prestamista);
  } else {
    res.status(404).send('Prestamista no encontrado');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedPrestamista = await prisma.prestamista2.update({
    where: { ID: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedPrestamista);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPrestamista = await prisma.prestamista2.update({
      where: { ID: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el prestamista' });
  }
});

export default router;
