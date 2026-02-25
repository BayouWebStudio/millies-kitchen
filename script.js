// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 58, 138, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1e3a8a, #0ea5e9)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
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

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Menu item hover effects with wave animation
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'all 0.3s ease';
        this.style.background = 'linear-gradient(135deg, rgba(103, 232, 249, 0.1), rgba(14, 165, 233, 0.1))';
        this.style.borderRadius = '10px';
        this.style.padding = '15px';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.background = 'transparent';
        this.style.padding = '0';
    });
});

// Review cards stagger animation
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    
    // Add ocean-themed hover effect
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
        this.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});

// Contact info cards with coastal theme
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #f0f9ff, #e0f2fe)';
        this.style.transition = 'all 0.3s ease';
        this.style.borderTop = '3px solid #0ea5e9';
    });

    item.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.borderTop = '3px solid #67e8f9';
    });
});

// Hours highlight current day with special events
function highlightCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    const hoursItems = document.querySelectorAll('.hours-item');
    
    hoursItems.forEach((item, index) => {
        if (index === currentDay) {
            item.style.background = 'linear-gradient(135deg, #f0f9ff, #e0f2fe)';
            item.style.fontWeight = 'bold';
            item.style.borderRadius = '10px';
            item.style.padding = '1rem';
            item.style.border = '2px solid #67e8f9';
        }
    });
    
    // Highlight special events based on day
    const events = document.querySelectorAll('.event');
    events.forEach((event, index) => {
        if ((currentDay === 3 && index === 0) || // Wine Wednesday
            (currentDay === 4 && index === 1) ||  // Steak Thursday
            (currentDay === 5 && index === 2)) {   // Fish Friday
            event.style.background = 'linear-gradient(135deg, #67e8f9, #0ea5e9)';
            event.style.color = 'white';
            event.style.fontWeight = 'bold';
            event.style.transform = 'scale(1.05)';
        }
    });
}

// Call function when page loads
window.addEventListener('load', highlightCurrentDay);

// Add loading animation with wave effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero waves
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroWaves = document.querySelector('.hero-waves');
    
    if (heroWaves) {
        heroWaves.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add splash effect to CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    const splash = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    splash.style.width = splash.style.height = size + 'px';
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';
    splash.classList.add('splash');
    
    this.appendChild(splash);
    
    setTimeout(() => {
        splash.remove();
    }, 600);
});

// Menu categories with wave entrance
document.querySelectorAll('.menu-category').forEach((category, index) => {
    category.style.animationDelay = `${index * 0.3}s`;
    
    // Add floating animation
    category.addEventListener('mouseenter', function() {
        this.style.animation = 'float 2s ease-in-out infinite';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Simulate tide effect on scroll
window.addEventListener('scroll', () => {
    const scrollPercent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.background = `linear-gradient(135deg, 
            hsl(${200 + scrollPercent * 0.5}, 85%, ${55 + scrollPercent * 0.1}%), 
            hsl(${220 + scrollPercent * 0.3}, 75%, ${35 + scrollPercent * 0.1}%), 
            hsl(${180 + scrollPercent * 0.4}, 65%, ${35 + scrollPercent * 0.1}%))`;
    }
});

// Add CSS for splash effect and floating animation
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .splash {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        animation: splash-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes splash-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .menu-category:hover {
        box-shadow: 0 8px 25px rgba(14, 165, 233, 0.2);
    }
    
    .review-card {
        transform-style: preserve-3d;
        perspective: 1000px;
    }
`;
document.head.appendChild(style);

// Special event notifications
function checkSpecialEvents() {
    const today = new Date().getDay();
    const eventNotification = document.createElement('div');
    eventNotification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #67e8f9, #0ea5e9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 600;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    let eventText = '';
    if (today === 3) eventText = '🍷 Wine Wednesday Special Today!';
    else if (today === 4) eventText = '🥩 Steak Thursday Tonight!';
    else if (today === 5) eventText = '🐟 Fish Friday Menu Available!';
    
    if (eventText) {
        eventNotification.textContent = eventText;
        document.body.appendChild(eventNotification);
        
        setTimeout(() => {
            eventNotification.style.opacity = '1';
            eventNotification.style.transform = 'translateX(0)';
        }, 1000);
        
        setTimeout(() => {
            eventNotification.style.opacity = '0';
            eventNotification.style.transform = 'translateX(100%)';
            setTimeout(() => eventNotification.remove(), 300);
        }, 6000);
    }
}

// Call special events check
setTimeout(checkSpecialEvents, 2000);