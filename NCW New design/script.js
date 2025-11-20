document.addEventListener('DOMContentLoaded', function() {
    
    // --- Hero Tab Functionality ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabLinks.length > 0 && tabContents.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const tabId = link.getAttribute('data-tab');

                // Remove active class from all links and content
                tabLinks.forEach(item => item.classList.remove('active'));
                tabContents.forEach(item => item.classList.remove('active'));

                // Add active class to clicked link and corresponding content
                link.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    
    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                
                // Check if the clicked item is already active
                const wasActive = item.classList.contains('active');

                // Optional: Close all other items
                // faqItems.forEach(i => i.classList.remove('active'));

                // Toggle the active class on the clicked item
                if (!wasActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    }

});