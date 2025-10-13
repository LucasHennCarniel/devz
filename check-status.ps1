# Script de diagnóstico do ambiente

Write-Host "🔍 Diagnóstico do Ambiente de Desenvolvimento" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Verifica Backend (porta 3000)
Write-Host "📧 Backend (porta 3000):" -ForegroundColor Yellow
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "   ✅ Rodando (PID: $($port3000.OwningProcess))" -ForegroundColor Green
    
    # Testa o endpoint
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -TimeoutSec 3 -ErrorAction Stop
        Write-Host "   ✅ Respondendo às requisições" -ForegroundColor Green
    } catch {
        Write-Host "   ⚠️  Porta aberta mas não responde (pode estar iniciando)" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ❌ NÃO está rodando" -ForegroundColor Red
}

Write-Host ""

# Verifica Frontend (portas 3250-3260)
Write-Host "🎨 Frontend (Vite):" -ForegroundColor Yellow
$vitePorts = Get-NetTCPConnection | Where-Object { $_.LocalPort -ge 3250 -and $_.LocalPort -le 3260 } -ErrorAction SilentlyContinue
if ($vitePorts) {
    foreach ($conn in $vitePorts) {
        Write-Host "   ✅ Rodando na porta $($conn.LocalPort) (PID: $($conn.OwningProcess))" -ForegroundColor Green
    }
} else {
    Write-Host "   ❌ NÃO está rodando" -ForegroundColor Red
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan

# Verifica arquivos importantes
Write-Host ""
Write-Host "📁 Arquivos importantes:" -ForegroundColor Yellow

$files = @(
    "server.js",
    "package.json",
    "backend/routes/email.js",
    "backend/config/gmail.js",
    "src/components/SimpleContactModal.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $file (NÃO ENCONTRADO)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Recomendações
if (-not $port3000 -or -not $vitePorts) {
    Write-Host "💡 Recomendação:" -ForegroundColor Yellow
    Write-Host "   Execute: .\start-dev.ps1" -ForegroundColor White
    Write-Host "   Para iniciar todos os servidores de uma vez" -ForegroundColor White
}

Write-Host ""
Read-Host "Pressione Enter para fechar"
