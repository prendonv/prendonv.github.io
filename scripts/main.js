document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.classList.add('mobile-toggle');
    mobileToggle.innerHTML = '☰';
    document.querySelector('.header-container').insertBefore(mobileToggle, document.querySelector('.nav'));

    const nav = document.querySelector('.nav');
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileToggle.innerHTML = '☰';
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
