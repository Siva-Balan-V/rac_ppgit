@echo off
echo 🚀 Setting up Rotaract PPGIT Website for Testing...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v18+ first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Please run this script from the rotaract-ppgit directory
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Check if .env.local exists
if not exist ".env.local" (
    echo 🔧 Creating environment file...
    (
        echo VITE_SANITY_PROJECT_ID=6rxvlrf8
        echo VITE_SANITY_DATASET=development
        echo VITE_SANITY_API_VERSION=2024-01-01
        echo VITE_SANITY_ADMIN_PASSWORD=RotaractPPGIT2025!
    ) > .env.local
    echo ✅ Environment file created
) else (
    echo ✅ Environment file already exists
)

REM Build the project to check for errors
echo 🔨 Testing build...
call npm run build

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Setup completed successfully!
    echo.
    echo 🚀 Next steps:
    echo 1. Run 'npm run dev' to start the development server
    echo 2. Visit http://localhost:5173 to view the website
    echo 3. Visit http://localhost:5173/admin to access the admin panel
    echo 4. Use password: RotaractPPGIT2025!
    echo.
    echo 📚 Read TESTING_GUIDE.md for detailed testing instructions
) else (
    echo ❌ Build failed. Check the error messages above.
)

pause
