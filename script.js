// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            // Adjust scroll position slightly to account for fixed header height
            // The exact value might need tweaking based on final header height
            const headerOffset = 100; // Approximate height of the fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('scrollProgressBar');
    if (!progressBar) return; // Exit if element not found

    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;

    progressBar.style.width = scrolled + '%';
});

// Optional: Add subtle animation on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the item is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
             // Optional: Unobserve after animation
             // observer.unobserve(entry.target);
        } else {
             // Optional: Reset animation if element scrolls out of view
             entry.target.style.opacity = 0;
             entry.target.style.transform = 'translateY(20px)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    // Initial state for animation
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Special handling for the hero section if needed (already visible)
const heroSection = document.getElementById('hero');
if (heroSection) {
    heroSection.style.opacity = 1;
    heroSection.style.transform = 'translateY(0)';
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links ul li a'); // Get all links inside the mobile menu

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isActive);

        // Optional: Change burger icon to an "X" when open
        // You would need to adjust the SVG or use CSS for this
    });

    // Close menu when a link is clicked (for single-page apps)
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                // Reset burger icon if changed
            }
        });
    });

    // Add event listener for the new login button (if it exists)
    // to close the menu as well, if needed
    const loginButton = document.querySelector('.nav-links .login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                 // Reset burger icon if changed
            }
            // Add specific login logic here later if needed
            console.log("Login button clicked");
        });
    }
}

console.log("KRASLEY STUDIO Site Initialized");