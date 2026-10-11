@echo off
title Cai dat moi truong phat trien (Dev Environment)
echo ========================================================
echo   KIEM TRA VA CAI DAT MOI TRUONG CHO ANTIGRAVITY IDE
echo ========================================================
echo.
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [CANH BAO] May nay chua co Node.js trong he thong!
    echo Dang thu tu dong cai dat Node.js LTS qua winget...
    echo.
    winget install OpenJS.NodeJS.LTS --silent --accept-source-agreements --accept-package-agreements
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo Khong the tu dong cai dat Node.js qua winget.
        echo Vui long truy cap https://nodejs.org de tai va cai dat ban Node.js LTS.
        echo Sau khi cai xong, hay chay lai file nay!
        pause
        exit /b
    )
    echo.
    echo [THANH CONG] Da cai dat xong Node.js!
) else (
    echo [OK] Da tim thay Node.js tren may:
    node -v
    npm -v
)

echo.
echo ========================================================
echo   DANG CAI DAT CAC THU VIEN DU AN (NPM INSTALL)...
echo ========================================================
cd /d "%~dp0"
call npm install
echo.
echo ========================================================
echo   [HOAN TAT] MOI TRUONG DA SAN SANG DE DEV VOI ANTIGRAVITY!
echo ========================================================
pause
