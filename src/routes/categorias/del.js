const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
};

async function deleteCategoria(req, res) {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    await prisma.categorias.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = deleteCategoria;
