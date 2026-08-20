function createAccount() {

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const role = document.querySelector(
        'input[name="role"]:checked'
    ).value;

    alert(
        "Account created successfully!\n\n" +
        "Name: " + name +
        "\nRole: " + role
    );

    // Return to login page
    window.location.href = "index.html";
}