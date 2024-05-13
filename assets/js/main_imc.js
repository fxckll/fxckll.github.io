function bmi() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    let bmi = ((peso/altura**2) * 703)
    
    document.getElementById('heading').innerHTML = 'Tu BMI es :'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

    if (bmi <= 18.5){
        document.getElementById('message').innerHTML = 'TIENES UN BAJO PESO'
    } else if (bmi >= 18.5 && bmi <= 24.9){
        document.getElementById('message').innerHTML = 'Tienes un peso normal'
    } else if (bmi >= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML = 'Estas un poco pasado de peso'
    }else {
        document.getElementById('message').innerHTML = 'TIENES SOBRE PESO'
    }

}

function reload() {
    window.location.reload()
}