// let menuBtn = document.querySelector(".menu-btn");
// let menu = document.querySelector(".menu");
// let body = document.querySelector("body");

// menuBtn.addEventListener("click", function(){
//     menuBtn.classList.toggle("active");
//     menu.classList.toggle("active");
//     body.classList.toggle("active");
// })


const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active")
        menuBtn.classList.toggle("active")
        body.classList.toggle("lock")
    })
}



// -----------------------------//

let accordions = document.querySelectorAll(".accordion-item");

for(item of accordions) {
    item.addEventListener("click", function(){
        this.classList.toggle("active");
    })
}

