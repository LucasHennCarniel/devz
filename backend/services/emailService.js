const emailConfig = require('../config/gmail');

/**
 * Serviço para envio de emails usando Nodemailer
 */
class EmailService {
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
   * Envia email de contato do site
   * @param {Object} contactData - Dados do formulário de contato
   * @param {string} contactData.name - Nome do remetente
   * @param {string} contactData.email - Email do remetente
   * @param {string} contactData.phone - Telefone (opcional)
   * @param {string} contactData.message - Mensagem
   * @param {string} contactData.subject - Assunto (opcional)
   * @returns {Object} Resultado do envio
   */
  async sendContactEmail(contactData) {
    try {
      const subject = contactData.subject || `Novo contato do site - ${contactData.name}`;
      
      const htmlTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Novo contato recebido do site</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Telefone:</strong> ${contactData.phone}</p>` : ''}
            <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Mensagem:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Este email foi enviado automaticamente pelo sistema de contato do site Devz.
          </p>
        </div>
      `;

      const textTemplate = `
Novo contato recebido do site

Nome: ${contactData.name}
Email: ${contactData.email}
${contactData.phone ? `Telefone: ${contactData.phone}` : ''}
Data: ${new Date().toLocaleString('pt-BR')}

Mensagem:
${contactData.message}

---
Este email foi enviado automaticamente pelo sistema de contato do site Devz.
      `;

      return await this.sendEmail({
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: subject,
        text: textTemplate,
        html: htmlTemplate
      });
    } catch (error) {
      console.error('❌ Erro ao enviar email de contato:', error.message);
      throw error;
    }
  }

  /**
   * Envia email de confirmação para o usuário
   * @param {Object} userData - Dados do usuário
   * @param {string} userData.name - Nome do usuário
   * @param {string} userData.email - Email do usuário
   * @returns {Object} Resultado do envio
   */
  async sendConfirmationEmail(userData) {
    try {
      const subject = 'Confirmação de contato - Devz';
      
      const htmlTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px;">
            <h1 style="color: #007bff;">Devz</h1>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #333;">Olá, ${userData.name}!</h2>
            
            <p>Recebemos seu contato e agradecemos pelo interesse em nossos serviços.</p>
            
            <p>Nossa equipe irá analisar sua mensagem e retornar o mais breve possível.</p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>O que acontece agora?</strong></p>
              <ul>
                <li>Analisamos sua solicitação</li>
                <li>Preparamos uma proposta personalizada</li>
                <li>Retornamos em até 24 horas</li>
              </ul>
            </div>
            
            <p>Se você tiver alguma dúvida urgente, pode entrar em contato conosco:</p>
            <ul>
              <li>Email: contato@devz.com.br</li>
              <li>Telefone: (47) 99999-9999</li>
            </ul>
            
            <p>Atenciosamente,<br>Equipe Devz</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Devz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      `;

      const textTemplate = `
Olá, ${userData.name}!

Recebemos seu contato e agradecemos pelo interesse em nossos serviços.

Nossa equipe irá analisar sua mensagem e retornar o mais breve possível.

O que acontece agora?
- Analisamos sua solicitação
- Preparamos uma proposta personalizada
- Retornamos em até 24 horas

Se você tiver alguma dúvida urgente, pode entrar em contato conosco:
- Email: contato@devz.com.br
- Telefone: (47) 99999-9999

Atenciosamente,
Equipe Devz

© ${new Date().getFullYear()} Devz. Todos os direitos reservados.
      `;

      return await this.sendEmail({
        to: userData.email,
        subject: subject,
        text: textTemplate,
        html: htmlTemplate
      });
    } catch (error) {
      console.error('❌ Erro ao enviar email de confirmação:', error.message);
      throw error;
    }
  }

  /**
   * Envia newsletter ou email promocional
   * @param {Object} newsletterData - Dados do newsletter
   * @param {string} newsletterData.to - Destinatário
   * @param {string} newsletterData.subject - Assunto
   * @param {string} newsletterData.content - Conteúdo
   * @returns {Object} Resultado do envio
   */
  async sendNewsletter(newsletterData) {
    try {
      const htmlTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background-color: #007bff;">
            <h1 style="color: white; margin: 0;">Devz Newsletter</h1>
          </div>
          
          <div style="padding: 20px;">
            ${newsletterData.content}
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <p style="color: #666; font-size: 12px;">
              Você está recebendo este email porque se inscreveu em nossa newsletter.
              <br>
              <a href="#" style="color: #007bff;">Cancelar inscrição</a>
            </p>
          </div>
        </div>
      `;

      return await this.sendEmail({
        to: newsletterData.to,
        subject: newsletterData.subject,
        text: newsletterData.content.replace(/<[^>]*>/g, ''), // Remove HTML tags
        html: htmlTemplate
      });
    } catch (error) {
      console.error('❌ Erro ao enviar newsletter:', error.message);
      throw error;
    }
  }
}

module.exports = new EmailService();
