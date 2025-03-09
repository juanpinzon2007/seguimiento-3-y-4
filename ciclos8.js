let continuar = true;

while (continuar) {
    let angulo1, angulo2, angulo3;

    while (!(angulo1 > 0 && angulo2 > 0 && angulo3 > 0)) {
        angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
        angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
        angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));
    }

    let valido = angulo1 + angulo2 + angulo3 === 180;

    alert(valido ? "El triángulo es válido." : "El triángulo no es válido.");

    continuar = confirm("¿Quieres realizar otra verificación?");
}
