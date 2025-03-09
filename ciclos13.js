let continuar = true;

while (continuar) {
    let tamaño;

    while (tamaño !== "pequeño" && tamaño !== "grande") {
        tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
    }

    let precioBase = tamaño === "pequeño" ? 6000 : 12000;
    let precioIngredientes = 0;

    let tocineta;
    while (tocineta !== "si" && tocineta !== "no") {
        tocineta = prompt("¿Desea agregar tocineta? (si/no):");
    }
    if (tocineta === "si") precioIngredientes += 3000;

    let jalapeño;
    while (jalapeño !== "si" && jalapeño !== "no") {
        jalapeño = prompt("¿Desea agregar jalapeño? (si/no):");
    }

    let pavo;
    while (pavo !== "si" && pavo !== "no") {
        pavo = prompt("¿Desea agregar pavo? (si/no):");
    }
    if (pavo === "si") precioIngredientes += 3000;

    let queso;
    while (queso !== "si" && queso !== "no") {
        queso = prompt("¿Desea agregar queso? (si/no):");
    }
    if (queso === "si") precioIngredientes += 2500;

    let total = precioBase + precioIngredientes;

    alert("Tamaño: " + tamaño + "\nIngredientes adicionales: $" + precioIngredientes + "\nTotal a pagar: $" + total);

    continuar = confirm("¿Desea realizar otro pedido?");
}
