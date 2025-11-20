// Simple navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation is now handled by CSS only
});

// Font size functionality
function changeFontSize(size) {
    const body = document.body;
    const buttons = document.querySelectorAll('.text-size button');
    
    // Remove all font size classes
    body.classList.remove('font-small', 'font-normal', 'font-large');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add appropriate class and set active button
    switch(size) {
        case 'small':
            body.classList.add('font-small');
            buttons[0].classList.add('active');
            break;
        case 'normal':
            body.classList.add('font-normal');
            buttons[1].classList.add('active');
            break;
        case 'large':
            body.classList.add('font-large');
            buttons[2].classList.add('active');
            break;
    }
}

// Smooth scroll enhancement
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

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Search functionality
function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('active');
    
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}

// Close search when clicking outside
document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    
    if (!searchContainer.contains(e.target)) {
        searchInput.classList.remove('active');
    }
});