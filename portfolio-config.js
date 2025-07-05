// Portfolio Configuration File
// Customize your entire portfolio by editing this file only!

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Dhruv Singhal",
        title: "Lead Software Engineer",
        email: "dhruv.singhal96@gmail.com",
        phone: "+919717081398",
        location: "Noida, India",
        lastUpdated: "4th July 2025",
        avatar: {
            type: "image", // Options: "icon", "image", "initials"
            icon: "fas fa-user", // Font Awesome icon class (used when type is "icon")
            image: "Photo.jpg", // Path to image (used when type is "image")
            initials: "DS", // Your initials (used when type is "initials")
            initialsBackground: "#6366f1", // Background color for initials (optional, defaults to accent color)
            initialsColor: "#ffffff", // Text color for initials (optional, defaults to white)
            style: "square", // Options: "square", "circular", "portrait"
            objectFit: "cover" // Options: "cover", "contain", "fill" (applies to image type only)
        },
        // Separate image for about section (optional)
        aboutImage: {
            enabled: true, // Set to true to use a different image in about section
            type: "initials", // Options: "image", "initials" (can be different from main avatar)
            image: "Photo.jpg", // Can be a different photo like "Photo-about.jpg"
            initials: "DS", // Your initials (used when type is "initials")
            initialsBackground: "#6366f1", // Background color for initials - Try gradient colors: "#8b5cf6" (purple), "#3b82f6" (blue), "#10b981" (green), "#f59e0b" (amber)
            initialsColor: "#ffffff", // Text color for initials (optional)
            style: "square", // Options: "square", "circular", "portrait"
            objectFit: "contain" // Options: "cover", "contain", "fill" (applies to image type only)
        }
    },

    // Hero Section
    hero: {
        greeting: "Hello, I'm",
        subtitle: "Lead Software Engineer",
        highlightedWord: "Developer",
        description: "With 7+ years of experience as a Lead Software Engineer at Ultimate Kronos Group(previously Programmer Analyst at Cerillion, Software Engineer at Mitel Corporation), I specialize in building E2E microservices, with good knowledge of Event Driven Architecture, Design patterns, Spring Boot & JPA, with Hibernate,  Data structures.",
        availability: {
            show: true,
            text: "Available for work"
        },
        stats: [
            { value: "7.5", label: "Years Experience" },
            { value: "200+", label: "Java Issues Fixed" },
            { value: "6", label: "Major Projects" }
        ],
        buttons: [
            {
                text: "View My Work",
                href: "#projects",
                primary: true,
                icon: "fas fa-arrow-right"
            },
            {
                text: "Let's Talk",
                href: "#contact",
                primary: false
            }
        ],
        floatingIcons: [
            { icon: "fab fa-java", position: "icon-1", color: "#007396" }, // Java official blue
            { icon: "fas fa-leaf", position: "icon-2", color: "#6db33f" }, // Spring green
            { icon: "fas fa-database", position: "icon-3", color: "#336791" }, // Database blue
            // { icon: "fab fa-aws", position: "icon-4", color: "#FF9900" },  // AWS orange
            { icon: "fab fa-google", position: "icon-5", color: "#4285F4" }  // Google Cloud bl
        ]
    },

    // About Section
    about: {
        sectionLabel: "Get to know me",
        sectionTitle: "About Me",
        subtitle: "I'm Dhruv Singhal, an Oracle certified Java Developer based in Pune, India.",
        paragraphs: [
            "With 7+ years of experience as a Lead Software Engineer at Ultimate Kronos Group(previously Programmer Analyst at Cerillion, Software Engineer at Mitel Corporation), I specialize in building E2E microservices, with good knowledge of Event Driven Architecture, Design patterns, Spring Boot & JPA, with Hibernate,  Data structures.",
            "I hold an OCP JAVA SE 11 DEVELOPER certification and have a strong educational background with a Post Graduation Diploma in Advanced Computing from CDAC Pune and a B.Tech in Computer Science from Noida International University."
        ],
        highlights: [
            { icon: "fas fa-check-circle", text: "Core Java" },
            { icon: "fas fa-check-circle", text: "Spring Boot" },
            { icon: "fas fa-check-circle", text: "Hibernate" },
            { icon: "fas fa-check-circle", text: "REST APIs" },
            { icon: "fas fa-check-circle", text: "Oracle" },
            { icon: "fas fa-check-circle", text: "MySQL" },
            { icon: "fas fa-check-circle", text: "AWS" }
        ],
        resumeButton: {
            show: true,
            text: "Download Resume",
            icon: "fas fa-download"
        }
    },

    // Experience Section
    experience: {
        sectionLabel: "Career Journey",
        sectionTitle: "Work Experience",
        timeline: [
            {
                title: "PROGRAMMER ANALYST",
                company: "CERILLION PLC",
                duration: "Sep 2019 - Present",
                description: "Major responsibility in developing REST APIs related to Sales manager, Cash Drawers, Event Manager, CRM Administrator and other areas.",
                achievements: [
                    "Fixed 200+ Java issues related to Charging Systems, Sales manager, CRM Administrator",
                    "Single point responsibility in developing API catalogue and making code changes",
                    "Implemented a logger to log time-based server logs using log4j",
                    "Implemented encoding algorithm in Convergent charging system",
                    "Handled each issue related to encoding-decoding and special characters"
                ],
                technologies: ["Java", "Spring Boot", "REST APIs", "Log4j", "Oracle", "MySQL"]
            },
            {
                title: "GRADUATE ENGINEER",
                company: "MITEL CORPORATION",
                duration: "Mar 2019 - Sep 2019",
                description: "Understanding business requirements of the product and enhancement requests by clients.",
                achievements: [
                    "Developing REST APIs for web-based client (MiVoice Connect client)",
                    "Attending meetings with customer to resolve issues through various configurations",
                    "Developing and testing call features like VOIP calling, Call transfer, conference, Hunt groups",
                    "Installation of complete solution like switches, servers based on requirements"
                ],
                technologies: ["Java", "REST APIs", "VOIP", "Spring"]
            },
            {
                title: "SOFTWARE DEVELOPER",
                company: "MUST IT SERVICES PVT LTD",
                duration: "Aug 2017 - July 2018",
                description: "Developed REST APIs using Spring & Hibernate and fixed project bugs.",
                achievements: [
                    "Built a back-end database service in Java and implemented a front end UI",
                    "Developed the endpoints for the client as well as internal APIs",
                    "Documented the services using Swagger/OpenAPI"
                ],
                technologies: ["Java", "Spring", "Hibernate", "REST APIs", "Swagger"]
            }
        ]
    },

    // Education Section
    education: {
        sectionLabel: "Academic Background",
        sectionTitle: "Education",
        timeline: [
            {
                degree: "POST GRADUATION DIPLOMA IN ADVANCED COMPUTING",
                institution: "CDAC PUNE",
                duration: "August 2018 - Feb 2019",
                location: "Pune",
                description: "Specialized in advanced computing concepts including software development, algorithms, and enterprise applications.",
                achievements: [
                    "Comprehensive training in Java, Spring Framework, and enterprise development",
                    "Hands-on experience with full-stack development",
                    "Project work on distributed systems and web applications"
                ],
                icon: "fas fa-graduation-cap"
            },
            {
                degree: "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE",
                institution: "NOIDA INTERNATIONAL UNIVERSITY",
                duration: "August 2013 - May 2017",
                location: "Noida",
                description: "Four-year undergraduate program focusing on computer science fundamentals and software engineering.",
                achievements: [
                    "Core subjects: Data Structures, Algorithms, Database Management, Operating Systems",
                    "Developed strong foundation in programming and software development",
                    "Participated in technical workshops and coding competitions"
                ],
                icon: "fas fa-university"
            },
            {
                degree: "SCIENCE WITH PCM (10-12)",
                institution: "MODERN SCHOOL",
                duration: "May 2010 - April 2013",
                location: "Faridabad",
                description: "Higher secondary education with focus on Physics, Chemistry, and Mathematics.",
                achievements: [
                    "Strong foundation in mathematics and analytical thinking",
                    "Participated in science exhibitions and competitions",
                    "Developed problem-solving and logical reasoning skills"
                ],
                icon: "fas fa-school"
            }
        ]
    },

    // Projects Section
    projects: {
        sectionLabel: "Portfolio",
        sectionTitle: "Featured Projects",
        filters: [
            { text: "All Projects", value: "all" },
            { text: "Web Apps", value: "web" },
            { text: "Java Apps", value: "java" },
            { text: "APIs", value: "api" }
        ],
        items: [
            {
                title: "HASHNOW.CDE",
                category: "web",
                featured: true,
                icon: "fas fa-shipping-fast",
                description: "A courier service management system used for day to day activities such as booking a courier, process data of customers and maintain courier details.",
                technologies: ["JAVA EE", "Spring Boot", "REST APIs", "AWS Cloud"],
                links: {
                    live: "https://hashnow.cde.com",
                    github: ""
                }
            },
            {
                title: "DATATRANSFER - PC TO PC",
                category: "java",
                featured: true,
                icon: "fas fa-exchange-alt",
                description: "Data Transfer application in Java using Remote Method Invocation. Can transfer audio, text, videos between systems on the same network with Java Runtime Environment.",
                technologies: ["Core Java", "RMI API", "Socket Programming"],
                links: {
                    live: "#",
                    github: "#"
                }
            }
        ]
    },

    // Skills Section
    skills: {
        sectionLabel: "Technical Expertise",
        sectionTitle: "Skills & Technologies",
        categories: [
            {
                title: "Core Programming & Frameworks",
                skills: [
                    { name: "Core Java", icon: "fab fa-java", level: 95 },
                    { name: "Spring Framework", icon: "fas fa-leaf", level: 90 },
                    { name: "Spring Boot", icon: "fas fa-rocket", level: 92 },
                    { name: "Hibernate/JPA", icon: "fas fa-database", level: 88 },
                    { name: "JDBC", icon: "fas fa-plug", level: 85 },
                    { name: "REST Web Services", icon: "fas fa-code", level: 92 },
                    { name: "Maven", icon: "fas fa-box", level: 82 },
                    { name: "JAVA EE", icon: "fab fa-java", level: 80 }
                ]
            },
            {
                title: "Web Technologies & APIs",
                skills: [
                    { name: "RESTful APIs", icon: "fas fa-exchange-alt", level: 92 },
                    { name: "HTML/CSS", icon: "fab fa-html5", level: 80 },
                    { name: "TypeScript", icon: "fas fa-code", level: 75 },
                    { name: "YAML", icon: "fas fa-file-code", level: 78 },
                    { name: "Swagger/OpenAPI", icon: "fas fa-book", level: 85 },
                    { name: "Socket Programming", icon: "fas fa-network-wired", level: 70 },
                    { name: "RMI API", icon: "fas fa-share-alt", level: 72 },
                    { name: "Log4j", icon: "fas fa-file-alt", level: 80 }
                ]
            },
            {
                title: "Databases & Cloud",
                skills: [
                    { name: "Oracle Database", icon: "fas fa-database", level: 88 },
                    { name: "MySQL", icon: "fas fa-database", level: 85 },
                    { name: "AWS Cloud", icon: "fab fa-aws", level: 78 },
                    { name: "Google Cloud Platform", icon: "fab fa-google", level: 75 },
                    { name: "Shell Scripting", icon: "fas fa-terminal", level: 75 }
                ]
            },
            {
                title: "Development Tools",
                skills: [
                    { name: "Postman", icon: "fas fa-paper-plane", level: 90 },
                    { name: "Git", icon: "fab fa-git-alt", level: 88 },
                    { name: "GitHub", icon: "fab fa-github", level: 88 },
                    { name: "Perforce", icon: "fas fa-code-branch", level: 78 },
                    { name: "VS Code", icon: "fas fa-code", level: 85 },
                    { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", level: 82 }
                ]
            },
            {
                title: "DevOps & Infrastructure",
                skills: [
                    { name: "Apache Tomcat", icon: "fas fa-server", level: 80 },
                    { name: "VMWare", icon: "fas fa-server", level: 75 },
                    { name: "Jira", icon: "fab fa-jira", level: 85 },
                    { name: "Trello", icon: "fab fa-trello", level: 80 },
                    { name: "FileZilla", icon: "fas fa-upload", level: 78 },
                    { name: "Putty", icon: "fas fa-terminal", level: 82 }
                ]
            },
            {
                title: "Concepts & Methodologies",
                skills: [
                    { name: "Data Structures", icon: "fas fa-sitemap", level: 90 },
                    { name: "Design Patterns", icon: "fas fa-project-diagram", level: 88 },
                    { name: "Microservices", icon: "fas fa-cubes", level: 82 },
                    { name: "Agile/Scrum", icon: "fas fa-sync-alt", level: 85 },
                    { name: "API Design", icon: "fas fa-cogs", level: 87 },
                    { name: "Problem Solving", icon: "fas fa-lightbulb", level: 92 }
                ]
            }
        ],
        certifications: [
            { name: "OCP JAVA SE 11 DEVELOPER (1Z0-819-J)", icon: "fas fa-certificate" },
            { name: "Post Graduate Diploma in Advanced Computing - CDAC", icon: "fas fa-graduation-cap" },
            { name: "B.Tech in Computer Science - NIU", icon: "fas fa-university" }
        ]
    },

    // Contact Section
    contact: {
        sectionLabel: "Let's Connect",
        sectionTitle: "Get In Touch",
        heading: "Let's Work Together",
        description: "I'm always interested in new opportunities and exciting Java development projects. Whether you need help with Spring Boot applications, REST APIs, or enterprise solutions, feel free to reach out!",
        responseTime: "Usually responds within 24 hours",
        formFields: {
            name: { label: "Your Name", required: true },
            email: { label: "Your Email", required: true },
            subject: { label: "Subject", required: true },
            message: { label: "Your Message", required: true, rows: 5 }
        },
        submitButton: {
            text: "Send Message",
            icon: "fas fa-paper-plane"
        }
    },

    // Social Links
    social: {
        linkedin: "https://www.linkedin.com/in/dhruvsinghal96",
        github: "https://github.com/dhruv2196",
        twitter: "",
        dribbble: "" // Leave empty if not applicable
    },

    // Navigation
    navigation: {
        logo: {
            type: "initials", // Options: "text", "initials", "image"
            text: "Portfolio",
            initials: "DS", // Your initials (used when type is "initials")
            initialsBackground: "transparent", // Background color for initials in nav (optional)
            initialsColor: "inherit", // Text color for initials in nav (optional)
            image: "" // Path to logo image (used when type is "image")
        },
        links: [
            { text: "Home", href: "#home" },
            { text: "About", href: "#about" },
            { text: "Experience", href: "#experience" },
            { text: "Education", href: "#education" },
            { text: "Projects", href: "#projects" },
            { text: "Skills", href: "#skills" },
            { text: "Contact", href: "#contact" }
        ]
    },

    // Footer
    footer: {
        copyright: "© 2024 Dhruv Singhal. All rights reserved.",
        tagline: "Built with ❤️ using modern web technologies"
    },

    // Theme Settings
    theme: {
        defaultTheme: "dark", // Options: "dark", "light"
        allowThemeToggle: true,
        colors: {
            // You can override CSS variables here
            accentPrimary: "#6366f1",
            accentSecondary: "#818cf8"
        }
    },

    // SEO & Meta
    seo: {
        title: "Dhruv Singhal - Oracle Certified Java Developer",
        description: "Portfolio website showcasing my professional work in Java development, Spring Boot, REST APIs, and enterprise solutions",
        keywords: "portfolio, java developer, spring boot, hibernate, rest apis, oracle certified, software engineer",
        author: "Dhruv Singhal",
        image: "/path/to/og-image.jpg" // Open Graph image
    },

    // Feature Toggles
    features: {
        showBlog: false,
        showTestimonials: false,
        showPricing: false,
        enableAnalytics: false,
        enableServiceWorker: true,
        enableSmoothScroll: true,
        enableAnimations: true
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}