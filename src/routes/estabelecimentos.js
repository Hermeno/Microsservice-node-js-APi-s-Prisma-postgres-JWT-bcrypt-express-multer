const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (val) => {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? null : parsed;
};

// ✅ CREATE Estabelecimento
router.post('/', async (req, res) => {
  const { cliente_id, nome, endereco, tipo } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Campo "nome" é obrigatório.' });
  }

  try {
    const created = await prisma.estabelecimentos.create({
      data: {
        cliente_id,
        nome,
        endereco,
        tipo
      }
    });
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ READ ALL Estabelecimentos
router.get('/', async (req, res) => {
  try {
    const estabelecimentos = await prisma.estabelecimentos.findMany({
      include: {
        cliente: true,
        mesas: true,
        produtos: true
      }
    });
    res.status(200).json(estabelecimentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ Estabelecimento by ID
router.get('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const estabelecimento = await prisma.estabelecimentos.findUnique({
      where: { id },
      include: {
        cliente: true,
        mesas: true,
        produtos: true
      }
    });

    if (!estabelecimento) {
      return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
    }

    res.json(estabelecimento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE Estabelecimento
router.put('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  const { cliente_id, nome, endereco, tipo } = req.body;

  try {
    const updated = await prisma.estabelecimentos.update({
      where: { id },
      data: {
        cliente_id,
        nome,
        endereco,
        tipo
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ DELETE Estabelecimento
router.delete('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.estabelecimentos.delete({
      where: { id }
    });

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
