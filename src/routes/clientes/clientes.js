const express = require('express');
const router = express.Router();
const asyncHandler = require('../../asyncHandler');

// Importar funções
const addCliente = require('./add');
const updateCliente = require('./update');
const { getClientes, getClienteById } = require('./select');
const deleteCliente = require('./del');

// Mapear endpoints
router.post('/', asyncHandler(addCliente));
router.get('/', asyncHandler(getClientes));
router.get('/:id', asyncHandler(getClienteById));
router.put('/:id', asyncHandler(updateCliente));
router.delete('/:id', asyncHandler(deleteCliente));

module.exports = router;
