const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the form from refreshing the page
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Store the information in cookies
        document.cookie = "contactName=" + encodeURIComponent(name) + "; path=/";
        document.cookie = "contactEmail=" + encodeURIComponent(email) + "; path=/";
        document.cookie = "contactSubject=" + encodeURIComponent(subject) + "; path=/";
        document.cookie = "contactMessage=" + encodeURIComponent(message) + "; path=/";

        // Show confirmation
        alert("Your message has been saved successfully!");

        // Clear the form
        contactForm.reset();
    });
}