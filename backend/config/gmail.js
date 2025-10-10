const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração otimizada do transportador SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  // Otimizações para velocidade
  pool: true, // Usar pool de conexões
  maxConnections: 5, // Máximo 5 conexões simultâneas
  maxMessages: 100, // Máximo 100 mensagens por conexão
  rateDelta: 1000, // 1 segundo entre envios
  rateLimit: 5 // Máximo 5 emails por segundo
});

module.exports = transporter;
