
let continuar = true;

while (continuar) {
   
    let numero = parseInt(prompt("Introduce un número:"));


    while (numero !== 0) {
        if (numero % 2 === 0) {
            alert("El número " + numero + " es par.");
        } else {
            alert("El número " + numero + " es impar.");
        }

        // Pedir otro número para continuar o 0 para salir
        numero = parseInt(prompt("Introduce otro número o 0 para salir:"));
    }

    continuar = confirm("¿Quieres reiniciar el programa? (Aceptar para reiniciar, Cancelar para terminar)");
}

alert("Programa terminado.");
