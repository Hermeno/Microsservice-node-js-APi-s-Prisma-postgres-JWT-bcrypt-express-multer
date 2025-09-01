const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
};

async function getCategorias(req, res) {
  try {
    const categorias = await prisma.categorias.findMany({
      include: { produtos: true }
    });
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCategoriaById(req, res) {
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
}

module.exports = { getCategorias, getCategoriaById };
