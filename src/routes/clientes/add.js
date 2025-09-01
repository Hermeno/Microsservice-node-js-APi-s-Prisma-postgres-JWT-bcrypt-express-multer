const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addCliente(req, res) {
  const { nome, email, telefone, senha, endereco, tipo_cliente, nivel_acesso } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    const cliente = await prisma.clientes.create({
      data: { nome, email, telefone, senha: hash, endereco, tipo_cliente, nivel_acesso
      }
    });
    res.status(201).json(cliente);
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
}

module.exports = addCliente;
