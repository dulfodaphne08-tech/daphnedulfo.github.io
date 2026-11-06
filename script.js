document.addEventListener('DOMContentLoaded', () => {

    // ================= 1. LOADING SCREEN (1 Second) =================
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if(loader) {
                loader.classList.add('hidden');
            }
        }, 1000); // 1000ms = 1 second
    });

    // ================= 2. CUSTOM CURSOR =================
    const cursor = document.getElementById('cursor');
    // Select all elements that should trigger the cursor hover effect
    const hoverElements = document.querySelectorAll('a, .btn, .service-card, .skill-category ul li, .journey-card');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }

    // ================= 3. NAVBAR SCROLL EFFECT =================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ================= 4. MOBILE MENU TOGGLE =================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ================= 5. SCROLL REVEAL ANIMATIONS =================
    // This makes elements with the .reveal class fade and slide up when scrolled into view
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ================= 6. TIMELINE LINE ANIMATION =================
    // Makes the vertical pink line grow as you scroll down the timeline
    const timelineLine = document.getElementById('timeline-line');
    const timelineSection = document.querySelector('.timeline');

    if (timelineLine && timelineSection) {
        window.addEventListener('scroll', () => {
            const sectionTop = timelineSection.getBoundingClientRect().top;
            const sectionHeight = timelineSection.offsetHeight;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
                let heightPercentage = ((windowHeight - sectionTop) / sectionHeight) * 100;
                if (heightPercentage > 100) heightPercentage = 100;
                if (heightPercentage < 0) heightPercentage = 0;
                
                timelineLine.style.height = heightPercentage + '%';
            }
        });
    }

});