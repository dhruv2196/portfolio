# Portfolio Configuration System

## How It Works

```
┌─────────────────────────┐
│  portfolio-config.js    │  ← You edit this file only!
│                         │
│  • Personal Info        │
│  • Hero Content         │
│  • About Content        │
│  • Experience           │
│  • Projects             │
│  • Skills               │
│  • Contact Info         │
│  • Social Links         │
│  • Theme Settings       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  portfolio-builder.js   │  ← Reads your config
│                         │
│  • Parses config        │
│  • Updates HTML         │
│  • Applies theme        │
│  • Sets up content      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────��───────────┐
│     Your Portfolio      │  ← Final result!
│                         │
│  Fully customized with  │
│  your information       │
└─────────────────────────┘
```

## Configuration Benefits

### 🎯 For Users
- **No coding required** - Just edit the config file
- **Single source of truth** - All content in one place
- **Easy updates** - Change once, updates everywhere
- **Version control friendly** - Track changes easily

### 🛠️ For Developers
- **Separation of concerns** - Content vs. code
- **Reusable** - Same code, different portfolios
- **Maintainable** - Update features without touching content
- **Extensible** - Easy to add new sections

## Example: Adding a New Project

Instead of editing HTML:
```html
<!-- OLD WAY - Edit HTML directly -->
<div class="project-card">
  <h3>My New Project</h3>
  <p>Description...</p>
  <!-- ... more HTML ... -->
</div>
```

Just add to config:
```javascript
// NEW WAY - Add to portfolio-config.js
projects: {
    items: [
        // ... existing projects ...
        {
            title: "My New Project",
            description: "Description...",
            technologies: ["React", "Node.js"],
            links: { live: "...", github: "..." }
        }
    ]
}
```

## Configuration Structure

```javascript
PORTFOLIO_CONFIG = {
    // 1. Personal Information
    personal: { name, email, phone, location, avatar },
    
    // 2. Content Sections
    hero: { greeting, description, stats, buttons },
    about: { paragraphs, highlights },
    experience: { timeline: [...jobs] },
    projects: { items: [...projects] },
    skills: { categories: [...skillGroups] },
    contact: { heading, description, form },
    
    // 3. Links & Social
    social: { linkedin, github, twitter },
    navigation: { logo, links },
    
    // 4. Appearance
    theme: { defaultTheme, colors },
    
    // 5. SEO & Meta
    seo: { title, description, keywords },
    
    // 6. Features
    features: { toggles for various features }
}
```

## Quick Reference

| What to change | Where to edit | Example |
|----------------|---------------|---------|
| Your name | `personal.name` | `"Jane Smith"` |
| Job title | `personal.title` | `"UX Designer"` |
| Hero text | `hero.description` | `"I create beautiful..."` |
| Add project | `projects.items[]` | `{ title: "App", ... }` |
| Add job | `experience.timeline[]` | `{ title: "Senior Dev", ... }` |
| Change colors | `theme.colors` | `accentPrimary: "#ff6b6b"` |
| Social links | `social.*` | `github: "https://..."` |

## Tips

1. **Start small** - Update personal info first
2. **Preview often** - Save and refresh browser
3. **Use examples** - Copy from `portfolio-config.example.js`
4. **Keep it real** - Use actual projects and experience
5. **Be concise** - Short, impactful descriptions work best

## Troubleshooting

**Changes not showing?**
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for errors
- Ensure file is saved

**Syntax errors?**
- Check for missing commas
- Ensure all quotes are closed
- Use a code editor with syntax highlighting

**Need help?**
- See `SETUP-GUIDE.md` for detailed instructions
- Check `portfolio-config.example.js` for examples
- Review browser console for error messages