// Get the form element and listen for form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;

    // Simple validation checks
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!isValidPhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (comments.trim() === "") {
        alert("Please enter your comments.");
        return;
    }

    // If all validation checks pass, you can submit the form or perform other actions.
    // In this example, we'll simply show an alert indicating successful submission.
    alert("Form submitted successfully!");
});

// Function to validate email
function isValidEmail(email) {
    // You can use a regular expression or other validation methods here
    return /\S+@\S+\.\S+/.test(email);
}

// Function to validate phone number (basic validation for demonstration)
function isValidPhone(phone) {
    // Check if it's a valid phone number (you can customize this as needed)
    return /^\d{10}$/.test(phone);
}
