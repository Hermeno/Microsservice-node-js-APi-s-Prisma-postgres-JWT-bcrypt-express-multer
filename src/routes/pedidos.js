const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (val) => {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? null : parsed;
};

// CREATE
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const created = await prisma.pedidos.create({ data });
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const items = await prisma.pedidos.findMany({
      include: {
        usuario_final: true,
        mesa: true,
        itens_pedido: {
          include: { produto: true }
        },
        pagamentos: true
      }
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ BY ID
router.get('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const item = await prisma.pedidos.findUnique({
      where: { id },
      include: {
        usuario_final: true,
        mesa: true,
        itens_pedido: {
          include: { produto: true }
        },
        pagamentos: true
      }
    });

    if (!item) return res.status(404).json({ error: 'Pedido não encontrado.' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const updated = await prisma.pedidos.update({
      where: { id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.pedidos.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
