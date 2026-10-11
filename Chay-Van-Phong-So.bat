@echo off
title Khoi dong Van Phong So Hung Yen
echo ========================================================
echo   DANG KHOI DONG UNG DUNG VAN PHONG SO HUNG YEN
echo ========================================================
echo.
cd /d "%~dp0"
start http://localhost:5173
npm run dev -- --host 0.0.0.0 --port 5173
pause
