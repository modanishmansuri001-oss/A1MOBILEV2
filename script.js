
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

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        alert("Menu Coming Soon");

    });

}
const pass = document.getElementById("password");

const eye = document.querySelector(".password-group .right-icon img");

eye.onclick = function () {
    if (pass.type === "password") {
        pass.type = "text";
        eye.src = "images/eye-off.svg";
    } else {
        pass.type = "password";
        eye.src = "images/eye.svg";
    }
};
// HOME → LOGIN

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        document.body.classList.add("login-mode");

        window.scrollTo(0, 0);

    });
}
