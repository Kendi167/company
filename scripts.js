document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('[data-animation="fade-in"]');
    const fadeIn = () => {
        animatedItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', fadeIn);
    fadeIn();

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.style.display = 'block';
        contactForm.reset();
    });
});