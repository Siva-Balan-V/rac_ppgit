#!/bin/bash

echo "🚀 Deploying Rotaract PPGIT Website to Vercel..."

# Step 1: Build the project
echo "📦 Building project..."
npm run build

# Step 2: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment initiated!"
echo ""
echo "🔧 Next steps:"
echo "1. Set environment variables in Vercel dashboard"
echo "2. Test your deployed website"
echo "3. Access admin panel at /admin"
echo ""
echo "🎯 Environment variables to add:"
echo "VITE_SANITY_PROJECT_ID=6rxvlrf8"
echo "VITE_SANITY_DATASET=development"
echo "VITE_SANITY_API_VERSION=2024-01-01"
echo "VITE_SANITY_ADMIN_PASSWORD=your-secure-password"
