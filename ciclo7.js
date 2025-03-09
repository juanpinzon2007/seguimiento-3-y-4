let continuar = true;

while (continuar) {
    let dias = parseInt(prompt("Ingrese la cantidad de días (15, 30 o 90):"));

    while (![15, 30, 90].includes(dias) || isNaN(dias)) {
        dias = parseInt(prompt("Ingrese la cantidad de días (15, 30 o 90):"));
    }

    let costo = dias === 15 ? 18000 : dias === 30 ? 35000 : 86000;

    alert("El costo de la mensualidad es: $" + costo);

    continuar = confirm("¿Quieres realizar otro cálculo?");
}
