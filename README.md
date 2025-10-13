# 🚀 Devz - Website & API de Contato

Sistema completo de website institucional com formulário de contato e API de envio de emails.

---

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [API de Email](#-api-de-email)
- [Acesso via Rede Local](#-acesso-via-rede-local)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Configuração](#-configuração)
- [Resolução de Problemas](#-resolução-de-problemas)

---

## 🛠 Tecnologias

### Frontend
- React 18 + TypeScript
- Vite (Build Tool)
- Tailwind CSS
- Lucide Icons

### Backend
- Node.js + Express
- Nodemailer (envio de emails)
- CORS habilitado
- dotenv (variáveis de ambiente)

---

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── config/
│   │   └── gmail.js          # Configuração do Nodemailer
│   ├── routes/
│   │   └── email.js          # Rotas de email
│   └── services/
│       └── emailService.js   # Serviço de envio de email
├── src/
│   ├── components/
│   │   └── SimpleContactModal.tsx  # Formulário de contato
│   └── config/
│       └── api.ts            # Configuração da API (detecção automática)
├── server.js                 # Servidor Express
├── start-dev.ps1            # Script para iniciar ambiente
├── stop-dev.ps1             # Script para parar servidores
├── check-status.ps1         # Script para verificar status
└── package.json
```

---

## 📦 Instalação

```powershell
# Clone o repositório
git clone https://github.com/LucasHennCarniel/devz.git
cd devz

# Instale as dependências
npm install

# Configure o arquivo .env (veja seção Configuração)
```

---

## 🚀 Uso

### Modo Simples (Recomendado)

```powershell
# Inicia Backend + Frontend automaticamente
.\start-dev.ps1

# Verifica se está tudo funcionando
.\check-status.ps1

# Para todos os servidores
.\stop-dev.ps1
```

### Modo Manual

```powershell
# Terminal 1 - Backend
node server.js

# Terminal 2 - Frontend
npm run dev
```

### URLs de Acesso

- **Frontend Local:** http://localhost:3250/
- **Backend Local:** http://localhost:3000
- **Frontend Rede:** http://172.16.31.129:3250/
- **Backend Rede:** http://172.16.31.129:3000

---

## 📧 API de Email

### Endpoint Principal

```
POST /api/email/contato
```

### Request Body

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "(11) 99999-9999",
  "cargo": "Gerente",
  "empresa": "Empresa XYZ",
  "tamanho": "Pequena empresa (10-49 funcionários)",
  "site": "www.empresa.com",
  "estado": "SP",
  "segmento": "Tecnologia",
  "servico": "Demonstração",
  "mensagem": "Quero conhecer o produto"
}
```

### Response Success

```json
{
  "success": true,
  "message": "Email enviado com sucesso!",
  "messageId": "<unique-id>"
}
```

### Response Error

```json
{
  "success": false,
  "message": "Erro ao enviar email",
  "error": "Detalhes do erro"
}
```

---

## 🌐 Acesso via Rede Local

O sistema possui **detecção automática de URL da API**:

### Como Funciona

```typescript
// Acesso localhost → API usa localhost
http://localhost:3250 → http://localhost:3000/api/email/contato

// Acesso por IP → API usa mesmo IP
http://172.16.31.129:3250 → http://172.16.31.129:3000/api/email/contato
```

### Para Compartilhar com Colegas

1. Inicie os servidores: `.\start-dev.ps1`
2. Compartilhe a URL: `http://172.16.31.129:3250/`
3. Pronto! O formulário funcionará automaticamente

**Requisitos:**
- Ambos na mesma rede WiFi/Ethernet
- Firewall do Windows deve permitir Node.js
- IP pode mudar ao reconectar (use `ipconfig` para verificar)

---

## 📜 Scripts Disponíveis

### Desenvolvimento

```powershell
# Inicia ambiente completo (Backend + Frontend)
.\start-dev.ps1

# Para todos os servidores
.\stop-dev.ps1

# Verifica status dos servidores
.\check-status.ps1

# Frontend em modo desenvolvimento
npm run dev

# Backend
node server.js
```

### Build & Deploy

```powershell
# Build do frontend
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

---

## ⚙️ Configuração

### Arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```env
# Email Configuration
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app-gmail

# Server Configuration
PORT=3000
```

### Configurar Gmail App Password

1. Acesse: https://myaccount.google.com/security
2. Ative "Verificação em duas etapas"
3. Vá em "Senhas de app"
4. Gere uma senha para "Email"
5. Use essa senha no `EMAIL_PASS`

### Email Atual Configurado

```
Email: atena.digital03@gmail.com
App Password: vpcx dqzk phch odgi
```

---

## 🐛 Resolução de Problemas

### Backend não inicia

```powershell
# Verifique se a porta 3000 está livre
netstat -an | findstr :3000

# Se estiver ocupada, mate o processo
.\stop-dev.ps1
```

### Frontend não conecta ao Backend

```powershell
# 1. Verifique se backend está rodando
.\check-status.ps1

# 2. Veja os logs no console do navegador (F12)
# Deve mostrar: "URL da API: http://..."

# 3. Teste o endpoint manualmente
curl http://localhost:3000/api/health
```

### Erro "Failed to fetch"

**Causa:** Backend não está rodando ou firewall bloqueando

**Solução:**
1. Execute `.\check-status.ps1`
2. Se backend não estiver rodando: `.\start-dev.ps1`
3. Configure firewall para permitir Node.js

### Colega não consegue acessar

**Checklist:**
- [ ] Ambos na mesma rede?
- [ ] Backend está rodando? (`.\check-status.ps1`)
- [ ] IP está correto? (`ipconfig`)
- [ ] Firewall permite Node.js?

**Teste rápido:**
```powershell
# No computador do colega
ping 172.16.31.129
curl http://172.16.31.129:3000/api/health
```

### Erro de CORS

Se aparecer erro de CORS, verifique se o backend tem:

```javascript
app.use(cors()); // Já está configurado
```

---

## 📊 Status do Projeto

- ✅ Frontend React + TypeScript funcionando
- ✅ Backend Node.js + Express funcionando
- ✅ API de envio de email configurada
- ✅ Formulário de contato integrado
- ✅ Detecção automática de URL da API
- ✅ Acesso via rede local habilitado
- ✅ Scripts de gerenciamento prontos
- ✅ Documentação completa

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Add: nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📝 Changelog

### [2025-10-13] - Melhorias de Rede Local
- ✨ Adicionada detecção automática de URL da API
- ✨ Backend configurado para aceitar conexões da rede local
- ✨ Scripts de gerenciamento (start, stop, check)
- 🐛 Corrigido problema de input de números 1,2,3 no formulário
- 📝 Documentação unificada e completa
- 🧹 Limpeza de arquivos não utilizados

### [Anterior]
- ✨ Sistema de envio de email implementado
- ✨ Frontend React com Tailwind
- ✨ Backend Express com Nodemailer

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👥 Equipe

- **Desenvolvimento:** Lucas Carniel
- **Email:** atena.digital03@gmail.com

---

## 🔗 Links Úteis

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)
- [Documentação do Nodemailer](https://nodemailer.com/)
- [Documentação do Express](https://expressjs.com/)

---

**Feito com ❤️ pela equipe Devz**
