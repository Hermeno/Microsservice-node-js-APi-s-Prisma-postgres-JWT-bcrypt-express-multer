// clientes.js
const express = require('express');
const router = express.Router();
const { prisma, bcrypt, idInt, tratarErroPrisma } = require('./helpers');

// CREATE
router.post('/', async (req, res) => {
  const { senha, ...dados } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    const cliente = await prisma.clientes.create({
      data: { ...dados, senha: hash }
    });
    res.status(201).json(cliente);
  } catch (e) { tratarErroPrisma(e, res, 'cliente'); }
});

// READ ALL
router.get('/', async (_, res) => res.json(await prisma.clientes.findMany()));

// READ ONE
router.get('/:id', async (req, res) => {
  const cli = await prisma.clientes.findUnique({ where: { id: idInt(req.params.id) } });
  cli ? res.json(cli) : res.status(404).json({ error: 'Não encontrado' });
});

// UPDATE
router.put('/:id', async (req, res) => {
  const { senha, ...dados } = req.body;
  if (senha) dados.senha = await bcrypt.hash(senha, 10);
  try {
    const cli = await prisma.clientes.update({ where: { id: idInt(req.params.id) }, data: dados });
    res.json(cli);
  } catch (e) { tratarErroPrisma(e, res, 'cliente'); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await prisma.clientes.delete({ where: { id: idInt(req.params.id) } });
    res.status(204).end();
  } catch (e) { tratarErroPrisma(e, res, 'cliente'); }
});

module.exports = router;
