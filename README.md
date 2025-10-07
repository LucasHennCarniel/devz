# 🚀 DEVZ - Website Institucional

Aplicação React + Vite + Express para o site institucional da DEVZ.

## 📋 Sobre o Projeto

Site institucional da DEVZ apresentando:
- Soluções ERP e automações com IA
- Produtos especializados (DevzAgro, DevzClinicas, DevzFood, etc.)
- Dashboards e relatórios com Power BI
- Desenvolvimento sob medida

## 🛠️ Tecnologias

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Express.js, Node.js
- **Build**: Vite 6.x
- **Deploy**: KingHost + PM2

## 🚀 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build:prod

# Iniciar servidor
npm start
```

## 📦 Deploy para Produção

### 1. Gerar ZIP de Deploy
```bash
gerar-zip-deploy.bat
```

### 2. Upload para KingHost
- **FTP**: ftp.devzgroup.com.br
- **Usuário**: devzgroup
- **Guia completo**: [DEPLOY.md](./DEPLOY.md)

### 3. Configurar no Servidor
```bash
npm install --production
pm2 start ecosystem.config.json
```

## 📁 Estrutura do Projeto

```
devz/
├── src/                 # Código fonte React
│   ├── components/      # Componentes React
│   ├── img/            # Imagens
│   └── types/          # Tipos TypeScript
├── build/              # Build de produção
├── public/             # Arquivos públicos
├── server.js           # Servidor Express
├── package.json        # Dependências
├── ecosystem.config.json # Configuração PM2
├── gerar-zip-deploy.bat # Script de deploy
└── DEPLOY.md          # Guia de deploy
```

## 🌐 URLs

- **Desenvolvimento**: http://localhost:3250
- **Produção**: https://devzgroup.com.br

## 📞 Suporte

- **KingHost**: (51) 3550-3200
- **Repositório**: https://github.com/LucasHennCarniel/devz

---

**Desenvolvido por DEVZ Team** 💙
