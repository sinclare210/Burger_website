const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

const navClose = document.getElementById("nav-close");

const listItem = document.getElementById("list-item");

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden")
})

navClose.addEventListener("click", () => {
    navMenu.classList.add("hidden");
})

listItem.addEventListener("click", ()  =>{
     navMenu.classList.add("hidden")
})
