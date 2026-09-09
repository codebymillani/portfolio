document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navigation Active Link State Management ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active-link');
        }
    });

    // --- 2. Mobile Responsive Hamburguer Panel Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 3. Portfolio Cards Category Filter Control ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Adjust active toggle button state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hide');
                        // Optional simple fade re-trigger effect
                        card.style.animation = 'none';
                        card.offsetHeight; // Trigger DOM layout recalculation
                        card.style.animation = 'fadeIn 0.4s ease-in-out forwards';
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    // --- 4. Scroll Reveal Animation Logic ---
    const revealItems = document.querySelectorAll('.scroll-reveal');
    if (revealItems.length > 0) {
        const revealOnScroll = () => {
            const triggerBottom = window.innerHeight * 0.85;
            revealItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < triggerBottom) {
                    item.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial activation execution loop
    }
});
