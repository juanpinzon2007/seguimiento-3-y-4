let continuar = true;

do {
    let copias;

    do {
        copias = parseInt(prompt("Ingrese la cantidad de copias a imprimir:"));
    } while (!(copias > 0));

    let precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120;
    let total = copias * precio;

    alert("Precio por copia: $" + precio + "\nPrecio total: $" + total);

    continuar = confirm("¿Quieres realizar otro cálculo?");
} while (continuar);
