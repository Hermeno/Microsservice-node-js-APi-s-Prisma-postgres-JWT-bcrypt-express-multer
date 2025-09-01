const express = require('express');
const router = express.Router();

const addEstabelecimento = require('./add');
const { getAll, getById } = require('./select');
const updateEstabelecimento = require('./update');
const deleteEstabelecimento = require('./del');

// CRUD
router.post('/', addEstabelecimento);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateEstabelecimento);
router.delete('/:id', deleteEstabelecimento);

module.exports = router;
