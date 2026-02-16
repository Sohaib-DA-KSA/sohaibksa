@echo off
REM Navigate to project folder
cd /d E:\portfolio\sohaibksa

REM Refresh environment variables (optional)
call refreshenv

REM Start development server
npm run dev

pause


cd /d → ensures it switches drive if needed.

call refreshenv → makes sure npm/Node paths are recognized (from Chocolatey installs).

pause → keeps the terminal open after server stops

