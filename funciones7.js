function calcularCosto(dias) {
    let costo = 0;
    
    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000;
    } else if (dias === 90) {
        costo = 86000;
    } else {
        return "Opción no válida. Ingrese 15, 30 o 90 días.";
    }
    
    return `El costo de la mensualidad por ${dias} días es: $${costo}`;
}

function solicitarDias() {
    let dias = parseInt(prompt("Ingrese la cantidad de días (15, 30, 90):"));
    
    if (isNaN(dias)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    
    let mensaje = calcularCosto(dias);
    alert(mensaje);
}

solicitarDias();
