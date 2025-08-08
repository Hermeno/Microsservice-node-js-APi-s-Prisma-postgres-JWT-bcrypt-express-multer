const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Utilitário seguro para converter ID
const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
};

// ✅ CREATE Categoria
router.post('/', async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Campo "nome" é obrigatório.' });
  }

  try {
    const categoria = await prisma.categorias.create({ data: { nome } });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ READ ALL Categorias
router.get('/', async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany({
      include: { produtos: true } // caso queira incluir os produtos
    });
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ Categoria por ID
router.get('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const categoria = await prisma.categorias.findUnique({
      where: { id },
      include: { produtos: true }
    });

    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada.' });
    }

    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE Categoria
router.put('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  const { nome } = req.body;

  if (!id) return res.status(400).json({ error: 'ID inválido.' });
  if (!nome) return res.status(400).json({ error: 'Campo "nome" é obrigatório.' });

  try {
    const categoria = await prisma.categorias.update({
      where: { id },
      data: { nome }
    });

    res.json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ DELETE Categoria
router.delete('/:id', async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.categorias.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
