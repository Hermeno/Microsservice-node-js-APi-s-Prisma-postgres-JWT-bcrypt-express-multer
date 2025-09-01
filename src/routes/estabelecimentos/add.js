const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const { cliente_id, nome, endereco, tipo } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Campo "nome" é obrigatório.' });
  }

  try {
    const created = await prisma.estabelecimentos.create({
      data: { cliente_id, nome, endereco, tipo }
    });
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
