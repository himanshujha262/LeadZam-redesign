@echo off
title LeadZam Server
echo ==================================================
echo   Starting LeadZam Server...
echo   Open in browser: http://localhost:8080/leads
echo ==================================================
python server.py
if %ERRORLEVEL% NEQ 0 (
  py server.py
)
pause

