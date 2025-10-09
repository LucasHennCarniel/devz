const express = require('express');
const path = require('path');
const app = express();

// Configuração de porta seguindo exatamente o padrão KingHost
// Para script "server.js", a variável será PORT_SERVER
// Fallback para 21023 conforme configuração desejada no painel
const PORT = process.env.PORT_SERVER;

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Em ambientes com proxy reverso (Nginx/Apache)
app.set('trust proxy', 1);

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
  console.log('Servidor rodando na porta: ' + PORT);
}).on('error', (err) => {
  console.error('❌ Erro ao iniciar servidor:', err);
});

module.exports = app;
