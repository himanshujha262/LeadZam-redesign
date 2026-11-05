@echo off
title Build LeadZam Production
set PATH=%~dp0.tools\node;%PATH%
echo ==================================================
echo   Building LeadZam Production Bundle...
echo ==================================================
call .\.tools\node\npm.cmd run build
echo Build completed!
pause

