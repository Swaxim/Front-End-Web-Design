const nameInput = document.getElementById("name");

const savedName = localStorage.getItem("contactName");

if (savedName) {
    nameInput.value = savedName;
}


const savedEmail = sessionStorage.getItem("contactEmail");
const savedSubject = sessionStorage.getItem("contactSubject");
const savedMessage = sessionStorage.getItem("contactMessage");

if (savedEmail) {
    document.getElementById("email").value = savedEmail;
}

if (savedSubject) {
    document.getElementById("subject").value = savedSubject;
}

if (savedMessage) {
    document.getElementById("message").value = savedMessage;
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("input", function () {

        sessionStorage.setItem(
            "contactName",
            document.getElementById("name").value
        );

        sessionStorage.setItem(
            "contactEmail",
            document.getElementById("email").value
        );

        sessionStorage.setItem(
            "contactSubject",
            document.getElementById("subject").value
        );

        sessionStorage.setItem(
            "contactMessage",
            document.getElementById("message").value
        );
    });


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        localStorage.setItem("contactName", name);

        document.cookie = "contactName=" + encodeURIComponent(name) + "; path=/";
        document.cookie = "contactEmail=" + encodeURIComponent(email) + "; path=/";
        document.cookie = "contactSubject=" + encodeURIComponent(subject) + "; path=/";
        document.cookie = "contactMessage=" + encodeURIComponent(message) + "; path=/";

        alert("Your message has been saved successfully!");

        contactForm.reset();

        nameInput.value = name;

        sessionStorage.removeItem("contactName");
        sessionStorage.removeItem("contactEmail");
        sessionStorage.removeItem("contactSubject");
        sessionStorage.removeItem("contactMessage");
    });
}