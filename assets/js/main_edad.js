function edad() {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let edadInput = parseFloat(document.getElementById('edad').value); // Parsea la edad a un número flotante
    
    let años;

    console.log(tipo)

    if (tipo === 'perro') {
        años = 16 * Math.log(edadInput) + 31;
    } else if (tipo === 'gato') {
        if (edadInput >= 6) {
            años = (edadInput - 6) + 40;
        } else {
            años = (edadInput * 19) / 3;
        }
    }

    document.getElementById('heading').innerHTML = 'La edad de ' + nombre + ' es'; // Agrega un espacio después de "de"
    if (años !== undefined) {
        document.getElementById('agePet').innerHTML = años.toFixed(1); // Utiliza toFixed en la variable años si está definida
    } else {
        document.getElementById('agepet').innerHTML = 'No se puede calcular la edad.'; // Maneja el caso donde años no está definida
    }

    if (tipo === 'perro'){
        imgchange.src = "assets/img/perro.webp"
    }else if (tipo === 'gato'){
        imgchange.src = "assets/img/cat.png"
    }
}

function reload() {
    window.location.reload()
}



