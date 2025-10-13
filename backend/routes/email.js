const express = require('express');
const multer = require('multer');
const { contatoTransporter, trabalheConoscoTransporter } = require('../config/gmail');

const router = express.Router();

// Configurar multer para upload de arquivos em memória
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // Limite de 5MB
  },
  fileFilter: (req, file, cb) => {
    // Aceitar apenas PDF, DOC e DOCX
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não permitido. Use PDF, DOC ou DOCX.'));
    }
  }
});

// Rota específica para formulário de contato do site
router.post('/contato', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem, servico } = req.body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        success: false,
        message: 'Nome, email e mensagem são obrigatórios'
      });
    }

    // Template do email de contato
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Novo Contato - Devz
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
          ${servico ? `<p><strong>Serviço de Interesse:</strong> ${servico}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Mensagem:</h3>
          <p style="background: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
            ${mensagem}
          </p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Email enviado automaticamente pelo site da Devz em ${new Date().toLocaleString('pt-BR')}
        </p>
      </div>
    `;

    // Configuração do email usando o transporter de contato
    const mailOptions = {
      from: 'atena.digital03@gmail.com',
      to: 'atena.digital03@gmail.com', // Enviar para você mesmo
      subject: `[SITE] Novo contato: ${nome}`,
      html: htmlContent,
      replyTo: email // Para responder direto para o cliente
    };

    // Enviar email
    await contatoTransporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente.'
    });
  }
});

// Rota para enviar email de "Trabalhe Conosco" (com upload de arquivo)
router.post('/trabalhe-conosco', upload.single('curriculo'), async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;
    const arquivo = req.file;

    // Validação
    if (!nome || !email || !telefone || !mensagem) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios'
      });
    }

    // Conteúdo do email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">
          Nova Candidatura - Trabalhe Conosco
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          ${arquivo ? `<p><strong>Currículo:</strong> ${arquivo.originalname}</p>` : ''}
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #555;">Mensagem:</h3>
          <p style="line-height: 1.6; color: #666;">${mensagem}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          Email enviado através do formulário "Trabalhe Conosco" do site Devz
        </p>
      </div>
    `;

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER_TRABALHE_CONOSCO,
      to: 'financeiro01atena@gmail.com', // Email do financeiro
      subject: `[TRABALHE CONOSCO] Nova candidatura: ${nome}`,
      html: htmlContent,
      replyTo: email, // Para responder direto para o candidato
      attachments: arquivo ? [{
        filename: arquivo.originalname,
        content: arquivo.buffer
      }] : []
    };

    // Enviar email usando o transporter de trabalhe conosco
    await trabalheConoscoTransporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Candidatura enviada com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('Erro ao enviar email de trabalhe conosco:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar candidatura. Tente novamente.'
    });
  }
});

// Rota para enviar email genérico
router.post('/send', async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios: to, subject e (text ou html)'
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html
    };

    await contatoTransporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Email enviado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// Rota para testar configuração (mais rápida)
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'API de email funcionando',
    config: {
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASS
    }
  });
});

module.exports = router;
