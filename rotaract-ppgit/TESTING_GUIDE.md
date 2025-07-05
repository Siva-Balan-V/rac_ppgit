# 🚀 Setup Guide for Testing Rotaract PPGIT Website

## 📋 Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

## 🔧 Installation Steps

### 1. **Clone the Repository**
```bash
git clone https://github.com/Siva-Balan-V/rac_ppgit.git
cd rac_ppgit/rotaract-ppgit
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Create Environment File**
Create a file named `.env.local` in the `rotaract-ppgit` folder:
```bash
VITE_SANITY_PROJECT_ID=6rxvlrf8
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_ADMIN_PASSWORD=RotaractPPGIT2025!
```

### 4. **Start Development Server**
```bash
npm run dev
```
The website will be available at: **http://localhost:5173**

### 5. **Start Sanity Studio (Optional)**
Open a new terminal and run:
```bash
npm run sanity:dev
```
Sanity Studio will be available at: **http://localhost:3333**

## 🎯 Testing Checklist

### **Basic Website Testing**
- [ ] Visit **http://localhost:5173**
- [ ] Navigate through all pages:
  - [ ] Home (`/`)
  - [ ] About (`/about`)
  - [ ] Board (`/board`) - Should show "No board members yet"
  - [ ] Projects (`/projects`) - Should show "No projects yet"
  - [ ] Gallery (`/gallery`) - Should show "No gallery items yet"
  - [ ] Join (`/join`)
  - [ ] Contact (`/contact`)
- [ ] Test mobile responsiveness (resize browser)
- [ ] Test dark mode toggle (if available)

### **Admin Panel Testing**
- [ ] Visit **http://localhost:5173/admin**
- [ ] Enter password: `RotaractPPGIT2025!`
- [ ] Verify Sanity Studio loads properly
- [ ] Test creating content:
  - [ ] Add a board member
  - [ ] Add a project
  - [ ] Add a gallery item

### **Content Integration Testing**
- [ ] After adding content in admin panel:
  - [ ] Check if board member appears on `/board`
  - [ ] Check if project appears on `/projects`
  - [ ] Check if gallery item appears on `/gallery`
- [ ] Verify images load correctly
- [ ] Test content updates in real-time

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start React development server
npm run sanity:dev       # Start Sanity Studio

# Building
npm run build           # Build for production
npm run preview         # Preview production build

# Sanity Management
npm run sanity:build    # Build Sanity Studio
npm run sanity:deploy   # Deploy Sanity Studio

# Code Quality
npm run lint            # Run ESLint
```

## 🔍 Troubleshooting

### **Common Issues and Solutions**

#### **Port Already in Use**
```bash
# If port 5173 is busy, Vite will automatically use next available port
# Check terminal output for the actual URL
```

#### **Environment Variables Not Working**
```bash
# Make sure .env.local file is in the correct location:
# rac_ppgit/rotaract-ppgit/.env.local (same folder as package.json)
```

#### **Admin Panel Not Loading**
```bash
# Verify Sanity project ID is correct
# Check browser console for errors
# Try clearing browser cache
```

#### **Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

## 📱 Features to Test

### **Content Management Features**
- **Board Members**: Name, position, image, bio, order
- **Projects**: Title, description, type (Online/Offline), image, status
- **Gallery Items**: Title, image, description, category, date
- **Events**: Title, date, location, image, registration link
- **Pages**: Custom page creation with rich text
- **Members**: Member profiles and information
- **Gallery Collections**: Organized photo albums

### **Technical Features**
- **Responsive Design**: Mobile, tablet, desktop
- **Dark Mode**: Theme switching
- **Image Optimization**: Automatic resizing and optimization
- **SEO**: Meta tags and structured data
- **Performance**: Fast loading and smooth navigation
- **Security**: Password-protected admin access

## 🎯 Expected Behavior

### **First Time Setup**
1. **Website loads** with navigation working
2. **Board/Projects/Gallery pages** show "No content yet" messages
3. **Admin panel** accessible with password
4. **Sanity Studio** loads in admin panel

### **After Adding Content**
1. **Content appears immediately** on frontend pages
2. **Images optimize automatically**
3. **Real-time updates** without page refresh
4. **Mobile responsive** design maintained

## 📞 Support Information

### **If You Encounter Issues**
1. **Check browser console** for error messages
2. **Verify environment variables** are set correctly
3. **Check terminal output** for build errors
4. **Try clearing browser cache**
5. **Restart development servers**

### **Contact Information**
- **Repository**: https://github.com/Siva-Balan-V/rac_ppgit
- **Sanity Project ID**: 6rxvlrf8
- **Admin Password**: RotaractPPGIT2025!

## 🎉 Success Criteria

**Testing is successful if:**
✅ Website loads without errors  
✅ All pages navigate correctly  
✅ Admin panel is accessible  
✅ Content can be added through CMS  
✅ Content appears on frontend pages  
✅ Images load and optimize properly  
✅ Mobile design is responsive  
✅ No console errors  

---

**🚀 Ready to test! Follow the steps above and verify everything works perfectly.**
