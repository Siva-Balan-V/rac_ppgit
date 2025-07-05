#!/bin/bash

echo "🚀 Setting up Rotaract PPGIT Website for Testing..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the rotaract-ppgit directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "🔧 Creating environment file..."
    cat > .env.local << EOL
VITE_SANITY_PROJECT_ID=6rxvlrf8
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_ADMIN_PASSWORD=RotaractPPGIT2025!
EOL
    echo "✅ Environment file created"
else
    echo "✅ Environment file already exists"
fi

# Build the project to check for errors
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "🚀 Next steps:"
    echo "1. Run 'npm run dev' to start the development server"
    echo "2. Visit http://localhost:5173 to view the website"
    echo "3. Visit http://localhost:5173/admin to access the admin panel"
    echo "4. Use password: RotaractPPGIT2025!"
    echo ""
    echo "📚 Read TESTING_GUIDE.md for detailed testing instructions"
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi
