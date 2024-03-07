function verificarTributacion() {
    // Obtener los valores de edad e ingresos desde los campos de entrada
    var edad = document.getElementById('edad').value;
    var ingresos = document.getElementById('ingresos').value;

    // Verificar si se cumplen las condiciones para tributar
    if (edad >= 18 && ingresos >= 5000) {
        mostrarResultado("¡Debe tributar!");
    } else {
        mostrarResultado("No tiene que tributar.");
    }
}

function mostrarResultado(mensaje) {
    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').textContent = mensaje;
}