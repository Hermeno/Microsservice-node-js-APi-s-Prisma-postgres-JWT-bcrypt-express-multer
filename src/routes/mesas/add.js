const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const data = req.body;
    const created = await prisma.mesas.create({ data });
    res.status(201).json(created);
  } catch (error) {
    throw error;
  }
};
