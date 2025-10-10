const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const {
  emailRateLimit,
  contactRateLimit,
  newsletterRateLimit,
  validateEmailData,
  sanitizeHtml,
  logEmailRequest,
  checkEmailConfig
} = require('../middlewares/emailMiddleware');

/**
 * Rotas para operações de email
 * Base URL: /api/email
 */

// Aplicar middlewares globais para todas as rotas de email
router.use(logEmailRequest);
router.use(checkEmailConfig);

/**
 * @route   POST /api/email/contact
 * @desc    Envia email de contato do formulário do site
 * @access  Public
 * @body    { name, email, phone?, message, subject? }
 */
router.post('/contact', 
  contactRateLimit,
  validateEmailData,
  sanitizeHtml,
  emailController.sendContactEmail
);

/**
 * @route   POST /api/email/send
 * @desc    Envia email personalizado
 * @access  Public (considere adicionar autenticação em produção)
 * @body    { to, subject, text, html? }
 */
router.post('/send',
  emailRateLimit,
  validateEmailData,
  sanitizeHtml,
  emailController.sendCustomEmail
);

/**
 * @route   POST /api/email/newsletter
 * @desc    Envia newsletter para lista de emails
 * @access  Public (considere adicionar autenticação em produção)
 * @body    { to: string|array, subject, content }
 */
router.post('/newsletter',
  newsletterRateLimit,
  validateEmailData,
  sanitizeHtml,
  emailController.sendNewsletter
);

/**
 * @route   GET /api/email/test
 * @desc    Testa conectividade do servidor de email
 * @access  Public
 */
router.get('/test', emailController.testEmailConnection);

/**
 * @route   GET /api/email/status
 * @desc    Retorna status da configuração de email
 * @access  Public
 */
router.get('/status', emailController.getEmailStatus);

module.exports = router;
