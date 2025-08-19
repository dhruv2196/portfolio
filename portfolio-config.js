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
        description: "With 7.5 years of experience building distributed, scalable microservices with high availability and resiliency. Experienced in Event-Driven Architecture, CQRS, Java, GCP, Docker, Kubernetes, and Spring Boot, delivering enterprise-grade solutions across HRM, Telecom, and E-commerce domains.",
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
        subtitle: "I'm Dhruv Singhal, a Lead Software Engineer based in Noida, India.",
        paragraphs: [
            "With 7.5 years of experience building distributed, scalable microservices with high availability and resiliency. I specialize in Event-Driven Architecture, CQRS, and designing enterprise-grade solutions that serve 5000+ clients.",
            "Currently at UKG, I've led critical platform migrations saving $2M+ annually, architected microservices with 99.9% uptime, and reduced deployment time from 7 days to under 1 hour through automation. I'm passionate about building resilient systems with comprehensive monitoring and implementing cutting-edge technologies like AI agents for configuration prediction."
        ],
        highlights: [
            { icon: "fas fa-check-circle", text: "Microservices Architecture" },
            { icon: "fas fa-check-circle", text: "Event-Driven Systems" },
            { icon: "fas fa-check-circle", text: "Google Cloud Platform" },
            { icon: "fas fa-check-circle", text: "Docker & Kubernetes" },
            { icon: "fas fa-check-circle", text: "Spring Boot & Java" },
            { icon: "fas fa-check-circle", text: "CQRS & Axon Framework" },
            { icon: "fas fa-check-circle", text: "Auth0 & OAuth2.0" }
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
                title: "LEAD SOFTWARE ENGINEER",
                company: "UKG - ULTIMATE KRONOS GROUP",
                duration: "Nov 2021 - Present",
                location: "Noida",
                icon: "fas fa-code",
                description: "Leading Integration Platform team, architecting distributed microservices with 99.9% uptime using Event-Driven Architecture.",
                achievements: [
                    "Led team delivering 3 critical projects, managing development and successful delivery",
                    "Spearheaded Integration platform migration from MuleSoft to Boomi, achieving $2M+ annual savings and 40% performance improvement",
                    "Designed resilient microservices with circuit breakers, retry mechanisms, and failover strategies serving 5000+ enterprise clients",
                    "Implemented comprehensive monitoring with custom metrics, alerts, and dashboards in Grafana",
                    "Built configuration-driven Angular/NgRx workflow interface with Auth0-based authentication for secure multi-tenant access",
                    "Developed automated multi-tenant provisioning, reducing deployment time from 7 days to <1 hour",
                    "Deployed containerized microservices on GCP with scaling using GKE",
                    "Currently developing AI agents using Google ADK for configuration prediction and metadata generation"
                ],
                technologies: ["Java", "Spring Boot", "GCP", "Docker", "Kubernetes", "Angular", "NgRx", "Auth0", "Grafana", "RabbitMQ", "MongoDB", "CQRS", "Axon"]
            },
            {
                title: "PROGRAMMER ANALYST",
                company: "CERILLION PLC",
                duration: "Sep 2019 - Nov 2021",
                location: "Pune",
                icon: "fas fa-laptop-code",
                description: "Developed high-performance REST APIs for CRM Plus platform serving telecom clients.",
                achievements: [
                    "Developed REST APIs for Sales Manager, Event Manager, and CRM Administrator modules",
                    "Enhanced Charging Systems with optimized encoding algorithms",
                    "Single-handedly developed comprehensive API catalogue",
                    "Resolved complex encoding-decoding and special character issues",
                    "Improved features related to Charging Systems and Sales manager"
                ],
                technologies: ["Java", "Spring Boot", "REST APIs", "Oracle", "MySQL", "Log4j"]
            },
            {
                title: "GRADUATE ENGINEER",
                company: "MITEL CORPORATION",
                duration: "Mar 2019 - Sep 2019",
                location: "Bangalore",
                icon: "fas fa-phone-volume",
                description: "Developed REST APIs and enhanced VOIP features for MiVoice Connect platform.",
                achievements: [
                    "Developed REST APIs for web-based MiVoice Connect client",
                    "Enhanced VOIP calling, call transfer, conference, and hunt group features",
                    "Worked on work groups and other telephony features",
                    "Resolved customer issues through various configurations"
                ],
                technologies: ["Java", "REST APIs", "VOIP", "Spring"]
            },
            {
                title: "SOFTWARE DEVELOPER",
                company: "MUST IT SERVICES PVT LTD",
                duration: "Aug 2017 - July 2018",
                location: "Noida",
                icon: "fas fa-shopping-cart",
                description: "Full-stack development for 1800Flowers e-commerce platform.",
                achievements: [
                    "Built REST APIs using Spring & Hibernate",
                    "Developed back-end database services in Java",
                    "Implemented front-end UI to support future changes",
                    "Fixed critical project bugs under tight deadlines"
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

    // Achievements Section
    achievements: {
        sectionLabel: "Recognition & Accomplishments",
        sectionTitle: "Achievements & Certificates",
        autoPlay: true, // Enable/disable auto-play
        autoPlayDelay: 5000, // Delay in milliseconds
        certificates: [
            {
                title: "Gold Award for Leading Mulesoft Migration",
                issuer: "UKG",
                date: "Feb 2025",
                image: "certs/gold.png", // Replace with actual certificate image path
                credentialId: "",
                verificationUrl: "" // Optional: Add verification URL if available
            },
            {
                title: "Winner - Best Innovation in UKG HRSD - 48 Hours",
                issuer: "UKG",
                date: "July 2023",
                image: "certs/first_48hours.png", // Replace with actual certificate image path
                credentialId: "",
                verificationUrl: ""
            },
            {
                title: "Oracle Certified Professional - Java SE 11 Developer",
                issuer: "Oracle",
                date: "April 2021",
                image: "certs/ocp_java_se_11.png", // Replace with actual certificate image path
                credentialId: "",
                verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3058E39E28370BBFA5E5A30A330B19877F043F846103B1B5577A44D9E0930A1F"
            },
            
            // Add more certificates as needed
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
                    { name: "Java", icon: "fab fa-java", level: 95 },
                    { name: "Spring Boot", icon: "fas fa-rocket", level: 92 },
                    { name: "Microservices", icon: "fas fa-cubes", level: 90 },
                    { name: "Event-Driven Architecture", icon: "fas fa-project-diagram", level: 88 },
                    { name: "CQRS", icon: "fas fa-code-branch", level: 85 },
                    { name: "Axon Framework", icon: "fas fa-cogs", level: 82 },
                    { name: "Hibernate", icon: "fas fa-database", level: 88 },
                    { name: "Circuit Breakers", icon: "fas fa-shield-alt", level: 85 }
                ]
            },
            {
                title: "Cloud & DevOps",
                skills: [
                    { name: "Google Cloud Platform", icon: "fab fa-google", level: 88 },
                    { name: "Docker", icon: "fab fa-docker", level: 85 },
                    { name: "Kubernetes", icon: "fas fa-dharmachakra", level: 82 },
                    { name: "GKE", icon: "fab fa-google", level: 80 },
                    { name: "CI/CD", icon: "fas fa-infinity", level: 85 },
                    { name: "GitHub Actions", icon: "fab fa-github", level: 82 },
                    { name: "Ansible", icon: "fas fa-terminal", level: 75 },
                    { name: "Prometheus", icon: "fas fa-chart-line", level: 78 }
                ]
            },
            {
                title: "Databases & Messaging",
                skills: [
                    { name: "MongoDB", icon: "fas fa-leaf", level: 85 },
                    { name: "SQL", icon: "fas fa-database", level: 88 },
                    { name: "RabbitMQ", icon: "fas fa-envelope", level: 82 },
                    { name: "Oracle Database", icon: "fas fa-database", level: 85 },
                    { name: "MySQL", icon: "fas fa-database", level: 85 },
                    { name: "MongoDB Compass", icon: "fas fa-compass", level: 80 }
                ]
            },
            {
                title: "Frontend & Web Technologies",
                skills: [
                    { name: "TypeScript", icon: "fas fa-code", level: 78 },
                    { name: "Angular", icon: "fab fa-angular", level: 75 },
                    { name: "NgRx", icon: "fas fa-layer-group", level: 72 },
                    { name: "RESTful APIs", icon: "fas fa-exchange-alt", level: 92 },
                    { name: "Auth0", icon: "fas fa-lock", level: 80 },
                    { name: "OAuth2.0", icon: "fas fa-key", level: 82 },
                    { name: "YAML", icon: "fas fa-file-code", level: 80 }
                ]
            },
            {
                title: "Monitoring & Tools",
                skills: [
                    { name: "Grafana", icon: "fas fa-chart-area", level: 85 },
                    { name: "Git", icon: "fab fa-git-alt", level: 90 },
                    { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", level: 88 },
                    { name: "Jira", icon: "fab fa-jira", level: 85 },
                    { name: "VMWare", icon: "fas fa-server", level: 75 },
                    { name: "Tomcat", icon: "fas fa-server", level: 80 }
                ]
            },
            {
                title: "Emerging Technologies",
                skills: [
                    { name: "Generative AI", icon: "fas fa-brain", level: 70 },
                    { name: "Google ADK", icon: "fab fa-google", level: 68 },
                    { name: "Python", icon: "fab fa-python", level: 72 },
                    { name: "High Availability Systems", icon: "fas fa-network-wired", level: 88 },
                    { name: "Distributed Systems", icon: "fas fa-sitemap", level: 85 },
                    { name: "Data Structures", icon: "fas fa-project-diagram", level: 90 }
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
            { text: "Skills", href: "#skills" },
            { text: "Achievements", href: "#achievements" },
            { text: "Projects", href: "#projects" },
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