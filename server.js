const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste básica
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Devz funcionando!',
    email: process.env.EMAIL_USER || 'não configurado'
  });
});

// Rotas de email
const emailRoutes = require('./backend/routes/email');
app.use('/api/email', emailRoutes);

// Rota de saúde
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'API funcionando',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor - 0.0.0.0 permite acesso pela rede local
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📧 Email configurado: ${process.env.EMAIL_USER || 'NÃO CONFIGURADO'}`);
  console.log(`🌐 Acesso local: http://localhost:${PORT}`);
  console.log(`🌐 Acesso rede: http://172.16.31.129:${PORT}`);
});
