const express = require('express');
const router = express.Router();
const { prisma, bcrypt, idInt, tratarErroPrisma } = require('./helpers');

// ✅ CREATE
router.post('/', async (req, res) => {
  const { nome, email, telefone, senha, endereco, tipo_cliente, nivel_acesso } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const cliente = await prisma.clientes.create({
      data: {
        nome,
        email,
        telefone,
        senha: hash,
        endereco,
        tipo_cliente,
        nivel_acesso
      }
    });

    res.status(201).json(cliente);
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
});

// ✅ READ ALL
router.get('/', async (_, res) => {
  try {
    const clientes = await prisma.clientes.findMany({
      include: {
        usuarios_internos: true,
        estabelecimentos: true,
        historico_relatorios: true,
        monitoramento_sistema: true
      }
    });
    res.json(clientes);
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
});

// ✅ READ ONE
router.get('/:id', async (req, res) => {
  try {
    const cliente = await prisma.clientes.findUnique({
      where: { id: idInt(req.params.id) },
      include: {
        usuarios_internos: true,
        estabelecimentos: true,
        historico_relatorios: true,
        monitoramento_sistema: true
      }
    });

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
});

// ✅ UPDATE
router.put('/:id', async (req, res) => {
  const { senha, ...dados } = req.body;

  try {
    if (senha) {
      dados.senha = await bcrypt.hash(senha, 10);
    }

    const cliente = await prisma.clientes.update({
      where: { id: idInt(req.params.id) },
      data: dados
    });

    res.json(cliente);
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
});

// ✅ DELETE
router.delete('/:id', async (req, res) => {
  try {
    await prisma.clientes.delete({
      where: { id: idInt(req.params.id) }
    });

    res.status(204).end();
  } catch (e) {
    tratarErroPrisma(e, res, 'cliente');
  }
});

module.exports = router;
