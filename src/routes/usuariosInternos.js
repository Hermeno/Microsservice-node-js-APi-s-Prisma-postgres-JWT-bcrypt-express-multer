const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET; 





 router.post('/cadastro_usuarios_internos', async (req, res) => {
        const { nome, senha, email, cliente_id, telefone, funcao } = req.body;
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(senha, salt);

            const user = await prisma.usuarios_internos.create({
                data: {
                    nome: nome,
                    senha: hashPassword,
                    email,
                    cliente_id,
                    telefone,
                    funcao,
                },
            });

            res.status(201).json(user);
        } catch (error) {
            if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
                res.status(400).json({ error: 'E-mail já está em uso.' });
            } else {
                res.status(400).json({ error: 'Erro ao cadastrar o usuário.' });
            }
        }
   });



    router.get('/login_usuarios_internos', async (req, res) => {
        try{
            const userInfo =req.body
            const user = await prisma.user.findUnique({
                where: {
                    email: userInfo.email,
                },

            });
                if(!user){
                    return res.status(401).json({ error: 'E-mail ou senha inválidos' });
                }
                const isMatch = await bcrypt.compare(userInfo.senha, user.senha)
                if(!isMatch){
                    return res.status(401).json({ error: 'E-mail ou senha inválidos' });
                }
            const token = jwt.sign({ id: user.id, user: user.username, name: user.name,  email: user.email }, JWT_SECRET, { expiresIn: '7d' });
            res.status(200).json(token)
        } 
        catch(error){
            res.status(401).json({ error: 'E-mail ou senha inválidos' });
        }
    });






module.exports = router;