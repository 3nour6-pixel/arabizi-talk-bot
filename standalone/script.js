// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Button click handlers (placeholder - يمكنك إضافة الوظائف الحقيقية هنا)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم توجيهك لصفحة الحجز قريباً!');
    });
});

document.querySelectorAll('.btn-login').forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم توجيهك لصفحة تسجيل الدخول قريباً!');
    });
});

document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = featuresSection.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe pricing card
const pricingCard = document.querySelector('.pricing-card');
if (pricingCard) {
    pricingCard.style.opacity = '0';
    pricingCard.style.transform = 'translateY(20px)';
    pricingCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(pricingCard);
}

console.log('VIP Mail - موقع جاهز للعمل! ✨');