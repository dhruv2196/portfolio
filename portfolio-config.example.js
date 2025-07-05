// Portfolio Configuration Example
// Copy this file to portfolio-config.js and customize with your information

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        phone: "+1 (555) 000-0000",
        location: "Your City, State",
        avatar: {
            type: "initials", // Options: "icon", "image", "initials"
            icon: "fas fa-user",
            image: "/path/to/your/photo.jpg",
            initials: "YN"
        }
    },

    // Hero Section
    hero: {
        greeting: "Hello, I'm",
        subtitle: "Creative",
        highlightedWord: "Developer",
        description: "Write a compelling description about yourself and what you do.",
        availability: {
            show: true,
            text: "Available for work"
        },
        stats: [
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "5+", label: "Happy Clients" }
        ]
    },

    // About Section
    about: {
        subtitle: "I'm Your Name, a Developer based in Your City.",
        paragraphs: [
            "Write your first paragraph about your background and expertise.",
            "Write your second paragraph about your interests and approach to work."
        ],
        highlights: [
            { icon: "fas fa-check-circle", text: "Your Skill 1" },
            { icon: "fas fa-check-circle", text: "Your Skill 2" },
            { icon: "fas fa-check-circle", text: "Your Skill 3" },
            { icon: "fas fa-check-circle", text: "Your Skill 4" }
        ]
    },

    // Add one job experience
    experience: {
        timeline: [
            {
                title: "Your Job Title",
                company: "Company Name",
                duration: "2020 - Present",
                description: "Describe your role and responsibilities.",
                achievements: [
                    "Achievement 1",
                    "Achievement 2",
                    "Achievement 3"
                ],
                technologies: ["Tech1", "Tech2", "Tech3"]
            }
        ]
    },

    // Add one project
    projects: {
        items: [
            {
                title: "Project Name",
                category: "web",
                featured: true,
                icon: "fas fa-laptop-code",
                description: "Describe your project and its impact.",
                technologies: ["React", "Node.js"],
                links: {
                    live: "https://your-project.com",
                    github: "https://github.com/yourusername/project"
                }
            }
        ]
    },

    // Social Links
    social: {
        linkedin: "https://linkedin.com/in/yourusername",
        github: "https://github.com/yourusername",
        twitter: "https://twitter.com/yourusername",
        dribbble: "" // Leave empty if you don't have
    }

    // ... rest of the configuration
};