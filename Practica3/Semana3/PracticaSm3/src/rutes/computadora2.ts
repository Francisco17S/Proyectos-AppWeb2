import express, { Router, Request, Response } from 'express';
import prisma from '../prisma';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const computadoras = await prisma.computadora2.findMany({
    where: { estado: estado as any },
  });
  res.json(computadoras);
});

router.post('/', async (req: Request, res: Response) => {
  const newComputadora = await prisma.computadora2.create({
    data: req.body,
  });
  res.status(201).json(newComputadora);
});

router.get('/:id', async (req: Request, res: Response) => {
  const computadora = await prisma.computadora2.findUnique({
    where: { ID: parseInt(req.params.id) },
  });
  if (computadora) {
    res.json(computadora);
  } else {
    res.status(404).send('Computadora no encontrada');
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const updatedComputadora = await prisma.computadora2.update({
    where: { ID: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(updatedComputadora);
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedComputadora = await prisma.computadora2.update({
      where: { ID: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la computadora' });
  }
});

export default router;
