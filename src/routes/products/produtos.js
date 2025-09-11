const express = require('express');
const router = express.Router();
const asyncHandler = require('../../asyncHandler');

const addProduto = require('./add');
const { getAllProdutos, getProdutoById } = require('./select');
const updateProduto = require('./update');
const deleteProduto = require('./del');

router.post('/', asyncHandler(addProduto));
router.get('/', asyncHandler(getAllProdutos));
router.get('/:id', asyncHandler(getProdutoById));
router.put('/:id', asyncHandler(updateProduto));
router.delete('/:id', asyncHandler(deleteProduto));

module.exports = router;
