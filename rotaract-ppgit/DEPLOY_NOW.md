# 🚀 Quick Deployment Script

## Method 1: Deploy with Vercel CLI (Recommended)

1. **Login to Vercel** (if not already logged in):
```bash
vercel login
```

2. **Deploy from this directory**:
```bash
vercel --prod
```

3. **Set environment variables** (run these one by one):
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

4. **Redeploy** to apply environment variables:
```bash
vercel --prod
```

## Method 2: Manual Deployment via Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `Siva-Balan-V/rac_ppgit`
4. Set Root Directory: `rotaract-ppgit`
5. Framework: Vite
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Add environment variables from `.env.production`
9. Deploy!

## Post-Deployment:

✅ **Your website will be live at**: `https://your-project-name.vercel.app`
✅ **Admin panel**: `https://your-project-name.vercel.app/admin`
✅ **Test all pages** and functionality
✅ **Create content** in the admin panel

## Next Steps:
- [ ] Test admin login
- [ ] Upload board member photos
- [ ] Add project entries
- [ ] Create gallery items
- [ ] Verify mobile responsiveness
- [ ] Set up custom domain (optional)

---
**Ready to deploy! Run the commands above to get your website live.** 🎉
