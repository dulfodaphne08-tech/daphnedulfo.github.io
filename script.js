document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if(loader) {
                loader.classList.add('hidden');
            }
        }, 1000);
    });

    const cursor = document.getElementById('cursor');
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

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

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