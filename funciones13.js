function calcularCostoSandwich(tamano, ingredientes) {
    let precios = {
        "pequeño": 6000,
        "grande": 12000,
        "tocineta": 3000,
        "jalapeño": 0,
        "pavo": 3000,
        "queso": 2500
    };
    
    if (!precios[tamano]) {
        return "Tamaño no válido";
    }
    
    let costoTotal = precios[tamano];
    for (let ingrediente of ingredientes) {
        if (precios[ingrediente] !== undefined) {
            costoTotal += precios[ingrediente];
        }
    }
    return `El costo total del sándwich ${tamano} con ingredientes adicionales es: $${costoTotal}`;
}

function solicitarPedido() {
    let tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
    let ingredientes = prompt("Ingrese los ingredientes adicionales separados por comas (tocineta, jalapeño, pavo, queso):")
                        .split(",").map(i => i.trim().toLowerCase());
    let mensaje = calcularCostoSandwich(tamano, ingredientes);
    alert(mensaje);
}

solicitarPedido();
