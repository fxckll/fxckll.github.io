document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error");
            errorElement.textContent = message;
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error")) {
            errorElement.remove();
        }
    }

    function validateEmail(input) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            showError(input, "Por favor, introduce un correo electrónico válido.");
            input.classList.add("invalid");
        } else {
            clearError(input);
            input.classList.remove("invalid");
        }
    }

    function validatePasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, "Las contraseñas no coinciden.");
            confirmPasswordInput.classList.add("invalid");
        } else {
            clearError(confirmPasswordInput);
            confirmPasswordInput.classList.remove("invalid");
        }
    }

    function validateRequired(input, message) {
        if (input.value.trim() === "") {
            showError(input, message);
            input.classList.add("invalid");
        } else {
            clearError(input);
            input.classList.remove("invalid");
        }
    }

    emailInput.addEventListener("input", () => validateEmail(emailInput));
    confirmPasswordInput.addEventListener("input", validatePasswordMatch);

    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener("input", () => validateRequired(input, `El campo ${input.previousElementSibling.textContent} es obligatorio.`));
    });


    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        validateRequired(usernameInput, "El nombre de usuario es obligatorio.");
        validateEmail(emailInput);
        validateRequired(passwordInput, "La contraseña es obligatoria.");
        validatePasswordMatch();
    
        const invalidFields = form.querySelectorAll(".invalid");
        const isValid = invalidFields.length === 0;
    
        if (isValid) {
 
            const userData = {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };
            localStorage.setItem("userData", JSON.stringify(userData));
    
            alert("Registro exitoso");
            window.location.href = "login.html"; 
        }
    });
});


