function calcularRendimiento() {
    // Obtener la puntuación ingresada por el usuario
    const puntuacion = parseFloat(document.getElementById('puntuacion').value);

    // Definir los niveles y las correspondientes cantidades de dinero
    const niveles = {
        'Inaceptable': 0.0,
        'Aceptable': 0.4,
        'Meritorio': 0.6
    };

    // Determinar el nivel de rendimiento
    let nivel = '';
    for (const [nombre, valor] of Object.entries(niveles)) {
        if (puntuacion >= valor) {
            nivel = nombre;
        }
    }

    // Calcular la cantidad de dinero
    const cantidadDinero = puntuacion * 2000;

    // Mostrar el resultado al usuario
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Nivel de rendimiento: ${nivel}<br>Cantidad de dinero: $${cantidadDinero.toFixed(2)}`;
}