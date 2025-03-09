function calcularCosto(tipoLavadora, cantidad, horas) {
    let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
    let costoTotal = cantidad * horas * costoPorHora;
    
    if (cantidad > 3) {
        costoTotal *= 0.97;
    }
    
    return `Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal.toFixed(2)}.`;
}

function solicitarDatos() {
    let tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
    let horas = parseInt(prompt("Ingrese las horas de alquiler:"));
    
    if ((tipoLavadora !== 1 && tipoLavadora !== 2) || isNaN(cantidad) || isNaN(horas) || cantidad <= 0 || horas <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }
    
    let mensaje = calcularCosto(tipoLavadora, cantidad, horas);
    alert(mensaje);
}

solicitarDatos();
