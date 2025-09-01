
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

class UsuariosFinaisController {
  async cadastroUsuarioFinal(req, res) {
    try {
      const { nome, email, telefone, senha, foto, tipo_acesso } = req.body;

      if (email) {
        const exists = await prisma.usuarios_finais.findUnique({ where: { email } });
        if (exists) return res.status(400).json({ error: 'E-mail já cadastrado.' });
      }

      const hashPassword = senha ? await bcrypt.hash(senha, 10) : null;

      const user = await prisma.usuarios_finais.create({
        data: {
          nome,
          email,
          telefone,
          senha: hashPassword,
          foto,
          tipo_acesso,
        },
      });

      res.status(201).json({ message: 'Usuário cadastrado com sucesso', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async loginUsuarioFinal(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await prisma.usuarios_finais.findUnique({ where: { email } });

      if (!user || !user.senha) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      const valid = await bcrypt.compare(senha, user.senha);
      if (!valid) {
        return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
      }

      const token = jwt.sign({ id: user.id, nome: user.nome, email: user.email }, JWT_SECRET, { expiresIn: '1d' });

      res.json({ message: 'Login realizado com sucesso', token, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

const usuariosFinaisController = new UsuariosFinaisController();

router.post('/cadastro-usuario-final', (req, res) => usuariosFinaisController.cadastroUsuarioFinal(req, res));
router.post('/login-usuario-final', (req, res) => usuariosFinaisController.loginUsuarioFinal(req, res));

module.exports = router;