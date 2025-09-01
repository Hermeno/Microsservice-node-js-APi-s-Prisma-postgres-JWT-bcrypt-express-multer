const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? null : parsed;
};

async function updateCategoria(req, res) {
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
}

module.exports = updateCategoria;
