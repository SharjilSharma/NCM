// ======== FLOATING TRANSLATION BUTTONS ========
// Adds translation buttons to every page automatically

function createFloatingTranslateButtons() {
    // Check if buttons already exist
    if (document.querySelector('.floating-translate-buttons')) return;
    
    // Create floating button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'floating-translate-buttons';
    buttonContainer.innerHTML = `
        <div class="translate-btn-group">
            <button class="translate-btn translate-btn-en" onclick="translatePage('en')" title="English">EN</button>
            <button class="translate-btn translate-btn-hi" onclick="translatePage('hi')" title="हिंदी">हि</button>
            <button class="translate-btn translate-btn-ur" onclick="translatePage('ur')" title="اردو">اُر</button>
        </div>
        <div class="translate-label">Language</div>
    `;
    
    document.body.appendChild(buttonContainer);
}

// Add CSS for floating buttons
function addTranslateButtonStyles() {
    if (document.querySelector('#translate-button-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'translate-button-styles';
    style.textContent = `
        .floating-translate-buttons {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        
        .translate-btn-group {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            background: white;
            border-radius: 25px;
            padding: 0.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            border: 1px solid #ddd;
        }
        
        .translate-btn {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-weight: bold;
            font-size: 0.8rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .translate-btn-en {
            background: #4CAF50;
            color: white;
        }
        
        .translate-btn-hi {
            background: #FF9800;
            color: white;
        }
        
        .translate-btn-ur {
            background: #2196F3;
            color: white;
        }
        
        .translate-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .translate-label {
            font-size: 0.7rem;
            color: #666;
            text-align: center;
            background: white;
            padding: 0.25rem 0.5rem;
            border-radius: 10px;
            border: 1px solid #ddd;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .floating-translate-buttons {
                right: 10px;
                top: auto;
                bottom: 100px;
                transform: none;
            }
            
            .translate-btn-group {
                flex-direction: row;
                padding: 0.25rem;
            }
            
            .translate-btn {
                width: 35px;
                height: 35px;
                font-size: 0.7rem;
            }
        }
        
        /* RTL adjustments */
        body.rtl .floating-translate-buttons {
            right: auto;
            left: 20px;
        }
        
        @media (max-width: 768px) {
            body.rtl .floating-translate-buttons {
                left: 10px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize floating buttons
function initFloatingTranslateButtons() {
    addTranslateButtonStyles();
    createFloatingTranslateButtons();
    
    // Update active button based on current language
    const currentLang = localStorage.getItem('language') || 'en';
    updateActiveTranslateButton(currentLang);
}

// Update active button state
function updateActiveTranslateButton(lang) {
    document.querySelectorAll('.translate-btn').forEach(btn => {
        btn.style.opacity = '0.7';
        btn.style.transform = 'scale(1)';
    });
    
    const activeBtn = document.querySelector(`.translate-btn-${lang}`);
    if (activeBtn) {
        activeBtn.style.opacity = '1';
        activeBtn.style.transform = 'scale(1.1)';
    }
}

// Enhanced translatePage function
const originalTranslatePage = window.translatePage;
window.translatePage = function(lang) {
    if (originalTranslatePage) {
        originalTranslatePage(lang);
    }
    updateActiveTranslateButton(lang);
    
    // Update dropdown if exists
    if (typeof updateLanguageDisplay === 'function') {
        updateLanguageDisplay(lang);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingTranslateButtons);
} else {
    initFloatingTranslateButtons();
}