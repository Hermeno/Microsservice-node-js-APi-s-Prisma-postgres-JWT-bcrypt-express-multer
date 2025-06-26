// Exemplo base de endpoints para todas as tabelas (Express + Prisma)
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Substitua "categorias" por cada nome de modelo

// CREATE
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const created = await prisma.categorias.create({ data });
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const items = await prisma.categorias.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ BY ID
router.get('/:id', async (req, res) => {
  try {
    const item = await prisma.categorias.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await prisma.categorias.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await prisma.categorias.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
