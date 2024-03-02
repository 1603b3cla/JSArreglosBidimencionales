// Almacenar la contraseña en una variable
const contraseñaGuardada = "miContraseña123";

// Solicitar al usuario que ingrese la contraseña
const contraseñaIngresada = prompt("Por favor, ingrese su contraseña:");

// Verificar si la contraseña ingresada coincide con la almacenada
if (contraseñaIngresada === contraseñaGuardada) {
    console.log("¡Contraseña correcta! Acceso permitido.");
} else {
    console.log("Contraseña incorrecta. Acceso denegado.");
}