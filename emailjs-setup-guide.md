# EmailJS Setup Guide - Step by Step

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create account with your email

### Step 2: Add Email Service
1. After login, go to **Email Services** in the sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended)
   - Outlook
   - Yahoo
   - Other SMTP

#### For Gmail:
1. Click on **Gmail**
2. Click **"Connect Account"**
3. Sign in with your Google account
4. Allow EmailJS permissions
5. Give your service a name (e.g., "Portfolio Contact")
6. Click **"Create Service"**
7. **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the sidebar
2. Click **"Create New Template"**
3. Set up your template:

**Template Name:** Portfolio Contact Form

**Subject:** New Portfolio Contact: {{subject}}

**Content:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website contact form.
```

4. In the **"To Email"** field, enter: {{to_email}}
5. Click **"Save"**
6. **Copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. **Copy your Public Key** (looks like: `AbCdEfGhIjKlMnOpQrSt`)

### Step 5: Update Your Portfolio Code

#### In `index.html`:
Replace `YOUR_PUBLIC_KEY` with your actual public key:
```javascript
emailjs.init("AbCdEfGhIjKlMnOpQrSt"); // Your actual public key
```

#### In `script.js`:
Replace the credentials at line ~207:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';   // Your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your actual template ID
```

Also update your email address at line ~232:
```javascript
to_email: 'your-actual-email@gmail.com', // Your email where you want to receive messages
```

### Step 6: Test Your Form
1. Open your portfolio in a browser
2. Fill out the contact form
3. Click "Send Message"
4. Check your email (including spam folder)

## 📧 Email Template Variables

Your template uses these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email address

## 🔧 Troubleshooting

### "EmailJS is not loaded"
- Check your internet connection
- Make sure the EmailJS script is included before script.js

### "Failed to send message"
- Verify all three IDs are correct (Service, Template, Public Key)
- Check EmailJS dashboard for error logs
- Make sure you're not exceeding the free tier limit (200 emails/month)

### Emails not arriving
- Check spam/junk folder
- Verify the "to_email" in your template
- Check EmailJS dashboard for sent email logs

### CORS errors
- Make sure you're testing on localhost or a deployed site
- EmailJS doesn't work with file:// protocol

## 🎯 Example with Real Values

Here's what your code should look like with actual values:

**index.html:**
```html
<script>
    emailjs.init("BkP3nL9kXmR8vQ2Yt"); // Example public key
</script>
```

**script.js:**
```javascript
const EMAILJS_SERVICE_ID = 'service_gmail123';
const EMAILJS_TEMPLATE_ID = 'template_portfolio';

// ... in the email send part:
const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        to_email: 'john.doe@gmail.com', // Your actual email
    }
);
```

## 📊 EmailJS Dashboard

Monitor your emails:
1. Go to EmailJS dashboard
2. Check **Email History** for sent emails
3. View **Statistics** for usage
4. Set up **Auto-Reply** if desired

## 🆓 Free Tier Limits
- 200 emails per month
- 2 email templates
- Limited to 50KB per request
- No attachments

## 🚨 Security Note
Your Public Key is safe to expose in frontend code. However, never share your Private Key or API Secret!

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or their support.