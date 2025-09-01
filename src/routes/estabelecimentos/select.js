const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toInt = (val) => {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? null : parsed;
};

exports.getAll = async (req, res) => {
  try {
    const estabelecimentos = await prisma.estabelecimentos.findMany({
      include: { cliente: true, mesas: true, produtos: true }
    });
    res.status(200).json(estabelecimentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  const id = toInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido.' });

  try {
    const estabelecimento = await prisma.estabelecimentos.findUnique({
      where: { id },
      include: { cliente: true, mesas: true, produtos: true }
    });

    if (!estabelecimento) {
      return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
    }

    res.json(estabelecimento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
