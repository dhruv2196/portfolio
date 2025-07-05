// Portfolio Website JavaScript
// Modern, interactive functionality with smooth animations

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupThemeToggle();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupTypewriter();
        
        // Delay setup of dynamic content to ensure portfolio-builder has run
        setTimeout(() => {
            this.setupProjectFilters();
            this.setupContactForm();
            this.setupSkillBars();
            this.setupIntersectionObserver();
        }, 100);
    }

    setupEventListeners() {
        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.animateOnLoad();
        });

        // Window events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 250));
        
        // Navigation
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                // Skip if href is just '#' or empty
                if (!href || href === '#') {
                    return;
                }
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    this.smoothScrollTo(target);
                }
            });
        });

        // Resume download
        const downloadBtn = document.getElementById('download-resume');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadResume();
            });
        }
    }

    // Theme Toggle Functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        this.updateThemeIcon(currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                this.updateThemeIcon(newTheme);
                
                // Add transition effect
                document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
            });
        }
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // Navigation Functionality
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Update active nav link on scroll
        const updateActiveNavLink = () => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', this.throttle(updateActiveNavLink, 100));
    }

    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    }

    // Project Filtering
    setupProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active filter button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects with animation
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        card.style.animation = 'fadeOut 0.3s ease-out';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Contact Form Handling
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmission(contactForm);
            });

            // Add floating label effect
            const formInputs = contactForm.querySelectorAll('input, textarea');
            formInputs.forEach(input => {
                input.addEventListener('blur', () => {
                    if (input.value.trim() !== '') {
                        input.classList.add('has-value');
                    } else {
                        input.classList.remove('has-value');
                    }
                });
            });
        }
    }

    async handleContactFormSubmission(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Get form values
        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Check if we're on Netlify (has Netlify functions)
            if (window.location.hostname.includes('netlify')) {
                // Use Netlify Function
                const response = await fetch('/.netlify/functions/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues)
                });

                const result = await response.json();
                
                if (response.ok) {
                    this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                } else {
                    throw new Error(result.error || 'Failed to send email');
                }
            } else {
                // Use client-side EmailJS (for local development)
                let EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, CONTACT_EMAIL;
                
                if (typeof CONFIG !== 'undefined') {
                    EMAILJS_SERVICE_ID = CONFIG.EMAILJS_SERVICE_ID;
                    EMAILJS_TEMPLATE_ID = CONFIG.EMAILJS_TEMPLATE_ID;
                    CONTACT_EMAIL = CONFIG.CONTACT_EMAIL || 'dhruv.singhal96@gmail.com';
                } else {
                    console.warn('Config file not found. Using default values.');
                    EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
                    EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
                    CONTACT_EMAIL = 'dhruv.singhal96@gmail.com';
                }
                
                // Check if EmailJS is loaded and credentials are set
                if (typeof emailjs === 'undefined') {
                    throw new Error('EmailJS is not loaded. Please check your internet connection.');
                }
                
                if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
                    !EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
                    console.warn('EmailJS credentials not configured. Using mailto fallback.');
                    // Fallback to mailto if EmailJS is not configured
                    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formValues.subject)}&body=${encodeURIComponent(`From: ${formValues.name} (${formValues.email})\n\n${formValues.message}`)}`;
                    window.location.href = mailtoLink;
                    this.showNotification('Opening your email client...', 'info');
                } else {
                    // Send email using EmailJS
                    const response = await emailjs.send(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        {
                            from_name: formValues.name,
                            from_email: formValues.email,
                            subject: formValues.subject,
                            message: formValues.message,
                            to_email: CONTACT_EMAIL,
                        }
                    );
                    
                    console.log('EmailJS Response:', response);
                    
                    // Show success message
                    this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                }
            }
            
        } catch (error) {
            // Show error message
            this.showNotification('Failed to send message. Please try again or email directly.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            maxWidth: '400px',
            animation: 'slideInRight 0.3s ease-out'
        });

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);

        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            });
        }
    }

    // Skill Bar Animations
    setupSkillBars() {
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                if (level) {
                    // Force a reflow to ensure the transition works
                    bar.style.width = '0%';
                    bar.offsetHeight; // Trigger reflow
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 50);
                }
            });
        };

        // Animate when skills section comes into view
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(animateSkillBars, 300);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(skillsSection);
        }
        
        // Also check if skills section is already in view
        if (skillsSection && this.isElementInViewport(skillsSection)) {
            setTimeout(animateSkillBars, 300);
        }
    }
    
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Typewriter Effect for Hero Section
    setupTypewriter() {
        // Removed typewriter effect for cleaner design
        // Add smooth entrance animations instead
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Scroll Effects
    setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            }
        });
    }

    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.timeline-item, .education-item, .project-card, .skill-category, .stat-item, .trait-item'
        );
        
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Utility Functions
    handleScroll() {
        // Handle scroll-based animations and effects
        const scrolled = window.pageYOffset;
        
        // Parallax effect for floating icons
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            const speed = 0.1 + (index * 0.05);
            icon.style.transform = `translateY(${-scrolled * speed}px)`;
        });
        
        // Update navbar on scroll
        const navbar = document.getElementById('navbar');
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    handleResize() {
        // Handle responsive adjustments
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }

    smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 70; // Account for fixed navbar
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    downloadResume() {
        // Create a simple resume download simulation
        const resumeContent = this.generateResumeContent();
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'John_Developer_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        this.showNotification('Resume downloaded successfully!', 'success');
    }

    generateResumeContent() {
        return `
JOHN DEVELOPER
Full Stack Developer
Email: john.developer@email.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA

EXPERIENCE
-----------
Senior Full Stack Developer | Tech Solutions Inc. | 2022 - Present
• Leading development of enterprise web applications using React, Node.js, and cloud technologies
• Mentoring junior developers and architecting scalable solutions
• Improved application performance by 40%
• Led team of 5 developers
• Implemented CI/CD pipeline

Full Stack Developer | Digital Innovations | 2020 - 2022
• Developed and maintained multiple client projects using modern web technologies
• Collaborated with design teams to implement pixel-perfect user interfaces
• Delivered 15+ client projects
• Reduced load times by 60%
• Implemented responsive designs

Frontend Developer | StartupXYZ | 2019 - 2020
• Built responsive web applications and mobile-first interfaces
• Worked closely with UX designers to create intuitive user experiences
• Launched 3 major products
• Improved user engagement by 35%
• Optimized for mobile devices

SKILLS
------
Frontend: React, Vue.js, JavaScript, CSS/Sass, HTML5
Backend: Node.js, Python, Express.js
Databases: PostgreSQL, MongoDB, Redis
Tools: Git, Docker, AWS, CI/CD
Other: TypeScript, REST APIs, GraphQL, Agile/Scrum

CERTIFICATIONS
--------------
• AWS Certified Developer
• Google Cloud Professional
• Certified Scrum Master

PROJECTS
--------
• E-Commerce Platform - Full-stack solution with payment integration
• Analytics Dashboard - Real-time data visualization
• Task Management App - Cross-platform mobile application
• RESTful API Service - Scalable backend with comprehensive documentation
        `.trim();
    }

    initializeAnimations() {
        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.8); }
            }
            
            .animate-in {
                animation: fadeIn 0.6s ease-out forwards;
            }
            
            .timeline-item,
            .education-item,
            .project-card,
            .skill-category,
            .stat-item,
            .trait-item {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease-out;
            }
            
            .timeline-item.animate-in,
            .education-item.animate-in,
            .project-card.animate-in,
            .skill-category.animate-in,
            .stat-item.animate-in,
            .trait-item.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    animateOnLoad() {
        // Trigger initial animations
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

// Initialize the portfolio app
const portfolio = new PortfolioApp();

// Additional utility functions for enhanced functionality
class PortfolioUtils {
    static formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static getRandomColor() {
        const colors = ['#7c3aed', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoadTime: 0,
            domContentLoadedTime: 0,
            firstPaintTime: 0
        };
        this.init();
    }

    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.metrics.pageLoadTime = performance.now();
            this.logMetrics();
        });

        document.addEventListener('DOMContentLoaded', () => {
            this.metrics.domContentLoadedTime = performance.now();
        });

        // Monitor First Paint
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === 'first-paint') {
                        this.metrics.firstPaintTime = entry.startTime;
                    }
                }
            });
            observer.observe({ entryTypes: ['paint'] });
        }
    }

    logMetrics() {
        console.log('Portfolio Performance Metrics:', this.metrics);
        
        // Send to analytics (if implemented)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                value: Math.round(this.metrics.pageLoadTime),
                custom_parameter: 'portfolio_site'
            });
        }
    }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} else if (window.location.protocol === 'file:') {
    console.log('Service Worker disabled: Running from file system. Use a local server for full functionality.');
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, PortfolioUtils, PerformanceMonitor };
}