const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addCategoria(req, res) {
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
}

module.exports = addCategoria;
