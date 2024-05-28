function pass() {
    var user = document.getElementById('user')
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var texto = document.getElementById('warnings')
    var entrar

    let warnings = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (user.value.length < 5) {
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }

    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es VALIDO <br>'
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }

    if (entrar) {
        texto.innerHTML = warnings
    } else {
        texto.innerHTML = 'Enviado con Exito'
        const data = {
            user: user.value,
            name: name.value,
            email: email.value,
            password: password.value
        }
        console.log(data)
    }
}   