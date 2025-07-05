# 📦 Complete Package List - Rotaract PPGIT Website

## 🎯 What's Included in This Project

### **Core Technologies**
- **React 19.1.0** - Frontend framework
- **Vite 7.0.0** - Build tool and development server
- **Tailwind CSS 3.4.17** - Styling framework
- **React Router DOM 7.6.3** - Client-side routing

### **Sanity CMS Integration**
- **@sanity/client 7.6.0** - Sanity client for data fetching
- **@sanity/image-url 1.1.0** - Image optimization
- **@sanity/vision 3.97.1** - Sanity Vision for data queries
- **sanity 3.97.1** - Sanity Studio

### **UI Components**
- **lucide-react 0.525.0** - Icon library

### **Development Tools**
- **ESLint 9.29.0** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixes
- **@vitejs/plugin-react 4.5.2** - React plugin for Vite

## 🚀 Installation Requirements

### **System Requirements**
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Git**: Latest version

### **Browser Support**
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 📋 Step-by-Step Installation

### **Method 1: Automated Setup (Recommended)**

**For Windows:**
```bash
# 1. Clone the repository
git clone https://github.com/Siva-Balan-V/rac_ppgit.git
cd rac_ppgit/rotaract-ppgit

# 2. Run setup script
setup.bat
```

**For Mac/Linux:**
```bash
# 1. Clone the repository
git clone https://github.com/Siva-Balan-V/rac_ppgit.git
cd rac_ppgit/rotaract-ppgit

# 2. Make script executable and run
chmod +x setup.sh
./setup.sh
```

### **Method 2: Manual Installation**

```bash
# 1. Clone repository
git clone https://github.com/Siva-Balan-V/rac_ppgit.git
cd rac_ppgit/rotaract-ppgit

# 2. Install dependencies
npm install

# 3. Create environment file
# Create .env.local with the following content:
VITE_SANITY_PROJECT_ID=6rxvlrf8
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_ADMIN_PASSWORD=RotaractPPGIT2025!

# 4. Test build
npm run build

# 5. Start development server
npm run dev
```

## 🔧 Required Dependencies (Auto-installed)

### **Production Dependencies**
```json
{
  "@sanity/client": "^7.6.0",
  "@sanity/image-url": "^1.1.0", 
  "@sanity/vision": "^3.97.1",
  "lucide-react": "^0.525.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.3",
  "sanity": "^3.97.1"
}
```

### **Development Dependencies**
```json
{
  "@eslint/js": "^9.29.0",
  "@types/react": "^19.1.8",
  "@types/react-dom": "^19.1.6",
  "@vitejs/plugin-react": "^4.5.2",
  "autoprefixer": "^10.4.21",
  "eslint": "^9.29.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.2.0",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.17",
  "vite": "^7.0.0"
}
```

## 📁 Project Structure

```
rotaract-ppgit/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AdminAuth.jsx   # Admin authentication
│   │   ├── Footer.jsx      # Footer component
│   │   └── Navbar.jsx      # Navigation
│   ├── pages/              # Page components
│   │   ├── Board.jsx       # Board members (CMS integrated)
│   │   ├── Gallery.jsx     # Gallery (CMS integrated)
│   │   ├── Projects.jsx    # Projects (CMS integrated)
│   │   ├── StudioPage.jsx  # Sanity Studio page
│   │   └── ...
│   ├── sanity/             # Sanity configuration
│   │   ├── client.js       # Sanity client setup
│   │   └── schemas/        # Content schemas
│   └── utils/              # Utility functions
├── .env.local              # Environment variables
├── package.json            # Dependencies and scripts
├── sanity.config.js        # Sanity Studio config
├── tailwind.config.js      # Tailwind CSS config
├── vite.config.js          # Vite configuration
├── setup.bat               # Windows setup script
├── setup.sh                # Mac/Linux setup script
└── TESTING_GUIDE.md        # Testing instructions
```

## 🎯 Testing Checklist for Your Friend

### **Basic Setup Test**
- [ ] Node.js installed (check with `node --version`)
- [ ] Repository cloned successfully
- [ ] Dependencies installed (`npm install` completed)
- [ ] Environment file created (`.env.local` exists)
- [ ] Build successful (`npm run build` works)

### **Development Server Test**
- [ ] Dev server starts (`npm run dev`)
- [ ] Website loads at http://localhost:5173
- [ ] All pages accessible and responsive
- [ ] No console errors in browser

### **Admin Panel Test**
- [ ] Admin panel accessible at `/admin`
- [ ] Password works: `RotaractPPGIT2025!`
- [ ] Sanity Studio loads properly
- [ ] Can create test content

### **CMS Integration Test**
- [ ] Board page shows "No content" initially
- [ ] Projects page shows "No content" initially  
- [ ] Gallery page shows "No content" initially
- [ ] Adding content in admin makes it appear on pages
- [ ] Images upload and display correctly

## 🚨 Common Issues & Solutions

### **Node.js Not Found**
```bash
# Download and install from https://nodejs.org/
# Restart terminal after installation
```

### **Permission Errors (Mac/Linux)**
```bash
sudo npm install -g npm@latest
```

### **Port Already in Use**
```bash
# Vite will automatically use next available port
# Check terminal output for actual URL
```

### **Environment Variables Not Working**
```bash
# Ensure .env.local is in same folder as package.json
# Restart development server after creating .env.local
```

## 📞 Support

If your friend encounters any issues:
1. **Check TESTING_GUIDE.md** for detailed instructions
2. **Look at browser console** for error messages
3. **Verify all steps** were followed correctly
4. **Try clearing browser cache**
5. **Restart development server**

---

**🎉 Everything is ready for testing! Your friend just needs to follow the installation steps above.**
