function calcularCostoCopias(cantidad) {
    let precioPorCopia;
    
    if (cantidad <= 499) {
        precioPorCopia = 120;
    } else if (cantidad <= 749) {
        precioPorCopia = 100;
    } else if (cantidad <= 999) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }
    
    return cantidad * precioPorCopia;
}

function solicitarCopias() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de copias a imprimir:"));
    let total = calcularCostoCopias(cantidad);
    alert(`Precio por copia: $${total / cantidad}\nCosto total: $${total}`);
}

solicitarCopias();
