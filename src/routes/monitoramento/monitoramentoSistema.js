const express = require('express');
const router = express.Router();

const addRegistro = require('./add');
const { getAll, getById } = require('./select');
const updateRegistro = require('./update');
const deleteRegistro = require('./del');

// Rotas
router.post('/', addRegistro);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateRegistro);
router.delete('/:id', deleteRegistro);

module.exports = router;
