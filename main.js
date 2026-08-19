document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = sessionStorage.getItem("loggedIn");
    const username = sessionStorage.getItem("username");

    const loginButton = document.getElementById("loginButton");
    const userArea = document.getElementById("userArea");
    const welcomeUser = document.getElementById("welcomeUser");
    const logoutButton = document.getElementById("logoutButton");

    if (loggedIn === "true" && username) {
        if (loginButton) {
            loginButton.style.display = "none";
        }

        if (userArea) {
            userArea.style.display = "flex";
        }

        if (welcomeUser) {
            welcomeUser.textContent = "Welcome, " + username;
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            sessionStorage.removeItem("loggedIn");
            sessionStorage.removeItem("username");

            window.location.href = "home.html";
        });
    }

    const cookieConsent = document.querySelector(".cookie-consent") || document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");

    const cookiePreference = localStorage.getItem("cookieConsent");

    if (cookieConsent) {
        if (cookiePreference === "accepted" || cookiePreference === "declined") {
            cookieConsent.style.display = "none";
        } else {
            cookieConsent.style.display = "block";
        }
    }

    if (acceptCookies) {
        acceptCookies.addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "accepted");
            if (cookieConsent) cookieConsent.style.display = "none";
        });
    }

    if (declineCookies) {
        declineCookies.addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "declined");
            if (cookieConsent) cookieConsent.style.display = "none";
        });
    }

    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("themePreference");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");

        if (themeToggle) {
            themeToggle.textContent = "Dark Theme";
        }
    } else {
        document.body.classList.remove("light-theme");

        if (themeToggle) {
            themeToggle.textContent = "Light Theme";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const isLightTheme = document.body.classList.toggle("light-theme");

            if (isLightTheme) {
                localStorage.setItem("themePreference", "light");
                themeToggle.textContent = "Dark Theme";
            } else {
                localStorage.setItem("themePreference", "dark");
                themeToggle.textContent = "Light Theme";
            }
        });
    }

    const tourneyRows = document.querySelectorAll('.list-row-item');
    tourneyRows.forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

            const panel = row.querySelector('.tourney-details-panel');
            if (panel) {
                const isVisible = panel.style.display === 'block';
                panel.style.display = isVisible ? 'none' : 'block';
            }
        });
    });
});