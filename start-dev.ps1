# Script para iniciar Backend e Frontend em desenvolvimento

Write-Host "Iniciando ambiente de desenvolvimento..." -ForegroundColor Cyan
Write-Host ""

# Verificar se o Node.js esta instalado
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js detectado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERRO] Node.js nao encontrado! Instale: https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Verificar se as dependencias estao instaladas
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Instalando dependencias..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Limpar processos nas portas
Write-Host "[INFO] Limpando portas..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

# Iniciar Backend
Write-Host ""
Write-Host "[BACKEND] Iniciando servidor Node.js..." -ForegroundColor Blue
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node server.js" -WindowStyle Normal

Start-Sleep -Seconds 3

# Iniciar Frontend
Write-Host "[FRONTEND] Iniciando servidor Vite..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "[OK] Servidores iniciados!" -ForegroundColor Green
Write-Host ""
Write-Host "URLs:" -ForegroundColor Cyan
Write-Host "   Backend:  http://localhost:3001" -ForegroundColor White
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "Para parar os servidores, execute: .\stop-dev.ps1" -ForegroundColor Yellow
Write-Host ""
