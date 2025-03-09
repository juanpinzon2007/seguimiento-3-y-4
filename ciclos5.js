let continuar = true;

while (continuar) {
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));
    let numero3 = parseFloat(prompt("Introduce el tercer número:"));

    while (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, ingresa solo números válidos.");
        numero1 = parseFloat(prompt("Introduce el primer número:"));
        numero2 = parseFloat(prompt("Introduce el segundo número:"));
        numero3 = parseFloat(prompt("Introduce el tercer número:"));
    }

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    alert("El número mayor es: " + mayor);

    continuar = confirm("¿Quieres realizar otro cálculo? (Aceptar para reiniciar, Cancelar para terminar)");
}

alert("Programa terminado.");
