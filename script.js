// Explora Code - JavaScript File

// Utility Functions
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    const links = $$('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = $(href);
                
                if (target) {
                    const headerHeight = 72; // Header height
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = $('#header');
    
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = '';
                header.style.backdropFilter = '';
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// Animate elements on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate course cards
    const courseCards = $$('.course-card');
    courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate differential items
    const differentialItems = $$('.differential-item');
    differentialItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Animate contact cards
    const contactCards = $$('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Enhanced hover effects for cards
function initEnhancedHoverEffects() {
    // Course cards hover effect
    const courseCards = $$('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 50px rgba(124, 58, 237, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Contact cards hover effect
    const contactCards = $$('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Differential items hover effect
    const differentialItems = $$('.differential-item');
    differentialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Add shimmer effect to buttons
function initButtonEffects() {
    const buttons = $$('button, .hero-btn-primary, .contact-btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add shimmer effect
            if (!this.querySelector('.shimmer')) {
                const shimmer = document.createElement('div');
                shimmer.className = 'shimmer';
                shimmer.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s ease;
                    pointer-events: none;
                `;
                this.appendChild(shimmer);
                
                // Animate shimmer
                setTimeout(() => {
                    shimmer.style.left = '100%';
                }, 10);
                
                // Remove shimmer after animation
                setTimeout(() => {
                    if (shimmer.parentNode) {
                        shimmer.parentNode.removeChild(shimmer);
                    }
                }, 500);
            }
        });
    });
}

// Parallax effect for floating elements
function initParallaxEffect() {
    const floatingElements = $$('.code-symbol, .hero-code-symbol');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Dynamic background effects
function initDynamicBackground() {
    // Add moving particles (CSS only, no performance impact)
    const heroSection = $('.hero-section');
    if (heroSection) {
        // Create subtle particle effect with CSS
        const style = document.createElement('style');
        style.textContent = `
            .hero-section::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: 
                    radial-gradient(2px 2px at 20px 30px, rgba(124, 58, 237, 0.3), transparent),
                    radial-gradient(2px 2px at 40px 70px, rgba(139, 92, 246, 0.2), transparent),
                    radial-gradient(1px 1px at 90px 40px, rgba(124, 58, 237, 0.4), transparent),
                    radial-gradient(1px 1px at 130px 80px, rgba(139, 92, 246, 0.3), transparent),
                    radial-gradient(2px 2px at 160px 30px, rgba(124, 58, 237, 0.2), transparent);
                background-repeat: repeat;
                background-size: 200px 100px;
                animation: sparkle 20s linear infinite;
                pointer-events: none;
                opacity: 0.6;
            }
            
            @keyframes sparkle {
                from { transform: translateY(0px); }
                to { transform: translateY(-100px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Responsive navigation for mobile
function initMobileNavigation() {
    // Mobile menu toggle (if needed in future)
    const header = $('.main-header');
    if (header && window.innerWidth <= 768) {
        // Add mobile menu functionality here if needed
        console.log('Mobile navigation initialized');
    }
}

// Form validations and interactions
function initFormInteractions() {
    // Contact form handling (if forms are added later)
    const contactButtons = $$('.contact-btn-primary, .contact-btn-secondary');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Course card interactions
function initCourseInteractions() {
    const courseBtns = $$('.course-btn');
    
    courseBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show course details (placeholder)
            const courseTitle = this.closest('.course-content').querySelector('.course-title').textContent;
            alert(`Interesse no curso: ${courseTitle}\n\nEntre em contato conosco para mais informações!\n\nWhatsApp: +55 (49) 98896-0558\nEmail: explorarcode@gmail.com`);
        });
    });
}

// Keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key to close any modals (if added later)
        if (e.key === 'Escape') {
            // Close modals functionality
        }
        
        // Tab navigation enhancements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Add class to body when fully loaded
        document.body.classList.add('loaded');
    });
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', function(e) {
        console.warn('JavaScript error caught:', e.error);
        // Could send error reports here
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Explora Code website initialized');
    
    // Initialize all features
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initEnhancedHoverEffects();
    initButtonEffects();
    initParallaxEffect();
    initDynamicBackground();
    initMobileNavigation();
    initFormInteractions();
    initCourseInteractions();
    initKeyboardNavigation();
    initPerformanceMonitoring();
    initErrorHandling();
    
    // Add loaded class to body for CSS animations
    setTimeout(() => {
        document.body.classList.add('animations-ready');
    }, 100);
});

// Utility functions for future use
const ExploraCode = {
    // Smooth scroll to element
    scrollTo: function(elementId) {
        const element = $(elementId);
        if (element) {
            const headerHeight = 72;
            const targetPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    },
    
    // Show notification (placeholder for future)
    showNotification: function(message, type = 'info') {
        console.log(`${type.toUpperCase()}: ${message}`);
        // Could implement toast notifications here
    },
    
    // Contact methods
    openWhatsApp: function() {
        window.open('https://wa.me/5549988960558', '_blank');
    },
    
    openEmail: function() {
        window.location.href = 'mailto:contato@exploracode.com';
    },
    
    // Analytics placeholder
    trackEvent: function(event, data) {
        console.log('Event tracked:', event, data);
        // Could integrate with Google Analytics or other tools
    }
};

// Make utilities available globally
window.ExploraCode = ExploraCode;

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

// Console welcome message
console.log('%c🎓 Explora Code', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cTransformando vidas através da programação!', 'color: #a855f7; font-size: 14px;');
console.log('%cContato: https://wa.me/5549988960558', 'color: #22c55e; font-size: 12px;');