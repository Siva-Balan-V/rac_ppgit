# 🚀 Deployment Guide - Rotaract PPGIT Website

## 📋 Prerequisites
- ✅ Git repository pushed to GitHub/GitLab
- ✅ Sanity project created (Project ID: `6rxvlrf8`)
- ✅ Build successful locally (`npm run build`)

## 🎯 Option 1: Deploy to Vercel (Recommended)

### **A. Using Vercel CLI (Fastest)**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project directory**
```bash
cd d:/rac_ppgit/rotaract-ppgit
vercel
```

4. **Follow the prompts:**
   - Link to existing project? → **N**
   - Project name → **rotaract-ppgit** (or your preferred name)
   - Directory → **./rotaract-ppgit** (or just press Enter)
   - Override settings? → **Y**
   - Build command → **npm run build**
   - Output directory → **dist**
   - Development command → **npm run dev**

### **B. Using Vercel Dashboard (GUI Method)**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with GitHub/GitLab
3. **Click "New Project"**
4. **Import** your GitHub repository: `Siva-Balan-V/rac_ppgit`
5. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: **rotaract-ppgit**
   - Build Command: **npm run build**
   - Output Directory: **dist**
   - Install Command: **npm install**

## 🔧 Step 2: Set Environment Variables

### **In Vercel Dashboard:**
1. Go to your project → **Settings** → **Environment Variables**
2. Add these variables:

```bash
VITE_SANITY_PROJECT_ID=6rxvlrf8
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_ADMIN_PASSWORD=your-secure-password-here
```

### **Using Vercel CLI:**
```bash
vercel env add VITE_SANITY_PROJECT_ID
# Enter: 6rxvlrf8

vercel env add VITE_SANITY_DATASET
# Enter: development

vercel env add VITE_SANITY_API_VERSION
# Enter: 2024-01-01

vercel env add VITE_SANITY_ADMIN_PASSWORD
# Enter: your-secure-password
```

## 🌐 Option 2: Deploy to Netlify

### **A. Using Netlify CLI**

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login and deploy**
```bash
netlify login
cd d:/rac_ppgit/rotaract-ppgit
netlify deploy --prod --dir=dist
```

### **B. Using Netlify Dashboard**

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** the `dist` folder
3. **Or connect GitHub** repository
4. **Build settings:**
   - Build command: **npm run build**
   - Publish directory: **rotaract-ppgit/dist**

### **Set Environment Variables (Netlify):**
1. Site Settings → **Environment Variables**
2. Add the same variables as listed above

## 🎨 Step 3: Deploy Sanity Studio Separately (Optional)

### **Option A: Deploy to Sanity's hosting**
```bash
cd d:/rac_ppgit/rotaract-ppgit
npm run sanity:deploy
```
- **Studio URL**: `https://rotaract-ppgit.sanity.studio`
- **Access**: Team members can access directly

### **Option B: Deploy to Vercel/Netlify**
```bash
# Build studio
npm run sanity:build

# Deploy the .sanity/dist folder separately
# Or create a separate repository for the studio
```

## 📱 Step 4: Create Content in Admin Panel

### **After deployment, visit your website:**

1. **Go to**: `https://your-domain.com/admin`
2. **Enter password**: (your VITE_SANITY_ADMIN_PASSWORD)
3. **Create content:**

#### **📋 Board Members**
- Add each board member with photo
- Set position and order
- Add bio descriptions

#### **🎯 Projects**
- Upload project images
- Add descriptions and categories
- Set project status

#### **📸 Gallery Items**
- Upload event photos
- Categorize by events/projects/community
- Add captions and dates

#### **📅 Events** (Future use)
- Add upcoming events
- Set dates and locations
- Registration links

## 🔍 Step 5: Testing & Verification

### **Test Checklist:**
- [ ] Website loads at your domain
- [ ] Admin panel accessible at `/admin`
- [ ] Board page shows dynamic content
- [ ] Projects page displays CMS data
- [ ] Gallery page loads images
- [ ] Images optimize correctly
- [ ] Mobile responsive design
- [ ] Dark mode functionality
- [ ] All navigation links work

### **Performance Testing:**
```bash
# Test build locally
npm run build
npm run preview

# Check performance
# - Lighthouse score
# - Mobile speed
# - SEO optimization
```

## 🎯 Post-Deployment Tasks

### **1. Update DNS (if custom domain)**
- Point your domain to Vercel/Netlify
- Configure SSL certificate (automatic)

### **2. SEO Setup**
- Submit sitemap to Google Search Console
- Set up Google Analytics (optional)
- Verify social media meta tags

### **3. Content Strategy**
- Create content creation workflow
- Train team members on admin panel
- Set up content approval process

### **4. Monitoring**
- Set up error monitoring (Sentry)
- Monitor website performance
- Regular content backups

## 📞 Support & Troubleshooting

### **Common Issues:**

**Build Fails:**
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run build
```

**Environment Variables Not Working:**
- Ensure they start with `VITE_`
- Redeploy after adding variables
- Check case sensitivity

**Admin Panel Not Loading:**
- Verify Sanity project ID
- Check network connectivity
- Verify API permissions

**Images Not Loading:**
- Check Sanity dataset permissions
- Verify image URLs in Sanity Studio
- Test image optimization settings

## 🎉 Deployment Complete!

Your website should now be live at:
- **Vercel**: `https://rotaract-ppgit.vercel.app`
- **Netlify**: `https://amazing-name-12345.netlify.app`
- **Custom Domain**: Your configured domain

### **Next Steps:**
1. Share admin credentials with content managers
2. Create initial content in all sections
3. Test all functionality thoroughly
4. Set up regular content updates
5. Monitor website performance

---

**🚀 Your Rotaract PPGIT website is now live with full CMS functionality!**
