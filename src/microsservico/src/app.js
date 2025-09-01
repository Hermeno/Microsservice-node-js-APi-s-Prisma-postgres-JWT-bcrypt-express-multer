require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');

class AppServer {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/auth', authRoutes);
    }

    start() {
        const PORT = process.env.PORT || 3001;
        this.app.listen(PORT, () => console.log('Microserviço rodando na porta ' + PORT));
    }
}

const server = new AppServer();
server.start();
