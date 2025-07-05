# Auto Deploy to Netlify from GitHub

This guide will help you set up automatic deployment of your portfolio to Netlify whenever you push changes to GitHub.

## Prerequisites
- A GitHub account with your portfolio repository
- A Netlify account (free tier is sufficient)
- Your portfolio code pushed to GitHub

## Step 1: Push Your Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect GitHub to Netlify

1. **Log in to Netlify**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Sign in with your account

2. **Import from GitHub**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account

3. **Select Your Repository**
   - Search for your portfolio repository
   - Click on it to select

## Step 3: Configure Build Settings

For your static portfolio, use these settings:

- **Branch to deploy**: `main` (or `master` if that's your default branch)
- **Base directory**: Leave empty (or specify if your site is in a subdirectory)
- **Build command**: Leave empty (since it's a static site)
- **Publish directory**: `.` (or the directory containing your index.html)

Click "Deploy site"

## Step 4: Custom Domain (Optional)

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Follow the instructions to point your domain to Netlify

## Step 5: Environment Variables (If Needed)

If your site uses environment variables:

1. Go to "Site settings" → "Environment variables"
2. Add your variables (like API keys)
3. Redeploy for changes to take effect

## Automatic Deployment Workflow

Once set up, your deployment workflow will be:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Netlify automatically detects the push and deploys your site
4. Your changes go live in 1-2 minutes

## Build Status Badge

Add a build status badge to your README:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

(Get your badge ID from Netlify → Site settings → Status badges)

## Deployment Notifications

Set up notifications for deployment status:

1. Go to "Site settings" → "Build & deploy" → "Deploy notifications"
2. Add email, Slack, or webhook notifications
3. Choose which events to be notified about

## Branch Deploys (Advanced)

Enable preview deploys for pull requests:

1. Go to "Site settings" → "Build & deploy" → "Continuous Deployment"
2. Under "Deploy contexts", enable:
   - Deploy previews for pull requests
   - Branch deploys for specific branches

## Rollback Deployments

If something goes wrong:

1. Go to "Deploys" tab in Netlify
2. Find a previous successful deploy
3. Click "Publish deploy" to rollback

## Build Optimization

For faster builds:

1. Create a `.netlifyignore` file (like .gitignore):
   ```
   # Dependencies
   node_modules/
   
   # Build outputs
   dist/
   build/
   
   # Editor files
   .vscode/
   .idea/
   
   # OS files
   .DS_Store
   Thumbs.db
   
   # Logs
   *.log
   
   # Test files
   test/
   tests/
   ```

2. Enable build caching in Netlify settings

## Troubleshooting

### Build Fails
- Check the deploy log in Netlify dashboard
- Ensure all files are committed to GitHub
- Verify file paths are correct (case-sensitive on Netlify)

### Site Not Updating
- Check if the deployment was triggered
- Clear browser cache
- Check if you're on the correct branch

### 404 Errors
- Ensure index.html is in the root or specified directory
- Check file names and paths (case-sensitive)
- Verify publish directory setting

## Security Best Practices

1. **Never commit sensitive data**
   - Use environment variables for API keys
   - Add `.env` to `.gitignore`

2. **Use Deploy Previews**
   - Test changes before merging to main
   - Review pull requests with live previews

3. **Enable HTTPS**
   - Netlify provides free SSL certificates
   - Force HTTPS in domain settings

## Monitoring

1. **Analytics**
   - Enable Netlify Analytics (paid feature)
   - Or use Google Analytics

2. **Performance**
   - Use Netlify's built-in performance monitoring
   - Set up Lighthouse CI integration

## Next Steps

1. Set up form handling with Netlify Forms
2. Configure redirects with `_redirects` file
3. Add custom headers with `_headers` file
4. Explore Netlify Functions for serverless backend

## Useful Commands

```bash
# Check git remote
git remote -v

# View recent commits
git log --oneline -5

# Check deployment status
# (View in Netlify dashboard)
```

## Resources

- [Netlify Docs](https://docs.netlify.com)
- [GitHub + Netlify Integration](https://docs.netlify.com/integrations/frameworks/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

---

Your portfolio is now set up for automatic deployment! Every push to GitHub will trigger a new deployment on Netlify.