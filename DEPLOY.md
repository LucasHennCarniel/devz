# 🚀 DEPLOY DEVZ - KINGHOST

## 📋 Guia Completo de Deploy

### ✅ Pré-requisitos
- VPS ou hospedagem com suporte a Node.js na KingHost
- Node.js 18+ instalado no servidor
- PM2 (recomendado para gerenciamento de processos)

---

## 📦 PREPARAÇÃO LOCAL

### 1. Gerar Build e ZIP de Deploy
```bash
# Execute o script automatizado:
gerar-zip-deploy.bat

# Ou manualmente:
npm run build:prod
```

**Resultado**: Arquivo `devz-deploy-kinghost.zip` com todos os arquivos necessários.

---

## 📤 UPLOAD VIA FTP

### Dados de Conexão
- **Servidor**: ftp.devzgroup.com.br
- **Usuário**: devzgroup
- **Senha**: D3vz@2022
- **Porta**: 21

### Configuração FileZilla
1. **File** → **Site Manager** → **New Site**
2. **Host**: ftp.devzgroup.com.br
3. **Protocol**: FTP
4. **User**: devzgroup
5. **Password**: D3vz@2022
6. **Connect**

### Processo de Upload
1. **Navegar**: Vá para `/www/` ou `/public_html/`
2. **Upload**: Arraste `devz-deploy-kinghost.zip`
3. **Extrair**: Via cPanel File Manager ou SSH

---

## ⚙️ CONFIGURAÇÃO NO SERVIDOR

### 1. Após Extrair o ZIP
```bash
# Instalar dependências
npm install --production

# Configurar ambiente
# Edite o arquivo .env se necessário
nano .env
```

### 2. Iniciar Aplicação
```bash
# Teste local
npm start

# Produção com PM2 (recomendado)
pm2 start ecosystem.config.json

# Comandos úteis PM2
pm2 status
pm2 logs devz-frontend
pm2 restart devz-frontend
```

### 3. Configuração Automática PM2
```bash
pm2 startup
pm2 save
```

---

## 🌐 CONFIGURAÇÃO DO DOMÍNIO

### Para devzgroup.com.br
- Configure proxy reverso para porta 3000
- Ou use a porta fornecida pela KingHost

### 🔧 CONFIGURAÇÕES NO PAINEL KINGHOST

#### 1. Node.js Configuration
- **Versão**: Node.js 18+
- **Arquivo Principal**: `server.js`
- **Porta**: Use a porta fornecida pela KingHost (não 3000)
- **Comando de Start**: `npm start` ou `node server.js`

#### 2. Variáveis de Ambiente
```env
NODE_ENV=production
PORT=[PORTA_FORNECIDA_KINGHOST]
```

#### 3. Domain Pointing
- **Documento Root**: `/www/` ou `/public_html/`
- **Index File**: Será servido pelo Express (server.js)

### Nginx (exemplo)
```nginx
server {
    listen 80;
    server_name devzgroup.com.br;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 📁 ESTRUTURA NO SERVIDOR

Após deploy, você terá:
```
/www/ (ou /public_html/)
├── build/                 # Arquivos React compilados
│   ├── assets/
│   └── index.html
├── server.js             # Servidor Express
├── package.json          # Dependências
├── ecosystem.config.json # Configuração PM2
├── .env                 # Variáveis de ambiente
└── README-DEPLOY.txt    # Instruções básicas
```

---

## 🔧 VARIÁVEIS DE AMBIENTE

Arquivo `.env` necessário:
```env
NODE_ENV=production
PORT=3000

# Configurações específicas da KingHost
DB_HOST=localhost
DB_PORT=3306

# URLs
FRONTEND_URL=https://devzgroup.com.br
API_URL=https://devzgroup.com.br/api
```

---

## 🚨 TROUBLESHOOTING

### Problemas Comuns

#### Site não carrega
1. Verifique se arquivos foram extraídos na pasta correta
2. Teste: `npm start` via SSH
3. Verifique logs: `pm2 logs devz-frontend`

#### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install --production
```

#### Porta em uso
```bash
# Verificar porta
lsof -i :3000
# Matar processo
kill -9 PID
```

#### Permissões
```bash
chmod 755 server.js
chown usuario:usuario -R /caminho/projeto
```

---

## 🔄 ATUALIZAÇÃO/REDEPLOY

### Processo Simples
1. Execute localmente: `gerar-zip-deploy.bat`
2. Upload do novo ZIP via FTP
3. Extrair substituindo arquivos antigos
4. No servidor: `pm2 restart devz-frontend`

### Com Backup
```bash
# Fazer backup
cp -r projeto projeto-backup-$(date +%Y%m%d)

# Após upload e extração
pm2 restart devz-frontend
```

---

## 📞 SUPORTE

- **KingHost**: (51) 3550-3200
- **Email**: suporte@kinghost.com.br
- **Chat**: Disponível no painel de controle

---

## ✅ CHECKLIST FINAL

- [ ] Build gerado (`npm run build:prod`)
- [ ] ZIP criado (`gerar-zip-deploy.bat`)
- [ ] Upload via FTP concluído
- [ ] Arquivos extraídos no servidor
- [ ] Dependências instaladas (`npm install --production`)
- [ ] Variáveis de ambiente configuradas (`.env`)
- [ ] Aplicação iniciada (`pm2 start ecosystem.config.json`)
- [ ] Domínio configurado
- [ ] Teste completo do site funcionando

---

**🎯 Projeto pronto para produção na KingHost!**
