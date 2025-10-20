// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = this.querySelector('svg');
            if (mobileMenu.classList.contains('active')) {
                icon.innerHTML = '<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>';
            } else {
                icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
            }
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
            });
        });
    }
});

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

// Inbox functionality
if (document.querySelector('.inbox-container')) {
    // Navigation items
    const navItems = document.querySelectorAll('.inbox-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Here you would filter emails based on category
            const category = item.dataset.category;
            console.log('Switched to category:', category);
        });
    });

    // Email star toggle
    const starButtons = document.querySelectorAll('.email-star');
    starButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            button.classList.toggle('starred');
        });
    });

    // Email item click
    const emailItems = document.querySelectorAll('.email-item');
    emailItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.remove('unread');
            // Here you would open the email detail view
            console.log('Email opened');
        });
    });
}

// Language Translation System
const translations = {
    en: {
        // Navbar
        features: "Features",
        pricing: "Pricing",
        about: "About Us",
        login: "Login",
        bookNow: "Book Your Mail Now",
        menu: "Menu",
        
        // Hero Section
        mostSecure: "The Most Secure Email",
        heroTitle: "VIP Mail",
        heroSubtitle: "Email that puts security and privacy first.",
        heroDescription: "Get a premium email like",
        joinElite: "and be part of the digital elite.",
        learnMore: "Learn More",
        
        // Features Section
        exceptionalFeatures: "Exceptional Features",
        featuresSectionDesc: "A comprehensive email service designed specifically for the digital elite",
        advancedProtection: "Advanced Protection",
        advancedProtectionDesc: "Military-grade encryption to protect your messages from any breach or espionage.",
        absolutePrivacy: "Absolute Privacy",
        absolutePrivacyDesc: "Your data belongs to you alone. We don't share your information with any third party.",
        exclusiveVIP: "Exclusive VIP Address",
        exclusiveVIPDesc: "Get a premium email address ending with @vipm.org that reflects your distinction.",
        globalAccess: "Global Access",
        globalAccessDesc: "Use your email from anywhere in the world with complete protection.",
        
        // Pricing Section
        choosePackage: "Choose Your Perfect Package",
        pricingDesc: "Transparent pricing and flexible packages that suit your needs",
        specialOffer: "🔥 Special Offer",
        vipMail: "VIP Mail",
        oneTimeFee: "/One-time fee",
        pricingHighlight: "Your email is permanent for the domain subscription period!",
        dealPoint1: "💸 Only one dollar!",
        dealPoint2: "⏰ Limited offer",
        dealPoint3: "🚀 Instant activation",
        customEmail: "✨ Custom email address @vipm.org",
        lifetimeValid: "🎯 Valid for life (during domain subscription period)",
        fullProtection: "🔒 Complete protection and encryption",
        continuousSupport: "📧 Continuous technical support",
        joinElitePrice: "💎 Join the digital elite at an unbeatable price",
        bookOneDollar: "🎉 Book Now for Just One Dollar!",
        joinThousands: "⚡ Join thousands of users who chose digital distinction",
        
        // Footer
        footerDesc: "Secure and premium email for the digital elite",
        quickLinks: "Quick Links",
        contact: "Contact Us",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        refundPolicy: "Refund Policy",
        followUs: "Follow Us",
        rights: "All rights reserved.",
        
        // Payment Page
        completeBooking: "Complete Your Booking",
        choosePaymentMethod: "Choose your preferred payment method",
        payViaPayPal: "Pay via PayPal",
        payViaInstaPay: "Pay via InstaPay",
        back: "Back",
        friendsFamily: "Friends & Family",
        oneDollarOnly: "Only one dollar",
        goodsServices: "Goods & Services",
        includesPayPalFees: "Includes PayPal fees",
        transferScreenshot: "Transfer Screenshot *",
        chooseImage: "Choose Image",
        noFileChosen: "No file chosen",
        email: "Email *",
        phone: "Phone Number *",
        submitRequest: "Submit Request",
        instaPayAccount: "InstaPay Account:",
        orPhone: "Or Phone Number:",
        instaPayNote: "Transfer in Egyptian Pounds equivalent to 1 dollar at the time of transfer",
        successTitle: "Your request has been successfully submitted!",
        successDesc: "We will contact you via email within 24 hours<br>and send you the link to create your premium email",
        backToHome: "Back to Home",
        
        // About Page
        aboutTitle: "About Us",
        aboutDesc: "We are VIP Mail, an email service designed specifically for the digital elite who put security and privacy above all else. Our vision is to be the secure digital refuge for your professional and personal identity in a fast-paced world.",
        coreValues: "Core Values",
        aboutPrivacy: "Absolute Privacy: We don't sell your data, track your messages, or share your information with any third party. Your data belongs to you alone.",
        aboutSecurity: "Military-Grade Security: We use the highest levels of encryption to protect all your communications from any breach or espionage.",
        aboutDistinction: "Uniqueness and Distinction: Your premium email address (@vipm.org) is a reflection of your sophisticated digital identity.",
        
        // Contact Page
        contactTitle: "Contact Us",
        contactDesc: "The VIP Mail team is ready to answer all your inquiries and provide necessary support.",
        technicalSupport: "For Technical Support and Assistance",
        generalInquiries: "For General Inquiries and Partnerships",
        
        // Privacy Page
        privacyTitle: "Privacy Policy",
        privacyHighlight: "Absolute privacy is our fundamental principle.",
        privacyDesc: "VIP Mail does not read, store, share, or sell the content of your messages or usage data for any purpose whatsoever. Our commitment to protecting your data is non-negotiable.",
        dataProtection: "Data Protection and Encryption",
        dataProtectionDesc: "All your messages and attachments are encrypted using military-grade encryption, ensuring that no party, including us, can access their content.",
        dataWeCollect: "Data We Collect",
        dataWeCollectDesc: "We only collect data necessary to operate your account and provide the service: the email address you chose, payment information (processed by a trusted third party and we don't store card numbers), and basic login records for security purposes only.",
        noSharing: "No Data Sharing",
        noSharingDesc: "**We will not share your data or message content with any third party under any circumstances,** except when required by an explicit and legally binding court order, in which case we will notify the user before complying whenever possible.",
        
        // Terms Page
        termsTitle: "Terms of Use",
        termsDesc: "By using the VIP Mail service, you agree to comply with these terms and conditions to protect your experience and that of all other digital elite users.",
        userObligations: "User Obligations",
        obligation1: "Use the service for legal and legitimate purposes only.",
        obligation2: "Do not use the service to send spam, harmful content, or any content that violates local and international laws.",
        obligation3: "Do not impersonate or assume the identity of any other party.",
        termination: "Account Termination and Disclaimer",
        termination1: "We reserve the right to suspend or terminate your account immediately, without prior notice, in case of violation of any of the mentioned terms of use.",
        termination2: "The service is provided \"as is\" without any express or implied warranties of uninterrupted operation or error-free performance.",
        
        // Refund Page
        refundTitle: "Refund Policy",
        nonRefundable: "Activation Fees are Non-Refundable",
        nonRefundableDesc: "VIP Mail service is **an instant digital service**, and its value depends on instant activation and exclusive reservation of your email address. **The activation fee of 1 US dollar is non-refundable.**",
        refundException: "The Only Exception for Refund",
        refundExceptionDesc: "A refund request can be considered **only** in case of **complete service failure** due to technical reasons attributable to VIP Mail within the **first 72 hours** of activation and we were unable to fix it.",
        noRefundCases: "Non-Refund Cases",
        noRefundCasesDesc: "No refund is provided in the following cases: change of user's mind, account termination due to violation of terms of use, or issues related to third parties (such as client software).",
        
        // Inbox Page
        settings: "Settings",
        profile: "Profile",
        searchMail: "Search in mail...",
        mail: "Mail",
        compose: "New Message",
        inbox: "Inbox",
        starred: "Starred",
        sent: "Sent",
        drafts: "Drafts",
        spam: "Spam",
        trash: "Trash",
    },
    ar: {
        // Navbar
        features: "المزايا",
        pricing: "الأسعار",
        about: "من نحن",
        login: "تسجيل الدخول",
        bookNow: "احجز بريدك الآن",
        menu: "القائمة",
        
        // Hero Section
        mostSecure: "البريد الإلكتروني الأكثر أمانًا",
        heroTitle: "VIP Mail",
        heroSubtitle: "بريد إلكتروني يضع الأمان والخصوصية أولاً.",
        heroDescription: "احصل على بريد مميز مثل",
        joinElite: "وكن في مستوى النخبة الرقمية.",
        learnMore: "اعرف المزيد",
        
        // Features Section
        exceptionalFeatures: "مزايا استثنائية",
        featuresSectionDesc: "خدمة بريد إلكتروني متكاملة مصممة خصيصًا للنخبة الرقمية",
        advancedProtection: "حماية متقدمة",
        advancedProtectionDesc: "تشفير من الطراز العسكري لحماية رسائلك من أي اختراق أو تجسس.",
        absolutePrivacy: "خصوصية مطلقة",
        absolutePrivacyDesc: "بياناتك ملكك وحدك. لا نشارك معلوماتك مع أي طرف ثالث.",
        exclusiveVIP: "عنوان VIP حصري",
        exclusiveVIPDesc: "احصل على بريد إلكتروني مميز ينتهي بـ @vipm.org يعكس تميزك.",
        globalAccess: "وصول عالمي",
        globalAccessDesc: "استخدم بريدك من أي مكان في العالم مع حماية كاملة.",
        
        // Pricing Section
        choosePackage: "اختر باقتك المثالية",
        pricingDesc: "أسعار شفافة وباقات مرنة تناسب احتياجاتك",
        specialOffer: "🔥 عرض خاص",
        vipMail: "VIP Mail",
        oneTimeFee: "/لمرة واحدة",
        pricingHighlight: "بريدك الإلكتروني دائم طوال فترة اشتراك الدومين!",
        dealPoint1: "💸 دولار واحد فقط!",
        dealPoint2: "⏰ عرض محدود",
        dealPoint3: "🚀 تفعيل فوري",
        customEmail: "✨ بريد إلكتروني مخصص @vipm.org",
        lifetimeValid: "🎯 صالح مدى الحياة (طوال فترة اشتراك الدومين)",
        fullProtection: "🔒 حماية وتشفير كامل",
        continuousSupport: "📧 دعم فني متواصل",
        joinElitePrice: "💎 انضم للنخبة الرقمية بسعر لا يُقاوم",
        bookOneDollar: "🎉 احجز الآن بدولار واحد فقط!",
        joinThousands: "⚡ انضم لآلاف المستخدمين الذين اختاروا التميز الرقمي",
        
        // Footer
        footerDesc: "بريد إلكتروني آمن ومميز للنخبة الرقمية",
        quickLinks: "روابط سريعة",
        contact: "اتصل بنا",
        legal: "قانوني",
        privacyPolicy: "سياسة الخصوصية",
        termsOfUse: "شروط الاستخدام",
        refundPolicy: "سياسة الاسترجاع",
        followUs: "تابعنا",
        rights: "جميع الحقوق محفوظة.",
        
        // Payment Page
        completeBooking: "إتمام الحجز",
        choosePaymentMethod: "اختر طريقة الدفع المناسبة لك",
        payViaPayPal: "الدفع عبر PayPal",
        payViaInstaPay: "الدفع عبر InstaPay",
        back: "العودة",
        friendsFamily: "Friends & Family",
        oneDollarOnly: "دولار واحد فقط",
        goodsServices: "Goods & Services",
        includesPayPalFees: "يشمل رسوم PayPal",
        transferScreenshot: "لقطة شاشة للتحويل *",
        chooseImage: "اختر الصورة",
        noFileChosen: "لم يتم اختيار ملف",
        email: "البريد الإلكتروني *",
        phone: "رقم الهاتف *",
        submitRequest: "إرسال الطلب",
        instaPayAccount: "حساب InstaPay:",
        orPhone: "أو رقم الهاتف:",
        instaPayNote: "التحويل بالجنيه المصري ما يعادل 1 دولار في وقت التحويل",
        successTitle: "تم إرسال طلبك بنجاح!",
        successDesc: "سيتم التواصل معك عبر البريد الإلكتروني خلال 24 ساعة<br>وسيتم إرسال رابط إنشاء بريدك المميز",
        backToHome: "العودة للصفحة الرئيسية",
        
        // About Page
        aboutTitle: "من نحن",
        aboutDesc: "نحن VIP Mail، خدمة البريد الإلكتروني المصممة خصيصًا للنخبة الرقمية التي تضع الأمان والخصوصية فوق كل اعتبار. رؤيتنا هي أن نكون الملاذ الرقمي الآمن لهويتك المهنية والشخصية في عالم متسارع.",
        coreValues: "قيمنا الأساسية",
        aboutPrivacy: "الخصوصية المطلقة: نحن لا نبيع بياناتك، ولا نتتبع رسائلك، ولا نشارك معلوماتك مع أي طرف ثالث. بياناتك ملكك وحدك.",
        aboutSecurity: "الأمان العسكري: نستخدم أعلى مستويات التشفير لحماية جميع مراسلاتك من أي اختراق أو تجسس.",
        aboutDistinction: "التفرد والتميز: عنوان بريدك الإلكتروني المميز (@vipm.org) هو انعكاس لهويتك الرقمية الراقية.",
        
        // Contact Page
        contactTitle: "اتصل بنا",
        contactDesc: "فريق VIP Mail مستعد للإجابة على جميع استفساراتك وتقديم الدعم اللازم.",
        technicalSupport: "للدعم الفني والمساعدة التقنية",
        generalInquiries: "للاستفسارات العامة والشراكات",
        
        // Privacy Page
        privacyTitle: "سياسة الخصوصية",
        privacyHighlight: "الخصوصية المطلقة هي مبدأنا الأساسي.",
        privacyDesc: "VIP Mail لا يقوم بقراءة، تخزين، مشاركة، أو بيع محتوى رسائلك أو بيانات استخدامك لأي غرض كان. التزامنا بحماية بياناتك غير قابل للتفاوض.",
        dataProtection: "حماية البيانات والتشفير",
        dataProtectionDesc: "يتم تشفير جميع رسائلك ومرفقاتك باستخدام تشفير من الطراز العسكري، مما يضمن عدم تمكن أي طرف، بما في ذلك نحن، من الوصول إلى محتواها.",
        dataWeCollect: "البيانات التي نجمعها",
        dataWeCollectDesc: "نحن نجمع فقط البيانات الضرورية لتشغيل حسابك وتقديم الخدمة: عنوان البريد الإلكتروني الذي اخترته، ومعلومات الدفع (تتم معالجتها من قبل طرف ثالث موثوق ولا نخزن أرقام البطاقات)، وسجلات الدخول الأساسية لأغراض أمنية بحتة.",
        noSharing: "عدم مشاركة البيانات",
        noSharingDesc: "**لن نقوم بمشاركة بياناتك أو محتوى رسائلك مع أي طرف ثالث تحت أي ظرف من الظروف،** إلا إذا كان ذلك مطلوبًا بموجب أمر قضائي صريح وملزم قانونياً، وفي هذه الحالة، سنقوم بإشعار المستخدم قبل الامتثال قدر الإمكان.",
        
        // Terms Page
        termsTitle: "شروط الاستخدام",
        termsDesc: "باستخدامك لخدمة VIP Mail، فإنك توافق على الالتزام بهذه الشروط والأحكام لحماية تجربتك وتجربة جميع مستخدمي النخبة الرقمية الآخرين.",
        userObligations: "التزامات المستخدم",
        obligation1: "استخدام الخدمة لأغراض قانونية ومشروعة فقط.",
        obligation2: "عدم استخدام الخدمة لإرسال رسائل سبام (Spam)، أو محتوى ضار، أو أي محتوى يخالف القوانين المحلية والدولية.",
        obligation3: "عدم انتحال شخصية أو هوية أي طرف آخر.",
        termination: "إنهاء الحساب وإخلاء المسؤولية",
        termination1: "نحتفظ بالحق في تعليق أو إنهاء حسابك على الفور، دون سابق إنذار، في حال انتهاك أي من شروط الاستخدام المذكورة.",
        termination2: "تُقدم الخدمة \"كما هي\" دون أي ضمانات صريحة أو ضمنية لعملها بدون انقطاع أو خلوها من الأخطاء.",
        
        // Refund Page
        refundTitle: "سياسة الاسترجاع",
        nonRefundable: "رسوم التفعيل غير قابلة للاسترداد",
        nonRefundableDesc: "تُعد خدمة VIP Mail **خدمة رقمية فورية**، وتعتمد قيمتها على التفعيل الفوري والحجز الحصري لعنوان البريد الإلكتروني الخاص بك. **رسوم تفعيل الخدمة البالغة 1 دولار أمريكي هي رسوم غير قابلة للاسترداد (Non-Refundable).**",
        refundException: "الاستثناء الوحيد للاسترجاع",
        refundExceptionDesc: "يمكن النظر في طلب استرداد المبلغ المدفوع **فقط** في حال **فشل الخدمة بشكل كامل** في العمل لأسباب تقنية تعود لـ VIP Mail خلال الـ **72 ساعة الأولى** من التفعيل ولم نتمكن من إصلاحها.",
        noRefundCases: "حالات عدم الاسترجاع",
        noRefundCasesDesc: "لا يتم استرداد أي مبلغ في الحالات التالية: تغيير رأي المستخدم، أو إنهاء الحساب بسبب انتهاك شروط الاستخدام، أو المشكلات المتعلقة بالطرف الثالث (مثل برامج العملاء).",
        
        // Inbox Page
        settings: "الإعدادات",
        profile: "الملف الشخصي",
        searchMail: "ابحث في البريد...",
        mail: "البريد",
        compose: "رسالة جديدة",
        inbox: "الوارد",
        starred: "المميزة",
        sent: "المرسلة",
        drafts: "المسودات",
        spam: "البريد المزعج",
        trash: "المحذوفات",
    }
};

// Get browser language
function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ar') ? 'ar' : 'en';
}

// Get current language from localStorage or browser
function getCurrentLanguage() {
    return localStorage.getItem('language') || getBrowserLanguage();
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
    updateLanguageDirection(lang);
    updateLanguageButtons(lang);
}

// Apply translations to page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// Update language direction (RTL/LTR)
function updateLanguageDirection(lang) {
    const html = document.documentElement;
    const body = document.body;
    
    if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.style.fontFamily = "'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    }
}

// Update language buttons active state
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    
    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });
});

console.log('VIP Mail - Ready to work! ✨');