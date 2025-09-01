const express = require('express');
const router = express.Router();

const addItem = require('./add');
const { getAll, getById } = require('./select');
const updateItem = require('./update');
const deleteItem = require('./del');

// Rotas
router.post('/', addItem);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
