#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying Portfolio to GitHub..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit with timestamp
echo "💾 Committing changes..."
git commit -m "Deploy: Portfolio update $(date '+%Y-%m-%d %H:%M:%S')"

# Check if remote exists
if ! git remote | grep -q 'origin'; then
    echo "⚠️  No remote 'origin' found."
    echo "Please add your GitHub repository:"
    echo "git remote add origin https://github.com/amanydv777/portfolio-react.git"
    exit 1
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Netlify will automatically deploy your changes."
echo "📊 Check your Netlify dashboard for deployment status."
