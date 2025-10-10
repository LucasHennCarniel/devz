const rateLimit = require('express-rate-limit');

/**
 * Middleware de rate limiting para proteger a API de spam
 */

// Rate limit geral para todas as rotas de email
const emailRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // máximo 10 requests por IP a cada 15 minutos
  message: {
    success: false,
    message: 'Muitas tentativas de envio de email. Tente novamente em 15 minutos.',
    error: 'Rate limit exceeded'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limit específico para formulário de contato (mais restritivo)
const contactRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 3, // máximo 3 contatos por IP por hora
  message: {
    success: false,
    message: 'Muitos formulários de contato enviados. Tente novamente em 1 hora.',
    error: 'Contact rate limit exceeded'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limit para newsletter (muito restritivo)
const newsletterRateLimit = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 horas
  max: 1, // máximo 1 newsletter por IP por dia
  message: {
    success: false,
    message: 'Newsletter já enviada hoje. Tente novamente amanhã.',
    error: 'Newsletter rate limit exceeded'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Middleware de validação de dados
 */
const validateEmailData = (req, res, next) => {
  const { body } = req;
  
  // Remove espaços em branco desnecessários
  Object.keys(body).forEach(key => {
    if (typeof body[key] === 'string') {
      body[key] = body[key].trim();
    }
  });

  // Validação de campos muito longos (proteção contra ataques)
  const maxLengths = {
    name: 100,
    email: 254, // RFC 5321
    phone: 20,
    subject: 200,
    message: 5000,
    text: 10000,
    html: 50000,
    content: 50000
  };

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (body[field] && body[field].length > maxLength) {
      return res.status(400).json({
        success: false,
        message: `Campo '${field}' excede o tamanho máximo de ${maxLength} caracteres`,
        error: 'Field too long'
      });
    }
  }

  // Validação de caracteres maliciosos
  const forbiddenPatterns = [
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i
  ];

  for (const [field, value] of Object.entries(body)) {
    if (typeof value === 'string') {
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(value)) {
          return res.status(400).json({
            success: false,
            message: `Campo '${field}' contém conteúdo não permitido`,
            error: 'Invalid content detected'
          });
        }
      }
    }
  }

  next();
};

/**
 * Middleware de sanitização de HTML
 */
const sanitizeHtml = (req, res, next) => {
  // Implementação básica - em produção, use uma biblioteca como DOMPurify
  if (req.body.html) {
    // Remove scripts e eventos
    req.body.html = req.body.html
      .replace(/<script[^>]*>.*?<\/script>/gis, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/javascript:/gi, '');
  }

  if (req.body.content) {
    req.body.content = req.body.content
      .replace(/<script[^>]*>.*?<\/script>/gis, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/javascript:/gi, '');
  }

  next();
};

/**
 * Middleware de log de emails
 */
const logEmailRequest = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const userAgent = req.get('User-Agent');
  const timestamp = new Date().toISOString();
  
  console.log(`📧 Email request - ${timestamp} - IP: ${clientIP} - ${req.method} ${req.originalUrl}`);
  
  // Log adicional para emails de contato
  if (req.path === '/contact' && req.body.email) {
    console.log(`📧 Contact form - From: ${req.body.email} - Name: ${req.body.name}`);
  }

  next();
};

/**
 * Middleware de verificação de configuração
 */
const checkEmailConfig = (req, res, next) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(503).json({
      success: false,
      message: 'Serviço de email não configurado',
      error: 'Email service not configured'
    });
  }
  next();
};

module.exports = {
  emailRateLimit,
  contactRateLimit,
  newsletterRateLimit,
  validateEmailData,
  sanitizeHtml,
  logEmailRequest,
  checkEmailConfig
};
