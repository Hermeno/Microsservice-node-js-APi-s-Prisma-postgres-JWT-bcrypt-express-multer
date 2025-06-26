const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const auth = require('./auth');
// import auth from './auth.js'
const app = express();
app.use(express.json());


// app.use('/clientes', auth, require('./routes/clientes'));
app.use('/usuarios-internos', require('./routes/usuariosInternos'));
// app.use('/estabelecimentos', auth, require('./routes/estabelecimentos'));
// app.use('/mesas', auth, require('./routes/mesas'));
app.use('/usuarios-finais', require('./routes/usuariosFinais'));
// app.use('/categorias', auth, require('./routes/categorias'));
// app.use('/produtos', auth, require('./routes/produtos'));
// app.use('/pedidos', auth, require('./routes/pedidos'));
// app.use('/itens-pedido', auth, require('./routes/itensPedido'));
// app.use('/historico-beneficios', auth, require('./routes/historicoBeneficios'));
// app.use('/pagamentos', auth, require('./routes/pagamentos'));
// app.use('/acessos-qrcode', auth, require('./routes/acessosQrcode'));
// app.use('/log-admin', auth, require('./routes/logAdmin'));
// app.use('/historico-relatorios', auth, require('./routes/historicoRelatorios'));
// app.use('/monitoramento-sistema', auth, require('./routes/monitoramentoSistema'));


















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});