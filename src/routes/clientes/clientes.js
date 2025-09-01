const express = require('express');
const router = express.Router();

// Importar funções
const addCliente = require('./add');
const updateCliente = require('./update');
const { getClientes, getClienteById } = require('./select');
const deleteCliente = require('./del');

// Mapear endpoints
router.post('/', addCliente);
router.get('/', getClientes);
router.get('/:id', getClienteById);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;
