# 🚀 Guia de Deploy para Produção

## 📋 Pré-requisitos

1. **Node.js** instalado no servidor (versão 16 ou superior)
2. **npm** ou **yarn** instalado
3. Acesso SSH ao servidor de hospedagem
4. Domínio configurado apontando para o servidor

---

## 🔧 Configuração para Produção

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

```bash
# Configurações do Gmail SMTP
EMAIL_USER=contato@devz.com.br
EMAIL_PASS=sua-senha-de-app-google

# Porta do servidor (sua hospedagem pode definir automaticamente)
PORT=3001

# URL da API em produção
# Opção 1: Se a API estiver no mesmo domínio (Recomendado)
VITE_API_URL=https://devzgroup.com.br

# Opção 2: Se a API estiver em subdomínio
# VITE_API_URL=https://api.devzgroup.com.br

# Ambiente
NODE_ENV=production
```

### 2. Build do Frontend

```bash
# Instalar dependências
npm install

# Criar build de produção
npm run build
```

Isso criará uma pasta `dist` com os arquivos otimizados do frontend.

### 3. Configuração do Backend

O backend (server.js) já está configurado para funcionar em produção:
- Usa a variável `PORT` do ambiente (ou porta 3001 como fallback)
- Escuta em `0.0.0.0` para aceitar conexões externas
- CORS habilitado para aceitar requisições do frontend

---

## 📦 Estrutura de Deploy

### Opção 1: Frontend e Backend no Mesmo Servidor (Recomendado)

```
devzgroup.com.br
├── / (Frontend - arquivos da pasta dist)
└── /api (Backend - Node.js rodando)
```

**Configuração do Nginx:**

```nginx
server {
    listen 80;
    server_name devzgroup.com.br www.devzgroup.com.br;

    # Frontend (arquivos estáticos)
    location / {
        root /var/www/devz/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Opção 2: Frontend e Backend em Servidores Separados

Se o backend estiver em servidor/domínio diferente, configure o `.env`:

```bash
VITE_API_URL=https://api.devzgroup.com.br
```

---

## 🔐 Configuração do Gmail

1. Ative a verificação em 2 etapas: https://myaccount.google.com/security
2. Crie uma senha de app: https://myaccount.google.com/apppasswords
3. Use a senha gerada no `.env` (EMAIL_PASS)

---

## 🚀 Comandos de Deploy

### Usando PM2 (Recomendado para manter o servidor rodando)

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar o backend
pm2 start server.js --name devz-api

# Salvar configuração
pm2 save

# Configurar para iniciar automaticamente no boot
pm2 startup
```

### Comandos Úteis do PM2

```bash
# Ver status
pm2 status

# Ver logs
pm2 logs devz-api

# Reiniciar
pm2 restart devz-api

# Parar
pm2 stop devz-api

# Remover
pm2 delete devz-api
```

---

## 🧪 Testando em Produção

Após o deploy, teste:

1. **Frontend**: Acesse `https://devzgroup.com.br`
2. **API Health**: Acesse `https://devzgroup.com.br/api/health`
3. **Formulário de Contato**: Preencha e envie um formulário de teste

---

## 🔍 Troubleshooting

### Erro: "Failed to fetch" ao enviar formulário

**Causa**: API URL incorreta ou CORS não configurado

**Solução**:
1. Verifique o console do navegador (F12) para ver qual URL está sendo chamada
2. Verifique se o backend está rodando: `pm2 status`
3. Teste a API diretamente: `curl https://devzgroup.com.br/api/health`

### Erro: Porta em uso

**Causa**: Outra aplicação já está usando a porta 3001

**Solução**: 
1. Mude a porta no `.env`: `PORT=3002`
2. Ou pare o processo que está usando a porta

### Emails não estão sendo enviados

**Causa**: Credenciais do Gmail incorretas

**Solução**:
1. Verifique se usou uma senha de app (não a senha normal do Gmail)
2. Veja os logs: `pm2 logs devz-api`
3. Teste o servidor diretamente

---

## 📝 Checklist de Deploy

- [ ] Criar arquivo `.env` com as variáveis corretas
- [ ] Configurar EMAIL_USER e EMAIL_PASS
- [ ] Definir VITE_API_URL se necessário
- [ ] Rodar `npm install`
- [ ] Rodar `npm run build`
- [ ] Copiar pasta `dist` para o servidor
- [ ] Instalar dependências no servidor
- [ ] Configurar Nginx/Apache
- [ ] Iniciar backend com PM2
- [ ] Testar formulário de contato
- [ ] Verificar logs de erro
- [ ] Configurar SSL/HTTPS (recomendado)

---

## 🌐 Exemplo de URLs

**Desenvolvimento:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

**Produção:**
- Frontend: https://devzgroup.com.br
- Backend: https://devzgroup.com.br/api

---

## 💡 Dicas

1. **Use HTTPS em produção** para segurança
2. **Configure backups** automáticos
3. **Monitore os logs** regularmente com `pm2 logs`
4. **Configure alertas** para quando o servidor cair
5. **Teste sempre** em ambiente de staging antes de produção

---

## 📞 Suporte

Se tiver problemas, verifique:
1. Logs do PM2: `pm2 logs`
2. Console do navegador (F12)
3. Status da API: `https://devzgroup.com.br/api/health`
