# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modern portfolio"
   git branch -M main
   git remote add origin https://github.com/amanydv777/portfolio-react.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite framework
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Via Netlify Dashboard

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

## Environment Variables

If you need to add environment variables (e.g., for API keys):

### Vercel
```bash
vercel env add VITE_API_KEY
```

Or add via Vercel Dashboard → Project Settings → Environment Variables

### Netlify
Add via Netlify Dashboard → Site Settings → Environment Variables

## Build Configuration

The project is configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

These are already set in:
- `vercel.json` for Vercel
- `netlify.toml` for Netlify

## Post-Deployment Checklist

- [ ] Verify all images load correctly
- [ ] Test dark/light mode toggle
- [ ] Check project filtering functionality
- [ ] Verify GitHub stats API is working
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Verify contact form (if integrated with backend)
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors

### Images Not Loading
- Ensure images are in `public/images/` directory
- Check image paths start with `/images/`
- Verify image files were committed to git

### GitHub Stats Not Working
- Check GitHub username in `src/components/GitHubStats.jsx`
- Verify GitHub API is accessible
- Check browser console for API errors

## Performance Optimization

The build is already optimized with:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Lazy loading

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy preview URLs

---

**Need Help?** Check the main [README.md](./README.md) for more information.
