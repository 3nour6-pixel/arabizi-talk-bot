// Payment method selection
const paypalCard = document.getElementById('paypal-card');
const instapayCard = document.getElementById('instapay-card');
const paypalForm = document.getElementById('paypal-form');
const instapayForm = document.getElementById('instapay-form');
const paymentMethods = document.querySelector('.payment-methods');
const successMessage = document.getElementById('success-message');

paypalCard.addEventListener('click', () => {
    paymentMethods.style.display = 'none';
    paypalForm.style.display = 'block';
    document.querySelector('.payment-description').style.display = 'none';
});

instapayCard.addEventListener('click', () => {
    paymentMethods.style.display = 'none';
    instapayForm.style.display = 'block';
    document.querySelector('.payment-description').style.display = 'none';
});

function resetForm() {
    paymentMethods.style.display = 'grid';
    paypalForm.style.display = 'none';
    instapayForm.style.display = 'none';
    document.querySelector('.payment-description').style.display = 'block';
    
    // Reset forms
    document.getElementById('paypal-booking-form').reset();
    document.getElementById('instapay-booking-form').reset();
    document.getElementById('paypal-file-name').textContent = 'لم يتم اختيار ملف';
    document.getElementById('instapay-file-name').textContent = 'لم يتم اختيار ملف';
}

// File upload handling for PayPal
const paypalScreenshot = document.getElementById('paypal-screenshot');
const paypalFileName = document.getElementById('paypal-file-name');

paypalScreenshot.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        paypalFileName.textContent = e.target.files[0].name;
    } else {
        paypalFileName.textContent = 'لم يتم اختيار ملف';
    }
});

// File upload handling for InstaPay
const instapayScreenshot = document.getElementById('instapay-screenshot');
const instapayFileName = document.getElementById('instapay-file-name');

instapayScreenshot.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        instapayFileName.textContent = e.target.files[0].name;
    } else {
        instapayFileName.textContent = 'لم يتم اختيار ملف';
    }
});

// Form submission for PayPal
document.getElementById('paypal-booking-form').addEventListener('submit', (e) => {
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

// Form submission for InstaPay
document.getElementById('instapay-booking-form').addEventListener('submit', (e) => {
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

// Smooth scrolling
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