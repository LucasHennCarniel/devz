const emailService = require('../services/emailService');

/**
 * Controller para operações de email
 */
class EmailController {
  
  /**
   * Envia email de contato do formulário do site
   * POST /api/email/contact
   */
  async sendContactEmail(req, res) {
    try {
      const { name, email, phone, message, subject } = req.body;

      // Validação básica
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Nome, email e mensagem são obrigatórios'
        });
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Email inválido'
        });
      }

      const contactData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim(),
        message: message.trim(),
        subject: subject?.trim()
      };

      // Envia email para a empresa
      const contactResult = await emailService.sendContactEmail(contactData);

      // Envia email de confirmação para o usuário (opcional)
      let confirmationResult = null;
      try {
        confirmationResult = await emailService.sendConfirmationEmail({
          name: contactData.name,
          email: contactData.email
        });
      } catch (confirmationError) {
        console.warn('⚠️ Falha ao enviar email de confirmação:', confirmationError.message);
        // Não falha a requisição se apenas o email de confirmação falhar
      }

      res.status(200).json({
        success: true,
        message: 'Email enviado com sucesso',
        data: {
          contactEmailSent: contactResult.success,
          confirmationEmailSent: confirmationResult?.success || false,
          messageId: contactResult.messageId
        }
      });

    } catch (error) {
      console.error('❌ Erro no controller de email de contato:', error.message);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  /**
   * Envia email personalizado
   * POST /api/email/send
   */
  async sendCustomEmail(req, res) {
    try {
      const { to, subject, text, html } = req.body;

      // Validação básica
      if (!to || !subject || !text) {
        return res.status(400).json({
          success: false,
          message: 'Destinatário, assunto e texto são obrigatórios'
        });
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(to)) {
        return res.status(400).json({
          success: false,
          message: 'Email de destinatário inválido'
        });
      }

      const emailData = {
        to: to.trim().toLowerCase(),
        subject: subject.trim(),
        text: text.trim(),
        html: html?.trim()
      };

      const result = await emailService.sendEmail(emailData);

      res.status(200).json({
        success: true,
        message: 'Email enviado com sucesso',
        data: {
          messageId: result.messageId,
          to: emailData.to,
          subject: emailData.subject
        }
      });

    } catch (error) {
      console.error('❌ Erro no controller de email personalizado:', error.message);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  /**
   * Envia newsletter
   * POST /api/email/newsletter
   */
  async sendNewsletter(req, res) {
    try {
      const { to, subject, content } = req.body;

      // Validação básica
      if (!to || !subject || !content) {
        return res.status(400).json({
          success: false,
          message: 'Destinatário, assunto e conteúdo são obrigatórios'
        });
      }

      // Validação de email (pode ser array de emails)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emails = Array.isArray(to) ? to : [to];
      
      for (const email of emails) {
        if (!emailRegex.test(email)) {
          return res.status(400).json({
            success: false,
            message: `Email inválido: ${email}`
          });
        }
      }

      const results = [];
      
      // Envia para cada destinatário
      for (const email of emails) {
        try {
          const newsletterData = {
            to: email.trim().toLowerCase(),
            subject: subject.trim(),
            content: content.trim()
          };

          const result = await emailService.sendNewsletter(newsletterData);
          results.push({
            email,
            success: result.success,
            messageId: result.messageId
          });
        } catch (emailError) {
          console.error(`❌ Erro ao enviar newsletter para ${email}:`, emailError.message);
          results.push({
            email,
            success: false,
            error: emailError.message
          });
        }
      }

      const successCount = results.filter(r => r.success).length;
      const totalCount = results.length;

      res.status(200).json({
        success: successCount > 0,
        message: `Newsletter enviada: ${successCount}/${totalCount} emails enviados com sucesso`,
        data: {
          results,
          summary: {
            total: totalCount,
            success: successCount,
            failed: totalCount - successCount
          }
        }
      });

    } catch (error) {
      console.error('❌ Erro no controller de newsletter:', error.message);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  /**
   * Testa conectividade do email
   * GET /api/email/test
   */
  async testEmailConnection(req, res) {
    try {
      const emailConfig = require('../config/gmail');
      const isConnected = await emailConfig.verifyConnection();

      res.status(200).json({
        success: true,
        message: 'Teste de conectividade realizado',
        data: {
          connected: isConnected,
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('❌ Erro no teste de conectividade:', error.message);
      res.status(500).json({
        success: false,
        message: 'Erro ao testar conectividade',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  /**
   * Retorna status da configuração de email
   * GET /api/email/status
   */
  async getEmailStatus(req, res) {
    try {
      const hasEmailUser = !!process.env.EMAIL_USER;
      const hasEmailPass = !!process.env.EMAIL_PASS;
      const hasContactEmail = !!process.env.CONTACT_EMAIL;

      res.status(200).json({
        success: true,
        message: 'Status da configuração de email',
        data: {
          configured: hasEmailUser && hasEmailPass,
          hasEmailUser,
          hasEmailPass,
          hasContactEmail,
          emailUser: process.env.EMAIL_USER || 'não configurado',
          contactEmail: process.env.CONTACT_EMAIL || 'não configurado'
        }
      });

    } catch (error) {
      console.error('❌ Erro ao obter status do email:', error.message);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

module.exports = new EmailController();
