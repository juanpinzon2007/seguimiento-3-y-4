let continuar = true;

while (continuar) {
    let operador;
    
    while (operador !== "Claro" && operador !== "Tigo" && operador !== "Movistar") {
        operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
    }

    let minutos;

    while (!(minutos >= 0)) {
        minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    }

    let cargoFijo, valorMinuto, paqueteDatos;

    if (operador === "Tigo") {
        cargoFijo = 45000;
        valorMinuto = 200;
        paqueteDatos = 12000;
    } else if (operador === "Claro") {
        cargoFijo = 30000;
        valorMinuto = 100;
        paqueteDatos = 18000;
    } else {
        cargoFijo = 40000;
        valorMinuto = 250;
        paqueteDatos = 8000;
    }

    let total = cargoFijo + (minutos * valorMinuto) + paqueteDatos;

    alert("Operador: " + operador + "\nCargo fijo: $" + cargoFijo + "\nMinutos internacionales: $" + (minutos * valorMinuto) + "\nPaquete de datos: $" + paqueteDatos + "\nTotal a pagar: $" + total);

    continuar = confirm("¿Desea realizar otra consulta?");
}
