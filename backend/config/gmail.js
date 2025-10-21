const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('📧 Configurando transporters de email...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_USER_TRABALHE_CONOSCO:', process.env.EMAIL_USER_TRABALHE_CONOSCO);

// Configuração para email de contato
const contatoTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'atena.digital03@gmail.com',
    pass: process.env.EMAIL_PASS || 'vpcx dqzk phch odgi'
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateDelta: 1000,
  rateLimit: 5,
  tls: {
    rejectUnauthorized: false
  }
});

// Configuração para email de trabalhe conosco
const trabalheConoscoTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER_TRABALHE_CONOSCO || 'financeiro01atena@gmail.com',
    pass: process.env.EMAIL_PASS_TRABALHE_CONOSCO || 'smuf ptmg dciu kdxo'
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateDelta: 1000,
  rateLimit: 5,
  tls: {
    rejectUnauthorized: false
  }
});

// Verificar conexão dos transporters (opcional, mas útil para debug)
contatoTransporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Erro na verificação do transporter de contato:', error.message);
  } else {
    console.log('✅ Transporter de contato pronto para enviar emails');
  }
});

trabalheConoscoTransporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Erro na verificação do transporter trabalhe conosco:', error.message);
  } else {
    console.log('✅ Transporter trabalhe conosco pronto para enviar emails');
  }
});

module.exports = {
  contatoTransporter,
  trabalheConoscoTransporter
};

