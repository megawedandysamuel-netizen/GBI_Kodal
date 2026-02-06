console.log("Website Gereja Berjalan!");

// --- 1. LOGIKA MENU HP (BURGER) - BARU ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        // Toggle Navigasi
        nav.classList.toggle('nav-active');

        // Animasi Link (Opsional agar lebih halus)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animasi Burger (X shape)
        burger.classList.toggle('toggle');
    });
}

// --- 2. LOGIKA DARK MODE ---
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if(toggleBtn) toggleBtn.textContent = '☀️';
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// --- 3. LOGIKA SLIDER OTOMATIS ---
let slideIndex = 0;

if (document.getElementsByClassName("slide").length > 0) {
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++; 
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}

// --- 4. SMOOTH SCROLL NAVIGASI ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Tutup menu HP otomatis saat link diklik
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});