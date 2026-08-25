function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        return false;
    }

    return true;
}

function sendMessage() {
    if (validateForm()) {
        alert("Your message has been sent successfully!");
    } else {
        alert("Please fill in all required fields.");
    }
}