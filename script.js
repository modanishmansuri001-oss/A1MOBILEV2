// ===============================
// A1 REWARDS PAGE SWITCH
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const homePage = document.getElementById("homePage");
    const loginPage = document.getElementById("loginPage");
    const loginBtn = document.getElementById("loginBtn");
    const menuBtn = document.querySelector("#loginPage .menu-btn");

    // HOME PAGE
    function showHome() {

        if (!homePage || !loginPage) return;

        document.body.classList.remove("login-mode");
        document.body.classList.add("home-mode");

        homePage.style.display = "block";
        loginPage.style.display = "none";

        window.scrollTo(0, 0);
    }

    // LOGIN PAGE
    function showLogin() {

        if (!homePage || !loginPage) return;

        document.body.classList.remove("home-mode");
        document.body.classList.add("login-mode");

        homePage.style.display = "none";
        loginPage.style.display = "block";

        window.scrollTo(0, 0);
    }

    // LOGIN BUTTON
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {

            e.preventDefault();
            showLogin();

        });
    }

    // LOGIN PAGE MENU = HOME
    if (menuBtn) {
        menuBtn.addEventListener("click", function (e) {

            e.preventDefault();
            showHome();

        });
    }

    // FIRST LOAD = HOME
    showHome();

});
