document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("loginUsername");
    const passwordInput = document.getElementById("loginPassword");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const savedUserData = JSON.parse(localStorage.getItem("userData"));

        if (savedUserData) {
            const { username, password } = savedUserData;

            if (usernameInput.value === username && passwordInput.value === password) {
                alert("Inicio de sesión exitoso");
                window.location.href = "inicio.html";
            } else {
                errorMessage.textContent = "Nombre de usuario o contraseña incorrectos.";
            }
        } else {
            errorMessage.textContent = "No se encontró una cuenta registrada.";
        }
    });
});
