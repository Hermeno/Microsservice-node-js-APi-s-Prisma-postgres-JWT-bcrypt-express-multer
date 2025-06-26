const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

class CreateController {
    async createUser(req, res) {
        const { username, password, email, cliente_id, telefone, funcao } = req.body;
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const user = await prisma.usuarios_internos.create({
                data: {
                    nome: username,
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
    }



    async login (req, res) {
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
                const isMatch = await bcrypt.compare(userInfo.password, user.password)
                if(!isMatch){
                    return res.status(401).json({ error: 'E-mail ou senha inválidos' });
                }
            const token = jwt.sign({ id: user.id, user: user.username, name: user.name,  email: user.email }, JWT_SECRET, { expiresIn: '7d' });
            res.status(200).json(token)
        } 
        catch(error){
            res.status(401).json({ error: 'E-mail ou senha inválidos' });
        }
}







}

module.exports = CreateController;