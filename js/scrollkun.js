// Obtener el elemento del texto
var miTexto = document.getElementById("miTexto");

// Variables para almacenar la posición del mouse
var mouseX;
var mouseY;

// Agregar eventos al elemento del texto
miTexto.addEventListener("mousedown", function(e) {
      miTexto.style.animationPlayState = "paused";

    // Obtener la posición del mouse
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Agregar evento de movimiento de mouse
    document.addEventListener("mousemove", moverTexto);
});

document.addEventListener("mouseup", function() {
    // Reanudar la animación
    miTexto.style.animationPlayState = "running";

    document.removeEventListener("mousemove", moverTexto);
});

// Función para mover el texto
function moverTexto(e) {
    // Calcular la diferencia de posición del mouse
  console.log("mouse down")

    // var diferenciaX = e.clientX - mouseX;
    var diferenciaY = e.clientY - mouseY;

    // Aplicar la diferencia de posición al elemento del texto
    miTexto.style.transform = "translateY(" + diferenciaY + "px)";
}

// Agregar evento de soltado de mouse
document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", moverTexto);
});