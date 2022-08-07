const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close");


menu.addEventListener("click",()=>{
    navBar.classList.add("active");
    menu.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navBar.classList.remove("active");
    menu.classList.remove("active");
});

