@echo off
REM Script para gerar ZIP de deploy para KingHost

echo 🚀 Gerando pacote de deploy para KingHost...
echo.

REM 1. Verificar se o build existe
if not exist "build" (
    echo ❌ Pasta build não encontrada!
    echo ⚠️  Execute primeiro: npm run build:prod
    pause
    exit /b 1
)

REM 2. Criar arquivo .env se não existir
if not exist ".env" (
    echo 📝 Criando arquivo .env baseado no .env.example...
    copy ".env.example" ".env" >nul
    echo ✅ Arquivo .env criado! LEMBRE-SE de configurar as variáveis antes do upload.
    echo.
)

REM 3. Criar pasta temporária para o deploy
if exist "deploy-temp" rmdir /s /q "deploy-temp"
mkdir "deploy-temp"

REM 4. Copiar arquivos necessários
echo 📁 Copiando arquivos para deploy...
xcopy "build" "deploy-temp\build" /s /e /i >nul
copy "server.js" "deploy-temp\" >nul
copy "package.json" "deploy-temp\" >nul
copy "ecosystem.config.json" "deploy-temp\" >nul
copy ".env" "deploy-temp\" >nul

REM 5. Criar arquivo README para o deploy
echo 📋 Criando instruções de deploy...
(
echo # 📦 PACOTE DE DEPLOY - DEVZ KINGHOST
echo.
echo ## 📂 Conteúdo do pacote:
echo - build/              ^(Arquivos compilados do frontend^)
echo - server.js           ^(Servidor Express^)
echo - package.json        ^(Dependências do projeto^)
echo - ecosystem.config.json ^(Configuração PM2^)
echo - .env               ^(Variáveis de ambiente^)
echo.
echo ## 🚀 Instruções de deploy:
echo.
echo ### 1. Upload dos arquivos:
echo - Faça upload de TODOS os arquivos deste pacote para seu servidor KingHost
echo - Mantenha a estrutura de pastas
echo.
echo ### 2. No servidor KingHost:
echo ```bash
echo # Instalar dependências
echo npm install --production
echo.
echo # Iniciar aplicação
echo pm2 start ecosystem.config.json
echo ```
echo.
echo ### 3. Configurações importantes:
echo - Verifique se as variáveis no arquivo .env estão corretas
echo - A aplicação rodará na porta 3000 por padrão
echo - Configure seu domínio para apontar para a aplicação
echo.
echo ### 4. Monitoramento:
echo ```bash
echo # Ver status da aplicação
echo pm2 status
echo.
echo # Ver logs
echo pm2 logs devz-frontend
echo ```
echo.
echo ## 📞 Suporte:
echo - KingHost: ^(51^) 3550-3200
echo - Documentação: Consulte DEPLOY-KINGHOST.md no projeto original
echo.
echo ---
echo Gerado em: %date% %time%
) > "deploy-temp\README-DEPLOY.txt"

REM 6. Criar o arquivo ZIP
echo 📦 Criando arquivo ZIP...

REM Usar PowerShell para criar o ZIP
powershell -command "Compress-Archive -Path 'deploy-temp\*' -DestinationPath 'devz-deploy-kinghost.zip' -Force"

if exist "devz-deploy-kinghost.zip" (
    echo ✅ Pacote de deploy criado com sucesso!
    echo 📁 Arquivo: devz-deploy-kinghost.zip
    echo.
    echo 📋 Próximos passos:
    echo 1. Faça upload do arquivo devz-deploy-kinghost.zip para seu servidor KingHost
    echo 2. Extraia o arquivo no servidor
    echo 3. Execute: npm install --production
    echo 4. Execute: pm2 start ecosystem.config.json
    echo.
    echo 📖 Consulte README-DEPLOY.txt dentro do ZIP para instruções detalhadas
) else (
    echo ❌ Erro ao criar arquivo ZIP!
)

REM 7. Limpar pasta temporária
rmdir /s /q "deploy-temp"

echo.
echo 🎯 Deploy package pronto para KingHost!
pause
