# Modern Portfolio Website

A responsive, interactive portfolio website built with modern web technologies, featuring a sleek dark theme, smooth animations, and comprehensive functionality for showcasing professional work and skills.

## 🌟 Features

### Core Features
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme Toggle**: Seamless theme switching with localStorage persistence
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Filtering**: Dynamic project categorization and filtering
- **Contact Form**: Functional contact form with validation and feedback
- **Skill Visualization**: Animated skill bars and proficiency indicators
- **Resume Download**: Downloadable resume functionality

### Advanced Features
- **Typewriter Effect**: Animated tagline rotation in hero section
- **Parallax Effects**: Subtle background animations
- **Intersection Observer**: Scroll-triggered animations
- **Performance Monitoring**: Built-in performance tracking
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Semantic HTML and meta tags

## 🚀 Quick Start

### Step 1: Configure Your Portfolio (Required)
1. **Open** `portfolio-config.js`
2. **Update** with your personal information:
   - Name, title, email, location
   - Work experience
   - Projects
   - Skills
   - Social links
3. **Save** the file

### Step 2: Configure Email (Optional)
1. **Open** `config.js`
2. **Add** your EmailJS credentials (or skip for mailto links)

### Step 3: View Your Portfolio

#### Option 1: Direct File Access
1. **Open** `index.html` directly in your web browser
   - Note: Service Worker features will be disabled

#### Option 2: Local Server (Recommended)

#### Using Python (Built-in on macOS/Linux):
```bash
# Navigate to the project directory
cd /path/to/portfolio

# Run the Python server
python3 server.py
# OR use the built-in server
python3 -m http.server 8000
```

#### Using Node.js:
```bash
# If you have Node.js installed
node server.js
# OR use npx
npx serve .
```

#### Using VS Code Live Server:
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

After starting the server, open `http://localhost:8000` in your browser.

### Option 3: Deploy Online
1. **Customize** the content with your information
2. **Deploy** to your preferred hosting platform (Netlify, Vercel, GitHub Pages)

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML structure
├── styles.css              # CSS styles and animations
├── script.js               # Core JavaScript functionality
├── portfolio-config.js     # YOUR MAIN CONFIGURATION FILE ⭐
├── portfolio-builder.js    # Dynamic content builder
├── config.js               # EmailJS credentials
├── sw.js                   # Service Worker
├── server.py               # Python dev server
├── server.js               # Node.js dev server
├── SETUP-GUIDE.md          # Detailed setup instructions
├── README.md               # This file
└── Examples/
    ├── portfolio-config.example.js  # Example configuration
    └── config.example.js            # Example email config
```

## 🎨 Customization Guide

### ⭐ NEW: Configuration-Based Customization

**No more editing HTML!** All customization is now done through `portfolio-config.js`:

1. **Personal Information**
   ```javascript
   personal: {
       name: "Your Name",
       title: "Your Title",
       email: "your@email.com",
       // ... etc
   }
   ```

2. **Sections Content**
   - Hero: Greeting, description, stats
   - About: Your story and highlights
   - Experience: Work history timeline
   - Projects: Portfolio items
   - Skills: Technical expertise
   - Contact: Contact details

3. **Theme & Colors**
   ```javascript
   theme: {
       colors: {
           accentPrimary: "#6366f1",
           accentSecondary: "#818cf8"
       }
   }
   ```

See `SETUP-GUIDE.md` for detailed instructions!

### Styling Customization

#### Color Scheme
Modify CSS variables in `styles.css` (lines 1-30):

```css
:root {
  --accent-primary: #7c3aed;    /* Primary accent color */
  --accent-secondary: #a855f7;  /* Secondary accent color */
  --bg-primary: #0a0a0f;        /* Primary background */
  --bg-secondary: #1a1a2e;      /* Secondary background */
}
```

#### Typography
Update font families:

```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-code: 'Fira Code', monospace;
}
```

#### Spacing and Layout
Adjust spacing variables:

```css
:root {
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}
```

### JavaScript Configuration

#### Typewriter Effect
Customize rotating taglines in `script.js` (line 200):

```javascript
const taglines = [
    'Your Title Here',
    'Another Title',
    'Third Title'
];
```

#### Contact Form
Update form submission endpoint (line 150):

```javascript
// Replace with your actual form endpoint
async handleContactFormSubmission(form) {
    // Your form handling logic
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ⚡ Performance Optimization

### Built-in Optimizations
- CSS Grid and Flexbox for efficient layouts
- Throttled scroll events
- Intersection Observer for animations
- Optimized animations with `transform` and `opacity`
- Lazy loading for images (when implemented)

### Performance Tips
1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify Assets**: Minify CSS and JavaScript for production
3. **Enable Compression**: Use Gzip/Brotli compression on server
4. **CDN Integration**: Serve assets from CDN for faster loading

## 🔧 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting platform

### Traditional Hosting
- Upload files to any web server
- Ensure proper MIME types are configured
- Enable HTTPS for security

## 🛠️ Development Setup

### Local Development
1. Use a local server (Live Server extension in VS Code)
2. Or use Python: `python -m http.server 8000`
3. Or use Node.js: `npx serve .`

### Build Process (Optional)
For advanced optimization, consider:
- **Webpack** or **Vite** for bundling
- **PostCSS** for CSS processing
- **Babel** for JavaScript transpilation
- **ImageOptim** for image optimization

## 📊 Analytics Integration

### Google Analytics
Add to `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
The built-in performance monitor logs metrics to console. Extend it to send data to your analytics platform.

## 🔒 Security Considerations

- Sanitize form inputs if processing server-side
- Use HTTPS in production
- Implement Content Security Policy (CSP)
- Validate and sanitize any user-generated content

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility
- Focus indicators
- Reduced motion support

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**
   - Check browser support for CSS animations
   - Ensure JavaScript is enabled

2. **Theme toggle not persisting**
   - Check localStorage availability
   - Verify browser privacy settings

3. **Contact form not submitting**
   - Update form action URL
   - Check network connectivity

4. **Mobile menu not working**
   - Verify JavaScript is loaded
   - Check for console errors

## 📈 SEO Optimization

### Meta Tags
Update in `<head>` section:

```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, relevant, keywords">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="path-to-your-image.jpg">
```

### Structured Data
Add JSON-LD structured data for better search engine understanding:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Job Title",
  "url": "https://yourwebsite.com"
}
</script>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you create improvements that could benefit others, consider sharing them!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Inter Font**: Google Fonts
- **Fira Code**: Mozilla
- **Font Awesome**: Icons
- **CSS Grid**: Layout system
- **Intersection Observer API**: Scroll animations

## 📞 Support

If you need help customizing this portfolio:

1. Check the documentation above
2. Review the code comments
3. Test in different browsers
4. Validate HTML and CSS

---

**Built with ❤️ using modern web technologies**

*Last updated: 2024*