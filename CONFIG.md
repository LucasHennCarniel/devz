# 🎯 Configuração Rápida - Produção

## ⚙️ Como Funciona

O sistema detecta **automaticamente** o ambiente:

### 🏠 Desenvolvimento (localhost)
```
Frontend: http://localhost:5173
Backend: http://localhost:3001
```
✅ **Nenhuma configuração necessária!**

### 🚀 Produção (seu domínio)
```
Frontend: https://devzgroup.com.br
Backend: https://devzgroup.com.br/api
```

---

## 📝 Configuração para Produção

### Opção 1: API no mesmo domínio (Recomendado)

**Não precisa configurar nada!** 🎉

O sistema detecta automaticamente que está em produção e usa:
- `https://devzgroup.com.br/api`

### Opção 2: API em domínio diferente

Crie um arquivo `.env` na raiz:

```bash
VITE_API_URL=https://api.devzgroup.com.br
```

Depois rode:
```bash
npm run build
```

---

## 🔍 Como o Sistema Detecta

1. **Verifica variável de ambiente** `VITE_API_URL`
   - Se existir, usa ela ✅

2. **Detecta hostname**
   - Se for `localhost` ou `127.0.0.1` → usa `http://localhost:3001`
   - Se for outro domínio → usa `https://devzgroup.com.br/api`

---

## 📦 Deploy Simplificado

```bash
# 1. Criar build
npm run build

# 2. Subir arquivos da pasta 'dist' para o servidor

# 3. Configurar Nginx para rotear /api para o backend

# 4. Iniciar backend
pm2 start server.js --name devz-api
```

**Veja o arquivo DEPLOY.md para instruções completas!**

---

## 🧪 Testar se está funcionando

1. Abra o console do navegador (F12)
2. Envie um formulário
3. Você verá a mensagem: `🌐 Usando API URL: ...`

---

## ❓ FAQ

**Q: Minha hospedagem usa porta diferente, preciso configurar?**
A: Não! O sistema detecta automaticamente. A porta é configurada pela hospedagem no servidor backend.

**Q: Como sei qual API está sendo usada?**
A: Abra o console do navegador (F12) e veja a mensagem de log.

**Q: Posso usar IP ao invés de domínio?**
A: Sim! O sistema funciona com IP também.

---

## 🎨 Exemplo de Nginx

```nginx
location /api {
    proxy_pass http://localhost:3001;
    proxy_set_header Host $host;
}
```

Simples assim! 🚀
