let continuar = true;

while (continuar) {
    
    let fisica = parseFloat(prompt("Introduce la calificación de Física (0-10):"));
    let quimica = parseFloat(prompt("Introduce la calificación de Química (0-10):"));
    let biologia = parseFloat(prompt("Introduce la calificación de Biología (0-10):"));
    let matematicas = parseFloat(prompt("Introduce la calificación de Matemáticas (0-10):"));
    let informatica = parseFloat(prompt("Introduce la calificación de Informática (0-10):"));

    while (fisica < 0 || fisica > 10 || quimica < 0 || quimica > 10 || biologia < 0 || biologia > 10 || matematicas < 0 || matematicas > 10 || informatica < 0 || informatica > 10) {
        alert("Las calificaciones deben estar entre 0 y 10.");
        fisica = parseFloat(prompt("Introduce la calificación de Física (0-10):"));
        quimica = parseFloat(prompt("Introduce la calificación de Química (0-10):"));
        biologia = parseFloat(prompt("Introduce la calificación de Biología (0-10):"));
        matematicas = parseFloat(prompt("Introduce la calificación de Matemáticas (0-10):"));
        informatica = parseFloat(prompt("Introduce la calificación de Informática (0-10):"));
    }

 
    let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
    let porcentajeFinal = (sumaCalificaciones / 50) * 100;

   
    let calificacionCualitativa;
    if (porcentajeFinal < 60) {
        calificacionCualitativa = "Mala";
    } else if (porcentajeFinal <= 80) {
        calificacionCualitativa = "Buena";
    } else {
        calificacionCualitativa = "Excelente";
    }

    
    alert("Tu porcentaje final es: " + porcentajeFinal.toFixed(2) + "%");
    alert("Tu calificación cualitativa es: " + calificacionCualitativa);


    continuar = confirm("¿Quieres realizar otro cálculo? (Aceptar para reiniciar, Cancelar para terminar)");
}

alert("Programa terminado.");
