const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}


document.addEventListener("DOMContentLoaded", () => {
  const pasos = document.querySelectorAll(".paso");
  const barraAvance = document.querySelector(".progreso-avance");
  let progreso = JSON.parse(localStorage.getItem("progreso")) || 1;

  const actualizarProgreso = () => {

      const porcentaje = ((progreso - 1) / (pasos.length - 1)) * 100;
      barraAvance.style.width = `${porcentaje}%`;


      pasos.forEach((paso, index) => {
          if (index < progreso) {
              paso.classList.add("completado");
          } else {
              paso.classList.remove("completado");
          }
      });
  };


  pasos.forEach((paso, index) => {
      paso.addEventListener("click", () => {
          progreso = index + 1;
          localStorage.setItem("progreso", JSON.stringify(progreso));
          actualizarProgreso();
      });
  });

 
  window.reiniciarProgreso = () => {
      progreso = 1;
      localStorage.setItem("progreso", JSON.stringify(progreso));
      actualizarProgreso();
  };

  actualizarProgreso();
});
