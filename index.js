const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");

menu.addEventListener("click",()=>{
    navBar.classList.add("active");
    menu.style.display = "none";
})