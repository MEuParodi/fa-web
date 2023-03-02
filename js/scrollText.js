const scrollContainer = document.getElementById('scrollContainer');
const textMenu = document.getElementById('textMenu');

// Variables para guardar la posición del mouse y la posición del texto al hacer mousedown
let mouseDown = false;
let lastY = 0;
let lastTop = 0;

// Desactivar la animación al hacer mousedown en el texto
textMenu.addEventListener('mousedown', function(e) {
  textMenu.classList.add("paused");

  textMenu.classList.add("dragging");

  mouseDown = true;
  lastY = e.clientY;
  lastTop = parseInt(textMenu.style.top) || 0;
  textMenu.style.animation = 'none';
});

// Mover el texto al arrastrar el mouse
scrollContainer.addEventListener('mousemove', function(e) {
  if (mouseDown) {
    const diffY = e.clientY - lastY;
    const newTop = lastTop + diffY;
    textMenu.style.top = newTop + 'px';
  }
});

// Retomar la animación al soltar el mouse
scrollContainer.addEventListener('mouseup', function(e) {
  textMenu.classList.remove("paused");

  textMenu.classList.remove("dragging");
  mouseDown = false;
  textMenu.style = '';
});
