const express = require('express');
const router = express.Router();

const addPedido = require('./add');
const { getAllPedidos, getPedidoById } = require('./select');
const updatePedido = require('./update');
const deletePedido = require('./del');

// Rotas
router.post('/', addPedido);
router.get('/', getAllPedidos);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);

module.exports = router;
