const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Cliente {
    static async create(data) {
        return await prisma.clientes.create({ data });
    }

    static async findByEmail(email) {
        return await prisma.clientes.findUnique({ where: { email } });
    }
}

module.exports = { Cliente };
