const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteCliente(req, res) {
  try {
    await prisma.clientes.delete({
      where: { id: idInt(req.params.id) }
    });

    res.status(204).end();
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
}

module.exports = deleteCliente;
