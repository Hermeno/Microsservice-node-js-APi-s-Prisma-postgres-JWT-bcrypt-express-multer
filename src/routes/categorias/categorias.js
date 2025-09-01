const express = require('express');
const router = express.Router();

// Importando controladores
const addCategoria = require('./add');
const updateCategoria = require('./update');
const { getCategorias, getCategoriaById } = require('./select');
const deleteCategoria = require('./del');

// Mapear endpoints
router.post('/', addCategoria);
router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

module.exports = router;
