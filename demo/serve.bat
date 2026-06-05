@echo off
echo Starting demo server at http://localhost:3000
echo.
echo Pages:
echo   Home:           http://localhost:3000
echo   Service Detail: http://localhost:3000/services/ai-agent-development.html
echo.
echo Press Ctrl+C to stop.
npx serve . -p 3000
