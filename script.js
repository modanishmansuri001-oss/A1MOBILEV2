
/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 80){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

/* ==========================================
   STAGGER ANIMATION
========================================== */

const staggerItems=document.querySelectorAll(".stagger");

window.addEventListener("load",()=>{

    staggerItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("show");

        },index*180);

    });

});

const menuBtn = document.getElementById("menuButton");
const homePage = document.getElementById("homePage");
const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        alert("Menu Coming Soon");

    });

}
