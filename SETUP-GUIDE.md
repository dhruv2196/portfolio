# Portfolio Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Configure Your Portfolio
1. Open `portfolio-config.js`
2. Update the following sections with your information:
   - **Personal Information** (name, email, phone, location)
   - **Hero Section** (greeting, description)
   - **About Section** (your story)
   - **Experience** (your work history)
   - **Projects** (your portfolio items)
   - **Skills** (your technical skills)
   - **Social Links** (your profiles)

### Step 2: Configure Email (Optional)
1. Open `config.js`
2. Add your EmailJS credentials (see `emailjs-setup-guide.md`)
3. Or leave as is to use mailto links

### Step 3: View Your Portfolio
1. Open `index.html` in a web browser
2. Or run a local server: `python3 -m http.server 8000`

That's it! Your portfolio is ready. 🎉

## 📋 Configuration Sections Explained

### Personal Information
```javascript
personal: {
    name: "John Doe",              // Your full name
    title: "Full Stack Developer", // Your professional title
    email: "john@example.com",     // Contact email
    phone: "+1 (555) 123-4567",    // Contact phone
    location: "San Francisco, CA",  // Your location
    avatar: {
        type: "initials",          // Choose: "icon", "image", or "initials"
        initials: "JD"             // Your initials
    }
}
```

### Hero Section
The first thing visitors see:
- **greeting**: Text before your name
- **subtitle/highlightedWord**: Your role/title
- **description**: Brief introduction (2-3 sentences)
- **stats**: Your achievements in numbers

### About Section
Your professional story:
- **paragraphs**: 2-3 paragraphs about you
- **highlights**: 4-6 key skills or strengths

### Experience Timeline
Your work history:
```javascript
{
    title: "Senior Developer",
    company: "Tech Corp",
    duration: "2020 - Present",
    description: "What you did",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "Node.js"]
}
```

### Projects
Your portfolio pieces:
```javascript
{
    title: "Project Name",
    category: "web",           // "web", "mobile", or "api"
    featured: true,            // Feature this project?
    icon: "fas fa-laptop",     // Font Awesome icon
    description: "What it does",
    technologies: ["Tech1", "Tech2"],
    links: {
        live: "https://...",   // Live demo URL
        github: "https://..."  // GitHub repo URL
    }
}
```

### Skills
Your technical expertise:
```javascript
{
    name: "React",
    icon: "fab fa-react",      // Font Awesome icon
    level: 90                  // Skill level (0-100)
}
```

## 🎨 Customization Options

### Theme Colors
Change the color scheme in `portfolio-config.js`:
```javascript
theme: {
    colors: {
        accentPrimary: "#6366f1",   // Main accent color
        accentSecondary: "#818cf8"  // Secondary accent
    }
}
```

### Avatar Options

**Option 1: Initials**
```javascript
avatar: {
    type: "initials",
    initials: "JD"
}
```

**Option 2: Icon**
```javascript
avatar: {
    type: "icon",
    icon: "fas fa-user"  // Any Font Awesome icon
}
```

**Option 3: Photo**
```javascript
avatar: {
    type: "image",
    image: "/path/to/photo.jpg"
}
```

### Navigation Logo
```javascript
navigation: {
    logo: {
        type: "initials",  // or "text"
        initials: "JD",
        text: "Portfolio"
    }
}
```

## 📝 Content Tips

### Writing Your Hero Description
- Keep it concise (2-3 sentences)
- Highlight your specialty
- Include what makes you unique

**Example:**
"I craft exceptional digital experiences through clean code and innovative solutions. Specializing in React and Node.js, I help startups build scalable applications."

### Writing About Paragraphs
- First paragraph: Professional background
- Second paragraph: Approach and interests

**Example:**
"With over 5 years in web development, I've helped companies from startups to Fortune 500s build robust applications."

"I believe in writing clean, maintainable code and staying current with the latest technologies. When not coding, I contribute to open source and mentor junior developers."

### Project Descriptions
- Start with what it does
- Mention the impact or results
- Keep it to 2-3 sentences

**Example:**
"A real-time analytics dashboard that helps businesses track KPIs. Reduced reporting time by 80% and improved decision-making speed."

## 🔧 Advanced Configuration

### Adding More Sections
To add more experience, projects, or skills:

1. **Experience**: Add objects to `experience.timeline[]`
2. **Projects**: Add objects to `projects.items[]`
3. **Skills**: Add objects to the appropriate category in `skills.categories[]`

### Removing Sections
Set items to empty arrays:
```javascript
experience: {
    timeline: []  // No experience shown
}
```

### Feature Toggles
Enable/disable features:
```javascript
features: {
    showBlog: false,
    enableAnalytics: false,
    enableServiceWorker: true,
    enableAnimations: true
}
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub (remember: `config.js` is gitignored!)
2. Go to Settings → Pages
3. Select source branch
4. Your site will be at: `https://username.github.io/repository`

### Netlify
1. Connect your GitHub repo
2. Add environment variables for EmailJS
3. Deploy!

### Vercel
1. Import your GitHub repo
2. Add environment variables
3. Deploy!

## ❓ FAQ

**Q: How do I add more projects?**
A: Add more objects to the `projects.items` array in `portfolio-config.js`

**Q: Can I change the fonts?**
A: Yes! Update the Google Fonts link in `index.html` and the font variables in `styles.css`

**Q: How do I add a new social media link?**
A: Add it to the `social` object and the icon will appear automatically

**Q: Can I use my own icons?**
A: Yes! Use any Font Awesome icon by changing the icon class names

**Q: How do I change the section order?**
A: You'll need to reorder the sections in `index.html`

## 🆘 Troubleshooting

**Content not updating:**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Ensure `portfolio-config.js` is loaded before `portfolio-builder.js`

**Email not working:**
- Check `config.js` has correct EmailJS credentials
- See `emailjs-setup-guide.md` for setup help

**Images not showing:**
- Check image paths are correct
- Use absolute paths starting with `/`
- Ensure images are in the project folder

## 📚 Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Color Palette Generator](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)

---

Need help? Check the example configuration in `portfolio-config.example.js`!