# Script para iniciar o servidor backend e o frontend Vite simultaneamente
# Executa em modo desenvolvimento com hot reload

Write-Host "🚀 Iniciando ambiente de desenvolvimento Devz..." -ForegroundColor Cyan
Write-Host ""

# Verificar se as dependências estão instaladas
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Verificar arquivo .env
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  AVISO: Arquivo .env não encontrado!" -ForegroundColor Red
    Write-Host "Criando arquivo .env com valores padrão..." -ForegroundColor Yellow
    @"
# Porta do servidor
PORT=3001

# Configuração de Email
EMAIL_USER=atena.digital03@gmail.com
EMAIL_PASS=vpcx dqzk phch odgi
EMAIL_USER_TRABALHE_CONOSCO=financeiro01atena@gmail.com
EMAIL_PASS_TRABALHE_CONOSCO=smuf ptmg dciu kdxo
"@ | Out-File -FilePath .env -Encoding utf8
    Write-Host "✅ Arquivo .env criado!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "✅ Iniciando servidor backend (porta 3001)..." -ForegroundColor Green
Write-Host "✅ Iniciando servidor frontend Vite (porta 5173)..." -ForegroundColor Green
Write-Host ""
Write-Host "📝 Logs:" -ForegroundColor Cyan
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""

# Iniciar backend e frontend em paralelo
$backend = Start-Process powershell -ArgumentList "-NoExit", "-Command", "node server.js" -PassThru
$frontend = Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -PassThru

Write-Host "✅ Servidores iniciados!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "🔌 Backend API: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Para parar os servidores:" -ForegroundColor Yellow
Write-Host "   - Feche as janelas do PowerShell que foram abertas" -ForegroundColor Gray
Write-Host "   - Ou execute: .\stop-dev.ps1" -ForegroundColor Gray
Write-Host ""

# Aguardar um momento para os servidores iniciarem
Start-Sleep -Seconds 3

# Testar se o backend está respondendo
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3001/api/health" -Method GET -TimeoutSec 5
    Write-Host "✅ Backend API está respondendo!" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Backend pode estar demorando para iniciar. Aguarde alguns segundos..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✨ Ambiente de desenvolvimento pronto!" -ForegroundColor Green
