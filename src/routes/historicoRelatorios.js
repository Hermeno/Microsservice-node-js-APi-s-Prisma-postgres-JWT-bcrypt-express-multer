const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (val) => {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? null : parsed;
};

// ✅ CREATE historico_relatorios
router.post('/', async (req, res) => {
  const { cliente_id, nome_arquivo, tipo, data_geracao } = req.body;

  try {
    const created = await prisma.historico_relatorios.create({
      data: {
        cliente_id,
        nome_arquivo,
        tipo,
        data_geracao: data_geracao ? new Date(data_geracao) : undefined
      }
    });

    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ READ ALL
router.get('/', async (req, res) => {
  try {
    const items = await prisma.historico_relatorios.findMany({
      include: { cliente: true } // Inclui dados do cliente relacionado
    });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ BY ID
router.get('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const item = await prisma.historico_relatorios.findUnique({
      where: { id },
      include: { cliente: true }
    });

    if (!item) return res.status(404).json({ error: 'Histórico não encontrado.' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE
router.put('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  const { cliente_id, nome_arquivo, tipo, data_geracao } = req.body;

  try {
    const updated = await prisma.historico_relatorios.update({
      where: { id },
      data: {
        cliente_id,
        nome_arquivo,
        tipo,
        data_geracao: data_geracao ? new Date(data_geracao) : undefined
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ DELETE
router.delete('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.historico_relatorios.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
