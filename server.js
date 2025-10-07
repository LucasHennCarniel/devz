const express = require('express');
const path = require('path');
const app = express();

// Porta definida pelo ambiente ou fallback para 3000
const PORT = process.env.PORT || 3000;

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));

// Servir arquivos de imagem da pasta public
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Rota para todas as páginas (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).send('Erro interno do servidor');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor DEVZ rodando na porta ${PORT}`);
  console.log(`📱 Acesse: http://localhost:${PORT}`);
  console.log(`📁 Servindo arquivos de: ${path.join(__dirname, 'build')}`);
}).on('error', (err) => {
  console.error('❌ Erro ao iniciar servidor:', err);
});

module.exports = app;
