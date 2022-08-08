const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close");
const features = ["To do List","Calendar","Reminders","Planning"];
const featureImgs = ["images/icon-todo.svg","images/icon-calendar.svg","images/icon-reminders.svg","images/icon-planning.svg"];
const company = ["History","Our Team","Blog"];
const nav1 = document.querySelector(".features");
const nav2 = document.querySelector(".company");
let clickedBefore1 = false;
let clickedBefore2 = false;

menu.addEventListener("click",()=>{
    navBar.classList.add("active");
    menu.classList.add("active");
});



///////create features div////////////////////

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
for(let i =0;i<features.length;i++){
     const feature = document.createElement("div");
     feature.classList.add("feature");
     const img = document.createElement("img");
     img.setAttribute("src",featureImgs[i]);
     feature.appendChild(img);
     const h5 = document.createElement("h5");
     h5.innerText = features[i];
     feature.appendChild(h5);
     wrapper.appendChild(feature);
}
nav1.appendChild(wrapper);


////create company div//////////////////

let companyWrapper = document.createElement("div");
companyWrapper.classList.add("wrapper");
for(let i =0;i<company.length;i++){
    const h5 = document.createElement("h5");
    h5.innerText = company[i];
    companyWrapper.appendChild(h5);
}
nav2.appendChild(companyWrapper);


////////functions////////////////////////////////////

function addImgTransition(nav){
    nav.querySelector(".arrow").style.transform = "rotate(180deg)";
    nav.querySelector(".arrow").style.transition = "0.7s ease";
}
function rmvImgTransition(nav){
    nav.querySelector(".arrow").style.transform = "rotate(0deg)";
    nav.querySelector(".arrow").style.transition = "0.7s ease";
}
/////////////////when click/////////////////////////

nav1.addEventListener("click",()=>{
    if(clickedBefore1){
        wrapper.classList.remove("transition");
        clickedBefore1 = false;
        rmvImgTransition(nav1);
    }
    else{
        wrapper.classList.add("transition");
        addImgTransition(nav1);
        clickedBefore1 = true;
    }
});

nav2.addEventListener("click",()=>{
    if(clickedBefore2){
        companyWrapper.classList.remove("transition");
        rmvImgTransition(nav2);
        clickedBefore2 = false;
    }
    else{
        companyWrapper.classList.add("transition");
        addImgTransition(nav2);
        clickedBefore2 = true;
    }
});

//////////////close  side bar///////////////////

closeBtn.addEventListener("click",()=>{
    navBar.classList.remove("active");
    menu.classList.remove("active");
    wrapper.classList.remove("transition");
    rmvImgTransition(nav1);
    clickedBefore1 = false;
    companyWrapper.classList.remove("transition");
    rmvImgTransition(nav2);
    clickedBefore2 = false;
});
