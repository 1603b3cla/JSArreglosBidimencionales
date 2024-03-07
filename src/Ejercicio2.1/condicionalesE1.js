// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Definir la contraseña
    const contraseñaGuardada = "miContraseñaSecreta";

    // Pedir al usuario que ingrese la contraseña
    const contraseñaIngresada = prompt("Ingrese la contraseña:");

    // Verificar si la contraseña ingresada coincide con la guardada
    if (contraseñaIngresada === contraseñaGuardada) {
        alert("Contraseña correcta. ¡Bienvenido!");
    } else {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
});