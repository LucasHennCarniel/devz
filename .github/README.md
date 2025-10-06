# GitHub Actions - Guia de Configuração

Este projeto está configurado com GitHub Actions para automação de CI/CD. Aqui estão os workflows disponíveis:

## 📋 Workflows Configurados

### 1. **CI/CD Pipeline** (`ci.yml`)
- **Trigger**: Push para `main` ou `develop`, Pull Requests para `main`
- **Funcionalidades**:
  - Testa em múltiplas versões do Node.js (18.x, 20.x)
  - Instala dependências
  - Executa testes e lint (se disponível)
  - Faz build da aplicação
  - Upload dos arquivos de build como artifacts
  - Deploy automático para staging (branch `develop`)
  - Deploy automático para produção (branch `main`)

### 2. **Code Quality Checks** (`quality.yml`)
- **Trigger**: Push para `main` ou `develop`, Pull Requests para `main`
- **Funcionalidades**:
  - Verificação de compilação TypeScript
  - Verificação de formatação (Prettier)
  - Análise de código (ESLint)
  - Análise do tamanho do bundle

### 3. **Deploy to Production** (`deploy.yml`)
- **Trigger**: Push de tags `v*` ou execução manual
- **Funcionalidades**:
  - Deploy manual com escolha de ambiente
  - Criação de pacote de deployment
  - Exemplos de deploy via SSH e Vercel

### 4. **Security Scan** (`security.yml`)
- **Trigger**: Push para `main`, Pull Requests, agendamento semanal
- **Funcionalidades**:
  - Auditoria de segurança de dependências
  - Verificação de pacotes desatualizados
  - Análise de código com CodeQL

## 🚀 Como Usar

### Primeira Configuração

1. **Faça commit dos arquivos do GitHub Actions**:
   ```bash
   git add .github/
   git commit -m "feat: add GitHub Actions workflows"
   git push origin main
   ```

2. **Configure os Secrets** (se necessário):
   - Vá para Settings > Secrets and variables > Actions
   - Adicione os secrets necessários para deploy:
     - `SSH_PRIVATE_KEY` (para deploy via SSH)
     - `VERCEL_TOKEN`, `ORG_ID`, `PROJECT_ID` (para Vercel)

### Workflows Automáticos

- **Development**: Commits na branch `develop` fazem deploy automático para staging
- **Production**: Commits na branch `main` fazem deploy automático para produção
- **Quality**: Todo push e PR executa verificações de qualidade

### Deploy Manual

Para fazer deploy manual:

1. Vá para Actions no GitHub
2. Selecione "Deploy to Production"
3. Clique em "Run workflow"
4. Escolha o ambiente (production ou staging)

### Criando Releases

Para criar uma release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Isso irá automaticamente executar o workflow de deploy.

## 🔧 Personalização

### Configurando Deploy Real

Edite os arquivos de workflow para configurar seu método de deploy preferido:

#### Deploy via SSH
```yaml
- name: Setup SSH
  uses: webfactory/ssh-agent@v0.7.0
  with:
    ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

- name: Deploy to server
  run: |
    scp deployment.tar.gz user@server:/path/to/app/
    ssh user@server 'cd /path/to/app && tar -xzf deployment.tar.gz && pm2 restart ecosystem.config.json'
```

#### Deploy para Vercel
```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
    vercel-args: '--prod'
```

#### Deploy para AWS S3
```yaml
- name: Deploy to S3
  run: |
    aws s3 sync build/ s3://your-bucket-name --delete
```

### Adicionando Testes

Para adicionar testes reais, instale uma biblioteca de testes e atualize o script no `package.json`:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

### Configurando ESLint e Prettier

Instale as dependências necessárias:

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
```

## 📊 Monitoramento

- **Actions**: Veja todos os workflows em Actions no GitHub
- **Artifacts**: Downloads dos builds ficam disponíveis por 7 dias
- **Environments**: Configure ambientes em Settings > Environments para proteções adicionais

## 🔒 Segurança

- Workflows de segurança rodam automaticamente
- Use environments para proteção de deploy em produção
- Mantenha secrets seguros e nunca os exponha nos logs

## 📝 Scripts Disponíveis

Depois das atualizações no `package.json`, você tem disponível:

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Iniciar servidor
- `npm run preview` - Preview do build
- `npm run lint` - Verificar código com ESLint
- `npm run lint:fix` - Corrigir problemas do ESLint
- `npm run format` - Formatar código com Prettier
- `npm run format:check` - Verificar formatação
- `npm run type-check` - Verificar tipos TypeScript
- `npm test` - Executar testes
