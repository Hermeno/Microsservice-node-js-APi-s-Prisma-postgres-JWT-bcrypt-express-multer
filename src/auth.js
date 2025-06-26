const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {  // ✅ Agora com "next"

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', '').trim(), JWT_SECRET);

        req.userId = decoded.id;  // ✅ Adicionando o ID do usuário ao objeto de requisição
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

// export default auth;
module.exports = auth;