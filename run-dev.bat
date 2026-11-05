@echo off
title LeadZam Vite Dev Server
set PATH=%~dp0.tools\node;%PATH%
echo ==================================================
echo   Starting LeadZam React Dev Server (Vite)...
echo   Open in browser: http://localhost:5173/leads
echo ==================================================
call .\.tools\node\npm.cmd run dev
pause

