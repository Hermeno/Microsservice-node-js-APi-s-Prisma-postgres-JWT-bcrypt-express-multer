const { Cliente } = require('../models/cliente');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    // implementa��o futura
    res.send('register endpoint');
};

const loginController = async (req, res) => {
    // implementa��o futura
    res.send('login endpoint');
};

module.exports = { registerController, loginController };
