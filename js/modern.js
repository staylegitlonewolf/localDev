// Modern JavaScript for LVA.studio™

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
        description: "Comprehensive health insurance solutions for individuals, families, and businesses.",
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
                name: "Individual Plans",
                description: "Comprehensive coverage for individuals",
                features: ["Preventive Care", "Prescription Drugs", "Mental Health", "Emergency Services"]
            },
            {
                name: "Family Plans",
                description: "Protect your entire family",
                features: ["Family Coverage", "Maternity Care", "Pediatric Services", "Dental & Vision"]
            },
            {
                name: "Business Plans",
                description: "Group coverage for your business",
                features: ["Employee Benefits", "Tax Advantages", "Customizable Plans", "Administrative Support"]
            }
        ],
        benefits: [
            "Expert Guidance",
            "Plan Comparison",
            "Enrollment Support",
            "Ongoing Assistance",
            "Claims Support",
            "Annual Reviews"
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
const contactForm = document.getElementById('contactForm');
const loadingSpinner = document.getElementById('loadingSpinner');

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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
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
    document.getElementById('service').value = service;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Modal event listeners
closeModal.addEventListener('click', closeServiceModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Contact Form Handling
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading spinner
    loadingSpinner.classList.add('show');
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        loadingSpinner.classList.remove('show');
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
    const animateElements = document.querySelectorAll('.service-card, .about-content, .contact-content, .stat');
    animateElements.forEach(el => observer.observe(el));
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