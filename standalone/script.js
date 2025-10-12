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
        window.location.href = 'payment.html';
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

// Payment page functionality
function resetPaymentForm() {
    const paymentMethods = document.querySelector('.payment-methods');
    const paypalForm = document.getElementById('paypal-form');
    const instapayForm = document.getElementById('instapay-form');
    const paymentDescription = document.querySelector('.payment-description');
    
    if (paymentMethods) paymentMethods.style.display = 'grid';
    if (paypalForm) paypalForm.style.display = 'none';
    if (instapayForm) instapayForm.style.display = 'none';
    if (paymentDescription) paymentDescription.style.display = 'block';
    
    // Reset forms
    const paypalBookingForm = document.getElementById('paypal-booking-form');
    const instapayBookingForm = document.getElementById('instapay-booking-form');
    const paypalFileName = document.getElementById('paypal-file-name');
    const instapayFileName = document.getElementById('instapay-file-name');
    
    if (paypalBookingForm) paypalBookingForm.reset();
    if (instapayBookingForm) instapayBookingForm.reset();
    if (paypalFileName) paypalFileName.textContent = 'لم يتم اختيار ملف';
    if (instapayFileName) instapayFileName.textContent = 'لم يتم اختيار ملف';
}

// Payment method selection
const paypalCard = document.getElementById('paypal-card');
const instapayCard = document.getElementById('instapay-card');
const paypalForm = document.getElementById('paypal-form');
const instapayForm = document.getElementById('instapay-form');
const paymentMethods = document.querySelector('.payment-methods');
const successMessage = document.getElementById('success-message');

if (paypalCard) {
    paypalCard.addEventListener('click', () => {
        paymentMethods.style.display = 'none';
        paypalForm.style.display = 'block';
        document.querySelector('.payment-description').style.display = 'none';
    });
}

if (instapayCard) {
    instapayCard.addEventListener('click', () => {
        paymentMethods.style.display = 'none';
        instapayForm.style.display = 'block';
        document.querySelector('.payment-description').style.display = 'none';
    });
}

// File upload handling for PayPal
const paypalScreenshot = document.getElementById('paypal-screenshot');
const paypalFileName = document.getElementById('paypal-file-name');

if (paypalScreenshot) {
    paypalScreenshot.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            paypalFileName.textContent = e.target.files[0].name;
        } else {
            paypalFileName.textContent = 'لم يتم اختيار ملف';
        }
    });
}

// File upload handling for InstaPay
const instapayScreenshot = document.getElementById('instapay-screenshot');
const instapayFileName = document.getElementById('instapay-file-name');

if (instapayScreenshot) {
    instapayScreenshot.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            instapayFileName.textContent = e.target.files[0].name;
        } else {
            instapayFileName.textContent = 'لم يتم اختيار ملف';
        }
    });
}

// Form submission for PayPal
const paypalBookingForm = document.getElementById('paypal-booking-form');
if (paypalBookingForm) {
    paypalBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get selected payment type
        const paymentType = document.querySelector('input[name="paypal-type"]:checked').value;
        const amount = paymentType === 'friends' ? '$1.00' : '$1.54';
        
        // Hide form and show success message
        paypalForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        console.log('PayPal payment submitted:', {
            type: paymentType,
            amount: amount,
            email: e.target.querySelector('input[type="email"]').value,
            phone: e.target.querySelector('input[type="tel"]').value
        });
    });
}

// Form submission for InstaPay
const instapayBookingForm = document.getElementById('instapay-booking-form');
if (instapayBookingForm) {
    instapayBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide form and show success message
        instapayForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        console.log('InstaPay payment submitted:', {
            email: e.target.querySelector('input[type="email"]').value,
            phone: e.target.querySelector('input[type="tel"]').value
        });
    });
}

console.log('VIP Mail - موقع جاهز للعمل! ✨');