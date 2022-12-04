const hamburger = document.getElementById("ham");
const nav = document.getElementById("navi");
const ele_menu = document.querySelector('menu');


hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active");
    ele_menu.style.visibility = 'hidden';

})




