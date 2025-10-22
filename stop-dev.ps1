# Script para parar todos os servidores

Write-Host "Parando servidores..." -ForegroundColor Red

# Para processos na porta 3001 (Backend)
$port3001 = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
if ($port3001) {
    Write-Host "[BACKEND] Parando servidor (porta 3001)..." -ForegroundColor Yellow
    $processId = $port3001.OwningProcess
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Backend parado" -ForegroundColor Green
} else {
    Write-Host "[INFO] Backend nao estava rodando" -ForegroundColor Gray
}

# Para processos nas portas do Vite (5173)
$port5173 = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($port5173) {
    Write-Host "[FRONTEND] Parando servidor Vite..." -ForegroundColor Yellow
    $processId = $port5173.OwningProcess
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Frontend parado" -ForegroundColor Green
} else {
    Write-Host "[INFO] Frontend nao estava rodando" -ForegroundColor Gray
}

# Para todos os processos Node.js restantes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "[OK] Todos os servidores foram parados!" -ForegroundColor Green
Write-Host ""

Start-Sleep -Seconds 2
