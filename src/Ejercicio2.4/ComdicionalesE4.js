// Función para calcular el precio de la entrada
function calcularPrecioEntrada() {
    let edad = parseInt(document.getElementById("edad").value);
    let precioEntrada;

    if (edad < 4) {
        precioEntrada = 0; // Menores de 4 años entran gratis
    } else if (edad >= 4 && edad <= 18) {
        precioEntrada = 50.00; // Entre 4 y 18 años pagan $50.00
    } else {
        precioEntrada = 100.00; // Mayores de 18 años pagan $100.00
    }

    document.getElementById("resultado").innerHTML = `Precio de la entrada: $${precioEntrada.toFixed(2)}`;
}