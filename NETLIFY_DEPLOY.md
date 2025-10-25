# 🚀 Netlify Deployment Guide

## Quick Deploy Steps

### Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/amanyadav/Downloads/My-Portfolio/portfolio-react

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Modern React Portfolio"
```

### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub (https://github.com/new)
# Name it: portfolio-react or My-Portfolio

# Add remote origin
git remote add origin https://github.com/amanydv777/portfolio-react.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify

#### Option A: Deploy via Netlify Dashboard (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select your repository: `amanydv777/portfolio-react`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
6. Click **"Deploy site"**

#### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

### Step 4: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

## Build Configuration

The project is already configured with:
- ✅ `netlify.toml` file with build settings
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ Node version: 18

## Environment Variables (if needed)

If you need to add environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add variables like:
   - `VITE_API_KEY`
   - `VITE_GITHUB_TOKEN`
   - etc.

## Post-Deployment Checklist

After deployment, verify:
- [ ] Site loads correctly
- [ ] All images display properly
- [ ] Navigation works
- [ ] Project links work
- [ ] Social media links work
- [ ] Contact form works (if integrated)
- [ ] Mobile responsive
- [ ] Dark mode toggle works (if enabled)

## Continuous Deployment

Netlify automatically deploys when you push to GitHub:
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy preview URLs

## Update Your Portfolio

To update your portfolio:

```bash
# Make changes to your code
# Then commit and push

git add .
git commit -m "Update: description of changes"
git push origin main
```

Netlify will automatically rebuild and deploy! 🎉

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear cache and retry: Site settings → Build & deploy → Clear cache
- Check build logs for specific errors

### Images Not Loading
- Ensure images are in `public/images/` directory
- Check image paths start with `/images/`
- Verify images were committed to git

### 404 Errors
- Check `netlify.toml` has correct redirect rules
- Verify `dist` folder is being published

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)

---

**Your portfolio is ready to deploy!** 🚀
