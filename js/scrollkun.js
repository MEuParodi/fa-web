var textMenu = document.getElementById("textMenu");
var isDragging = false;
var textContainer = document.getElementById("scrollContainer");
let containerTop = 0;

function pauseAnimation() {
  // Pausa la animación cuando se hace clic en el texto
}

function startDrag(event) {
  // Comienza a arrastrar el texto cuando se presiona el botón del mouse
  textMenu.classList.add("paused");

  isDragging = true;
  textMenu.classList.add("dragging");
  const containerRect = textContainer.getBoundingClientRect();
  containerTop = containerRect.top + window.scrollY;
  const textMenuRect = textMenu.getBoundingClientRect();
  textMenuTop = textMenuRect.top + window.scrollY - containerTop - textMenu.offsetHeight;
  clickOffset = event.clientY - textMenuRect.top;
}

function stopDrag() {
  // Detiene el arrastre del texto cuando se suelta el botón del mouse
  textMenu.classList.remove("paused");

  isDragging = false;
  textMenu.classList.remove("dragging");
  
}

function moveText(event) {
  // Mueve el texto mientras se arrastra con el botón del mouse presionado
  if (isDragging) {
    const y = event.clientY - containerTop;
    const newY = y - textMenuTop + clickOffset;
    textMenu.style.transform = `translateY(${newY -400}px)`;
  }
}

//textMenu.addEventListener("click", pauseAnimation);
textMenu.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);
document.addEventListener("mousemove", moveText);