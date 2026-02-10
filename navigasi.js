// Pastikan script berjalan setelah seluruh elemen HTML muncul
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website GBI Kodal Berjalan!");

    // --- 1. LOGIKA MENU HP (BURGER) ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    // --- 2. LOGIKA DARK MODE ---
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️';
        }

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                toggleBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                toggleBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 3. FITUR AYAT ALKITAB HARIAN (DIPERBAIKI) ---
    const verses = [
        { text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.", ref: "Filipi 4:13" },
        { text: "Tuhan adalah gembalaku, takkan kekurangan aku.", ref: "Mazmur 23:1" },
        { text: "Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah.", ref: "Filipi 4:6" },
        { text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.", ref: "Amsal 3:5" },
        { text: "Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru.", ref: "Yesaya 40:31" },
        { text: "Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu... yaitu rancangan damai sejahtera.", ref: "Yeremia 29:11" },
        { text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.", ref: "Matius 11:28" }
    ];

    const verseContent = document.getElementById('verse-content');
    const verseRef = document.getElementById('verse-reference');

    if (verseContent && verseRef) {
        const randomIndex = Math.floor(Math.random() * verses.length);
        const verse = verses[randomIndex];
        
        // Mengisi teks ke dalam HTML
        verseContent.innerText = `"${verse.text}"`;
        verseRef.innerText = `- ${verse.ref}`;
    }
});

// --- 4. LOGIKA SLIDER OTOMATIS (Di luar DOMContentLoaded agar tetap loop) ---
let slideIndex = 0;
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++; 
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 4000); 
    }
}
showSlides();
