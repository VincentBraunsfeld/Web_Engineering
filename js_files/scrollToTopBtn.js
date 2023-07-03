function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Funktion zum Überprüfen des Scroll-Offsets und Anzeigen/Verstecken des Buttons
function handleScroll() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Event-Listener für das Scroll-Ereignis hinzufügen
window.addEventListener("scroll", handleScroll);