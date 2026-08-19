function setCookie(name, value, days) {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (days * 24 * 60 * 60 * 1000));

    document.cookie =
        name + "=" + encodeURIComponent(value) +
        "; expires=" + expiryDate.toUTCString() +
        "; path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieParts = decodedCookie.split(";");

    for (let i = 0; i < cookieParts.length; i++) {
        let cookie = cookieParts[i].trim();

        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length);
        }
    }

    return "";
}

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

    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");

    const cookiePreference = getCookie("cookieConsent");

    if (cookieConsent) {
        if (cookiePreference === "accepted" || cookiePreference === "declined") {
            cookieConsent.style.display = "none";
        } else {
            cookieConsent.style.display = "block";
        }
    }

    if (acceptCookies) {
        acceptCookies.addEventListener("click", function () {
            setCookie("cookieConsent", "accepted", 365);
            cookieConsent.style.display = "none";
        });
    }

    if (declineCookies) {
        declineCookies.addEventListener("click", function () {
            setCookie("cookieConsent", "declined", 365);
            cookieConsent.style.display = "none";
        });
    }

    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = getCookie("themePreference");

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

            const isLightTheme =
                document.body.classList.toggle("light-theme");

            if (isLightTheme) {
                setCookie("themePreference", "light", 365);
                themeToggle.textContent = "Dark Theme";
            } else {
                setCookie("themePreference", "dark", 365);
                themeToggle.textContent = "Light Theme";
            }

        });
    }

});