// Teste da API de Email - Devz
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🧪 Testando API de Email Devz\n');

async function testarAPI() {
  try {
    // 1. Verificar configurações
    console.log('📧 Email configurado:', process.env.EMAIL_USER);
    console.log('🔑 Senha configurada:', !!process.env.EMAIL_PASS);
    
    // 2. Testar conexão SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    console.log('\n⏳ Verificando conexão SMTP...');
    await transporter.verify();
    console.log('✅ Conexão SMTP OK!');
    
    // 3. Enviar email de teste
    console.log('\n⏳ Enviando email de teste...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '✅ Teste API Devz - Funcionando!',
      html: `
        <h2>🎉 API de Email Funcionando!</h2>
        <p>Se você recebeu este email, a configuração está perfeita!</p>
        <p><strong>Hora do teste:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        <hr>
        <p><small>API Devz - ${new Date().getFullYear()}</small></p>
      `
    });
    
    console.log('✅ Email enviado com sucesso!');
    console.log('📨 ID:', info.messageId);
    console.log('\n🎯 Verifique sua caixa de entrada!');
    
  } catch (error) {
    console.log('❌ Erro:', error.message);
  }
}

testarAPI();
