// Portfolio Builder - Dynamically builds the portfolio from configuration
class PortfolioBuilder {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.build());
        } else {
            this.build();
        }
    }

    build() {
        this.updateMeta();
        this.updateNavigation();
        this.updateHero();
        this.updateAbout();
        this.updateExperience();
        this.updateEducation();
        this.updateProjects();
        this.updateSkills();
        this.updateContact();
        this.updateFooter();
        this.updateSocialLinks();
        this.applyTheme();
    }

    updateMeta() {
        // Update page title and meta tags
        document.title = this.config.seo.title;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.config.seo.description;
        }

        // Add meta keywords if not exists
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = this.config.seo.keywords;
    }

    updateNavigation() {
        // Update logo
        const logoElement = document.querySelector('.logo-icon span');
        if (logoElement) {
            if (this.config.navigation.logo.type === 'initials') {
                logoElement.textContent = this.config.navigation.logo.initials;
            } else if (this.config.navigation.logo.type === 'text') {
                logoElement.textContent = this.config.navigation.logo.text;
            }
        }

        // Update navigation links
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            const navLinksHtml = this.config.navigation.links.map((link, index) => 
                `<a href="${link.href}" class="nav-link${index === 0 ? ' active' : ''}">${link.text}</a>`
            ).join('');
            
            // Preserve theme toggle button
            const themeToggle = navMenu.querySelector('.theme-toggle');
            navMenu.innerHTML = navLinksHtml;
            if (themeToggle && this.config.theme.allowThemeToggle) {
                navMenu.appendChild(themeToggle);
            }
        }
    }

    updateHero() {
        // Update hero content
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.innerHTML = `
                <span class="title-greeting">${this.config.hero.greeting}</span>
                <span class="title-name">${this.config.personal.name}</span>
                <span class="title-role">${this.config.hero.subtitle} <span class="gradient-text">${this.config.hero.highlightedWord}</span></span>
            `;
        }

        // Update hero description
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) {
            heroDesc.textContent = this.config.hero.description;
        }

        // Update availability badge
        const heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) {
            if (this.config.hero.availability.show) {
                heroBadge.innerHTML = `
                    <span class="badge-dot"></span>
                    <span>${this.config.hero.availability.text}</span>
                `;
            } else {
                heroBadge.style.display = 'none';
            }
        }

        // Update hero stats
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            heroStats.innerHTML = this.config.hero.stats.map(stat => `
                <div class="stat">
                    <span class="stat-value">${stat.value}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `).join('');
        }

        // Update hero buttons
        const heroActions = document.querySelector('.hero-actions');
        if (heroActions) {
            heroActions.innerHTML = this.config.hero.buttons.map(btn => `
                <a href="${btn.href}" class="btn ${btn.primary ? 'btn-primary' : 'btn-secondary'}">
                    <span>${btn.text}</span>
                    ${btn.icon ? `<i class="${btn.icon}"></i>` : ''}
                </a>
            `).join('');
        }

        // Update floating icons
        const floatingElements = document.querySelector('.floating-elements');
        if (floatingElements) {
            floatingElements.innerHTML = this.config.hero.floatingIcons.map(icon => `
                <div class="floating-icon ${icon.position}">
                    <i class="${icon.icon}"></i>
                </div>
            `).join('');
        }

        // Update hero avatar
        const heroImage = document.querySelector('.hero-image .image-placeholder');
        if (heroImage) {
            if (this.config.personal.avatar.type === 'icon') {
                heroImage.innerHTML = `<i class="${this.config.personal.avatar.icon}"></i>`;
            } else if (this.config.personal.avatar.type === 'initials') {
                heroImage.innerHTML = `<span style="font-size: 4rem; font-weight: 700;">${this.config.personal.avatar.initials}</span>`;
            } else if (this.config.personal.avatar.type === 'image' && this.config.personal.avatar.image) {
                heroImage.style.background = 'var(--bg-card)';
                heroImage.innerHTML = `<img src="${this.config.personal.avatar.image}" alt="${this.config.personal.name}">`;
            }
        }
    }

    updateAbout() {
        // Update section labels and titles
        const aboutLabel = document.querySelector('#about .section-label');
        if (aboutLabel) aboutLabel.textContent = this.config.about.sectionLabel;
        
        const aboutTitle = document.querySelector('#about .section-title');
        if (aboutTitle) aboutTitle.textContent = this.config.about.sectionTitle;

        // Update subtitle
        const aboutSubtitle = document.querySelector('.about-subtitle');
        if (aboutSubtitle) {
            aboutSubtitle.textContent = this.config.about.subtitle;
        }

        // Update paragraphs
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            const paragraphsHtml = this.config.about.paragraphs.map(p => 
                `<p class="about-text">${p}</p>`
            ).join('');
            
            // Find where to insert paragraphs
            const existingParagraphs = aboutContent.querySelectorAll('.about-text');
            existingParagraphs.forEach(p => p.remove());
            
            const highlightsDiv = aboutContent.querySelector('.about-highlights');
            if (highlightsDiv) {
                highlightsDiv.insertAdjacentHTML('beforebegin', paragraphsHtml);
            }
        }

        // Update highlights
        const aboutHighlights = document.querySelector('.about-highlights');
        if (aboutHighlights) {
            aboutHighlights.innerHTML = this.config.about.highlights.map(highlight => `
                <div class="highlight-item">
                    <i class="${highlight.icon}"></i>
                    <span>${highlight.text}</span>
                </div>
            `).join('');
        }

        // Update about image
        const aboutImagePlaceholder = document.querySelector('.about-image .image-placeholder');
        if (aboutImagePlaceholder) {
            if (this.config.personal.avatar.type === 'icon') {
                aboutImagePlaceholder.innerHTML = `<i class="${this.config.personal.avatar.icon}"></i>`;
            } else if (this.config.personal.avatar.type === 'initials') {
                aboutImagePlaceholder.innerHTML = `<span style="font-size: 3rem; font-weight: 700;">${this.config.personal.avatar.initials}</span>`;
            } else if (this.config.personal.avatar.type === 'image' && this.config.personal.avatar.image) {
                aboutImagePlaceholder.style.background = 'var(--bg-card)';
                aboutImagePlaceholder.innerHTML = `<img src="${this.config.personal.avatar.image}" alt="${this.config.personal.name}">`;
            }
        }
    }

    updateExperience() {
        // Update section labels and titles
        const expLabel = document.querySelector('#experience .section-label');
        if (expLabel) expLabel.textContent = this.config.experience.sectionLabel;
        
        const expTitle = document.querySelector('#experience .section-title');
        if (expTitle) expTitle.textContent = this.config.experience.sectionTitle;

        // Update timeline
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            timeline.innerHTML = this.config.experience.timeline.map(job => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h3>${job.title}</h3>
                            <span class="company">${job.company}</span>
                            <span class="duration">${job.duration}</span>
                        </div>
                        <p class="role-description">${job.description}</p>
                        <div class="achievements">
                            ${job.achievements.map(achievement => 
                                `<div class="achievement">${achievement}</div>`
                            ).join('')}
                        </div>
                        <div class="tech-tags">
                            ${job.technologies.map(tech => 
                                `<span class="tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateEducation() {
        // Check if education section exists in config
        if (!this.config.education) return;
        
        // Update section labels and titles
        const eduLabel = document.querySelector('#education .section-label');
        if (eduLabel) eduLabel.textContent = this.config.education.sectionLabel;
        
        const eduTitle = document.querySelector('#education .section-title');
        if (eduTitle) eduTitle.textContent = this.config.education.sectionTitle;

        // Update education timeline
        const educationTimeline = document.querySelector('.education-timeline');
        if (educationTimeline) {
            educationTimeline.innerHTML = this.config.education.timeline.map(edu => `
                <div class="education-item">
                    <div class="education-icon">
                        <i class="${edu.icon}"></i>
                    </div>
                    <div class="education-content">
                        <div class="education-header">
                            <h3 class="education-degree">${edu.degree}</h3>
                            <span class="education-institution">${edu.institution}</span>
                            <div class="education-meta">
                                <span class="education-duration">
                                    <i class="fas fa-calendar-alt"></i>
                                    ${edu.duration}
                                </span>
                                <span class="education-location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${edu.location}
                                </span>
                            </div>
                        </div>
                        <p class="education-description">${edu.description}</p>
                        ${edu.achievements && edu.achievements.length > 0 ? `
                            <div class="education-achievements">
                                ${edu.achievements.map(achievement => 
                                    `<div class="achievement-item">
                                        <i class="fas fa-check-circle"></i>
                                        <span>${achievement}</span>
                                    </div>`
                                ).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }
    }

    updateProjects() {
        // Update section labels and titles
        const projLabel = document.querySelector('#projects .section-label');
        if (projLabel) projLabel.textContent = this.config.projects.sectionLabel;
        
        const projTitle = document.querySelector('#projects .section-title');
        if (projTitle) projTitle.textContent = this.config.projects.sectionTitle;

        // Update filters
        const projectsFilter = document.querySelector('.projects-filter');
        if (projectsFilter) {
            projectsFilter.innerHTML = this.config.projects.filters.map((filter, index) => 
                `<button class="filter-btn${index === 0 ? ' active' : ''}" data-filter="${filter.value}">${filter.text}</button>`
            ).join('');
        }

        // Update projects grid
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = this.config.projects.items.map(project => `
                <div class="project-card${project.featured ? ' featured' : ''}" data-category="${project.category}">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="${project.icon}"></i>
                        </div>
                        ${project.featured ? '<div class="project-badge">Featured</div>' : ''}
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">${project.title}</h3>
                            <div class="project-links">
                                ${project.links.live ? `
                                    <a href="${project.links.live}" class="project-link" aria-label="View Live">
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                ` : ''}
                                ${project.links.github ? `
                                    <a href="${project.links.github}" class="project-link" aria-label="View Code">
                                        <i class="fab fa-github"></i>
                                    </a>
                                ` : ''}
                                ${project.links.documentation ? `
                                    <a href="${project.links.documentation}" class="project-link" aria-label="View Documentation">
                                        <i class="fas fa-book"></i>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies.map(tech => 
                                `<span class="tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateSkills() {
        // Update section labels and titles
        const skillsLabel = document.querySelector('#skills .section-label');
        if (skillsLabel) skillsLabel.textContent = this.config.skills.sectionLabel;
        
        const skillsTitle = document.querySelector('#skills .section-title');
        if (skillsTitle) skillsTitle.textContent = this.config.skills.sectionTitle;

        // Update skill categories
        const skillsCategories = document.querySelector('.skills-categories');
        if (skillsCategories) {
            skillsCategories.innerHTML = this.config.skills.categories.map(category => `
                <div class="skill-category">
                    <h3 class="category-title">${category.title}</h3>
                    <div class="skills-grid">
                        ${category.skills.map(skill => `
                            <div class="skill-item">
                                <div class="skill-icon">
                                    <i class="${skill.icon}"></i>
                                </div>
                                <span class="skill-name">${skill.name}</span>
                                <div class="skill-level">
                                    <div class="skill-bar" data-level="${skill.level}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // Update certifications
        const certGrid = document.querySelector('.cert-grid');
        if (certGrid) {
            certGrid.innerHTML = this.config.skills.certifications.map(cert => `
                <div class="cert-item">
                    <i class="${cert.icon}"></i>
                    <span>${cert.name}</span>
                </div>
            `).join('');
        }
        
        // Trigger skill bar animations after content is loaded
        if (typeof portfolio !== 'undefined' && portfolio.setupSkillBars) {
            setTimeout(() => {
                portfolio.setupSkillBars();
            }, 100);
        }
    }

    updateContact() {
        // Update section labels and titles
        const contactLabel = document.querySelector('#contact .section-label');
        if (contactLabel) contactLabel.textContent = this.config.contact.sectionLabel;
        
        const contactTitle = document.querySelector('#contact .section-title');
        if (contactTitle) contactTitle.textContent = this.config.contact.sectionTitle;

        // Update contact info
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            const h3 = contactInfo.querySelector('h3');
            if (h3) h3.textContent = this.config.contact.heading;
            
            const p = contactInfo.querySelector('p');
            if (p) p.textContent = this.config.contact.description;
        }

        // Update contact details
        const emailElement = document.getElementById('contact-email');
        if (emailElement) emailElement.textContent = this.config.personal.email;

        const contactDetails = document.querySelector('.contact-details');
        if (contactDetails) {
            contactDetails.innerHTML = `
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${this.config.personal.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${this.config.personal.phone}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${this.config.personal.location}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <span>${this.config.contact.responseTime}</span>
                </div>
            `;
        }

        // Update submit button
        const submitBtn = document.querySelector('.contact-form button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = `
                <span class="btn-text">${this.config.contact.submitButton.text}</span>
                <i class="${this.config.contact.submitButton.icon}"></i>
            `;
        }
    }

    updateFooter() {
        const footerContent = document.querySelector('.footer-content');
        if (footerContent) {
            footerContent.innerHTML = `
                <p>${this.config.footer.copyright}</p>
                <p>${this.config.footer.tagline}</p>
            `;
        }
    }

    updateSocialLinks() {
        const socialLinksContainers = document.querySelectorAll('.social-links');
        socialLinksContainers.forEach(container => {
            container.innerHTML = '';
            
            if (this.config.social.linkedin) {
                container.innerHTML += `
                    <a href="${this.config.social.linkedin}" class="social-link" aria-label="LinkedIn" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                `;
            }
            
            if (this.config.social.github) {
                container.innerHTML += `
                    <a href="${this.config.social.github}" class="social-link" aria-label="GitHub" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                `;
            }
            
            if (this.config.social.twitter) {
                container.innerHTML += `
                    <a href="${this.config.social.twitter}" class="social-link" aria-label="Twitter" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                `;
            }
            
            if (this.config.social.dribbble) {
                container.innerHTML += `
                    <a href="${this.config.social.dribbble}" class="social-link" aria-label="Dribbble" target="_blank">
                        <i class="fab fa-dribbble"></i>
                    </a>
                `;
            }
        });
    }

    applyTheme() {
        // Set default theme
        if (this.config.theme.defaultTheme) {
            document.documentElement.setAttribute('data-theme', this.config.theme.defaultTheme);
        }

        // Apply custom colors if provided
        if (this.config.theme.colors) {
            const root = document.documentElement;
            if (this.config.theme.colors.accentPrimary) {
                root.style.setProperty('--accent-primary', this.config.theme.colors.accentPrimary);
            }
            if (this.config.theme.colors.accentSecondary) {
                root.style.setProperty('--accent-secondary', this.config.theme.colors.accentSecondary);
            }
        }

        // Hide theme toggle if not allowed
        if (!this.config.theme.allowThemeToggle) {
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) themeToggle.style.display = 'none';
        }
    }
}

// Initialize the portfolio builder with configuration
if (typeof PORTFOLIO_CONFIG !== 'undefined') {
    const portfolioBuilder = new PortfolioBuilder(PORTFOLIO_CONFIG);
} else {
    console.error('Portfolio configuration not found. Please include portfolio-config.js before portfolio-builder.js');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioBuilder;
}