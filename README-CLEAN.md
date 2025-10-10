# 📧 API de Email - Devz

API simples e funcional para envio de emails via Gmail SMTP.

## 🚀 Funcionalidades

- ✅ Envio de emails via Gmail
- ✅ Formulário de contato do site
- ✅ Template HTML profissional
- ✅ Validação de campos obrigatórios
- ✅ Reply-to automático para clientes

## ⚙️ Configuração

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar credenciais
Renomeie `.env.example` para `.env` e configure:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-do-gmail
PORT=3000
```

### 3. Iniciar servidor
```bash
node server.js
```

### 4. Testar configuração
```bash
node test.js
```

## 📡 Endpoints da API

### POST `/api/email/contato`
Enviar formulário de contato do site.

**Dados necessários:**
```json
{
  "nome": "Nome do Cliente",
  "email": "email@cliente.com",
  "telefone": "(11) 99999-9999",
  "servico": "DevzWeb",
  "mensagem": "Mensagem do cliente"
}
```

### GET `/api/health`
Verificar status da API.

## 💻 Integração no Frontend

```javascript
async function enviarContato(dados) {
  try {
    const response = await fetch('http://localhost:3000/api/email/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Mensagem enviada com sucesso!');
    } else {
      alert('Erro: ' + result.message);
    }
  } catch (error) {
    alert('Erro de conexão');
  }
}
```

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── config/
│   │   └── gmail.js          # Configuração SMTP
│   └── routes/
│       └── email.js          # Rotas da API
├── server.js                 # Servidor principal
├── test.js                   # Teste da configuração
├── .env.example              # Exemplo de configuração
└── README.md                 # Esta documentação
```

## 🔧 Configuração do Gmail

1. Acesse: https://myaccount.google.com/security
2. Ative a verificação em duas etapas
3. Vá em "Senhas de app"
4. Gere uma senha para "Email"
5. Use essa senha no arquivo `.env`

## 🎯 Status

✅ **Funcionando:** Email configurado para `atena.digital03@gmail.com`  
✅ **Testado:** Envio de emails OK  
✅ **Produção:** Pronto para deploy  

---

**Desenvolvido para Devz** | 2025
