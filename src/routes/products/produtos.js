const express = require('express');
const router = express.Router();

const addProduto = require('./add');
const { getAllProdutos, getProdutoById } = require('./select');
const updateProduto = require('./update');
const deleteProduto = require('./del');

router.post('/', addProduto);
router.get('/', getAllProdutos);
router.get('/:id', getProdutoById);
router.put('/:id', updateProduto);
router.delete('/:id', deleteProduto);

module.exports = router;
