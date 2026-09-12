@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is niet gevonden. Installeer Node.js en open deze starter opnieuw.
  echo Uitleg: https://nodejs.org/en/download
  pause
  exit /b 1
)
echo Vibe Lift starten. Laat dit venster open zolang je de site gebruikt.
echo Open het lokale adres dat hieronder verschijnt.
echo Stoppen: druk op Ctrl+C.
node scripts\serve.mjs
if errorlevel 1 pause
