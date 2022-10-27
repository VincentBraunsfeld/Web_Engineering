const hamburger = document.getElementById("ham");
const nav = document.getElementById("navi");

hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active");
})
