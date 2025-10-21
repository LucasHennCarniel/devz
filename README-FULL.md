# 🚀 Devz Group - Website Institucional

Sistema completo de website institucional com formulário de contato, API de envio de emails e gestão de produtos ERP customizados por segmento.

[![Status](https://img.shields.io/badge/status-ativo-success)]()
[![Node](https://img.shields.io/badge/node-%3E%3D16-brightgreen)]()
[![React](https://img.shields.io/badge/react-18-blue)]()

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias)
- [Instalação Rápida](#-instalação-rápida)
- [Desenvolvimento Local](#-desenvolvimento-local)
- [Configuração da API](#-configuração-da-api)
- [Deploy em Produção](#-deploy-em-produção)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Visão Geral

Website institucional da **Devz Group** (devzgroup.com.br) com:

✅ **Frontend Moderno**
- Landing page responsiva com animações suaves
- Páginas dedicadas para cada produto ERP
- Sistema de cores customizadas por produto
- Modal de contato com validação

✅ **Backend Robusto**
- API RESTful para envio de emails
- Integração com Gmail SMTP
- Sistema de logs e monitoramento

✅ **Deploy Inteligente**
- Detecção automática de ambiente
- Funciona com qualquer porta
- Configuração zero para produção

---

## 🛠 Tecnologias

### Frontend
- **React 18** + TypeScript
- **Vite** (Build Tool ultra-rápido)
- **Tailwind CSS** (Estilização)
- **Lucide Icons** (Ícones)
- **Radix UI** (Componentes acessíveis)

### Backend
- **Node.js** + Express
- **Nodemailer** (Envio de emails via Gmail)
- **CORS** habilitado
- **dotenv** (Variáveis de ambiente)

---

## ⚡ Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/devz.git
cd devz

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# 4. Inicie o projeto em modo desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173` (Frontend) e `http://localhost:3001` (Backend)

---

## 💻 Desenvolvimento Local

### 1. Configuração Inicial

Crie um arquivo `.env` na raiz do projeto:

```bash
# Configurações do Gmail SMTP (OBRIGATÓRIO)
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-google

# Porta do servidor backend
PORT=3001

# URL da API (deixe vazio para detecção automática)
VITE_API_URL=

# Ambiente
NODE_ENV=development
```

### 2. Obter Senha de App do Gmail

1. Acesse: https://myaccount.google.com/security
2. Ative a **Verificação em duas etapas**
3. Acesse: https://myaccount.google.com/apppasswords
4. Crie uma senha de app para "Email"
5. Use a senha gerada (16 caracteres) no `.env`

### 3. Iniciar Servidores

```bash
# Opção 1: Iniciar tudo de uma vez (PowerShell)
.\start-dev.ps1

# Opção 2: Iniciar manualmente

# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

### 4. Verificar Status

```bash
# PowerShell
.\check-status.ps1

# Ou manualmente
# Backend: http://localhost:3001
# Frontend: http://localhost:5173
```

---

## 🔧 Configuração da API

### Como Funciona

O sistema detecta **automaticamente** o ambiente:

#### 🏠 Desenvolvimento (localhost)
```
Frontend: http://localhost:5173
Backend: http://localhost:3001
```
✅ **Nenhuma configuração necessária!**

#### 🚀 Produção (devzgroup.com.br)
```
Frontend: https://devzgroup.com.br
Backend: https://devzgroup.com.br/api
```
✅ **Detecção automática!**

### Detecção Automática de Ambiente

O sistema verifica nesta ordem:

1. **Variável VITE_API_URL** (se configurada no `.env`)
   ```bash
   VITE_API_URL=https://api.devzgroup.com.br
   ```

2. **Hostname atual**
   - `localhost` ou `127.0.0.1` → `http://localhost:3001`
   - Qualquer outro domínio → `https://dominio.com/api`

3. **Logs no console** (F12) mostram qual URL está sendo usada

### Customização (Opcional)

Se precisar de uma URL específica, configure no `.env`:

```bash
# Para API em subdomínio
VITE_API_URL=https://api.devzgroup.com.br

# Para API em domínio diferente
VITE_API_URL=https://outro-dominio.com/api
```

---

## 🚀 Deploy em Produção

### Pré-requisitos

- Node.js 16+ instalado no servidor
- npm ou yarn instalado
- Acesso SSH ao servidor
- Domínio configurado (devzgroup.com.br)

### Passo a Passo

#### 1. Preparar Variáveis de Ambiente

Crie um arquivo `.env` no servidor:

```bash
# Gmail SMTP (use credenciais reais)
EMAIL_USER=contato@devzgroup.com.br
EMAIL_PASS=senha-de-app-google-16-caracteres

# Porta (sua hospedagem pode definir automaticamente)
PORT=3001

# URL da API (deixe vazio para detecção automática - RECOMENDADO)
VITE_API_URL=

# Ambiente
NODE_ENV=production
```

#### 2. Build do Frontend

```bash
# No seu computador local
npm install
npm run build

# Isso cria a pasta 'dist' com os arquivos otimizados
```

#### 3. Enviar Arquivos para o Servidor

```bash
# Via SCP, FTP ou Git
scp -r dist/ usuario@servidor:/var/www/devz/
scp server.js usuario@servidor:/var/www/devz/
scp -r backend/ usuario@servidor:/var/www/devz/
scp package.json usuario@servidor:/var/www/devz/
scp .env usuario@servidor:/var/www/devz/
```

#### 4. Instalar Dependências no Servidor

```bash
# SSH no servidor
ssh usuario@servidor
cd /var/www/devz

# Instalar dependências
npm install --production

# Instalar PM2 globalmente
npm install -g pm2
```

#### 5. Configurar Nginx

Crie/edite `/etc/nginx/sites-available/devzgroup`:

```nginx
server {
    listen 80;
    server_name devzgroup.com.br www.devzgroup.com.br;

    # Frontend (arquivos estáticos)
    location / {
        root /var/www/devz/dist;
        try_files $uri $uri/ /index.html;
        
        # Cache para assets
        location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ativar o site:

```bash
sudo ln -s /etc/nginx/sites-available/devzgroup /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 6. Iniciar Backend com PM2

```bash
# Iniciar o servidor
pm2 start server.js --name devz-api

# Salvar configuração
pm2 save

# Configurar para iniciar no boot
pm2 startup
# Copie e execute o comando que o PM2 mostrar

# Ver status
pm2 status

# Ver logs
pm2 logs devz-api
```

#### 7. Configurar SSL/HTTPS (Recomendado)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d devzgroup.com.br -d www.devzgroup.com.br

# Renovação automática já está configurada
```

### Opção Alternativa: Deploy com Subdomínio para API

Se quiser usar `api.devzgroup.com.br`:

1. Configure DNS para apontar `api.devzgroup.com.br` para o servidor
2. Adicione no `.env`:
   ```bash
   VITE_API_URL=https://api.devzgroup.com.br
   ```
3. Crie configuração Nginx separada para `api.devzgroup.com.br`

---

## 🧪 Testando em Produção

Após o deploy, teste:

1. **Frontend**: https://devzgroup.com.br ✅
2. **API Health**: https://devzgroup.com.br/api/health ✅
3. **Formulário**: Preencha e envie um teste ✅

Verifique os logs:

```bash
# Logs do backend
pm2 logs devz-api

# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

---

## 📁 Estrutura do Projeto

```
devz/
├── backend/                 # Backend Node.js
│   ├── config/
│   │   └── gmail.js        # Configuração Nodemailer
│   ├── routes/
│   │   └── email.js        # Rotas de email
│   └── services/
│       └── emailService.js # Serviço de envio
│
├── src/                     # Frontend React
│   ├── components/         # Componentes React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SimpleContactModal.tsx
│   │   └── products/       # Páginas de produtos
│   │       ├── DevzWeb.tsx      # Cor: #1d4fdb
│   │       ├── DevzAgro.tsx     # Cor: #149156
│   │       ├── DevzFood.tsx     # Cor: #ff6666
│   │       ├── DevzClinicas.tsx # Cor: #00b1f7
│   │       ├── DevzSaloes.tsx   # Cor: #ff7896
│   │       ├── DevzPet.tsx      # Cor: #ffd45c
│   │       └── DevzShop.tsx     # Cor: #865dfb
│   │
│   ├── config/
│   │   └── api.ts          # Configuração da API
│   │
│   └── img/                # Imagens e assets
│
├── public/                  # Arquivos públicos
├── dist/                    # Build de produção (gerado)
│
├── server.js               # Servidor Express
├── package.json            # Dependências
├── vite.config.ts          # Configuração Vite
├── tailwind.config.ts      # Configuração Tailwind
│
├── .env                    # Variáveis de ambiente (não commitado)
├── .env.example            # Template de configuração
├── .env.production.example # Template para produção
│
└── README.md               # Esta documentação
```

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia frontend (Vite)
npm run server           # Inicia backend (Node.js)
npm run dev:all          # Inicia ambos simultaneamente

# Build
npm run build            # Build de produção
npm run preview          # Preview do build

# PowerShell (Windows)
.\start-dev.ps1          # Inicia tudo automaticamente
.\stop-dev.ps1           # Para todos os servidores
.\check-status.ps1       # Verifica status dos servidores

# PM2 (Produção)
pm2 start server.js --name devz-api
pm2 stop devz-api
pm2 restart devz-api
pm2 logs devz-api
pm2 status
```

---

## 🐛 Troubleshooting

### ❌ Erro: "Failed to fetch" ao enviar formulário

**Causa**: API URL incorreta ou backend não está rodando

**Solução**:
1. Abra o console do navegador (F12)
2. Veja qual URL está sendo chamada (deve aparecer log)
3. Verifique se o backend está rodando:
   ```bash
   # Desenvolvimento
   curl http://localhost:3001/api/health
   
   # Produção
   curl https://devzgroup.com.br/api/health
   ```
4. Se o backend não estiver rodando:
   ```bash
   # Desenvolvimento
   npm run server
   
   # Produção
   pm2 restart devz-api
   ```

### ❌ Erro: Porta 3001 já está em uso

**Causa**: Outra aplicação usando a porta

**Solução 1** - Mudar a porta:
```bash
# No .env
PORT=3002
```

**Solução 2** - Parar o processo:
```bash
# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force

# Linux/Mac
lsof -ti:3001 | xargs kill -9
```

### ❌ Emails não estão sendo enviados

**Causa**: Credenciais do Gmail incorretas

**Solução**:
1. Verifique se está usando **senha de app** (não a senha normal)
2. Confirme que a 2FA está ativada no Gmail
3. Veja os logs do servidor:
   ```bash
   # Desenvolvimento
   # (veja no terminal onde rodou npm run server)
   
   # Produção
   pm2 logs devz-api
   ```
4. Teste manualmente a conexão SMTP

### ❌ CORS Error em produção

**Causa**: Configuração incorreta do CORS

**Solução**:
O CORS já está configurado para aceitar todas as origens. Se ainda assim houver erro:
1. Verifique se o Nginx está configurado corretamente
2. Confirme que os headers estão sendo passados:
   ```nginx
   proxy_set_header Host $host;
   proxy_set_header X-Real-IP $remote_addr;
   ```

### ❌ Build falha com erro de memória

**Causa**: Build grande consumindo muita memória

**Solução**:
```bash
# Aumentar memória do Node.js
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### ❌ PM2 não inicia automaticamente no boot

**Causa**: Startup script não configurado

**Solução**:
```bash
pm2 save
pm2 startup
# Copie e execute o comando que aparece
```

---

## 📊 Monitoramento

### Verificar Status do Sistema

```bash
# Status do PM2
pm2 status

# Uso de recursos
pm2 monit

# Logs em tempo real
pm2 logs devz-api --lines 100

# Métricas detalhadas
pm2 show devz-api
```

### Health Check

```bash
# Verificar API
curl https://devzgroup.com.br/api/health

# Resposta esperada:
# {"message":"API funcionando","timestamp":"2025-10-15T..."}
```

---

## 🔐 Segurança

### Checklist de Segurança

- ✅ Usar HTTPS (SSL/TLS) em produção
- ✅ Não commitar arquivo `.env` no Git
- ✅ Usar senha de app do Gmail (não senha normal)
- ✅ Configurar firewall no servidor
- ✅ Manter Node.js e dependências atualizadas
- ✅ Usar PM2 para logs e restart automático
- ✅ Configurar backups regulares
- ✅ Monitorar logs de erro

### Variáveis Sensíveis

Nunca commite no Git:
- `.env` - Credenciais reais
- `EMAIL_PASS` - Senha do Gmail
- Certificados SSL privados

---

## 📝 Checklist de Deploy

- [ ] Configurar `.env` com credenciais reais
- [ ] Testar envio de email localmente
- [ ] Rodar `npm run build`
- [ ] Enviar arquivos para servidor
- [ ] Instalar dependências no servidor
- [ ] Configurar Nginx
- [ ] Iniciar backend com PM2
- [ ] Configurar SSL/HTTPS
- [ ] Testar formulário em produção
- [ ] Verificar logs de erro
- [ ] Configurar monitoramento
- [ ] Documentar credenciais (em local seguro)

---

## 🎨 Cores dos Produtos

Cada produto ERP tem sua cor primária customizada:

| Produto | Cor | Hex |
|---------|-----|-----|
| DEVZ Web | 🔵 Azul Royal | `#1d4fdb` |
| DEVZ Agro | 🟢 Verde | `#149156` |
| DEVZ Food | 🔴 Vermelho | `#ff6666` |
| DEVZ Clínicas | 💙 Azul Claro | `#00b1f7` |
| DEVZ Salões | 💗 Rosa | `#ff7896` |
| DEVZ Pet | 💛 Amarelo | `#ffd45c` |
| DEVZ Shop | 💜 Roxo | `#865dfb` |

As cores são aplicadas automaticamente através da prop `primaryColor` no componente `ProductBase`.

---

## 📞 Suporte

**Devz Group**
- 🌐 Website: https://devzgroup.com.br
- 📧 Email: contato@devzgroup.com.br
- 📱 WhatsApp: (49) 9999-9999

**Logs Importantes**:
```bash
# Backend
pm2 logs devz-api

# Nginx
sudo tail -f /var/log/nginx/error.log

# Status geral
pm2 status && sudo systemctl status nginx
```

---

## 📄 Licença

© 2025 Devz Group. Todos os direitos reservados.

---

## 🎯 Próximos Passos

Após instalar:

1. ✅ Customize o conteúdo das páginas
2. ✅ Adicione suas imagens e logos
3. ✅ Configure Google Analytics (se necessário)
4. ✅ Teste todos os formulários
5. ✅ Configure backups automáticos
6. ✅ Monitore os logs regularmente

---

**Desenvolvido com ❤️ por Devz Group**
