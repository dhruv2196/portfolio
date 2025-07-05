# Email Setup Guide for Portfolio Contact Form

This guide will help you set up real email functionality for your portfolio's contact form. Choose the option that best fits your needs.

## 📧 Email Service Options

### Option 1: EmailJS (Recommended for Beginners)
**Free tier: 200 emails/month**

1. **Sign up** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an email service:**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection instructions

3. **Create an email template:**
   - Go to Email Templates → Create New Template
   - Use these variables in your template:
   ```
   From: {{name}} ({{email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. **Get your credentials:**
   - Service ID (from Email Services) service_sq7l1z1
   - Template ID (from Email Templates) template_0o6jisp
   - Public Key (from Account → API Keys)

5. **Add EmailJS to your HTML:**
   ```html
   <!-- Add before closing </body> tag -->
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
       emailjs.init("YOUR_PUBLIC_KEY");
   </script>
   ```

6. **Update script.js:**
   Uncomment the EmailJS section and add your credentials:
   ```javascript
   await emailjs.send(
       'service_abc123',  // Your Service ID
       'template_xyz789', // Your Template ID
       formValues,
       'public_key_123'   // Your Public Key
   );
   ```

### Option 2: Formspree (Simple Setup)
**Free tier: 50 submissions/month**

1. **Sign up** at [https://formspree.io/](https://formspree.io/)

2. **Create a new form:**
   - Click "New Form"
   - Copy your form endpoint (looks like: https://formspree.io/f/abcdefgh)

3. **Update script.js:**
   Uncomment the Formspree section and add your form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(formValues)
   });
   ```

### Option 3: Web3Forms (No Backend Required)
**Free tier: 250 submissions/month**

1. **Get access key** at [https://web3forms.com/](https://web3forms.com/)
   - Enter your email
   - You'll receive an access key instantly

2. **Update script.js:**
   Uncomment the Web3Forms section and add your access key:
   ```javascript
   const response = await fetch('https://api.web3forms.com/submit', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           access_key: 'YOUR_ACCESS_KEY',
           ...formValues
       })
   });
   ```

### Option 4: Mailto Link (Current Implementation)
**Free, but limited functionality**

Currently active in your code. This option:
- ✅ Works immediately without setup
- ✅ No API keys needed
- ❌ Opens user's email client
- ❌ Doesn't work if user has no email client configured

To customize, update the email address in script.js:
```javascript
const mailtoLink = `mailto:your-email@example.com?subject=...`;
```

## 🚀 Quick Setup Instructions

### For EmailJS (Most Popular):

1. **Sign up** at emailjs.com
2. **Connect Gmail:**
   - Email Services → Add New → Gmail
   - Follow OAuth connection
3. **Create template** with the variables shown above
4. **Add to index.html:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
       emailjs.init("YOUR_PUBLIC_KEY_HERE");
   </script>
   ```
5. **Update script.js** with your IDs

### For Formspree (Simplest):

1. **Sign up** at formspree.io
2. **Create form** and copy endpoint
3. **Update script.js** with your form ID
4. **That's it!** No additional scripts needed

## 🔒 Security Notes

- **Never commit API keys** to public repositories
- Use environment variables for production
- Consider using a backend service for sensitive operations
- Enable CORS and rate limiting where available

## 📝 Testing Your Setup

1. **Fill out the form** with test data
2. **Submit** and check for:
   - Success notification
   - Email delivery (check spam folder)
   - Form reset after submission
3. **Test error cases:**
   - Invalid email format
   - Network disconnection
   - Rate limit exceeded

## 🆘 Troubleshooting

### Emails not arriving:
- Check spam/junk folder
- Verify API credentials
- Check service dashboard for errors
- Ensure email service is connected properly

### CORS errors:
- Make sure you're testing on localhost or deployed site
- Check if API key is correct
- Verify domain is whitelisted (if required)

### Form not resetting:
- Check browser console for JavaScript errors
- Ensure success response is received
- Verify form.reset() is called

## 💡 Pro Tips

1. **Add honeypot field** to prevent spam:
   ```html
   <input type="text" name="honeypot" style="display:none">
   ```

2. **Implement rate limiting** client-side:
   ```javascript
   let lastSubmit = 0;
   const RATE_LIMIT = 60000; // 1 minute
   
   if (Date.now() - lastSubmit < RATE_LIMIT) {
       showNotification('Please wait before sending another message', 'warning');
       return;
   }
   ```

3. **Save form data** to localStorage for better UX:
   ```javascript
   // Save on input
   localStorage.setItem('contactForm', JSON.stringify(formValues));
   
   // Restore on page load
   const saved = JSON.parse(localStorage.getItem('contactForm') || '{}');
   ```

Choose the option that best fits your needs and follow the setup instructions above!