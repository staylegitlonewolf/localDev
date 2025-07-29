// Modern JavaScript for LVA.studio™

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Service Details Data
const serviceDetails = {
    web: {
        title: "Web Development",
        icon: "fas fa-code",
        description: "Custom websites that convert visitors into customers. Built with modern technologies and optimized for performance.",
        features: [
            "Custom Design & Development",
            "SEO Optimization",
            "Mobile-First Responsive Design",
            "E-commerce Solutions",
            "Content Management Systems",
            "Performance Optimization",
            "Security Implementation",
            "Ongoing Support & Maintenance"
        ],
        packages: [
            {
                name: "Basic Website",
                price: "$1,500",
                features: ["Custom Design", "Mobile Responsive", "SEO Setup", "Contact Forms", "1 Month Support"]
            },
            {
                name: "Professional Website",
                price: "$2,500",
                features: ["Everything in Basic", "E-commerce Integration", "Blog Setup", "Analytics Integration", "3 Months Support"]
            },
            {
                name: "Enterprise Solution",
                price: "$5,000+",
                features: ["Custom Functionality", "Advanced Integrations", "Multi-language Support", "Priority Support", "Training Included"]
            }
        ],
        process: [
            "Discovery & Planning",
            "Design & Prototyping",
            "Development & Testing",
            "Launch & Optimization",
            "Ongoing Support"
        ]
    },
    solar: {
        title: "Solar Solutions",
        icon: "fas fa-solar-panel",
        description: "Connect with trusted solar providers to reduce energy costs and contribute to a sustainable future.",
        features: [
            "Residential & Commercial Installations",
            "Expert Consultation & Site Assessment",
            "Installation Support & Coordination",
            "Financing Options & Incentives",
            "Maintenance & Monitoring",
            "Warranty Support",
            "Energy Savings Analysis",
            "Environmental Impact Assessment"
        ],
        benefits: [
            "Reduce Energy Bills by 70-90%",
            "Increase Property Value",
            "Federal & State Tax Credits",
            "Environmental Sustainability",
            "Energy Independence",
            "Low Maintenance Requirements"
        ],
        process: [
            "Free Consultation",
            "Site Assessment",
            "Custom Proposal",
            "Installation Planning",
            "Professional Installation",
            "System Activation"
        ]
    },
    health: {
        title: "Health Insurance",
        icon: "fas fa-shield-alt",
        description: "Comprehensive health insurance solutions for individuals, families, and businesses with competitive pricing.",
        features: [
            "Individual & Family Plans",
            "Business Group Coverage",
            "Medicare Supplements",
            "Dental & Vision Plans",
            "Prescription Drug Coverage",
            "Mental Health Services",
            "Preventive Care",
            "Emergency Coverage"
        ],
        plans: [
            {
                name: "Basic Coverage Plans",
                price: "Starting at just $120/month",
                description: "Ideal for individuals looking for essential health benefits on a budget.",
                features: ["Preventive Care", "Prescription Drugs", "Mental Health", "Emergency Services"]
            },
            {
                name: "Family Health Plans",
                price: "As low as $300/month",
                description: "Affordable protection for your entire household, including pediatric care.",
                features: ["Family Coverage", "Maternity Care", "Pediatric Services", "Dental & Vision"]
            },
            {
                name: "Self-Employed Packages",
                price: "From only $225/month",
                description: "Flexible, comprehensive options tailored to freelancers and small business owners.",
                features: ["Flexible Coverage", "Tax Advantages", "Business Benefits", "Administrative Support"]
            }
        ],
        benefits: [
            "Expert Guidance",
            "Plan Comparison",
            "Enrollment Support",
            "Ongoing Assistance",
            "Claims Support",
            "Annual Reviews"
        ],
        states: [
            "AL", "AR", "CO", "DE", "FL", "GA", "IA", "IL", "IN", "KS", 
            "KY", "LA", "MD", "MI", "MO", "MS", "MT", "NC", "NE", "NV", 
            "NH", "OH", "OK", "OR", "SC", "SD", "TN", "TX", "UT", "VA", 
            "WA", "WI", "WV", "WY"
        ]
    },
    nil: {
        title: "NIL Partnerships",
        icon: "fas fa-star",
        description: "Maximize your Name, Image, and Likeness opportunities with strategic partnerships and brand development.",
        features: [
            "Brand Development & Strategy",
            "Sponsorship Deal Negotiation",
            "Marketing & Promotion",
            "Legal Guidance & Compliance",
            "Social Media Management",
            "Content Creation",
            "Partnership Development",
            "Revenue Optimization"
        ],
        services: [
            {
                name: "Brand Development",
                description: "Build your personal brand",
                features: ["Brand Strategy", "Visual Identity", "Social Media Presence", "Content Planning"]
            },
            {
                name: "Sponsorship Deals",
                description: "Secure profitable partnerships",
                features: ["Deal Negotiation", "Contract Review", "Performance Tracking", "Relationship Management"]
            },
            {
                name: "Legal Support",
                description: "Protect your interests",
                features: ["Contract Review", "Compliance Guidance", "Rights Protection", "Dispute Resolution"]
            }
        ],
        benefits: [
            "Maximize Earnings",
            "Professional Representation",
            "Legal Protection",
            "Brand Growth",
            "Long-term Success",
            "Industry Connections"
        ]
    }
};

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const themeToggle = document.getElementById('themeToggle');
const loadingSpinner = document.getElementById('loadingSpinner');

// Theme Toggle Functionality
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Initialize theme toggle icon
function initializeThemeToggle() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Theme toggle event listener
themeToggle.addEventListener('click', toggleTheme);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(42, 42, 42, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(42, 42, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show Service Details Modal
function showServiceDetails(service) {
    const serviceData = serviceDetails[service];
    if (!serviceData) return;

    const modalHTML = `
        <div class="service-modal">
            <div class="service-modal-header">
                <div class="service-modal-icon">
                    <i class="${serviceData.icon}"></i>
                </div>
                <h2>${serviceData.title}</h2>
                <p>${serviceData.description}</p>
            </div>
            
            <div class="service-modal-content">
                <div class="service-section">
                    <h3>Key Features</h3>
                    <ul class="feature-list">
                        ${serviceData.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${serviceData.packages ? `
                <div class="service-section">
                    <h3>Packages & Pricing</h3>
                    <div class="package-grid">
                        ${serviceData.packages.map(pkg => `
                            <div class="package-card">
                                <h4>${pkg.name}</h4>
                                <div class="package-price">${pkg.price}</div>
                                <ul>
                                    ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${serviceData.plans ? `
                <div class="service-section">
                    <h3>Available Plans</h3>
                    <div class="plan-grid">
                        ${serviceData.plans.map(plan => `
                            <div class="plan-card">
                                <h4>${plan.name}</h4>
                                <div class="package-price">${plan.price}</div>
                                <p>${plan.description}</p>
                                <ul>
                                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${serviceData.services ? `
                <div class="service-section">
                    <h3>Our Services</h3>
                    <div class="service-grid-modal">
                        ${serviceData.services.map(service => `
                            <div class="service-item">
                                <h4>${service.name}</h4>
                                <p>${service.description}</p>
                                <ul>
                                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${serviceData.benefits ? `
                <div class="service-section">
                    <h3>Benefits</h3>
                    <div class="benefits-grid">
                        ${serviceData.benefits.map(benefit => `
                            <div class="benefit-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${benefit}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${serviceData.states ? `
                <div class="service-section">
                    <h3>States We Serve</h3>
                    <div class="states-grid">
                        <p>We proudly serve residents in:</p>
                        <div class="states-list">
                            ${serviceData.states.map(state => `<span class="state-badge">${state}</span>`).join('')}
                        </div>
                    </div>
                </div>
                ` : ''}
                
                ${serviceData.process ? `
                <div class="service-section">
                    <h3>Our Process</h3>
                    <div class="process-timeline">
                        ${serviceData.process.map((step, index) => `
                            <div class="process-step">
                                <div class="process-number">${index + 1}</div>
                                <div class="process-content">
                                    <h4>${step}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            
            <div class="service-modal-footer">
                <button class="btn btn-primary" onclick="contactUs('${service}')">Get Started</button>
                <button class="btn btn-secondary" onclick="closeServiceModal()">Close</button>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Service Modal
function closeServiceModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Us function
function contactUs(service) {
    closeServiceModal();
    // Open email client with service information
    const emailSubject = `LVA.studio - ${service} Service Inquiry`;
    const emailBody = `Hello LVA.studio™,

I'm interested in your ${service} services. Please provide more information about:

- Available options and pricing
- Next steps to get started
- Any requirements or questions I should consider

Thank you!

---
This inquiry was sent from the LVA.studio website.`;
    
    const mailtoLink = `mailto:staylegitdev@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
}

// Modal event listeners
closeModal.addEventListener('click', closeServiceModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .about-content, .stat');
    animateElements.forEach(el => observer.observe(el));
    
    // Initialize theme toggle
    initializeThemeToggle();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('LVA.studio™ - Modern website loaded successfully!');
    
    // Add any additional initialization here
    document.body.classList.add('loaded');
});

// Export functions for global access
window.showServiceDetails = showServiceDetails;
window.closeServiceModal = closeServiceModal;
window.contactUs = contactUs;