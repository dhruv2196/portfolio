# Secure Credentials Guide

## 🔒 How to Securely Handle Your EmailJS Credentials

### Current Setup

Your credentials are now stored in `config.js` which is:
- ✅ Separated from your main code
- ✅ Added to `.gitignore` (won't be committed)
- ✅ Easy to update without modifying multiple files

### ⚠️ IMPORTANT: Before Pushing to GitHub

1. **Verify `.gitignore` is working:**
   ```bash
   git status
   ```
   Make sure `config.js` is NOT listed in the files to be committed.

2. **If you see `config.js` in git status:**
   ```bash
   git rm --cached config.js
   git commit -m "Remove config.js from tracking"
   ```

3. **Double-check before pushing:**
   ```bash
   git diff --staged
   ```
   Ensure no credentials are visible.

### 🚀 Deployment Strategies

#### Option 1: Environment Variables (Recommended for Production)

**For Netlify:**
1. Go to Site Settings → Environment Variables
2. Add:
   ```
   EMAILJS_SERVICE_ID=service_sq7l1z1
   EMAILJS_TEMPLATE_ID=template_0o6jisp
   EMAILJS_PUBLIC_KEY=b_dtLbgJ8iJuqvJg2
   CONTACT_EMAIL=your-email@example.com
   ```

3. Create `config.production.js`:
   ```javascript
   const CONFIG = {
       EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
       EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
       EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
       CONTACT_EMAIL: process.env.CONTACT_EMAIL
   };
   ```

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add the same variables
3. They'll be automatically available

#### Option 2: Build-Time Injection

Create a build script that injects credentials during deployment:

**build.js:**
```javascript
const fs = require('fs');

const config = `
const CONFIG = {
    EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
    EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
    EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY}',
    CONTACT_EMAIL: '${process.env.CONTACT_EMAIL}'
};
`;

fs.writeFileSync('./config.js', config);
```

**package.json:**
```json
{
  "scripts": {
    "build": "node build.js"
  }
}
```

#### Option 3: Serverless Functions (Most Secure)

Move email sending to a backend function:

**netlify/functions/send-email.js:**
```javascript
exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);
    
    // Use environment variables here
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: process.env.CONTACT_EMAIL
            }
        })
    });
    
    return {
        statusCode: response.ok ? 200 : 400,
        body: JSON.stringify({ success: response.ok })
    };
};
```

### 📝 Best Practices

1. **Never commit credentials:**
   - Always use `.gitignore`
   - Review commits before pushing
   - Use `git secrets` tool for scanning

2. **Use different credentials for different environments:**
   - Development: Test credentials
   - Production: Real credentials

3. **Rotate credentials regularly:**
   - Change API keys every 3-6 months
   - Update immediately if exposed

4. **Monitor usage:**
   - Check EmailJS dashboard for unusual activity
   - Set up alerts for quota limits

### 🛠️ Git Commands for Safety

**Check what will be committed:**
```bash
git status
git diff --staged
```

**Remove sensitive file from history (if accidentally committed):**
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config.js" \
  --prune-empty --tag-name-filter cat -- --all
```

**Add pre-commit hook to check for credentials:**
Create `.git/hooks/pre-commit`:
```bash
#!/bin/sh
# Check for credentials
if git diff --cached --name-only | xargs grep -E "(service_|template_|key_)" 2>/dev/null; then
    echo "⚠️  Warning: Possible credentials detected in commit!"
    echo "Please review your changes."
    exit 1
fi
```

### 🔍 Verification Checklist

Before deploying:
- [ ] `config.js` is in `.gitignore`
- [ ] No credentials in `script.js`
- [ ] No credentials in `index.html`
- [ ] Environment variables set up on hosting platform
- [ ] Test email functionality after deployment

### 💡 Alternative: Public Key Only

Since EmailJS public keys are designed to be public, you could:

1. Keep only the public key in code
2. Move service/template IDs to EmailJS dashboard settings
3. Use domain restrictions in EmailJS for security

This way, even if someone finds your public key, they can't use it from unauthorized domains.

### 🚨 If Credentials Are Exposed

1. **Immediately:**
   - Regenerate all EmailJS keys
   - Update your config files
   - Check EmailJS logs for unauthorized usage

2. **Clean Git history:**
   - Use BFG Repo-Cleaner or git filter-branch
   - Force push to all branches
   - Notify team members to re-clone

3. **Prevent future issues:**
   - Set up git-secrets
   - Use environment variables
   - Add pre-commit hooks

Remember: EmailJS public keys are meant to be exposed (that's why they're called "public"), but it's still good practice to keep all configuration centralized and use environment variables for production deployments.