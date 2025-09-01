const express = require('express');
const router = express.Router();

const addPagamento = require('./add');
const { getPagamentos, getPagamentoById } = require('./select');
const updatePagamento = require('./update');
const deletePagamento = require('./del');

// rotas
router.post('/', addPagamento);
router.get('/', getPagamentos);
router.get('/:id', getPagamentoById);
router.put('/:id', updatePagamento);
router.delete('/:id', deletePagamento);

module.exports = router;
