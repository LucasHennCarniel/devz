/**
 * Script de teste para verificar a configuração da API de email
 * Execute: node test-email-api.js
 */

require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('\n📧 === TESTE DE CONFIGURAÇÃO DO EMAIL === \n');

// Mostrar variáveis de ambiente
console.log('🔍 Verificando variáveis de ambiente:');
console.log('EMAIL_USER:', process.env.EMAIL_USER || '❌ NÃO DEFINIDO');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ DEFINIDO' : '❌ NÃO DEFINIDO');
console.log('EMAIL_USER_TRABALHE_CONOSCO:', process.env.EMAIL_USER_TRABALHE_CONOSCO || '❌ NÃO DEFINIDO');
console.log('EMAIL_PASS_TRABALHE_CONOSCO:', process.env.EMAIL_PASS_TRABALHE_CONOSCO ? '✅ DEFINIDO' : '❌ NÃO DEFINIDO');

console.log('\n🔧 Testando conexão com Gmail...\n');

// Criar transporter de teste
const testTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'atena.digital03@gmail.com',
    pass: process.env.EMAIL_PASS || 'vpcx dqzk phch odgi'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verificar conexão
testTransporter.verify(function (error, success) {
  if (error) {
    console.error('❌ ERRO na conexão com Gmail:');
    console.error(error.message);
    console.error('\n⚠️  Possíveis causas:');
    console.error('1. Senha de app incorreta ou expirada');
    console.error('2. Verificação em duas etapas não ativada no Gmail');
    console.error('3. Senha de app não gerada corretamente');
    console.error('4. Conexão com internet instável');
    console.error('\n📖 Para resolver:');
    console.error('   - Acesse: https://myaccount.google.com/apppasswords');
    console.error('   - Gere uma nova senha de app');
    console.error('   - Atualize no arquivo .env');
    process.exit(1);
  } else {
    console.log('✅ Conexão com Gmail estabelecida com sucesso!');
    console.log('✅ Servidor de email está pronto para enviar mensagens');
    console.log('\n🎉 Configuração está correta!\n');
    process.exit(0);
  }
});
