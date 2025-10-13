# Script para parar todos os servidores

Write-Host "🛑 Parando servidores..." -ForegroundColor Red

# Para processos na porta 3000 (Backend)
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "🔴 Parando Backend (porta 3000)..." -ForegroundColor Yellow
    $processId = $port3000.OwningProcess
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    Write-Host "✅ Backend parado" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Backend não estava rodando" -ForegroundColor Gray
}

# Para processos nas portas do Vite (3250-3260)
$vitePorts = Get-NetTCPConnection | Where-Object { $_.LocalPort -ge 3250 -and $_.LocalPort -le 3260 } -ErrorAction SilentlyContinue
if ($vitePorts) {
    Write-Host "🔴 Parando Frontend (Vite)..." -ForegroundColor Yellow
    foreach ($conn in $vitePorts) {
        Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
    }
    Write-Host "✅ Frontend parado" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Frontend não estava rodando" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✅ Todos os servidores foram parados!" -ForegroundColor Green
Write-Host ""

Start-Sleep -Seconds 2
