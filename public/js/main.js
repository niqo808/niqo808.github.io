const header =document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        header.classList.add("change");
    }
    else {
        header.classList.remove("change");
    }
})

const logo =document.querySelector(".logo");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        logo.classList.add("change_logo");
    }
    else {
        logo.classList.remove("change_logo");
    }
})
const nav =document.querySelector("nav a");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        nav.classList.add("change_nav");
    }
    else {
        nav.classList.remove("change_nav");
    }
})
const nav1 =document.querySelector("nav a.nav1");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        nav1.classList.add("change_nav");
    }
    else {
        nav1.classList.remove("change_nav");
    }
})
const nav2 =document.querySelector("nav a.nav2");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
        nav2.classList.add("change_nav");
    }
    else {
        nav2.classList.remove("change_nav");
    }
})


