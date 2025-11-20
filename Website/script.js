// ======== FONT SIZE FUNCTIONALITY ========
// This manages the 3-level font size increment/decrement system
let currentFontLevel = 0; // -3 to +3 range (7 levels total)
const fontSizes = {
    '-3': '12px',
    '-2': '13px', 
    '-1': '14px',
    '0': '16px',   // Normal/default
    '1': '18px',
    '2': '20px',
    '3': '22px'
};

function changeFontSize(direction) {
    // Remove active class from all buttons
    document.querySelectorAll('.text-size button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (direction === 'decrease' && currentFontLevel > -3) {
        currentFontLevel--;
    } else if (direction === 'increase' && currentFontLevel < 3) {
        currentFontLevel++;
    } else if (direction === 'reset') {
        currentFontLevel = 0;
    }
    
    // Apply font size to body
    document.body.style.fontSize = fontSizes[currentFontLevel];
    
    // Update button states
    updateFontButtons();
    
    // Store preference in localStorage
    localStorage.setItem('fontSize', currentFontLevel);
}

function updateFontButtons() {
    const decreaseBtn = document.querySelector('.text-size button:first-child');
    const normalBtn = document.querySelector('.text-size button:nth-child(2)');
    const increaseBtn = document.querySelector('.text-size button:last-child');
    
    // Reset all buttons
    [decreaseBtn, normalBtn, increaseBtn].forEach(btn => {
        btn.classList.remove('active');
        btn.disabled = false;
    });
    
    // Set active button based on current level
    if (currentFontLevel < 0) {
        decreaseBtn.classList.add('active');
    } else if (currentFontLevel === 0) {
        normalBtn.classList.add('active');
    } else {
        increaseBtn.classList.add('active');
    }
    
    // Disable buttons at limits
    if (currentFontLevel <= -3) decreaseBtn.disabled = true;
    if (currentFontLevel >= 3) increaseBtn.disabled = true;
}

// ======== COMPREHENSIVE TRANSLATION SYSTEM ========
// Complete translations for all website content in Hindi, English, and Urdu
const translations = {
    'en': {
        // Top Bar & Navigation
        'Government of India': 'Government of India',
        'Skip to Main Content': 'Skip to Main Content',
        'Language': 'Language',
        'More': 'More',
        'Empower Hub': 'Empower Hub',
        'Home': 'Home',
        'About Us': 'About Us',
        'Services': 'Services',
        'Popular Cases': 'Popular Cases',
        'How it Works': 'How it Works',
        'CTA': 'CTA',
        'Search...': 'Search...',
        
        // Hero Section
        'Access Your': 'Access Your',
        'Rights': 'Rights',
        'Secure Your': 'Secure Your',
        'Future': 'Future',
        "What's new": "What's new",
        'Important information': 'Important information',
        'View All': 'View All',
        'Explore': 'Explore',
        'Description of what\'s new 2 goes here.': 'Description of what\'s new 2 goes here.',
        'Document Type': 'Document Type',
        'Important information 1 goes here.': 'Important information 1 goes here.',
        'Important information 2 goes here.': 'Important information 2 goes here.',
        
        // Service Finder
        'Find the right service for you': 'Find the right service for you',
        'Tell us about yourself to find out the right services for you': 'Tell us about yourself to find out the right services for you',
        'Get Started': 'Get Started',
        
        // About Section
        'About Ministry/Department': 'About Ministry/Department',
        'We are dedicated to serving the public by [brief description of the ministry/department\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'We are dedicated to serving the public by [brief description of the ministry/department\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.',
        'Know More': 'Know More',
        
        // Services Section
        'Explore Services by Category': 'Explore Services by Category',
        'Indian Constitution and Women': 'Indian Constitution and Women',
        'Reproductive Rights': 'Reproductive Rights',
        
        // Common Elements
        'Demo': 'Demo',
        'Functionality Demo & Testing': 'Functionality Demo & Testing',
        'Font Size Control (7 Levels)': 'Font Size Control (7 Levels)',
        'Language Switching': 'Language Switching',
        'Responsive Design': 'Responsive Design',
        'Implemented Features': 'Implemented Features',
        'Back to Main Site': '← Back to Main Site'
    },
    
    'hi': {
        // Top Bar & Navigation
        'Government of India': 'भारत सरकार',
        'Skip to Main Content': 'मुख्य सामग्री पर जाएं',
        'Language': 'भाषा',
        'More': 'और',
        'Empower Hub': 'सशक्तिकरण केंद्र',
        'Home': 'होम',
        'About Us': 'हमारे बारे में',
        'Services': 'सेवाएं',
        'Popular Cases': 'लोकप्रिय मामले',
        'How it Works': 'यह कैसे काम करता है',
        'CTA': 'सीटीए',
        'Search...': 'खोजें...',
        
        // Hero Section
        'Access Your': 'अपने',
        'Rights': 'अधिकार प्राप्त करें',
        'Secure Your': 'अपना',
        'Future': 'भविष्य सुरक्षित करें',
        "What's new": "नया क्या है",
        'Important information': 'महत्वपूर्ण जानकारी',
        'View All': 'सभी देखें',
        'Explore': 'खोजें',
        'Description of what\'s new 2 goes here.': 'नई जानकारी का विवरण यहाँ है।',
        'Document Type': 'दस्तावेज़ प्रकार',
        'Important information 1 goes here.': 'महत्वपूर्ण जानकारी 1 यहाँ है।',
        'Important information 2 goes here.': 'महत्वपूर्ण जानकारी 2 यहाँ है।',
        
        // Service Finder
        'Find the right service for you': 'अपने लिए सही सेवा खोजें',
        'Tell us about yourself to find out the right services for you': 'अपने लिए सही सेवाओं का पता लगाने के लिए अपने बारे में बताएं',
        'Get Started': 'शुरू करें',
        
        // About Section
        'About Ministry/Department': 'मंत्रालय/विभाग के बारे में',
        'We are dedicated to serving the public by [brief description of the ministry/department\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'हम [मंत्रालय/विभाग के मिशन का संक्षिप्त विवरण] के माध्यम से जनता की सेवा करने के लिए समर्पित हैं। हमारी अनुभवी पेशेवरों की टीम [कुछ मुख्य उद्देश्यों या फोकस क्षेत्रों का उल्लेख] के लिए प्रतिबद्ध है।',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'हम [मंत्रालय/विभाग द्वारा समर्थित मूल मूल्यों या सिद्धांतों] में विश्वास करते हैं। हम आपके प्रश्नों का उत्तर देने और आपको आवश्यक जानकारी और संसाधन प्रदान करने के लिए यहाँ हैं।',
        'Know More': 'और जानें',
        
        // Services Section
        'Explore Services by Category': 'श्रेणी के अनुसार सेवाओं का अन्वेषण करें',
        'Indian Constitution and Women': 'भारतीय संविधान और महिलाएं',
        'Reproductive Rights': 'प्रजनन अधिकार',
        
        // Common Elements
        'Demo': 'डेमो',
        'Functionality Demo & Testing': 'कार्यक्षमता डेमो और परीक्षण',
        'Font Size Control (7 Levels)': 'फ़ॉन्ट आकार नियंत्रण (7 स्तर)',
        'Language Switching': 'भाषा बदलना',
        'Responsive Design': 'उत्तरदायी डिज़ाइन',
        'Implemented Features': 'लागू की गई सुविधाएं',
        'Back to Main Site': '← मुख्य साइट पर वापस'
    },
    
    'ur': {
        // Top Bar & Navigation
        'Government of India': 'حکومت ہند',
        'Skip to Main Content': 'اصل مواد پر جائیں',
        'Language': 'زبان',
        'More': 'مزید',
        'Empower Hub': 'بااختیار بنانے کا مرکز',
        'Home': 'ہوم',
        'About Us': 'ہمارے بارے میں',
        'Services': 'خدمات',
        'Popular Cases': 'مقبول کیسز',
        'How it Works': 'یہ کیسے کام کرتا ہے',
        'CTA': 'سی ٹی اے',
        'Search...': 'تلاش کریں...',
        
        // Hero Section
        'Access Your': 'اپنے',
        'Rights': 'حقوق حاصل کریں',
        'Secure Your': 'اپنا',
        'Future': 'مستقبل محفوظ کریں',
        "What's new": "نیا کیا ہے",
        'Important information': 'اہم معلومات',
        'View All': 'تمام دیکھیں',
        'Explore': 'دریافت کریں',
        'Description of what\'s new 2 goes here.': 'نئی معلومات کی تفصیل یہاں ہے۔',
        'Document Type': 'دستاویز کی قسم',
        'Important information 1 goes here.': 'اہم معلومات 1 یہاں ہے۔',
        'Important information 2 goes here.': 'اہم معلومات 2 یہاں ہے۔',
        
        // Service Finder
        'Find the right service for you': 'اپنے لیے صحیح سروس تلاش کریں',
        'Tell us about yourself to find out the right services for you': 'اپنے لیے صحیح خدمات معلوم کرنے کے لیے اپنے بارے میں بتائیں',
        'Get Started': 'شروع کریں',
        
        // About Section
        'About Ministry/Department': 'وزارت/شعبہ کے بارے میں',
        'We are dedicated to serving the public by [brief description of the ministry/department\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'ہم [وزارت/شعبہ کے مشن کی مختصر تفصیل] کے ذریعے عوام کی خدمت کرنے کے لیے وقف ہیں۔ ہماری تجربہ کار پیشہ ور افراد کی ٹیم [کچھ اہم مقاصد یا توجہ کے شعبوں کا ذکر] کے لیے پرعزم ہے۔',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'ہم [وزارت/شعبہ کی بنیادی اقدار یا اصولوں] پر یقین رکھتے ہیں۔ ہم آپ کے سوالات کا جواب دینے اور آپ کو ضروری معلومات اور وسائل فراہم کرنے کے لیے یہاں ہیں۔',
        'Know More': 'مزید جانیں',
        
        // Services Section
        'Explore Services by Category': 'زمرے کے مطابق خدمات دریافت کریں',
        'Indian Constitution and Women': 'ہندوستانی آئین اور خواتین',
        'Reproductive Rights': 'تولیدی حقوق',
        
        // Common Elements
        'Demo': 'ڈیمو',
        'Functionality Demo & Testing': 'فعالیت کا ڈیمو اور ٹیسٹنگ',
        'Font Size Control (7 Levels)': 'فونٹ سائز کنٹرول (7 لیولز)',
        'Language Switching': 'زبان تبدیل کرنا',
        'Responsive Design': 'ذمہ دار ڈیزائن',
        'Implemented Features': 'نافذ شدہ خصوصیات',
        'Back to Main Site': '← مین سائٹ پر واپس'
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all translatable text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all translatable placeholder elements
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update HTML lang attribute and direction for RTL languages
    document.documentElement.lang = lang;
    if (lang === 'ur') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
    
    // Store preference
    localStorage.setItem('language', lang);
    
    // Update language dropdown display
    updateLanguageDisplay(lang);
    
    // Re-scan for new elements that might have been added dynamically
    setTimeout(() => {
        addTranslateAttributes();
        // Apply translations to newly found elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }, 100);
}

function updateLanguageDisplay(lang) {
    const languageNames = {
        'en': 'English',
        'hi': 'हिंदी',
        'ur': 'اردو'
    };
    
    const languageSpan = document.querySelector('.language span:last-child');
    if (languageSpan) {
        languageSpan.textContent = languageNames[lang];
    }
}

// ======== SEARCH FUNCTIONALITY ========
// This manages the search input toggle animation
function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}

// ======== TAB FUNCTIONALITY ========
// This manages the hero section tabs (What's new / Important information)
function initializeTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            link.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// ======== FAQ ACCORDION FUNCTIONALITY ========
// This manages the expandable FAQ sections
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ======== RESPONSIVE NAVIGATION ========
// This manages mobile menu functionality
function initializeMobileMenu() {
    // Create mobile menu toggle button
    const header = document.querySelector('.main-header .container');
    const nav = document.querySelector('.main-nav');
    
    // Create hamburger menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<span class="material-icons-outlined">menu</span>';
    mobileMenuBtn.style.display = 'none';
    
    // Insert before header-right
    const headerRight = document.querySelector('.header-right');
    header.insertBefore(mobileMenuBtn, headerRight);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        const icon = mobileMenuBtn.querySelector('.material-icons-outlined');
        icon.textContent = nav.classList.contains('mobile-active') ? 'close' : 'menu';
    });
}

// ======== SMOOTH SCROLLING ========
// This adds smooth scrolling to anchor links
function initializeSmoothScrolling() {
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
}

// ======== LOADING ANIMATION ========
// This manages the page loading state
function initializePageLoading() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ======== INITIALIZATION ========
// This runs when the page loads and sets up all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedFontSize) {
        currentFontLevel = parseInt(savedFontSize);
        document.body.style.fontSize = fontSizes[currentFontLevel];
        updateFontButtons();
    }
    
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
    
    // Add data-translate attributes to translatable elements
    addTranslateAttributes();
    
    // Initialize all functionality
    initializeTabs();
    initializeFAQ();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializePageLoading();
    
    // Update font buttons on load
    updateFontButtons();
    
    // Create language dropdown
    createLanguageDropdown();
    
    // Apply current language to all elements
    if (currentLanguage !== 'en') {
        setTimeout(() => {
            addTranslateAttributes();
            changeLanguage(currentLanguage);
        }, 200);
    }
});

// ======== AUTOMATIC TRANSLATION ATTRIBUTE ASSIGNMENT ========
// This scans all text content and adds translation attributes automatically
function addTranslateAttributes() {
    // Auto-detect and add translation attributes to all text elements
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, td, th, label, input[type="text"], input[placeholder], textarea');
    
    textElements.forEach(element => {
        const text = element.textContent?.trim();
        const placeholder = element.getAttribute('placeholder');
        
        // Check if element already has data-translate attribute
        if (element.hasAttribute('data-translate')) return;
        
        // Skip empty elements or elements with only icons
        if (!text && !placeholder) return;
        if (text && text.match(/^[\s\n\r]*$/)) return;
        
        // Check for placeholder text
        if (placeholder && translations.en[placeholder]) {
            element.setAttribute('data-translate-placeholder', placeholder);
        }
        
        // Check for regular text content
        if (text && translations.en[text]) {
            element.setAttribute('data-translate', text);
        }
    });
    
    // Manual assignments for specific elements that need special handling
    const specificElements = [
        { selector: '.cta-button', key: 'CTA' },
        { selector: '.search-input', attr: 'placeholder', key: 'Search...' },
        { selector: '.view-all', key: 'View All' },
        { selector: '.explore-btn', key: 'Explore' },
        { selector: '.doc-type', key: 'Document Type' }
    ];
    
    specificElements.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach(element => {
            if (item.attr === 'placeholder') {
                element.setAttribute('data-translate-placeholder', item.key);
            } else {
                element.setAttribute('data-translate', item.key);
            }
        });
    });
}

// ======== LANGUAGE DROPDOWN FUNCTIONALITY ========
// This creates and manages the language selection dropdown
function createLanguageDropdown() {
    const languageDiv = document.querySelector('.language');
    if (!languageDiv || languageDiv.querySelector('.language-dropdown')) return;
    
    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-content">
            <a href="#" onclick="changeLanguage('en'); event.preventDefault(); return false;">English</a>
            <a href="#" onclick="changeLanguage('hi'); event.preventDefault(); return false;">हिंदी</a>
            <a href="#" onclick="changeLanguage('ur'); event.preventDefault(); return false;">اردو</a>
        </div>
    `;
    
    languageDiv.appendChild(dropdown);
    
    // Toggle dropdown on click
    languageDiv.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close all other dropdowns first
        document.querySelectorAll('.language-dropdown.active').forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });
        
        dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageDiv.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });
}

// Initialize language dropdown after DOM is loaded
document.addEventListener('DOMContentLoaded', createLanguageDropdown);