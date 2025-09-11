const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const auth = require('./auth');
const usuariosFinaisRoutes = require('./routes/usuariosFinais');
const usuariosInternosRoutes = require('./routes/usuariosInternos');
const errorHandler = require('./middlewareError');

class AppServer {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.middlewares();
  }

  config() {
    this.app.use(express.json());
  }

  routes() {
    // ✅ aqui dentro
    this.app.use('/usuarios-internos', usuariosInternosRoutes);
    this.app.use('/usuarios-finais', usuariosFinaisRoutes);

    this.app.use('/clientes', require('./routes/clientes/clientes'));
    // this.app.use('/categorias', require('./routes/categorias/'));
    this.app.use('/pedidos', require('./routes/pedidos/pedidos'));
    this.app.use('/produtos', require('./routes/products/produtos'));
    this.app.use('/estabelecimentos', require('./routes/estabelecimentos/estabelecimentos'));
    this.app.use('/historicoBenefios', require('./routes/historicoBeneficios/historicoBeneficios'));
    this.app.use('/historicoPedidos', require('./routes/historicosRelatorio/historicoRelatorios'));
    this.app.use('/itensPedido', require('./routes/itensPedido/itensPedido'));
    this.app.use('/mesas', require('./routes/mesas/mesas'));
    this.app.use('/monitoramento', require('./routes/monitoramento/monitoramentoSistema'));
    this.app.use('/payment', require('./routes/payment/pagamentos'));

    this.app.use('/auth', auth); 
  }
  middlewares() {
    // Middleware de erro global
    this.app.use(errorHandler);
  }




  start() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

const server = new AppServer();
server.start();
