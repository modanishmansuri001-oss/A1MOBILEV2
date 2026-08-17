
// =====================================================
// 01. HOME → LOGIN PAGE
// =====================================================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        document.body.classList.remove("home-mode");
        document.body.classList.add("login-mode");

        window.scrollTo(0, 0);

    });
}


// =====================================================
// 02. LOGIN → HOME PAGE
// =====================================================

const menuBtn = document.querySelector("#loginPage .menu-btn");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {

        document.body.classList.remove("login-mode");
        document.body.classList.add("home-mode");

        window.scrollTo(0, 0);

    });
}
