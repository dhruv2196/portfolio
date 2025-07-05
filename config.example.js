// Configuration file for EmailJS
// Copy this file to config.js and fill in your actual values
// IMPORTANT: Never commit config.js to version control!

const CONFIG = {
    EMAILJS_SERVICE_ID: 'YOUR_SERVICE_ID',
    EMAILJS_TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    EMAILJS_PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    CONTACT_EMAIL: 'your-email@example.com'
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}