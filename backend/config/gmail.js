const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração para email de contato (atena.digital03@gmail.com)
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
  rateLimit: 5
});

// Configuração para email de trabalhe conosco (financeiro01atena@gmail.com)
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
  rateLimit: 5
});

module.exports = {
  contatoTransporter,
  trabalheConoscoTransporter
};

