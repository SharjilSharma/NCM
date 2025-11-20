// ======== UNIVERSAL TRANSLATION SYSTEM ========
// This script can be included on any page to enable language switching

// Initialize translation system on any page
function initializeUniversalTranslation() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    // Add translation attributes to all text elements automatically
    scanAndAddTranslationAttributes();
    
    // Apply saved language
    if (savedLanguage !== 'en') {
        changeLanguage(savedLanguage);
    }
    
    // Create language dropdown if it doesn't exist
    createLanguageDropdownIfNeeded();
}

// Scan page and automatically add translation attributes
function scanAndAddTranslationAttributes() {
    // Get all text-containing elements
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, td, th, label, div');
    
    textElements.forEach(element => {
        // Skip if already has translation attribute
        if (element.hasAttribute('data-translate')) return;
        
        // Skip if element contains other elements (not pure text)
        if (element.children.length > 0) return;
        
        const text = element.textContent?.trim();
        if (!text || text.length < 2) return;
        
        // Skip numbers, dates, and special characters only
        if (text.match(/^[\d\s\-\/\.\,\:\;]+$/)) return;
        
        // Check if this text exists in our translations
        if (translations.en[text]) {
            element.setAttribute('data-translate', text);
        }
    });
    
    // Handle input placeholders
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder && translations.en[placeholder]) {
            input.setAttribute('data-translate-placeholder', placeholder);
        }
    });
}

// Create language dropdown if language element exists but dropdown doesn't
function createLanguageDropdownIfNeeded() {
    const languageDiv = document.querySelector('.language');
    if (!languageDiv || languageDiv.querySelector('.language-dropdown')) return;
    
    createLanguageDropdown();
}

// Apply translations to current page
function applyTranslationsToPage(lang) {
    // Update text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder elements
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    if (lang === 'ur') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

// Enhanced change language function for universal use
function changeLanguageUniversal(lang) {
    currentLanguage = lang;
    
    // Apply translations
    applyTranslationsToPage(lang);
    
    // Store preference
    localStorage.setItem('language', lang);
    
    // Update language display
    updateLanguageDisplay(lang);
    
    // Trigger custom event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Override the global changeLanguage function
if (typeof changeLanguage === 'undefined') {
    window.changeLanguage = changeLanguageUniversal;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUniversalTranslation);
} else {
    initializeUniversalTranslation();
}

// Re-scan for new content when page content changes
const observer = new MutationObserver(function(mutations) {
    let shouldRescan = false;
    
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if any text nodes were added
            for (let node of mutation.addedNodes) {
                if (node.nodeType === Node.TEXT_NODE || 
                    (node.nodeType === Node.ELEMENT_NODE && node.textContent.trim())) {
                    shouldRescan = true;
                    break;
                }
            }
        }
    });
    
    if (shouldRescan) {
        setTimeout(() => {
            scanAndAddTranslationAttributes();
            applyTranslationsToPage(currentLanguage);
        }, 100);
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});