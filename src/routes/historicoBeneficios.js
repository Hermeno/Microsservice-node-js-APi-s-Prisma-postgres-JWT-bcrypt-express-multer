const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (val) => {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? null : parsed;
};

// ✅ CREATE Histórico de Benefício
router.post('/', async (req, res) => {
  const { usuario_final_id, beneficio, data_uso } = req.body;

  try {
    const created = await prisma.historico_beneficios.create({
      data: {
        usuario_final_id,
        beneficio,
        data_uso: data_uso ? new Date(data_uso) : undefined
      }
    });

    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ READ ALL Histórico de Benefícios
router.get('/', async (req, res) => {
  try {
    const items = await prisma.historico_beneficios.findMany({
      include: { usuario_final: true }
    });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ Histórico por ID
router.get('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const item = await prisma.historico_beneficios.findUnique({
      where: { id },
      include: { usuario_final: true }
    });

    if (!item) return res.status(404).json({ error: 'Histórico não encontrado.' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE Histórico de Benefício
router.put('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  const { usuario_final_id, beneficio, data_uso } = req.body;

  try {
    const updated = await prisma.historico_beneficios.update({
      where: { id },
      data: {
        usuario_final_id,
        beneficio,
        data_uso: data_uso ? new Date(data_uso) : undefined
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ DELETE Histórico de Benefício
router.delete('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.historico_beneficios.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
