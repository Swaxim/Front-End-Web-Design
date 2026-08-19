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

function deleteCookie(name) {
    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");
const rememberUsernameCheckbox = document.getElementById("rememberUsername");
const rememberedUsername = getCookie("rememberedUsername");

if (rememberedUsername) {
    usernameInput.value = rememberedUsername;
    rememberUsernameCheckbox.checked = true;
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        loginMessage.innerHTML =
            '<div class="alert alert-danger">Please enter both username and password.</div>';

        return;
    }

    if (rememberUsernameCheckbox.checked) {
        setCookie("rememberedUsername", username, 30);
    } else {
        deleteCookie("rememberedUsername");
    }
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", username);

    window.location.href = "index.html";
});