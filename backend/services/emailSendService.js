const emailConfig = require('../config/gmail');

/**
 * Serviço para envio de emails usando Nodemailer
 */
class EmailSendService {
  constructor() {
    this.transporter = emailConfig.getTransporter();
    this.defaultOptions = emailConfig.getDefaultMailOptions();
  }

  /**
   * Envia um email simples
   * @param {Object} emailData - Dados do email
   * @param {string} emailData.to - Destinatário
   * @param {string} emailData.subject - Assunto
   * @param {string} emailData.text - Texto simples
   * @param {string} emailData.html - HTML (opcional)
   * @returns {Object} Resultado do envio
   */
  async sendEmail(emailData) {
    try {
      const mailOptions = {
        ...this.defaultOptions,
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html || null
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Email enviado com sucesso:', info.messageId);
      return {
        success: true,
        messageId: info.messageId,
        response: info.response
      };
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error.message);
      throw error;
    }
  }

  /**
   * Envia um email simples
   * @param {Object} emailData - Dados do email
   * @param {string} emailData.to - Destinatário
   * @param {string} emailData.subject - Assunto
   * @param {string} emailData.text - Texto simples (opcional)
   * @param {string} emailData.html - HTML (opcional)
   * @param {string} emailData.from - Remetente (opcional)
   * @param {Array} emailData.attachments - Anexos (opcional)
   * @returns {Object} Resultado do envio
   */
  async sendEmail(emailData) {
    try {
      // Verifica autenticação
      const isAuth = await gmailConfig.isAuthenticated();
      if (!isAuth) {
        throw new Error('Gmail API não está autenticada');
      }

      // Valida dados obrigatórios
      this.validateEmailData(emailData);

      // Cria o corpo do email
      const emailBody = createEmailBody(emailData);

      // Envia o email
      const response = await this.gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: emailBody
        }
      });

      console.log('✅ Email enviado com sucesso:', response.data.id);
      
      return {
        success: true,
        messageId: response.data.id,
        message: 'Email enviado com sucesso'
      };

    } catch (error) {
      console.error('❌ Erro ao enviar email:', error.message);
      
      return {
        success: false,
        error: error.message,
        message: 'Erro ao enviar email'
      };
    }
  }

  /**
   * Envia múltiplos emails
   * @param {Array} emailList - Lista de emails para enviar
   * @returns {Object} Resultado dos envios
   */
  async sendBulkEmails(emailList) {
    const results = {
      success: [],
      failed: [],
      total: emailList.length
    };

    for (const emailData of emailList) {
      try {
        const result = await this.sendEmail(emailData);
        
        if (result.success) {
          results.success.push({
            to: emailData.to,
            messageId: result.messageId
          });
        } else {
          results.failed.push({
            to: emailData.to,
            error: result.error
          });
        }

        // Pequeno delay entre envios para evitar rate limiting
        await this.delay(100);

      } catch (error) {
        results.failed.push({
          to: emailData.to,
          error: error.message
        });
      }
    }

    return results;
  }

  /**
   * Envia email de resposta
   * @param {string} originalMessageId - ID da mensagem original
   * @param {Object} replyData - Dados da resposta
   * @returns {Object} Resultado do envio
   */
  async sendReply(originalMessageId, replyData) {
    try {
      // Busca a mensagem original para obter headers necessários
      const originalMessage = await this.gmail.users.messages.get({
        userId: 'me',
        id: originalMessageId,
        format: 'full'
      });

      // Extrai headers necessários
      const headers = originalMessage.data.payload.headers;
      const messageId = headers.find(h => h.name === 'Message-ID')?.value;
      const subject = headers.find(h => h.name === 'Subject')?.value;
      const from = headers.find(h => h.name === 'From')?.value;

      // Configura dados da resposta
      const emailData = {
        to: from,
        subject: subject.startsWith('Re: ') ? subject : `Re: ${subject}`,
        text: replyData.text,
        html: replyData.html,
        inReplyTo: messageId,
        references: messageId
      };

      return await this.sendEmail(emailData);

    } catch (error) {
      console.error('❌ Erro ao enviar resposta:', error.message);
      
      return {
        success: false,
        error: error.message,
        message: 'Erro ao enviar resposta'
      };
    }
  }

  /**
   * Valida dados do email
   * @param {Object} emailData - Dados do email
   */
  validateEmailData(emailData) {
    if (!emailData.to) {
      throw new Error('Destinatário é obrigatório');
    }

    if (!emailData.subject) {
      throw new Error('Assunto é obrigatório');
    }

    if (!emailData.text && !emailData.html) {
      throw new Error('Conteúdo do email (text ou html) é obrigatório');
    }

    // Valida formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailData.to)) {
      throw new Error('Formato de email inválido');
    }
  }

  /**
   * Delay helper
   * @param {number} ms - Milissegundos
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Verifica status do serviço
   * @returns {Object} Status do serviço
   */
  async getServiceStatus() {
    try {
      const isAuth = await gmailConfig.isAuthenticated();
      
      if (isAuth) {
        // Testa envio com email de teste (sem realmente enviar)
        const profile = await this.gmail.users.getProfile({ userId: 'me' });
        
        return {
          status: 'online',
          authenticated: true,
          emailAddress: profile.data.emailAddress,
          messagesTotal: profile.data.messagesTotal
        };
      } else {
        return {
          status: 'offline',
          authenticated: false,
          message: 'Autenticação necessária'
        };
      }
    } catch (error) {
      return {
        status: 'error',
        authenticated: false,
        error: error.message
      };
    }
  }
}

module.exports = EmailSendService;
