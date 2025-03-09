let continuar = true;

while (continuar) {
    
    let tipoLavadora = parseInt(prompt("Introduce el tipo de lavadora (1 para grande, 2 para pequeña):"));

    
    while (tipoLavadora !== 1 && tipoLavadora !== 2) {
        alert("Tipo de lavadora no válido. Debes ingresar 1 para grande o 2 para pequeña.");
        tipoLavadora = parseInt(prompt("Introduce el tipo de lavadora (1 para grande, 2 para pequeña):"));
    }

    
    let cantidad = parseInt(prompt("Introduce la cantidad de lavadoras alquiladas:"));

    
    let horas = parseInt(prompt("Introduce las horas de alquiler:"));

    
    let costoPorHora;
    if (tipoLavadora === 1) {
        costoPorHora = 4000;  
    } else {
        costoPorHora = 3000;  
    }

    
    let costoBase = costoPorHora * horas * cantidad;

    
    if (cantidad > 3) {
        costoBase -= costoBase * 0.03;  
    }

   
    alert("El costo total a pagar es: $" + costoBase.toFixed(2));

    
    continuar = confirm("¿Quieres realizar otro cálculo? (Aceptar para reiniciar, Cancelar para terminar)");
}

alert("Programa terminado.");
