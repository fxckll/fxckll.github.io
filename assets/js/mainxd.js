let recetas=[
    {
        nombre:"pollo asado",
        img: '<img src="assets/img/pollo.jpg" alt="">',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OP2kvXrqaGI?si=Z6wpHSrXZKO7Z3Ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        ingredientes:[
            "300 g de harina de trigo","3 huevos","1 cucharada de aceite de oliva","1 pizca de sal","200 g de carne de cangrejo","100 g de gambas peladas y picadas","1 diente de ajo picado","1 cucharada de perejil fresco picado","2 cucharadas de crema fresca (creme fraiche) o nata","Sal y pimienta al gusto","Aceite de oliva para cocinar","200 ml de nata para cocinar","1 pizca de hebras de azafrán","1/2 taza de caldo de pescado"
        ],

        preparacion:[
            "En un bol grande, tamiza la harina y haz un hueco en el centro.","Añade los huevos, el aceite de oliva y la sal en el centro.","Con un tenedor, mezcla lentamente los ingredientes líquidos con la harina hasta formar una masa.","Amasa durante unos 10 minutos hasta que la masa sea suave y elástica.","Envuelve la masa en film transparente y deja reposar en el refrigerador durante al menos 30 minutos.","En una sartén, calienta un poco de aceite de oliva a fuego medio.","Añade la chalota y el ajo picados, y sofríe hasta que estén transparentes.","Agrega las gambas picadas y cocina hasta que estén rosadas.","Incorpora la carne de cangrejo, el perejil, y la crema fresca.","Cocina durante 2-3 minutos, y sazona con sal y pimienta al gusto."
        ]
    },
    {
        nombre: "pasta carbonara",
        img: '<img src="assets/img/pasta.jpg" alt="">',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3AAdKl1UYZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        ingredientes: [
            "200 g de espaguetis",
            "100 g de panceta",
            "2 huevos",
            "50 g de queso parmesano rallado",
            "2 dientes de ajo",
            "Sal y pimienta al gusto",
            "Aceite de oliva"
        ],
        preparacion: [
            "Cuece los espaguetis en agua con sal hasta que estén al dente.",
            "Mientras, corta la panceta en tiras y fríela en una sartén con un poco de aceite de oliva y los dientes de ajo enteros.",
            "Bate los huevos en un bol y añade el queso parmesano rallado.",
            "Retira los ajos de la sartén y añade los espaguetis escurridos.",
            "Mezcla bien y retira del fuego.",
            "Añade la mezcla de huevos y queso, removiendo rápidamente para que no se cuajen.",
            "Sazona con sal y pimienta al gusto y sirve inmediatamente."
        ]
    },
    {
        nombre: "ensalada cesar",
        img: '<img src="assets/img/ensalada.webp" alt="">',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4UotHl9Ua9k?si=xzj6N4lB-1QhJniV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        ingredientes: [
            "1 lechuga romana",
            "100 g de queso parmesano rallado",
            "200 g de pechuga de pollo",
            "4 rebanadas de pan",
            "2 dientes de ajo",
            "4 filetes de anchoa",
            "1 huevo",
            "1 cucharada de mostaza de Dijon",
            "El jugo de 1 limón",
            "100 ml de aceite de oliva",
            "Sal y pimienta al gusto"
        ],
        preparacion: [
            "Lava y corta la lechuga romana.",
            "Fríe las rebanadas de pan con ajo picado hasta que estén doradas y crujientes.",
            "Cocina la pechuga de pollo a la parrilla y córtala en tiras.",
            "En un bol, mezcla el huevo, la mostaza, el jugo de limón, las anchoas y el aceite de oliva para hacer la salsa César.",
            "Sazona con sal y pimienta al gusto.",
            "Mezcla la lechuga con el pollo, los picatostes y la salsa.",
            "Espolvorea con queso parmesano rallado antes de servir."
        ]
    },
    {
        nombre: "tacos de pescado",
        img: '<img src="assets/img/tacos.jpg" alt="">',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ADoknnhlC5g?si=A1fa7mpSwHDn0RBb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        ingredientes: [
            "400 g de filetes de pescado blanco",
            "1 taza de harina",
            "1 taza de cerveza",
            "1 cucharadita de sal",
            "1 cucharadita de pimentón",
            "Aceite para freír",
            "Tortillas de maíz",
            "Col rallada",
            "1 zanahoria rallada",
            "Salsa de yogur (yogur natural, jugo de limón, sal, pimienta)"
        ],
        preparacion: [
            "Mezcla la harina, la sal y el pimentón en un bol.",
            "Añade la cerveza y mezcla hasta obtener una masa homogénea.",
            "Sumerge los filetes de pescado en la masa y fríelos en aceite caliente hasta que estén dorados y crujientes.",
            "Coloca el pescado frito en las tortillas de maíz.",
            "Añade col rallada, zanahoria y salsa de yogur.",
            "Sirve inmediatamente."
        ]
    }
]

function buscador(){
    const name = document.getElementById('recipeIn').value.toLowerCase();




    let  nombre;
    let  img;
    let  video;
    for ( let i = 0; i < recetas.length; i++){
        if(recetas[i].nombre == name){
            nombre = recetas[i].nombre;
            img = recetas[i].img;
            video = recetas[i].video; //;
            ingredientes = recetas[i].ingredientes;
            preparacion = recetas[i].preparacion;
            break;
        }
    }
    document.getElementById('name_r').innerText= nombre; 
    document.getElementById('ingredient').innerText= 'Ingredientes';
    document.getElementById('prepar').innerText= 'Preparacion';
    document.getElementById('imagen_r').innerHTML= img; 
    document.getElementById('video').innerHTML= video;

    //mostrando los ingredientes
    const lista  = document.getElementById('ingredientes');
    const ul = document.createElement('ul');
    for (let i = 0; i < ingredientes.length; i++) {
        const li = document.createElement('li');
        li.textContent = ingredientes[i]; 
        ul.appendChild(li);
    } 
    lista.appendChild(ul);

    const lista2  = document.getElementById('preparacion');
    const ol = document.createElement('ol');
    for (let i = 0; i < preparacion.length; i++) {
        const li = document.createElement('li');
        li.textContent = preparacion[i]; 
        ol.appendChild(li); 
    } 
    lista2.appendChild(ol);
}