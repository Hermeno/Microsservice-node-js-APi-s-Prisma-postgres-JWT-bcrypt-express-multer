const express = require('express');
const router = express.Router();

const addRelatorio = require('./add');
const { getAll, getById } = require('./select');
const updateRelatorio = require('./update');
const deleteRelatorio = require('./del');

// Rotas CRUD
router.post('/', addRelatorio);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateRelatorio);
router.delete('/:id', deleteRelatorio);

module.exports = router;
