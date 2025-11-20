// ======== COMPREHENSIVE AUTO-TRANSLATION SYSTEM ========
// This script automatically translates ALL content on any page

// Expanded translation dictionary with ALL website content
const allTranslations = {
    'en': {
        // Navigation & UI
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
        'Demo': 'Demo',
        
        // Hero Section
        'Access Your': 'Access Your',
        'Rights': 'Rights',
        'Secure Your': 'Secure Your',
        'Future': 'Future',
        "What's new": "What's new",
        'Important information': 'Important information',
        'View All': 'View All',
        'Explore': 'Explore',
        
        // Content
        'Description of what\\'s new 2 goes here.': 'Description of what\\'s new 2 goes here.',
        'Document Type': 'Document Type',
        'Important information 1 goes here.': 'Important information 1 goes here.',
        'Important information 2 goes here.': 'Important information 2 goes here.',
        'Find the right service for you': 'Find the right service for you',
        'Tell us about yourself to find out the right services for you': 'Tell us about yourself to find out the right services for you',
        'Get Started': 'Get Started',
        'About Ministry/Department': 'About Ministry/Department',
        'Know More': 'Know More',
        'Explore Services by Category': 'Explore Services by Category',
        'Indian Constitution and Women': 'Indian Constitution and Women',
        'Reproductive Rights': 'Reproductive Rights',
        
        // Demo Page Content
        'Functionality Demo & Testing': 'Functionality Demo & Testing',
        'Font Size Control (7 Levels)': 'Font Size Control (7 Levels)',
        'Test the font size controls in the top bar. You have 3 levels of decrease (-3 to -1), normal (0), and 3 levels of increase (+1 to +3).': 'Test the font size controls in the top bar. You have 3 levels of decrease (-3 to -1), normal (0), and 3 levels of increase (+1 to +3).',
        'Decrease Font (-A)': 'Decrease Font (-A)',
        'Reset Font (A)': 'Reset Font (A)',
        'Increase Font (A+)': 'Increase Font (A+)',
        'Current Status:': 'Current Status:',
        'Normal Size': 'Normal Size',
        'This text will change size as you adjust the font controls. The changes apply to the entire website and are saved in your browser.': 'This text will change size as you adjust the font controls. The changes apply to the entire website and are saved in your browser.',
        'Language Switching': 'Language Switching',
        'This website supports three languages for the Muslim community and broader audience.': 'This website supports three languages for the Muslim community and broader audience.',
        'English': 'English',
        'हिंदी (Hindi)': 'हिंदी (Hindi)',
        'اردو (Urdu)': 'اردو (Urdu)',
        'Current Language:': 'Current Language:',
        'Responsive Design': 'Responsive Design',
        'Resize your browser window or test on different devices to see the responsive behavior:': 'Resize your browser window or test on different devices to see the responsive behavior:',
        'Desktop (1200px+):': 'Desktop (1200px+):',
        'Full 4-column layout': 'Full 4-column layout',
        'Tablet (768px-1199px):': 'Tablet (768px-1199px):',
        '2-column layout, mobile menu appears': '2-column layout, mobile menu appears',
        'Mobile (below 768px):': 'Mobile (below 768px):',
        'Single column, hamburger menu, optimized spacing': 'Single column, hamburger menu, optimized spacing',
        'Desktop View': 'Desktop View',
        'Tablet View': 'Tablet View',
        'Mobile View': 'Mobile View',
        'Note: Window resizing may not work in all browsers due to security restrictions.': 'Note: Window resizing may not work in all browsers due to security restrictions.',
        'Implemented Features': 'Implemented Features',
        '✓ Font Size Control': '✓ Font Size Control',
        '7-level system with localStorage persistence': '7-level system with localStorage persistence',
        '✓ Multi-Language Support': '✓ Multi-Language Support',
        'English, Hindi, Urdu with dropdown menu': 'English, Hindi, Urdu with dropdown menu',
        '✓ Responsive Design': '✓ Responsive Design',
        'Mobile-first approach with breakpoints': 'Mobile-first approach with breakpoints',
        '✓ Accessibility': '✓ Accessibility',
        'Focus indicators, reduced motion support': 'Focus indicators, reduced motion support',
        '← Back to Main Site': '← Back to Main Site',
        
        // About Section
        'We are dedicated to serving the public by [brief description of the ministry/department\\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'We are dedicated to serving the public by [brief description of the ministry/department\\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.'
    },
    
    'hi': {
        // Navigation & UI
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
        'Demo': 'डेमो',
        
        // Hero Section
        'Access Your': 'अपने',
        'Rights': 'अधिकार प्राप्त करें',
        'Secure Your': 'अपना',
        'Future': 'भविष्य सुरक्षित करें',
        "What's new": "नया क्या है",
        'Important information': 'महत्वपूर्ण जानकारी',
        'View All': 'सभी देखें',
        'Explore': 'खोजें',
        
        // Content
        'Description of what\\'s new 2 goes here.': 'नई जानकारी का विवरण यहाँ है।',
        'Document Type': 'दस्तावेज़ प्रकार',
        'Important information 1 goes here.': 'महत्वपूर्ण जानकारी 1 यहाँ है।',
        'Important information 2 goes here.': 'महत्वपूर्ण जानकारी 2 यहाँ है।',
        'Find the right service for you': 'अपने लिए सही सेवा खोजें',
        'Tell us about yourself to find out the right services for you': 'अपने लिए सही सेवाओं का पता लगाने के लिए अपने बारे में बताएं',
        'Get Started': 'शुरू करें',
        'About Ministry/Department': 'मंत्रालय/विभाग के बारे में',
        'Know More': 'और जानें',
        'Explore Services by Category': 'श्रेणी के अनुसार सेवाओं का अन्वेषण करें',
        'Indian Constitution and Women': 'भारतीय संविधान और महिलाएं',
        'Reproductive Rights': 'प्रजनन अधिकार',
        
        // Demo Page Content
        'Functionality Demo & Testing': 'कार्यक्षमता डेमो और परीक्षण',
        'Font Size Control (7 Levels)': 'फ़ॉन्ट आकार नियंत्रण (7 स्तर)',
        'Test the font size controls in the top bar. You have 3 levels of decrease (-3 to -1), normal (0), and 3 levels of increase (+1 to +3).': 'शीर्ष बार में फ़ॉन्ट आकार नियंत्रण का परीक्षण करें। आपके पास कमी के 3 स्तर (-3 से -1), सामान्य (0), और वृद्धि के 3 स्तर (+1 से +3) हैं।',
        'Decrease Font (-A)': 'फ़ॉन्ट घटाएं (-A)',
        'Reset Font (A)': 'फ़ॉन्ट रीसेट करें (A)',
        'Increase Font (A+)': 'फ़ॉन्ट बढ़ाएं (A+)',
        'Current Status:': 'वर्तमान स्थिति:',
        'Normal Size': 'सामान्य आकार',
        'This text will change size as you adjust the font controls. The changes apply to the entire website and are saved in your browser.': 'यह टेक्स्ट आकार बदलेगा जब आप फ़ॉन्ट नियंत्रण समायोजित करेंगे। परिवर्तन पूरी वेबसाइट पर लागू होते हैं और आपके ब्राउज़र में सहेजे जाते हैं।',
        'Language Switching': 'भाषा बदलना',
        'This website supports three languages for the Muslim community and broader audience.': 'यह वेबसाइट मुस्लिम समुदाय और व्यापक दर्शकों के लिए तीन भाषाओं का समर्थन करती है।',
        'English': 'अंग्रेजी',
        'हिंदी (Hindi)': 'हिंदी',
        'اردو (Urdu)': 'उर्दू',
        'Current Language:': 'वर्तमान भाषा:',
        'Responsive Design': 'उत्तरदायी डिज़ाइन',
        'Resize your browser window or test on different devices to see the responsive behavior:': 'उत्तरदायी व्यवहार देखने के लिए अपनी ब्राउज़र विंडो का आकार बदलें या विभिन्न उपकरणों पर परीक्षण करें:',
        'Desktop (1200px+):': 'डेस्कटॉप (1200px+):',
        'Full 4-column layout': 'पूर्ण 4-कॉलम लेआउट',
        'Tablet (768px-1199px):': 'टैबलेट (768px-1199px):',
        '2-column layout, mobile menu appears': '2-कॉलम लेआउट, मोबाइल मेनू दिखाई देता है',
        'Mobile (below 768px):': 'मोबाइल (768px से नीचे):',
        'Single column, hamburger menu, optimized spacing': 'एकल कॉलम, हैमबर्गर मेनू, अनुकूलित स्थान',
        'Desktop View': 'डेस्कटॉप दृश्य',
        'Tablet View': 'टैबलेट दृश्य',
        'Mobile View': 'मोबाइल दृश्य',
        'Note: Window resizing may not work in all browsers due to security restrictions.': 'नोट: सुरक्षा प्रतिबंधों के कारण विंडो का आकार बदलना सभी ब्राउज़र में काम नहीं कर सकता।',
        'Implemented Features': 'लागू की गई सुविधाएं',
        '✓ Font Size Control': '✓ फ़ॉन्ट आकार नियंत्रण',
        '7-level system with localStorage persistence': 'localStorage दृढ़ता के साथ 7-स्तरीय प्रणाली',
        '✓ Multi-Language Support': '✓ बहु-भाषा समर्थन',
        'English, Hindi, Urdu with dropdown menu': 'ड्रॉपडाउन मेनू के साथ अंग्रेजी, हिंदी, उर्दू',
        '✓ Responsive Design': '✓ उत्तरदायी डिज़ाइन',
        'Mobile-first approach with breakpoints': 'ब्रेकपॉइंट्स के साथ मोबाइल-फर्स्ट दृष्टिकोण',
        '✓ Accessibility': '✓ पहुंच',
        'Focus indicators, reduced motion support': 'फोकस संकेतक, कम गति समर्थन',
        '← Back to Main Site': '← मुख्य साइट पर वापस',
        
        // About Section
        'We are dedicated to serving the public by [brief description of the ministry/department\\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'हम [मंत्रालय/विभाग के मिशन का संक्षिप्त विवरण] के माध्यम से जनता की सेवा करने के लिए समर्पित हैं। हमारी अनुभवी पेशेवरों की टीम [कुछ मुख्य उद्देश्यों या फोकस क्षेत्रों का उल्लेख] के लिए प्रतिबद्ध है।',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'हम [मंत्रालय/विभाग द्वारा समर्थित मूल मूल्यों या सिद्धांतों] में विश्वास करते हैं। हम आपके प्रश्नों का उत्तर देने और आपको आवश्यक जानकारी और संसाधन प्रदान करने के लिए यहाँ हैं।'
    },
    
    'ur': {
        // Navigation & UI
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
        'Demo': 'ڈیمو',
        
        // Hero Section
        'Access Your': 'اپنے',
        'Rights': 'حقوق حاصل کریں',
        'Secure Your': 'اپنا',
        'Future': 'مستقبل محفوظ کریں',
        "What's new": "نیا کیا ہے",
        'Important information': 'اہم معلومات',
        'View All': 'تمام دیکھیں',
        'Explore': 'دریافت کریں',
        
        // Content
        'Description of what\\'s new 2 goes here.': 'نئی معلومات کی تفصیل یہاں ہے۔',
        'Document Type': 'دستاویز کی قسم',
        'Important information 1 goes here.': 'اہم معلومات 1 یہاں ہے۔',
        'Important information 2 goes here.': 'اہم معلومات 2 یہاں ہے۔',
        'Find the right service for you': 'اپنے لیے صحیح سروس تلاش کریں',
        'Tell us about yourself to find out the right services for you': 'اپنے لیے صحیح خدمات معلوم کرنے کے لیے اپنے بارے میں بتائیں',
        'Get Started': 'شروع کریں',
        'About Ministry/Department': 'وزارت/شعبہ کے بارے میں',
        'Know More': 'مزید جانیں',
        'Explore Services by Category': 'زمرے کے مطابق خدمات دریافت کریں',
        'Indian Constitution and Women': 'ہندوستانی آئین اور خواتین',
        'Reproductive Rights': 'تولیدی حقوق',
        
        // Demo Page Content
        'Functionality Demo & Testing': 'فعالیت کا ڈیمو اور ٹیسٹنگ',
        'Font Size Control (7 Levels)': 'فونٹ سائز کنٹرول (7 لیولز)',
        'Test the font size controls in the top bar. You have 3 levels of decrease (-3 to -1), normal (0), and 3 levels of increase (+1 to +3).': 'اوپری بار میں فونٹ سائز کنٹرولز کا ٹیسٹ کریں۔ آپ کے پاس کمی کے 3 لیولز (-3 سے -1)، نارمل (0)، اور اضافے کے 3 لیولز (+1 سے +3) ہیں۔',
        'Decrease Font (-A)': 'فونٹ کم کریں (-A)',
        'Reset Font (A)': 'فونٹ ری سیٹ کریں (A)',
        'Increase Font (A+)': 'فونٹ بڑھائیں (A+)',
        'Current Status:': 'موجودہ حالت:',
        'Normal Size': 'نارمل سائز',
        'This text will change size as you adjust the font controls. The changes apply to the entire website and are saved in your browser.': 'یہ ٹیکسٹ کا سائز تبدیل ہوگا جب آپ فونٹ کنٹرولز کو ایڈجسٹ کریں گے۔ تبدیلیاں پوری ویب سائٹ پر لاگو ہوتی ہیں اور آپ کے براؤزر میں محفوظ ہوتی ہیں۔',
        'Language Switching': 'زبان تبدیل کرنا',
        'This website supports three languages for the Muslim community and broader audience.': 'یہ ویب سائٹ مسلم کمیونٹی اور وسیع تر سامعین کے لیے تین زبانوں کی حمایت کرتی ہے۔',
        'English': 'انگریزی',
        'हिंदी (Hindi)': 'ہندی',
        'اردو (Urdu)': 'اردو',
        'Current Language:': 'موجودہ زبان:',
        'Responsive Design': 'ذمہ دار ڈیزائن',
        'Resize your browser window or test on different devices to see the responsive behavior:': 'ذمہ دار رفتار دیکھنے کے لیے اپنی براؤزر ونڈو کا سائز تبدیل کریں یا مختلف آلات پر ٹیسٹ کریں:',
        'Desktop (1200px+):': 'ڈیسک ٹاپ (1200px+):',
        'Full 4-column layout': 'مکمل 4-کالم لے آؤٹ',
        'Tablet (768px-1199px):': 'ٹیبلیٹ (768px-1199px):',
        '2-column layout, mobile menu appears': '2-کالم لے آؤٹ، موبائل مینو ظاہر ہوتا ہے',
        'Mobile (below 768px):': 'موبائل (768px سے نیچے):',
        'Single column, hamburger menu, optimized spacing': 'سنگل کالم، ہیمبرگر مینو، بہتر شدہ اسپیسنگ',
        'Desktop View': 'ڈیسک ٹاپ ویو',
        'Tablet View': 'ٹیبلیٹ ویو',
        'Mobile View': 'موبائل ویو',
        'Note: Window resizing may not work in all browsers due to security restrictions.': 'نوٹ: سیکیورٹی پابندیوں کی وجہ سے ونڈو کا سائز تبدیل کرنا تمام براؤزرز میں کام نہیں کر سکتا۔',
        'Implemented Features': 'نافذ شدہ خصوصیات',
        '✓ Font Size Control': '✓ فونٹ سائز کنٹرول',
        '7-level system with localStorage persistence': 'localStorage مستقل کے ساتھ 7-لیول سسٹم',
        '✓ Multi-Language Support': '✓ کثیر زبان سپورٹ',
        'English, Hindi, Urdu with dropdown menu': 'ڈراپ ڈاؤن مینو کے ساتھ انگریزی، ہندی، اردو',
        '✓ Responsive Design': '✓ ذمہ دار ڈیزائن',
        'Mobile-first approach with breakpoints': 'بریک پوائنٹس کے ساتھ موبائل فرسٹ اپروچ',
        '✓ Accessibility': '✓ رسائی',
        'Focus indicators, reduced motion support': 'فوکس انڈیکیٹرز، کم حرکت سپورٹ',
        '← Back to Main Site': '← مین سائٹ پر واپس',
        
        // About Section
        'We are dedicated to serving the public by [brief description of the ministry/department\\'s mission]. Our team of experienced professionals is committed to [mention a few key objectives or areas of focus].': 'ہم [وزارت/شعبہ کے مشن کی مختصر تفصیل] کے ذریعے عوام کی خدمت کرنے کے لیے وقف ہیں۔ ہماری تجربہ کار پیشہ ور افراد کی ٹیم [کچھ اہم مقاصد یا توجہ کے شعبوں کا ذکر] کے لیے پرعزم ہے۔',
        'We believe in [core values or principles the ministry/department upholds]. We are here to answer your questions and provide you with the information and resources you need.': 'ہم [وزارت/شعبہ کی بنیادی اقدار یا اصولوں] پر یقین رکھتے ہیں۔ ہم آپ کے سوالات کا جواب دینے اور آپ کو ضروری معلومات اور وسائل فراہم کرنے کے لیے یہاں ہیں۔'
    }
};

// Auto-translate all text content
function autoTranslateAll(lang = 'en') {
    // Get all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim()) {
            textNodes.push(node);
        }
    }
    
    // Translate text nodes
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue.trim();
        if (text && allTranslations[lang] && allTranslations[lang][text]) {
            textNode.nodeValue = allTranslations[lang][text];
        }
    });
    
    // Translate element attributes
    document.querySelectorAll('[placeholder]').forEach(el => {
        const placeholder = el.getAttribute('placeholder');
        if (allTranslations[lang] && allTranslations[lang][placeholder]) {
            el.setAttribute('placeholder', allTranslations[lang][placeholder]);
        }
    });
    
    // Translate title attributes
    document.querySelectorAll('[title]').forEach(el => {
        const title = el.getAttribute('title');
        if (allTranslations[lang] && allTranslations[lang][title]) {
            el.setAttribute('title', allTranslations[lang][title]);
        }
    });
}

// Global translation function
window.translatePage = function(lang) {
    autoTranslateAll(lang);
    
    // Update HTML attributes
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
    
    // Update language display
    const languageSpan = document.querySelector('.language span:last-child');
    if (languageSpan) {
        const names = { 'en': 'English', 'hi': 'हिंदी', 'ur': 'اردو' };
        languageSpan.textContent = names[lang];
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang !== 'en') {
        translatePage(savedLang);
    }
});