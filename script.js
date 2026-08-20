/* ==========================================
   A1 REWARDS — PAGE SWITCH
========================================== */

const reveals = document.querySelectorAll(".reveal");
const staggerItems = document.querySelectorAll(".stagger");

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
            section.classList.add("active");
        }
    });
}

/* Stagger items visible + animation */
window.addEventListener("load", () => {

    staggerItems.forEach((item, index) => {

        setTimeout(() => {
            item.classList.add("show");
        }, index * 180);

    });

    revealSections();
});

window.addEventListener("scroll", revealSections);


/* ==========================================
   PAGE ELEMENTS
========================================== */

const homePage = document.getElementById("homePage");
const loginPage = document.getElementById("loginPage");

const loginBtn = document.getElementById("loginBtn");
const menuBtn = document.getElementById("menuButton");


/* ==========================================
   HOME → LOGIN
========================================== */

function showLogin() {

    if (!homePage || !loginPage) return;

    document.body.classList.remove("home-mode");
    document.body.classList.add("login-mode");

    window.scrollTo(0, 0);

}


/* ==========================================
   LOGIN → HOME
========================================== */

function showHome() {

    if (!homePage || !loginPage) return;

    document.body.classList.remove("login-mode");
    document.body.classList.add("home-mode");

    window.scrollTo(0, 0);

    revealSections();

}


/* ==========================================
   LOGIN BUTTON
========================================== */

if (loginBtn) {

    loginBtn.addEventListener("click", function (e) {

        e.preventDefault();

        showLogin();

    });

}


/* ==========================================
   HOME MENU
========================================== */

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        alert("Menu Coming Soon");

    });

}


/* ==========================================
   LOGIN PAGE MENU → HOME
========================================== */

const loginMenuBtn =
    document.querySelector("#loginPage .menu-btn");

if (loginMenuBtn) {

    loginMenuBtn.addEventListener("click", function (e) {

        e.preventDefault();

        showHome();

    });

}


/* ==========================================
   PASSWORD EYE
========================================== */

const pass = document.getElementById("password");

const eye =
    document.querySelector(".password-group .right-icon img");

if (pass && eye) {

    eye.addEventListener("click", function () {

        if (pass.type === "password") {

            pass.type = "text";
            eye.src = "images/eye-off.svg";

        } else {

            pass.type = "password";
            eye.src = "images/eye.svg";

        }

    });

}


/* ==========================================
   LOGIN PAGE REGISTER BUTTON
========================================== */

const loginRegisterBtn =
    document.querySelector("#loginPage .register-btn");

if (loginRegisterBtn) {

    loginRegisterBtn.addEventListener("click", function () {

        alert("Register page coming soon");

    });

}


/* ==========================================
   START HOME
========================================== */

showHome();
