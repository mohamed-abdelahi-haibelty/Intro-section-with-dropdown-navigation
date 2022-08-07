const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close");


menu.addEventListener("click",()=>{
    navBar.classList.add("active");
    menu.style.display = "none";
});

closeBtn.addEventListener("click",()=>{
    navBar.classList.remove("active");
    menu.style.display = "block";
});

