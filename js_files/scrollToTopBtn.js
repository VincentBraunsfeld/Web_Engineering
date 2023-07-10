function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function handleScroll() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}


window.addEventListener("scroll", handleScroll);