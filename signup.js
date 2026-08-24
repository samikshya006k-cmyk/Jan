async function createAccount() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please verify and try again.");
        return;
    }

    const roleRadio = document.querySelector('input[name="role"]:checked');
    const role = roleRadio ? roleRadio.value : "citizen";

    const submitBtn = document.querySelector(".signup-btn");
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Verifying & Creating Account...";
    }

    try {
        const response = await JanSetuAPI.signup(name, email, password, role);

        if (response.ok && response.data.access_token) {
            localStorage.setItem("userRole", role);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userName", name);

            alert(
                "✓ Account created successfully!\n\n" +
                "Welcome to JanSetu, " + name + " (" + role.toUpperCase() + ")"
            );

            // Redirect to appropriate dashboard
            if (role === "officer" || role === "admin") {
                window.location.href = "officerdashboard.html";
            } else {
                window.location.href = "citizendashboard.html";
            }
        } else {
            const errorMsg = response.data?.detail || "Registration failed. An account with this email may already exist.";
            alert(errorMsg);
        }
    } catch (error) {
        console.error("Signup network error:", error);
        alert("Connection error while creating account. Please check your network and try again.");
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Create Account →";
        }
    }
}