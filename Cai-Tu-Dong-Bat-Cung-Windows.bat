@echo off
title Cai dat tu dong khoi dong cung Windows
echo ========================================================
echo  DANG CAI DAT TU DONG KHOI DONG MAY CHU CUNG WINDOWS...
echo ========================================================
echo.
set "SCRIPT_DIR=%~dp0"
set "TARGET=%SCRIPT_DIR%Khoi-Dong-May-Chu.bat"
set "SHORTCUT=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\VanPhongSo-Server.lnk"

powershell -NoProfile -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%SHORTCUT%'); $s.TargetPath = '%TARGET%'; $s.WorkingDirectory = '%SCRIPT_DIR%'; $s.Save()"

echo.
echo ========================================================
echo   [THANH CONG] DA CAI DAT XONG!
echo.
echo   Tu bay gio, moi khi may tinh nay duoc bat len (hoac
echo   khoi dong lai sau khi mat dien), may chu Van Phong So
echo   se tu dong chay ngay lap tuc 24/24!
echo ========================================================
echo.
pause
