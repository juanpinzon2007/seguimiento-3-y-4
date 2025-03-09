function calcularCostoOperador(operador, minutos) {
    let tarifas = {
        "Tigo": { cargoFijo: 45000, minuto: 200, paqueteDatos: 12000 },
        "Claro": { cargoFijo: 30000, minuto: 100, paqueteDatos: 18000 },
        "Movistar": { cargoFijo: 40000, minuto: 250, paqueteDatos: 8000 }
    };
    
    if (!tarifas[operador]) {
        return "Operador no válido";
    }
    
    let costoTotal = tarifas[operador].cargoFijo + (minutos * tarifas[operador].minuto) + tarifas[operador].paqueteDatos;
    return `El costo total con ${operador} por ${minutos} minutos es: $${costoTotal}`;
}

function solicitarDatos() {
    let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):");
    let minutos = parseInt(prompt("Ingrese los minutos internacionales consumidos:"));
    let mensaje = calcularCostoOperador(operador, minutos);
    alert(mensaje);
}

solicitarDatos();
