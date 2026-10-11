@echo off
chcp 65001 >nul
title Cap nhat code len GitHub
cd /d "%~dp0"
echo ========================================================
echo   DANG DAY TOAN BO CAP NHAT MOI LEN GITHUB
echo ========================================================
echo.

git status

echo.
set /p commit_msg="Nhap noi dung ghi chu cap nhat (hoac Enter de lay mac dinh): "
if "%commit_msg%"=="" set commit_msg=Cap nhat ma nguon moi nhat

git add .
git commit -m "%commit_msg%"
git push origin main

echo.
echo ========================================================
echo   [HOAN TAT] DA DONG BO LEN GITHUB THANH CONG!
echo ========================================================
pause
