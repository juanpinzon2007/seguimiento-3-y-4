let continuar = true;

while (continuar) {
    let genero = prompt("Introduce tu género (femenino/masculino):").toLowerCase();
    let edad = parseInt(prompt("Introduce tu edad:"));

    while ((genero !== "femenino" && genero !== "masculino") || isNaN(edad)) {
        alert("Por favor, ingresa un género válido (femenino/masculino) y una edad válida.");
        genero = prompt("Introduce tu género (femenino/masculino):").toLowerCase();
        edad = parseInt(prompt("Introduce tu edad:"));
    }

    let ayuda;

    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        } else {
            ayuda = 0;
        }
    } else {
        ayuda = 40000;
    }

    alert("El valor de ayuda mensual es: $" + ayuda);

    continuar = confirm("¿Quieres realizar otro cálculo? (Aceptar para reiniciar, Cancelar para terminar)");
}

alert("Programa terminado.");
