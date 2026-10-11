@echo off
title Khoi dong Dev Server (Van Phong So)
cd /d "%~dp0"
echo ========================================================
echo   DANG CHAY DEV SERVER CHO VAN PHONG SO HUNG YEN...
echo ========================================================
echo.
start http://localhost:5173
call npm run dev -- --host 0.0.0.0 --port 5173
pause
